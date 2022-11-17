window.addEventListener("scroll", () => {
let header = this.document.getElementById('homeHeader');

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled > 1) {

    header.classList.add("onScroll");
   
  } else {
    header.classList.remove("onScroll");
  }

});
