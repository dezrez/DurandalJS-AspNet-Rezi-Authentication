export class RouterHelper {
    constructor() {}

     public routes: DurandalRouteConfiguration[] = [
         <DurandalRouteConfiguration>{ pos: "bottom", route: "", moduleId: "Home/Dashboard", iconClass: "char-dashboard", title: "Dashboard", nav: true, hash: "" },
         <DurandalRouteConfiguration>{ pos: "bottom", route: "PeopleList*details", moduleId: "Lists/PeopleList", iconClass: "char-users", title: "People", nav: true, hash: "#PeopleList" },
         <DurandalRouteConfiguration>{ pos: "bottom", route: "PropertyList*details", moduleId: "Lists/PropertyList", iconClass: "char-home", title: "Properties", nav: true, hash: "#PropertyList" }
     ];
 }