//converting km to miles info 1km= 0.621371

function convert(){
    var kms = document.getElementById('data').value;
    const factor=0.621371;
    var miles = kms * factor;
   document.getElementById('out').innerText = `${miles} miles`
}
