module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
        concat: false
      },
      ios: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n<%= pkg.title %>\nChUI.iOS.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        files: { 'chui/chui.ios-<%= pkg.version %>.css': 'src/themes/chui.ios.less'}
      },
      android : {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n<%= pkg.title %>\nChUI.Android.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        files : { 'chui/chui.android-<%= pkg.version %>.css': 'src/themes/chui.android.less'}
      },
      win : {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n<%= pkg.title %>\nChUI.Win.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        files : { 'chui/chui.win-<%= pkg.version %>.css': 'src/themes/chui.win.less'}
      }
    },
    concat: {
      chui: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.js\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['src/chui/start.js', 'src/chui/event-init.js','src/chui/jquery-helpers.js','src/chui/$-extensions.js','src/chui/collection-extensions.js','src/chui/widget-factory.js','src/chui/load-init.js','src/chui/end.js','src/chui/gestures.js'],
        dest: 'chui/chui-<%= pkg.version %>.js'
      },
      chocolatechip: {      
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChocolateChip.js\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ["src/chocolatechip/start.js","src/chocolatechip/returnResult.js","src/chocolatechip/selectors.js","src/chocolatechip/extend.js","src/chocolatechip/core.js","src/chocolatechip/plugin.js","src/chocolatechip/cache.js","src/chocolatechip/collection.js","src/chocolatechip/domready.js","src/chocolatechip/string.js","src/chocolatechip/ajax.js","src/chocolatechip/feature-detection.js","src/chocolatechip/templates.js","src/chocolatechip/pubsub.js","src/chocolatechip/expose-chocolatechip.js","src/chocolatechip/end.js"],
        dest: 'chui/chocolatechip-<%= pkg.version %>.js'
      },
      // The following concats are just to attach a banner to the LESS output:
      ios: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.iOS.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['chui/chui.ios-<%= pkg.version %>.css'],
        dest : 'chui/chui.ios-<%= pkg.version %>.css'
      },
      android: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.Android.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['chui/chui.android-<%= pkg.version %>.css'],
        dest: 'chui/chui.android-<%= pkg.version %>.css'
      },
      win: {
        options: {
          banner: '/*\n    pO\\\n   6  /\\\n     /OO\\\n    /OOOO\\\n  /OOOOOOOO\\\n ((OOOOOOOO))\n  \\:~=++=~:/\n\n<%= pkg.title %>\nChUI.Win.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        src: ['chui/chui.win-<%= pkg.version %>.css'],
        dest: 'chui/chui.win-<%= pkg.version %>.css'
      },
      example_ios: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="utf-8">\n   <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n   <meta name="apple-mobile-web-app-capable" content="yes">\n   <meta name="mobile-web-app-capable" content="yes">\n   <meta name="msapplication-tap-highlight" content="no">\n   <title>ChocolateChip-UI iOS</title>\n   <link rel="stylesheet" href="../chui/chui.ios-<%= pkg.version %>.css">\n   <script src="../chui/chocolatechip-<%= pkg.version %>.js"></script>\n   <!--<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>-->\n   <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: [
          {
            expand: true,
            cwd: 'src/examples/',
            src: ['**/*'],
            dest: 'examples-ios/'
          }
        ]
      },
      example_android: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="utf-8">\n   <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n   <meta name="apple-mobile-web-app-capable" content="yes">\n   <meta name="mobile-web-app-capable" content="yes">\n   <meta name="msapplication-tap-highlight" content="no">\n   <title>ChocolateChip-UI Android</title>\n   <link rel="stylesheet" href="../chui/chui.android-<%= pkg.version %>.css">\n   <script src="../chui/chocolatechip-<%= pkg.version %>.js"></script>\n   <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: [
          {
            expand: true,
            cwd: 'src/examples/',
            src: ['**/*'],
            dest: 'examples-android/'
          }
        ]
      },
      example_win: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="utf-8">\n   <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n   <meta name="apple-mobile-web-app-capable" content="yes">\n   <meta name="mobile-web-app-capable" content="yes">\n   <meta name="msapplication-tap-highlight" content="no">\n   <title>ChocolateChip-UI Win</title>\n   <link rel="stylesheet" href="../chui/chui.win-<%= pkg.version %>.css">\n   <script src="../chui/chocolatechip-<%= pkg.version %>.js"></script>\n   <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: [
          {
            expand: true,
            cwd: 'src/examples/',
            src: ['**/*'],
            dest: 'examples-win/'
          }
        ]
      },
      demo_ios: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="utf-8">\n   <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n   <meta name="apple-mobile-web-app-capable" content="yes">\n   <meta name="mobile-web-app-capable" content="yes">\n   <meta name="msapplication-tap-highlight" content="no">\n   <title>ChocolateChip-UI Demo iOS</title>\n   <link rel="stylesheet" href="../chui/chui.ios-<%= pkg.version %>.css">\n   <script src="../chui/chocolatechip-<%= pkg.version %>.js"></script>\n   <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: {
          'demo/index-ios.html': ['src/demo/index.html']
        }
      },
      demo_android: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="utf-8">\n   <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n   <meta name="apple-mobile-web-app-capable" content="yes">\n   <meta name="mobile-web-app-capable" content="yes">\n   <meta name="msapplication-tap-highlight" content="no">\n   <title>ChocolateChip-UI Demo Android</title>\n   <link rel="stylesheet" href="../chui/chui.android-<%= pkg.version %>.css">\n   <script src="../chui/chocolatechip-<%= pkg.version %>.js"></script>\n   <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: {
          'demo/index-android.html': ['src/demo/index.html']
        }
      },
      demo_win: {
        options: {
          banner: '<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="utf-8">\n   <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n   <meta name="apple-mobile-web-app-capable" content="yes">\n   <meta name="mobile-web-app-capable" content="yes">\n   <meta name="msapplication-tap-highlight" content="no">\n   <title>ChocolateChip-UI Demo Android</title>\n   <link rel="stylesheet" href="../chui/chui.win-<%= pkg.version %>.css">\n   <script src="../chui/chocolatechip-<%= pkg.version %>.js"></script>\n   <script src="../chui/chui-<%= pkg.version %>.js"></script>\n'
        },
        files: {
          'demo/index-win.html': ['src/demo/index.html']
        }
      }
    },
    uglify: {
      chui: {
        options: {
          banner: '/*\nChocolateChip-UI\nChUI.js\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        files: {
          'chui/chui-<%= pkg.version %>.min.js': ['chui/chui-<%= pkg.version %>.js']
        }
      },
      chocolatechip: {
        options: {
          banner: '/*\nChocolateChip-UI\nChocolateChip.js\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/\n'
        },
        files: {'chui/chocolatechip-<%= pkg.version %>.min.js': ['chui/chocolatechip-<%= pkg.version %>.js']
        }
      }
    },
    cssmin: {
      android: {
        options: {
          banner: '/*\nChocolateChip-UI\nChUI-Android.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/'
        },
        files: {'chui/chui.android-<%= pkg.version %>.min.css': 'chui/chui.android-<%= pkg.version %>.css'}
      },
      ios: {
        options: {
          banner: '/*\nChocolateChip-UI\nChUI-iOS.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/'
        },
        files: {'chui/chui.ios-<%= pkg.version %>.min.css': 'chui/chui.ios-<%= pkg.version %>.css'}
      },
      win: {
        options: {
          banner: '/*\nChocolateChip-UI\nChUI-Win.css\nCopyright <%= grunt.template.today("yyyy") %> Sourcebits www.sourcebits.com\nLicense: <%= pkg.licences[0].type %>\nVersion: <%= pkg.version %>\n*/'
        },
        files: {'chui/chui.win-<%= pkg.version %>.min.css': 'chui/chui.win-<%= pkg.version %>.css'}
      }
    },
    copy: {
      images: {
        files: [
          { 
            expand: true,
            cwd: 'src/images/', 
            src: ['**/*.{png,jpg,svg}'], 
            dest:'images/' 
          }
        ]
      },
      data: {
        files: [
          {
            expand: true,
            cwd: 'src/data/',
            src: ['**/*'],
            dest: 'data/'
          }
        ]
      },
      index_ios : {
        files: [
          {
            expand: true, 
            cwd: 'src/', 
            src: ['index.html'], 
            dest: 'examples-ios/'
          }
        ],
      },
      index_android: {
        files: [
          {
            expand: true, 
            cwd: 'src/', 
            src: ['index.html'], 
            dest: 'examples-android/'
          }
        ]
      },
      index_win:  {
        files: [
          {
            expand: true, 
            cwd: 'src/', 
            src: ['index.html'], 
            dest: 'examples-win/'
          }
        ]
      }
    },
    jshint: {
      options: {
          curly: false,
          browser: true,
          eqeqeq: true,
          forin: false,
          immed: false,
          expr: false,
          indent: false,
          noempty: true,
          plusplus: false,
          unused: false,
          boss: true,
          evil: true,
          laxbreak: true,
          multistr: true,
          scripturl: true,
          '-W030': true
      },
      chocolatechip: ['chui/chocolatechip-<%= pkg.version %>.js'],
      chui: ['chui/chui-<%= pkg.version %>.js']
    }
  });

  // Tasks:
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['less', 'concat', 'uglify', 'cssmin', 'copy', 'jshint']);
};