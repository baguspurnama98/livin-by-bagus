module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@src': './src',
          '@images': './src/assets/images',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
