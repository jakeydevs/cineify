// vue.config.js
module.exports = {
	configureWebpack: {
		target: 'web',
		node: {
			fs: 'empty'
		}
	}
}