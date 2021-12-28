function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
        document.getElementById("detect").innerHTML = results[0].label
        document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(2)

        answer = results[0].label
        img = document.getElementById("image")

        if(answer == "Background Noise"){
            img.src = "no sound.png"
        }
        else if(answer == "Roar"){
            img.src = "lion.jpg"
        }
        else if(answer == "Barking"){
            img.src = "dog.jpg"
        }
        else if(answer == "Mooing"){
            img.src = "cow.jpg"
        }
        else if(answer == "Meowing"){
            img.src = "cat.jpg"
        }

    }
}