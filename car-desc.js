var cardata = '{ "cardata" : [' +
'{ "image":"car0.jpg" , "description":"Nissan\'s low-cost sister brand Datsun is all set to launch it\'s most affordable car yet, the redi-GO. The Japanese automaker will launch the hatch on June 07, 2016 and it will be priced between Rs 2.5 lakh and Rs 3.5 lakh. The Datsun is powered by a 800cc motor that develops 54PS of power and 72Nm of torque. ARAI certified mileage is rated at 25.17km/l, just like its sibling, the Renault Kwid. It will take on the likes of the Maruti Alto 800, Hyundai Eon, Tata Nano and the Kwid. " ,"name" : "Datsun redi-GO","price":"2.75 lakh","phone" : "080-42356789"},' +
'{ "image":"car1.jpg" , "description":"India\'s largest utility vehicle company, Mahindra has been quite active during the 2016 Auto Expo, which has displayed its latest vehicles and attracted most audiences. One among them is the Mahindra E Verito - an electric car that was earlier showcased at the 2014 Auto Expo as well. Its starting price is expected to be somewhere around Rs. 8 lakhs. Only a few details are out as of now about the features it carries and hence, one has to just wait for its arrival and see what it has to offer.","name" : "Mahindra E Verito" ,"price":"8.5 lakh","phone" : "080-41336689" },' +
'{ "image":"car2.jpg" , "description":"German auto-maker Mercedes-Benz will launch the GLC SUV on June 02, 2016. It will slot in between the GLA compact SUV and the GLE, and is likely to be priced between Rs. 35 lakh and Rs. 45 lakh.It will go up against the likes of the BMW X3 and the Audi Q5. We expect a petrol as well as a diesel motor to be on offer. " , "name":"Mercedes-Benz GLC SUV" , "price":"48 lakh" ,"phone" : "080-42454889" } ]}';

var c = JSON.parse(cardata);
var url = document.location.href,
       params = url.split('?')[1].split('&'),
       data = {}, tmp;
   for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
   }
var imgpath = c["cardata"][data.carnumber]["image"];
var desc = c["cardata"][data.carnumber]["description"];
var name = c["cardata"][data.carnumber]["name"];
var price = c["cardata"][data.carnumber]["price"];
var phone = c["cardata"][data.carnumber]["phone"];
var head = name + " at " + price +" <br> <b> Contact : <img src='phone.png' style='width:15px;height:15px'> "+phone +"</b>" ;
document.getElementById("cartitle").innerHTML= head;
elem = document.createElement("img");
elem.setAttribute("src", imgpath);
elem.height="300";
elem.width="650";
document.getElementById("carimage").appendChild(elem);
document.getElementById("description").innerHTML= desc;