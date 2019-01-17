const path = require('path')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix.config.vue.esModule = true

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .styles('resources/libassets/lib.css', 'public/css/lib.css')
  .styles('resources/libassets/_all-skins.css', 'public/css/_all-skins.css')
  .js('resources/libassets/lib.js', 'public/js')
  .styles([
    'resources/assets/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'resources/assets/bower_components/select2/dist/css/select2.min.css',
    'resources/assets/bower_components/Ionicons/css/ionicons.min.css'
  ], 'public/css/styles.css')
  .scripts([
    'resources/assets/bower_components/jquery/dist/jquery.min.js',
    'resources/assets/bower_components/bootstrap/dist/js/bootstrap.min.js'
  ], 'public/js/scripts.js')

  .sourceMaps()
  .disableNotifications()

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'jquery',
    'popper.js',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'bootstrap',
    'vue-router',
    'sweetalert2',
    'vuex-router-sync',
    '@fortawesome/vue-fontawesome',
    '@fortawesome/fontawesome-svg-core'
  ])
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js')
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
})
