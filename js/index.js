import { Router } from "./roteador.js";

const links = document.querySelectorAll("header nav a");

console.log(links);

const router = new Router();

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
