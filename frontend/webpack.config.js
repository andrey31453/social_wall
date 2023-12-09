const html_webpack = require('html-webpack-plugin')
const { VueLoaderPlugin: vue_loader } = require('vue-loader')
const copy_webpack = require('copy-webpack-plugin')
const webpack = require('webpack')

const public = __dirname + '/public/'
const src = __dirname + '/src/'

//
// entry
//

const get_entry = () => {
  return {
    main: src + 'main.js',
  }
}

//
// rules
//

const get_rules = (dev) => {
  return [
    // vue
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },

    // js
    {
      test: /\.(mjs|js)$/i,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
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
}

//
// plugins
//

const get_plugins = () => {
  return [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new vue_loader(),
    new html_webpack({
      template: src + 'index.html',
    }),
    new copy_webpack({
      patterns: [
        {
          from: src + 'public',
          to: public + 'assets',
        },
      ],
    }),
  ]
}

//
// alias
//

const get_alias = () => {
  return {
    '@': src,
    '@public': public,

    '@layouts': src + 'layouts/__bunddle',
    '@views': src + 'views/__bunddle',
    '@components': src + 'components/__bunddle',
    '@ui': src + 'ui/__bunddle',

    '@consts': src + 'assets/consts/__bunddle',
    '@helpers': src + 'assets/helpers/__bunddle',
    '@styles': src + 'assets/styles',

    '@composables': src + 'composables/__bunddle',
    '@store': src + 'store/__bunddle',
    '@directives': src + 'directives/__bunddle',
    '@directives:helpers': src + 'directives/helpers/__bunddle',
  }
}

//
// serve
//

const get_serve = (dev) => {
  return dev
    ? {
        open: {
          app: {
            name: 'google-chrome',
            arguments: ['--new-tab'],
          },
        },
        hot: true,
        port: 8080,
      }
    : undefined
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
    entry: get_entry(),

    // output
    output: {
      filename: '[name].js',
      clean: true,
      path: public,
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
