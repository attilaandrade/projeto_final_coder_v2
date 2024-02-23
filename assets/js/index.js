import { Router } from "./router.js";

const router = new Router()

router.add("/home","./assets/pages/home.html")
router.add("")




router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()