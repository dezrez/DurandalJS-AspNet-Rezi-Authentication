using Newtonsoft.Json;
using Dezrez.Rezi.Training.Client.Config;
using Dezrez.Rezi.Training.Client.Converters;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;

namespace Dezrez.Rezi.Training.Client.Models
{
    public class ConfigModel
    {
        public string UrlConfigJson { get; private set; }
        public ConfigModel()
        {
            ConfigSection section = (ConfigSection)ConfigurationManager.GetSection("trainingConfigSection");
            JsonSerializerSettings settings = new JsonSerializerSettings { Converters = new[] { new ConfigSectionConverter() } };
            LoadUrlConfigJson(section, settings);
        }

        private void LoadUrlConfigJson(ConfigSection section, JsonSerializerSettings settings)
        {
            List<KeyValuePair<string, string>> urls = new List<KeyValuePair<string, string>>();
            foreach (ClientConfigurationState e in section.Urls)
                urls.Add(new KeyValuePair<string, string>(e.Key, e.Value));
            UrlConfigJson = JsonConvert.SerializeObject(urls, settings);
        }
    }
}