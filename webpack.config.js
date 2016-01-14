const config = { 
	entry: "./app/app.js",
    output: {
    	path: "build",
        filename: "bundle.js"
    },
    module: {
		loaders:[
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /node_modules/,
				query: {
		        	presets: ['es2015']
		        }
			}
		]
	}
}

module.exports = config;