module.exports = function(sequelize, DataTypes) {
    var Mentor = sequelize.define("Mentors", {
      // Giving the Mentee model a name of type STRING
      mentor_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      primary_help:  {
<<<<<<< HEAD
        type: DataTypes.ENUM('Select', 'Class Assignment', 'Specific Coding Problem', 'Job Prep/Interview Questions'), 
        default: 'Select',
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      institute_graduated:  {
        type: DataTypes.ENUM('Select', 'University of Washington Coding Boot Camp', 'CodeFellows Seattle', 'Galvanize Coding Bootcamp-Seattle', 'General Assembly-Seattle'),
        default: 'Select',
        allowNull: true
      },
      year_graduated: {
          type: DataTypes.INTEGER,
          allowNull: false
=======
        type: DataTypes.ENUM('Class Assignment', 'Specific Coding Problem', 'Job Prep/Interview Questions'), 
        },
      description: DataTypes.TEXT,
      institute_graduated:  {
      type: DataTypes.ENUM('Select','Trilogy Education Services', 'CodeFellows', 'Galvanize Coding Bootcamp', 'General Assembly', 'Not listed'),
      },
      //year_graduated: {
          //type: DataTypes.INTEGER,
>>>>>>> c9a9104087eaec704a3adc6a7194e56a12b48d78
          // validate: {function(input) {
          //   if (input < 2020){
          //       return true 
          //   }
          //   else {
          //       return false;
          //   }
          // }}
<<<<<<< HEAD
      },
      fav_assignment: {
        type: DataTypes.STRING,
        allowNull: true
      },
      time_zone:  {
        type: DataTypes.ENUM('Select', 'UTC-11: Samoa Standard Time', 'UTC-10 Hawaii-Aleutian Standard Time (HST)', 'UTC-9 Alaska Standard Time (AKST)', 'UTC-8: Pacific Standard Time (PST)', 'UTC-7: Mountain Standard Time (MST)', 'UTC-6: Central Standard Time (CST)', 'UTC-5: Eastern Standard Time (EST)', 'UTC-4: Atlantic Standard Time (AST)', 'UTC+10: Chamorro Standard Time'),
        default: 'Select',
        allowNull: false
      }
    });
=======
      //},
      //fav_assignment: DataTypes.STRING,
      time_zone:  {
        type: DataTypes.ENUM('Select','UTC-11: Samoa Standard Time', 'UTC-10 Hawaii-Aleutian Standard Time (HST)', 'UTC-9 Alaska Standard Time (AKST)', 'UTC-8: Pacific Standard Time (PST)', 'UTC-7: Mountain Standard Time (MST)', 'UTC-6: Central Standard Time (CST)', 'UTC-5: Eastern Standard Time (EST)', 'UTC-4: Atlantic Standard Time (AST)', 'UTC+10: Chamorro Standard Time'),
        default: 'Select'}
    })
>>>>>>> c9a9104087eaec704a3adc6a7194e56a12b48d78
    return Mentor;
};