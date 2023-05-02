const path = require('path');
const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = {
    mode: "production",
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new SentryCliPlugin({
            org: "dragonfruit-dev",
            project: "javascript-webpack",
            authToken: "0ac177a5a0cf41a7bc3016cac3f590f09b911107e6c145d88e32045b8e84afce",
            include: ["./dist/"],
            release: "webpack@1.0.0",
            urlPrefix: "~/dist/"
        })
    ]
};