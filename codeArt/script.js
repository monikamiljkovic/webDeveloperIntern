const btn = document.querySelector(".btnScrollBuyNow");
const scrollToSection = function () {
  let el = document.querySelector(".scroll");
  el.scrollIntoView({ behavior: "smooth" });
};
btn.addEventListener("click", scroll);

const content = document.querySelectorAll(".freqAskContent");
content.forEach((item, ind) => {
  console.log(item);
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
    removeOpenModal(ind);
  });
});

function removeOpenModal(ind1) {
  content.forEach((item2, ind2) => {
    if (ind1 != ind2) {
      item2.classList.remove("open");
    }
  });
}
