import React from "react";

export const ResourcesContext = React.createContext({});

export const ResourcesProvider = ({ children, resources }) => {
  return (
    <ResourcesContext.Provider value={{ ...resources }}>
      {children}
    </ResourcesContext.Provider>
  );
};

export const useResources = () => React.useContext(ResourcesContext);

export const serializeResources = resources => {
  let result = {};

  for (let key in resources) {
    result[key] = resources[key]["cache"];
  }

  return JSON.stringify(result);
};

// https://gist.github.com/ryanflorence/e10cc9dbc0e259759ec942ba82e5b57c
export function createResource(getPromise, hashFn, initial) {
  let cache = initial || {};
  let inflight = {};
  let errors = {};

  function load(key) {
    inflight[key] = getPromise(key)
      .then(val => {
        delete inflight[key];
        cache[key] = val;
      })
      .catch(error => {
        errors[key] = error;
      });
    return inflight[key];
  }

  function preload(key) {
    if (cache[key] !== undefined || inflight[key]) return;
    load(key);
  }

  function read(key) {
    if (cache[key] !== undefined) {
      return cache[key];
    } else if (errors[key]) {
      throw errors[key];
    } else if (inflight[key]) {
      throw inflight[key];
    } else {
      throw load(key);
    }
  }

  function clear(key) {
    if (key) {
      delete cache[key];
    } else {
      cache = {};
    }
  }

  function ResourceLink({ cacheKey, ...props }) {
    const _preload = () => preload(cacheKey);
    return <Link onMouseEnter={_preload} onFocus={_preload} {...props} />;
  }

  return { cache, preload, read, clear, Link: ResourceLink };
}

export const imagePreloadResource = createResource(async src => {
  if (typeof window == "undefined") return false;

  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(true);
    };
    img.onerror = () => {
      reject();
    };
    img.src = src;
  });
});
