var mang = []; // Khởi tạo mảng rỗng để lưu trữ các số nguyên

// Hàm thêm số vào mảng
function themSo() {
  var nhapSo = document.getElementById("nhapSo"); // Lấy giá trị từ ô nhập
  var so = parseInt(nhapSo.value); // Chuyển giá trị thành số nguyên
  if (!isNaN(so)) {
    // Kiểm tra xem giá trị có phải là số hợp lệ không
    mang.push(so); // Thêm số vào mảng
    nhapSo.value = ""; // Xóa giá trị trong ô nhập sau khi thêm
    hienThiMang(); // Hiển thị lại mảng
  }
}

// Hàm hiển thị mảng hiện tại lên giao diện
function hienThiMang() {
  document.getElementById("hienThiMang").innerText = mang.join(", ");
}

// Hàm tính tổng các số dương trong mảng
function tongSoDuong() {
  var tong = 0; // Biến lưu trữ tổng các số dương
  for (var i = 0; i < mang.length; i++) {
    // Lặp qua từng phần tử trong mảng
    if (mang[i] > 0) {
      // Nếu phần tử là số dương
      tong += mang[i]; // Cộng phần tử vào biến tong
    }
  }
  document.getElementById("tongSoDuongKetQua").innerText = tong; // Hiển thị kết quả
}

// Hàm đếm số lượng số dương trong mảng
function demSoDuong() {
  var dem = 0; // Biến lưu trữ số lượng các số dương
  for (var i = 0; i < mang.length; i++) {
    // Lặp qua từng phần tử trong mảng
    if (mang[i] > 0) {
      // Nếu phần tử là số dương
      dem++; // Tăng biến dem lên 1
    }
  }
  document.getElementById("demSoDuongKetQua").innerText = dem; // Hiển thị kết quả
}

// Hàm tìm số nhỏ nhất trong mảng
function timSoNhoNhat() {
  if (mang.length === 0) return; // Nếu mảng rỗng thì không làm gì
  var nhoNhat = mang[0]; // Giả sử phần tử đầu tiên là nhỏ nhất
  for (var i = 1; i < mang.length; i++) {
    // Lặp qua từng phần tử trong mảng, bắt đầu từ phần tử thứ hai
    if (mang[i] < nhoNhat) {
      // Nếu tìm thấy phần tử nhỏ hơn
      nhoNhat = mang[i]; // Cập nhật phần tử nhỏ nhất
    }
  }
  document.getElementById("timSoNhoNhatKetQua").innerText = nhoNhat; // Hiển thị kết quả
}

// Hàm tìm số dương nhỏ nhất trong mảng
function timSoDuongNhoNhat() {
  var nhoNhatDuong = null; // Biến lưu trữ số dương nhỏ nhất
  for (var i = 0; i < mang.length; i++) {
    // Lặp qua từng phần tử trong mảng
    if (mang[i] > 0 && (nhoNhatDuong === null || mang[i] < nhoNhatDuong)) {
      // Nếu phần tử là số dương và nhỏ hơn số dương nhỏ nhất hiện tại
      nhoNhatDuong = mang[i]; // Cập nhật số dương nhỏ nhất
    }
  }
  document.getElementById("timSoDuongNhoNhatKetQua").innerText =
    nhoNhatDuong !== null ? nhoNhatDuong : "Không có số dương"; // Hiển thị kết quả
}

// Hàm tìm số chẵn cuối cùng trong mảng
function timSoChanCuoiCung() {
  var chanCuoi = -1; // Biến lưu trữ số chẵn cuối cùng, mặc định là -1
  for (var i = 0; i < mang.length; i++) {
    // Lặp qua từng phần tử trong mảng
    if (mang[i] % 2 === 0) {
      // Nếu phần tử là số chẵn
      chanCuoi = mang[i]; // Cập nhật số chẵn cuối cùng
    }
  }
  document.getElementById("timSoChanCuoiCungKetQua").innerText = chanCuoi; // Hiển thị kết quả
}

// Hàm đổi chỗ hai giá trị trong mảng theo vị trí
function doiCho() {
  var viTri1 = parseInt(document.getElementById("viTri1").value); // Lấy giá trị vị trí thứ nhất
  var viTri2 = parseInt(document.getElementById("viTri2").value); // Lấy giá trị vị trí thứ hai
  if (
    !isNaN(viTri1) &&
    !isNaN(viTri2) &&
    viTri1 < mang.length &&
    viTri2 < mang.length
  ) {
    // Kiểm tra tính hợp lệ của vị trí
    var tam = mang[viTri1]; // Biến tạm để lưu giá trị tại vị trí thứ nhất
    mang[viTri1] = mang[viTri2]; // Gán giá trị tại vị trí thứ hai cho vị trí thứ nhất
    mang[viTri2] = tam; // Gán giá trị lưu trong biến tạm cho vị trí thứ hai
    hienThiMang(); // Hiển thị lại mảng
    document.getElementById("ketQuaDoiCho").innerText = mang.join(", "); // Hiển thị kết quả sau khi đổi chỗ
  }
}
