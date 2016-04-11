using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace Dezrez.Rezi.Training.Client.Controllers
{
    public class DurandalViewController : Controller
    {
        // GET: DurandalView
        [HttpGet]
        public ActionResult GetTemplate(string viewName)
        {
            viewName = viewName.Replace(".html", "");

            CultureInfo ci = new CultureInfo(CultureInfo.CurrentCulture.Name);
            Thread.CurrentThread.CurrentCulture = ci;
            Thread.CurrentThread.CurrentUICulture = ci;

            return View(viewName);
        }
    }
}