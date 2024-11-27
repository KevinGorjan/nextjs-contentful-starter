import { useEffect } from 'react';

const useTelenetDesignCDN = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v2.2.1/build/wink-core.esm.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);

    const stylesheets = [
      "https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v2.2.1/assets/telenet/icons/icons-font/telenet-icons-font.css",
      "https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v2.2.1/build/wink-core.css",
      "https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v2.2.1/assets/shared/tokens/telenet-light-theme.css",
      "https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v2.2.1/assets/shared/tokens/devices-mobile.css",
      "https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v2.2.1/assets/shared/tokens/devices-desktop.css"
    ];

    stylesheets.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });

    return () => {
      document.body.removeChild(script);
      stylesheets.forEach(href => {
        const linkToRemove = document.querySelector(`link[href="${href}"]`);
        if (linkToRemove) {
          document.head.removeChild(linkToRemove);
        }
      });
    };
  }, []);
};

export default useTelenetDesignCDN;