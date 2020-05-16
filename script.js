let modal = document.getElementById("modal")
var item;
var amount;
let itemDiv = '<div class="item"><h1>%item-name%</h1> <h1 id="amount" onclick="showModal4(this)">%item-amount%</h1> <i onclick = "removeItem(this)" class="fas fa-check"> </i> <h1 id="metric">%item-metric%</h1></div>'
let modal2 = document.getElementById("modal2")
let modal3 = document.getElementById("modal3")
let currentAmount;

function removeItem(el) {
    let item = el.parentNode.querySelector('h1:nth-of-type(1)').innerHTML
    let amount = el.parentNode.querySelector('h1:nth-of-type(2)').innerHTML
    let metric = el.parentNode.querySelector('h1:nth-of-type(3)').innerHTML
    var DoneitemDiv = '<div id="bought"><h1>%item-name% - </h1><h1> %item-amount%</h1><h1>%item-metric%</h1></div>'
    DoneitemDiv = DoneitemDiv.replace("%item-name%", item)
    DoneitemDiv = DoneitemDiv.replace("%item-amount%", amount)
    DoneitemDiv = DoneitemDiv.replace("%item-metric%", metric)
    document.querySelector("#done-items").insertAdjacentHTML('afterbegin', DoneitemDiv)
    el.parentNode.remove()
    reload()
    boughtReload()
}

function addItem(name, amount, metric) {
    itemDiv = '<div class="item"><h1>%item-name%</h1> <h1 id="amount" onclick="showModal4(this)">%item-amount%</h1> <i onclick = "removeItem(this)" class="fas fa-check"> </i> <h1 id="metric">%item-metric%</h1></div>'
    itemDiv = itemDiv.replace("%item-name%", name)
    itemDiv = itemDiv.replace("%item-amount%", amount)
    itemDiv = itemDiv.replace("%item-metric%", metric)
    let item = document.querySelector("#list").insertAdjacentHTML('beforeend', itemDiv)
}

function showModal() {
    modal.showModal()
}

function closeModal(el) {
    item = document.querySelector("#modal-input-item").value
    amount = document.querySelector("#modal-input-amount").value
    metric = document.querySelector("#modal-input-metric").value
    if (item && amount>0){
        if (el.value=== 'add'){
            addItem(item, amount, metric)
            modal.close()
            reload()
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
    document.querySelector("#modal-input-metric").value = ''   
    
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

function showModal4(el) {
    modal4.showModal()
    currentAmount = el;
}

function closeModal4(el) {
    if(el.innerHTML == "OK") {
        if(document.querySelector("#modal-input-amount-change").value > 0) {
            changeAmount(currentAmount)
            modal4.close()
            reload()
        }else {
            alert("Not a number!")
        }
    }else {
        modal4.close()
    }
}

function changeAmount(el) {
    el.innerHTML = document.querySelector("#modal-input-amount-change").value
}

var localStorage = localStorage;

function reload() {
    let list = document.querySelector("#list").innerHTML
    localStorage.setItem("list", list)
}

function refresh() {
    document.querySelector("#list").insertAdjacentHTML('afterbegin', localStorage.getItem("list"))
    document.querySelector("#done-items").insertAdjacentHTML('afterbegin', localStorage.getItem("bought"))
    if(document.querySelector("#list").innerHTML.includes('null')){
        document.querySelector("#list").innerHTML = localStorage.getItem("list")
    }
    if(document.querySelector("#done-items").innerHTML.includes('null')){
        document.querySelector("#done-items").innerHTML = localStorage.getItem("bought")
    }

}

function boughtReload() {
    let boughts = document.querySelector("#done-items").innerHTML
    localStorage.setItem("bought", boughts)
}