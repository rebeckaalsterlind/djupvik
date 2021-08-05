import {getForecast} from "./modules/fetch.mjs";

import {dropdown, hideSidebar} from "./modules/dropdown.mjs"
import {submit} from "./modules/submit.mjs";
const root = document.getElementById("root");
const main = document.getElementById("main");
const icon = document.getElementById("dropdown");
const sidebar = document.getElementById("sidebar");


main.addEventListener("click", (evt) => {
    if(evt.target.id === "submit") submit(evt);
})

getForecast();




root.addEventListener("click", ({target}) => {
 
    if(target.id === "dropdown") {
        dropdown(sidebar);

        sidebar.addEventListener("click", () => {
            hideSidebar(sidebar);
        });
           
    };
});





