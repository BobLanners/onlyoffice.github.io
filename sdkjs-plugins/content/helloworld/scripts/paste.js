window.Asc.plugin.init = function () {
  document.getElementById("pasteButton").addEventListener("click", function () {
    window.Asc.plugin.executeMethod("PasteText", ["Hello World"]);
  });
};