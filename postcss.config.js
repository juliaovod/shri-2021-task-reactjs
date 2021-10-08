module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('postcss-autoreset')({
      reset: {
        borderRadius: 0,
        margin: 0,
        padding: 0,
      },
    }),
  ],
};
