function convert_to_md() {
    console.log("convert_to_md()");
    alert("converting this page content to the markdown format...");
}

function listenForClicks() {
    document.addEventListener("click", (e) => {
        function test() {
            alert("Test listener!");
        }
    }
}

function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute html2md: ${error.message}`);
}

browser.tabs
    .executeScript({file: "../html2md.js" })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);
