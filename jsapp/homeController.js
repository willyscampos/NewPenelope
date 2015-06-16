app.controller('homeController', function ($rootScope, $scope, $http, $location) {

    if ($rootScope.idUsuario == 0) //usuário já está logado
    {
        $location.path('/');
    }
});
