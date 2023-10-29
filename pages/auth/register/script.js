const emailEle = document.querySelector("#email")
const userEle = document.querySelector("#user-name")
const passwordEle = document.querySelector("#password")
const cfPasswordEle = document.querySelector("#confirm-password")

const regis = () => {
    emailVal = emailEle.value
    userlVal = userEle.value
    passwordVal = passwordEle.value
    cfPasswordVal = cfPasswordEle.value



    const userRegis = {
        email: emailVal,
        user: userlVal,
        password: passwordVal,
        repassword: cfPasswordVal

    }
    // Kiem tra khong duoc de trong

    if (emailVal == "" || userlVal == "" || passwordVal == "" || cfPasswordVal == "") {
        alert("Vui lòng nhập đủ, không được để trống")
        return
    }
    // Kiem tra mat khau duoc nhap dung khong
    if (passwordVal != cfPasswordVal) {
        alert("Bạn đã nhập sai password, vui lòng nhập đúng")
        return
    }

    const users = getUsers();
    const admin = {
        email: "admin",
        user: "admin",
        password: "admin",
        repassword: "admin"
    }
    users.push(admin)

    // Kiem tra email co bi trung trong LocalStorage khong

    // Ham findIndex tra vi -1 neu khong tim ra
    const index = users.findIndex((c) => c.email == emailVal);
    const indexUsers = users.findIndex((c) => c.user == userlVal);


    if (index == -1 && indexUsers == -1) {
        users.push(userRegis)
        localStorage.setItem("users", JSON.stringify(users))
        alert("Đã đăng ký thành công")
        window.location.href = "../../../index.html"

    } else {
        alert("Email và User name đã được đăng ký, vui lòng dùng Email và User name khác")
    }

}