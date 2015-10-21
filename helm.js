var browserify = require('browserify');
var babelify = require('babelify');
var nodemon = require('nodemon');
var fs = require('fs');
var helm = require('helm-control');


helm.command('bundle', [], done => {

	browserify({ debug:true })
		.transform(babelify)
		.require('./app/index.js', { entry:true })
		.bundle()
		.on('error', err => console.log('Error: ' + err.message))
		.pipe(fs.createWriteStream('./app/public/bundle.js'))
		.on('finish',done);
});

helm.command('app',
			 ['bundle'],
             () => 
             {
             	var config = 
                  { 
                    verbose: true, 
                    script: 'app.js', 
                    ignore: 'app/public/js/*'
                  }

                nodemon(config)
                  .on('start', () => console.log('nodemon started'))
                  .on('crash', () => console.log('script crashed for some reason'));
            	}
              );

helm.engage(['app']);


