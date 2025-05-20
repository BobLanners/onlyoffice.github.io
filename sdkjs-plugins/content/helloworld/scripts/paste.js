Api.ShowMessage("✅ plugin loaded");
window.Asc.plugin.init = function () {
  Api.ShowMessage("✅ plugin loaded");

  window.Asc.plugin.callCommand(function () {
    try {
      var sheet = Api.GetActiveSheet();
      var cell = sheet.GetRange("A1");
      cell.SetValue("Hello World from plugin");
    } catch (e) {
      Api.ShowMessage("❌ Plugin failed: " + e.message);
    }
  }, true);
};