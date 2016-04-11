// Maps the files so Durandal knows where to find these.
require.config({
    urlArgs: 'bust=@Revision@',
    paths: {
        "text": "../Scripts/text",
        "durandal": "../Scripts/durandal",
        "durandal-overrides": "../Scripts/durandal-overrides/overrides",
        "plugins": "../Scripts/durandal/plugins",
        "transitions": "../Scripts/durandal/transitions",
        "knockout": "Scripts/knockout-3.2.0",
        "services" : "./services",
        "interfaces" : "./interfaces",
        "ko-Overrides": "../Scripts/knockout-customHandlers/knockout-customHandlers"
    }
});

// Durandal 2.x assumes no global libraries. It will ship expecting 
// Knockout and jQuery to be defined with requirejs. .NET 
// templates by default will set them up as standard script
// libs and then register them with require as follows: 
define("jquery", function () { return jQuery; });
define("knockout", ko);

define(["durandal/app", "durandal/viewLocator", "durandal/system", "plugins/router", "plugins/widget", "plugins/dialog", "durandal-overrides", "ko-Overrides"], boot);

function boot(app, viewLocator, system, router, widget, dialog, durandalOverrides) {

    // Enable debug message to show in the console 
    system.debug(true);

    app.title = "Rezi Auth";

    app.configurePlugins({
        router: true,
        widget: true,
        dialog: true
    });

    durandalOverrides.Overrides.applyWidgetOverrides(widget);

    app.start().then(function () {
        // When finding a viewmodel module, replace the viewmodel string 
        // with view to find it partner view.
        // [viewmodel]s/sessions --> [view]s/sessions.html
        // Defaults to viewmodels/views/views. 
        // Otherwise you can pass paths for modules, views, partials
        viewLocator.useConvention("viewmodels", "../../Views");

        //Show the app by setting the root view model for our application.
        app.setRoot("viewmodels/shell", "entrance");
    });
};