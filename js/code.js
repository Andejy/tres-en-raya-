                            //   constants //
const status_display = document.querySelector(".game-notification"),
game_state = ['','','','','','','','','',]
winnings = [
[0,1,2],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
],
win_mensaje = () => `El jugador ${jugador} ha ganado!`,
draw_mensaje = () => `Empate!`,
current_player_turn = () => `es el turno de ${jugador}  ${player}`




                            // variables //
let gameActive = true,
player = 'X',
jugador = '',
jugador1 = prompt("Jugador 1, ingresa tu nombre"),
jugador2 = prompt("Jugador 2, ingresa tu nombre")


                            // functions //

 const main = () =>  {
handleStatusDisplay(current_player_turn())
listeners()
}

const handleStatusDisplay = (message) => {
    status_display.innerHTML = message
}


const listeners = () => {
document.querySelector(".game-container").addEventListener('click', handleCellClick)
document.querySelector(".game-restard").addEventListener('click', handleRestarGmae)

}

const handleCellClick = (clickedEvent) => {

    const clickedCell = clickedEvent.target
    if (clickedCell.classList.contains('game-cell')) {
        const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
        if (game_state[clickedCellIndex] !== '' || !gameActive) {
        return false
        }  
          
        handleCellPlayer(clickedCell, clickedCellIndex)
        hadleResultValidation()
          
        

        console.log(clickedCellIndex)
    }
    console.log(clickedCell)
}





const handleRestarGmae = () => {
gameActive = true
player = 'X'
restarGameState()
handleStatusDisplay(current_player_turn())
document.querySelectorAll('.game-cell').forEach(cell => cell.innerHTML = '')
}

const restarGameState = () => {
let i = game_state.length
while(i--){
game_state[i] = ''}


}







const handleCellPlayer = (clickedCell, clickedCellIndex) => {
    game_state[clickedCellIndex] = player
    clickedCell.innerHTML = player
}

const hadleResultValidation = () => {
    let roundWon = false
for( let i =0; i< winnings.length; i++){
const wincondition = winnings[i]
let postion1 = game_state[wincondition[0]],
postion2 = game_state[wincondition[1]],
postion3 = game_state[wincondition[2]]
if(postion1 === '' || postion2 === '' || postion3 === ''){
continue;
}
if(postion1 === postion2 && postion2 === postion3){
roundWon = true
}

if(roundWon){
handleStatusDisplay(win_mensaje())
gameActive = false
return

}

}

let roundDraw = !game_state.includes('')
if(roundDraw){
handleStatusDisplay(draw_mensaje())
gameActive = false
return

}







handlePlayerChange()

gamerChange()

}



const handlePlayerChange = () => {

   player = player === 'X'? 'O' : 'X' 
   handleStatusDisplay(current_player_turn())



}


 const gamerChange = () => {

jugador = player === 'X'? jugador1 : jugador2
handleStatusDisplay(current_player_turn())
}






 main()
