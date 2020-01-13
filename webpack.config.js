const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [
                'babel-loader'
            ]
        },
        {
          test: /\.html$/,
          use: [
                'html-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                  loader: 'file-loader',
                  options: {
                    esModule: false,
                  },
                },
            ],
        },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
  };