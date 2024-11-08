
function ballAnswer(){
    //Creating a randomNumber Variable
    const randomNumber = Math.floor(Math.random() * 8)

    
    //Creating an eightBall variable
    let eightBall = ''

    //Creating Switch statement
    switch(randomNumber){
        case 0 :
            eightBall = 'It is certain'
        break

        case 1 :
            eightBall = 'It is decidedly so'
        break

        case 2 :
            eightBall = 'Reply hazy Try again'
        break

        case 3 :
            eightBall = 'Cannot predict now'
        break

        case 4 :
            eightBall = 'Do not count on it'
        break

        case 5 : 
            eightBall = 'My sources say no'
        break

        case 6 :
            eightBall = 'Outlook not so good'
        break

        case 7 :
            eightBall = 'Signs point to yes'
        break

    }
    alert(`The Magic 8 Ball says ${eightBall}`)
}

function ballReveal(){
    // Creating a Username Variable
    let userName = ''
    userName = prompt('What is your username?')

    // Using Ternary Operator
    // (userName !== '')? console.log(`Hello ${userName}!`) : console.log("Hello")  *This is my version*
    userName ? alert(`Hello ${userName}!`) : alert("Hello Stranger!")

    // Creating a userQuestion Variable
    let userQuestion = prompt('Ask 8 Ball A Question')

    if(userName && userQuestion){
        alert(`${userName} asked 8 Ball "${userQuestion}"`)
        ballAnswer()
    }
    else if(userName && !(userQuestion)){
        alert(`I'm sorry ${userName}, I can't work with that `)
        ballReveal()
    }
    else if(!(userName) && userQuestion){
        alert(`Stranger asked 8 Ball "${userQuestion}"`)
        ballAnswer()
    }
    else{
        alert("I'm sorry Stranger, I can't work with that")
        ballReveal()
    }
        
}

ballReveal()