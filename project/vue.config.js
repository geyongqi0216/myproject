const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true // transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#0071c5",
          "link-color": "#096dd9",
          "border-radius-base": "3px",
          "font-family": "intel-clear",
          "font-size-base": "14px",
          "text-color": "#000000",
          "disabled-color": "rgba(0, 0, 0, 0.5)",
          "table-expanded-row-bg": "#f8fcff",
        },
        javascriptEnabled: true,
      },
      sass: {},
    },
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('monaco').use( new MonacoWebpackPlugin() )
    config.plugin("define").tap((args) => {
      args[0]["ENABLESSO"] = JSON.stringify(true);
      args[0]["ENABLESIMICS"] = JSON.stringify(true);
      args[0]["ENABLESIMCLOUD"] = JSON.stringify(['CI-Simcloud']);
      args[0]["JOBPIPELINE"] = JSON.stringify(
        "/blue/organizations/jenkins/[JobType]/detail/[JobType]/"
      );
      if (process.env.NODE_ENV === "production") {
        // ---Prod---
        args[0]["PHASE"] = JSON.stringify("Production");
        args[0]["PHASECOLOR"] = JSON.stringify("#40c463");
      } else if (process.env.NODE_ENV === "development") {
        // ---Staging---
        args[0]["PHASE"] = JSON.stringify("Staging");
        args[0]["PHASECOLOR"] = JSON.stringify("#f50");
      }
      args[0]["PHASETITLE"] = JSON.stringify(
        "v2.4.0 build 202302241527 Release Notes"
      );
      args[0]["PHASECONTENT"] = JSON.stringify(
        "<p>\
        <b>Module Versions</b><br/>\
        • <b>UI</b>:      2023.07.4.1521;<br/>\
        • <b>Service</b>: 2023.18.5.1000;<br/>\
        <br/>\
        <b>Major Feature</b><br/>\
        • Unified test automation infrastructures (1TAS 1.0 and CAF) and provided one API for BIOS CI infrastructure.<br/>\
        • Implemented event-based interaction, which is aligned with BIOS CI.<br/>\
          It significantly improved CI test efficiency and decouple the API dependency across micro services.<br/>\
        • Simcloud container integration for 1TAS managed testing.<br/>\
        <br/>\
        <b>Supported Feature</b><br/>\
        • Instantly or scheduled run test jobs.<br/>\
        • Fast test or debug with commands/scripts.<br/>\
        • Pick up dedicate device or shared pool managed by project/team.<br/>\
        • Test runtime management (Progressive control, logging service and report summary).<br/>\
        • Software management (Test Scripts or Package/Campaign compatible with runner).<br/>\
        • Hardware management (Host Controller/System Under Test).<br/>\
        • Full RESTful API support.<br/>\
        <br/>\
        <b> Changelog</b><br/>\
        o	Provide option for user to decide to use package data or 1tas’s db data (auto register cases).<br/>\
        o	Add retry for connect mq and send mq message.<br/>\
        o	Fixed the bug plan result is null in plan event .<br/>\
        o	Add plan_id in plan event.<br/>\
        o	Fixed the bug res_plan_id was 0 even test was triggered.<br/>\
        </p>"
      );
      if (process.env.NODE_ENV === "production") {
        // ---Prod---
        args[0]["PHASE"] = JSON.stringify("Production");
        args[0]["PHASECOLOR"] = JSON.stringify("#40c463");
      } else if (process.env.NODE_ENV === "development") {
        // ---Staging---
        args[0]["PHASE"] = JSON.stringify("Staging");
        args[0]["PHASECOLOR"] = JSON.stringify("#f50");
      }
      args[0]["ARTIFACTORYBASEURL"] = JSON.stringify(
        // Artifactory base url
        "https://ubit-artifactory-or.intel.com/artifactory/one-tas-repo-or-local"
      );
      args[0]["ENABLESSO"] = JSON.stringify(true);
      args[0]["ENABLESIMICS"] = JSON.stringify(true);
      args[0]["SSO_IAP"] = JSON.stringify("31922");
      args[0]["FACELESS_AUTH"] = JSON.stringify(
        "Basic c3lzX3RhczpUMVMjUUFad3N4RURDQEYkVDIwMjE="
      );
      args[0]["FACELESS_CAF_AUTH"] = JSON.stringify(
        "Basic c3lzX2NhZnRlc3Q6UVdFUjEyMzQk"
      );
      args[0]["ARTIFACTORY_PROXY"] = JSON.stringify([
        {
          'url': 'ubit-artifactory-sh.intel.com', 
          'proxy_name': '/artifactory_sh_proxy', 
          'auth': args[0]["FACELESS_CAF_AUTH"]
        },
        {
          'url': 'ubit-artifactory-or.intel.com', 
          'proxy_name': '/artifactory_or_proxy', 
          'auth': args[0]["FACELESS_AUTH"]
        },
      ]);
      args[0]["JENKINS_PROXY"] = JSON.stringify([
        {
          'url': 'https://cje-fm-owrp-prod01.devtools.intel.com', 
          'proxy_name': '/log_proxy_stag_01', 
          'basic_auth': 'Basic c3lzX3RhczpUMVMjUUFad3N4RURDQEYkVDIwMjE='
        },
        {
          'url': 'https://1tas-portal.intel.com:5000', 
          'proxy_name': '/log_proxy_stag_02', 
          'basic_auth': ''
        },
        {
          'url': 'https://shilc276.sh.intel.com', 
          'proxy_name': '/log_proxy_prod_01', 
          'basic_auth': ''
        },
        {
          'url': 'https://shilc272.sh.intel.com', 
          'proxy_name': '/log_proxy_prod_02', 
          'basic_auth': ''
        },
      ]);
      args[0]["LOGSERVICE"] = JSON.stringify("log_service");
      if (process.env.NODE_ENV === "production") {
        // ---prod---
        args[0]["APIBASEURL"] = JSON.stringify(
          "https://1tas-core.intel.com:1443/api"
        );
        args[0]["JENKINS_URL"] = JSON.stringify(
          "https://shilc276.sh.intel.com"
        );
        args[0]["REPORTBASEURL"] = JSON.stringify(
          "https://1tas-sche.intel.com"
        ); // Apache server base url
        args[0]["TAS_TOKEN"] = JSON.stringify(
          "3f0bddc1f6388240fd426b8b03c3d2dfe095a874"
        ); // Production TAS backend token
        args[0]["ENVIRONMENT"] = JSON.stringify("production");
        args[0]["TESTPLANCAFHOST"] = JSON.stringify(
          "https://caf.intel.com/"
        );
      } else if (process.env.NODE_ENV === "development") {
        // ---staging---
        args[0]["APIBASEURL"] = JSON.stringify(
          "https://1tas-staging-tms.intel.com/api"
        );
        args[0]["JENKINS_URL"] = JSON.stringify(
          "https://cje-fm-owrp-prod01.devtools.intel.com/satg-fia-onetas"
        );
        args[0]["REPORTBASEURL"] = JSON.stringify(
          "https://cje-fm-owrp-prod01.devtools.intel.com/satg-fia-onetas"
        ); // Apache server base url
        args[0]["TAS_TOKEN"] = JSON.stringify(
          "fc7fdcb9f9ede025710b13aefbe7080d0d1bfc2b"
        ); // Staging TAS backend token
        args[0]["ENVIRONMENT"] = JSON.stringify("20_staging");
        args[0]["TESTPLANCAFHOST"] = JSON.stringify(
          "https://dcg-caf.k8s-fie.intel.com/"
        );
      }
      return args;
    });
  },
  devServer: {
    disableHostCheck: true,
    https: {
      cacert: "./build/nginx/certs/1tas.intel.com.pem",
      key: "./build/nginx/certs/1tas.intel.com.key",
      cert: "./build/nginx/certs/1tas.intel.com.crt",
      pfx: "./build/nginx/certs/1tas.intel.com.pfx",
      passphrase: "Intel1TAS@2021",
    },
    // https: false,
    proxy: {
      "/api": {
        target:
          process.env.NODE_ENV === "development"
            ? "https://1tas-staging-tms.intel.com"
            : "https://1tas-test-api.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        headers: {
          Connection: "keep-alive",
        },
        pathRewrite: {
          "^/api": "/api",
        },
      },
      "/log_proxy_stag_01": {
        target:
          "https://cje-fm-owrp-prod01.devtools.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/log_proxy_stag_01": "",
        },
      },
      "/log_proxy_stag_02": {
        target:
          "https://1tas-portal.intel.com:5000",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/log_proxy_stag_02": "",
        },
      },
      "/log_proxy_prod_01": {
        target:
          "https://shilc276.sh.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/log_proxy_prod_01": "",
        },
      },
      "/log_proxy_prod_02": {
        target:
          "https://shilc272.sh.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/log_proxy_prod_02": "",
        },
      },
      "/download": {
        target:
          process.env.NODE_ENV === "development"
            ? "https://cje-fm-owrp-prod01.devtools.intel.com/satg-fia-onetas"
            : "https://shilc276.sh.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/download_proxy": "",
        },
      },
      "/upload_proxy": {
        target:
          "https://ubit-artifactory-sh.intel.com/artifactory/onetas_fileservice-sh-local/",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/upload_proxy": "",
        },
      },
      "/report_proxy": {
        // Apache server report proxy
        target:
          process.env.NODE_ENV === "development"
            ? "https://cje-fm-owrp-prod01.devtools.intel.com/satg-fia-onetas"
            : "https://shilc276.sh.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/report_proxy": "",
        },
      },
      "/artifactory_proxy": {
        // Artifactory report proxy (target url applicable for both staging and production)
        target:
          "https://ubit-artifactory-or.intel.com/artifactory/one-tas-repo-or-local/",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/artifactory_proxy": "",
        },
      },
      "/get_testPlanPath_proxy": {
        target: "https://caf.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/get_testPlanPath_proxy": "",
        },
      },
      "/artifactory_sh_proxy": {
        target:
          "https://ubit-artifactory-sh.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/artifactory_sh_proxy": "",
        },
      },
      "/artifactory_or_proxy": {
        target:
          "https://ubit-artifactory-or.intel.com",
        logLevel: "debug",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/artifactory_or_proxy": "",
        },
      },
      "/sso": {
        target: "https://iamws-i.intel.com/api/v1/Windows/Auth",
        // target: 'https://iam-pp.intel.com/api/v1/Windows/Auth',
        logLevel: "debug",
        changeOrigin: false,
        ws: true,
        pathRewrite: {
          "^/sso": "",
        },
      },
    },
  },
})
