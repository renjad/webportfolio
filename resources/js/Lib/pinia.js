import { createPinia } from "pinia";

export const setupPinia = (app) => {
    const pinia = createPinia();
    app.use(pinia);
};
