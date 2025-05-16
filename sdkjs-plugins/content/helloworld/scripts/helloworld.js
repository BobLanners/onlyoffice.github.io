window.Asc.plugin.init = function () {
  console.log("✅ Plugin loaded");
};

window.Asc.plugin.button = function () {
  console.log("🔘 Paste button clicked");

  window.Asc.plugin.callCommand(function () {
    var sheet = Api.GetActiveSheet();
    sheet.GetRange("A1").SetValue("Hello from plugin");
  }, true);
};