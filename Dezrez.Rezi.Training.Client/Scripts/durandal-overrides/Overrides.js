﻿define(["require", "exports"], function(require, exports) {
    var Overrides = (function () {
        function Overrides() {
        }
        //Durandal looks for widgets and binds them to their views if they are in this format:
        //app -> widgets -> widgetName -> viewmodel.js view.html
        //We want the views to be located in the same folder as the view model views and we do not want each widget to be in a single directory. These overrides change the way
        //durandal does this to deal with our situation
        Overrides.applyWidgetOverrides = function (widgetPlugin) {
            widgetPlugin.convertKindToModulePath = function (kind) {
                return "widgets/" + kind;
            };
            widgetPlugin.convertKindToViewPath = function (kind) {
                return "../../Views/Widgets/" + kind;
            };
        };
        return Overrides;
    })();
    exports.Overrides = Overrides;
    ;
});
//# sourceMappingURL=Overrides.js.map
