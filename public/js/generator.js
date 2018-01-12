

function reload(){
    //window.location.reload();
    $( document ).ajaxSend(function( event, request, settings ) {
        $( "#dogLink" ).html( "<li>Hol up, Lycos bout to come through</li>" );
    });

    $.ajax({
        method: "GET",
        url: "/getImage",
    })
        .done(function( data ) {
        
        console.log( data.urls.regular );
        $('#dogLink').html('<img src=' + data.urls.regular + ' id="dogImage" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" class="galleryimage">');
    });
}