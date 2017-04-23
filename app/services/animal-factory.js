(function (angular) {
    angular.module('app').factory('animalFactory', [animalFactory]);
    function animalFactory() {
        var module = {};
        var self = module;
        var animalsarray = [
            { id: 1, name: "ornitorrinco", ciname: "Ornithorhynchus anatinus", picture: "Ornitorrinco.jpg" },
            { id: 2, name: "pez rosado con manos", ciname: "Brachiopsilus dianthus", picture: "pez-manos-rosa.jpg" },
            { id: 3, name: "topo nariz de estrella", ciname: "Condylura cristata", picture: "topo-nariz-estrella.jpg" },
            { id: 4, name: "Cangrejo yeti", ciname: "Kiwa hirsuta", picture: "cangrejo.jpg" },
            { id: 5, name: "oso de agua", ciname: "Tardigrada", picture: "tardigrada.gif" },
            { id: 6, name: "Lagarto cornudo", ciname: "Phrynosoma cornutum", picture: "lagarto.gif" },
            { id: 7, name: "Gato esfinge", ciname: "Sphynx", picture: "Sphynx.gif" }
        ];

        module.getAllAnimals = function () {
            return animalsarray;
        };

        module.getAnimalById = function (idanimal) {
            console.log("idanimal: " + idanimal);
            for (var i = 0; i < animalsarray.length; i++) {
                if (idanimal == animalsarray[i].id) {
                    animal = animalsarray[i];
                }
            }
            return animal;
        };

        return module;
    };
})(angular);