let count = 20
let countdown = setInterval(time, 1000)
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
endResults.addEventListener('click', endGame)


console.log('this is working?', startButton)
console.log('this is working?', playButton)
console.log('this is working?', timer)
console.log('this is working?', gameLyrics)

const firstPlayer = document.createElement('div')

function switchPlayer(currentPlayer) {
    if (currentPlayer === 'p1') {
        player = 'p2';
    } else {
        player = 'p1';
    }
    songIndex += 1
}
switchPlayer(player);

const endGame = () => {
    // this should index if the song index is less than the length songs
    if(songIndex < songs.length){
        songIndex += 1    
    } else {
        // this should be the end game condition
        
    }
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
    ]
    console.log('this is the songs', songs)
    
    
    function time()
    {
        if (count === 0) {
            clearInterval(countdown)
        }   
        // For the else, you want to do DOM manp. 
        // ex. document.getElementById("msgBox").textContent = `Time Remaining: ${count}`
        else {
            timer.innerText = `Timer: ${count}`
        }
        count-=1
    }
    
    // console.log(countdownTimer)
    // const songTitle = songs.title.length
    // console.log(songTitle)
    function showSongs(){
        // if (i = 0; i <= songs.length; i++) {
            gameLyrics.innerText = `The Lyrics: ${songs[songIndex].questionLyric}`
            option1.innerText = `${songs[songIndex].wrongLyric1}`
            option2.innerText = `${songs[songIndex].answerLyric}`
            option3.innerText = `${songs[songIndex].wrongLyric2}`
            option4.innerText = `${songs[songIndex].wrongLyric3}`
            
            option1.addEventListener('click', function() { answerSelection = option1.innerText
                console.log('did this work?', answerSelection)
            gamePlay()})
            option2.addEventListener('click', function() { answerSelection = option2.innerText
            gamePlay()})
            option3.addEventListener('click', function() { answerSelection = option3.innerText
            gamePlay()})
            option4.addEventListener('click', function() { answerSelection = option4.innerText
            gamePlay()})
            
        }    
        showSongs();
        let answerSelection = 0
        let player1Score = 0
        let player2Score = 0

        
        const gamePlay = () => {
            if (answerSelection === songs[songIndex].answerLyric) {
                if (player === 'p1'){
                    player1Score++
                }    
            } else {
                player2Score++
            }
            switchPlayer()
        }
            
            

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', showSongs)
})
// when this page hits the game should start
// you should see the countdown timer, finished
// the lyrics
// the options to choose from
// when clicking on the wrong option, it should log a strike
// when clicking on the right option, it should count towards wins
// when either option is selected the next lyrics should pop up
// after 3 wrong answers/strikes it should display "you lose" screen
// after 3 correct answers it should display "you win" screen
