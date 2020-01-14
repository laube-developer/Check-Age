function getAge(){
    birthYear = Number(document.getElementById("birthYear").value);
    currentYear = new Date().getFullYear();
     
    age = currentYear - birthYear
    if(birthYear >= currentYear || birthYear <= 1910 ){
        return "erro";
    }else{
        return age;
    }
}

function male(){
    man = document.getElementsByName("sex")[0].checked;
    if(man) {
        return 0;
    }else{
        return 1;
    }
}

function stageOfLife(){
    age = getAge()
    if(age <= 10){
        // Kid
        return 0;
    }else if(age <= 16){
        //teen
        return 1;
    }else if(age <= 21){
        // Young
        return 2;
    }else if(age <= 60){
        // Adult
        return 3;
    }else{
        // Old
        return 4
    }
}

function getImage(){
    //Exclude img if it exists -->
    if (imgBox.querySelector("img") !== null){
        removeImage = document.getElementById("modelImage")
        removeImage.parentNode.removeChild(removeImage);
    }
    image = document.createElement("img");
    return image;
}
function getText(){
    //Exclude Text if it exists -->
    if(textBox.querySelector("p") !== null){
        removeText = document.getElementById("modelText");
        removeText.parentNode.removeChild(removeText)
    }
    text = document.createElement("p");
    return text;
}

function appendImage(){
    if(getAge() === "erro"){
        alert("[ERRO] Birth year are ivalid! Try other!")
    }else{
        age = getAge();
        man = male();
        ageRange = stageOfLife();
        imgBox = document.getElementById("image");
        textBox = document.getElementById("text")
        image = getImage();
        text = getText();
        
        image.setAttribute("id", "modelImage")
        image.setAttribute("src", `_img/${man}-${ageRange}.png`);
        imgBox.appendChild(image);

        text.setAttribute("id", "modelText");
        textBox.appendChild(text);
        document.getElementById("modelText").innerText = `We check that you are ${age} year!!`;
    }
}