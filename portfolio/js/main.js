function sendemail(){

    var templateParams = {
      from_name:document.getElementById("fullname").value,
      email_id:document.getElementById("fullemail").value,
      message:document.getElementById("fullmessage").value
      
        }
    
        emailjs.send('service_s07muij', 'template_b8k2d8q', templateParams).then(function(response) {
       console.log('SUCCESS!', response.status);
       window.alert("Sent successfully!",response.status);
       
    })
    
       
    }