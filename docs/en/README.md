# react-movie-gallery

this example focused on show way to provide way to SSR React.Suspense & react resources.

[SSR Example](https://react-movie-gallery-test.herokuapp.com)
[CSR Example](https://tagpainter.github.io/react-movie-gallery)

---

## Movie information application using TMDB API

This demo application uses TMDB API for backend database.

---

## Simple & Beautiful design

I avoided to abuse using box-shadow for simple flat design. And i designed with concept of straight lines and a soft high-resolution backdrop images.

---

## New `React.Suspense`, `react-cache` and server side rendering.

Till now, we should store every data on component tree for SSR, and we coudn't struct free router structure or we cannot use `react-router-dom`.
But as you can see, The best advantage of `react-router-dom` is that you can struct router freely and declarative way.

In this example, I adapted concept of `react-cache` and fetch all data in component tree, and wait until fetched at server side using `react-ssr-prepass`.

With this, you can composit component tree in highly free manner, and you can code in react-way, and share code with only-CSR apps.

---

## Delayed rendering and page transition animation

I used `framer-motion` for animation, but it causes location information gap when route transition is occured. Normally, you can resolve it by providing `location` prop on `<Switch>` component, but when you need provide common layout system its more difficult to resolve.

In this example, I show you way to solve it by providing `computedMatch` and `location` prop to `<Route>` component.
