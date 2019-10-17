
$(document).ready(function(){

    $("#submitForMentor").on("click", function(event){
  
      event.preventDefault();
      var selectPrimaryHelp= $("#selectPrimaryHelp").val();
      var selectTimeZone= $("#selectTimeZone").val();

      var mentorList={
        primary_help: selectPrimaryHelp,
        time_zone: selectTimeZone
      }
console.log(mentorList);

$.get("/api/primaryhelp_timezone/:primary_help/:time_zone", mentorList
).then(function(mentorData){
    console.log(mentorData);
})
})
})


//`Hi my name is ${someVariable}`