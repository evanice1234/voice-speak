var SpeechRecognition = window.webkitSpeechRecognition;
// Webkit speech recognition is a web speech API
//It recognizes what we speak and converts it to text
// var speech recognition holds this API

 var recognition = new SpeechRecognition();
 function start() { 
     document.getElementById("text_box").innerHTML = "";
 recognition.start(); }

 recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=Content;
    console.log(Content);
   
    if(Content=="take my selfie"){
        Speak();
    console.log("Taking Selfie");

    }
 

 

 function Speak(){
     var synth= window.speechSynthesis;
     // speech synthesis is the API to convert Text to speech it is a control interface for speech service
     // it holds info about the synthesis voices avaliable on the device etc.
     // synth is a var that holds this API 
     

     //speak_data = document.getElementById("text_box").innerHTML;
     speak_data= "taking your Selfie in 3 seconds";
     // speak data holds the text from the website
     
    
     var utterThis = new SpeechSynthesisUtterance(speak_data);
    // speech synthesis utterance is  an interface of web speech API
    // it reprresents a speech request- to convert text to speech
    // it contains the content the speech service should read
    // utterthis is going to hold the converted speech from the text
     synth.speak(utterThis);
          //speak function is a pre-defined method of speech synthesis
          // it adds an utterance to utterance que
          // next utterance will be spoken when previous utterance in the que has been spoken
     Webcam.attach(camera);
     // pass the camera variable( which has the html div inside webcam . attach function)
     // this command is put inside the speak function beacause we wanted to get active the moment the system speech is over
     setTimeout(function() {
         takeSelfie();
         save();
     }, 3000);
    // setInterval;
     
 }
 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera= document.getElementById("camera");
// camera variable has HTML div where we want to show the live cam view

 function takeSelfie(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="selfie_image" src="'+ data_uri + '">';
     });


 }
 function save(){
     link=document.getElementById("link");
     image=document.getElementById("selfie_image").src;
     link.href=image;
     link.click();
 }


} 