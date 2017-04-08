$(function() {
    setTimeout(function() {
        $('.first .hello').hide().fadeOut()
    }, 3500);
});

$(function () {
    $('.first .hello').textillate({
        in:{
            effect: 'flipInX',
            delay: 80
        }
    });
})


$(function() {
    setTimeout(function() {
        $('.name-links').show().fadeIn()
    }, 3500);
    $('.name-links .hello').textillate({
        in:{
            effect: 'flipInX',
            delay: 100
        }
    });
});