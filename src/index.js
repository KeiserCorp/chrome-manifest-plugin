function ChromeManifestPlugin(options) {
	this.options = options
}

ChromeManifestPlugin.prototype.apply = function (compiler) {
	self = this;
	compiler.plugin('compilation', function (compilation) {
		compilation.plugin('html-webpack-plugin-before-html-generation', function (htmlPluginData, callback) {
			var manifestFile = Object.keys(compilation.assets).find((filename) => {
				if (filename.startsWith(self.options.filename) && filename.endsWith(self.options.filetype)) {
					return true;
				}
				return false
			})
			if (manifestFile) {
				htmlPluginData.assets[self.options.filename] = manifestFile;
			}
			callback(null, htmlPluginData);
		});
	});
};

module.exports = ChromeManifestPlugin;