

Webcam.set({
 Width:350,
 height:300,
image_format : 'png',
 png_quality:90
});                                     
 
  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
 document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

clasifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lPlrYS_B4/.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded')
}

function speak(){
    var synth = window.speechSynthesis;
    synth.speak(utterThis);
}