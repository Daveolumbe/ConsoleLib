window.davconsole = (function () {

    const infoStyle = "background: green; color: white; display: block; font-size:16px;";
    const errorStyle = "background: red; color: yellow; display: block; font-size:16px;";

    function info(message) {
        if(!message) message = '';
        return console.log("%c " + message, infoStyle);
    }

    function error(message) {
        if(!message) message = '';
        return console.error("%c " + message, errorStyle);
    }

    return {
        info: info,
        error: error
    };
}());

davconsole.info();
davconsole.error();