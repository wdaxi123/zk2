define([
    'jquery',
    'handle'
], function($, handle) {
    function render(data, source, target) {
        var text = source.html();

        var compile = handle.compile(text);

        var html = compile(data);

        target.html(html)
    }
    return render;
});