<div align="center">

# Unsplash api를 이용한 photo app 📸

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
</p>
</div>

## ⏳ 개발 기간

2024.01.09 ~ 2024.01.15<br/>
error fix ~ing

## 🌈 Code

`npm install && npm start`

`.env` 파일에 아래 추가

```
REACT_APP_ACCESS_KEY=YOUR_ACCESS_KEY
REACT_APP_BEARER_TOKEN=YOUR_BEARER_TOKEN
```

https://unsplash.com/documentation<br/>
위의 사이트에서 api key 발급 후 사용

## ✍🏻 프로젝트 요구사항

1. 검색 페이지(검색 기능, 페이지네이션, 이미지 좋아요)
2. 상세 모달(이미지 데이터, 이미지 좋아요)
3. 북마크 페이지(검색 페이지와 동기화)

## 📚 Libraries - 라이브러리

1. `axios` - api 구현을 위해 사용
2. `tailwind css` - css 라이브러리
3. `timeago.js` - 업로드 몇 일 전에 되었는 지 알기 위해 사용
4. `tanstack/react-query` - 데이터 fetching stale time 조절을 위해 사용

## ⛰️ 어려웠던 점

1. bearer token을 얻는 과정 - 인증 토큰을 받아서 한 번 더 POST를 날리는 과정이 필요한데 이 부분을 파악하지 못해서 하루 반나절 정도 헤맸다. O-Auth를 사용하는 방법에 대해서 알게 되었다. 공식 문서에 친절하게 쓰여 있어서 잘 해결했다.
2. react-router v6 설정 - 다양한 설정 방법이 있어서 고민하다가 Outlet 방식을 이용해서 구현했다.
3. 컴포넌트 쪼개기 - 어디까지가 재사용하기 좋은 크기인지 감이 오지 않아서 고민하면서 작성했다.

## 🍵 미흡한 부분 & 개선 사항

1. 모든 컴포넌트 typescript 적용을 하지 못했다.
2. react-router dom에서 같은 페이지로 이동할 때 리렌더링이 되지 않아 페이지 정보가 초기화되지 않는 이슈가 있다. 현재 willog 로고 클릭 시 동작하는 로직 부분이 이에 해당한다. 수정이 필요하다. 이를 학습하면서 useLocation에 key값을 useEffect의 의존성 배열에 넣어주었는데 해결이 되지 않았다.
3. api 로직 분리

✔️ 이슈2 해결 완료

`/search`(메인 페이지)에서 '고양이' 키워드를 검색하고 페이지 2로 이동한 후 Willog 로고를 클릭하면 입력 창과 페이지 상태가 초기화되지 않았다. Header 컴포넌트에 text 상태를 추가하고, Header 컴포넌트 내에 SearchBar 컴포넌트를 두어 입력 창을 초기화했다. 또한 페이지 상태 초기화는 keyword 또는 useLocation의 key 값이 변경될 때 처리하도록 변경했다.
