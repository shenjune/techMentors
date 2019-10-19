
$(document).ready(function(){

  $("#submitButton").on("click", function(event){

    event.preventDefault();

    var mentorName=$("#mentorName").val().trim();
    var primaryHelp=$("input[name='primaryHelp']:checked").val();
    var gradSchool=$("input[name='gradSchool']:checked").val();
    var describe=$("#describe").val().trim();
    var timeZone= $("#tz").val();
    var img=$("#pic-file").prop("files")[0]; // <- this is how you grab a file input using jquery


    // this function converts the image to be uploaded to base64 format
    var convertImgToBase64 = function(file) {
      return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = reject;
      })
    }

    convertImgToBase64(img).then(function(result) {
    $.ajax({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dlmlwmn0z/image/upload",
        data: {
            file: result,
            upload_preset: "ml_default",
        }
    }).then(function(response) {
        pictureIdVal = response.public_id;
    }).then(function() {
        var newMentor = {
          mentor_name: mentorName,
          image_id: "",
          primary_help: primaryHelp,
          description: describe,
          institute_graduated: gradSchool,
          time_zone: timeZone,
          image_id: pictureIdVal
        };
        $.ajax({
          type: "POST",
          url: "/api/mentors",
          data: newMentor
        }).then(function(mentorData){
          console.log(mentorData);
          alert("Thanks for signing up! You are now a mentor!");
          location.reload();
        })
      })


    });
});
})