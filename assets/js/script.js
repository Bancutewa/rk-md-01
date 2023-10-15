function ex_1() {
    const data = localStorage.getItem("user") // Khong co tra ve null
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))
    console.log(data);
    console.log("Kiem tra user Login", userLogin.email);

}

function ex_2() {
    localStorage.setItem("user", "Tran Ngoc Tien") // Khong tra ve --> Undefined
    localStorage.setItem(
        "userLogin",
        JSON.stringify({ email: "user@example.com", id: 1 })
    );

    console.log("Kiem tra data");

}

function ex_3() {

    sessionStorage.removeItem("user")
}

function ex_4() {
    const data = sessionStorage.getItem("user") // Khong co tra ve null
    const userLogin = JSON.parse(sessionStorage.getItem("userLogin"))
    console.log(data);
    console.log("Kiem tra user Login", userLogin.email);

}

function ex_5() {
    sessionStorage.setItem("user", "Tran Ngoc Tien") // Khong tra ve --> Undefined
    sessionStorage.setItem(
        "userLogin",
        JSON.stringify({ email: "user@example.com", id: 1 })
    );

    console.log("Kiem tra data");

}

function ex_6() {

    sessionStorage.removeItem("user")
}

function ex_7() {
    document.cookie = ("lgi=01230120313200")
    document.cookie = ("user=01230120313200; expires=Thu, 05 Jan 2024 23:59:00 UTC")
}