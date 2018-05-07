;
$(function () {
    var elBgS = $('#bgSelect'),
        elFgs = $('#fgSelect'),
        elFilterBall = $('#filterBall'),
        elBall = $('.ball', elFilterBall);

    elBgS.on('change', function () {
        var v = $(this).val()
        elFilterBall.css({
            "filter": v
        })
    })
    elFgs.on('change', function () {
        var v = $(this).val()
        elBall.css({
            "filter": v
        })
    })
})