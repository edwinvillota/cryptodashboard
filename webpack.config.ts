import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config = (): Configuration => {
  process.env.NODE_ENV = process.env.ENV || 'local';
  const isProduction = process.env.NODE_ENV === 'production';
  const envLocation = `./src/env/env.${process.env.ENV}.ts`;
  const envPath = path.join(__dirname, envLocation);

  return {
    entry: './src/index.tsx',
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|webp|jpe?g)$/i,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
    ],
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      open: true,
      historyApiFallback: true,
      hot: true,
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@models': path.resolve(__dirname, 'src/models'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@public': path.resolve(__dirname, 'public'),
      },
    },
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
  };
};

export default config;
