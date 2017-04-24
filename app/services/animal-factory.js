(function (angular) {
    angular.module('app').factory('animalFactory', [animalFactory]);
    function animalFactory() {
        var module = {};
        var self = module;
        var animalsarray = [
            { id: 1, name: "ornitorrinco", ciname: "Ornithorhynchus anatinus", picture: "Ornitorrinco.jpg", type: 'australiano'},
            { id: 2, name: "pez rosado con manos", ciname: "Brachiopsilus dianthus", picture: "pez-manos-rosa.jpg",type: 'acuatico' },
            { id: 3, name: "topo nariz de estrella", ciname: "Condylura cristata", picture: "topo-nariz-estrella.jpg", type: 'europeo' }/*,
            { id: 4, name: "Cangrejo yeti", ciname: "Kiwa hirsuta", picture: "cangrejo.jpg",type: 'acuatico'},
            { id: 5, name: "oso de agua", ciname: "Tardigrada", picture: "tardigrada.gif" ,type: 'acuatico'},
            { id: 6, name: "Lagarto cornudo", ciname: "Phrynosoma cornutum", picture: "lagarto.gif", type: 'australiano' },
            { id: 7, name: "Gato esfinge", ciname: "Sphynx", picture: "Sphynx.gif", type: 'europeo' }*/
        ];

        module.getAllAnimals = function () {
            return animalsarray;
        };

        module.getAnimalById = function (_idanimal_) {
            var animal = '';
            var idanimal = parseInt(_idanimal_)
           
            
            //es interesante usar firewalls
            if (!idanimal){
                return false;
            } //end firewall
            //con un while es mas rapido (no importa la posicion) while (len--)
            for (var i = 0; i < animalsarray.length; i++) {
                //lo optimo es usar los tres iguales para comprobar tambien el tipo además del valor (más eficiente)
                if (idanimal === animalsarray[i].id) {
                    animal = animalsarray[i];
                }
            }
            return animal;
        };

        return module;
    };
})(angular);