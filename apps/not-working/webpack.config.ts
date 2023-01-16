// this config has to be referenced inside the project.json for the build target
import { merge } from 'webpack-merge';

module.exports = (config: any) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.pdf$/i,
          use: ['file-loader'],
        },
      ],
    },
  });
};
