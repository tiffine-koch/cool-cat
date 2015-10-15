var data = [];
var myChart;

var Cat = function(path, catName) {
	this.path = path;
	this.name = catName;
	this.votes = 0;
	data.push({value: 1, label: catName, color: '#CCCCFF', highlight: '#FFCCFF'}); 
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

var cat1header = document.getElementById("cat1header");
var car2header = document.getElementById("cat2header");


function displayPhotos() {
	get1.src = listCreateCat[rand1].path;
	get2.src = listCreateCat[rand2].path;
	console.log(listCreateCat[rand1].path + 'is Cat 1');
	console.log(listCreateCat[rand2].path + ' is Cat 2');
	cat1header.innerHTML = listCreateCat[rand1].name;
	cat2header.innerHTML = listCreateCat[rand2].name;
}; 

var get1 = document.getElementById("randomImage1");
var get2 = document.getElementById("randomImage2");

//stopping duplicates from happening
var randPhoto = function (){
    while (rand1 === rand2) {
      rand1 = randNumber();
  	}
};

displayPhotos(); // when aspage loads
randPhoto();
getLocal(data);

function createLocal(data) {
	var jSonData = JSON.stringify(data);
	localStorage.setItem('dataKey', jSonData);
	//var storedData = localStorage.getItem
};

function getLocal(dataKey) {
	var storedData = localStorage.getItem(dataKey);
	var parseData = JSON.parse(storedData);
		if (parseData != null) {
		return localStorage.getItem('dataKey'); 
		}
};

get1.addEventListener('click', function() {
	console.log(cat1header.innerHTML + " was clicked");
	listCreateCat[rand1].votes +=1; 
	console.log(cat1header.innerHTML + " has " + listCreateCat[rand1].votes + " votes");
	for (var i in data) {
		if (data[i].label === cat1header.innerHTML) {
			data[i].value += 1;
		}
	}
	for (var i in myChart.segments) {
		if (myChart.segments[i].label === cat1header.innerHTML) {
			myChart.segments[i].value += 1;
		}
	}
	myChart.update();
	randPhoto();
	createLocal(data);
	getLocal(data);
	now.style.visibility = 'visible';
});

get2.addEventListener('click', function() {
	console.log(cat2header.innerHTML + " was clicked");
	listCreateCat[rand2].votes +=1;
	console.log(cat2header.innerHTML+ " has " + listCreateCat[rand2].votes + " votes");
	for (var i in data) {
		if (data[i].label === cat2header.innerHTML) {
			data[i].value += 1;
		}
	}
	for (var i in myChart.segments) {
		if (myChart.segments[i].label === cat2header.innerHTML) {
			myChart.segments[i].value += 1;
		}
	}
	myChart.update();
	randPhoto();
	createLocal(data);
	getLocal(data);
	now.style.visibility = 'visible';
});

var now = document.getElementById('new-cat');
now.addEventListener('click', function(){
	rand1 = randNumber();
	rand2 = randNumber();
	displayPhotos();
	console.log("Click my button");
	now.style.visibility = 'hidden';
});

function findLabel(array, label) {
	for(var i in array){
		if (array[i].label === label){
		return array[i];
		}
	}
};

var context = document.getElementById('bestCat').getContext('2d');
myChart = new Chart(context).Doughnut(data, {
	animationSteps: 100,
	animationEasing: "easeOutBounce",
	animateRotate: true,
	animateScale: true,
});