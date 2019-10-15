module.exports = function(sequelize, DataTypes) {
    var Mentee = sequelize.define("Mentees", {
      // Giving the Mentee model the 3 main data types which are all multiple choice so that are ENUM. 
      primary_help: {
        type: DataTypes.ENUM('Class Assignments', 'Resume/Personal Branding', 'Job Prep/Interview Questions'),
        default: 'Select Help'},
      institute_name: {
        type: DataTypes.ENUM('University of Washington Coding Boot Camp', 'CodeFellows Seattle', 'Galvanize Coding Bootcamp-Seattle', 'General Assembly-Seattle'), 
        default: "Select School"},

      time_zone: {
        type: DataTypes.ENUM('UTC-11: Samoa Standard Time', 'UTC-10 Hawaii-Aleutian Standard Time (HST)', 'UTC-9 Alaska Standard Time (AKST)', 'UTC-8: Pacific Standard Time (PST)', 'UTC-7: Mountain Standard Time (MST)', 'UTC-6: Central Standard Time (CST)', 'UTC-5: Eastern Standard Time (EST)', 'UTC-4: Atlantic Standard Time (AST)', 'UTC+10: Chamorro Standard Time'),
        default: 'Select Time Zone'}
    })
    return Mentee;
};