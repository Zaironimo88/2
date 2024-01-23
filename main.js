var SpeechRecognition= window.webkitSpeechRecognition;//esta api hace que transforme las palabras a letras
var recognition= new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML=""; //actualizar el texto
recognition.start();
}

recognition.onresult=function(event)
{
console.log(event);
var Content= event.result[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML="Content";
speak();//aqui convierte la voz a letra
}

function speak()//convierte el texto a voz
{
var synth=window.speechSynthesis;
speak_data=document.getElementById("textbox").value;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}

//Aqui coloco lo que nesecito para mi camara

Webcam.set({
width:360,  //ancho de mi camara
height:250,  //alto de mi camara
image_format:'jpeg',//el formato de imagen
jpeg_quality:90//calidad de imagen
});

camera=document.getElementById("camera");
