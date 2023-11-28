document.getElementById("button1").onclick = function () {
  var soNgayLam = document.getElementById("songay").value * 1;
  document.getElementById("luong").innerHTML = soNgayLam * 100000;
};
document.getElementById("button2").onclick = function () {
  var soThuNhat = document.getElementById("so1").value * 1;
  var soThuHai = document.getElementById("so2").value * 1;
  var soThuBa = document.getElementById("so3").value * 1;
  var soThuBon = document.getElementById("so4").value * 1;
  var soThuNam = document.getElementById("so5").value * 1;
  document.getElementById("trungbinh").innerHTML =
    (soThuNhat + soThuHai + soThuBa + soThuBon + soThuNam) / 5;
};
document.getElementById("button3").onclick = function () {
  var soTien = document.getElementById("tienmy").value * 1;
  document.getElementById("tienviet").innerHTML = soTien * 23.5 + " VND";
};
document.getElementById("button4").onclick = function () {
  var chieuDai = document.getElementById("chieudai").value * 1;
  var chieuRong = document.getElementById("chieurong").value * 1;
  document.getElementById("dientich").innerHTML = `Diện Tích : ${
    chieuDai * chieuRong
  }`;
  document.getElementById("chuvi").innerHTML = `Chu Vi : ${
    (chieuDai + chieuRong) * 2
  }`;
};
document.getElementById("button5").onclick = function () {
  var soCoHaiChuSo = document.getElementById("input5").value * 1;
  var soDonVi = soCoHaiChuSo % 10;
  var soHangChuc = (soCoHaiChuSo - soDonVi) / 10;
  document.getElementById("ketqua5").innerHTML = soDonVi + soHangChuc;
};
