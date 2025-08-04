let markdown = "";

const allElements = document.body.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, ul, ol, span"
);

for(const element of allElements) {
    convertElementToMd(element);
}

function convertElementToMd(element) {
    if(["H1", "H2", "H3", "H4", "H5", "H6"].includes(element.tagName)) {
        headerToMd(element);
    }
}

function headerToMd(headerElement) {
    let mdHeaderText = serializeHeaderText(headerElement.innerText);
    if(mdHeaderText == '') { return }
    let header_number = parseInt(headerElement.tagName.charAt(1));
    let md_header_tags = "#".repeat(header_number);
    markdown += `\n ${md_header_tags} ${mdHeaderText}\n`;
}

function serializeHeaderText(text) {
    if(text == '') { return text }
    let st = text;
    st.replaceAll('\n', ' ');
    return st;
}

console.log(markdown);
console.log(document.title);

