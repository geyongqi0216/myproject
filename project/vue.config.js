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
})
