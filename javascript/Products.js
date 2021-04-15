function q1() {
				// Get the checkbox
				var checkBox = document.getElementById("p1");
				// Get the output text
				var text = document.getElementById("p1q");

				// If the checkbox is checked, display the output text
				  if (checkBox.checked == true){
					p1q.style.display = "block";
				  } else {
					p1q.style.display = "none";
				  }
				}
function q2() {
				// Get the checkbox
				var checkBox = document.getElementById("p2");
				// Get the output text
				var text = document.getElementById("p2q");

				// If the checkbox is checked, display the output text
				  if (checkBox.checked == true){
					p2q.style.display = "block";
				  } else {
					p2q.style.display = "none";
				  }
				}
function q3() {
				// Get the checkbox
				var checkBox = document.getElementById("p3");
				// Get the output text
				var text = document.getElementById("p3q");

				// If the checkbox is checked, display the output text
				  if (checkBox.checked == true){
					p3q.style.display = "block";
				  } else {
					p3q.style.display = "none";
				  }
				}
function q4() {
				// Get the checkbox
				var checkBox = document.getElementById("p4");
				// Get the output text
				var text = document.getElementById("p4q");

				// If the checkbox is checked, display the output text
				  if (checkBox.checked == true){
					p4q.style.display = "block";
				  } else {
					p4q.style.display = "none";
				  }
				}
				
function summary(){
					//get the elements
					var response=document.getElementById("response");
					var pro1=document.getElementById("Prod1");
					var pro2=document.getElementById("Prod2");
					var pro3=document.getElementById("Prod3");
					var pro4=document.getElementById("Prod4");					
					var tot=document.getElementById("Total");
					var fName=document.getElementById("fname").value;
					var lName=document.getElementById("lname").value;
					var p1=document.getElementById("p1q").value;
					var p2=document.getElementById("p2q").value;
					var p3=document.getElementById("p3q").value;
					var p4=document.getElementById("p4q").value;
					
					if (fName==""){
						alert("Please provide your First Name!");
						return false;
					}
					if (lName==""){
						alert("Please provide your Last Name!");
						return false;
					}
										
					response.innerHTML="Dear "+fName + "   "+ lName+" you have ordered ";
					
					//calculation total amount of the bill
					var total= (p1*3000)+(p2*3500)+(p3*4500)+(p4*450);
					
					tot.innerHTML="Your total bill amount is Rs."+total;
					
					
					if (p1!==""){
						pro1.innerHTML=p1 + " of Paintings of Temple of the Sacred Tooth Relic at a cost of Rs.3000.00 each";
						}
					if (p2!==""){
						pro2.innerHTML=p2 + " of Paintings of Sigiriya at a cost of Rs.3500.00 each";
						}
					if (p3!==""){
						pro3.innerHTML=p3 + " of Wooden Elephant Statue at a cost of Rs.4500.00 each";
						}
					if (p4!==""){
						pro4.innerHTML=p4 + " of Ceylon tea at a cost of Rs.450.00 each";
						}											
				
				}	


	