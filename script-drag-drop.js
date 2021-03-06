var uploaded_image;

image_drop_area.addEventListener("dragover", (event) => {
  event.stopPropagation();
  event.preventDefault();
  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = "copy";
});

// Event listener for dropping the image inside the div
image_drop_area.addEventListener("drop", (event) => {
  event.stopPropagation();
  event.preventDefault();
  fileList = event.dataTransfer.files;

  // document.querySelector("#file_name").textContent = fileList[0].name;

  readImage(fileList[0]);
});

// Converts the image into a data URI
readImage = (file) => {
  const reader = new FileReader();
  let number = document.getElementById("text-val").value;
  if (choice_drop === true) {
    reader.addEventListener("load", (event) => {
      uploaded_image = event.target.result;
      document.querySelector(
        "#image_drop_area"
      ).style.backgroundImage = `url(${uploaded_image})`;

      $(".drop-title").css("display", "none");
      // $(".drop-button").css("display", "block");

      $("#downloaded").click(function (e) {
        $("#downloaded").attr("download", number);
        $("#downloaded").attr("href", event.target.result);

        console.log("click");
        /**
         * Display a base64 URL inside an iframe in another window.
         */

        // e.g This will open an image in a new window
        // debugBase64(event.target.result);
        setTimeout(() => {
          window.location.reload();
        }, 100);
      });
    });
  }
  reader.readAsDataURL(file);
};
