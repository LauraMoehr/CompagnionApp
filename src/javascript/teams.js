
const teams = [
  ["Team 1", "Align", "Block", "Center", "Descendent", "End"],
  ["Team 2", "Focus", "Grid", "Hover", "Inline", "Justify"],
];

const mainContainer = document.querySelector("main");

teams.forEach((quintet, indexOne) => {
  const sectionContainer = document.createElement("section");
  mainContainer.appendChild(sectionContainer);
  sectionContainer.classList.add("large-flexbox");

  quintet.forEach((item, indexTwo) => {
    const paragraph = document.createElement("p");
    sectionContainer.appendChild(paragraph);

    if (indexTwo == 0) {
        paragraph.classList.add("large-flexbox__header");
        paragraph.innerText = item
      } else {
        paragraph.classList.add("members");
        paragraph.innerText = item;
      }

    if (indexTwo == 1) {
      paragraph.classList.add("m1");
    } else if (indexTwo >=2 && indexTwo<=4) {
      paragraph.classList.add("m2");
    } else if (indexTwo == 5) {
       paragraph.classList.add('m5')
    }
  });
});

