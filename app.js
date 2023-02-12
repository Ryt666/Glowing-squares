const board = document.querySelector('#board')

const colors = ['#FFB6C1','#C71585','#483D8B','	#FF0000','#FFA500','	#32CD32','	#00FFFF','	#0000FF']
const SQUARES_NUMBER = 800

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)
    board.append(square)


}
function setColor(event){
    const element = event.target
    const color= getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px  ${color}, 0 0 10px ${color}`//светящийся luminous эффект
}

function removeColor(event){
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px  #000`
}

function getRandomColor(){
return colors[Math.floor(Math.random() * colors.length)]
}
