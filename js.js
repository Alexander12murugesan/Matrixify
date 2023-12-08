function  sendMail(){
    var params={
        firstname:document.getElementById("first name").value ,
        lastname:document.getElementById("last name").value ,
        email:document.getElementById("email").value ,
        phonenumber:document.getElementById("phone number").value ,
        Message:document.getElementById("message").value , 
    };

const serviceID="service_k7rehbj";
const templateID="template_nxqfa0s";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("firt name").value ="";
        document.getElementById("last name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("phone number").value ="";
        document.getElementById("message").value ="";

        console.log(res);
        alert("Message send successfully")


    }
  
)
.catch((err) => console.log(err));
;
}

