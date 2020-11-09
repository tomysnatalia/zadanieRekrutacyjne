function myFunction(event) {
  event.preventDefault();
  const x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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

const linksWithSublinks = document.querySelectorAll('.sublinked');
const burgerMenu = document.querySelector('.mobile-nav');

burgerMenu.addEventListener('click', myFunction)

for (const link of linksWithSublinks) {
  link.addEventListener('click', sublinksFunctionHandler);
  console.log(link);
}

