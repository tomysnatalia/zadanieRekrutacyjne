function myFunction() {
  const x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const linksWithSublinks = document.querySelectorAll('.sublinked');
console.log(linksWithSublinks);

for (const link of linksWithSublinks) {
  link.addEventListener('click', sublinksFunctionHandler);
  console.log(link);
}


function sublinksFunctionHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log(clickedElement);

  let href = clickedElement.getAttribute('href');
  let subMenu = document.querySelector(href);

  if (subMenu.style.display === "block") {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }
}

