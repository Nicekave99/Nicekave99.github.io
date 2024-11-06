function openModal(imgElement) {
  // ดึง modal และ modal image มาจาก DOM
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImg");

  // ตั้งค่าให้ modal แสดงขึ้นพร้อมภาพที่ถูกคลิก
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeModal() {
  // ปิด modal
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
