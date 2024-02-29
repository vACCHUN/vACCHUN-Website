/*
 * jsCalendar language extension
 * Add Hungarian Language support
 * Translator: Grammatopoulos Athanasios-Vasileios (gramthanos@github)
 */

// We love anonymous functions
(function(){

  // Get library
  var jsCalendar = window.jsCalendar;

  // If jsCalendar is not loaded
  if (typeof jsCalendar === 'undefined') {
      // If there is no language to load array
      if (typeof window.jsCalendar_language2load === 'undefined') {
          window.jsCalendar_language2load = [];
      }
      // Wrapper to add language to load list
      jsCalendar = {
          addLanguage : function (language) {
              // Add language to load list
              window.jsCalendar_language2load.push(language);
          }
      };
  }

  // Add a new language
  jsCalendar.addLanguage({
      // Language code
      code : 'en',
      // Months of the year
      months : [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
      ],
      // Days of the week
      days : [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
      ]
  });

})();
