const buttonModal = document.querySelector('button')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonModal.onclick = openWindow
function openWindow(){
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', closeWindow)
function closeWindow(event){
    const isEsc = event.key === 'Escape'
    if(isEsc){
        modalWrapper.classList.add('invisible')
    }
}