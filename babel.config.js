module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './components',
            '@context': './context',
          },
        },
      ],
      'react-native-classname-to-style',
      [
        'react-native-platform-specific-extensions',
        { extensions: ['scss', 'sass'] },
      ],
    ],
  };
};
