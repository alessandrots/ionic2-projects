// https://www.npmjs.com/package/fs-extra

module.exports = {
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets'
  },
  copyIndexContent: {
    src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
    dest: '{{WWW}}'
  },
  copyFonts: {
    src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyPolyfills: {
    src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  },
  // copyProjectFiles: {
  //   src: [
  //     // 'node_modules/chart.js/dist/Chart.bundle.min.js',
  //     // 'node_modules/intl/dist/Intl.min.js.map',
  //     // 'node_modules/intl/dist/Intl.min.js',
  //     // 'node_modules/intl/locale-data/jsonp/pt-BR.js'
  //   ],
  //   dest: '{{WWW}}/build'
  // },

  // copyPlugins: {
  //   src: [
  //     '{{ROOT}}/plugins/parse-push-plugin/www/parse-push-plugin.js'
  //   ],
  //   dest: '{{WWW}}/build'
  // },
  
  // copySqlite: {
  //   src: ['cmi2.sqlite'],
  //   dest: '{{WWW}}'
  // }
};
