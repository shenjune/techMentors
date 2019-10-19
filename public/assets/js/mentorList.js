
$(document).ready(function(){
    $("#submitForMentor").on("click", function(event){
  
      event.preventDefault();
      var selectPrimaryHelp= $("#selectPrimaryHelp").val();
      var selectTimeZone= $("#selectTimeZone").val();

    $.get("/api/primaryhelp_timezone/" + selectPrimaryHelp + "/" + selectTimeZone)
      .then(function(mentorData){

      for (let i = 0; i < mentorData.length; i++) {
        const mentor = mentorData[i];

        const { mentor_name, image_id, primary_help, institute_graduated, time_zone,description } = mentor;

        console.log(image_id);

        let imgUrl = "https://res.cloudinary.com/dlmlwmn0z/image/upload/c_thumb,h_200,w_200/"+ image_id + ".jpg";
        console.log(imgUrl);
         
        // TODO: Dynamically create the following
        /**
         * <div class="card mb-4" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <!-- <img src="..." class="card-img" alt="..."> -->
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" id="mentorName">Mentor Name: </h5>
                  <h6 class="card-title" id="primaryHelp">I can help with:</h5>
                  <h6 class="card-title" id="gradSchool">I went to:</h5>
                  <h6 class="card-title" id="gradSchool">My time zone is:</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
         */

         // TODO: create the parent div
         var mentorCard = $('<div class="card mb-4">');
          var row = $('<div class="row no-gutters">')
          //var imageContainer = $('<div class="col-md-4">')
          
          //row.append(imageContainer);



          var mentorInfoStart = $('<div class="col-md-12">');
            var cardBody = $('<div class="card-body">');
              var imageContainer = $('<img src="' + imgUrl + '">');
              var mentorName = $('<h5 class="card-title" id="mentorName">').text('Mentor Name: ' + mentor_name );
              var primaryHelp = $('<h6 class="card-title" id="primaryHelp">').text('Primary Help: ' + primary_help);
              var schoolGraduated = $('<h6 class="card-title" id="schoolGrad">').text('I went to: ' + institute_graduated)
              var timeZone = $('<h6 class="card-title" id="timeZone">').text('My time zone is: ' + time_zone);
              var descriptionDiv = $('<p class="card-text" id="description">').text(' ' + description);
              
          
            cardBody.append(imageContainer, mentorName, primaryHelp, schoolGraduated, timeZone,descriptionDiv);
            mentorInfoStart.append(cardBody);
            row.append(mentorInfoStart);
          
            mentorCard.append(row);

          $('.mentorList').append(mentorCard)
      }

        console.log(mentorData);
    })
  })
})

