const showSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};

const hideSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

const services = document.querySelectorAll(".service-navigation-card");
const liceCont = document.querySelector(".service-container-lice");
const depilacijaCont = document.querySelector(".service-container-depilacija");
const epilacijaCont = document.querySelector(".service-container-epilacija");
const liceActive = document.querySelector(".lice");
const depilacijaActive = document.querySelector(".depilacija");
const epilacijaActive = document.querySelector(".epilacija");

window.onload = () => {
  url();
};

const url = () => {
  if (window.location.toString().includes("?lice")) {
    liceActive.classList.add("active");
  } else if (window.location.toString().includes("?depilacija")) {
    depilacijaActive.classList.add("active");
  } else if (window.location.toString().includes("?epilacija")) {
    epilacijaActive.classList.add("active");
  }
  usluge();
};

services.forEach((service) => {
  service.addEventListener("click", () => {
    removeActiveClasses();
    service.classList.add("active");
  });
});

const removeActiveClasses = () => {
  services.forEach((service) => {
    service.classList.remove("active");
  });
};

const usluge = () => {
  for (i = 0; i < services.length; i++) {
    if (
      services[i].classList.contains("lice") &&
      services[i].classList.contains("active")
    ) {
      liceCont.style.display = "block";
      depilacijaCont.style.display = "none";
      epilacijaCont.style.display = "none";
    }
    if (
      services[i].classList.contains("depilacija") &&
      services[i].classList.contains("active")
    ) {
      liceCont.style.display = "none";
      depilacijaCont.style.display = "block";
      epilacijaCont.style.display = "none";
    }
    if (
      services[i].classList.contains("epilacija") &&
      services[i].classList.contains("active")
    ) {
      liceCont.style.display = "none";
      depilacijaCont.style.display = "none";
      epilacijaCont.style.display = "block";
    }
  }
};
//scroller front page

const scrollers = document.querySelectorAll(".scroller");

const addAnimation = () => {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
};

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
