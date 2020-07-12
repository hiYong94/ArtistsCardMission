### 아티스츠카드(ArtistsCard)
#### 작성자 : 최용권

- 구현 영상
![bandicam-2020-07-12-23-15-18-336](https://user-images.githubusercontent.com/40785404/87248998-85ac7880-c497-11ea-9db3-732dd27d057e.gif)&nbsp;&nbsp;

- 사용 기술
> - Front-End
>   - React.js
> - Back-End
>   - Node.js Express.js
> - Database
>   - MySQL
> - Devops & Utilities
>   - Git, GitHub, AWS Cloud(EC2), Postman, MySQL workbench, putty
> - OS
>   - ⦁windows 10


 - 구현 요구사항
>    1. 로그인 페이지
>        - 회원가입, 로그인, 패스워드 변경
>    2. 음악 편집페이지(올려진 음원데이터 편집)
>        - 음악제목 기준 검색
>        - 음악데이터 삽입
>        - 음원데이터 편집(곡제목, 아티스트이름, 음원수정)
>    3. AWS 인프라 활용


 - API LIST
 >  | 구분 | API 설명 | URL | Method |
 >  | :------------- | :------------- | :------------- | :------------- |
 >  | 회원 | 회원가입 | /api/user | POST |
 >  | 회원 | 회원전체 조회 | /api/user | GET |
 >  | 회원 | 특정회원 조회 | /api/user/:userId | GET |
 >  | 회원 | 로그인 | /api/login | POST |
 >  | 음원 | 음원전체 조회 | /api/music | GET |
 >  | 음원 | 특정음원 조회 | /api/music/:musicId | GET |
 >  | 음원 | 음원 추가 | /api/music | POST |
 >  | 음원 | 음원 제목 기준 검색 | /api/music/search/:trackName | GET |
 >  | 음원 | 음원 수정 | /api/music/:musicId | PUT |


 - 구현 과정
>  |  | 구성 | 내용 | 비고 |
>  | :------------- | :------------- | :------------- | :------------- |
>  | 1 | github 구성 |  | 완료 |
>  | 2 | node.js 구성 |  | 완료 |
>  | 3 | express.js 구성 | MVC 프로젝트 구조화 | 완료 |
>  | 4 | database 연동 | develop localhost 연동<br>npm mysql2 연동 | 완료 |
>  | 5 | 회원조회 | 회원전체 조회 GET /api/user<br>특정회원 조회 GET /api/user/:userId | 완료 |
>  | 6 | 회원가입 | 회원가입 POST /api/user<br>비밀번호 암호화 bcrypt | 완료 |
>  | 7 | 로그인 | 로그인 POST /api/login<br>jsonwebtoken 구현 | 완료 |
>  | 8 | 음원 추가 | 음원추가 POST /api/music<br>npm multer를 활용한 음원 파일 업로드 | 완료 |
>  | 9 | 음원 조회 | 음원전체 조회 GET /api/music<br>특정음원 조회 GET /api/music/:musicId | 완료 |
>  | 10 | 음원 검색 | 음원 제목 기준 검색 GET /api/music/search/name | 완료 |
>  | 11 | 음원 수정 | 음원 수정 PUT /api/music/:musicId | 완료 |
>  | 12 | react.js 구성 |  | 완료 |
>  | 14 | 메인 페이지 |  | 완료 |
>  | 15 | 회원 가입 |  | 완료 |
>  | 16 | 로그인 |  | 완료 |
>  | 17 | 음원 리스트 |  | 완료 |
>  | 18 | 음원 추가 |  | 완료 |
>  | 19 | 음원 제목 검색 |  | 완료 |
>  | 20 | 음원 수정 |  | 완료 |
>  | 21 | aws 구성 | ec2 구성중 react 배포 이슈<br>node 서버 배포 완료 | 미완성 |
>  | 22 | 비밀번호 변경 | nodemailer를 활용한 비밀번호 변경 | 미완성 |
