// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', '@nuxtjs/i18n'],
    css: ['~/assets/scss/style.scss'],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
        // and more...
    },
    i18n: {
        locale: 'en',
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        langDir: './lang',
        locales: [
            {
                code: 'en',
                file: 'en.js',
            },
            {
                code: 'ru',
                file: 'ru.js',
            },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: false
        }
    },
    runtimeConfig: {
        public: {
            TOKEN: process.env.TOKEN || '7488242966:AAHGjmztz2xvri5t0O_TYkiaqZMbmfrpto0',
            CHAT_ID: process.env.CHAT_ID || '-1002167630187',
            CODE: process.env.CODE || '8888'
        }
    },
    devtools: {enabled: true}
})