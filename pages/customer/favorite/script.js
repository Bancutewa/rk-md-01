const getCarts = () => {
    let cart = localStorage.getItem("cart-manga");
    cart = !!cart ? JSON.parse(cart) : [];
    return cart;
};

// Lấy Usercart

const getUserCarts = (user) => {
    let cart = localStorage.getItem(user);
    cart = !!cart ? JSON.parse(cart) : [];
    return cart;
};

const listCart = getCarts()


const current_User = getCurrentUsers();
const current_Cart = getUserCarts(current_User.user)

// renderListCard()
const renderListCard = () => {
    const tbodyElement = document.querySelector(".render")
    let tbodyHTML = ""
    current_Cart.forEach((cart, i) => {
        tbodyHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>
                    <img src="${cart.image}" alt="${cart.name}" />
                </td>
                <td>${cart.name}</td>
                <td>
                <div class="upDown">
                  <button onclick="minus_quantity(${cart.id})" class="down">-</button>
                  <p>${cart.quantity}</p>
                  <button onclick="add_quantity(${cart.id})" class="up">+</button>
                </div>
              </td>
                <td>${cart.price}</td>
                <td>
                    <button onclick="deleteItem(${cart.id})">Delete</button>
                </td>
            </tr>`
    });
    tbodyElement.innerHTML = tbodyHTML;
}
// renderListCard()


// Xoa cart
const deleteItem = (ID) => {
    current_Cart.forEach((cart, i) => {
        if (cart.id == ID) {
            current_Cart.splice(i, 1)
        }
    })
    localStorage.setItem(current_User.user, JSON.stringify(current_Cart));
    renderListCard()
}

// Them so luong san pham

const add_quantity = (id) => {
    current_Cart.forEach((cart, i) => {
        if (cart.id == id) {
            cart.quantity++
        }
    })
    localStorage.setItem(current_User.user, JSON.stringify(current_Cart));
    renderListCard()
}

// Giam so luong san pham

const minus_quantity = (id) => {
    current_Cart.forEach((cart, i) => {
        if (cart.id == id) {
            cart.quantity--
        }
    })

    localStorage.setItem(current_User.user, JSON.stringify(current_Cart));
    renderListCard()
}
