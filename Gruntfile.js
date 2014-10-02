module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-svg2png');

    grunt.initConfig({
      'sprite': {
        /* Ignore the Raster Icons
        'raster icons': {
          // Sprite files to read in
          'src': ['theme/images/icons/*.png'],

          // Location to output spritesheet
          'destImg': 'theme/images/compiled/raster-sprite.png',

          // Stylus with variables under sprite names
          'destCSS': 'theme/scss/screen/generated/_rasterSpriteSheet.scss',

          // OPTIONAL: Manual override for imgPath specified in CSS
          'imgPath': '../raster-sprite.png',

          // OPTIONAL: Specify algorithm (top-down, left-right, diagonal [\ format],
              // alt-diagonal [/ format], binary-tree [best packing])
          // Visual representations can be found below
          'algorithm': 'top-down',

          // OPTIONAL: Specify padding between images
          'padding': 2,

          // OPTIONAL: Specify engine (auto, phantomjs, canvas, gm, pngsmith)
          'engine': 'auto',

          // OPTIONAL: Specify CSS format (inferred from destCSS' extension by default)
              // (stylus, scss, scss_maps, sass, less, json, json_array, css)
          'cssFormat': 'scss',

          // OPTIONAL: Specify a function or Mustache template to use for rendering destCSS
              // Mutually exclusive to cssFormat
          // More information can be found below
          'cssTemplate': 'theme/scss/screen/templates/rasterIcons.template.mustache',

          // OPTIONAL: Map variable of each sprite
          'cssVarMap': function (sprite) {
            // `sprite` has `name`, `image` (full path), `x`, `y`
            //   `width`, `height`, `total_width`, `total_height`
            // EXAMPLE: Prefix all sprite names with 'sprite-'
            sprite.name = 'sprite-' + sprite.name;
          },

          // OPTIONAL: Specify settings for algorithm
          'algorithmOpts': {
            // Skip sorting of images for algorithm (useful for sprite animations)
            'sort': false
          },

          // OPTIONAL: Specify settings for engine
          'engineOpts': {
            'imagemagick': true
          },

          // OPTIONAL: Specify img options
          'imgOpts': {
             // Format of the image (inferred from destImg' extension by default) (jpg, png)
             'format': 'png',

             // gm only: Quality of image
             'quality': 90,

             // phantomjs only: Milliseconds to wait before terminating PhantomJS script
             'timeout': 10000
          },

          // OPTIONAL: Specify css options
          'cssOpts': {
            // Some templates allow for skipping of function declarations
            'functions': false,

            // CSS template allows for overriding of CSS selectors
            'cssClass': function (item) {
              return '.sprite-' + item.name;
            }
          }
        },
        */
        'svg fallback icons': {
          // Sprite files to read in
          'src': ['theme/images/compiled/png-svg-fallbacks/*.png'],

          // Location to output spritesheet
          'destImg': 'theme/images/compiled/vector-fallback-sprite.png',

          // Stylus with variables under sprite names
          'destCSS': 'theme/scss/screen/generated/_svgFallbackSpriteSheet.scss',

          // OPTIONAL: Manual override for imgPath specified in CSS
          'imgPath': '../vector-fallback-sprite.png',

          // OPTIONAL: Specify algorithm (top-down, left-right, diagonal [\ format],
              // alt-diagonal [/ format], binary-tree [best packing])
          // Visual representations can be found below
          'algorithm': 'top-down',

          // OPTIONAL: Specify padding between images
          'padding': 2,

          // OPTIONAL: Specify engine (auto, phantomjs, canvas, gm, pngsmith)
          'engine': 'auto',

          // OPTIONAL: Specify CSS format (inferred from destCSS' extension by default)
              // (stylus, scss, scss_maps, sass, less, json, json_array, css)
          'cssFormat': 'scss',

          // OPTIONAL: Specify a function or Mustache template to use for rendering destCSS
              // Mutually exclusive to cssFormat
          // More information can be found below
          'cssTemplate': 'theme/scss/screen/templates/svgFallbackIcons.template.mustache',

          // OPTIONAL: Map variable of each sprite
          'cssVarMap': function (sprite) {
            // `sprite` has `name`, `image` (full path), `x`, `y`
            //   `width`, `height`, `total_width`, `total_height`
            // EXAMPLE: Prefix all sprite names with 'sprite-'
            sprite.name = 'icon-' + sprite.name;
          },

          // OPTIONAL: Specify settings for algorithm
          'algorithmOpts': {
            // Skip sorting of images for algorithm (useful for sprite animations)
            'sort': false
          },

          // OPTIONAL: Specify settings for engine
          'engineOpts': {
            'imagemagick': true
          },

          // OPTIONAL: Specify img options
          'imgOpts': {
             // Format of the image (inferred from destImg' extension by default) (jpg, png)
             'format': 'png',

             // gm only: Quality of image
             'quality': 90,

             // phantomjs only: Milliseconds to wait before terminating PhantomJS script
             'timeout': 10000
          },

          // OPTIONAL: Specify css options
          'cssOpts': {
            // Some templates allow for skipping of function declarations
            'functions': false,

            // CSS template allows for overriding of CSS selectors
            'cssClass': function (item) {
              return '.sprite-' + item.name;
            }
          }
        }
      },
      /*
        SVG Store makes all SVG in one external folder - we use this along side with SVG4everyone.
      */
      'svgstore': {
        'options': {
          'prefix' : 'icon-', // This will prefix each ID
          'svg': { // will be added as attributes to the resulting SVG
            'xmlns': 'http://www.w3.org/2000/svg',
            'viewBox' : '0 0 100 100'
          },
          'includedemo' : true,
        },
        'default' : {
          'files': {
            'theme/images/compiled/vector-sprites.svg': ['theme/images/icons/*.svg'],
          },
        },
      },

      'svg2png': {
         'all': {
              // specify files in array format with multiple src-dest mapping
              'files': [
                  // rasterize all SVG files in "img" and its subdirectories to "img/png"
                  { cwd: 'theme/images/icons/', src: ['*.svg'], dest: 'theme/images/compiled/png-svg-fallbacks/' }
              ]
          }
      },

      'sass': {
        'dist': {
          'files': [{
            'expand': true,
            'cwd': 'theme/scss',
            'src': ['*.scss'],
            'dest': 'theme/styles',
            'ext': '.css'
          }]
        }
      },

      // Generates a custom Modernizr build that includes only the tests you
      // reference in your app
      'modernizr': {
          'dist': {
              'devFile': '<%= config.themeSrcDir %>/bower_components/modernizr/modernizr.js',
              'outputFile': '<%= config.themeBuildDir %>/<%= config.scriptDir %>/vendor/modernizr.js',
              'files': {
                  'src': [
                      '<%= config.buildDir %>/<%= config.scriptDir %>/{,*/}*.js',
                      '<%= config.buildDir %>/<%= config.stylesDir %>/{,*/}*.css',
                      '!<%= config.buildDir %>/<%= config.scriptDir %>/vendor/*'
                  ]
              },
              'uglify': true,
              'tests': [
                  'css-calc'
              ],
              'extensibility': {
                  'prefixes': true
              },
              // Have custom Modernizr tests? Add paths to their location here.
              'customTests': [
                  '/bower_components/modernizr-retina-test/index.js'
              ]
          }
      },


    });

    grunt.registerTask('default', ['svg2png', 'sprite', 'svgstore', 'sass']);

};
