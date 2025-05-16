window.Asc.plugin.init = function () {
  document.getElementById("pasteButton").addEventListener("click", function () {
    window.Asc.plugin.callCommand(function () {
      const sheet = Api.GetActiveSheet();
      sheet.GetRange("A1").SetValue("Hello World");
    }, true);
  });
};