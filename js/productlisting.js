const top5 = () => {
    const btnClose = document.querySelector('header div>svg')
    console.log(btnClose)
    const row = document.querySelector('header>div')
    btn.Close.addEventListener('click', () => {
        row.style.display = 'none'
    })
}

const quantitity = () => {
    const spans = document.querySelectorAll('.Quantitity span')
    spans[0].addEventListener('click', () => {
        if (Number(spans[1].innerHTML) - 1 >= 0){
        spans[1].innerHTML = (spans[1].innerHTML) - 1
    }
    })
    spans[1].addEventListener('click', () => {
        spans[1].innerHTML = Number(spans[1].innerHTML) + 1
    })
}
top5()
quantitity()