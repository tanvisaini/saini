module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'jsx-a11y'],
    rules: {
      'jsx-a11y/alt-text': ['error', { elements: ['img', 'object', 'area', '[role=img]'] }],
      // ...other rules
    },
  };
  