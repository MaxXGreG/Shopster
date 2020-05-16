let modal = document.getElementById("modal")
var item;
var amount;
let itemDiv = '<div class="item"><h1>%item-name%</h1><h1>%item-amount%</h1><i onclick = "removeItem(this)" class="fas fa-check"></i></div>'
let modal2 = document.getElementById("modal2")
let modal3 = document.getElementById("modal3")

function removeItem(el) {
    let item = el.parentNode.querySelector('h1:nth-of-type(1)').innerHTML
    let amount = el.parentNode.querySelector('h1:nth-of-type(2)').innerHTML
    var DoneitemDiv = '<div id="bought"><h1>%item-name%-</h1><h1>%item-amount%</h1></div>'
    DoneitemDiv = DoneitemDiv.replace("%item-name%", item)
    DoneitemDiv = DoneitemDiv.replace("%item-amount%", amount)
    document.querySelector("#done-items").insertAdjacentHTML('afterbegin', DoneitemDiv)
    el.parentNode.remove()
}

function addItem(name, amount) {
    itemDiv = '<div class="item"><h1>%item-name%</h1><h1>%item-amount%</h1><i onclick = "removeItem(this)" class="fas fa-check"></i></div>'
    itemDiv = itemDiv.replace("%item-name%", name)
    itemDiv = itemDiv.replace("%item-amount%", amount)
    let item = document.querySelector("#list").insertAdjacentHTML('beforeend', itemDiv)
}

function showModal() {
    modal.showModal()
}

function closeModal(el) {
    item = document.querySelector("#modal-input-item").value
    amount = document.querySelector("#modal-input-amount").value
    if (item && amount>0){
        if (el.value=== 'add'){
            addItem(item, amount)
            modal.close()
        }else {
            modal.close()
        }
    } else {
        if (el.value=== 'add'){
            alert("Cannot be empty or negative!")
        }else {
            modal.close()
        }
    }
    document.querySelector("#modal-input-item").value = ''
    document.querySelector("#modal-input-amount").value = ''   
}

function showModal2() {
    modal2.showModal()
}

function closeModal2() {
    modal2.close()
}

function aboutMe() {
    closeModal2()
    window.location.replace("http://maxxgreg.000webhostapp.com/")
}

function showModal3() {
    modal3.showModal()
}

function closeModal3() {
    modal3.close()
}

function clearDone() {
    document.querySelector("#done-items").innerHTML = " "
    closeModal3(document.querySelector("#modal3"))
}