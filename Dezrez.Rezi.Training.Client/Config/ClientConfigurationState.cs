using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Dezrez.Rezi.Training.Client.Config
{
    /// <summary>
    /// A Class dictating the properties of each item in the ClientConfigurationStateCollection
    /// </summary>
    public class ClientConfigurationState : ConfigurationElement
    {
        [ConfigurationProperty("key", IsRequired = true)]
        public string Key
        {
            get
            {
                return this["key"] as string;
            }
        }

        [ConfigurationProperty("value", IsRequired = true)]
        public string Value
        {
            get
            {
                return this["value"] as string;
            }
        }
    }
}