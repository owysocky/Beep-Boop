function replacement(string, stringName){

  if (parseInt(string)%3 === 0){
    return "I'm sorry, " + stringName.charAt(0).toUpperCase()+stringName.slice(1) + ". I'm afraid I can't do that.";
  } else if (string.includes(1)){
    return "Boop!";
  } else if (string.includes(0)){
    alert("Beep!");
  } else {
    if (isNaN(string)){
    return "I am sorry, " + stringName.charAt(0).toUpperCase()+stringName.slice(1) + ", that is not a number";
  }else{
    return string;
  }
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

    var theName = $("input#name").val();
    var theNumber = $("input#number").val();

    $("#toggleResult").prepend("<li>"+replacement(theNumber, theName)+"</li>");
  });
});
