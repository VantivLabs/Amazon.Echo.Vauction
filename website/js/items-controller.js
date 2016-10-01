  var app = angular.module('itemsApp', []);
  app.controller('itemsCtrl', function($scope) {
    $scope.items;

    $.getJSON("./lots.json", function( data ) {
             $scope.$apply(function(){
		$scope.items = data.items;
		console.log($scope.items);
	     });
         });
     /*$scope.items2 = 
      [
		{
			"name":"Surly Karate Monkey",
			"timeremaining":"3d 14h 16m",
            "lotid":"123456",
            "description":"Banh mi scenester.",
            "startingbid":"$850.00",
            "buyout":"$1,100.00",
            "image":"surly1.png"
		},
		{
			"name":"Red Computer",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Just a plain old bike",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"red-computer.jpg"
		},
		{
			"name":"Orange Computer",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Banh mi scenester wayfarers you probably haven't heard of them put a bird on it, tousled kickstarter keytar shoreditch four dollar toast thundercats. Asymmetrical craft beer cray flexitarian, brunch brooklyn you probably haven't heard of them selvage bicycle rights health goth tacos. Hoodie photo booth franzen migas, blog locavore wayfarers +1 pop-up drinking vinegar cornhole wolf.",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"orange-computer.png"
		},
		{
			"name":"Yellow Computer",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Banh mi scenester wayfarers you probably haven't heard of them put a bird on it, tousled kickstarter keytar shoreditch four dollar toast thundercats. Asymmetrical craft beer cray flexitarian, brunch brooklyn you probably haven't heard of them selvage bicycle rights health goth tacos. Hoodie photo booth franzen migas, blog locavore wayfarers +1 pop-up drinking vinegar cornhole wolf. +1 affogato deep v etsy messenger bag, tousled ugh chia lomo banjo iPhone selvage disrupt thundercats before they sold out.",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"yellow-computer.jpg"
		},
		{
			"name":"Green Computer",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Banh mi scenester wayfarers you probably haven't heard of them put a bird on it, tousled kickstarter keytar shoreditch four dollar toast thundercats. Asymmetrical craft beer cray flexitarian, brunch brooklyn you probably haven't heard of them selvage bicycle rights health goth tacos. Hoodie photo booth franzen migas, blog locavore wayfarers +1 pop-up drinking vinegar cornhole wolf. +1 affogato deep v etsy messenger bag, tousled ugh chia lomo banjo iPhone selvage disrupt thundercats before they sold out.",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"green-computer.jpg"
		},
		{
			"name":"Some Other Bike",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Banh mi scenester wayfarers you probably haven't heard of them put a bird on it, tousled kickstarter keytar shoreditch four dollar toast thundercats. Asymmetrical craft beer cray flexitarian, brunch brooklyn you probably haven't heard of them selvage bicycle rights health goth tacos. Hoodie photo booth franzen migas, blog locavore wayfarers +1 pop-up drinking vinegar cornhole wolf. +1 affogato deep v etsy messenger bag, tousled ugh chia lomo banjo iPhone selvage disrupt thundercats before they sold out.",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"surly1.png"
		},
		{
			"name":"Some Other Bike",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Banh mi scenester wayfarers you probably haven't heard of them put a bird on it, tousled kickstarter keytar shoreditch four dollar toast thundercats. Asymmetrical craft beer cray flexitarian, brunch brooklyn you probably haven't heard of them selvage bicycle rights health goth tacos. Hoodie photo booth franzen migas, blog locavore wayfarers +1 pop-up drinking vinegar cornhole wolf. +1 affogato deep v etsy messenger bag, tousled ugh chia lomo banjo iPhone selvage disrupt thundercats before they sold out.",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"surly1.png"
		},
		{
			"name":"Some Other Bike",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Banh mi scenester wayfarers you probably haven't heard of them put a bird on it, tousled kickstarter keytar shoreditch four dollar toast thundercats. Asymmetrical craft beer cray flexitarian, brunch brooklyn you probably haven't heard of them selvage bicycle rights health goth tacos. Hoodie photo booth franzen migas, blog locavore wayfarers +1 pop-up drinking vinegar cornhole wolf. +1 affogato deep v etsy messenger bag, tousled ugh chia lomo banjo iPhone selvage disrupt thundercats before they sold out.",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"surly1.png"
		},
		{
			"name":"Some Other Bike",
			"timeremaining":"2d 1h 15m",
            "lotid":"67890",
            "description":"Banh mi scenester wayfarers you probably haven't heard of them put a bird on it, tousled kickstarter keytar shoreditch four dollar toast thundercats. Asymmetrical craft beer cray flexitarian, brunch brooklyn you probably haven't heard of them selvage bicycle rights health goth tacos. Hoodie photo booth franzen migas, blog locavore wayfarers +1 pop-up drinking vinegar cornhole wolf. +1 affogato deep v etsy messenger bag, tousled ugh chia lomo banjo iPhone selvage disrupt thundercats before they sold out.",
            "startingbid":"$600.00",
            "buyout":"$900.00",
            "image":"surly1.png"
		}
	];*/
  });
