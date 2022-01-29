const CrmWidgetsConfigModule = angular.module("prf.widgets.config", []);

const EnvConfig = {
  api: "https://api.grupoblack.co/",
  streamer: "https://streamer.grupoblack.co/",
};

CrmWidgetsConfigModule.constant("prfEnvConfig", EnvConfig);
