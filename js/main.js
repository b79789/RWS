$("#home").on('pageinit', function(){
	//code needed for home page goes here
});


$("#form").on('pageinit', function(){
	
	var valForm = $("#addForm"),
	    myFormErrorLink = $("#addFormErrorLink");
	
		
	valForm.validate({
		invalidHandler: function(form, validator){
			myFormErrorLink.click();
			var html = "";
			for(key in validator.submitted){
				var myLabel = $("label[for^='"+ key +"']").not("[generated]");
				var legend = myLabel.closest("fieldset").find(".ui-controlgroup-label");
				var fieldName = legend.length ? legend.text() : myLabel.text();
				html += "<li>" + fieldName + "</li>";
			};
			
			$("#errorPage ul").html(html);
		},
		submitHandler: function(){
			var data = valForm.serializeArray();
			parseAddForm(data);

		}
		
		
	});
	//rest of javascript for page
	
	
	var parseAddForm = function(data){
	//use form data here
		var myId = Math.floor(Math.random()*9000009);
		// get all form value and store in object
		var myItem               = {};
			myItem.firstName     = ["First Name:", ge("formFirstName").value];
			myItem.lastName      = ["Last Name:", ge("formLastName").value];
			myItem.formEmail     = ["Email:", ge("formEmail").value];
			myItem.formPass      = ["Password:", ge("formPass").value];
			myItem.place1        = ["Place1:", ge("place-role1").value];
			myItem.place2        = ["Place2:", ge("place-role2").value];
			myItem.formHowMany   = ["How Many:", ge("formHowMany").value];
			myItem.formDate      = ["Date:", ge("formDate").value];
			myItem.formTime      = ["Time:", ge("formTime").value];
			myItem.formComments  = ["Comments:", ge("formComments").value];
		//Save data to local storage Use stringify to covert object
		localStorage.setItem(myId, JSON.stringify(myItem));
		alert("Reservation Saved!");
}


function clearUserData(){
		if(localStorage.length === 0){
			alert("There is no data!")
		}else{
			localStorage.clear();
			alert("All info wiped!");
			window.location.reload();
			return false;
		}
	}
	
function ge(x){
		var myElement = document.getElementById(x);
		return myElement;
	}

	
var clearData = ge("clearMy");
	clearData.addEventListener("click",clearUserData);
});

