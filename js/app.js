


const startButton = document.getElementById('#start-button')
const playButton = document.getElementById('#play-button')
const countDown = document.getElementById('#timer')
const playerStrikes = document.getElementById('#strikes')
const gameLyrics = document.getElementById('#lyrics')
console.log('this is working?', startButton)
console.log('this is working?', playButton)
console.log('this is working?', countDown)
console.log('this is working?', playerStrikes)
console.log('this is working?', gameLyrics)

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
        title: '',
        artist: 'tlc',
        questionLyric: 'a scrub is a guy who think he is....',
        answerLyric: 'fly and also known as a busta',
        wrongLyric1: 'shy and also known as a hustla',
        wrongLyric2: 'groovy and also known as a killa',
        wrongLyric3: 'happy and also know as a star',
        
    },
    {
        title: 'no scrubs',
        artist: 'tlc',
        questionLyric: 'a scrub is a guy who think he is....',
        answerLyric: 'fly and also known as a busta',
        wrongLyric1: 'shy and also known as a hustla',
        wrongLyric2: 'groovy and also known as a killa',
        wrongLyric3: 'happy and also know as a star',
        
    },
]
console.log('this is the songs', songs)

const countdownTimer = () => {

}

const strikeOut = () => {

}

const gamePlay = () => {

}

// when this page hits the game should start
// you should see the countdown timer, 
// the lyrics
// the options to choose from
// when clicking on the wrong option, it should log a strike
// when clicking on the right option, it should count towards wins
// when either option is selected the next lyrics should pop up
// after 3 wrong answers/strikes it should display "you lose" screen
// after 3 correct answers it should display "you win" screen
