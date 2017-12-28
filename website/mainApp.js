var PH = angular.module('PH', [ 'ngDialog', 'ngAnimate', 'tm.pagination', 'ngSanitize', 'ngFileUpload']);
PH.config(['$locationProvider', 'ngDialogProvider', '$animateProvider', ProviderInject]);
function ProviderInject( $locationProvider, ngDialogProvider, $animateProvider)
{
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: false,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log('default pre-close callback');
        }
    });
}
