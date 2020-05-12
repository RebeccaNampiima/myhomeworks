/*Open the `Accordion.fig` file to see the design. Create a page with the accordion. Use CSS or SCSS for styling. 
You don't need to make the page responsive. Use jQuery to write logic that will open/hide the content below each section when 
clicking on the section title. The section title is the container that has an icon and a section name 
(Location, Music, Notes, Books, Tendances)*/

// homework on jquery, lesson was 29th April

$('#location1').on('click', () => {
  $('.location_p').toggle(3000);
});

$('#music1').on('click', () => {
  $('.music_p').fadeToggle(1000);
});

$('#notes1').on('click', () => {
  $('.notes_p').slideToggle(500);
});

$('#books1').on('click', () => {
  $('.books_p').slideDown().slideUp(1500);
});

$('#tendency1').on('click', () => {
  $('.tendency_p').slideDown().fadeToggle(2000);
});








