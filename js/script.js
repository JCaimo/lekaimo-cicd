document.addEventListener('DOMContentLoaded', function() {
    var dateElement = document.getElementById('date');
    var today = new Date();
    dateElement.innerHTML = 'Today\'s date is ' + today.toDateString() + '.';
});
