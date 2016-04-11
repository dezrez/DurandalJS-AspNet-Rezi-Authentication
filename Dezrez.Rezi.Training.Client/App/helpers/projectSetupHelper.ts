import routerPlugin = require("plugins/router");

export class projectSetupHelper {
    public SetupProject(): void {
        this.SetupAjax();
    }

    private SetupAjax(): void {
        $.ajaxSetup({
            beforeSend: function (xhr) {
                var authData = JSON.parse(localStorage.getItem("authorizationData"));
                if (authData !== null && authData !== undefined) {
                    xhr.setRequestHeader("Authorization", "Bearer " + authData.token);
                }
            },
            error: function (xhr, status, error) {
                var authData = JSON.parse(localStorage.getItem("authorizationData"));
                if (xhr.status == 401 && authData) {
                    routerPlugin.navigate("/");
                } else {
                    routerPlugin.navigate("#/Login");
                }
            }
        });
    }
}

export var ProjectSetupHelper = new projectSetupHelper(); 