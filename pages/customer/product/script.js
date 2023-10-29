
const getUserCarts = (user) => {
    let cart = localStorage.getItem(user);
    cart = !!cart ? JSON.parse(cart) : [];
    return cart;
};

// Lay gia tri can sua
const nameEle = document.querySelector(".manga-name > h2");
const anotherNameEle = document.querySelector(".anotherName");
const titleEle = document.querySelector("#title");
const imgEle = document.querySelector(".manga-infor-image > img");

// Bat ID cua san pham
const getId = localStorage.getItem("id_detail");
const mangas = getMangas()

mangas.forEach(manga => {
    if (manga.id == getId) {
        nameEle.innerHTML = manga.name;
        titleEle.innerHTML = manga.name
        anotherNameEle.innerHTML = manga.name;
        imgEle.src = manga.image;
    }
});
// Tao obj cart cua user Luu lai thong tin san pham muon mua
const current_User = getCurrentUsers();
const buyProduct = getUserCarts(current_User.user)
// console.log(buyProduct);
// Tao obj cart cua user
const addToCart = () => {
    // Tìm ID của sản phẩm
    const mangaBuy = mangas.find(manga => manga.id == getId);
    if (JSON.parse(localStorage.getItem("cur_user"))) {
        if (mangaBuy) {
            const existingItem = buyProduct.find(item => item.id == getId); // Tìm trong cart có Sản Phẩm này không
            if (existingItem) {
                existingItem.quantity += 1; // Tăng số lượng sản phẩm đã có
            } else {
                mangaBuy.quantity = 1; // Đặt số lượng ban đầu là 1
                buyProduct.push(mangaBuy); // Thêm sản phẩm vào giỏ hàng
            }
            alert("Truyen da duoc them")
            localStorage.setItem(current_User.user, JSON.stringify(buyProduct));
        }
    } else {
        alert("Dang nhap truoc khi them yeu thich")
    }
}

