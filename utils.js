(function(window, undefined) {
    var Utils = Utils || function() {
            return (new Utils.fn.init());
        };

    Utils.fn = Utils.prototype = {
        version: '1.0.0',

        constructor: Utils,

        init: function() {
            return this;
        },

        /**
         * Intercambia el texto a con el texto b dentro del texto fuente.
         *
         ** @param a  Texto inicial
         ** @param b  Texto final
         *
         ** @return   Texto con el intercambio realizado, si el texto a existe.
         */
        swap: function(source, a, b) {
            return source.replace((new RegExp('(^| )' + a + '( |$)', 'g')), '$1' + b + '$2');
        },

        /**
         * Intercambia el texto a con el texto b dentro del texto fuente, si el texto
         * a existe, de lo contrario, intercambia el texto b con el texto a.
         *
         ** @param a  Texto inicial
         ** @param b  Texto final
         *
         ** @return   Texto con el intercambio realizado, si el texto a existe.
         */
        toggle: function(source, a, b) {
            return (new RegExp('(^| )' + a + '( |$)')).test(source) === true
                   ? this.swap(source, a, b)
                   : this.swap(source, b, a);
        }
    };

    Utils.fn.init.prototype = Utils.fn;
    window.Utils = new Utils();
})(window);

String.prototype.swap = function(a, b) {
    return Utils.swap(this, a, b);
}

String.prototype.toggle = function(a, b) {
    return Utils.toggle(this, a, b);
}
