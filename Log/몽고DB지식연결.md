전에 배웠던 JDBC 와 DTO / Lombok / MyBatis Mapper 와 어떤식으로 연결할 수 있는가

| Java (Spring/MyBatis)  | Node (Express/Mongoose) | 의미        |
| ---------------------- | ----------------------- | --------- |
| @Data DTO 클래스          | Schema                  | 데이터 구조 정의 |
| Repository / Mapper    | Model                   | DB와 통신    |
| SELECT * FROM          | find(), findOne()       | 조회        |
| INSERT INTO            | create()                | 저장        |
| UPDATE SET             | updateOne()             | 수정        |
| DELETE FROM            | deleteOne()             | 삭제        |
| application.properties | .env + dotenv           | 설정 관리     |
| JDBC 연결                | mongoose.connect        | DB 연결     |



회원가입 / select 구현 예시
도메인 : User(회원)
필드:
email: 이메일
password: 비밀번호(암호화되기 전/후)
name: 이름

회원 가입 (INSERT)
이메일로 회원 한 명 조회 (SELECT)

1-1. JDBC로 구현
```
Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE email = ?");
pstmt.setString(1, email);
ResultSet rs = pstmt.executeQuery();
```
DB랑 직접 연결하기 conn
DriverManager JDBC에서 제공하는 유틸리티 클래스 어떤 DB에 연결하고 관리할지 관리해준다
etConnection(URL, USER, PASSWORD) 어떤 DB 주소, DB계정로그인ID, PASSWORD는 비밀번호 

SQL 명령어 전달하기
conn.prepareStatement(DB에 적용할 SQL문 넣기)
"SELECT * FROM users WHERE email = ?" : users 테이블에서 email 값이 특정 값인 행을 모두 가져와라

명령어에서 받은 값 채우기
pstmt.setString(1, email);
? 자리에 실제 값을 채워 넣는다
setString(1, email) 1-> 몇번쨰 값을 넣을

1-2. MyBatis
SQL을 자바 코드에서 직접 쓰기 귀찮음 그냥 xml에서 모아놓고 관리하자
UserMapper 같은 인터페이스로 DB를 다루게 해주는 라이브러리
```
@Mapper
public interface UserMapper {
    User findByEmail(String email);
    void insertUser(User user);
}
```

```
<select id="findByEmail" parameterType="string" resultType="User">
  SELECT * FROM users WHERE email = #{email}
</select>

<insert id="insertUser" parameterType="User">
  INSERT INTO users(email, password, name)
  VALUES (#{email}, #{password}, #{name})
</insert>

```

1-3. Lombok
필드 정의만 하고, 나머지 getter/setter는 자동으로 만들어주는 도구



2-1. DB 연결 – JDBC ↔ mongoose.connect

Spring Boot가 자동으로 JDBC 연결 잡아준다
Java (JDBC / MyBatis)
// 예시: Spring Boot application.properties
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=hr
spring.datasource.password=hr

Node + Mongoose
```
// server.js
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI) // "mongodb://localhost:27017/mydb" 이런 값
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.error("MongoDB 연결 실패", err));
```
DriverManager.getConnection(...)
↔ mongoose.connect(...)


2-2. DTO / VO ↔ Mongoose Schema
Java + Lombok DTO
```
@Data
public class User {
    private String email;
    private String password;
    private String name;
}
```

Node + Mongoose Schema
```
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});
const User = mongoose.model("User", UserSchema);
```

데이터 구조 틀
Lombok DTO / VO 
Mongoose Schema

User 클래스 ↔ UserSchema
User 객체 ↔ User Model로 만든 document

5. MyBatis Mapper ↔ Mongoose Model

MyBatis Mapper
SQL을 대신 실행해주는 인터페이스
UserMapper.insertUser, UserMapper.findByEmail

Mongoose Model (User)
MongoDB 컬렉션(users 컬렉션)을 다루는 객체
User.create, User.findOne, User.find, User.updateOne

Mapper + Repository + 일부 Service 역할까지 합쳐놓은 게 Mongoose Model 이다