(function (angular) {
    angular.module('app').factory('animalFactory', [animalFactory]);
    function anilmalFactory() {
        var module = {};
        var self = module;
        var animalsarray = [
            { id: 1, name: "ornitorrinco", ciname: "Ornithorhynchus anatinus", foto: "app/resources/Ornitorrinco.jpg" },
            { id: 2, name: "pez rosado con manos", ciname: "Brachiopsilus dianthus", foto: "app/resources/pez-manos-rosa.jpg" },
            { id: 3, name: "topo nariz de estrella", ciname: "Condylura cristata", foto: "app/resources/topo-nariz-estrella.jpg" },
        ];
        module.getAllAnimals = function () {
            return animalsarray;
        };
        return module;
    };
})(angular);