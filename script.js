const incbtn = document.getElementById('incbtn');
const decbtn = document.getElementById('decbtn');
const resetbtn = document.getElementById('resetbtn');
const counter = document.querySelector('.counter');


let count =0;

function updatecounter(){
    counter.textContent=count;
}

incbtn.addEventListener('click',()=>{
    count++;
    updatecounter();
})

decbtn.addEventListener('click',()=>{
    count--;
    updatecounter();
}
)
resetbtn.addEventListener('click',()=>{
    count=0;
    updatecounter();
})