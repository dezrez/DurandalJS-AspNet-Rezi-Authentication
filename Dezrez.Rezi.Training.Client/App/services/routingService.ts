import routerPlugin = require("plugins/router");
import routerHelper = require("helpers/routerHelper");

export class RouterService {
    private static _instance: RouterService = null;
    public router: DurandalRootRouter = routerPlugin;
    public childRouter: DurandalRouter;
    private routeHelper: routerHelper.RouterHelper = new routerHelper.RouterHelper();

    constructor() {
        if (RouterService._instance) {
            throw new Error("Error: Instantiation failed: Use RouterService.getInstance() instead of new.");
        }
        RouterService._instance = this;
    }

    public static GetInstance(): RouterService {
        if (RouterService._instance === null) {
            RouterService._instance = new RouterService();
        }
        return RouterService._instance;
    }

    public buildMainRouter() {
        this.router.makeRelative(<DurandalRelativeRouteSettings>{
            moduleId: "viewmodels"            
        }).map(this.routeHelper.routes)
            .buildNavigationModel()
            .mapUnknownRoutes("Home/Dashboard", "not-found")
            .activate();
    }
}