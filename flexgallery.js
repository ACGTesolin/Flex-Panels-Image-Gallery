
const panels = document.querySelectorAll('.panel');

const toggleOpen = (e) => {

    if(e.path.length > 6 ){
    
    return   e.path[1].classList.toggle('open');
}

    e.target.classList.toggle('open');

};

const toggleActive = (f) => {

    if(f.propertyName.includes('flex') && f.path.length > 6){

       f.path[1].classList.toggle('open-active');
    }

    else if(f.propertyName.includes('flex')){

        f.target.classList.toggle('open-active');
    }

}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));