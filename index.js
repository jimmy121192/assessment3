var postcard = document.getElementById("postcard"),
	inpTo = document.getElementById("inpTo"),
	inpMes = document.getElementById("inpMessage"),
	inpFrom = document.getElementById("inpFrom"),
	background = document.getElementById("background"),
	outpTo = document.getElementById("to"),
	outpFrom = document.getElementById("from"),
	message = document.getElementById("message"),
	controls = document.getElementById("controls"),
	add = document.getElementById("add"),
	save = document.getElementById("save"),
	load = document.getElementById("load"),
	preview= document.getElementById("preview");


inpTo.addEventListener("change", function(){
	outpTo.innerHTML = inpTo.value;
})
inpFrom.addEventListener("change", function(){
	outpFrom.innerHTML = inpFrom.value;
})

inpMes.addEventListener("change", function(){
	message.innerHTML = inpMes.value;
})


background.addEventListener("keyup", function(ev){
	if(ev.keyCode=="13"){
		postcard.style.backgroundImage = "url("+background.value+")";
			}

})
var gallery = [];
var x= 0;
add.addEventListener("click", function(){
	createPostcard(inpTo.value, background.value )
})

function createPostcard(to, bgImg){
	
	x++;
	var newDiv = document.createElement("div");
	var newTitle = document.createElement("div");

	
	newDiv.appendChild(newTitle);

	

	preview.appendChild(newDiv);
	newDiv.className = "newDiv";
	newTitle.className = "newTitle";
	newDiv.style.backgroundImage = "url("+bgImg+")";
	newTitle.innerHTML = to;


	var myDiv = {
		to: to,
		bgimg: bgImg,
		message: inpMes.value,
		from: inpFrom.value
	}

	if(x>3){  //RESET
		x=1;
	}

	if(bgImg=="auto"){
		newDiv.style.backgroundImage= "url(imgs/auto"+x+".jpg)";
		myDiv.bgimg = "imgs/auto"+x+".jpg"
		// newImg.src=divArr[x-1].myimg;
	}
	else if(bgImg==""){
		 newDiv.style.backgroundImage= "url(imgs/default.png)";
		 myDiv.bgimg = "imgs/default.png"
		// newImg.src=divArr[x-1].myimg;
	}



	
	// newTitle.innerHTML = divArr[i].mytitle;
	// newDesc.innerHTML = divArr[i].mydesc;
	// newImg.src = divArr[i].myimg;
	gallery.push(myDiv);
	console.log(gallery)	
}


save.addEventListener("click", function(){
localStorage.setItem("array", JSON.stringify(gallery));
})


load.addEventListener("click", function(){
	var uploadItems = localStorage.getItem("array");
if(uploadItems){
	uploadItems = JSON.parse(uploadItems);
	}
console.log(uploadItems)
preview.innerHTML="";
for(var i =0; i <uploadItems.length; i++){
	var newDiv = document.createElement("div");
	var newTitle = document.createElement("div");

	
	newDiv.appendChild(newTitle);

	

	preview.appendChild(newDiv);
	newDiv.className = "newDiv";
	newTitle.className = "newTitle";
	newDiv.style.backgroundImage = "url("+ uploadItems[i].bgimg +")";
	newTitle.innerHTML = uploadItems[i].to;
	
	createPostcard(newTitle, newDiv, outpFrom, message);
	// createPostcard(to, bgImg, from, msg);
	}

function createPostcard(to, bgImg, from, msg){
	bgImg.addEventListener("click", function(){
		outpTo.innerHTML = to.innerHTML;
		postcard.style.backgroundImage =bgImg.style.backgroundImage;

	})
}
})

		






