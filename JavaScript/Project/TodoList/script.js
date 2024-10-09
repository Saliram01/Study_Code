let display = document.querySelector('#display');
let list = document.querySelector('#list-container');

function Add(){
    if(display.value === ''){
        alert("Input field is empty write something!!")
    }
    else{
        let li = document.createElement('li');
        li.innerText = display.value;
        list.appendChild(li);

        let close = document.createElement('span');
        close.innerText = '\u00d7';
        li.appendChild(close);

        let p = document.createElement('p');
        li.prepend(p);

        display.focus();
    }
    display.value = '';
}

list.addEventListener('click',(e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }

    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }

    else if(e.target.tagName === 'P'){
        e.target.classList.toggle('bg')
    }
})



