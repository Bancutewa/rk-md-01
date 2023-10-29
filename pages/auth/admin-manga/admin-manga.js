const idMangaEle = document.querySelector("#idManga")
const nameMangaEle = document.querySelector("#nameManga")
const imgMangaEle = document.querySelector("#imgURL")



const mangas = getMangas()

// Render List mangas

const showAllMangas = () => {
  // Bat thang can show
  const tbodyEle = document.querySelector(".render")
  let tbodyHTML = ""
  mangas.forEach((manga, i) => {
    tbodyHTML +=
      `
      <tr>
      <td>${(i + 1)}</td>
      <td>
        <img src="${manga.image}" alt="${manga.name}" />
      </td>
      <td>${manga.name}</td>
      <td>
        ${manga.id}
      </td>
      <td>
        <button onclick="deleteItem(${manga.id})"  class="btn btn-primary">Delete</button>
          <button
            onclick="showEditBox(${manga.id})"
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Chinh sua thong tin cua truyen
        </button>
      </td>
    </tr>  
      `
  })
  tbodyEle.innerHTML = tbodyHTML

}
// Xoa truyen
const deleteItem = (ID) => {
  const index = mangas.findIndex((manga) => manga.id == ID);
  if (index >= 0) {
    mangas.splice(index, 1);
    localStorage.setItem("mangas", JSON.stringify(mangas));
    showAllMangas();
  }
};


// Them moi truyen
const CreateNewManga = () => {
  // Set ID Manga Mac Dinh
  idMangaEle.value = mangas.length + 1;
  nameMangaEle.value = "";
  imgMangaEle.value = "";
}


// Chinh sua truyen
const showEditBox = (id) => {
  let idValue = id;
  idMangaEle.value = idValue;

  const manga = mangas.find((mangaLocal) => mangaLocal.id == idValue);
  if (manga) {
    nameMangaEle.value = manga.name;
    imgMangaEle.value = manga.image;
  } else {
    nameMangaEle.value = "";
    imgMangaEle.value = "";
  }
}

// Them moi truyen
const editManga = () => {

  const idValue = idMangaEle.value;
  const nameValue = nameMangaEle.value;
  const imgValue = imgMangaEle.value;

  if (!idValue || !nameValue || !imgValue) {
    alert("Vui lòng nhập đủ, không được để trống");
    return;
  }

  const index = mangas.findIndex((manga) => manga.id == idValue);
  const newManga = {
    id: idValue,
    name: nameValue,
    image: imgValue,
  };

  if (index >= 0) {
    mangas[index] = newManga;
    alert("Da chinh sua manga");
  } else {
    mangas.push(newManga);
    alert("Da them moi manga");
  }

  localStorage.setItem("mangas", JSON.stringify(mangas));
  showAllMangas();
};

showAllMangas();

