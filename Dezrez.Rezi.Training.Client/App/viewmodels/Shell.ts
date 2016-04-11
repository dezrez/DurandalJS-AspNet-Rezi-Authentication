import globalNav = require("viewmodels/GlobalNavigation");
import routerPlugin = require("plugins/router");
import requestHelper = require("helpers/requestHelper");
import setupHelper = require("helpers/projectSetupHelper");
import authService = require("services/authenticationService");
import routingService = require("services/routingService");

export class Shell {
    private _authServiceInstance: authService.AuthenticationService = authService.AuthenticationService.GetInstance();
    public globalNavigation: globalNav.GlobalNavigation = new globalNav.GlobalNavigation();
    public router: DurandalRootRouter = routerPlugin;
    public Ready: KnockoutObservable<boolean> = ko.observable(false);
    public accessToken: KnockoutObservable<string> = ko.observable("");
    public routing: routingService.RouterService = routingService.RouterService.GetInstance();
    
    constructor() {
        this.accessToken(this._authServiceInstance.AccessToken);
        this.routing.buildMainRouter();
    }
    
    public activate(): void {

        setupHelper.ProjectSetupHelper.SetupProject();

        var self: Shell = this;
        self.Ready(false);
        if (self.accessToken()) {
            self.Ready(true);

        this.globalNavigation.NavBarRouteItemsBottom(this.router.routes);
    }
        else if (requestHelper.RequestHelper.GetParameterValue("code")) {
            self._authServiceInstance.GetAuthToken(requestHelper.RequestHelper.GetParameterValue("code"));
            return null;
        }
        else {
            self._authServiceInstance.GoToLoginPage();
            return null;
        }
    }
 }

 return new Shell();