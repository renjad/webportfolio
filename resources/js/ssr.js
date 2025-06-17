import AppLayout from "./Layouts/AppLayout.vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { setupI18n } from "./Lib/i18n";
// import { setupPinia } from "./Lib/pinia";
import { setupPrimeVue } from "./Lib/primevue";
// import { setupResponsiveComponentSize } from "./Utils/responsiveComponentSize";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: async (name) => {
            const page = await resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob("./Pages/**/*.vue")
            );

            page.default.layout = page.default.layout || AppLayout;
            return page;
        },
        setup({ App, props, plugin }) {
            const app = createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .component("Head", Head)
                .component("Link", Link);

            // I18n
            setupI18n(app, props);

            // Pinia
            // setupPinia(app);

            // PrimeVue
            setupPrimeVue(app);

            // Responsive Component Size
            // setupResponsiveComponentSize(app);

            return app;
        },
    })
);
