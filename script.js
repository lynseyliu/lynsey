var app = angular.module("lyns-app", []);

// app.directive("gallery", ["$timeout", function ($timeout) {
//     return {
//         restrict: 'AC',
//         link: function ($scope, $elm) {
//             $timeout(function () {
//                 baguetteBox.run('.gallery');
//                 baguetteBox.run('.gallery', {
//                     captions: function(element) {
//                         return element.getElementsByTagName('img')[0].alt;
//                     },
//                     titleTag: true
//                 });
//             });
//         }
//     };
// }]);

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});

app.controller("ctrl", function($scope) {
    $scope.bigRectangleList = [{top: 2, left: -10, theta: -80},
                            {top: 0, left: 30, theta: 210},
                            {top: -2, left: 60, theta: 80},
                            {top: 3, left: 100, theta: 160}];

    $scope.shadowList = [{top: 2.5, left: -9.5, theta: -80},
                        {top: 0.5, left: 30.5, theta: 210},
                        {top: -1.5, left: 60.5, theta: 80},
                        {top: 3.5, left: 100.5, theta: 160}];

    $scope.smallRectangleList = [{top: -2, left: -2, theta: 150},
                                {top: 0, left: 7, theta: 85},
                                {top: -3, left: 17, theta: 70},
                                {top: 3, left: 21, theta: 10},
                                {top: 0.5, left: 40, theta: 40},
                                {top: 5, left: 47, theta: 140},
                                {top: -1, left: 52, theta: 200},
                                {top: 4, left: 65, theta: 60},
                                {top: 1, left: 75, theta: 170},
                                {top: 2, left: 92, theta: 100},];

    $scope.projectList = [];
    $scope.artList = [];
    $scope.ink18List = [];
    $scope.travelList = [];

    $.get("/projects/content.txt", function(data){
        lines = data.split("\n");
        for (var i = 0; i < lines.length; i += 5) {
            $scope.projectList.push({ title: lines[i], link: lines[i+1], img: lines[i+2], description: lines[i+3] });
        }
        $scope.$apply();
    });

    $.get("/projects/ink-2018/content.txt", function(data){
        lines = data.split("\n");
        for (var i = 0; i < lines.length; i += 4) {
            $scope.ink18List.push({ title: lines[i], img: lines[i+1], thumb: lines[i+2] });
        }
        $scope.$apply();
    });

    $.get("/pictures/content.txt", function(data){
        lines = data.split("\n");
        for (var i = 0; i < lines.length; i += 5) {
            $scope.travelList.push({ title: lines[i], description: lines[i+1], id: lines[i+2], link: lines[i+3] });
        }
        $scope.$apply();
    });
});