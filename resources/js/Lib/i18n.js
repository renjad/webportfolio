import { createI18n } from "vue-i18n";
import En from "../Lang/en.json";
import Ja from "../Lang/ja.json";

export const setupI18n = (app, props) => {
    const localization = props.initialPage.props.localization;
    const i18n = createI18n({
        legacy: false, // Use Composition API mode instead of Legacy API
        locale: localization.locale,
        fallbackLocale: localization.fallback_locale,
        globalInjection: true,
        messages: {
            en: En,
            ja: Ja,
        },
    });
    window.$i18n = i18n;
    window.$t = i18n.global.t;

    app.use(i18n);
};
