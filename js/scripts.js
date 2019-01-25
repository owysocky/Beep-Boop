function replacement(string){
  var numberArray = string.split("");
  numberArray.forEach(function(number){
    if(number === '0'){
      alert("Beep!")
    }
  });
}
// Numbers that contain a 0 are replaced (all digits) with "Beep!"
// Numbers that contain a 1 are replaced (all digits) with "Boop!"
// Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

    var theName = $("input#name").val();
    var theNumber = $("input#number").val();

    replacement(theNumber);


  });
});
