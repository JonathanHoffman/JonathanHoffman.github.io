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
});
