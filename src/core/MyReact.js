/**
 * Component
 */
export class Component {
  /**
   * @type {HTMLElement}
   */
  el;

  /**
   * Component constructor
   *
   * @constructor
   * @param {object} [payload]
   * @param {string} [payload.tagName]
   * @param {object} [payload.state] - State of self.
   * @param {object} [payload.props] - Data is passed from parent.
   */
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;

    this.render();
  }
  render() {}
}

/**
 * Create Hash Router
 *
 * @param {{path, component}[]} routes
 * @returns {(function(): void)|*}
 */
export function createRouter(routes) {
  return () => {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

/**
 *
 * @param {{path, component}[]} routes
 */
function routeRender(routes) {
  if (!location.hash) history.replaceState(null, "", "#/");

  const routerView = document.querySelector("router-view");
  const [hash, queryString = ""] = location.hash.split("?");
  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  history.replaceState(query, "");

  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash),
  );
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0);
}
