// ฟังก์ชันในการดึงข้อมูลจาก Counter API
function fetchCounterData() {
  const url =
    "https://counterapi.com/api/nicekave99.github.io/view/nicekave99readOnly=true&startNumber=42000";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // แสดงผลข้อมูลที่ได้ใน div ที่มี id "counter"
      const viewCount = data.viewCount || 0; // ตรวจสอบว่ามี viewCount หรือไม่
      document.getElementById("counter").innerHTML = `
                <h2>จำนวนการเข้าชม</h2>
                <p><strong>${viewCount}</strong> ครั้ง</p>
            `;
    })
    .catch((error) => {
      document.getElementById("counter").innerHTML =
        "เกิดข้อผิดพลาดในการโหลดข้อมูล: " + error.message;
    });
}

// เรียกใช้งานฟังก์ชันเมื่อโหลดหน้า
window.onload = fetchCounterData;
