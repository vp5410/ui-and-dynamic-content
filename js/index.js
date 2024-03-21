function addItem() {
  var input = document.getElementById("itemInput");
  var value = input.value.trim();
  var errorMessage = document.getElementById("errorMessage");
  if (value === "") {
    errorMessage.textContent = "Nothing entered!";
    return;
  }
  errorMessage.textContent = "";

  var itemList = document.getElementById("itemList");
  var li = document.createElement("li");
  li.textContent = value;
  li.style.color = "black";

  var crossIcon = document.createElement("i");
  crossIcon.className = "fas fa-times-circle"; 
  crossIcon.style.marginLeft = "200px"; 
  crossIcon.style.cursor = "pointer"; 
  crossIcon.onclick = function () {
    itemList.removeChild(li); 
  };
  li.appendChild(crossIcon);
  itemList.appendChild(li);

  input.value = "";
}
