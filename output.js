{
  mode: 'development',
  context: '/mnt/c/Code/Experiments/cineify',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/mnt/c/Code/Experiments/cineify/dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/mnt/c/Code/Experiments/cineify/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/mnt/c/Code/Experiments/cineify/node_modules',
      '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/@vue/cli-service/4.4.1_e94e38839b28c32fffd14207ae87dc2d/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/@vue/cli-plugin-babel/4.4.1_@vue+cli-service@4.4.1/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/mnt/c/Code/Experiments/cineify/node_modules',
      '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/@vue/cli-service/4.4.1_e94e38839b28c32fffd14207ae87dc2d/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/cache-loader/4.1.0_webpack@4.43.0/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/mnt/c/Code/Experiments/cineify/node_modules/.cache/vue-loader',
              cacheIdentifier: '60c6eca8'
            }
          },
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-loader/15.9.2_1ebeed51c9db1c19ddd7ada5173f91fd/node_modules/vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: '/mnt/c/Code/Experiments/cineify/node_modules/.cache/vue-loader',
              cacheIdentifier: '60c6eca8'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/url-loader/2.3.0_file-loader@4.3.0+webpack@4.43.0/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/file-loader/4.3.0_webpack@4.43.0/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/file-loader/4.3.0_webpack@4.43.0/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/url-loader/2.3.0_file-loader@4.3.0+webpack@4.43.0/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/file-loader/4.3.0_webpack@4.43.0/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/url-loader/2.3.0_file-loader@4.3.0+webpack@4.43.0/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/file-loader/4.3.0_webpack@4.43.0/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/sass-loader/8.0.2_sass@1.26.8/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/vue-style-loader/4.1.2/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/css-loader/3.5.3_webpack@4.43.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/postcss-loader/3.0.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/cache-loader/4.1.0_webpack@4.43.0/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/mnt/c/Code/Experiments/cineify/node_modules/.cache/babel-loader',
              cacheIdentifier: 'a0eeaefa'
            }
          },
          {
            loader: '/mnt/c/Code/Experiments/cineify/node_modules/.pnpm/registry.npmjs.org/babel-loader/8.1.0_eaea9c166a05a2ae81982ff769e6ebeb/node_modules/babel-loader/lib/index.js'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'cineify',
        templateParameters: function () { /* omitted long function */ },
        template: '/mnt/c/Code/Experiments/cineify/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/mnt/c/Code/Experiments/cineify/public',
          to: '/mnt/c/Code/Experiments/cineify/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  },
  target: 'web'
}
