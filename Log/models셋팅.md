1) Mongoose 가져오기
import mongoose from "mongoose";

2) User 스키마 만들기
const UserSchema = new mongoose.Schema({})

스키마를 왜 만드는가?
몽고 DB는 NoSQL 이라서 형식 자유롭다
JSON 형식이라는 틀만 있으면 걍 때려넣을 수 있다고 한다 
그래서 문제다.. 문제의 예를 들면
- 어떤 정보는 email 있을수도 있고 없을 수도 있다 -> 근데 걍 들어간다  -> 나중에 로그인 / 조회 오류가 발생한다
- password도 숫자가 들어가거나 아니면 공백들어가거나 뭐 암튼 그래서 나중에 이것도 오류 발생 위험이 있다
- 데이터 형태가 그지같이 들어갈 수 있다..!

그래서 스키마라는 녀석으로 데이터 규격을 만들어 준다
필드 종류 / 필수 여부 / 중복 금지 / 기본값 / 검증 규칙 이런걸 지정한다

name의 필드를 정의
`name: {type: String, require:true}`
name은 문자열이어야 한다  그리고 required : true 필수적으로 값이 들어가야한다 의미

email 필드 정의
`{email: {type: String, required : true, unique: true}}`
email: 문자열, 필수적으로 값이 들어가야함, 중복 이메일 금지

password 필드 정의
password: {type: String, required: true}

Schema 옵션 지정하기
timestamps: true 
createdAt(언제 생성됐는지), updatedAt(마지막으로 언제 수정됐는지) 자동 생성

Schema 옵션 종류
timestamps → 생성/수정 시간 자동 관리
strict → 스키마 외 필드 차단
versionKey → __v 숨김
toJSON → API 응답 데이터 정리
collection → 실제 컬렉션 이름 제어


3) User 한 명 한 명이 공통으로 사용할 수 있는 함수를 추가 (비밀번호 비교하기)
`UserSchema.methods.comparePassword = function (password) {`
UserSchema.methods.comparePassword[User객체가 가지고 있는 비밀번호 값 ] = function (password) [로그인 시 입력한 값]
그 둘을 비교함

`return bcrypt.compareSync(password, this.password);`
this.password === user.password
DB에 저장된 해시 비밀번호 비교

---
    bcrypt 값 비교 예시
    상황 예시

    ```
    회원가입 때
    password = "1234"
    → bcrypt로 변환
    → "$2a$10$askdfjlasdjfl..."
    → DB에 저장
    ```

    ```
    로그인 때
    입력: "1234"
    DB: "$2a$10$askdfjlasdjfl..."

    비교 방식
    bcrypt.compare("1234", "$2a$10$askdfjlasdjfl...")
    ```

    "1234"를 같은 방식으로 암호화해보고 결과가 DB 값과 같은지 비교
    같으면 true, 다르면 false 비밀번호 원문을 다시 꺼내보는 일은 없음
---

bcrypt.compareSync(...)



