var userInput = document.getElementById('userInput');
var enterButton = document.getElementById('enter');
var ul = document.querySelector('ul');
var listItem = document.getElementsByTagName('li');

function inputLength() {
    return userInput.value.length;
}
function listLength() {
    return listItem.length;
}

function createListElement() {
    var li = document.createElement('li');
    var liText = document.createTextNode(userInput.value);
    li.appendChild(liText);
    ul.appendChild(li);
    userInput.value = '';

    li.addEventListener("click", addNewStyle);
    function addNewStyle() {
        li.classList.toggle("done");
    }

    var deleteButton = document.createElement("button");
    deleteButtonX = document.createTextNode("X");
    deleteButton.appendChild(deleteButtonX);
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteItem);
    
    function deleteItem() {
        li.classList.toggle("delete");
    }
}

function AddListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function AddListAfterEnter(event) {
    if(inputLength() > 0) {
        userInput.classList.add('validatedInput')
        if(event.which === 13) {
            createListElement();
            userInput.classList.remove('validatedInput')
        }
    }
}

enterButton.addEventListener("click", AddListAfterClick);
userInput.addEventListener("keypress", AddListAfterEnter)