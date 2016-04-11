using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Dezrez.Rezi.Training.Client.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();

            bundles.Add(
                new ScriptBundle("~/Scripts/vendor")
                    .Include("~/Scripts/jquery-{version}.js")
                    .Include("~/Scripts/knockout-{version}.js")
                    .Include("~/Scripts/q.js")
                    .Include("~/Scripts/moment.js")
                    .Include("~/Scripts/accounting.js")
                    .Include("~/Scripts/bootstrap.js")
                    .Include("~/Scripts/jquery.simpleWeather.js")
                    .Include("~/Scripts/linq.js")
                );

            bundles.Add(
                new StyleBundle("~/Content/css")
                    .Include("~/Content/durandal.css")
                    .Include("~/Content/Bootstrap/bootstrap.css")
                );
        }
    }
}