var prod = {
	"products": [{
			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
		},
		{
			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"title": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"title": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
	]
}
var i = 0
window.onload=function disp(){
	document.getElementById('img').innerHTML = '<img src="prod.products[i].image"/width="50" height = "100">'
    document.getElementById('p1').innerHTML = "Product Title :  " + prod.products[i].title
    document.getElementById('desc').innerHTML = "Product Description: " + prod.products[i].description
    document.getElementById('quan').innerHTML = "Product Quantity : " + prod.products[i].quantity
    hideButton('previous')
};
function prevpressed(){
    i--;
    if(i < 0){
        i = 0;
        hideButton('previous')
        return;
    }
    showButton('edit')
    showButton('delete')
    showButton('previous')
    showButton('next')
    document.getElementById('img').innerHTML = '<img src="prod.products[i].image"/width="50" height = "100">'
    document.getElementById('p1').innerHTML = "Product Title: " + prod.products[i].title
    document.getElementById('desc').innerHTML = "Product Description: " + prod.products[i].description
    document.getElementById('quan').innerHTML = "Product Quantity: " + prod.products[i].quantity

    if (i == 0) hideButton('previous')
}


function nextpressed(){
    i++;
    if(i > prod.products.length - 1){
        i = prod.products.length-1;
        hideButton('next')
        return;
    }
    showButton('delete')
    showButton('edit')
    showButton('next')
    showButton('previous')
    document.getElementById('img').innerHTML = '<img src="prod.products[i].image"/width="50" height = "100">'
    document.getElementById('p1').innerHTML = "Product Title : " + prod.products[i].title
    document.getElementById('desc').innerHTML = "Product Description :" + prod.products[i].description
    document.getElementById('quan').innerHTML = "Product Quantity : " +prod.products[i].quantity

    if(i == prod.products.length - 1) hideButton('next')

}

function hideButton(id) {
  console.log(document.getElementById(id).style.visibility)
  document.getElementById(id).style.visibility = 'hidden';
}
function showButton(id) {
  console.log(document.getElementById(id).style.visibility)
  document.getElementById(id).style.visibility = 'visible';
}
function del() {
    prod.products.splice(i,1);
}
function edit() {
    var f = document.createElement("form");
	f.setAttribute('method',"post");
	f.setAttribute('action',"submit.php");

	var tit = document.createElement("input"); //input element, text
	tit.setAttribute('type',"text");
	tit.setAttribute('placeholder', "Title");
	tit.setAttribute('name',"Product Title");

	var desc = document.createElement("input"); //input element, text
	desc.setAttribute('type',"text");
	desc.setAttribute('placeholder', "Description");
	desc.setAttribute('name',"Product Description");

	var quan = document.createElement("input"); //input element, text
	quan.setAttribute('type',"text");
	quan.setAttribute('placeholder', "Quantity");
	quan.setAttribute('name',"Product Quantity");


	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('type',"submit");
	s.setAttribute('value',"Submit");
	s.setAttribute('onclick', "submit()");

	f.appendChild(tit);
	f.appendChild(desc);
	f.appendChild(quan);
	f.appendChild(s);

	//and some more input elements here
	//and dont forget to add a submit button

	document.getElementsByTagName('body')[0].appendChild(f);
	}
function submit() {

}
