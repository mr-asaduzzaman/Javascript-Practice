
document.getElementById('color-box').addEventListener('keyup',function(event){
    const colorName = event.target.value;
    const ChangeButon = document.getElementById('Change-Button');
    if(colorName === 'Red'){
        ChangeButon.removeAttribute('disabled');
        document.getElementById('Change-Button').addEventListener('click', function(){
            const ColorCode = document.getElementById('color-display');
            ColorCode.style.backgroundColor = 'red'
        })
    }
    else if(colorName === 'Green'){
        ChangeButon.removeAttribute('disabled');
        document.getElementById('Change-Button').addEventListener('click', function(){
            const ColorCode = document.getElementById('color-display');
            ColorCode.style.backgroundColor = 'green'
        })
    }
    else if(colorName === 'Blue'){
        ChangeButon.removeAttribute('disabled');
        document.getElementById('Change-Button').addEventListener('click', function(){
            const ColorCode = document.getElementById('color-display');
            ColorCode.style.backgroundColor = 'blue'
        })
    }
    else if(colorName === 'Pink'){
        ChangeButon.removeAttribute('disabled');
        document.getElementById('Change-Button').addEventListener('click', function(){
            const ColorCode = document.getElementById('color-display');
            ColorCode.style.backgroundColor = 'pink'
        })
    }
    else if(colorName === 'Purple'){
        ChangeButon.removeAttribute('disabled');
        document.getElementById('Change-Button').addEventListener('click', function(){
            const ColorCode = document.getElementById('color-display');
            ColorCode.style.backgroundColor = 'purple'
        })
    }
    else{
        ChangeButon.setAttribute('disabled', true)
    }
})


