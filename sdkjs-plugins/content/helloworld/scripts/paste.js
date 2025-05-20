window.Asc.plugin.init = function () {
  window.Asc.plugin.callCommand(function () {
    const sheet = Api.GetActiveSheet();
    sheet.GetRange("A1").SetValue("Test from init");
  }, true);
};