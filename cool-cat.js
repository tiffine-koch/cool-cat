var Cat = function(path, catName) {
	this.path = path;
	this.catName = catName;
	this.votes = 0;
};

var listCreateCat = [
new Cat('cat-img/bat_cat.jpeg', 'Bat Cat'),
new Cat('cat-img/cat_bonds.jpeg', 'James Bond Cat'),
new Cat('cat-img/crossfit_cat.jpeg', 'Crossfit Cat'),
new Cat('cat-img/elvis_cat.jpg', 'Elvis Cat'),
new Cat('cat-img/existential_cat.jpeg', 'Existential Cat'),
new Cat('cat-img/fancy_cat.jpeg', 'Fancy Cat'),
new Cat('cat-img/futuristic_cat.jpeg', 'Futuristic Cat'),
new Cat('cat-img/gamer_cat.jpeg', 'Gamer Cat'),
new Cat('cat-img/gangsta_cat.jpeg', 'Gangsta Cat'),
new Cat('cat-img/lounging_cat.jpeg', 'Lounging Cat'),
new Cat('cat-img/meer_Cat.jpeg', 'MeerCat'),
new Cat('cat-img/praying_cat.jpeg', 'Holy Cat'),
new Cat('cat-img/santa_cat.jpeg', 'Santa Cat'),
new Cat('cat-img/smart_cat.jpeg', 'Smart Cat'),
new Cat('cat-img/yuppie_cat.jpeg', 'Yuppie Cat')];

var randNumber = function() {
	return Math.floor(Math.random() * listCreateCat.length);
}; 

var rand1 = randNumber();
var rand2 = randNumber();

function displayPhotos() {
	get1.src = listCreateCat[rand1].path;
	get2.src = listCreateCat[rand2].path;
	console.log(listCreateCat[rand1].path + 'is Cat 1');
	console.log(listCreateCat[rand2].path + ' is Cat 2');
	// get1.appendChild(listCreateCat[rand1].path);
	// get2.appendChild(listCreateCat[rand2].path);	
}; 

var get1 = document.getElementById("randomImage1");
var get2 = document.getElementById("randomImage2");

displayPhotos(); // when page loads
var totalVotes = [];

get1.addEventListener('click', function() {
	console.log(listCreateCat[rand1].catName + " was clicked");
	listCreateCat[rand1].votes +=1; 
	console.log(listCreateCat[rand1].catName + " has " + listCreateCat[rand1].votes + " votes");
});

get2.addEventListener('click', function() {
	console.log(listCreateCat[rand2].catName + " was clicked");
	listCreateCat[rand2].votes +=1;
	console.log(listCreateCat[rand2].catName + " has " + listCreateCat[rand2].votes + " votes");
});

var now = document.getElementById('new-cat');
now.addEventListener('click', function(){
	rand1 = randNumber();
	rand2 = randNumber();
	displayPhotos();
	console.log("Click my button");
});

//duplicate images
//multiple votes on images


