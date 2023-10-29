
const login = () => {
    const userVal = document.querySelector("#username").value;
    const passwordVal = document.querySelector("#password").value;

    const users = getUsers();

    // Kiểm tra xem đã có người dùng trong Local Storage chưa
    const userIndex = users.findIndex((user) => user.user == userVal);

    if (userIndex != -1) {
        // Người dùng tồn tại, kiểm tra mật khẩu
        if (users[userIndex].password == passwordVal) {
            // Lưu thông tin người dùng vào Local Storage
            localStorage.setItem("cur_user", JSON.stringify(users[userIndex]));

            // Kiểm tra xem có trang trước đó không
            if (document.referrer) {
                // Điều hướng người dùng trở lại trang trước đó
                window.location.href = document.referrer;
            } else {
                // Nếu không có trang trước đó, điều hướng về trang chính
                window.location.href = "../../../index.html";
            }
        } else {
            alert("Nhập sai mật khẩu");
        }
    } else {
        alert("Nhập sai tên đăng nhập");
    }
}

