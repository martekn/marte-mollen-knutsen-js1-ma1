const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add = "subheading";

// Question 5
const paragraphs = document.querySelectorAll("p");

for (const paragraph of paragraphs) {
  paragraph.style.color = "red";
}

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
const logListItems = function (list) {
  for (const listItem of list) {
    console.log(listItem.name);
  }
};

logListItems(cats);

// Question 8
const createCats = function (cats) {
  let html = "";
  for (const cat of cats) {
    html += `
      <div>
        <h5>${cat.name}</h5>
        <p>${cat?.age ?? "Age unknown"}</p>
      </div>
    `;
  }
  return html;
};

document.querySelector(".cat-container").innerHTML = createCats(cats);
