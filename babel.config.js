const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          browsers: [
            '> 1%',
            'last 2 versions',
            'not ie <= 8'
          ]
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}

if (process.env.NODE_ENV === 'production') {
  babelConfig.plugins = babelConfig.plugins.concat([
    'transform-remove-console',
    'transform-remove-debugger'
  ])
}

module.exports = babelConfig
