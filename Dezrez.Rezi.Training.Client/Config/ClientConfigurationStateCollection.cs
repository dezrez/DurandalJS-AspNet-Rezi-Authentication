using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Dezrez.Rezi.Training.Client.Config
{
    /// <summary>
    /// A Reusable class across all custom config collections as long as they use 'key' and 'value' as stated in the ClientConfigurationState
    /// </summary>
    public class ClientConfigurationStateCollection : ConfigurationElementCollection
    {
        public ClientConfigurationState this[int index]
        {
            get
            {
                return base.BaseGet(index) as ClientConfigurationState;
            }
            set
            {
                if (base.BaseGet(index) != null)
                {
                    base.BaseRemoveAt(index);
                }
                this.BaseAdd(index, value);
            }
        }

        protected override ConfigurationElement CreateNewElement()
        {
            return new ClientConfigurationState();
        }

        protected override object GetElementKey(ConfigurationElement element)
        {
            return ((ClientConfigurationState)element).Key;
        }
    }
}