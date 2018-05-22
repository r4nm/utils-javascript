(function(window, undefined) {
    var
        M = [3, 2, 7, 6, 5, 4, 3, 2, 1],
        Rut = Rut || function() {
            return (new Rut.fn.init());
        };

    Rut.fn = Rut.prototype = {
        version: '2.0.0',

        constructor: Rut,

        init: function() {
            return this;
        },

        /**
         * Verifica el Rol Unico Tributario (R.u.t) pasado como
         * parametro. 
         *
         * @param rut  Rut sin puntos ni guion
         * @return     Verdadero si el rut es correcto
         */
        isValid: function(rut) {
            if(/^\d{1,8}[\dk]$/i.test(rut) === false) {
                return false;
            }

            rut = rut.lpad(M.length, 0);

            for(var i = 0, s = 0; i < rut.length; i++) {
                s += (/^k$/i.test(rut.charAt(i)) ? 10 : rut.charAt(i)) * M[i];
            }

            return (s % 11) == 0;
        },

        /**
         * Calcula el digito verificador del numero de Rol Unico
         * Tributario (R.u.t)
         *
         * @param rutNumber  Numero del Rut
         * @return           El digito verificador
         */
        calcCheckDigit: function(rutNumber) {
            if(/^\d{1,8}$/.test(rutNumber) === false) {
                return false;
            }

            rutNumber = rutNumber.lpad(M.length - 1, 0);

            for(var i = 0, s = 0; i < rutNumber.length; i++) {
                s += (/^k$/i.test(rutNumber.charAt(i)) ? 10 : rutNumber.charAt(i)) * M[i];
            }

            return "0123456789k0"[11 - (s % 11)];
        },

        format: function(rut) {            
            return rut == null ? null : rut.substr(0, rut.length - 1).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                 + '-' + rut.substr(-1);
        }
     };

    Rut.fn.init.prototype = Rut.fn;
    window.Rut = new Rut();

})(window);
