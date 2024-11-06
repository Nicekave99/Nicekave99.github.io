let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
// auto run slider
// let refreshInterval = setInterval(() => {
//   next.click();
// }, 500000000000000000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  // active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");
  setPositionThumbnail();

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 100000);
}
function setPositionThumbnail() {
  let thumbnailActive = document.querySelector(".thumbnail .item.active");
  let rect = thumbnailActive.getBoundingClientRect();
  if (rect.left < 0 || rect.right > window.innerWidth) {
    thumbnailActive.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

// Draggable Slider
let thumbnail = document.querySelector(".thumbnail");
let isDragging = false;
let startX, scrollLeft;

thumbnail.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - thumbnail.offsetLeft; // เริ่มต้นตำแหน่งที่คลิก
  scrollLeft = thumbnail.scrollLeft; // ตำแหน่งการเลื่อน
  thumbnail.style.cursor = "grabbing"; // เปลี่ยน cursor
});

thumbnail.addEventListener("mouseleave", () => {
  isDragging = false;
  thumbnail.style.cursor = "grab"; // เปลี่ยนกลับเมื่อไม่ลากแล้ว
});

thumbnail.addEventListener("mouseup", () => {
  isDragging = false; // รีเซ็ตการลากเมื่อปล่อยเมาส์
  thumbnail.style.cursor = "grab"; // เปลี่ยนกลับเมื่อไม่ลากแล้ว
});

thumbnail.addEventListener("mousemove", (e) => {
  if (!isDragging) return; // ถ้าไม่กำลังลาก ให้หยุด
  e.preventDefault(); // ป้องกันการเลือกข้อความ
  const x = e.pageX - thumbnail.offsetLeft; // ตำแหน่งที่ลาก
  const walk = (x - startX) * 2; // ความเร็วการลาก
  thumbnail.scrollLeft = scrollLeft - walk; // เลื่อน thumbnail
});
