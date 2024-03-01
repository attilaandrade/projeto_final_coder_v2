import { Router } from "./router.js";

const router = new Router()

router.add("/home","./assets/pages/home.html")
router.add("/esportes",".assets/pages/esportes.html")
router.add("/noticias",".assets/pages/noticias.html")
router.add("/loja", ".assets/pages/loja.html")





router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()