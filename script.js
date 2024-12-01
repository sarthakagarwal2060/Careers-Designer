function displayFileName() {
    const fileInput = document.getElementById("resume");
    const fileName = document.getElementById("file-name");
    const checkmark = document.getElementById("checkmark");
  
    // Get the file name and display it
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
      fileName.textContent = selectedFile.name;
      checkmark.style.display = 'inline';  // Show green tick
    } else {
      fileName.textContent = 'No file chosen';
      checkmark.style.display = 'none';   // Hide green tick if no file is selected
    }
  }
  