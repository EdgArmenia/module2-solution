const buttons = $(".glavi")

const HEADER_HEIGHT = 80 

buttons.on("click", function (event) {
    // останавливаем остальные процессы
    event.stopPropagation()
    event.preventDefault()

    // берем тег а, this это элеммент на который кликнули
    const a = $(this)

    // в атрибуте href будет id таргета
    const targetId = a.attr("href")

    // берем наш таргет
    const target = $(targetId)

    // берем отступы
    const offset = target.offset()
    
    // если отступы существуют, то берем вверхний отсутп, иначе 0
    const top = offset ? offset.top : 0

    // скроллим наше окно до таргета
    window.scrollTo( { top: top - HEADER_HEIGHT - 10 } )
    
    //скрываем collapse
    $('.navbar-collapse').collapse('hide');
})