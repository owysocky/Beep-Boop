function replacement(string){

  if (parseInt(string)%3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (string.includes(1)){
    return "Boop!";
  } else if (string.includes(0)){
    alert("Beep!");
  } else {
    if (isNaN(string)){
    return "I am sorry, that is not a number";
  }else{
    return string;
  }
  }


}
// Numbers that contain a 0 are replaced (all digits) with "Beep!"
// Numbers that contain a 1 are replaced (all digits) with "Boop!"
// Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

    var theName = $("input#name").val();
    var theNumber = $("input#number").val();

    alert(replacement(theNumber));


  });
});

// numberArray.forEach(function(number){
//   if (number === '1'){
//     alert("Boop!");
//   }
//
//   if (number === '0'){
//     alert("Beep!")
//   }
// });
