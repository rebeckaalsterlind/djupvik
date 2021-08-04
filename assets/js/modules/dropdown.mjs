
function dropdown(icon, sidebar) {
    icon.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });
};

function hideSidebar(sidebar) {
    sidebar.addEventListener("click", (evt) => {
        sidebar.classList.remove("show");
    })
}

export {dropdown, hideSidebar}