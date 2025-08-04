let markdown = "";

const allElements = document.body.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, ul, ol, span"
);

for(const element of allElements) {
    console.log(element);
}

console.log(markdown);
console.log(document.title);

