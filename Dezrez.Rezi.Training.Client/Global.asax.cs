using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Dezrez.Rezi.Training.Client.App_Start;
using System.Web.Http;

namespace Dezrez.Rezi.Training.Client
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            ViewEngines.Engines.Add(new RazorViewEngine { ViewLocationFormats = new string[] { "~/Views/{0}.cshtml" }, PartialViewLocationFormats = new string[] { "~/Views/{0}.cshtml" } });

            AreaRegistration.RegisterAllAreas();
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
