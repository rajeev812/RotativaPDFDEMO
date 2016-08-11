$(document).ready(function() {

	var v_signIn = $("#signIn").validate({
		rules: {
			email: { required: true, matchValue:'Type Here' },
			password: { required: true }
		},
		messages: {
			email: {
				required: "Please enter Email Address.",
				matchValue: "Please enter Email Address."
			},
			password: {
				required: "Please enter Password."
			}
		},
	errorClass: "errorField",
	errorElement: "span",
	errorPlacement:function(error, element) {
		error.appendTo( element.parent() );
	}

	});


	var v_register = $("#register").validate({
		rules: {
			emailAddress: { required: true, matchValue:'Type Here', email:true },
			enterPassword: { required: true,minchar: 8, password:true },
			reenterPassword: { required: true,minchar: 8, password:true },
			firstname: { required: true, matchValue:'Type Here' },
			lastname: { required: true, matchValue:'Type Here' },
			dob:{date:true, dateOfBirth:true },
			zipcode: { required: true, matchValue:'Type Here' },
			country: { required: true, matchValue:'Select Country' },
			state: { required: true, matchValue:'Select State' }
		},
		messages: {
			emailAddress: {
			required: "Please enter Email Address.",
			email:"Please enter a valid Email Address in the format username@domain.com",
			matchValue: "Please enter Email Address."
			},
			enterPassword: {
				required: "Please enter Password.",
				minchar: "Password must be of minimum 8 characters and maximum 40 characters.",
				password: "Password must be of minimum 8 characters and maximum 40 characters with no spaces, with at least one upper case characater and one special character."
				},
			reenterPassword: {
				required: "Please enter Password.",
				minchar: "Password must be of minimum 8 characters and maximum 40 characters.",
				password: "Password must be of minimum 8 characters and maximum 40 characters with no spaces, with at least one upper case characater and one special character."
				},
			firstname: {
			required: "Please enter First Name.",
			matchValue: "Please enter First Name." 			
			},
			lastname: {
			required: "Please enter Last Name.",
			matchValue: "Please enter Last Name."
			},
			dob:{
			date: "Please enter valid Date.",
			dateOfBirth: "Please enter a date that is not in future."
			},
			zipcode: {
			required: "Please enter Postal Code.",
			matchValue: "Please enter Postal Code."
			},
			country: {
			required: "Please enter Country.",
			matchValue:"Please enter Country."
			},
			state: {
				required: "Please enter State.",
				matchValue:"Please enter State."
			}
		},
	errorClass: "errorField",
	errorElement: "span",
	errorPlacement:function(error, element) {
		error.appendTo( element.parent() );
	}

	});
	
	
	var v_myProfileEditFormEmail = $("#myProfileEditFormEmail").validate({
			rules: {
				email: { required: true, email:true,matchValue:'Example@domain.com' }

			},
			messages: {
				email: {
					required: "Please enter Email Address.",
					email:"Please enter a valid Email Address in the format username@domain.com",
					matchValue:"Please enter Email Address."
				}
			},
		errorClass: "errorField",
		errorElement: "span",
		errorPlacement:function(error, element) {
			error.appendTo( element.parent() );
		}

	});
	
	var v_myProfileEditForm = $("#myProfileEditForm").validate({
			rules: {
				fname: { required: true },
				lname: { required: true },
				postal: { required: true },
				country: { required: true, matchValue:'Select Country' },
				state: { required: true, matchValue:'Select State' },
				dob:{date: true, dateOfBirth: true}
			},
			messages: {
				fname: {
				required: "Please enter First Name."				
				},
				lname: {
				required: "Please enter Last Name."				
				},
				postal: {
				required: "Please enter Postal Code."			
				},
				country: {
				required: "Please enter Country.",
				matchValue:"Please enter Country."
				},
				state: {
					required: "Please enter State.",
					matchValue:"Please enter State."
				},
				dob:{
				date: "Please enter valid Date.",
				dateOfBirth: "Please enter a date that is not in future."
				}
			},
		errorClass: "errorField",
		errorElement: "span",
		errorPlacement:function(error, element) {
			error.appendTo( element.parent() );
		}
	
	});
	
	var v_addAddress = $("#editAddressBook").validate({
		rules: {
			firstName: { required: true,matchValue:'Enter Text' },
			lastName: { required: true,matchValue:'Enter Text' },
			streetAdd: { required: true,matchValue:'Enter Text' },
			streetAdd2: { required: true,matchValue:'Enter Text' },
			country: { required: true,matchValue:'Select Country'},
			state: { required: true,matchValue:'Select State'},
			city: { required: true,matchValue:'Enter Text' },
			zipCode: { required: true,matchValue:'Enter Text'},
			phone: { required: true,matchValue:'xxx-xxx-xxxx'}
		},
		messages: {
			firstName: {
				required: "Please enter First Name.",
				matchValue :"Please enter First Name."
			},
			lastName: {
						required: "Please enter Last Name.",
						matchValue :"Please enter Last Name."
				},
			streetAdd: {
							required: "Please enter Address.",
							matchValue :"Please enter Address."
				},
			streetAdd2: {
						required: "Please enter Address.",
						matchValue :"Please enter Address."
				},
			country: {
					required: "Please enter Country.",
					matchValue :"Please enter Country."
				},
			state: {
					required: "Please enter State.",
					matchValue :"Please enter State."
				},
			city:{
					required: "Please enter City.",
					matchValue :"Please enter City."
			},
			zipCode:{
					required: "Please enter Postal Code.",
					matchValue :"Please enter Postal Code."
			},
			phone:{
					required: "Please enter Phone Number",
					matchValue :"Please enter Phone Number."
			}

			},
		errorClass: "errorField",
		errorElement: "span",
		errorPlacement:function(error, element) {
			error.appendTo( element.parent() );
		}

	});

});