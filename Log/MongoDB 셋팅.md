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
