(function(angular) {

  angular.module('app').component('compFooter', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/commons/footer/footer.html'
    // en controller definimos la función que escribimos abajo
   // controller: controladorCompHeader,
    // declaramos un alias para no tener que usar $ctrl.
 //   controllerAs: 'compHeader'
})

})(angular)