// const getUsers = () => {
//     let users = localStorage.getItem("users");
//     users = !!users ? JSON.parse(users) : [];
//     return users;

// };

// // Tao admin
// const users = getUsers();
// const admin = {
//     email: "admin",
//     user: "admin",
//     password: "admin",
//     repassword: "admin"
// }
// const index = users.findIndex((c) => c.email == admin.email);
// if (index == -1) {
//     users.push(admin)
//     localStorage.setItem("users", JSON.stringify(users))
// }


// const getCurrentUsers = () => {
//     let users = localStorage.getItem("cur_user");
//     users = !!users ? JSON.parse(users) : [];
//     return users;

// };

// // Get Mangas
// const getMangas = () => {
//     let users = localStorage.getItem("mangas");
//     users = !!users ? JSON.parse(users) : [];
//     return users;

// };

// // Chuyen trang dang nhap
// const pageLogin = () => {
//     window.location.href = "/pages/auth/login/index.html";
// }

// // Chuyen trang dang ky
// const pageRegister = () => {
//     window.location.href = "/pages/auth/register/index.html";
// }
// // Chuyen trang Favorite
// const pageFavorite = () => {
//     window.location.href = "/pages/customer/favorite/index.html";
// }




// // Tạo list sản phẩm
// const products = [
//     {
//         id: 1,
//         name: "Berseck",
//         image: "https://st.nettruyenus.com/data/comics/77/berserk.jpg"

//     },
//     {
//         id: 2,
//         name: "Jujutsu no Kaisen",
//         image: "https://st.nettruyenus.com/data/comics/42/chu-thuat-hoi-chien.jpg"
//     },
//     {
//         id: 3,
//         name: "Võ Luyện Đỉnh Phong ",
//         image: "https://st.nettruyenus.com/data/comics/32/vo-luyen-dinh-phong.jpg"

//     },
//     {
//         id: 4,
//         name: "Bâc Thầy Thiết Kế Điền Trang",
//         image: "https://st.nettruyenus.com/data/comics/83/bac-thay-thiet-ke-dien-trang.jpg"
//     },
//     {
//         id: 5,
//         name: "Thám Tử Conan",
//         image: "https://st.nettruyenus.com/data/comics/30/tham-tu-conan.jpg"

//     },
//     {
//         id: 6,
//         name: "Kịch Trường Của Takemichi",
//         image: "https://st.nettruyenus.com/data/comics/94/kich-truong-cua-takemichi.jpg"
//     },
//     {
//         id: 7,
//         name: "Mairimashita! Iruma-kun",
//         image: "https://st.nettruyenus.com/data/comics/113/mairimashita-iruma-kun.jpg"

//     },
//     {
//         id: 8,
//         name: "Đảo Hải Tặc",
//         image: "https://st.nettruyenus.com/data/comics/209/dao-hai-tac-5452.jpg"
//     },
//     {
//         id: 9,
//         name: "Hiệp Khách Giang Hồ",
//         image: "https://st.nettruyenus.com/data/comics/53/hiep-khach-giang-ho.jpg"

//     },
//     {
//         id: 10,
//         name: "Kingdom - Vương Giả Thiên Hạ",
//         image: "https://st.nettruyenus.com/data/comics/53/vuong-gia-thien-ha.jpg"
//     },
//     {
//         id: 11,
//         name: "Vĩnh Hằng Chí Tôn",
//         image: "https://st.nettruyenus.com/data/comics/101/vinh-hang-chi-ton.jpg"

//     },
//     {
//         id: 12,
//         name: "Ánh Sáng Cuối Con Đường",
//         image: "https://st.nettruyenus.com/data/comics/159/anh-sang-cuoi-con-duong.jpg"
//     },
//     {
//         id: 13,
//         name: "Trường Học Siêu Anh Hùng",
//         image: "https://st.nettruyenus.com/data/comics/182/truong-hoc-sieu-anh-hung-3626.jpg"

//     },
//     {
//         id: 14,
//         name: "Trường Học Siêu Anh Hùng",
//         image: "https://st.nettruyenus.com/data/comics/69/black-clover-phap-su-khong-phep-thuat-6382.jpg"
//     },
//     {
//         id: 15,
//         name: "Tôi Đã Chuyển Sinh Thành Slime",
//         image: "https://st.nettruyenus.com/data/comics/78/toi-da-chuyen-sinh-thanh-slime.jpg"

//     },
//     {
//         id: 16,
//         name: "Thất Nghiệp Chuyển Sinh - Làm Lại Hết Sức",
//         image: "https://st.nettruyenus.com/data/comics/52/that-nghiep-chuyen-sinh-lam-lai-het-suc-1929.jpg"
//     },
//     {
//         id: 17,
//         name: "Shuumatsu no Valkyrie",
//         image: "https://st.nettruyenus.com/data/comics/247/shuumatsu-no-valkyrie.jpg"

//     },
//     {
//         id: 18,
//         name: "Mashle: Muscles and Magic",
//         image: "https://st.nettruyenus.com/data/comics/120/mashle-muscles-and-magic.jpg"
//     },
//     {
//         id: 19,
//         name: "Chainsaw man - Thợ Săn Quỷ",
//         image: "https://st.nettruyenus.com/data/comics/41/chainsaw-man-tho-san-quy.jpg"

//     },
//     {
//         id: 20,
//         name: "Healer báo thù",
//         image: "https://st.nettruyenus.com/data/comics/86/healer-bao-thu.jpg"
//     },
//     {
//         id: 21,
//         name: "Tiền đạo số 1",
//         image: "https://st.nettruyenus.com/data/comics/189/tien-dao-so-1.jpg"

//     },
//     {
//         id: 22,
//         name: "Dr.Stone - Hồi Sinh Thế Giới",
//         image: "https://st.nettruyenus.com/data/comics/236/drstone-hoi-sinh-the-gioi-8635.jpg"
//     },
//     {
//         id: 23,
//         name: "Dịch Vụ Cho Thuê Bạn Gái",
//         image: "https://st.nettruyenus.com/data/comics/249/dich-vu-cho-thue-ban-gai-8567.jpg"

//     },
//     {
//         id: 24,
//         name: "Gia Đình Điệp Viên",
//         image: "https://st.nettruyenus.com/data/comics/162/gia-dinh-diep-vien-2317.jpg"
//     },
//     {
//         id: 25,
//         name: "Hội Pháp Sư nhiệm vụ trăm năm",
//         image: "https://st.nettruyenus.com/data/comics/173/fairy-tail-100-year-quest.jpg"

//     },
//     {
//         id: 26,
//         name: "Chuyện Của Hori Và Miyamura",
//         image: "https://st.nettruyenus.com/data/comics/13/chuyen-cua-hori-va-miyamura.jpg"
//     },
//     {
//         id: 27,
//         name: "Naruto - Cửu Vĩ Hồ Ly",
//         image: "https://st.nettruyenus.com/data/comics/220/naruto-cuu-vi-ho-ly.jpg"

//     },
//     {
//         id: 28,
//         name: "THỢ SĂN ẨM THỰC",
//         image: "https://st.nettruyenus.com/data/comics/158/toriko.jpg"
//     },
//     {
//         id: 29,
//         name: "Tao muốn trở thành chúa tể bóng tối!!",
//         image: "https://st.nettruyenus.com/data/comics/228/tao-muon-tro-thanh-chua-te-bong-toi-6263.jpg"

//     },
//     {
//         id: 30,
//         name: "Thế Giới Tiên Hiệp",
//         image: "https://st.nettruyenus.com/data/comics/192/the-gioi-tien-hiep.jpg"
//     }
// ];


// const mangalist = getMangas()
// if (mangalist.length == 0) {
//     localStorage.setItem("mangas", JSON.stringify(products))
// }


// // Render list
// const renderList = () => {
//     // Lay du lieu
//     // Chọn class để render ra HTML
//     const bodyElement = document.querySelector(".manga-list-body")

//     let listBodyHTML = ""

//     for (let index = 0; index < 11; index++) {
//         const product = mangalist[index];
//         listBodyHTML +=
//             `
//             <div onclick="showDetails(${product.id})" class="card-manga">
//             <div class="card-img">
//                 <img
//                   src="${product.image}"
//                   alt="${product.name}"
//                   class="img"
//                 />
//               <div class="time-update">
//                 <span>6 giờ</span>
//               </div>
//               <div class="chapter">
//                 <p>Chapter 46</p>
//               </div>
//             </div>
//             <p class="manga">${product.name}</p>
//           </div>
//             `
//         if (index == 10) {
//             listBodyHTML +=
//                 `
//                 <div class="card-last">
//                   <!-- Cho em hỏi làm sao để input card cuối -->
//                   <div class="card-img">
//                     <img
//                       src="./assets/images/continue.gif"
//                       alt="manga"
//                       class="img"
//                     />
//                   </div>
//                   <div class="continue">
//                     <i class="icons"></i>
//                     <p>Xem thêm</p>
//                   </div>
//                 </div>
//                 `
//         }

//     }
//     bodyElement.innerHTML = listBodyHTML



// }
// const current_User = getCurrentUsers();
// const renderPage = () => {
//     const customerElement = document.querySelector(".customer");

//     if (current_User.length != 0) {
//         console.log(current_User);
//         const customerHTML =
//             `
//         <li class="current-user-name">
//             <p>${current_User.user}</p>
//         </li>
//         <li class="dropdown">
//             <button
//                 class="btn btn-secondary dropdown-toggle"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//             >
//             <i class="fa-solid fa-user"></i>
//             </button>
//             <ul class="dropdown-menu">
//                 <li>
//                     <a class="dropdown-item" href="#">Thong tin nguoi dung</a>
//                 </li>
//                 <li><a class="dropdown-item" href="#" onclick="pageFavorite()">Favorite</a></li>
//                 <li>
//                     <a class="dropdown-item" href="" onclick="logOut()">Dang Xuat</a>
//                 </li>
//             </ul>
//         </li>
//         `;
//         customerElement.innerHTML = customerHTML;
//     } else {
//         const customerHTML =
//             `
//         <li class="login" onclick="pageLogin()">
//             <i class="icons">
//                 <i class="fa-solid fa-right-to-bracket"></i>
//             </i>
//             <span>login</span>
//         </li>

//         <li class="register" onclick="pageRegister()">
//             <i class="icons"><i class="fa-solid fa-registered"></i></i>
//             <span>register</span>
//         </li>
//         `;
//         customerElement.innerHTML = customerHTML;

//     }
// }


// // ===========Bắt sự kiện click hiển thị details==========


// const showDetails = (id) => {
//     localStorage.setItem("id_detail", id)
//     window.location.href = "./pages/customer/product/index.html"
// }
// // Dang xuât
// const logOut = () => {
//     localStorage.removeItem("cur_user") // Xoa User dang dang nhap

//     // window.location.reload();    
// }


const getUsers = () => {
    let users = localStorage.getItem("users");
    users = !!users ? JSON.parse(users) : [];
    return users;

};
// Tao admin
const users = getUsers();
const admin = {
    email: "admin",
    user: "admin",
    password: "admin",
    repassword: "admin"
}
const index = users.findIndex((c) => c.email == admin.email);
if (index == -1) {
    users.push(admin)
    localStorage.setItem("users", JSON.stringify(users))
}
const getCurrentUsers = () => {
    let users = localStorage.getItem("cur_user");
    users = !!users ? JSON.parse(users) : [];
    return users;

};

// Get Mangas
const getMangas = () => {
    let users = localStorage.getItem("mangas");
    users = !!users ? JSON.parse(users) : [];
    return users;

};

// Chuyen trang dang nhap
const pageLogin = () => {
    window.location.href = "/pages/auth/login/index.html";
}

// Chuyen trang dang ky
const pageRegister = () => {
    window.location.href = "/pages/auth/register/index.html";
}
// Chuyen trang Favorite
const pageFavorite = () => {
    window.location.href = "/pages/customer/favorite/index.html";
}
const pageAdmin = () => {
    window.location.href = "/pages/auth/admin/index.html";

}



// Tạo list sản phẩm
const products = [
    {
        id: 1,
        name: "Berseck",
        image: "https://st.nettruyenus.com/data/comics/77/berserk.jpg"

    },
    {
        id: 2,
        name: "Jujutsu no Kaisen",
        image: "https://st.nettruyenus.com/data/comics/42/chu-thuat-hoi-chien.jpg"
    },
    {
        id: 3,
        name: "Võ Luyện Đỉnh Phong ",
        image: "https://st.nettruyenus.com/data/comics/32/vo-luyen-dinh-phong.jpg"

    },
    {
        id: 4,
        name: "Bâc Thầy Thiết Kế Điền Trang",
        image: "https://st.nettruyenus.com/data/comics/83/bac-thay-thiet-ke-dien-trang.jpg"
    },
    {
        id: 5,
        name: "Thám Tử Conan",
        image: "https://st.nettruyenus.com/data/comics/30/tham-tu-conan.jpg"

    },
    {
        id: 6,
        name: "Kịch Trường Của Takemichi",
        image: "https://st.nettruyenus.com/data/comics/94/kich-truong-cua-takemichi.jpg"
    },
    {
        id: 7,
        name: "Mairimashita! Iruma-kun",
        image: "https://st.nettruyenus.com/data/comics/113/mairimashita-iruma-kun.jpg"

    },
    {
        id: 8,
        name: "Đảo Hải Tặc",
        image: "https://st.nettruyenus.com/data/comics/209/dao-hai-tac-5452.jpg"
    },
    {
        id: 9,
        name: "Hiệp Khách Giang Hồ",
        image: "https://st.nettruyenus.com/data/comics/53/hiep-khach-giang-ho.jpg"

    },
    {
        id: 10,
        name: "Kingdom - Vương Giả Thiên Hạ",
        image: "https://st.nettruyenus.com/data/comics/53/vuong-gia-thien-ha.jpg"
    },
    {
        id: 11,
        name: "Vĩnh Hằng Chí Tôn",
        image: "https://st.nettruyenus.com/data/comics/101/vinh-hang-chi-ton.jpg"

    },
    {
        id: 12,
        name: "Ánh Sáng Cuối Con Đường",
        image: "https://st.nettruyenus.com/data/comics/159/anh-sang-cuoi-con-duong.jpg"
    },
    {
        id: 13,
        name: "Trường Học Siêu Anh Hùng",
        image: "https://st.nettruyenus.com/data/comics/182/truong-hoc-sieu-anh-hung-3626.jpg"

    },
    {
        id: 14,
        name: "Trường Học Siêu Anh Hùng",
        image: "https://st.nettruyenus.com/data/comics/69/black-clover-phap-su-khong-phep-thuat-6382.jpg"
    },
    {
        id: 15,
        name: "Tôi Đã Chuyển Sinh Thành Slime",
        image: "https://st.nettruyenus.com/data/comics/78/toi-da-chuyen-sinh-thanh-slime.jpg"

    },
    {
        id: 16,
        name: "Thất Nghiệp Chuyển Sinh - Làm Lại Hết Sức",
        image: "https://st.nettruyenus.com/data/comics/52/that-nghiep-chuyen-sinh-lam-lai-het-suc-1929.jpg"
    },
    {
        id: 17,
        name: "Shuumatsu no Valkyrie",
        image: "https://st.nettruyenus.com/data/comics/247/shuumatsu-no-valkyrie.jpg"

    },
    {
        id: 18,
        name: "Mashle: Muscles and Magic",
        image: "https://st.nettruyenus.com/data/comics/120/mashle-muscles-and-magic.jpg"
    },
    {
        id: 19,
        name: "Chainsaw man - Thợ Săn Quỷ",
        image: "https://st.nettruyenus.com/data/comics/41/chainsaw-man-tho-san-quy.jpg"

    },
    {
        id: 20,
        name: "Healer báo thù",
        image: "https://st.nettruyenus.com/data/comics/86/healer-bao-thu.jpg"
    },
    {
        id: 21,
        name: "Tiền đạo số 1",
        image: "https://st.nettruyenus.com/data/comics/189/tien-dao-so-1.jpg"

    },
    {
        id: 22,
        name: "Dr.Stone - Hồi Sinh Thế Giới",
        image: "https://st.nettruyenus.com/data/comics/236/drstone-hoi-sinh-the-gioi-8635.jpg"
    },
    {
        id: 23,
        name: "Dịch Vụ Cho Thuê Bạn Gái",
        image: "https://st.nettruyenus.com/data/comics/249/dich-vu-cho-thue-ban-gai-8567.jpg"

    },
    {
        id: 24,
        name: "Gia Đình Điệp Viên",
        image: "https://st.nettruyenus.com/data/comics/162/gia-dinh-diep-vien-2317.jpg"
    },
    {
        id: 25,
        name: "Hội Pháp Sư nhiệm vụ trăm năm",
        image: "https://st.nettruyenus.com/data/comics/173/fairy-tail-100-year-quest.jpg"

    },
    {
        id: 26,
        name: "Chuyện Của Hori Và Miyamura",
        image: "https://st.nettruyenus.com/data/comics/13/chuyen-cua-hori-va-miyamura.jpg"
    },
    {
        id: 27,
        name: "Naruto - Cửu Vĩ Hồ Ly",
        image: "https://st.nettruyenus.com/data/comics/220/naruto-cuu-vi-ho-ly.jpg"

    },
    {
        id: 28,
        name: "THỢ SĂN ẨM THỰC",
        image: "https://st.nettruyenus.com/data/comics/158/toriko.jpg"
    },
    {
        id: 29,
        name: "Tao muốn trở thành chúa tể bóng tối!!",
        image: "https://st.nettruyenus.com/data/comics/228/tao-muon-tro-thanh-chua-te-bong-toi-6263.jpg"

    },
    {
        id: 30,
        name: "Thế Giới Tiên Hiệp",
        image: "https://st.nettruyenus.com/data/comics/192/the-gioi-tien-hiep.jpg"
    }
];
const mangalist = getMangas()
if (mangalist.length == 0) {
    localStorage.setItem("mangas", JSON.stringify(products))
}


// Render list
const renderList = () => {
    // Lay du lieu
    const mangalist = getMangas()
    // Chọn class để render ra HTML
    const bodyElement = document.querySelector(".manga-list-body")

    let listBodyHTML = ""

    for (let index = 0; index < mangalist.length; index++) {
        const product = mangalist[index];
        listBodyHTML +=
            `
            <div onclick="showDetails(${product.id})" class="card-manga">
            <div class="card-img">
                <img
                  src="${product.image}"
                  alt="${product.name}"
                  class="img"
                />
              <div class="time-update">
                <span>6 giờ</span>
              </div>
              <div class="chapter">
                <p>Chapter 46</p>
              </div>
            </div>
            <p class="manga">${product.name}</p>
          </div>
            `
        // if (index == 10) {
        //     listBodyHTML +=
        //         `
        //         <div class="card-last">
        //           <!-- Cho em hỏi làm sao để input card cuối -->
        //           <div class="card-img">
        //             <img
        //               src="./assets/images/continue.gif"
        //               alt="manga"
        //               class="img"
        //             />
        //           </div>
        //           <div class="continue">
        //             <i class="icons"></i>
        //             <p>Xem thêm</p>
        //           </div>
        //         </div>
        //         `
        // }

    }
    bodyElement.innerHTML = listBodyHTML



}
const renderPage = () => {
    const current_User = getCurrentUsers();
    console.log(current_User);
    const customerElement = document.querySelector(".customer");
    if (current_User.email == "admin") {
        const customerHTML =
            `
    <li class="current-user-name">
        <p>${current_User.user}</p>
    </li>
    <li class="dropdown">
        <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
        <i class="fa-solid fa-user"></i>
        </button>
        <ul class="dropdown-menu">
            <li>
                <a class="dropdown-item" href="#" onclick="pageAdmin()">Quan Ly Users</a>
            </li>
            <li><a class="dropdown-item" href="#" onclick="pageAdmin()" >Quan Ly Mangas</a></li>
            <li>
                <a class="dropdown-item" href="" onclick="logOut()">Dang Xuat</a>
            </li>
        </ul>
    </li>
    `;
        customerElement.innerHTML = customerHTML;
    }
    else if (current_User.length != 0) {
        console.log(current_User);
        const customerHTML =
            `
        <li class="current-user-name">
            <p>${current_User.user}</p>
        </li>
        <li class="dropdown">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
            <i class="fa-solid fa-user"></i>
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="#">Thong tin nguoi dung</a>
                </li>
                <li><a class="dropdown-item" href="#" onclick="pageFavorite()">Favorite</a></li>
                <li>
                    <a class="dropdown-item" href="" onclick="logOut()">Dang Xuat</a>
                </li>
            </ul>
        </li>
        `;
        customerElement.innerHTML = customerHTML;
    }

    else {
        const customerHTML =
            `
        <li class="login" onclick="pageLogin()">
            <i class="icons">
                <i class="fa-solid fa-right-to-bracket"></i>
            </i>
            <span>login</span>
        </li>

        <li class="register" onclick="pageRegister()">
            <i class="icons"><i class="fa-solid fa-registered"></i></i>
            <span>register</span>
        </li>
        `;
        customerElement.innerHTML = customerHTML;

    }
}


// ===========Bắt sự kiện click hiển thị details==========


const showDetails = (id) => {
    localStorage.setItem("id_detail", id)
    window.location.href = "./pages/customer/product/index.html"
}
// Dang xuât
const logOut = () => {
    localStorage.removeItem("cur_user") // Xoa User dang dang nhap

    // window.location.reload();    
}
