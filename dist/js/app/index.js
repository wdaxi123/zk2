require(['jquery', 'render'], function($, render) {
    $.ajax({
        url: 'api/index',
        dataType: 'json',
        success: function(res) {
            console.log(res)
            render(res, $('#list'), $('.list'))
        }
    })
})