exports.davconsole = (function () {

    const infoStyle = "background: green; color: white; display: block; font-size:16px; background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEaElEQVRYhcVXT0iUWxT/fc7ogIsW0UYdx7I2Iq8ZihauhoSoEEJNEBGkneNCUrCBSpudb1GSIEiL3IguBHUUDcL+ODoMjyAwkJT3XomL2liO4BCVVr8W5/tz5/tmxqnXe+/AWXz3nvs7v+/cc889F8hfCgE0AvgdwGMAWzZ9rM816ra/TCoA9ANIAmCemtTXVPxT5xEV+OxZsLcXnJ0FV1fBrS3R1VUZ6+0VGxuZyM84rgTw0ABpbQWXl0EyP11eljUKiYc6Zl7yG4B3AOjzgfPz+Tu26/y8YOgk3unYOaVU0/AnAJaXg+/f/5jDZ8/AS5fAo0fBQACcmgK3twULAAsK8BeA0lwEEgBYW2uBTkyAwaClgQB4/jx4/Dj44gX4/Dn48aP87eHDzoS8cEFwamvNsUQ259cB0O+3/ry7O3e2nzsH3r4NNjZaYyUlJezo6GB1dbU5dueOYPr9pt11u3OvpmEPAB88EOc1NRZoKBRiLBZjLBZjKBQyxwMBiYDx3draSlXa29sJgB4PuLkp2ACo+/KqBO4DYHOzOF9chL7Qw3g8TrvE43F6PB4CYFeX2NbV1TnsSLKlpYUAGIkIdnOzSfi+SmAbAOfmxMgADYfDGUFJMhwOEwDLysR2dHQ0o93Y2BgBsKlJsOfmzCgkDecXjXAaiXfsmBglEgmS5OTkJIuLi9nW1mYCJxIJAqDbLbYbGxsZCaysrBAAq6os/EDAjMJFALinhigTAb/fb+5zMpnMSmB4eJhut5ter5fT09MkyVQqZa79/FnwIxGTwD0AeAKACwsWAfsWNDQ00OVysaioiKlUKm0LDh2yCHR2drKgoIAAWF9fnzUCCwsmgScAsA6AL19aBvYk3N/f58TEBBcXFx1JePKklQMzMzPUNI2apnFpaSljDpDiSyewDgC7ALizk17VjNDmOoY1NRqHh9NPwdDQEAcHB7OeAlJ86Ri7WQmMjkpZzVaEurvFbnvbGotGo2kJODU1ZWQ8NzezE3BsAQl++AB++SL7pZbiYFDKs2p79apFoqenh2traxwYGKDL5SIAnjiRbm/fAkcSknK/nz4Nvn6d30WkkrBrZ2e6rT0JHceQBEdGxMjnA79+TZ/79g0cHATHx8FHj6ztu3FDtq2yEjx1CjxyBOzvl8tKXW8/ho5CZGgwKIY3bzoJXL4siVpYCIbDzrW7u+DeHvjpk3POXoigl0WzFBv69KkVxpERJ9Dbt+CtW+D6evr4mzcSlfFxMB5Pn8tUigHbZaSqUZQAsK/v4Fzo67Psu7qc89kuI8d1rGpTkwXq84HXrkmSvnolOjsrY0r7xbt3nTi5rmMgQ0Oi6pkzcp6zZbqhVVVgNOpcf1BDYoijJVO1rk5IaJokH5TLqKwsd+dstGQuF/7I5hwASvXGkeXlUuUykSguFnW7RTMlqPrnRlPqcuFvHNCUAnm05f390gdeuZJeYu36M225If/rw0SViALynz7NVKnADz5ONQ07+EWPU1X+lef5dx3fisFC3wKhAAAAAElFTkSuQmCC');";

    const errorStyle = "background: red; color: yellow; display: block; font-size:16px;";

    function info(message) {
        if (!message) message = '';
        return console.log("%c " + message, infoStyle);
    }

    function error(message) {
        if (!message) message = '';
        return console.error("%c " + message, errorStyle);
    }


    return {
        info: info,
        error: error
    };
})();

davconsole.info();
davconsole.error();