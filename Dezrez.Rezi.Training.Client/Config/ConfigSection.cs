using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Dezrez.Rezi.Training.Client.Config
{
    public class ConfigSection : ConfigurationSection
    {
        [ConfigurationProperty("urls")]
        public ClientConfigurationStateCollection Urls
        {
            get { return this["urls"] as ClientConfigurationStateCollection; }
        }
    }
}