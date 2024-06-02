/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: true,

    // Using the postcss-loader
    webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      // Modify the PostCSS configuration to include Tailwind CSS and PurgeCSS
      const postcssLoader = config.module.rules.find(
        (rule) => rule.oneOf && rule.oneOf.find((innerRule) => innerRule.sideEffects === false)
      );

      if (postcssLoader) {
        const originalPostcssLoaderUse = postcssLoader.use;
        postcssLoader.use = [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  'tailwindcss',
                  'autoprefixer',
                  ...(process.env.NODE_ENV === 'production'
                    ? [
                        [
                          '@fullhuman/postcss-purgecss',
                          {
                            content: [
                              './src/pages/**/*.{js,jsx,ts,tsx}',
                              './src/components/**/*.{js,jsx,ts,tsx}',
                              // Add more paths as necessary
                            ],
                            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
                          },
                        ],
                      ]
                    : []),
                ],
              },
            },
          },
          ...originalPostcssLoaderUse,
        ];
      }
    }

    return config;
  },
};

module.exports = nextConfig;