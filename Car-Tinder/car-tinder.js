var cardata = '{ "cardata" : [' +
'{ "image":"car0.jpg" , "description":"Nissan\'s low-cost sister brand Datsun is all set to launch it\'s most affordable car yet, the redi-GO. The Japanese automaker will launch the hatch on June 07, 2016 and it will be priced between Rs 2.5 lakh and Rs 3.5 lakh. The Datsun is powered by a 800cc motor that develops 54PS of power and 72Nm of torque. ARAI certified mileage is rated at 25.17km/l, just like its sibling, the Renault Kwid. It will take on the likes of the Maruti Alto 800, Hyundai Eon, Tata Nano and the Kwid. " ,"name" : "Datsun redi-GO","price":"2.75 lakh"},' +
'{ "image":"car1.jpg" , "description":"India\'s largest utility vehicle company, Mahindra has been quite active during the 2016 Auto Expo, which has displayed its latest vehicles and attracted most audiences. One among them is the Mahindra E Verito - an electric car that was earlier showcased at the 2014 Auto Expo as well. Its starting price is expected to be somewhere around Rs. 8 lakhs. Only a few details are out as of now about the features it carries and hence, one has to just wait for its arrival and see what it has to offer.","name" : "Mahindra E Verito" ,"price":"8.5 lakh" },' +
'{ "image":"car2.jpg" , "description":"German auto-maker Mercedes-Benz will launch the GLC SUV on June 02, 2016. It will slot in between the GLA compact SUV and the GLE, and is likely to be priced between Rs. 35 lakh and Rs. 45 lakh.It will go up against the likes of the BMW X3 and the Audi Q5. We expect a petrol as well as a diesel motor to be on offer. " , "name":"Mercedes-Benz GLC SUV" , "price":"48 lakh" } ]}';
count = 0;
elem = document.createElement("img");
elem.setAttribute("src", "car0.jpg");
elem.setAttribute("id", count);
elem.setAttribute("class","carimage");
elem.setAttribute("draggable","true");
elem.setAttribute("z-index",-1);
document.getElementById("carzone").appendChild(elem);
document.body.style.background = "url('car0.jpg')";
document.body.style.backgroundSize = "80px 60px";

var cd = JSON.parse(cardata);
swipe = document.getElementById("userswipe");
var details = "<font style='float:left; margin-left:30px'>Name:"+cd["cardata"][count]["name"] + "</font> <font style='float:right; margin-right:30px'>Price: " + cd["cardata"][count]["price"]+"</font>";
document.getElementById("cardet").innerHTML = details;
elem.ondragstart=function(event){
	startpoint =event.clientX;

}
flag=2;
elem.ondrag = function (event){
	console.log(event.clientX);
	if(event.clientX != '0'){
		endpoint = event.clientX;
	}
	if(endpoint - startpoint > '100' ){
		flag = 0;
		console.log("swiped right");
		swipe.innerHTML = "Like";
		swipe.style.color = "green";
		swipe.style.zIndex = "1";
	}
	else if(endpoint - startpoint < '-100'){
		swipe.innerHTML = "Dislike";
		swipe.style.color = "red";
		swipe.style.zIndex = "1";
		console.log("swiped left");
		flag=1;
	}
	else{
		flag =2;
		swipe.innerHTML = "Swipe it!! Left or Right";
		swipe.style.color = "blue";
		swipe.style.zIndex = "1";
		console.log("Not yet swiped");
	}

}
elem.addEventListener("dragend", function( event ) {
      // reset the transparency
      //alert(flag);
      if(flag==1){
      count = count +1;
      //alert("here");
      if(count > 2){
      	count = 0;
      }
      

      var details = "<font style='float:left; margin-left:30px'>Name:"+cd["cardata"][count]["name"] + "</font> <font style='float:right; margin-right:30px'>Price: " + cd["cardata"][count]["price"]+"</font>";
	  document.getElementById("cardet").innerHTML = details;
      //alert(count);
      swipe.innerHTML = "";
	  swipe.setAttribute("z-index",-1);
	  elem.setAttribute("src", "car"+count+".jpg");
	  elem.setAttribute("class","carimage");
	  elem.setAttribute("draggable","true");
	  elem.setAttribute("id", count);
	  document.getElementById("carzone").appendChild(elem);
	  var carcount = "url(car"+count+".jpg)";
	  console.log(carcount);
	  document.body.style.background = carcount;
	  document.body.style.backgroundSize = "80px 60px";

	  flag = 2;
      }
      else if(flag == 0){
      	var carnumber = elem.getAttribute('id');
      	flag = 2;
      	swipe.innerHTML = "";
      	window.open("description.html?carnumber="+carnumber);  

      }
      else{
      swipe.innerHTML = "";
	  swipe.setAttribute("z-index",-1);
      }
      
  });