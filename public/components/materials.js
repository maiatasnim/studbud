
const showModal = document.querySelector('.add_folder');
const folderModal = document.querySelector('.new_folder_modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.getElementById("overlay");

// Event listeners that show and close the add new folder modal
showModal.addEventListener("click", () => {
    folderModal.style.display = "block";
    overlay.classList.add("active");
});

closeModal.addEventListener('click', () => {
    folderModal.style.display = "none";
    overlay.classList.remove("active");
})

// FOLDERS

const addFolder = document.querySelector('.submit_folder');
addFolder.addEventListener('click', createFolder);

// Function to create new folder when user submits add folder modal
function createFolder() {
    
    // Grabs user input for the folder name
    const folder_txt_val = document.getElementById("folder_name_input").value;
    
    // Checks to see if user has made an input, if not will show an alert
    if (folder_txt_val) {
        
        // Creating folder
        const folder_div = document.createElement("div");
        folder_div.classList.add("folder");
        
        // Creating div for header elements
        folder_div_header = document.createElement('div');
        folder_div_header.classList.add('folder_header');
        
        // Creates the title for the folder, which is set to whatever user named it
        // then appends to folder header div
        const folder_txt = document.createElement("p");
        folder_txt.innerHTML= folder_txt_val;
        
        folder_div_header.appendChild(folder_txt);  
        
        // Creates div for button elements
        const folder_buttons = document.createElement('div');
        folder_buttons.classList.add('folder_button_div')
        
        // Creates the delete button for each folder
        const removeFolder = document.createElement("i");
        removeFolder.classList.add("fa-solid");
        removeFolder.classList.add("fa-xmark");
        
        removeFolder.addEventListener("click", () => {
            removeFolder.closest('div:nth-child(1)').style.display = 'none';
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
        
        // Attaching icons to button div, and attaching that to header div
        folder_buttons.appendChild(removeFolder);
        folder_buttons.appendChild(editFolder);
        folder_div_header.appendChild(folder_buttons);
        
        // Appending header div to folder
        folder_div.appendChild(folder_div_header);
        
        // Creating ul to hold items and appending to folder
        const resourceList = document.createElement("ul");
        resourceList.classList.add("items_list");
        // Adding id so when user chooses folder from new resource folder, the
        // resource will be appended to correct folder
        resourceList.id = folder_txt_val;
        
        folder_div.appendChild(resourceList);
        
        // Adding the name of the folder to options list in the new resource form
        const folderOptions = document.getElementById('folder_input');
        const newFolderOption = document.createElement('option');
        newFolderOption.value = folder_txt_val;
        newFolderOption.innerHTML = folder_txt_val;
        folderOptions.add(newFolderOption);
        
        // Creating the folder in the folder list
        document.querySelector('.folders_list').appendChild(folder_div);
        
        // Resetting new folder input field and hiding the modal
        const inputs = document.querySelectorAll(".item_input");
        inputs.forEach(item_input =>  item_input.value = '');
        
        folderModal.style.display = "none";
        overlay.classList.remove("active");
        
    } else {
        alert('Please name your folder!');
    }
    
}

// NEW ITEMS

const materialModal = document.querySelector('.materials_modal');

const addResource = document.querySelector(".submit_item");
addResource.addEventListener("click", createItem);

function createItem() {
    // Creating variables to store the input values from the new resource form
    const input_itemName_val = document.getElementById("item_name_input").value;
    const input_author_val = document.getElementById("author_input").value;
    const input_url_val = document.getElementById("url_input").value;
    const input_folder_val = document.getElementById('folder_input').value;
    
    // Checking to see if user has input all values, if not will display alert
    if (input_itemName_val, input_author_val, input_url_val, input_folder_val) {
        // Creates the list item
        const list_item = document.createElement("li");
        list_item.classList.add("item");
        
        // Creating link for list
        const url = document.createElement('a'); 
        
        // Create the text node for anchor element
        var link = document.createTextNode("source");
        
        // Attach text node to anchor element
        url.appendChild(link); 
        
        // Set the href property to user input
        url.href = input_url_val; 
        
        // Creates the text for the item
        const txt = document.createTextNode(input_itemName_val + ' ' + input_author_val + ' ');
        
        // Attatches the text and url to item
        list_item.appendChild(txt);
        list_item.appendChild(url);
        
        // Creating delete button for each item and appending to item
        const del = document.createElement("i");
        del.classList.add("fa-solid");
        del.classList.add("fa-xmark");
        
        del.addEventListener("click", () => {
            del.parentElement.style.display = "none";
        });
        
        list_item.appendChild(del);
        
        // Appending item to specific folder ul
        let folderItem = document.getElementById(input_folder_val);
        folderItem.appendChild(list_item);
        
        // Resetting form after a task is added, and removing the overlay and form from view
        const inputs = document.querySelectorAll(".item_input");
        inputs.forEach(item_input =>  item_input.value = '');
        
    } else {
        alert('Please enter all details before submitting')
    }
    
    
}

