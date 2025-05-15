window.Asc.plugin.init = function () {
  console.log("🧩 Plugin initialized");

  document.getElementById("pasteButton").addEventListener("click", function () {
    const text = document.getElementById("userInput").value;

    Asc.scope.inputText = text;

    window.Asc.plugin.callCommand(function () {
      const sheet = Api.GetActiveSheet();
      const value = Asc.scope.inputText || "";
      sheet.GetRange("A1").SetValue(value);
    }, true);
  });
};

window.Asc.plugin.button = function () {
  // Optional: leave empty or add logic for the Run button
};