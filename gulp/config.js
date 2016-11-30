module.exports = {
  dist: 'dist',
  defaultPath: 'pc',
  server: {
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: false
    }
  },
  path: {
    sjiscopy: [],
    copy: [{
      from: ['../assets/**/*.jpg',
        '../assets/**/*.gif',
        '../assets/**/*.png'
      ],
      to: 'dist/'
    }],
    js: {
      src: '../assets/**/*.js',
      dest: 'dist/'
    },
    pug: {
      src: '../assets/**/*.pug',
      dest: 'dist/'
    },
    watch: [{
      from: '../assets/**/*',
      to: 'dist/'
    }]
  }
};