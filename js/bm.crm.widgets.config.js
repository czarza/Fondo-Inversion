const CrmWidgetsConfigModule = angular.module("prf.widgets.config", []);

const EnvConfig = {
  api: "https://api.blackmarkets.es/",
  streamer: "https://streamer.blackmarkets.es/",
};

CrmWidgetsConfigModule.constant("prfEnvConfig", EnvConfig);
