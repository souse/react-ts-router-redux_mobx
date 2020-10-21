const path = require('path');
const { 
  override, 
  fixBabelImports,
  addPostcssPlugins,
  addWebpackAlias
} = require('customize-cra');
const pxtorem = require('postcss-pxtorem');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addPostcssPlugins([
    pxtorem({
      rootValue: 37.5,
      propList: ['*'],
      // exclude: /node_modules/i
      exclude: (file) => {
        return file.indexOf('bootstrap') !== -1;
      }
    })
  ])
);