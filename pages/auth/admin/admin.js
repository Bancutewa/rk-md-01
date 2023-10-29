const emailEle = document.querySelector("#email")
const userEle = document.querySelector("#user-name")
const passwordEle = document.querySelector("#password")
const cfPasswordEle = document.querySelector("#confirm-password")


const renderUsers = () => {
    const tbodyElement = document.querySelector(".render");
    tbodyHTML = "";
    users.forEach((user, i) => {
        tbodyHTML += `   
            <tr>
                <td>${(i + 1)}</td>
                <td>${user.user}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>
                    <button onclick="createItem() " class="btn btn-primary">Create</button>
                    <button onclick="editItem('${user.email}')" class="btn btn-primary">Edit</button> 
                    <button onclick="deleteItem('${user.email}')" class="btn btn-primary">Delete</button>
                </td>
            </tr>
        `;
    });
    tbodyElement.innerHTML = tbodyHTML;
}

const deleteItem = (email) => {
    const userIndex = users.findIndex((user) => user.email == email);
    if (userIndex != -1) {
        users.splice(userIndex, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers();
    }
}


const createItem = () => {
    // Lấy thẻ biểu mẫu
    const formInput = document.querySelector(".login-form");

    // Đặt thuộc tính display thành "block" để hiển thị biểu mẫu
    if (formInput.style.display == "block") {
        formInput.style.display = "none";
    } else {
        formInput.style.display = "block"
    }
}
const regis = () => {
    emailVal = emailEle.value
    userlVal = userEle.value
    passwordVal = passwordEle.value
    cfPasswordVal = cfPasswordEle.value

    console.log(emailVal);

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



    // Kiem tra email co bi trung trong LocalStorage khong

    // Ham findIndex tra vi -1 neu khong tim ra
    const index = users.findIndex((c) => c.email == emailVal);
    const indexUsers = users.findIndex((c) => c.user == userlVal);


    if (index >= 0) {
        users[index] = userRegis
        alert("Chinh sua thanh cong")

    } else {
        users.push(userRegis)
        alert("Đã đăng ký moi thành công")
    }
    localStorage.setItem("users", JSON.stringify(users))
    window.location.reload()

}

function editItem(email) {
    createItem() //An hien o Nhap
    const user = users.find((c) => c.email === email)
    document.querySelector("#email").value = user.email
    document.querySelector("#user-name").value = user.user
    document.querySelector("#password").value = user.password
    document.querySelector("#confirm-password").value = user.repassword
}