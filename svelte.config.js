import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({ postcss: true }),

  kit: {
    typescript: {
      config: (tsconfig) => {
        const {
           //destructure properties we don't want
          importsNotUsedAsValues: _,
          preserveValueImports: __,
           //keep the rest in a single object
          ...compilerOptions
        } = tsconfig.compilerOptions

        return {
          ...tsconfig,
          compilerOptions: {
            ...compilerOptions,
          },
        }
      },
    },
    //trailingSlash: 'always',
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    }),
    
  }
};

export default config;
