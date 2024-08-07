$(document).ready(function () {
  $(".filename").hide();
  $(".filecontent").hide();
  $(".saveBtn").hide();
});
function start() {
  $(".pagetitle").hide();
  $(".pagedescription").hide();
  $(".startBtn").hide();
  $(".filename").show();
  $(".filecontent").show();
  $(".saveBtn").show();
}
function save() {
  var filename = $(".filename").val();
  var fileContent = $(".filecontent").val();
  if (!filename) {
    alert("Please enter a filename.");
    return;
  }
  var blob = new Blob([fileContent], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
