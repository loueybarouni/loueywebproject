function sendMessage() {
    var cin = document.getElementById('cin').value;
    var fullName = document.getElementById('fullName').value;
    var message = document.getElementById('message').value;

    var errorCin = '';
    var errorFullName = '';
    var errorMessages = '';

    // Validate CIN
    if (!cin.match(/^\d{8}$/)) {
        errorCin = 'CIN must be 8 digits.';
    }

    // Validate Full Name
    if (!fullName.match(/^[a-zA-Z\s]+$/)) {
        errorFullName = 'Full Name can only contain letters.';
    }

    // Validate Message
    if (message.trim() === '') {
        errorMessages = 'You can\'t send an empty message.';
    } else if (message.length > 150) {
        errorMessages = 'Message must not exceed 150 characters.';
    }

    // Display errors
    document.getElementById('errorCin').innerText = errorCin;
    document.getElementById('errorFullName').innerText = errorFullName;
    document.getElementById('errorMessages').innerText = errorMessages;

    // If no errors, proceed to send email
    if (errorCin === '' && errorFullName === '' && errorMessages === '') {
        var email = 'lou2eybarouni@gmail.com';
        var subject = 'New Contact Message';
        var body = 'CIN: ' + cin + '\n\nFull Name: ' + fullName + '\n\nMessage:\n' + message;

        window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
}

function updateCounter() {
    var message = document.getElementById('message').value;
    var remainingCharacters = 150 - message.length;
    document.getElementById('messageCounter').innerText = remainingCharacters + '/150';
}
