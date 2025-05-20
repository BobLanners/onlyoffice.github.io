(function(window, undefined){

    Asc.scope.message = "Hello from HelloWorld Spreadsheet!";

    window.Asc.plugin.init = function() {
        Api.ShowMessage("✅ init hook ran");

        this.callCommand(function() {
            try {
                var sheet = Api.GetActiveSheet();
                var cell = sheet.GetRange("A1");
                cell.SetValue(Asc.scope.message);
            } catch (e) {
                Api.ShowMessage("❌ command error: " + e.message);
            }
        }, true);
    };

})(window, undefined);