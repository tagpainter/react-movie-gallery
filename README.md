# react-movie-gallery (작업중)

이 예제는 새로운 React.Suspense와 react resource를 활용한 서버사이드 렌더링 구현에 대한 예시입니다.

[SSR 예제](https://react-movie-gallery-test.herokuapp.com)

[CSR 예제](https://tagpainter.github.io/react-movie-gallery)

You can read this document in [english](docs/en/README.md).

## TMDB API를 활용한 영화정보앱 예시

이 어플리케이션은 백엔드로써 TMDB API를 활용하였습니다.

## 단순하고 미려한 디자인

심플하고 플랫한 디자인을 위하여 box-shadow의 사용을 의도적으로 피하였고, 직선 라인과 부드럽고 은은하게 깔리는 고화질 백드롭 이미지를 컨셉으로 디자인 하였습니다.

## 새로운 `React.Suspense`와 `react-cache`를 활용한 서버사이드 렌더링

리액트에서의 ssr은 난제입니다.
모든 데이터를 하나의 중심 스토어에 저장하는 등, 리액트의 장점을 저해하는 방식으로 어플리케이션 구조가 강요되기 쉽습니다.

특히 리덕스는 개념은 이상적이며 좋으나, async data fetching이 주를 이루는 어플리케이션에서는 현실적인 문제들을 불러일으킵니다.

이 예제에서는 `react-cache`의 컨셉을 활용하여 모든 데이터를 컴포넌트 트리 안에서 불러오며, 서버에서는 데이터가 로드 될 때 까지 `react-ssr-prepass`를 활용하여 기다립니다.

이러한 방식으로, 컴포넌트를 온전히 자유로운 방식으로 구성할 수 있으며, '리액트 다운 방식'으로 코딩할 수 있고 CSR 전용 어플리케이션을 쉽게 SSR로 전환할 수 있습니다.

## 지연된 렌더링과 페이지 전환 애니메이션

저는 이 프로젝트에서 `framer-motion`을 활용하여 애니메이션을 구현하였습니다.

라우트가 바뀔 때 마다 `react-router-dom`이 제공하는 `location` 정보에 대한 텀이 생깁니다.

이 예시에서는 `computedMatch` prop과 `location` prop을 `<Route>` 컴포넌트에 제공함으로써 이 문제를 자연스러운 방식으로 해결합니다.

## 설치

Node.js가 설치되어 있어야 합니다.

어플리케이션 실행을 위하여 환경변수로써 TMDB_APIKEY가 필요합니다. `https://www.themoviedb.org/`에서 발급받을 수 있습니다.

```shell
yarn
```

## 개발

```shell
yarn dev-csr
```
