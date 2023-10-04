var fileInput1 = document.getElementById('fileInput1');
var fileInput2 = document.getElementById('fileInput2');
var fileInput3 = document.getElementById('fileInput3');
var fileInput4 = document.getElementById('fileInput4');
var resetButton = document.getElementById('resetButton')

resetButton.addEventListener('click', function() {
    //reset the file inputs by cleaing their value
    fileInput1.value = '';
    fileInput2.value = '';
    fileInput3.value = '';
    fileInput4.value = '';
})