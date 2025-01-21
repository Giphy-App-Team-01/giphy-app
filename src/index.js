document.addEventListener('DOMContentLoaded', (e) => {
  console.log('hello');
  const fileInput = document.querySelector('#fileInput');
  const imagePreview = document.getElementById('imagePreview');
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        imagePreview.src = e.target.result; // Set as the image source
        imagePreview.style.display = 'block'; // Make the image visible
      };

      // Read the file as a Data URL
      reader.readAsDataURL(file);
    }
  });
});
