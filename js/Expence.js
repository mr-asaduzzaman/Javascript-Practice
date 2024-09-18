const expanceFild = document.getElementById('expance-fild')
const amountFild = document.getElementById('amount-fild')
const insartButton = document.getElementById('insart-button')

const rowContainer = document.getElementById('row-container')
const amountSpan = document.getElementById('total-span')



insartButton.addEventListener('click', function () {
    const expance = expanceFild.value;
    const amount = Number(amountFild.value)
    
    const row = `<div class="flex justify-evenly font-sans bg-slate-100 py-1 my-3 data-amount='${amount}'">
    <p>${expance}</p>
    <p>${amount}</p>
    </div>`
    rowContainer.innerHTML += row;


    
    let expAmount = Number(amountSpan.innerText)
    expAmount += amount;

    amountSpan.innerText = expAmount;



})