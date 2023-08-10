function sendMail(){
    var params={
        name:document.getElementById("name").value,
        emaill:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
  const serviceId="service_ziwdy77";
const templateId="template_wznzp9n";

emailjs.send(serviceId,templateId,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send succesfully")
    }
)
.catch(err=>console.log(err));
  
}

