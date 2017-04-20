(function (angular) {
    angular.module('app').factory('animalFactory', [animalFactory]);
    function animalFactory() {
        var module = {};
        var self = module;
        var animalsarray = [
            { id: 1, name: "ornitorrinco", ciname: "Ornithorhynchus anatinus", picture: "app/resources/Ornitorrinco.jpg" },
            { id: 2, name: "pez rosado con manos", ciname: "Brachiopsilus dianthus", picture: "app/resources/pez-manos-rosa.jpg" },
            { id: 3, name: "topo nariz de estrella", ciname: "Condylura cristata", picture: "app/resources/topo-nariz-estrella.jpg" },
        ];

        module.getAllAnimals = function () {
            return animalsarray;
        };

        return module;
    };
})(angular);