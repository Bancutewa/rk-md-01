
const listStudent = [

];

//
renderListStudent();

function renderListStudent() {
    // B1: Lấy được element cần thay đổi
    const tbodyElement = document.querySelector("#table-list-student tbody");
    //   forEach là
    //   for (let index = 0; index < array.length; index++) {
    //     const element = array[index]; === student
    //   }

    // B2: Lấy được nội dụng cần render
    let tbodyHTML = "";
    listStudent.forEach((student, i) => {
        tbodyHTML +=
            `<tr>
                <td>${i + 1}</td>
                <td>${student.Name}</td>
                <td>${student.Email}</td>
                <td>${student.Address}</td>
                <td>${student.Phone}</td>
                <td>${student.gender}</td>
                <td><button onclick="editItem(${student.ID})" >Edit</button> 
                <button onclick="deleteItem(${student.ID})">Delete</button></td>
            </tr>`
    });

    // B3: Gán lại element
    tbodyElement.innerHTML = tbodyHTML;
}
// Form
const formElement = document.querySelector("#form")
formElement.addEventListener("submit", (e) => {
    e.preventDefault()
})

// Ham add student
function createStudent() {
    const item_ID = document.querySelector("#ID").value
    const item_name = document.querySelector("#name").value
    const item_email = document.querySelector("#email").value
    const item_sdt = document.querySelector("#sdt").value
    const item_address = document.querySelector("#address").value
    const item_gender = document.getElementsByName("gender")
    let valueGender = "male"
    for (let i = 0; i < item_gender.length; i++) {
        if (item_gender[i].checked == true) {
            valueGender = item_gender[i].value
            // console.log(valueGender);
        }
    }

    const item = {
        ID: new Date().getTime(),
        Name: item_name,
        Email: item_email,
        Phone: item_sdt,
        Address: item_address,
        gender: valueGender,

    }


    // Chinh sua edit
    const index = listStudent.findIndex((c) => c.ID == item.ID)
    console.log(index);

    if (index >= 0) {
        listStudent.splice(index, 1, item)
    } else {
        listStudent.push(item)
    }
    console.log(1111, listStudent);

    localStorage.setItem("user", JSON.stringify(listStudent))
    renderListStudent()
}

function deleteItem(id) {
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].ID == id) {
            listStudent.splice(i, 1)
        }
    }
    renderListStudent()
}

function editItem(id) {

    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].ID == id) {
            document.querySelector("#name").value = listStudent[i].Name
            document.querySelector("#email").value = listStudent[i].Email
            document.querySelector("#sdt").value = listStudent[i].Phone
            document.querySelector("#address").value = listStudent[i].Address
            document.getElementsByName("gender")
        }
    }
}





