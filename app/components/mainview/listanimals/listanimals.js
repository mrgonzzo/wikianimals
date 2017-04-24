(function (angular) {

    angular.module('app').component('compAnimallist', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/mainview/listanimals/listanimals.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$log', '$state', 'animalFactory', controladorCompListAnimals],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compListanimals'
    });
    function controladorCompListAnimals($log, $state, animalFactory) {
        var vm = this;
        vm.$onInit = function () {
            vm.allanimals = animalFactory.getAllAnimals();
        };



        vm.goToDetail = function (_idAnimal_) {
            var _id_ = parseInt(_idAnimal_)
            $state.go('detail', { idAnimal: _id_ });
        }

      
        vm.addForm = function () {
            var animal = {};
            animal.name = vm.name;
            animal.ciname = vm.ciname;
            animal.picture = vm.picture;
 switch (vm.type) {
                case '1':
                    tipo = 'australiano';
                    break;
                case '2':
                   tipo = 'acuatico';
                    break;
                case '3':
                    tipo = 'europeo';
                    break;
            }
            animal.type = tipo;
            animal.id = vm.allanimals.length;
            vm.allanimals.push(animal);
        }

    }
})(angular)