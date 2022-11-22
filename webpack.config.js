const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    //devtool: 'inline-source-map',
    devtool: 'inline-source-map',
    entry: './src/main.ts',
module: {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
},
resolve: {
  extensions: ['.tsx', '.ts', '.js'],
},
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
},
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        port: 3000,
        static: './dist',
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: { '^/api': '' },
            },
        },
        /*
        headers: {
            "Access-Control-Allow-Origin": "canpatata.auth0.com",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        allowedHosts : ["canpatata.auth0.com"]
        */
       /*
        headers: {
            "Access-Control-Allow-Origin": "*",
            "access-control-allow-methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "access-control-allow-headers": "X-Requested-With, Content-Type, Authorization",
            "access-control-allow-credentials" : "true" 
        },
        */
        //allowedHosts : ["localhost:8080"]
     }
};