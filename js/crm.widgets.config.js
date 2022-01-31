const CrmWidgetsConfigModule = angular.module("prf.widgets.config", []);

const EnvConfig = {
  api: "https://api.grupoblack.co/",
  streamer: "https://streamer.grupoblack.co/",
  requestCache: "true",
};

CrmWidgetsConfigModule.constant("prfEnvConfig", EnvConfig);
