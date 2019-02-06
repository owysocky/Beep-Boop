function replacement(string, stringName, check){
  if (stringName){
    if (string){
      if (parseInt(string)%3 === 0){
        if(parseInt(string) === 0){
          return "Beep!";
        } else {
          return "I'm sorry, " + stringName.charAt(0).toUpperCase()+stringName.slice(1) + ". I'm afraid I can't do that.";
        }
      } else if (string.includes(1)){
        return "Boop!";
      } else if (string.includes(0)){
        return "Beep!";
      } else {
        if (isNaN(string)){
        return "I am sorry, " + stringName.charAt(0).toUpperCase()+stringName.slice(1) + ", that is not a number";
      }else{
        if(check === '1'){
          var arrayNumbers = string.split("");
          var reversedArray ="";
          for (var i=arrayNumbers.length-1; i>=0; i--){
          reversedArray += arrayNumbers[i];
          };
          return reversedArray;
        }else{
          return string;
        }
      }
      }
    } else {
      return "Please, enter a number!"
    }
  } else {
    return "Please, enter your name!"
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

    var theName = $("input#name").val();
    var theCheckBox = $("input:checkbox[name=checkBox]:checked").val();
    var parseIntNumber = parseInt($("input#number").val());

    var i;
    for(i=0; i<=parseIntNumber; i++){
      $("#showResult").append("<li>"+replacement(i.toString(), theName, theCheckBox)+"</li>");
    }
  });

  $(".clickable").click(function(){
    $("img").toggle(1000);
  });
});
