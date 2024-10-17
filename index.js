function updateDisplay(inputId, displayId) {
    const input = document.getElementById(inputId);
    const display = document.getElementById(displayId);
    display.textContent = input.value;

  
}

document.getElementById('range1').addEventListener('input',()=>{updateDisplay('range1','value1')})
document.getElementById('range2').addEventListener('input',()=>{updateDisplay('range2','value2')})
document.getElementById('range3').addEventListener('input',()=>{updateDisplay('range3','value3')})


document.getElementById('showValues').addEventListener('click', function() {
    const value1 = document.getElementById('range1').value;
    const value2 = document.getElementById('range2').value;
    const value3 = document.getElementById('range3').value;
    let v1= parseInt(value1)//=============conver string into interger===========
    let v2= parseInt(value2)
    let v3= parseInt(value3)
 
    
formula(v1,v2,v3)
})   //===============include formula=============
function formula(p,ri,ny){ 
let r=(ri/12)/100  //==============rate of intrest=======convert year to month=======
let n=ny*12     //===========loan tenure==========convert year to month=========

const form = (p * r * Math.pow(1 + r, n)) /(Math.pow(1 + r, n)-1)//========EMI formula======
const result=Math.floor(form*100)/100   


const totalpayable=result*n
const intrestpayable=totalpayable-p
       Show(p,totalpayable,intrestpayable,result)  //===========invoce the function show====
}
function Show(loanamount,totalpayable,intrestpayable,result){

let principalamount=document.getElementById('Principal-amount')
let monthlyemi=document.getElementById('Monthly-emi')
let totalinterest=document.getElementById('Total-interest')
let totalamount=document.getElementById('Total-amount')

principalamount.textContent=loanamount.toFixed(2)
totalamount.textContent=totalpayable.toFixed(2)
monthlyemi.textContent=result.toFixed(2)
totalinterest.textContent=intrestpayable.toFixed(2)
    
}
// ===============popup=========
let btn=document.getElementById('showinfo')
let infodis=document.querySelector('.info')

btn.addEventListener('click',()=>{
    infodis.classList.toggle("hide")
})