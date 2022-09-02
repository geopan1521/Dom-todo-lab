const input = document.getElementById('input')
const btn = document.querySelector('#submit-button')
const ulist = document.querySelector('#todo-list')
const resetBtn = document.getElementById('#reset button')

btn.addEventListener('click', function (evt) {
  const li = document.createElement('li')
  
  li.textContent = input.value
  
  ulist.appendChild(li)
  input.value = ''
})