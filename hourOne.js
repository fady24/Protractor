describe("this it a basic test to do stuff",function(){

	it ("this is a single test", function(){
		
		browser.get("http://www.thetestroom.com/jswebapp");

		element(by.model("person.name")).sendKeys("this is cool");
		
		element(by.binding("person.name")).getText().then(function(text){
			console.log(text);
		
		});

	});


});