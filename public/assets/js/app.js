
$(document).ready(function(){

  $("#submitButton").on("click", function(event){

    event.preventDefault();

    var mentorName=$("#mentorName").val().trim();
    var primaryHelp=$("input[name='primaryHelp']:checked").val();
    var gradSchool=$("input[name='gradSchool']:checked").val();
    var describe=$("#describe").val().trim();
    var timeZone= $("#tz").val();

    var newMentor={
      mentor_name: mentorName,
      image_id: "",
      primary_help: primaryHelp,
      description: describe,
      institute_graduated: gradSchool,
      time_zone: timeZone
    }
    console.log(newMentor);

    $.ajax({
      type: "POST",
      url: "/api/mentors",
      data: newMentor
    }).then(function(mentorData){
      // console.log(mentorData);
      console.log("SUCCESS!!!!!!!!!");
    })
  })

}) 



//   getBase64(img).then(result => {
//     $.ajax({
//         method: "POST",
//         url: "https://api.cloudinary.com/v1_1/dlmlwmn0z/image/upload",
//         data: {
//             file: result,
//             upload_preset: "default_preset",
//             folder: userIdVal,
//             tags: userIdVal + ", " + categoryVal + ", " +  dateObsVal,
//         }
//     }).then(response => {
//         pictureIdVal = response.public_id;
//     }).then(() => {
//         let newMentor;
//         if ($("#species-confidence").val() === "-1") {
//             newMentor = {
//                 openId: userIdVal,
//                 pictureId: pictureIdVal,
//                 dateObs: dateObsVal,
//                 timeObs: $("#time-obs").val(),
//                 latitude: window.userPin.position.lat(),
//                 longitude: window.userPin.position.lng(),
//                 category: categoryVal,
//                 firstConfidence: $("#first-confidence").val(),
//                 briefDescription: $("#brief-desc").val().trim(),
//             };	
//         } else {
//            /// newObs = {
//                //openId: userIdVal,
//                 //pictureId: pictureIdVal,
//                 //dateObs: dateObsVal,
//                 //timeObs: $("#time-obs").val(),
//                 //latitude: window.userPin.position.lat(),
//                 //longitude: window.userPin.position.lng(),
//                 //category: categoryVal,
//                 //firstConfidence: $("#first-confidence").val(),
//                 //briefDescription: $("#brief-desc").val().trim(),
//                 //extendedDescription: $("#extended-desc").val().trim(),
//                 //species: $("#species").val().trim(),
//                 //speciesSciName: $("#species-sci-name").val().trim(),
//                 //speciesConfidence: $("#species-confidence").val()
//             };
//         }
//         console.log(newMentor);