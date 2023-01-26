export class Router {
  routes = {
    "/": "/pages/home.html",
    "/universe": "/pages/universe.html",
    "/exploration": "/pages/exploration.html",
    "/404": "/pages/404.html",
  };
  route = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  };

  handle = () => {
    const { pathname } = window.location;
    const route = this.routes[pathname] || routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      });
  };
}
