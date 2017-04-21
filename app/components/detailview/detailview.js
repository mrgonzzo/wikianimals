(function(angular) {

  angular.module('app').component('compDetailview', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:'app/components/detailview/detailview.html',
    // en controller definimos la función que escribimos abajo
    controller: controladorCompDetailView,
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compDetail',
    bindings: {
            itemAnimal: '<'
        }
})
function controladorCompDetailView() {
    var vm = this;
}
})(angular)