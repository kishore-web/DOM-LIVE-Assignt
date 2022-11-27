let addButton = document.getElementById("submit")
let inputVal = document.getElementById("url")
let mainContainer = document.getElementById("main-container")
let selectItems= document.getElementById("select-items")
let warning = document.getElementById("warning")

addButton.addEventListener("click", (e)=> {
  e.preventDefault();
})

addButton.addEventListener("click", addImage);
function addImage() {
  if(inputVal.value=="") {
    warning.innerText = "Please enter valid URL"
    setTimeout (() => {
      warning.innerText = ""
    }, 1000);
  } else {
  const mainDiv = document.createElement("div")
  const imgDiv = document.createElement("img")
  const deleteButton = document.createElement("button")
  imgDiv.setAttribute("src", inputVal.value)
  
  mainDiv.setAttribute("class","mainDiv")
  imgDiv.setAttribute("class","img-pro")
    deleteButton.innerText = "Delete"
    deleteButton.setAttribute("class", "del")
  mainDiv.append(imgDiv,deleteButton)
  
  mainContainer.appendChild(mainDiv);
  inputVal.value = ""
  }
}

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
  }
});



