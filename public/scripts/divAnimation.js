window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".animation-on-scroll");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active-animation-on-scroll");
    } else if (revealTop > windowHeight + revealPoint) {
      reveals[i].classList.remove("active-animation-on-scroll");
    } else {
      return;
    }
  }
}
