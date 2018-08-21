const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

main.addEventListener('click', (event) => {
  alert("I was clicked")
})

paragraph.addEventListener('click', (event)=> {
  alert("You clicked the p!")
  paragraph.style.backgroundColor = 'yellow'
})


let divs = document.querySelectorAll('div')

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + 'bubbled')
}

for (div of divs) {
  div.addEventListener('click', bubble)
}