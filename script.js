var words = ["one", "Amsterdam", "monkey"];

for (i=0; i < words.length; i++) {
    var counti = words[i].length;
    console.log(words[i] + " has " + counti + " characters.");
}

var submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', shWord);

function shWord() {        
    var text = document.getElementById("text");
    console.log(text.value.length);
        if (text.value === "") {
            alert("Write down your word!");
        } else {
            console.log("good");
            document.getElementById("show").innerHTML = "The word " + text.value + " has " + text.value.length + " characters.";
            text.value = " ";
        }
}   

function startCount(str) {
    countLng = str.length;
    console.log(countLng);
    document.getElementById('counter').innerHTML = "Number of letters: " + countLng + '/200';
    if (countLng < 190) {
        document.getElementById('counter').style.color = "black";
    }
    if (countLng >= 190) {
        document.getElementById('counter').style.color = "red";
    } 
    if (countLng > 200) {
        console.log("You reached the limit!");
        alert("Text too long. Must be 200 characters or less");
        return false;
    }
}
