export const Header = () => (
  <wink-global-header className="compact minimal">
    <div slot="language">
      <wink-dropdown-menu
        heading="NL"
        list-position="left"
        item-selected="NL"
        className="dropdown-menu--align-list--top-left"
        exportparts="icon, icon-chevron-down-small"
      >
        <wink-link appearance="dropdown-menu-link" className="active">NL</wink-link>
        <wink-link appearance="dropdown-menu-link">FR</wink-link>
        <wink-link appearance="dropdown-menu-link">EN</wink-link>
      </wink-dropdown-menu>
    </div>
    <div slot="brand">
      <wink-logo
        appearance="telenet-yellow"
        href="/"
        alt="Inspect element to check"
        target="_self"
      ></wink-logo>
    </div>

    <div slot="mobile-language">
      <wink-dropdown-menu
        heading="NL"
        list-position="left"
        item-selected="NL"
        className="dropdown-menu--align-list--top-left"
        exportparts="icon, icon-chevron-down-small"
      >
        <wink-link appearance="dropdown-menu-link" className="active">NL</wink-link>
        <wink-link appearance="dropdown-menu-link">FR</wink-link>
        <wink-link appearance="dropdown-menu-link">EN</wink-link>
      </wink-dropdown-menu>
    </div>
    <div slot="mobile-brand">
      <wink-logo
        appearance="telenet-yellow"
        href="/"
        alt="Inspect element to check"
        target="_self"
      ></wink-logo>
    </div>
  </wink-global-header>
)