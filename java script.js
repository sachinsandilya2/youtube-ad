function notify() {
    alert('Namaste! We know you’re here. Do come back again! 😊');
}

function submitComment() {
    const comment = document.getElementById('comment').value;
    if (comment) {
        alert('Thank you for your comment!');
        document.getElementById('comment').value = ''; // Clear the textarea
    } else {
        alert('Please write a comment before submitting.');
    }
}
