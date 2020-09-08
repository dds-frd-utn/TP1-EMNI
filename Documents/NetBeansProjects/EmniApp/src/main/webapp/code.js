$(function(){
    $("#cargar").click(function(){
        $.ajax({
            url: "http://www.mocky.io/v2/5abaf73a350000590073a7b9",
            success: function(data){
                for(var i in data){
                    $("#listaPaises").append(
                        $("<li/>", {text:data[i].nombre+" ("+data[i].codigo+")"})
                        );
                }
            },
            beforeSend: function () {
                $('body').append( $("<img/>", {src: "https://i.pinimg.com/originals/29/ca/04/29ca04c66d2121ed24d2da46e64e6534.gif%22%7D"}));
            },
            complete: function() {
                $('body').removeClass('loading');
            },
        });
    });
});
