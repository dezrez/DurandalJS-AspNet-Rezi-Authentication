define(["services/authService", "plugins/router"], (authService, router) => {
    function pmajax(config) {
        return $.Deferred(deferred => {
            config.error = function (xhr, status, error) {
                if (xhr.status == 401) {
                    var authData = JSON.parse(localStorage.getItem("authorizationData"));
                    if (authData) {
                        if (authData.useRefreshTokens) {
                            authService.refreshToken().then(response => {
                                $.ajax(this).then(function (data, textStatus, jqXhr) {
                                    deferred.resolveWith(this, [data, textStatus, jqXhr]);
                                }).fail(function (jqXhr, textStatus, errorThrown) {
                                    deferred.rejectWith(this, [jqXhr, textStatus, errorThrown]);
                                });
                                return deferred.promise;
                            }).fail(() => {
                                authService.logout();
                                router.navigate("#/Login");
                            });
                        }
                    } else {
                        authService.logout();
                        router.navigate("#/Login");
                    }
                }
            };
            $.ajax(config).done(function (data, textStatus, jqXhr) {
                deferred.resolveWith(this, [data, textStatus, jqXhr]);
            });
        }).promise();
    }

    return {
        PMAJAX: pmajax
    };
});
