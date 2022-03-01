let count = 20
let countdown = 0
let player = 'p1'
let answerLyric = true;
let songIndex = 0



const startButton = document.getElementById('start-button')
const playButton = document.getElementById('play-button')
const timer = document.getElementById('timer')
const gameLyrics = document.getElementById('lyrics')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const endResults = document.getElementById('results')
const optionsArray = [option1, option2, option3, option4]
const playerMessage = document.querySelector('.players-container')
const p1Score = document.querySelector('#player1')
const p2Score = document.querySelector('#player2')
const letsPlay = document.getElementById('play-button')
const winnerMessage = document.querySelector('#winner')

let answerSelection = 0
let player1Score = 0
let player2Score = 0

// p1Score.innerText = 'player 1'
// console.log('what is p1score returning', p1Score.innerText)

console.log('this is working?', startButton)
console.log('this is working?', playButton)
console.log('this is working?', timer)
console.log('this is working?', gameLyrics)

const firstPlayer = document.createElement('div')

function switchPlayer() {
    // songIndex++
    if (player === 'p1') {
        player = 'p2';
    } else {
        player = 'p1';
    }
    // endGame();
    if (songIndex < (songs.length - 1)) {
        songIndex++
        showSongs();
        count = 20
        // countdown = setInterval(time, 1000)
    } else {
        endGame();
    }
}

function compareScore (){
    if (player1Score === player2Score) {
        return winnerMessage.innerText = 'It is a tie!'
    } else { 
        if (player1Score > player2Score) {
        return winnerMessage.innerText = 'Player 1 wins'
         } else {
        return winnerMessage.innerText = 'Player 2 wins'
        }
    }
}
const showHidden = () =>{
    const resultDiv = document.querySelector('#results-div')
    // resultDiv.classList.remove('hidden')
    resultDiv.style.display = 'flex'

    // let html = "";
    

    // resultDiv.innerHTML = html;
    displayScores();
    // console.log(compareScore())
    compareScore();   
    
}

const endGame = () => {
    // console.log('before endgame', songIndex)
    const p1Score = sessionStorage.getItem('player1Score')
    const p2Score = sessionStorage.getItem('player2Score')
    // console.log('this is player1score', p1Score)
    // console.log('this is player2score', p2Score)
    endResults.style.visibility = 'visible'
    // if (count === 0) {
    //     clearInterval(countdown)
    // }
    // p1Score.innerHTML =`Player 1: ${player1Score}`
    // p2Score.innerHTML =`Player 2: ${player2Score}`
    // displayScores();
    // console.log('endgame reached', player2Score)
    // time();
    // find a method to stop timer and stop adding lyrics to end results screen

    // this should index if the song index is less than the length songs
    // if(songIndex < songs.length){
    //      songIndex++  
    //     // recounting the variable of count at 20 seconds
    //     count = 20
    //     // when endgame is itself is recalled the timer itself resets
    //     countdown = setInterval(time, 1000)
    //     console.log('after endgame', songIndex)
    // } else {
    // this should be the end game condition
    // anytime you refer to dot notation .style.property you must use a 'string'
}



const songs = [
    {
        title: 'No Scrubs',
        artist: 'TLC',
        questionLyric: 'A scrub is a guy who think he is....',
        answerLyric: '.....fly and also known as a busta',
        wrongLyric1: '.....shy and also known as a hustla',
        wrongLyric2: '.....groovy and also known as a killa',
        wrongLyric3: '.....happy and also know as a star',

    },
    {
        title: 'Single Ladies',
        artist: 'Beyoncé',
        questionLyric: 'If you like it, then you.....',
        answerLyric: '.....should have put a ring on it',
        wrongLyric1: '.....go to the club with it',
        wrongLyric2: '.....dance in the bar with it',
        wrongLyric3: '.....go around the world with it',

    },
    {
        title: 'Billie Jean',
        artist: 'Michael Jackson',
        questionLyric: 'Billie Jean is not my lover she is....',
        answerLyric: '.....just a girl that says that I am the one',
        wrongLyric1: '.....just a woman that knows that I have some fun',
        wrongLyric2: '.....just a game that I think should be done',
        wrongLyric3: '.....just a figment of my imagination',

    },
    {
        title: 'Call Me Maybe',
        artist: 'Carly Rae Jepsen',
        questionLyric: 'Hey I just met you and this is crazy....',
        answerLyric: '.....but here is my number so call me maybe',
        wrongLyric1: '.....but would you like to go on a date maybe',
        wrongLyric2: '.....but here is my best friend, have you met Stacy?',
        wrongLyric3: '.....but here is my song, so sing it maybe',

    },
    {
        title: 'Say My Name',
        artist: 'Destinys Child',
        questionLyric: 'say my name(x2) if no one is around you say....',
        answerLyric: '.....baby I love you',
        wrongLyric1: '.....girl I miss you',
        wrongLyric2: '.....I dont want to diss you',
        wrongLyric3: '.....I want to kiss you',

    },
    {
        title: 'Hotline Bling',
        artist: 'Drake',
        questionLyric: 'You used to call me on my cellphone',
        answerLyric: '.....late night when you need my love',
        wrongLyric1: '.....at midnight when you need a hug',
        wrongLyric2: '.....late night when you need to kill a bug',
        wrongLyric3: '.....at midnight when I need some tums',

    },
    {
        title: 'Wannabe',
        artist: 'Spice Girls',
        questionLyric: 'If you wanna be my lover....',
        answerLyric: '.....you gotta get with my friends',
        wrongLyric1: '.....you gotta sing again',
        wrongLyric2: '.....you gotta live with Jen',
        wrongLyric3: '.....you gotta be my lover',

    },
]
// console.log('this is the songs', songs)


function time() {
    if (count === 0) {
        clearInterval(countdown)
    }
    // For the else, you want to do DOM manp. 
    // ex. document.getElementById("msgBox").textContent = `Time Remaining: ${count}`
    else {
        timer.innerText = `Timer: ${count}` 
    }
    count -= 1
}


const gamePlay = () => {
    // console.log('what is being evoked here', player)
    // optionsArray.forEach((item) => {
    //     item.removeEventListener('click', function(){
    //         answerSelection = item.innerText
    //         gamePlay();
    //     })
    // })    
    // when a player clicks on the right/wrong option the timer itself is reset
    clearInterval(countdown)
    if (answerSelection === songs[songIndex].answerLyric) {
        if (player === 'p1') {
            player1Score++
            sessionStorage.setItem('player1Score', player1Score)
            switchPlayer()
            // console.log('player1 new score is', player1Score)
        } else {
            player2Score++
            sessionStorage.setItem('player2Score', player2Score)
            switchPlayer()
            // console.log('player2 new score is', player2Score)
        }
    } else {
        switchPlayer()
        // console.log('player didnt make score')
    }
    // console.log('session sotrage', sessionStorage.getItem('player1Score'))
    // console.log('session sotrage', sessionStorage.getItem('player2Score'))    
}


// console.log(countdownTimer)
// const songTitle = songs.title.length
// console.log(songTitle)
function showSongs() {
    // if (i = 0; i <= songs.length; i++) {
    console.log('current game index', songIndex)
    gameLyrics.innerText = `The Lyrics: ${songs[songIndex].questionLyric}`
    option1.innerText = `${songs[songIndex].wrongLyric1}`
    option2.innerText = `${songs[songIndex].answerLyric}`
    option3.innerText = `${songs[songIndex].wrongLyric2}`
    option4.innerText = `${songs[songIndex].wrongLyric3}`

    optionsArray.forEach((item) => {
        item.onclick = function () {
            answerSelection = item.innerText
            gamePlay();
        }
    })
    countdown = setInterval(time, 1000)
}



    // option1.addEventListener('click', function() { answerSelection === option1.innerText
    //     console.log('did this work?', answerSelection)
    // gamePlay()})
    // option2.addEventListener('click', function() { answerSelection === option2.innerText
    //     console.log('did this work?', answerSelection)
    //     gamePlay()})
    // option3.addEventListener('click', function() { answerSelection === option3.innerText
    //     console.log('did this work?', answerSelection)
    //     gamePlay()})
    // option4.addEventListener('click', function() { answerSelection === option4.innerText
    //     console.log('did this work?', answerSelection)
    //     gamePlay()})

// showSongs();

const displayScores = () => {
    // console.log('display scores evoked by endgame')
    // console.log('testing p1score in displayscores', p1Score.innerText)
    // console.log('testing player1score in displayscores', player1Score)
    
    p1Score.innerText = `Player 1: ${player1Score}`
    p2Score.innerText = `Player 2: ${player2Score}`

}

// console.log('inside displayScores', p1Score.innerText)

// const gamePlay = () => {
//     console.log('what is being evoked here', player)
//     // optionsArray.forEach((item) => {
//     //     item.removeEventListener('click', function(){
//     //         answerSelection = item.innerText
//     //         gamePlay();
//     //     })
//     // })    
//     // when a player clicks on the right/wrong option the timer itself is reset
//     clearInterval(countdown)
//     if (answerSelection === songs[songIndex].answerLyric) {
//         if (player === 'p1') {
//             player1Score++
//             switchPlayer()
//         } else {
//             player2Score++
//             switchPlayer()
//         }
//     } else {
//         switchPlayer()
//     }
// }
if (window.location.href === 'file:///Users/FrostyAusty/sei/projects/Frausty-Karaoke-Challenge/gameplay.html'){
    // console.log('current window is gameplay')
    showSongs();
}
if (window.location.href === 'file:///Users/FrostyAusty/sei/projects/Frausty-Karaoke-Challenge/endgame.html'){
    // console.log('current window is endgame')
    // console.log('this is player1 score', player1Score)
    // console.log('this is player2 score', player2Score)
    displayScores();
}
// console.log('current window is:', window.location.href)

document.addEventListener('DOMContentLoaded', function () {
  endResults.addEventListener('click', showHidden)
})
// when this page hits the game should start
// you should see the countdown timer, finished
// the lyrics
// letsPlay.addEventListener('click', function(){
//     window.location.href='gameplay.html'
//     // showSongs()
    
// })
// the options to choose from
// when clicking on the wrong option, it should log a strike
// when clicking on the right option, it should count towards wins
// when either option is selected the next lyrics should pop up
// after 3 wrong answers/strikes it should display "you lose" screen
// after 3 correct answers it should display "you win" screen
