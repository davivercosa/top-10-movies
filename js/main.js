// # 1 - Add jQuery to the index.html page. You can find a jQuery link at https://code.jquery.com/,
//       or use the CDN link that was used in the video. Use the minified, 3.x version.
//       Add it right before the other script tag up near the BOTTOM of the page.
//       Once it's been added, you can move to the next step.

// # 2 - Since we are running our JavaScript at the bottom this time, we will NOT need to add the .ready() method
//       You can put your code directly below the remaining questions
//       nothing is needed here, you can move to the next step.

// # 3 - Make it so that when a red 'x' is clicked, the parent list item is hidden using .slideUp(). Have slide up run for half a second
//      * All the 'x' buttons have a class of 'btnDelete'

// # 4 - When the 'Casablanca' li is clicked, change the text color of 'The Godfather: Part II' to green using the children selectors
//      * 'Casablanca' is a list item with and id of 'movie-6'

// # 5 - When the 'Citizen Kane' li is clicked, change the text color of 'The Wizard of Oz' to blue using the children selectors
//      * 'Citizen Kane' is a list item with and id of 'movie-3'

// # 6 - When the 'Pulp Fiction' li is clicked, change the text color of every li after it to red using the children selectors
//      * 'Pulp Fiction' is a list item with and id of 'movie-5'

// #7 - When the "Show Only Top 5" button is clicked, make it so that only the li tags that have the class 'top5' show up.
//      Use .slideUp() to hide every li that doesn't have that class. Have slide up run for half a second.
//      This will require the use of a jQuery filter.
//      * This button has an id of 'btnShowTopFive'
//      * This list you'll be targeting has an id of 'movieList'

// #8 - When the "Show All" button is clicked, make it so everything that has been hidden is show up again.
//      * This button has an id of 'btnShowAll'
//      * This list you'll be targeting has an id of 'movieList'

// #9 - When the "Highlight Titles..." button is clicked, set the 'background-color' of every li that contains the word 'The' to yellow.
//      This will require the 'contains' filter. This filter is case sensative.
//      * This button has an id of 'btnHighlightThe'
//      * This list you'll be targeting has an id of 'movieList'

$(function () {
  // step 3 -> hidding the .btnDelete parent li on the click event
  $('.btnDelete').on('click', function (e) {
    e.preventDefault();
    $(this).parent().slideUp(500);
  });

  // step 4 -> changing the color of the #movie-7 id on the click event triggered by the movie-6 id

  $('#movie-6').on('click', function (e) {
    e.preventDefault();
    $(this).parents('ul').children('#movie-7').css('color', 'green');
    // $(this).siblings('#movie-7').css('color', 'green');
    // $(this).parents('ul').find('#movie-7').css('color', 'green');
  });

  // step 5 -> changing the color of the #movie-2 id on the click event triggered by the movie-2 id
  $('#movie-3').on('click', function (e) {
    e.preventDefault();
    $(this).parents('ul').children('#movie-2').css('color', 'blue');
  });

  // step 6 -> changing the text color to red of every li after the li w id movie-5
  $('#movie-5').on('click', function (e) {
    e.preventDefault();
    $(this).nextAll().css('color', 'red');
  });

  // step 7 -> hidding all the lis that dont have the top5 class on em
  $('#btnShowTopFive').on('click', () => {
    $('#movieList li').not('.top5').slideUp(500);
    // console.log($('#movieList').children()[0].classList.value);
    // console.log($('#movieList').children().length);
    // for (let i = 0; i < $('#movieList').children().length; i++) {
    //   if ($('#movieList').children()[i].classList.value != 'top5') { ===============================I TRIED TO USE THIS LOGIC, BUT, SOMEHOW, THE SLIDEUP DOES NOT WORK ON THE $('#movieList').children()[i] IT SAYS IT IS NOT A FUNCTION ============================= }
    //     const l = $('#movieList').children()[i];
    //     console.log(l.css('display', 'none'));
    //   }
    // }
  });

  // step 8 -> making the lis hidden on step 7, reappear
  $('#btnShowAll').on('click', () => {
    $('#movieList li').not('.top5').slideDown(500);
  });

  // step 9 -> highlightting every li that contains a The on it
  $('#btnHighlightThe').on('click', () => {
    $('#movieList li:contains(The)').css('background-color', 'yellow');
  });
});
