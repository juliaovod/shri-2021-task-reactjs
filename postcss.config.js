module.exports = {
  plugins: [
    require('postcss-nested'),
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
