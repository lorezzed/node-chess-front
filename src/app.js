var debugInput = document.querySelector("input");
debugInput.checked = true;
function updateDebugState() {
    document.body.classList.toggle('debug-on', debugInput.checked);
};
debugInput.addEventListener("click", updateDebugState);
updateDebugState();
