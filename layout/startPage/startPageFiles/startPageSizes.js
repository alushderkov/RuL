window.onload = function() {
    const firstElem = document.getElementById("picture1").querySelector("img");
    const firstMargins = firstElem.getBoundingClientRect();
    const firstLeftMargin = firstMargins.left;

    const secondElems = document.getElementsByClassName("button-container");
    const secondElem = secondElems[0];
    const secondWidth = parseFloat(getComputedStyle(secondElem).width);
    const finishMargin = (firstLeftMargin - secondWidth) / 2;
    secondElem.style["margin-left"] = `${finishMargin}px`;

    const h1 = document.getElementsByTagName("h1");
    const elemh1 = h1[0];
    elemh1.style["margin-left"] = secondElem.style["margin-left"];

    const h2 = document.getElementsByTagName("h2");
    Array.from(h2).forEach(element => {
        element.style["margin-left"] = secondElem.style["margin-left"]
        }
    );

    const h1Size = parseFloat(getComputedStyle(h2[0])["font-size"]);
    h2[0].style["font-size"] = `${h1Size * 18 / 25}px`;

    const p = document.getElementsByTagName("p");
    p[0].style["margin-left"] = secondElem.style["margin-left"];
    p[0].style["font-size"] = `${h1Size * 3 / 5}px`;
};
