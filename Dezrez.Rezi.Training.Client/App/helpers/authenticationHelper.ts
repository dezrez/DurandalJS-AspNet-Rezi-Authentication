import config = require("config/config");

export class AuthenticationHelperClass {


    public BuildAuthUrl(authUrl: string, redirectUri: string): string {
        var state: string = Date.now() + "" + Math.random();
        var url: string = authUrl + "?" +
            "client_id=" + encodeURI(config.Config.ClientId) + "&" +
            "redirect_uri=" + encodeURI(redirectUri) + "&" +
            "response_type=" + encodeURI("code") + "&" +
            "scope=" + encodeURI(config.Config.AccessScope) + "&" +
            "state=" + encodeURI(state);
        sessionStorage["state"] = state;

        return url;
    }

    public GetBaseAuthentication(username: string, password: string): string {
        var token: string = username + ":" + password;
        var hash: string = btoa(token);
        return "Basic " + hash;
    }

    public DecodeTokenUserInfo(accessToken: string): any {
        var tokenInfo: Array<string> = accessToken.split(".");
        return JSON.parse(atob(tokenInfo[1]));
    }
}

export var AuthenticationHelper = new AuthenticationHelperClass();