// interface Payload {
//   tagName?: string;
//   state?: {
//     [key: string]: unknown;
//   };
//   props?: {
//     [key: string]: unknown;
//   };
// }

export interface Payload {
  tagName?: string;
  state?: Record<string, unknown>;
  props?: Record<string, unknown>;
}

/**
 * Base Component
 */
export class Component {
  public el: HTMLElement;
  protected state: Record<string, unknown>;
  protected props: Record<string, unknown>;

  /**
   * @constructor
   * @param {Payload} payload
   */
  constructor(private payload: Payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;

    this.render();
  }
  render() {}
}

interface Route {
  path: string;
  component: typeof Component;
}
type Routes = Route[];

/**
 * Create Hash Router
 *
 * @param {Routes} routes
 * @return {() => void}
 */
export function createRouter(routes: Routes): () => void {
  return () => {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

/**
 * Render matched components
 *
 * @param {Routes} routes
 */
function routeRender(routes: Routes) {
  if (!location.hash) history.replaceState(null, "", "#/");

  const routerView = document.querySelector<HTMLElement>("router-view");
  const [hash, queryString = ""] = location.hash.split("?");
  const query = queryString.split("&").reduce(
    (acc, cur) => {
      const [key, value] = cur.split("=");
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
  history.replaceState(query, "");

  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash),
  );
  if (routerView === null) return;
  routerView.innerHTML = "";
  currentRoute && routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0);
}

interface SubscribeCallback {
  (newValue: unknown): void;
}

export class Store<S> {
  public state = {} as S;
  private observers = {} as Record<string, SubscribeCallback[]>;

  /**
   * @constructor
   * @param {S} state
   */
  constructor(state: S) {
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (newValue) => {
          if (state[key] === newValue) return;
          state[key] = newValue;
          this.observers[key]?.forEach((callback) => callback(newValue));
        },
      });
    }
  }

  subscribe(key: string, callback: SubscribeCallback) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(callback)
      : (this.observers[key] = [callback]);
  }
}
