const object_items = document.querySelectorAll("#form2 > table:nth-child(1) > tbody > tr > td > div > table.tb2 > tbody > tr");
for(let i=0; i < object_items.length; i++){
    const object_panel = object_items[i].lastChild;
    const add_button = document.createElement('img');
    add_button.src = chrome.runtime.getURL("images/add.png");
    add_button.className = "map_add-button";
    object_panel.appendChild(add_button);
}
const add_buttons = document.getElementsByClassName("map_add-button");
add_buttons.addEventListener('click', ()=>{
    
});
