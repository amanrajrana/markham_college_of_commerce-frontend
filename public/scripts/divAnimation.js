window.addEventListener("scroll", reveal);
reveal();

function reveal() {
  let reveals = document.querySelectorAll(".animation-on-scroll");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < windowHeight) {
      reveals[i].classList.add("active-animation-on-scroll");
    } else if (revealTop > windowHeight + 100) {
      reveals[i].classList.remove("active-animation-on-scroll");
    } else {
      return;
    }
  }
}
