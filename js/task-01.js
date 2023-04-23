const listElement = document.querySelector("#categories");
//console.log(listElement);
const listItem = listElement.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("ul li");
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${itemCount.length}`);
});
