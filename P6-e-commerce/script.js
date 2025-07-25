document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".header_slider ul img");
  const prev_btn = document.querySelector(".control_prev");
  const next_btn = document.querySelector(".control_next");

  console.log("imgs:", imgs.length);
  console.log("prev_btn:", prev_btn);
  console.log("next_btn:", next_btn);

  let n = 0;
  function changeslide() {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
  }
  changeslide();

  prev_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (n > 0) {
      n--;
    } else {
      n = imgs.length - 1;
    }
    changeslide();
  });
  next_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (n < imgs.length - 1) {
      n++;
    } else {
      n = 0;
    }
    changeslide();
  });
});

const scrollcontainer = document.querySelectorAll(".products");
for (const item of scrollcontainer) {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}
