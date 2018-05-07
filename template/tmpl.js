var tmpl = (function () {
    const cache = {}
    const strip = function (html) {
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
    return function (str, data) {
        let compile = cache[str] || null
        if (!compile) {
            let tm = str.replace(/<%\s*([^=][^%>]*)\s*%>/g, function () {
                var key = arguments[1];
                return "';" + key + " tmp+='";
            }).replace(/<%=\s*([^%>]+)\s*%>/g, function () {
                const code = arguments[1]
                return "' + strip(data." + code + ") +' "
            })
            tm = "var tmp = \"\";'" + tm + "'; return tmp;";
            compile = new Function('data', 'strip', tm)
            cache[str] = compile
        }
        return compile(data, strip)
    }
})()