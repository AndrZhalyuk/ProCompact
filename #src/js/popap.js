
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0){
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e){
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });        
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
    for (let index = 0; index < popupCloseIcon.length; index++){
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup){
    if(curentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if(popupActive) {
            popupClose(popupActive, false);
        }else{
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e){
            if(!e.target.closest('.popup__content')){
                popupClose(e.target.closest('.popup'));                
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true){
    if(unlock){
        popupActive.classList.remove('open');
        if(doUnlock){
            bodyUnLock();
        }
    }
}

function bodyLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth+ 'px';

    if(lockPadding.length > 0){
        for (let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;        
        }
    }
  
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);    
}

function bodyUnLock(){
    setTimeout(function (){
        for (let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function (){
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e){
    if(e.which === 27){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

let select = function(){
    let selectHeader = document.querySelectorAll('.popup .select__header');
    let selectItem = document.querySelectorAll('.popup .select__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item =>{
        item.addEventListener('click', selectChoose)
    });

    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.popup .select'),
            currentText = select.querySelector('.popup .select__current');
        currentText.innerText = text;
        select.classList.remove('is-active')
    }
};

select();
