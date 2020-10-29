window.onload = init;

function init(){
	const map = new ol.Map({
		view: new ol.View({
			center: [0, 0],
			zoom: 2
		}),
		layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
		],
		target: "js-map"
	})
}

function typeSelection() {
	
	//Get id of die clicked and drop result
	var sides = event.srcElement.id;
	document.getElementById('result').innerHTML = sides;
	document.getElementById('selectedType').innerHTML= sides;
	
	
	//Set background image based on die clicked
	document.getElementById("result-bg").style.backgroundImage = 'url("images/dice/d'+sides+'.png")';
	
	//Improved diceLog
	if (diceLog.innerHTML != ""){
		diceLog.innerHTML = diceLog.innerHTML.replace("Αποτέλεσμα", "<b>Προηγούμενο αποτέλεσμα</b>");
	}else {
		document.getElementById("diceLog").style.display = "none";
	}
	
}

// TEST

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("article-column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("categoryBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// TEST-END

function rollDice() {
	
	var rollResult = document.getElementById('result');
	
	var typeSides = document.getElementById('selectedType').innerHTML;
	
	var diceLog = document.getElementById('diceLog');
		
	var RNG = Math.floor(Math.random() * typeSides) + 1; 
							
	var diceNumber = document.getElementById("diceNumber").value;
			
		if (diceNumber == "" || diceNumber == 1) {
				
			rollResult.innerHTML = RNG;
			
			diceLog.innerHTML = "Αποτέλεσμα ένός d" + typeSides + ": </br> " + RNG;
			
		} else if (diceNumber <= 0) {
				
			diceLog.innerHTML = "Το " + diceNumber + " είναι εκτός του  έυρους. Διάβασε ξανά τις οδηγίες και θα τα καταφέρεις.";
			rollResult.innerHTML = diceNumber;
				
			} else {
				
				var x = 0;
				var total = 0;
				diceLog.innerHTML = "Αποτέλεσμα " + diceNumber + "x<strong> d" +typeSides + " : </strong> </br>";
				
				
				for (i=0; i < diceNumber; i++) {
														
					x = Math.floor(Math.random() * typeSides) + 1;
					
					if (i == 0) {
						
						diceLog.innerHTML += x;
					
					} else {
						
						diceLog.innerHTML += " + " + x;
						
					}
					
					total += x;
					
				} 				
				
				rollResult.innerHTML = total;
				
				diceLog.innerHTML += " = <strong>" + total+"</strong>";
				
			} 
		
}