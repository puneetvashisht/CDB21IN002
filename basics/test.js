function reverseContent(){
    console.log('button clicked...')
    // read the message
    var message = document.getElementById('message').innerText;
    // logic to reverse
    var reversedMessage = message.split('').reverse().join('');
    /// writing the reversed message to dom
    document.getElementById('message').innerText = reversedMessage;
}

console.log('JS code..')