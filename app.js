// Create function to button one dice

document.querySelector('#one-dice').addEventListener('click', function() {
    
    
    //1 Create random number between 1 and 6.

    let randomDiceNumber = Math.floor(Math.random() * 6) + 1;


    //2 Show correct dice image 1 - 6

    let diceImage = document.querySelector('.dice');
    diceImage.style.display = 'block';
    
    diceImage.src = 'images/dice-number-' + randomDiceNumber + '.png';


    
    
    
    
    
    console.log(randomDiceNumber);
});