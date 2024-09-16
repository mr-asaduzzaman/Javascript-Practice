
document.getElementById('secret-info').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('delete')
    if(text === 'Delete'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
})

document.getElementById('delete').addEventListener('click', function(){
    const secret = document.getElementById('secret');
    secret.style.display = 'none'
})