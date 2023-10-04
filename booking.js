var fileInput = document.getElementById('fileInput');
var resetButton = document.getElementById('resetButton')

resetButton.addEventListener('click', function() {
    //reset the file inputs by cleaing their value
    fileInput.value = '';
})