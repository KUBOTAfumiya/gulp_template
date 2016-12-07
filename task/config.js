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
        '../assets/**/*.png',
        '../assets/**/*.json',
      ],
      to: 'dist/'
    }
  ],
    js: {
      src: '../assets/js/*.js',
      dest: 'dist/js/'
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