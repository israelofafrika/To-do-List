window.onload = ()=>{
const noItemFeedback = document.querySelector(".feedback")
const addItemBtn = document.querySelector(".btn")
const itemInput = document.getElementById("itemInput")
const clearItems = document.getElementById("clear-list")
const itemListDiv = document.querySelector(".item-container")

/// Function to fetch Input 
//Variable for item Inputed 
let itemInputFn = ()=>{
    return itemInput.value
}


// Functio to validate Inputd

let noItemFeedbackFn = ()=>{
    noItemFeedback.classList.add('showItem', 'alert-danger')
}





//function to create item in to do list 
let createItemDivFn = ()=>{
    document.getElementById("theirFather").insertAdjacentHTML("afterbegin", 
     `<div class="item my-3">
     <h5 id ="textInputed" class="item-name text-capitalize">${itemInputFn()}</h5>
     <div class="item-icons">
      <a href="#" class="complete-item mx-2 item-icon"><i  class="far fa-check-circle complete " data-id = "complete" id = "complete"></i></a>
      <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit" data-id="edit"></i></a>
      <a href="#" class="delete-item item-icon"><i  class="far fa-times-circle  " data-id = "delete" ></i></button></a>
     </div>
    </div>`
     )

     

}

document.querySelector('.item-list').addEventListener("click", (e)=>{
    if (e.target.dataset.id=="delete"){
        const deleteIt= e.target.parentElement.parentElement.parentElement.parentElement
        deleteIt.removeChild(e.target.parentElement.parentElement.parentElement)
    }
    if (e.target.dataset.id=="edit"){
        const text = e.target.parentElement.parentElement.previousSibling.previousSibling
        itemInput.value = text.textContent
        const deleteIt= e.target.parentElement.parentElement.parentElement.parentElement
        deleteIt.removeChild(e.target.parentElement.parentElement.parentElement)
    }
    if(e.target.dataset.id=="complete"){
        e.target.parentElement.parentElement.previousSibling.previousSibling.classList.toggle("completed")
        
    }
})



const clearAll = ()=>{
    while(itemListDiv.parentNode){
        itemListDiv.removeChild(itemListDiv.firstChild)
    }
}





// Function to activate Add Item Button

let addItemFn = ()=>{
    if (itemInputFn().length ==0){
       noItemFeedbackFn() 
       setTimeout(()=>{
        noItemFeedback.classList.remove('showItem', 'alert-danger')
       },4000)
    }
    else {
    createItemDivFn()
    itemInput.value = ""
    
    }
 }



// Event Listeners 

itemInput.addEventListener("input", itemInputFn)
addItemBtn.addEventListener("click", addItemFn)
clearItems.addEventListener("click", clearAll )





 ////Recycle Bin////


////ALTERNATIVE  WAY TO ELEMENT CREATION ////

//  const fatherDiv = document.getElementById("theirFather")
//     let divmain = document.createElement("div")
//      divmain.classList.add("item","my-3")
//     const divText = document.createElement("h5")
//     divText.classList.add("item-name", "text-capitalize")
//     divText.textContent = `${itemInputFn()}`
//     const iconContainer = document.createElement("div")
//     iconContainer.classList.add('item-icons')
//     const btnComplete = document.createElement("a")
//     const btnEdit = document.createElement("a")
//     const btnDelete = document.createElement("a")
    

//     btnComplete.classList.add("complete-item", "mx-2", "item-icon") 
//     btnComplete.setAttribute("data-id", "complete")
//     const iBtnCompelete = document.createElement("i")
//     iBtnCompelete.setAttribute("class","idid")
//     iBtnCompelete.classList.add("far", "fa-check-circle")
//     btnComplete.appendChild(iBtnCompelete)
  
//     btnEdit.classList.add("edit-item", "mx-2", "item-icon") 
//     btnEdit.setAttribute("data-id", "edit")
//     const iBtnEdit = document.createElement("i")
//     iBtnEdit.classList.add( "far", "fa-edit")
//     btnEdit.appendChild(iBtnEdit)

//     btnDelete.classList.add("delete-item", "item-icon") 
//     btnDelete.setAttribute("data-id","delete")
//     const iBtnDelete = document.createElement("i")
//     iBtnDelete.classList.add("far", "fa-times-circle")
//     btnDelete.appendChild(iBtnDelete)

//     iconContainer.appendChild(btnComplete)
//     iconContainer.appendChild(btnEdit)
//     iconContainer.appendChild(btnDelete)

//     fatherDiv.appendChild(divmain)
//     divmain.appendChild(divText)
//     divmain.appendChild(iconContainer)\\


}