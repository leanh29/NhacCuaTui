alert('hello')
$(document).ready(function(){
    $('.close').click(function(e){
        e.preventDefault();
        $('.banner').hide();
    })
})