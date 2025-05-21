(function (window, undefined) {
  // Define a scoped message (like HelloWorld plugin's "text")
  Asc.scope.message = "Hello from plugin";

  // Called when the plugin panel is initialized
  window.Asc.plugin.init = function () {
    Api.ShowMessage("✅ Plugin panel loaded");

    // Run the command as soon as the plugin loads (no button for now)
    window.Asc.plugin.callCommand(function () {
      try {
        const sheet = Api.GetActiveSheet();
        const cell = sheet.GetRange("A1");
        cell.SetValue(Asc.scope.message);
      } catch (e) {
        Api.ShowMessage("❌ Error: " + e.message);
      }
    }, true);
  };

  // Optional: define button logic here if needed later
  window.Asc.plugin.button = function () {
    // Not used for panel-based plugins with custom HTML buttons
  };
})(window);