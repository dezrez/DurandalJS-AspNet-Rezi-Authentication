using Dezrez.Rezi.Training.Client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dezrez.Rezi.Training.Client.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            ConfigModel config = new ConfigModel();
            return View(config);
        }
    }
}