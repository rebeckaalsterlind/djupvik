
function dropdown(sidebar) {
    sidebar.classList.toggle("show");
};

function hideSidebar(sidebar) {
    sidebar.classList.remove("show");
};

export {dropdown, hideSidebar}