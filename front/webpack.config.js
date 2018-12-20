const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		alias: {
			vue: "vue/dist/vue.js"
		}
	},
	module: {
		// ローダー設定
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(jpg|png|gif)$/,
				loaders: 'url-loader'
			},
			{
				test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
				loader: 'url-loader',
			},
		]
	},
    plugins: [
        new VueLoaderPlugin()
    ],
};
