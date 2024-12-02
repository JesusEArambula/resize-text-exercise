let textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", (e) =>
{
    textarea.style.height = "59px";
    let sHeight = textarea.scrollHeight;
    textarea.style.height = `${sHeight}px`;
});