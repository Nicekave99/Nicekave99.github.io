const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// container
ScrollReveal().reveal(".container__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 1500,
});

// จับทุกปุ่มใน .slider-nav
const navButtons = document.querySelectorAll(".slider-nav a");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");

// ฟังก์ชันเลื่อนไปยังสไลด์ที่ต้องการ
navButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    slides[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  });
});

// ตรวจสอบว่ามีค่า hitCounter ใน localStorage หรือไม่
if (localStorage.getItem("hitCounter")) {
  // ถ้ามี ให้เพิ่มค่าขึ้น 1
  let count = parseInt(localStorage.getItem("hitCounter")) + 1;
  localStorage.setItem("hitCounter", count);
} else {
  // ถ้าไม่มี ให้ตั้งค่าเริ่มต้นเป็น 1
  localStorage.setItem("hitCounter", 1);
}

// แสดงจำนวนการเข้าชม
document.getElementById("hitCount").innerText =
  localStorage.getItem("hitCounter");
