const buddys = [
  ["Align", "Block"], // 0 --> [0] [1]
  ["Center", "Descendent"], // 1 --> [0] [1]
  ["End", "Focus"], // 2 --> [0] [1]
  ["Grid", "Hover"], // 3 --> [0] [1]
  ["Inline", "Justify"], // 4 --> [0] [1]
];

const mainContainer = document.querySelector("main");

buddys.forEach((pair, indexOne) => {
  const sectionContainer = document.createElement("section");
  mainContainer.appendChild(sectionContainer);
  sectionContainer.classList.add("small-flexbox");

  pair.forEach((person, indexTwo) => {
    const pairParagraph = document.createElement("p");
    sectionContainer.appendChild(pairParagraph);
    pairParagraph.classList.add("members");
    pairParagraph.innerText = person;

    if (indexTwo == 0) {
      pairParagraph.classList.add("m1");
      const plusSvg = document.getElementById("plusSign");
      sectionContainer.appendChild(plusSvg);
    } else {
      pairParagraph.classList.add("m5");
    }
  });
});
