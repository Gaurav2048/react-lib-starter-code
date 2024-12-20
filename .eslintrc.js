module.exports = {
    env: {
      node: true, // Node.js environment
      browser: true, // Browser environment (if needed)
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module', // Allow imports
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['react', '@typescript-eslint'],
    settings: {
      react: {
        version: '19.0.0', // Automatically detect the version of React
      },
    },
    rules: {
      // You can specify additional rules here if needed
    },
  };
  