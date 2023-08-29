var productName = document.getElementById("nameinput")
var productPrice = document.getElementById("priceinput")
var productCategory = document.getElementById("Category-input")
var productdesc = document.getElementById("desc-input")
var searchinput = document.getElementById("searchinput")
var addBtn = document.getElementById("addBtn")
var updateBtn = document.getElementById("updateBtn")
var indexGlobal = 0

var productlist = []

if (localStorage.getItem("Products") != null) {
  productlist = JSON.parse(localStorage.getItem("Products"))
  displayProducts()
}

function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    Category: productCategory.value,
    Description: productdesc.value
  }
  productlist.unshift(product)
  localStorage.setItem("Products", JSON.stringify(productlist))
  displayProducts()
  ProductClear()

}


function setProduct(index) {

  indexGlobal = index

  var currentProduct = productlist[index]

  productName.value = currentProduct.name
  productPrice.value = currentProduct.price
  productCategory.value = currentProduct.Category
  productdesc.value = currentProduct.Description

  updateBtn.classList.remove("d-none")
  addBtn.classList.add("d-none")

}




function displayProducts() {
  var cartoona = ""
  for (var i = 0; i < productlist.length; i++) {

    cartoona += `<tr>
        <td>
          `+ i + `
        </td>
        <td>
        `+ productlist[i].name + `
        </td>
        <td>
        `+ productlist[i].price + `
        </td>
        <td>
        `+ productlist[i].Category + `
        </td>
        <td>
        `+ productlist[i].Description + `
        </td>
        <td>
          <button onclick="setProduct(`+ i + `)" class="btn btn-outline-warning">Update</button>
        </td>
        <td>
          <button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>`

  }
  document.getElementById("tableBody").innerHTML = cartoona
}



function deleteProduct(productIndex) {
  productlist.splice(productIndex, 1); //splice has the abilty to point at a specefic element within the array to remove it
  localStorage.setItem("Products", JSON.stringify(productlist));
  displayProducts();
}



function searchactive() {
  var searchvalue = searchinput.value.toLowerCase()
  var cartoona = ""
  for (var i = 0; i < productlist.length; i++) {

    if (productlist[i].name.toLowerCase().includes(searchvalue) && productlist[i].name.slice(0, 1).toLowerCase() === searchvalue.slice(0, 1)) {

      cartoona += `<tr>
        <td>
          `+ i + `
        </td>
        <td>
        `+ productlist[i].name + `
        </td>
        <td>
        `+ productlist[i].price + `
        </td>
        <td>
        `+ productlist[i].Category + `
        </td>
        <td>
        `+ productlist[i].Description + `
        </td>
        <td>
          <button class="btn btn-outline-warning">Update</button>
        </td>
        <td>
          <button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>`

    }



  }
  document.getElementById("tableBody").innerHTML = cartoona
}



function ProductClear() {
  document.getElementById("nameinput").value = ""
  document.getElementById("priceinput").value = ""
  document.getElementById("Category-input").value = ""
  document.getElementById("desc-input").value = ""
}




updateBtn.addEventListener("click", function () {
  var product = {
    name: productName.value,
    price: productPrice.value,
    Category: productCategory.value,
    Description: productdesc.value
  }

  

  productlist.splice(indexGlobal, 1, product)
  localStorage.setItem("Products", JSON.stringify(productlist))
  displayProducts()
  ProductClear()

updateBtn.classList.add("d-none")
  addBtn.classList.remove("d-none")

})




