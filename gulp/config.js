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
      copy: [
        {
          from: ['../assets/**/*',
                '!../assets/**/*.jpg',
                '!../assets/**/*.gif',
                '!../assets/**/*.png',
                '!../assets/**/jquery.ui.datepicker-ja.min.js',
                '!../assets/**/jquery-ui.js'
              ],
          to: 'dist/'
        }
      ],
      copyimg: [
        {
          from: ['../assets/**/*.jpg',
                '../assets/**/*.gif',
                '../assets/**/*.png',
                '../assets/**/jquery.ui.datepicker-ja.min.js',
                '../assets/**/jquery-ui.js'
              ],
          to: 'dist/'
        }
      ],
      watch: [
        {
          from: '../assets/ab/activity/top/sp/**/*',
          to: 'dist/ab/activity/top/sp/'
        },
        {
          from: '../assets/htmlmock/activity/sp/**/*',
          to: 'dist/htmlmock/activity/sp/'
        }
      ]
    }
};
