import {getForecast} from "./modules/fetch.mjs";
import {staticElements} from "./modules/staticElements.mjs"
import {dropdown, hideSidebar} from "./modules/dropdown.mjs"
import {submit} from "./modules/submit.mjs";
const root = document.getElementById("root");
const main = document.getElementById("main");
console.log('naub', main);
const icon = document.getElementById("dropdown");
const sidebar = document.getElementById("sidebar");


main.addEventListener("click", (evt) => {
    if(evt.target.id === "submit") submit(evt);
})


getForecast();
staticElements(root, main);


dropdown(icon, sidebar);
hideSidebar(sidebar);

