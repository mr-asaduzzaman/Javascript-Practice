document.getElementById('post').addEventListener('click', function(){
    const commentBox = document.getElementById('text-box');
    const newComment = commentBox.value;
    const commentDisplay = document.getElementById('comment-display');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentDisplay.appendChild(p)
    commentBox.value = ''
})