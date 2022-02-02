'use strict';

const yellow = '\u001b[33m';
const reset = '\u001b[0m';

switch (process.argv[2]) {
  case 'production':
    console.log(`building for the ${yellow}Production${reset} 👍`);

    break;

  case 'develop':
    console.log(`building to ${yellow}Develop${reset} 🤙`);

    const bs = require('browser-sync').create();

    // bs.watch('src/**/*.pug', (event, file) => {
    //   if (event === 'change') bs.reload('src/**/*.pug');
    // });

    // bs.watch('src/**/*.scss', (event, file) => {
    //   if (event === 'change') bs.reload('src/**/*.scss');
    // });

    // bs.watch('src/**/*.ts', (event, file) => {
    //   if (event === 'change') bs.reload('src/**/*.ts');
    // });

    bs.init({
      server: './dist',
      open: 'external',
      watch: true,
      // startPath: '/index.html',
      reloadDelay: 800,
    });

    break;

  default:
    throw new Error(
      `try the following 👉 ${yellow}yarn start${reset} or${yellow} yarn build${reset}.`,
    );
    break;
}
