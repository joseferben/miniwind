module.exports = {
  variants: {},
  plugins: [],
  safelist: [
    {
      pattern:
        /^(p|m)(t|r|l|b|x|y)-\d|^(p|m)-\d|^(w|h)-\d|^flex|^justify|^max-w-|^whitespace|^rounded|^hyphens|^items|^(space)-(x|y)-\d|^mx-auto|^float-right/,
    },
  ],
};
