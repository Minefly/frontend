const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

const withMDX = require("@next/mdx")({
    extension: /\.mdx$/,
});

module.exports = withMDX({
    future: {
        webpack5: true,
    },
    pageExtensions: ["tsx", "mdx"],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    poweredByHeader: false,
    env: {
        "HCAPTCHA.SITEKEY": "e50876fc-880d-4446-ad56-c6cbf293a84e",
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    /*
		  {
			key: "Content-Security-Policy",
			value:
			  "default-src 'self'; script-src https://hcaptcha.com, https://*.hcaptcha.com, 'self'; frame-src https://hcaptcha.com, https://*.hcaptcha.com, 'self'; style-src https://hcaptcha.com, https://*.hcaptcha.com, 'self'; connect-src https://hcaptcha.com, https://*.hcaptcha.com, 'self'",
		  },*/
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: "/home",
                destination: "/",
                permanent: true,
            },
            {
                source: "/dashboard/home",
                destination: "/dashboard",
                permanent: true,
            },
        ];
    },
});
