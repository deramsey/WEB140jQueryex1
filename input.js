$( document ).ready(function(){
  $(".listAdd").on("click", function(){
    var word = $( ".wordIn" ).val();
    $( ".list" ).append("<li>" + word + "</li>");
    $( ".wordIn" ).val('');
  });
  var long = $( "h1" ).width();
  $( "button, input" ).width(long);
});