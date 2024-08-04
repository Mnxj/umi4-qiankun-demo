import { name } from '../package.json';

module.exports = new webpack.DefinePlugin({
	'process.env.APP_NAME': JSON.stringify(name),
})