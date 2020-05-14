console.log('hi');
$(document).ready(onReady)

function onReady() {
    console.log('jQuery is loaded');
    $('#Hello').append('Welcome to my Page!');
    //$('#Hello').css('color', 'red');   Not the best way to do things
    $('#Hello').addClass('blue'); //best practice
    $('#submit').on('click', handleSubmit;
}//testing to see if jQuery works

    funciton handleSubmit(){
    console.log('hello');
    let firstName = $('#firstName').val();
    console.log('');
    $('#firstName').val('yay')
}