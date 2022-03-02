const CrmWidgetsConfigModule = angular.module("prf.widgets.config", []);

const EnvConfig = {
  api: "https://api.grupobm.co/",
  streamer: "https://streamer.grupobm.co/",
  requestCache: "true",
};

CrmWidgetsConfigModule.constant("prfEnvConfig", EnvConfig);
