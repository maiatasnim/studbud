//https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/

let addFolder = document.querySelector('.add_folder');
addFolder.addEventListener("click", createFolder);

function createFolder() {
    const folder_div = document.createElement("div");
    folder_div.classList.add("folder");

    // Creates the title for the folder
    const folder_txt = document.createElement("h4");
    folder_txt.innerHTML="new folder";
    folder_div.appendChild(folder_txt);  

    // Creates the delete button for each folder
    const removeFolder = document.createElement("i");
    removeFolder.classList.add("fa-solid");
    removeFolder.classList.add("fa-xmark");

    removeFolder.addEventListener("click", () => {
        removeFolder.parentElement.style.display = "none";
    });

    // Creates edit button for each folder
    // Hitting enter key after editing saves changes
    const editFolder = document.createElement("i");
    editFolder.classList.add("fa-solid");
    editFolder.classList.add("fa-pen");

    editFolder.addEventListener("click", () => {
        folder_txt.contentEditable = "true";
        alert('Press enter to save changes');
    });

    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            folder_txt.contentEditable = "false";
          }
    });

    // Attaching icons to folder
    folder_div.appendChild(removeFolder);
    folder_div.appendChild(editFolder);

    // Creating list for each folder
    const folderItems = document.createElement('div');
    folderItems.classList.add("folder_items");

    // Adding button for creating new items
    const addItemsBtn = document.createElement('i');
    addItemsBtn.classList.add('fa-solid');
    addItemsBtn.classList.add('fa-plus');

    addItemsBtn.addEventListener('click', () => {
        document.querySelector('.materials_modal').style.display = "block";
    });


    // Adding button to close list
    const closeListBtn = document.createElement("i");
    closeListBtn.classList.add("fa-solid");
    closeListBtn.classList.add("fa-xmark");

    closeListBtn.addEventListener("click", () => {
        closeListBtn.parentElement.style.display = "none";
    });

    // Creating ul to hold items
    const resourceList = document.createElement("ul");
    resourceList.classList.add("items_list");

    folderItems.appendChild(addItemsBtn);
    folderItems.appendChild(closeListBtn);
    folderItems.appendChild(resourceList);

    folder_div.appendChild(folderItems);

    // Creating the folder in the folder list
    document.querySelector('.folders_list').appendChild(folder_div);
}






// if (folderButton) {
//     // folderButton.addEventListener("click", createList);
//     console.log('confirm')
// }

// function createList() {
//     // Attaching list to folder
//     const folderItems = document.createElement('div');
//     folderItems.classList.add("folder_items");

//     folderButton.appendChild(folderItems);
//     console.log('poosy')
// }

// Checking to see if the folder exists first
// document.addEventListener( "click", showList );

const folderButton = document.querySelectorAll('.folder');

folderButton.addEventListener('click', console.log('hello'))

// Function to make list visible when you click on a folder
// function showList(event){
//     var element = event.target;
//     if(element.tagName == 'DIV' && element.classList.contains("folder")){

//         let folderList = document.querySelectorAll('.folder > .folder_items');
//         // folderList.forEach( function(folder_items) {
//         //     folder_items.style.display = 'block';

//         // });
//         for (let i = 0; i < folderList.length; i++) {
//             // Making sure the tasklist doesn't get deleted by checking the index of the column container
//                 folderList[i].style.display = 'block';
//               }
//             }
//           }
    


// Functionality for the close modal button
const materialModal = document.querySelector('.materials_modal');
const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', () => {
    materialModal.style.display = "none";
});

const addResource = document.querySelector(".submit_item");
addResource.addEventListener("click", createItem);

// Creating a function to store the input values from the new resource form
function createItem() {
  // Creates the div and inputted values
  const list_item = document.createElement("li");
  list_item.classList.add("item");

  const input_itemName_val = document.getElementById("item_name_input").value;
  const input_author_val = document.getElementById("author_input").value;
  const input_url_val = document.getElementById("url_input").value;
  // Creating link for list
  const url = document.createElement('a'); 
    
  // Create the text node for anchor element
  var link = document.createTextNode("source");
    
  // Attatch text node to anchor element
  url.appendChild(link); 
    
  // Set the href property.
  url.href = input_url_val; 

  // Creates the text for the card
  const txt = document.createTextNode(input_itemName_val + ' ' + input_author_val + ' ');

  // Attatches the text to the card div, and adds the drag functionality
  list_item.appendChild(txt);
  list_item.appendChild(url);

  // Creates the delete button for each card
  const del = document.createElement("i");
  del.classList.add("fa-solid");
  del.classList.add("fa-xmark");

  del.addEventListener("click", () => {
    del.parentElement.style.display = "none";
  });

  list_item.appendChild(del);

  // Finally adding card to the tasklist
  let lists = document.querySelectorAll('.items_list');
  for (let i = 0; i < lists.length; i++) {
    lists[i].appendChild(list_item);
}

  // Resetting form after a task is added, and removing the overlay and form from view
  document.querySelectorAll(".item_input").value = "";
  document.querySelector(".materials_modal").style.display = "none";
}

