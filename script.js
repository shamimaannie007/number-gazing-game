// /////player one variable part///////
let player_one        = document.querySelector('.player_one')
let player_one_input  = document.querySelector('.player_one_input')
let player_one_button = document.querySelector('.player_one_button')

// /////player two variable part///////

let player_two        = document.querySelector('.player_two')
let player_two_input  = document.querySelector('.player_two_input')
let player_two_button = document.querySelector('.player_two_button')
let error             = document.querySelector('.error')
let playerName        = document.querySelector('.playerName')
let chance            = document.querySelector('.chance')

let i = 0
chance.innerHTML = i

// ------player one function------/////

player_one_button.addEventListener('click' , ()=>{
    if (player_one_input.value == ''){
        error.innerHTML = 'Please enter a number'
    }else{
        if(player_one_input.value < 0 || player_one_input.value > 10){
            error.innerHTML = 'Select a number not more than 10 or less than 0'
        }else{
            error.innerHTML = ''
            // console.log(player_one_input.value)
            player_two.style = 'display:block'
            player_one.style = 'display:none'
            playerName.innerHTML = 'Player 2'
        }
        

    }
    
})

// -----player 2 function-------/////

 player_two_button.addEventListener('click' , ()=>{
    if (player_two_input.value == ''){
        error.innerHTML = 'Please enter a number'
        
    }else{
        if (player_two_input.value < 0 || player_two_input.value > 10){
            error.innerHTML = 'Select a number not more than 10 or less than 0'
            

        }else{
            error.innerHTML = ''
            if (player_one_input.value == player_two_input.value){
                console.log('Player 2 win')
                result.style = 'display:block'
                result.innerHTML += 'Player two win'
                player_two.style = 'display:none'
                playerName.style = 'display:none'

            }else{
                i++ 
                chance.innerHTML = i
                if(i==5){
                    result.style = 'display:block'
                    result.innerHTML += 'Player one win'
                    player_two.style = 'display:none'
                    playerName.style = 'display:none'
                }
    
            }
        }

    
    }
 })
