const categoriesEl = document.querySelector('#categories');
const categoriesElChilds = categoriesEl.children;
const childrenCount = categoriesElChilds.length;
console.log(`Number of categories: ${childrenCount}`);

const showCategory = [...categoriesElChilds].map(el => {
  const categoryName = el.firstElementChild.textContent;
  const categryElCount = el.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categryElCount}`);
});
