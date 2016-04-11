import authHelper = require("helpers/authenticationHelper");
import config = require("config/config");

export class AuthenticationService  {
    private _accessToken: string = "";
    private _refreshToken: string = "";
    private static _instance: AuthenticationService = null;

    constructor() {
        if (AuthenticationService._instance) {
            throw new Error("Error: Instantiation failed: Use AuthenticationService.getInstance() instead of new");
        }
        AuthenticationService._instance = this;
    }

    public static GetInstance(): AuthenticationService {
        if (AuthenticationService._instance === null) {
            AuthenticationService._instance = new AuthenticationService();
        }
        return AuthenticationService._instance;
    }

    get AccessToken(): string {
        if (!this._accessToken) {
            this._accessToken = localStorage.getItem("authorizationData");
        }
        return this._accessToken;
    }

    public GetAuthToken(oAuthCode: string) {
        var authConfig: any = { grant_type: "authorization_code", code: oAuthCode, redirect_uri: config.Config.RedirectUrl };
        var authHeader: any = { "Authorization": authHelper.AuthenticationHelper.GetBaseAuthentication(config.Config.ClientId, config.Config.ClientPassword) };
        $.ajax({
            type: "POST",
            url: config.Config.TokenUrl,
            data: authConfig,
            headers: authHeader
        }).done(
            (data: any) => {
                localStorage.setItem('authorizationData', JSON.stringify({ accessToken: data.access_token, refreshToken: data.refresh_token, tokenType: data.token_type }));
                parent.window.location.href = config.Config.RedirectUrl;
            },
            () => {
                this.GoToLoginPage();
            });
    }
    public GoToLoginPage(): void {
        var idServerUrl: string = config.Config.AuthenticationUrl;
        var redirectUrl: string = config.Config.RedirectUrl;
        window.location.href = authHelper.AuthenticationHelper.BuildAuthUrl(idServerUrl, redirectUrl);
    }

}