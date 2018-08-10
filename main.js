
$('.clickMe').on('click', (event) => {
    if ($(event.currentTarget).siblings().attr('state') == 'off') {
        $(event.currentTarget).siblings().slideDown("slow");
        $(event.currentTarget).siblings().attr('state', 'on');
    } else {
        $(event.currentTarget).siblings().slideUp("slow");
        $(event.currentTarget).siblings().attr('state', 'off');
    }
})

$('.clickMe').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('hoverTitle');
}).on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('hoverTitle');
})
