file.onchange = function () {
  let files = [];
  var zip = new JSZip();
  zip.loadAsync(this.files[0]).then(
    (zip) => {
      for (x in zip.files) {
        files.push(x);
      }
      console.log(files);
      const giveLi = (arr) => {
        arr.forEach((e, id) =>
          $("ul").append($(`<li class='${id.toString()}'></li>`).text(e))
        );
      };
      giveLi(files);
    },
    () => {
      $("#result").text("Not a valid zip file");
    }
  );
};
