function submit(evt) {
    evt.preventDefault();
    const form = evt.target.parentNode;
    const replaceWith = document.createElement("p");
    replaceWith.className = "msgSent";
    replaceWith.innerHTML = "Meddelandet har skickats!";

    form.parentNode.replaceChild(replaceWith, form);
}

export {submit};