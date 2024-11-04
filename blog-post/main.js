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
