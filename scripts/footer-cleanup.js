/* eslint-disable */
/**
 * Hide the Icarus theme's hardcoded "© <year> <author>  Powered by Hexo & Icarus"
 * paragraph in the footer.
 *
 * That credit line is baked into the theme component (layout/common/footer.jsx),
 * which lives in node_modules and can't be edited without breaking `npm ci` in CI.
 * Instead we inject a tiny stylesheet that hides only that first footer paragraph.
 *
 * The site's own copyright (footer.copyright in _config.icarus.yml) is rendered as
 * a separate paragraph and stays visible.
 */
hexo.extend.injector.register(
    'head_end',
    '<style>.footer .level-start > p.is-size-7:first-of-type{display:none !important;}</style>'
);
