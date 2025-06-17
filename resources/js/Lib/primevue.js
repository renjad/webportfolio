import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
// import "primeicons/primeicons.css";

const AppPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "{green.50}",
            100: "{green.100}",
            200: "{green.200}",
            300: "{green.300}",
            400: "{green.400}",
            500: "{green.500}",
            600: "{green.600}",
            700: "{green.700}",
            800: "{green.800}",
            900: "{green.900}",
            950: "{green.950}",
        },
        typography: {
            font: {
                body: "Noto Sans JP, sans-serif",
                heading: "Noto Sans JP, sans-serif",
            },
        },
    },
    components: {
        rating: {
            icon: {
                color: "{gray.300}",
                activeColor: "{yellow.400}",
                hoverColor: "{yellow.500}",
            },
        },
        dialog: {
            header: {
                padding: "16px 20px 16px 20px",
            },
            title: {
                fontWeight: "650",
            },
        },
        toast: {
            width: "auto",
        },
    },
});

export const setupPrimeVue = (app) => {
    app.use(PrimeVue, {
        theme: {
            preset: AppPreset,
            options: {
                darkModeSelector: false || "none",
                cssLayer: {
                    name: "primevue",
                    order: "theme, base, primevue",
                },
            },
        },
        zIndex: {
            modal: 1100, //dialog, drawer
            overlay: 1000, //select, popover
            menu: 1000, //overlay menus
            tooltip: 1100, //tooltip
        },
        locale: {
            accept: "はい",
            reject: "いいえ",
            firstDayOfWeek: 0,
            dayNames: [
                "日曜日",
                "月曜日",
                "火曜日",
                "水曜日",
                "木曜日",
                "金曜日",
                "土曜日",
            ],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            monthNames: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ],
            monthNamesShort: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ],
            today: "今日",
            clear: "クリア",
        },
    });
    app.use(DialogService);
    app.use(ConfirmationService);
    app.use(ToastService);
};
