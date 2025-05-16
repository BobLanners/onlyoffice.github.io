window.Asc.plugin.init = function () {
  console.log("✅ Plugin panel loaded");

  const pasteButton = document.getElementById("pasteButton");
  if (pasteButton) {
    pasteButton.addEventListener("click", function () {
      window.Asc.plugin.callCommand(function () {
        const sheet = Api.GetActiveSheet();
        sheet.GetRange("A1").SetValue("Hello World");
      }, true);
    });
  }
};