document.getElementById('generateButton').addEventListener('click', function () {
  html2canvas(document.querySelector("#capture")).then(canvas => {
    const capturedImage = canvas.toDataURL('image/jpeg', 1.0);

    canvas.toBlob(function (blob) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
      reader.result;
      }
    });
    document.getElementById('capturedImage').src = capturedImage;
    document.getElementById('capturedImage').style.display = 'block';
    document.getElementById('downloadLink').href = capturedImage;
    document.getElementById('downloadLink').style.display = 'block';
  });
});

document.getElementById('downloadButton').addEventListener('click', function () {
  downloadImage();
});

function downloadImage() {
  const link = document.getElementById('downloadLink');
  link.click();
}