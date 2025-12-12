로그인 하고 세 데이터 베이스를 생성한다
데이터 베이스 생성을 하면 연결할 수 있는 key 값을 주는데 복사 해서 .env에 붙여넣기 하면 된다

만든 후 SECURIY/DATABASE@NETWORK Access 에 들어간다
두개의 파트가 나오는데 Network Access 에서 IP Access List를 선택한다
 최근 IP 주소가 등록되어 있는데 삭제한다

다시 IP 주소를 추가한다
add 누른후 Add IP Access List Entry 라는 창이 뜨는데
아래 ALLOW ACCESS FROM ANYWHERE 를 클릭하면 
Accesss List Entry 0.0.0.0/0 으로 자동 셋팅된다 그걸 저장하고 나오면
Status Active 로 바뀌면 잘 완료된것이다

db.js를 만든다
1. mongoose 불러오기
`import mongoose from "mongoose"`
2. connectDB 함수 생성
`const connectDB = async () = {}`
3. DB 연결 이벤트 등록
4. 환경변수에서 URL 가져오기
5. 프로젝트(DB) 이름 설정
6. 환경변수 검증
7. URL 문자열 정리
8. mongoose.connect 실행
```
try {
    <!-- 3. -->
    mongoose.connection.on("connected", () => {console.log("데이터베이스 연결이 완료되었습니다")})
    <!-- 4 -->
    let mongodbURL = process.env.mongodbURL
    <!-- 5 -->
    const projectName = "resume-builder"
    <!-- 6 -->
    if (!mogodbURL) {
        throw new Error("MongoDB URL 환경변수가 설정되지 않았습니다")
    }
    <!-- 7 -->
    if (mongodbURL.endsWith("/")) {
        mongodbURL = mongodbURL.slice(0, -1)
    }
    <!-- 8 -->
    awite mongoose.connet(`${mongodbURL}/${projectName}`)
}
```

9. 함수 export
`export default connectDB`

