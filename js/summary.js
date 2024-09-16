// Option 1: Onclick

const ChangeTitle = document.getElementById('Title');
function Slogan() {
    ChangeTitle.innerHTML = 'This is a Dynamic Webpage!<br> Title is changed by onclick Function'
}



// Option 2: addEventListener

document.getElementById('event-listener').addEventListener('click', function () { document.getElementById('Title').innerHTML = "This is a Dynamic Webpage! <br> Title changed by EventListener Function" })


// Option 2: Example Practice
document.getElementById('Title').addEventListener('click', function(){document.getElementById('Title').innerHTML="This is a Dynamic Webpage"})


