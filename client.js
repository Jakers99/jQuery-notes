console.log('hi');
$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $('#Hello').append('Welcome to my Page!');
    //$('#Hello').css('color', 'red');   Not the best way to do things
    $('#Hello').addClass('blue'); //best practice
    $('#submit').on('click', handleSubmit);
    $('.extraBtn').on('click', '.extraBtn', handleClick);
  
}//testing to see if jQuery works

    function handleSubmit() {   
    console.log('hello');
    let firstName = $('#firstName').val();
    console.log(firstName);
    $('#firstName').val('yay');
    $('#wrapper').append('<button class="extraBtn>Click Me</button>');
}
 function handleClick() {
     console.log('button clicked');
    $(this).addClass('blue')
 }
