import { useEffect } from "react";
import { useState } from "react";
import { EVENTS } from "./consts";
import { match } from "path-to-regexp";

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocaltionChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocaltionChange);
    window.addEventListener(EVENTS.POPSTATE, onLocaltionChange);
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocaltionChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocaltionChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
