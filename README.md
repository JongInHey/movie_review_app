## 🎬 Movie Review app | 영화 리뷰 앱

## 목적성

- 영화 정보에 대한 내용들을 한눈에 볼 수 있고 영화 검색 통해 원하는 내용들을 빠르게 찾을 수 있습니다. <br> 또한 상세 페이지를 통해 비슷한 영화, 추천 영화, 줄거리, 평점, 러닝타닝, 예고편 보기 등 다양한 정보를 간략하게 빠르게 얻을 수 있게 만들었습니다.

## Stack (사용된 기술)

- React
- javaScript
- node.js
- node-fetch
- html / css
- swiper
- git
- github

## ⌛개발 기간

- 2024.07.26 ~ 2024.08.02

## 📃프로젝트 기획

### 기획

- 영화를 좋아하는데 어떠한 영화에 대한 정보를 얻고자 할 때 개별로 검색을 하거나 현재 상영 중인 영화를 기준으로 찾았었습니다. <br> 그렇기 때문에 여러 영화 예매 앱을 켜보거나 검색을 이용해 번거롭게 검색을 하였었습니다.

- 그래서 이것에 대한 사용자의 편의성을 해결해보고 싶었고 이걸 만들며 사용감의 개선이나 새로운 가치를 얻고 싶었습니다.

* 여러 영화 정보에 대한 내용들을 얻고자 하는 사용자들에게 보다 쉽게 정보를 찾고 내용들을 얻으며 편리하고 간단하게 볼 수 있도록 UIUX와 기능들을 만들어보고 싶었습니다.

### 작업 계획표

|   날짜   | 내용                                                                                                                                                                                                                                                                                                 |
| :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.07.26 | 래퍼런스 리서치 & 초반 프로젝트 가이드라인 & 기획                                                                                                                                                                                                                                                    |
| 24.07.27 | Router 설정 (Header, Home, detail, search, login, signup)<br> 전체 페이지 컴포넌트 구성 / Header & Footer UI & 반응형 구성 <br> Helmet 타이틀 구성 / GlobalStyled (reset, body... , 포인트 컬러, 사이드 간격) & 웹 폰트 설정                                                                         |
| 24.07.28 | 필요한 npm 설치(node-fetch, react-spinners, swiper 등) <br> movie api 설정 (node-fetch 사용) <br> imgUrl 설정 & api 설정 확인 (결과 값 나오는지 확인)                                                                                                                                                |
| 24.07.29 | Loading 컴포넌트 구성<br> Home (mainbanner, movies, category) UI & 반응형 구성 & swiper 설정 및 스타일                                                                                                                                                                                               |
| 24.07.30 | Datail(상세 페이지 / 추천 영화 / 유사한 영화 / 예고편 보러 가기) UI & 반응형 구성 <br> Video (예고편 영상, video Router 설정) 컴포넌트 구성 / Search (영화 및 사람 검색 폼 구성, 에러 메시지 컴포넌트 구성) UI & 반응형 구성 <br> 모바일 전용 헤더 햄버거 메뉴(사이드 메뉴 추가) + Scroll event 추가 |
| 24.07.31 | Login & SignUp (로그인, 회원가입 폼 구성, localstorage에 저장, 로그인 & 회원가입 시 알림 창 구성, 로그인 시 header login -> logout 추가) UI & 반응형 구성 / 404page UI & 반응형 구성 + topBtn (scroll top event btn 추가) <br>아이디 & 비밀번호 찾기 컴포넌트 UI & 반응형 구성                       |
| 24.08.01 | 모바일 반응형 디자인 수정 및 추가 / 코드 리팩토링 <br>버그 및 오류, 기능 추가 및 변경이 있을 시 수정 후 깃 허브에 배포                                                                                                                                                                               |
| 24.08.02 | 유지보수 및 배포 확인 & 기능 점검                                                                                                                                                                                                                                                                    |

## 프로젝트 소개

- Movie Review App(영화 리뷰 앱)

- git Url - https://github.com/JongInHey/movie_review_app

- project url - https://jonginhey.github.io/movie_review_app/

* the movie api를 사용
  - api url : https://developer.themoviedb.org/docs/getting-started

<p>
  <img src="https://private-user-images.githubusercontent.com/91867836/365733202-d38a4fdc-c65c-4f54-a4d2-39b32987daed.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU5MDAxNzEsIm5iZiI6MTcyNTg5OTg3MSwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzMyMDItZDM4YTRmZGMtYzY1Yy00ZjU0LWE0ZDItMzliMzI5ODdkYWVkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA5VDE2Mzc1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc2ZjRjZTQxNWQyMWJlODc3Mjc5Yjg4ZjJkZmI2OWM2Y2ZlNGU2NmY1MTk2NGJlM2Q3MDg5ZDllMjNkZWMxOWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xddzc_7nL55uIqfCJBWBxn9nzTSArkUZzKrqdr-wTbo" alt="home" width="400px" />
  <img src="https://private-user-images.githubusercontent.com/91867836/365733347-f53a737b-ebd3-4ce0-a2b9-f66b5838b940.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU5MDAxNzEsIm5iZiI6MTcyNTg5OTg3MSwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzMzNDctZjUzYTczN2ItZWJkMy00Y2UwLWEyYjktZjY2YjU4MzhiOTQwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA5VDE2Mzc1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg5M2Q5YjY0YWQyODcxYzI5ZTY3MThlM2JiZTdmZDE0ODI3NWZlY2VjOTk3YmUxZWQwNzdlZjJjZjM1NGNlMDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Y35RSM35H1RSRBS-6POJjBs9304ELXOCXW2GhwkaWF4" alt="detail" width="400px" />
  <img src="https://private-user-images.githubusercontent.com/91867836/365733358-6de388ac-cdf0-4870-a377-f2f72c966be9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU5MDAxNzEsIm5iZiI6MTcyNTg5OTg3MSwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzMzNTgtNmRlMzg4YWMtY2RmMC00ODcwLWEzNzctZjJmNzJjOTY2YmU5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA5VDE2Mzc1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM5ZjBhN2MxZTBlNzg1YzhhMTlhMTU2YmNiYjE1ZjY1YjFlODQzMDFmZGUyNGE5ZjQ1YWVmM2Y5MGE0OThlOTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.EXjhzto53lgToWRdDBBqtoVjgNYIt22jbp95S2h1d44" alt="search" width="400px" />
  <img src="https://private-user-images.githubusercontent.com/91867836/365733356-535a7dd4-b476-455c-9ea4-af6de5136c69.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU5MDAxNzEsIm5iZiI6MTcyNTg5OTg3MSwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzMzNTYtNTM1YTdkZDQtYjQ3Ni00NTVjLTllYTQtYWY2ZGU1MTM2YzY5LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA5VDE2Mzc1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU1Mjk1YzhhODhlMzkwNWYzNjI4MTNiZjQxYWU0NjEzNmM2NDA2ZWQxZDFmODRhYTkyN2IxMjYyZWQ5MWJmNmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.BpyeX4_v8UUgHhkfM80JYuGDEwwTy-OFpfACvIsDXLk" alt="login" width="400px" />
  <img src="https://private-user-images.githubusercontent.com/91867836/365733362-e286470f-96fa-4a4f-9e7c-ed2a0ca479aa.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU5MDAxNzEsIm5iZiI6MTcyNTg5OTg3MSwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzMzNjItZTI4NjQ3MGYtOTZmYS00YTRmLTllN2MtZWQyYTBjYTQ3OWFhLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA5VDE2Mzc1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMzMjAwNGFlMzA4YzE0Yzk1NjQ1Y2IyM2EyNmI4NDI2NTI0ZjU4M2ViNzA0YTQxMTA2YjM3ZmFiMDZjYjg2ZTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.rCSpaLEwvnTeU09k8KQ7Zh3dhQsCUIXBT6vZimTj9qk" alt="signup" width="400px" />
</p>

1. 메인 페이지

   - 메인 베너에 상영 중인 영화들을 랜덤 한 값으로 줄거리와 함께 보입니다.

   - 카테고리 클릭 시 카테고리 키워드 별 영화를 추천.

   - 현재 상영 중, 인기, 최고 평점, 개봉 예정 영화들을 Swiper로 구성.

2. 상세 페이지

   - 포스터, 개봉 날짜, 평점, 러닝타임, 장르를 한눈에 볼 수 있습니다.

   - 예고편 보러 가기 버튼을 통해 예고편, 티저 영상들을 볼 수 있습니다.

   - 내가 선택한 영화와 비슷한 영화 또는 장르가 유사한 영화를 추천합니다.

3. 검색 페이지

   - 검색 창에 영화 또는 사람 이름으로 검색 가능.

   - 검색 데이터를 한눈에 보기 쉽게 Grid를 사용하여 포스터 이미지로 보이게 됩니다.

4. 로그인 & 회원가입

   - 로그인 및 회원가입은 규칙에 맞게 입력되어야 하고 그렇지 않다면 메시지를 출력하게 됩니다.

   - 간단한 정보들이 localStorage에 저장되며 헤더 부분에서 로그인 여부를 확인 가능합니다.

   - 로그인 시 다른 기능은 없지만 간단하게 아이디 및 비밀번호 찾기도 가능합니다.

## 프로젝트 하면서 느낀 점

### 프로젝트 진행 중 어려웠던 부분

1. 메인 페이지에 category의 값을 장르 api에서 id와 name 값을 가져와서 map 함수로 나열하고 클릭 시 장르의 id 값을 가져오고 누른 id 값과 같은 장르만 영화가 나열이 되게 만들어야 하는데 그것을 프롭스 값으로 넘겨주고 받는 것이 어려웠습니다.

2. 회원가입 페이지에서 입력한 값을 localstorage로 저장을 해 그 값을 가져와 로그인이 되는 알림 창을 구성하려고 했는데 [object Object]로 저장이 되고 json 형식으로 저장하는 방법을 알고 있지 않았었기에 어려움을 겪었었습니다.

#### 겪은 어려움을 해결한 방법

1. 구글링을 통해 filter / includes를 알게 되었고 api로 가져온 영화를 filter 함수에 매개 변수 movies로 저장하여 movies.filter를 사용해 내가 선택한 장르의 id 값을 받아와 includes를 사용하여 id 값이 포함이 되어있는지 확인 후 포함되어 있으면 filter가 되게 만들었고 그 값이 null 일 때 모든 영화를 반환하는 All 버튼도 만들어서 해결하였습니다.

2. 로컬 스토리지는 문자열만 저장할 수 있기 때문에, 객체 형태의 데이터를 저장할 때는 JSON 형식으로 변환을 해야 하고, 그렇지 않다면 객체나 배열 등의 복합 데이터 구조를 제대로 저장할 수 없는 것을 알게 되었습니다. 그래서 데이터 구조 유지를 위해 JSON.stringify()를 사용해 JSOn 형식으로 저장을 하였고 getItem을 통해 불러올 때에는 JSON.parse를 사용해 다시 객체 형태로 반환하여 값을 이용하여 해결하였습니다.

### 프로젝트를 하면서 알게 된 내용

- `node-fetch`를 통한 api를 가져오는 방법.

* api를 가져올 때에 fetch 뒤의 `.then()` 메서드는 `promise`를 리턴하고 두 개의 콜백 함수를 인수로 받고 하나는 `promise`가 이행했을 때, 다른 하나는 거부했을 때를 위한 콜백 함수인 것을 알게 됨.

* `useEffect`의 `async / await`를 이용한 비동기 작업을 통해 promise형식의 데이터 값을 가져오는 방법을 알게 됨.

- `try~catch`를 사용하여 에러가 생길 것 같은 문제들을 쉽게 처리 가능한 것을 알게 됨.

- `useParms`와 또 다른 더 다양한 url 정보를 가져오는 `useLocation()`에 알게 되었고 URL에 관련된 내용을 `useEffect` 안에 사용하게 되면 대괄호 []인 dependencies(의존)에 변경되는 값을 넣어줘야 하는 것을 알게 됨.

- `fontawesome`보다 더 사용하기 쉬운 `react-icons` 라이브러리가 있는 것도 알게 됨.

- `filter / includes`를 통해 조건에 맞는 요소들로 구성된 새로운 배열로 반환해 필터링 하는 방법을 알게 됨.

- `Math.random / Math.floor` 를 이용해 0 이상 1 미만의 난수를 생성하고 배열의 길이를 곱해서 길이 내에서 임의의 인덱스를 생성한 후 `Math.floor()`를 사용해 버림하여 주어진 숫자와 가거나 작은 정수 중에서 가장 큰 수를 반환하여 정수로 변환하여 랜덤한 인덱스로 사용하며 메인 베너가 랜덤 값으로 바뀌게 하는 방법을 알게 됨.

### 유용하거나 새로 알게 된 플러그인 & 라이브러리

- react-components & react-reset (css)

* react-router-dom(페이지 연결, 내비게이션을 효율적으로 관리 & 사용 가능)

- react-helmey-async (문서의 타이틀, 즉 제목 요소를 바꿔줌)

- react-icons (아이콘)

- react-spinners (로딩 컴포넌트 구성에 대한 엄청난 시간 단축을 해줌)

* swiper (슬라이더 컴포넌트 구성에 도움을 줌)

* Chakra UI (emotion.js 기반의 ui 라이브러리, 많은 컴포넌트들이 있고 커스텀하여 사용할 수 있는 기능이 많음)

* react-player (영상 - iframe보다 쉽게 사용 가능)

### 프로젝트를 진행하면서 반성 및 칭찬 사항

- **반성할 점**

  - api 설정을 한꺼번에 다 해놓은 후에 페이지를 구성하려니 헷갈려서 어떤 값을 넘기고 받아와야 할지 헷갈려서 시간을 조금 잡아먹었습니다. 다음에 프로젝트를 진행할 때에는 받아올 api와 컴포넌트를 구성할 때 우선순위 플랜을 사용하여 진행해 시간을 단축시켜 볼 것입니다.

  - 기능이나 디자인을 깔끔하고 완벽하게 만들려고 하고 하나에 꽂히면 그거에 대해 해결하고 계속 붙잡으려고 하는 경향이 있습니다. 그러다 보니 간단하고 미미한 기능이나 디자인에 대해 빠르게 넘어가지 못한 부분이 있었습니다.

    - 이 문제를 위해 필수 & 추가 기능 구분 후 우선순위 정하기 <br> 타임박스 기법(특정 기능이나 디자인에 대한 작업 시간 정해두기 <br>-> 초과하면 다른 작업 진행 후 다시 돌아오기)을 이용하여 단점을 해결해 볼 것입니다.

* **칭찬할 점**

  - 주어진 것에 끝까지 해보자는 마음가짐을 가지고 있습니다. <br> 프로젝트를 진행하면서 기획 표에 맞춰 무조건 끝내야겠다며 이른 아침부터 또는 새벽 늦게까지 진행을 하여 미리 기한 안에 완료할 수 있었습니다.

  - 저는 문제들에 대해 효과적으로 해결하는 것을 중요하게 생각합니다. <br> 진행 중 생긴 오류 및 버그들에 대해 효과적으로 해결하기 위해 다양한 관점들을 생각을 해보았고 번역기, 검색, docoument 들을 충분히 활용을 하여 오류에 대해 많은 시간을 사용하지 않고 해결하였습니다.

  - 주어진 문제나 일에 관련된 정보, 데이터, 필요한 내용 등을 학습하며 빠르게 적용을 할 수 있다고 생각합니다. <br> 프로젝트 진행 중에 막히는 부분이 있을 때 빠르게 데이터를 찾아서 이용하여 이론 및 정보를 얻어 프로젝트에 유연하게 적용하는 것이 빨랐던 것 같습니다.

## 앞으로의 개발 방향과 프로젝트 개선 방안

- **개발 방향**

  - 유용한 라이브러리를 활용하면 시간에 단축이 많이 되어 여러 라이브러리를 사용

  * props를 이용한 디자인이나 조건문을 사용할 때 조건의 값을 확인하고 조건 사용

  * 진행이 너무 더뎌질 정도로 오랜 시간 붙잡지 말고 휴식 및 다른 기능 먼저 해결할 것

  * 변수, 상수, 함수, props 들의 이름들을 헷갈리지 않게 전문적인 용어나 보기 편한 단어들을 사용할 것

  * 반응형을 제작할 때 모바일 사이즈 제일 작은 기준으로 가로를 극대화하여 디자인할 것

  * Chakra UI 라이브러리 공부를 하게 된다면 한번 사용해 볼 것

* **개선 방안**

  - sidemenu(햄버거 메뉴) - 빈 공간 클릭 시 사라지게 하도록 기능 추가 (x)

  - Category - 클릭 시 장르 id 값과 같은 것이 1개도 없을 때 <br> 없음 또는 없다고 알려주는 컴포넌트 추가 (x)

  - Video - 예고편 타이틀 추가 (x)

  - Seacrh - 검색하기 전에 추천 영화 리스트 추가 (x)

  - Login - 로그아웃 시 로그인 페이지 이동이 아닌 홈으로 이동 (o)
