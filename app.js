// ===========================Câu điều kiện================================
// cấu trúc của 1 câu điều kiện
// if (condition) {
//    Logic code được thực thi
// }


// ===========================Câu điều kiện rẽ nhánh if esle================================
// Cấu trúc:
// if (condition) {
//     //logic code ddc thực thi
// } else {
//     // logic code được thực thi
// }


// ===========================Câu điều kiện rẽ nhánh if - else if - esle================================
// cấu trúc
//     if (condition) {
//         // logic code dc thuc thi
//     }else if (condition) {
//         // logic code dc thuc thi
//     }esle {
//         // logic code dc thuc thi
//     }
// const age = 12

// if (age < 18) {
//     console.log("Ban đang o do tuoi di hoc");
// } else if (age == 18) {
//     console.log("Ban da du tuoi di nghia vu");
// } else {
//     console.log("Ban da lon roi, di kiem tien thou");
// }


// ===========================Câu điều kiện rẽ nhánh switch-case================================

// switch (expression) {
//     // Kiểm tra result === value
//     case value1:
//     // Thực thi khối lệnh 1
//     break;
//     case value2:
//     // Thực thi khối lệnh 2
//     break;
//     case valueN:
//     // Thực thi khối lệnh n
//     break;
//     default:
//     // Thực thi khối lệnh khi tất cả các case không được thực hiện
//    }
// const age = 18
// switch (age) {
//     // Kiểm tra result === value
//     case age < 18:
//         console.log("Em chua 19");
//         break;
//     case age == 18:
//         console.log("Em phai di tu");
//         break;
//     case age > 18 && age <= 24:
//         console.log("Em con hoc dai hoc");
//         break;
//     default:
//         console.log("Di kiem tien thoi");
// }


// // Cho nguoi dung nhap vao mot so, in ra so ngay tuong ung trong tuan
// const d = new Date;
// let day = d.getDay
// console.log(day);
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Invalid!!!");
// }


// ===========================Vòng lặp for================================

// Cấu trúc:
// for(initialization, condition, increment) {
//     // logic code đc thực thi
// }
// initialization: Giá trị khởi tạo của vòng lặp
// condition: Điều kiện của vòng lặp
// increment: bước nhảy của vòng lặp || Bước thực thi sau khi vòng lặp đc thực hiện

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// cho người dùng nhập vào 1 số, in ra tổng của số đó
// const n = Number(prompt("enter number"))
// for (let i = 1; i <= 5; i++) {
//     console.log(n + "+" + i + "=" + (n + i));
// }

// ===========================Vòng lặp while================================
// cấu trúc
// while (condition) {
//     // logic được thực thi
// }
// - mục đích sử dụng: Vòng lặp vô hạn không biết trc số lần lặp
// let check = 1;
// while (check < 5) {
//     console.log(check);
//     check++;
// }


// ===========================Thực hành 1==========================
// let year = Number(prompt("Enter the year"))

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("Nam nhuan");
//         } else {
//             console.log("Khong phai nam nhuan");
//         }
//     } else {
//         console.log("Nam nhuan");
//     }
// } else {
//     console.log("Khong phai nam nhuan");
// }
// ===========================Thực hành 2==========================


// let userName = prompt("Who's there?", '');

// if (userName == "Admin") {
//     let passWord = prompt("Enter password")
//     if (passWord == "The Master") {
//         console.log("Welcome")
//     } else if (passWord = null) {
//         console.log("Canceled");
//     } else {
//         console.log("I don't know you");
//     }
// } else if (userName == null) {
//     console.log("Caneled");
// } else {
//     console.log("I don't know you");
// }
let imgObj = null;
imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;