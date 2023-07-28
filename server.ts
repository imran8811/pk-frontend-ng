import 'zone.js/dist/zone-node';

import {APP_BASE_HREF} from '@angular/common';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {existsSync} from 'fs';
import {join} from 'path';

import 'localstorage-polyfill'
global['localStorage'] = localStorage;

import {AppServerModule} from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/pk-frontend/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    var host = req.header("host");
    if (!host.match(/^www\..*/i)) {
      res.redirect(301, "https://www." + host + req.url);
    }
    if(req.originalUrl == '/jeans-pants/wholesale-jeans-bulk'){res.redirect(301, '/posts/wholesale-jeans-bulk')}
    if(req.originalUrl == '/jeans-for-men'){res.redirect(301, '/wholesale-shop')}
    if(req.originalUrl == '/jeans-pants/wholesale-jeans-suppliers'){res.redirect(301, '/posts/wholesale-jeans-suppliers')}
    if(req.originalUrl == '/jeans-pants/wholesale-jeans-mens'){res.redirect(301, '/posts/wholesale-jeans-mens')}
    if(req.originalUrl == '/jeans-pants/cheap-mens-jeans-wholesale'){res.redirect(301, '/posts/cheap-mens-jeans-wholesale')}
    if(req.originalUrl == '/jeans-pants/jeans-supplier'){res.redirect(301, '/posts/jeans-supplier')}
    if(req.originalUrl == '/jeans-pants/buy-jeans-in-bulk'){res.redirect(301, '/posts/buy-jeans-in-bulk')}
    if(req.originalUrl == '/men/jeans-pants'){res.redirect(301, '/wholesale-shop')}
    if(req.originalUrl == '/women/jeans-pants'){res.redirect(301, '/wholesale-shop')}
    
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function isRunningOnApachePassenger(): boolean {
  return moduleFilename.includes('lsnode.js');
}

function run(): void {
  // Start up the Node server
  const server = app();

  if (isRunningOnApachePassenger()) {
    server.listen(() => {
      console.log('Node Express listening to Passenger Apache');
    });
    return;
  }

  const port = process.env['PORT'] || 4000;

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}


// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode') || isRunningOnApachePassenger()) {
  run();
}

export * from './src/main.server';
