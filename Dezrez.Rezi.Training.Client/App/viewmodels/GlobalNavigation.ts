export class GlobalNavigation {
    public NavBarRouteItemsBottom: KnockoutObservableArray<any> = ko.observableArray<any>();
    public Visible: KnockoutObservable<boolean> = ko.observable(true);
    public LoggedInUserName: string = "";
    public ShowGlobalNavMenu: KnockoutObservable<boolean> = ko.observable(true);

    constructor() {
        
    }

    public activate(): void {
         
    }
}