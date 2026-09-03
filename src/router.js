// Client-side Router for Blinkit Category Discovery App

class Router {
  constructor() {
    this.currentRoute = 'home';
    this.params = {};
    this.listeners = new Set();
    this.historyStack = ['home'];

    window.addEventListener('hashchange', () => this.handleHashChange());
    window.addEventListener('load', () => this.handleHashChange());
  }

  handleHashChange() {
    const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
    const [route, queryString] = hash.split('?');
    const params = {};
    if (queryString) {
      new URLSearchParams(queryString).forEach((val, key) => {
        params[key] = val;
      });
    }

    if (this.currentRoute !== route || JSON.stringify(this.params) !== JSON.stringify(params)) {
      this.currentRoute = route;
      this.params = params;
      this.historyStack.push(route);
      this.notify();
    }
  }

  navigate(route, params = {}) {
    let hash = `#/${route}`;
    const keys = Object.keys(params);
    if (keys.length > 0) {
      const qs = new URLSearchParams(params).toString();
      hash += `?${qs}`;
    }
    window.location.hash = hash;
  }

  back() {
    if (this.historyStack.length > 1) {
      this.historyStack.pop(); // pop current
      const prev = this.historyStack.pop() || 'home';
      this.navigate(prev);
    } else {
      this.navigate('home');
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.currentRoute, this.params));
  }
}

export const router = new Router();
