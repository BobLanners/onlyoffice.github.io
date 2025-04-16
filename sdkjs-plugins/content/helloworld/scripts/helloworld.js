//Logic for the plugin. Buttons, scripts that can be called, etc.

window.Asc.plugin.init = function () {
    console.log("🧩 Plugin initialized");
};

window.Asc.plugin.button = function () {
    console.log("🔘 Plugin button clicked");
};

window.Asc.plugin.button = function () {
    console.log("Run button clicked!");
    // Example action for spreadsheet
    var sheet = Api.GetActiveSheet();
    sheet.GetRange("A1").SetValue("Button was clicked!");
  };