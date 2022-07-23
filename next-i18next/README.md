# next-i18next

next-i18next started as a standalone OSS project and now officially be part of [i18next](https://github.com/i18next)

## Installed Packages

- **next-i18next**, i18n (internationalization) library

## Notes

There are two steps that we need to manually take after finish running `curl` command

- update `next.config.js` with the content of `next.config.expansion.js`
- wrap MyApp export in `_app.tsx` file with appWithTranslation HOC, see `next-i18next-_app.tsx` as reference

> (you can safely delete `next.config.expansion.js` and `next-i18next-_app.tsx` after the updates made)

visit `/next-i18next-example` & `/id/next-i18next-example` to check if the translation is working

More on docs [next-i18next](https://github.com/i18next/next-i18next)
