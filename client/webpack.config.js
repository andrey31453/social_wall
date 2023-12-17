const html_webpack = require('html-webpack-plugin')
const { VueLoaderPlugin: vue_loader } = require('vue-loader')
const copy_webpack = require('copy-webpack-plugin')

const dist = __dirname + '/dist/'
const src = __dirname + '/src/'
const template = __dirname + '/src/template/'

//
// rules
//

const get_rules = (dev) => [
  // vue
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },

  // ts
  {
    test: /\.ts$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.vue$/],
    },
  },

  // scss
  {
    test: /\.scss$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [require('postcss-preset-env')],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: dev ? true : false,
        },
      },
    ],
  },

  // files
  {
    test: /\.(png|jpg|webp|ico|.json)$/i,
    type: 'asset/resource',
  },

  // svg
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader',
  },
]

//
// plugins
//

const get_plugins = () => [
  new vue_loader(),
  new html_webpack({
    favicon: template + 'favicon.png',
    template: template + 'index.html',
  }),
  new copy_webpack({
    patterns: [
      {
        from: src + 'static',
        to: dist + 'assets',
      },
    ],
  }),
]

//
// alias
//

const get_alias = () => ({
  '@': src,

  '@layouts': src + 'layouts/__bunddle',
  '@views': src + 'views/__bunddle',
  '@components': src + 'components/__bunddle',
  '@ui': src + 'ui/__bunddle',

  '@consts': src + 'assets/consts/__bunddle',
  '@helpers': src + 'assets/helpers/__bunddle',
  '@styles': src + 'assets/styles',

  '@composables': src + 'composables/__bunddle',
  '@store': src + 'store/__bunddle',
})

//
// serve
//

const get_serve = (dev) => {
  if (!dev) return undefined

  return {
    hot: true,
    port: 8080,
    allowedHosts: 'all',
  }
}

//
// exports
//

module.exports = ({ dev }) => {
  return {
    // mode
    mode: dev ? 'development' : 'production',

    // target
    target: ['browserslist'],

    // devtool
    devtool: dev ? 'eval-source-map' : undefined,

    // devServer
    devServer: get_serve(dev),

    // entry
    entry: {
      main: src + 'app/main.ts',
    },

    // output
    output: {
      filename: '[name].js',
      clean: true,
      path: dist,
      assetModuleFilename: '[name][ext]',
    },

    // resolve
    resolve: {
      extensions: ['.vue', '.js'],
      alias: get_alias(),
    },

    // module
    module: {
      rules: get_rules(dev),
    },

    //plugins
    plugins: get_plugins(),
  }
}
