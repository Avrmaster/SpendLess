const path = require('path')
const webpack = require('webpack')

const rootDirectory = path.resolve(__dirname, '../')
const appDirectory = path.resolve(__dirname, '../src')

/* This is needed for webpack to compile ours, React Native's & third party's
* code  into the javascript, supported by browser. */
const babelLoaderConfiguration = {
	test: /\.jsx?$/,
	include: [
		path.resolve(rootDirectory, 'src'),
		path.resolve(rootDirectory, 'node_modules/styled-components/native'),
		path.resolve(rootDirectory, 'node_modules/react-native-chart-kit'),
		path.resolve(rootDirectory, 'node_modules/react-native-screens'),
		path.resolve(rootDirectory, 'node_modules/react-native-progress-circle'),
		path.resolve(rootDirectory, 'node_modules/react-native-reanimated'),
		path.resolve(rootDirectory, 'node_modules/react-native-gesture-handler'),
		path.resolve(rootDirectory, 'node_modules/@react-native-community'),
		path.resolve(rootDirectory, 'node_modules/react-native-vector-icons'),
		path.resolve(rootDirectory, 'node_modules/@react-navigation'),
		path.resolve(rootDirectory, 'node_modules/react-navigation'),
		path.resolve(rootDirectory, 'node_modules/react-native'),
	],
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			// This aliases 'react-native' to 'react-native-web'
			plugins: [
				// This aliases 'react-native' to 'react-native-web' to fool modules that only know
				// about the former into some kind of compatibility.
				'react-native-web',
			],
			// The 'react-native' preset is recommended to match React Native's packager (& it's syntax)
			presets: ['module:metro-react-native-babel-preset'],
		},
	},
}

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
	test: /\.(gif|jpe?g|png|svg)$/,
	use: {
		loader: 'url-loader',
		options: {
			name: '[name].[ext]',
		},
	},
}

// This is needed for webpack to import static files in JavaScript files (like fonts).
const fontsLoaderConfiguration = {
	test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
	use: {
		loader: 'file-loader',
		options: {
			name: '[name].[ext]',
			outputPath: 'fonts/',
		},
	},
}

module.exports = {
	entry: [
		path.resolve(appDirectory, 'index.web.js'),
	],
	output: {
		crossOriginLoading: 'anonymous',
		filename: 'bundle.web.js',
		path: path.resolve(rootDirectory, 'public'),
	},
	resolve: {
		// If you're working on a multi-platform React Native app, web-specific
		// module implementations should be written in files using the extension
		// `.web.js`.
		extensions: ['.web.js', '.web.jsx', '.js', '.jsx'],

		alias: {
			'assets': path.resolve(appDirectory, './assets'),
			'apiClient': path.resolve(appDirectory, './apiClient'),
			'components': path.resolve(appDirectory, './components'),
			'config': path.resolve(appDirectory, './config'),
			'containers': path.resolve(appDirectory, './containers'),
			'decorators': path.resolve(appDirectory, './decorators'),
			'helpers': path.resolve(appDirectory, './helpers'),
			'images': path.resolve(appDirectory, './images'),
			'navigation': path.resolve(appDirectory, './navigation'),
			'reducers': path.resolve(appDirectory, './reducers'),
			'sagas': path.resolve(appDirectory, './sagas'),
			'themes': path.resolve(appDirectory, './themes'),
			'web-modules': path.resolve(rootDirectory, './web/node_modules'),
		},
	},

	module: {
		rules: [
			babelLoaderConfiguration,
			imageLoaderConfiguration,
			fontsLoaderConfiguration,
		],
	},

	plugins: [
		// `process.env.NODE_ENV === 'production'` must be `true` for production
		// builds to eliminate development checks and reduce build size. You may
		// wish to include additional optimizations.
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			__DEV__: process.env.NODE_ENV === 'production' || true,
		}),
	],

	devServer: {
		// TODO: made this supportable by default
		proxy: {
			'/1.0': {
				target: 'http://192.168.1.21:5000',
				secure: false,
				changeOrigin: true,
				headers: {
					Connection: 'keep-alive',
					'Access-Control-Allow-Origin': '*',
				},
			},
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		contentBase: path.join(__dirname, '../public'),
		compress: false,
		port: 9000,
		host: '127.0.0.1',
	},
}
