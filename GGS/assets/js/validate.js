<script>

var frmvalidator = new Validator(“contactForm”); 
frmvalidator.addValidation(“name”,”req”,”Please provide your name”); 
frmvalidator.addValidation(“email”,”req”,”Please provide your email”); 
frmvalidator.addValidation(“email”,”email”, “Please enter a valid email address”); 
</script>