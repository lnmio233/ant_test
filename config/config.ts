// config/config.ts

import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    layout: {
        "navTheme": "light",
        "primaryColor": "#1890ff",
        "layout": "side",
        "contentWidth": "Fluid",
        "fixedHeader": true,
        "fixSiderbar": true,
        "pwa": false,
        "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        "headerHeight": 48,
        "splitMenus": false,
        "menuHeaderRender": false
    },
    fastRefresh: {},
    mfsu: {},
    routes: routes,
});



