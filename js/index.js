//Bootstrap and jquery included via CodePen. Much js functionality is in minified Bootstrap.js and configured through data attributes.

$(document).ready(function() {
    function sendMail() {
        var name = $('#contactName').val();
        var email = $('#contactEmail').val();
        var message = $('#contactMessage').val();
        // message += "\n\n" + name;
        var msgString = `mailto:jonathanghoffman@gmail.com?subject=new message from ${email}&body=${message}%0A${name}`;
        window.open(msgString);
    }

    $('#contactSubmit').click(function () {
        sendMail();
    });

    // Fix scrolling with a fixed navbar. 
    var navOffset = $('.navbar').height();
    
    $('.navbar li a').click(function(event) {
        var href = $(this).attr('href');
    
        // Don't let the browser scroll, but still update the current address
        // in the browser.
        event.preventDefault();
        window.location.hash = href;
    
        // Explicitly scroll to where the browser thinks the element
        // is, but apply the offset.
        $(href)[0].scrollIntoView();
        window.scrollBy(0, -navOffset);
    });
});
