
const temp = 
    `<header>    
        <i id="dropdown" class="fas fa-bars hide"></i>
        <a href="english.html" tabindex="9">English</a>
    </header>
    <aside id="sidebar" class="sidebar">
        <a href="index.html" tabindex="1">Djupvik</a>
        <nav>
            <ul>
                <a href="#start"><li>Start</li></a>
                <a href="#guestMooring"><li>Gästhamnen</li></a>
                <a href="#history"><li id="historia">Historia</li></a>
                <a href="#turism"><li>Turitsmål</li></a>
                <a href="#memberInfo" id="memberChangeTab"><li>Medlemsinfo</li></a>
                <a href="#weather"><li>Väder</li></a>
                <a href="#contact"><li>Kontakt</li></a>
                
            </ul>
        </nav>
    </aside>`;

function staticElements(root, main) {
    root.insertAdjacentHTML("afterbegin", temp);
    main.insertAdjacentHTML("afterend", `<footer><p>&copy; Djupvikshamn.se info@djupvikshamn.se</p></footer>`)
};


export {staticElements};