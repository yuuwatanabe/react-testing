module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        "targets": {
          "node": "current"
        }
      }
    ]
  ], // @babel/preset-envを使うという設定
  env: {
    test: {
      plugins: ['@babel/transform-react-jsx'], // test時は、transform-es2015-modules-commonjsをかませる。
    },
  },
}