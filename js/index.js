// Make change background color button in many ways

// Option-1: Inside an HTML file
// Inside the HTML File


// Option-2: Call by a function
function MakeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option-3: Call by ID
const PurpleButton = document.getElementById('purple-btn')
PurpleButton.onclick = MakePurple;

function MakePurple() {
    document.body.style.backgroundColor = 'purple'
}


// Option-4: Add Event Listener 
const MakeGreen = document.getElementById('green-btn')
MakeGreen.addEventListener('click', GreenButton)

function GreenButton(){
    document.body.style.backgroundColor = 'green'
}


// Option-5: Final 
document.getElementById('pink-btn').addEventListener('click', function(){document.body.style.backgroundColor = 'pink'})



// Let's do it My self. When i'll click on the h1 section the background will turn into white.

document.getElementById('Heading').addEventListener('click', function(){document.body.style.backgroundColor = 'white'})

// Now i want, if i'll click any where in the body section the background will turn into darkorchid color.

document.getElementById('body').addEventListener('click', function(){document.body.style.backgroundColor = 'aquamarine'})