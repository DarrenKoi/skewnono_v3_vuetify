/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

import router from '@/router'
import pinia from './pinia'
// Plugins
import vuetify from './vuetify'

export function registerPlugins (app) {
  app
    .use(pinia)
    .use(vuetify)
    .use(router)
}
