/* @author: Rodrigo Nannig */
(function(window, undefined) {
    var Strings = Strings || function() {
            return (new Strings.fn.init());
        };

    Strings.fn = Strings.prototype = {
        version: '1.0.0',

        constructor: Strings,

        init: function() {
            return this;
        },
        
        /**
         * Rellena a la izquierda con caracteres un string
         *
         * @param len   Tamaño del relleno
         * @param str  Cadena de texto con cual rellenar
         *
         */
        lPad: function(source, len, str) {
            return len > source.length 
                 ? (new Array((len - this.length) + 1).join(str)) + source 
                 : source;
        },
        
        /**
         * Rellena a la derecha con caracteres un string
         *
         * @param len   Tamaño del relleno
         * @param str  Cadena de texto con cual rellenar
         *
         */
        rPad: function(source, len, str) {
            return len > source.length 
                 ? source + (new Array((len - this.length) + 1).join(str))
                 : source;
        },

        /**
         * Intercambia el texto a con el texto b.
         *
         ** @param a  Texto a intercambiar
         ** @param b  Texto con el cual hay que intercambiar
         *
         * @return    El texto con el intermbio, si a existe.
         */
        swap: function(source, a, b) {
            return source.replace((new RegExp('(^| )' + a + '( |$)', 'g')), '$1' + b + '$2');
        },

        /**
         * Intercambia el texto a con el texto b, si a existe, de lo contrario,
         * se intercambia b con a.
         *
         ** @param a  Texto a intercambio
         ** @param b  Texto a intercambio
         *
         * @return    El texto con el intermbio.
         */
        toggle: function(source, a, b) {
            return (new RegExp('(^| )' + a + '( |$)')).test(source) === true
                   ? this.swap(source, a, b)
                   : this.swap(source, b, a);
        }
    };

    Strings.fn.init.prototype = Strings.fn;
    window.Strings = new Strings();

})(window);

/* Prototypes */
String.prototype.lPad = function(len, str) {
    return Strings.lPad(this, len, str);
}

String.prototype.rPad = function(len, str) {
    return Strings.rPad(this, len, str);
}

String.prototype.swap = function(a, b) {
    return Strings.swap(this, a, b);
}

String.prototype.toggle = function(a, b) {
    return Strings.toggle(this, a, b);
}
