module.exports = function(sequelize, DataTypes) {
    var Mentor = sequelize.define("Mentors", {
      // Giving the Mentee model a name of type STRING
      mentor_name: DataTypes.STRING,
      image_id: DataTypes.STRING,
      primary_help:  {
        type: DataTypes.ENUM('Class Assignment', 'Specific Coding Problem', 'Job Prep/Interview Questions'), 
        },
      description: DataTypes.TEXT,
      institute_graduated:  {
      type: DataTypes.ENUM('Select','Trilogy Education Services', 'CodeFellows', 'Galvanize Coding Bootcamp', 'General Assembly', 'Not listed'),
      },
      //year_graduated: {
          //type: DataTypes.INTEGER,
          // validate: {function(input) {
          //   if (input < 2020){
          //       return true 
          //   }
          //   else {
          //       return false;
          //   }
          // }}
      //},
      //fav_assignment: DataTypes.STRING,
      time_zone:  {
        type: DataTypes.ENUM('Select','UTC-11: Samoa Standard Time', 'UTC-10 Hawaii-Aleutian Standard Time (HST)', 'UTC-9 Alaska Standard Time (AKST)', 'UTC-8: Pacific Standard Time (PST)', 'UTC-7: Mountain Standard Time (MST)', 'UTC-6: Central Standard Time (CST)', 'UTC-5: Eastern Standard Time (EST)', 'UTC-4: Atlantic Standard Time (AST)', 'UTC+10: Chamorro Standard Time'),
        default: 'Select'}
    })
    return Mentor;
};