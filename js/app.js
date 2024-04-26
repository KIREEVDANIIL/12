const burger = () => {
    const btn = document.querySelector('burger svg:Last-child')
    const off = document.querySelector('.offest')
    const close = document.querySelector('.offest nav svg')
    btn.addEventListener('click', () => {
        off.getElementsByClassName.display = 'block'
    })

    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
}

burger()