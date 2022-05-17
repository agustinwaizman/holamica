addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu__items = document.querySelector('.menu__items')
            menu__items.classList.toggle('show')
        })
    }
})