angular.module("printAdmin", ['ui.router', 'printAdmin.controllers', 'printAdmin.routes', 'printAdmin.services', 'printAdmin.directives']).constant("$appGlobals", {})
.run(function() {
    console.log('printAdmin Run Function');
//    requirejs(["bower_components/jquery/dist/jquery.min","bower_components/bootstrap/dist/js/bootstrap.min.js"], function(util) {
//        console.log('jQuery and bootstrap js loaded');
//    });
})


