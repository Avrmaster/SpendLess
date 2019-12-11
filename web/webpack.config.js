// web/webpack.config.js for

const path = require('path')
const webpack = require('webpack')

const rootDirectory = path.resolve(__dirname, '../')
const appDirectory = path.resolve(__dirname, '../src')
const webDirectory = path.resolve(__dirname, '../web')

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
	test: /\.jsx?$/,
	// Add every directory that needs to be compiled by Babel during the build.
	include: [
		path.resolve(appDirectory, 'index.web.js'),
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
	],
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			// Babel configuration (or use .babelrc)
			// This aliases 'react-native' to 'react-native-web' and includes only
			// the modules needed by the app.
			plugins: [
				// This aliases 'react-native' to 'react-native-web' to fool modules that only know
				// about the former into some kind of compatibility.
				'react-native-web',
			],
			// The 'react-native' preset is recommended to match React Native's packager
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

// This is needed for webpack to import static images in JavaScript files.
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
		extensions: ['.web.js', '.js', '.jsx'],

		alias: {
			'react-native$': 'react-native-web',
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

			'web-modules': path.resolve(webDirectory, './node_modules'),
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
