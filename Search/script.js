"use strict";

const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.querySelector(".product-list");
  const product = document.querySelectorAll(".product");
  const productName = document.getElementsByTagName("h2");

  for (let i = 0; i < productName.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

// // Get the search input field
// const searchInput = document.getElementById("search-item");

// // Add an event listener to the search input field
// searchInput.addEventListener("keyup", function () {
//   // Get the search query from the input field
//   const query = searchInput.value;

//   // Search through your data using the query
//   // and update the page with the search results
// });
