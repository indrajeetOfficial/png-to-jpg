var convertButton = document.getElementById('convertButton');
var resultContainer = document.getElementById('resultContainer');
var downloadButton = document.createElement('a');

convertButton.addEventListener('click', function() {
  var pngFile = document.getElementById('pngFile').files[0];
  
  if(pngFile) {
    var reader = new FileReader();
    
    reader.addEventListener('load', function() {
      var img = new Image();
      
      img.addEventListener('load', function() {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
        
        var jpgData = canvas.toDataURL('image/jpeg', 0.8);
        
        var resultImage = document.createElement('img');
        resultImage.id = 'resultImage';
        resultImage.src = jpgData;
        
        resultContainer.innerHTML = '';
        resultContainer.appendChild(resultImage);
        
        downloadButton.id = 'downloadButton';
        downloadButton.href = jpgData;
        downloadButton.download = 'converted.jpg';
        downloadButton.innerHTML = 'Download JPG';
        resultContainer.appendChild(downloadButton);
      });
      
      img.src = reader.result;
    });
    
    reader.readAsDataURL(pngFile);
  }
});
