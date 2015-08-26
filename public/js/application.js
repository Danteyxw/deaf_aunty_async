$(document).ready(function() {

  $("form[action='/aunty']").submit(function(event) {
    event.preventDefault();

    $.ajax({
      method: "post",
      url: $(this).attr('action'),
      data: $(this).serialize()
    }).done(function(response){
      $(".conversation").append("<p>" + response + "</p>");
    });

    // var $form = $(this),
    //     term = $form.find("input[name='user_input']").val(),
    //     url = $form.attr("action");

    // var posting = $.post( url, {user_input: term});

    // posting.done(function(data) {
    //   // $(".conversation").append("<p>" + term + "</p>");
    // });

  });

});