(function(angular) {

  angular.module('app').component('compCrud', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/crudview/crud.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state','animalFactory',controladorCompCrud],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compCrud'
})
function controladorCompCrud ($state,animalFactory){
  var vm=this;
  vm.allanimals = animalFactory.getAllAnimals();
 vm.addForm = function () {
            var animal = {};
            vm.clase = 'formvirgin';
            if (!vm.name || !vm.ciname||!vm.picture||!vm.type ) {
                vm.clase = 'formko';
            } 
            else 
            { vm.clase = 'formok' 

            
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
            };
        }
}
})(angular)