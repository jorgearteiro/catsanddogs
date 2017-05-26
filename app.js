var app = angular.module('catsanddogs', [])
.factory('_', ['$window',
      function($window) {
        return $window._;
      }]);
 

app.controller('MainCtrl',
function($scope,_,$http) {
  $scope.name = 'World';

$http.get("http://agl-developer-test.azurewebsites.net/people.json")
  .then(function(response){ $scope.detailshttp = response; }); 
  
$scope.details = {
	data: [
    {
        "name": "Bob",
        "gender": "Male",
        "age": 23,
        "pets": [
            {
                "name": "Garfield",
                "type": "Cat"
            },
            {
                "name": "Fido",
                "type": "Dog"
            }
        ]
    },
    {
        "name": "Jennifer",
        "gender": "Female",
        "age": 18,
        "pets": [
            {
                "name": "Garfield",
                "type": "Cat"
            }
        ]
    },
    {
        "name": "Steve",
        "gender": "Male",
        "age": 45,
        "pets": null
    },
    {
        "name": "Fred",
        "gender": "Male",
        "age": 40,
        "pets": [
            {
                "name": "Tom",
                "type": "Cat"
            },
            {
                "name": "Max",
                "type": "Cat"
            },
            {
                "name": "Sam",
                "type": "Dog"
            },
            {
                "name": "Jim",
                "type": "Cat"
            }
        ]
    },
    {
        "name": "Samantha",
        "gender": "Female",
        "age": 40,
        "pets": [
            {
                "name": "Tabby",
                "type": "Cat"
            }
        ]
    },
    {
        "name": "Alice",
        "gender": "Female",
        "age": 64,
        "pets": [
            {
                "name": "Simba",
                "type": "Cat"
            },
            {
                "name": "Nemo",
                "type": "Fish"
            }
        ]
    }
]
};

var result = _.flatMap($scope.details.data, item => 
  _(item.pets)
    .filter({ type: 'Cat' })
    .map(v => ({gender: item.gender, name: v.name}))
    .value()
);

$scope.resultgrid = _.orderBy(result,['gender', 'name']);

console.log($scope.resultgrid); 
    
});  
















