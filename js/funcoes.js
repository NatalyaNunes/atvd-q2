let msg = $(".control");

$(".control").click(function(){
    let novo = $("<p>");

    novo.html($(this).html());
    $("#joystick").after(novo);
    
    document.body.appendChild(novo);
});

