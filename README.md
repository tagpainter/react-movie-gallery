# react-movie-gallery (작업중)

이 예제는 React.Suspense와 react resource를 활용한 서버사이드 렌더링 구현에 대한 예시입니다.

[SSR 예제](https://react-movie-gallery-test.herokuapp.com)

[CSR 예제](https://tagpainter.github.io/react-movie-gallery)

You can read this document in [english](docs/en/README.md).

## TMDB API를 활용한 영화정보앱 예시

이 어플리케이션은 백엔드로써 TMDB API를 활용하였습니다.

## 단순하고 미려한 디자인

심플하고 플랫한 디자인을 위하여 box-shadow의 사용을 의도적으로 피하였고, 직선 라인과 부드럽고 은은하게 깔리는 고화질 백드롭 이미지를 컨셉으로 제작하였습니다.

## 새로운 `React.Suspense`와 `react-cache`를 활용한 서버사이드 렌더링

지금까지는 리액트에서의 SSR을 위하여 트리의 모든 데이터를 스토어에 저장해야 했고, 자유로운 라우터 구조를 사용할 수 없거나 아예 `react-router-dom`을 사용할 수 없었습니다.
그러나 `react-rotuer-dom`의 최대 장점은 '선언적인 방식'으로 '자유롭게 라우트를 구성 가능하다' 는 것이겠지요?

이 예제에서는 `react-cache`의 컨셉을 활용하여 모든 데이터를 컴포넌트 트리 안에서 불러오며, 서버에서는 데이터가 로드 될 때 까지 `react-ssr-prepass`를 활용하여 기다립니다.

이러한 방식으로, 컴포넌트를 온전히 자유로운 방식으로 구성할 수 있으며, '리액트 다운 방식'으로 코딩할 수 있고 CSR용 앱을 쉽게 SSR과 호환이 되도록 포팅 할 수 있겠지요.

## 지연된 렌더링과 페이지 전환 애니메이션

저는 이 프로젝트에서 `framer-motion`을 활용하여 애니메이션을 구현하였습니다. 그러나 라우트가 바뀔 때 마다 `react-router-dom`이 제공하는 `location`에 대한 정보에 대한 갭이 생깁니다.
애니메이션을 할 때 생기는 0.5~1초의 시간 사이에 이미 업데이트 된 location 정보가 제공되는 거죠. 이를 일반적으로는 `<Switch>` 컴포넌트에 `location` prop을 제공하여 해결 할 수 있습니다.
그러나 공통 레이아웃 시스템을 구축하여야 할 때에는 조금 더 상황이 복잡해집니다.

이 예시에서는 `computedMatch` prop과 `location` prop을 `<Route>` 컴포넌트에 제공함으로써 이 문제를 해결하는 방법을 제시합니다.

## 설치

Node.js가 설치되어 있어야 합니다.

1. `npm install --global yarn`을 통하여 yarn package manager를 설치합니다.
2. `yarn dev-csr`을 실행하여 클라이언트 사이드 렌더링 개발서버를 실행합니다.
