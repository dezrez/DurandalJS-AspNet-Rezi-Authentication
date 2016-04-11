export class RequestHelperClass {
    public GetParameterValue(parameterName: string): string {
        if (location.search != "") {
            var regex: RegExp = new RegExp("[\\?&]" + parameterName + "=([^&#]*)");
            var results: RegExpExecArray = regex.exec(location.search);

            if (results != null) {
                if (results.length > 0) {
                    return results[1];
                }
            }
        }

        return "";
    }
}

export var RequestHelper = new RequestHelperClass();