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
                '!../assets/**/*.png'
              ],
          to: 'dist/'
        }
      ],
      copyimg: [
        {
          from: ['../assets/**/*.jpg',
                '../assets/**/*.gif',
                '../assets/**/*.png'
              ],
          to: 'dist/'
        }
      ],
      watch: [
        {
          from: '../assets/**/*',
          to: 'dist/'
        },
      ]
    }
};
