module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ],
    ["@babel/preset-react", {
      "runtime": "automatic"
    }],
    ["@babel/preset-typescript"]
  ],
  plugins: [
    ["@loadable/babel-plugin"],
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ],
    ["import", {
      "libraryName": "antd",
      "style": true, // or 'css'
    }]
  ]
}