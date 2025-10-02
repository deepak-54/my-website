const passEle = document.querySelector('#password')
const checkEle = document.querySelector('.check')
const linksEle = document.querySelector('.links-2')
const barEle = document.querySelector('.bars')
const closeEle = document.querySelector('.close')

// let clicked = checkEle.addEventListener('click',()=>{
//   let values = String(passEle.value)
// })




barEle.addEventListener('click',()=>{
  linksEle.style.display = 'block'
})

closeEle.addEventListener('click',()=>{
  linksEle.style.display = 'none'
})
