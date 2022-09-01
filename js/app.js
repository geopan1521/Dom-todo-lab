const input = document.getElementById('#input')
//console.log(inputElement)
const btn = document.querySelector('#submit-button')
//console.dir(btn)
const ulist = document.querySelector('#todo-list')
//console.log(ulElement)
const resetBtn = document.getElementById('#reset button')
//console.log(resetBtn)

btn.addEventListener('click', function(evt) {
    console.log(evt)
//     btn.addEventListener('click', function(evt){
// }) 
btn.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    console.log(li)
  });
btn.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    const inp = document.querySelector('input')
    li.textContent = inp.value
   
  document.querySelector('ul').appendChild(li)
});
});