function sendEmail(){
    let object={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
    }
    const serviceId='service_s978srq';
    const templeteId='template_9zbllh8';
    emailjs.send(serviceId,templeteId,object)
    .then(()=>{
        alert('Message sended successfuly');
    })
    .catch(()=>{
        console.log('error');
    })
}