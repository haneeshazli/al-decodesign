/* @ds-bundle: {"format":4,"namespace":"ALDECODesignSystem_c1a2dc","components":[{"name":"Button","sourcePath":"components/actions/Button/Button.jsx"},{"name":"Cover","sourcePath":"components/brand/Cover/Cover.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark/Wordmark.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader/SiteHeader.jsx"},{"name":"Hero","sourcePath":"components/sections/Hero/Hero.jsx"},{"name":"KeywordList","sourcePath":"components/sections/KeywordList/KeywordList.jsx"},{"name":"ProjectCard","sourcePath":"components/sections/ProjectCard/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/sections/SectionHeading/SectionHeading.jsx"},{"name":"ServiceCategory","sourcePath":"components/sections/ServiceCategory/ServiceCategory.jsx"}],"sourceHashes":{"components/actions/Button/Button.jsx":"e08a6d12c141","components/brand/Cover/Cover.jsx":"c2961e363776","components/brand/Wordmark/Wordmark.jsx":"f60ece05a30b","components/navigation/SiteFooter/SiteFooter.jsx":"917fa9ae6456","components/navigation/SiteHeader/SiteHeader.jsx":"0a398c4f6d78","components/sections/Hero/Hero.jsx":"2bc8a020d403","components/sections/KeywordList/KeywordList.jsx":"f11676e2f1d5","components/sections/ProjectCard/ProjectCard.jsx":"cbdd52597384","components/sections/SectionHeading/SectionHeading.jsx":"bb09d0182516","components/sections/ServiceCategory/ServiceCategory.jsx":"17bf756561aa","ui_kits/website/App.jsx":"85e9b8ce55cd","ui_kits/website/Bands.jsx":"0fbc081e5193","ui_kits/website/Enquiry.jsx":"a4806b36e34b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ALDECODesignSystem_c1a2dc = window.ALDECODesignSystem_c1a2dc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'solid',
  arrow = false,
  href,
  onClick,
  type = 'button',
  full = false,
  phoneFull = false,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['al-btn', 'al-btn--' + variant, full && 'al-btn--full', phoneFull && 'al-btn--phone-full', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    className: "al-btn__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Cover/Cover.jsx
try { (() => {
const COLS = [624, 656, 688, 720, 752];
const ROWS = [16, 48, 80, 112, 144, 176, 208];
function Cover({
  tagline = 'Better space, better living',
  width = 960
}) {
  const marks = [];
  COLS.forEach(x => ROWS.forEach(y => marks.push(/*#__PURE__*/React.createElement("path", {
    key: x + '-' + y,
    d: 'M' + x + ' ' + y + 'H' + (x + 8) + 'M' + (x + 4) + ' ' + (y - 4) + 'V' + (y + 4),
    stroke: "var(--surface)",
    strokeWidth: "1",
    fill: "none"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      height: 300,
      background: 'var(--surface)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "960",
    height: "300",
    viewBox: "0 0 960 300",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "var(--grey-700)",
    x: "480",
    y: "56",
    width: "116",
    height: "244"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "var(--surface-inverse)",
    x: "612",
    y: "0",
    width: "172",
    height: "232"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "var(--grey-400)",
    x: "800",
    y: "0",
    width: "160",
    height: "140"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "var(--grey-200)",
    x: "800",
    y: "156",
    width: "160",
    height: "144"
  }), marks), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      bottom: 40,
      width: 440
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 80,
      lineHeight: 0.95,
      fontWeight: 300,
      letterSpacing: '0.18em',
      color: 'var(--ink)'
    }
  }, "ALDECO"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: 400,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)'
    }
  }, tagline)));
}
Object.assign(__ds_scope, { Cover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Cover/Cover.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 'm',
  tone = 'ink',
  sub,
  as: Tag = 'span',
  href,
  onClick,
  style
}) {
  const showSub = sub ?? size !== 's';
  const cls = ['al-wordmark', 'al-wordmark--' + size, tone === 'inverse' && 'al-wordmark--inverse'].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "al-wordmark__name"
  }, "ALDECO"), showSub && /*#__PURE__*/React.createElement("span", {
    className: "al-wordmark__sub"
  }, "INTERIOR DESIGN & DECORATION"));
  if (href || onClick) return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href || '#',
    onClick: onClick,
    "aria-label": "ALDECO home",
    style: style
  }, content);
  return /*#__PURE__*/React.createElement(Tag, {
    className: cls,
    style: style
  }, content);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter/SiteFooter.jsx
try { (() => {
const NAV = ['Home', 'About', 'Services', 'Projects', 'Contact'];
const SERVICES = ['Full ID', 'Renovation', 'Built-In Cabinet', 'Custom Furniture', 'Turnkey Solution'];
function SiteFooter({
  address,
  phone,
  email,
  social = [],
  showSignature = true,
  onNavigate
}) {
  const go = it => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(it);
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "al-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-footer__cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "m",
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("p", {
    className: "al-footer__brandline"
  }, "Your space", /*#__PURE__*/React.createElement("i", null, "/"), "Our design", /*#__PURE__*/React.createElement("i", null, "/"), "A better tomorrow")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Navigate"), /*#__PURE__*/React.createElement("ul", null, NAV.map(n => /*#__PURE__*/React.createElement("li", {
    key: n
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + n.toLowerCase(),
    onClick: go(n)
  }, n))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Services"), /*#__PURE__*/React.createElement("ul", null, SERVICES.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    onClick: go(s)
  }, s))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "al-plain"
  }, address || 'Studio address — to be supplied'), /*#__PURE__*/React.createElement("li", {
    className: "al-plain"
  }, phone ? /*#__PURE__*/React.createElement(React.Fragment, null, phone, " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/\s/g, '')
  }, "Call")) : 'Phone — to be supplied'), /*#__PURE__*/React.createElement("li", {
    className: "al-plain"
  }, email ? /*#__PURE__*/React.createElement(React.Fragment, null, email, " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email
  }, "Email")) : 'Email — to be supplied'), social.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.label
  }, /*#__PURE__*/React.createElement("a", {
    href: s.href
  }, s.label)))))), /*#__PURE__*/React.createElement("div", {
    className: "al-footer__legal"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 ALDECO. All rights reserved."), showSignature && /*#__PURE__*/React.createElement("p", {
    className: "al-footer__sig"
  }, "Simple Design . Strong Brand . Greater Impact")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader/SiteHeader.jsx
try { (() => {
const ITEMS = ['Home', 'About', 'Services', 'Projects', 'Contact'];
function SiteHeader({
  mode = 'over',
  active = 'Home',
  items = ITEMS,
  onNavigate,
  compact = false,
  style
}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open]);
  const go = item => e => {
    e.preventDefault();
    setOpen(false);
    onNavigate && onNavigate(item);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: 'al-header al-header--' + mode + (compact ? ' al-header--compact' : ''),
    style: style
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "header",
    tone: mode === 'over' ? 'inverse' : 'ink',
    onClick: go('Home')
  }), /*#__PURE__*/React.createElement("nav", {
    className: "al-header__nav",
    "aria-label": "Main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "al-header__nav al-header__links"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: '#' + it.toLowerCase(),
    onClick: go(it),
    className: 'al-header__link al-link' + (it === active ? ' is-active' : ''),
    "aria-current": it === active ? 'page' : undefined
  }, it))), /*#__PURE__*/React.createElement("button", {
    className: "al-header__burger",
    "aria-label": "Open menu",
    "aria-expanded": open,
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), open && /*#__PURE__*/React.createElement("div", {
    className: "al-sheet",
    role: "dialog",
    "aria-modal": "true",
    onClick: e => {
      if (e.target === e.currentTarget) setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-sheet__top"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "header",
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("button", {
    className: "al-sheet__close",
    onClick: () => setOpen(false)
  }, "Close")), /*#__PURE__*/React.createElement("ul", {
    className: "al-sheet__links"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + it.toLowerCase(),
    onClick: go(it),
    className: it === active ? 'is-active' : ''
  }, it))))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/sections/Hero/Hero.jsx
try { (() => {
const Scope = ({
  items
}) => /*#__PURE__*/React.createElement("p", {
  className: "al-hero__scope"
}, items.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: s
}, i > 0 && /*#__PURE__*/React.createElement("i", {
  className: "al-pipe"
}, "|"), s)));
function Hero({
  eyebrow = 'Explore',
  title = 'Designing Your Dream Space',
  scope = ['Residential', 'Commercial', 'Hospitality'],
  action = 'View our projects',
  actionArrow = true,
  onAction,
  actionHref,
  phoneTitle = 'Full Interior Design & Decoration From A – Z',
  phoneScope = ['Concept', '3D', 'Renovation', 'Installation'],
  phoneAction = 'Get in touch',
  onPhoneAction,
  image,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "al-hero",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-hero__photo",
    style: image ? {
      backgroundImage: 'url(' + image + ')'
    } : undefined
  }, !image && /*#__PURE__*/React.createElement("span", null, "Photography slot \u2014 wide interior")), /*#__PURE__*/React.createElement("div", {
    className: "al-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "al-hero__inner"
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "al-hero__eyebrow al-desk"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "al-hero__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "al-desk"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "al-phone"
  }, phoneTitle)), /*#__PURE__*/React.createElement("div", {
    className: "al-desk"
  }, /*#__PURE__*/React.createElement(Scope, {
    items: scope
  })), /*#__PURE__*/React.createElement("div", {
    className: "al-phone"
  }, /*#__PURE__*/React.createElement(Scope, {
    items: phoneScope
  })), /*#__PURE__*/React.createElement("span", {
    className: "al-desk"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    arrow: actionArrow,
    href: actionHref,
    onClick: onAction
  }, action)), /*#__PURE__*/React.createElement("span", {
    className: "al-phone",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    full: true,
    onClick: onPhoneAction || onAction
  }, phoneAction)), children));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Hero/Hero.jsx", error: String((e && e.message) || e) }); }

// components/sections/KeywordList/KeywordList.jsx
try { (() => {
const SERVICES = ['Full ID', 'Renovation', 'Built-In Cabinet', 'Custom Furniture', 'Turnkey Solution'];
function KeywordList({
  items = SERVICES,
  hrefFor,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "al-kw"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: hrefFor ? hrefFor(it) : '#services',
    onClick: onSelect ? e => {
      e.preventDefault();
      onSelect(it);
    } : undefined
  }, it, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))));
}
Object.assign(__ds_scope, { KeywordList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/KeywordList/KeywordList.jsx", error: String((e && e.message) || e) }); }

// components/sections/ProjectCard/ProjectCard.jsx
try { (() => {
function ProjectCard({
  image,
  alt = '',
  name = 'Project name',
  category,
  tone = 'ink',
  href = '#',
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: 'al-proj' + (tone === 'inverse' ? ' al-proj--inverse' : ''),
    href: href,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-proj__well"
  }, image ? /*#__PURE__*/React.createElement("img", {
    className: "al-proj__img",
    src: image,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", {
    className: "al-proj__slot"
  }, "4:5 photograph")), /*#__PURE__*/React.createElement("p", {
    className: "al-proj__name"
  }, name), category && /*#__PURE__*/React.createElement("p", {
    className: "al-proj__cat"
  }, category));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ProjectCard/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeading/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'ink',
  as: Tag = 'h2',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'al-sh' + (tone === 'inverse' ? ' al-sh--inverse' : '')
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "al-sh__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    className: "al-sh__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "al-sh__rule"
  }), lead && /*#__PURE__*/React.createElement("p", {
    className: "al-sh__lead"
  }, lead), children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeading/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/sections/ServiceCategory/ServiceCategory.jsx
try { (() => {
const DATA = {
  Residential: {
    scope: ['Own Stay', 'Homestay', 'Airbnb', 'Rental'],
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 10.5 12 3l9 7.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.5 9.5V21h13V9.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 21v-6h4v6"
    }))
  },
  Commercial: {
    scope: ['Restaurant', 'Cafe', 'Office', 'Shop'],
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3.5 9h17v12h-17z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.5 9 5 3.5h14L20.5 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 21v-6h5v6"
    }))
  },
  Healthcare: {
    scope: ['Clinic', 'Aesthetic'],
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7.5v9M7.5 12h9"
    }))
  },
  Hospitality: {
    scope: ['Showhouse'],
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4.5 21V4.5h10V21"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.5 9.5h5V21"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.5 8h4M7.5 12h4M7.5 16h4"
    }))
  }
};
function ServiceCategory({
  category = 'Residential',
  scope
}) {
  const d = DATA[category] || {
    scope: [],
    icon: null
  };
  const items = scope || d.scope;
  return /*#__PURE__*/React.createElement("div", {
    className: "al-cat"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.25",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    "aria-hidden": "true"
  }, d.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "al-cat__name"
  }, category), /*#__PURE__*/React.createElement("p", {
    className: "al-cat__scope"
  }, items.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, i > 0 && /*#__PURE__*/React.createElement("i", null, "|"), s)))));
}
Object.assign(__ds_scope, { ServiceCategory });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ServiceCategory/ServiceCategory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  SiteHeader,
  Hero: KitHero,
  SiteFooter
} = window.ALDECODesignSystem_c1a2dc;
function App() {
  const [pinned, setPinned] = React.useState(false);
  const [active, setActive] = React.useState('Home');
  const [filter, setFilter] = React.useState(null);
  const [service, setService] = React.useState(null);
  const heroEnd = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const end = heroEnd.current ? heroEnd.current.offsetTop - 72 : 600;
      setPinned(window.scrollY > end);
      const ids = ['contact', 'projects', 'services', 'about'];
      const hit = ids.find(id => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top < 200;
      });
      setActive(hit ? hit[0].toUpperCase() + hit.slice(1) : 'Home');
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = item => {
    const id = item.toLowerCase();
    const el = document.getElementById(id === 'home' ? 'home' : id);
    if (el) window.scrollTo({
      top: id === 'home' ? 0 : el.offsetTop - 72,
      behavior: 'smooth'
    });
  };
  const pickService = s => {
    setService(s);
    go('Contact');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "kit-fixed"
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    mode: pinned ? 'pinned' : 'over',
    active: active,
    onNavigate: go
  })), /*#__PURE__*/React.createElement(LogoOpening, {
    onCue: () => {
      const h = document.querySelector('.al-hero');
      if (h) window.scrollTo({
        top: h.offsetTop - 72,
        behavior: 'smooth'
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "02 Hero",
    style: {
      borderTop: '1px solid var(--line-inverse)'
    }
  }, /*#__PURE__*/React.createElement(KitHero, {
    onAction: e => {
      e.preventDefault();
      go('Projects');
    },
    onPhoneAction: e => {
      e.preventDefault();
      go('Contact');
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: heroEnd
  }), /*#__PURE__*/React.createElement(ServicesStatement, {
    go: go
  }), /*#__PURE__*/React.createElement(ServiceKeywords, {
    onPick: pickService
  }), /*#__PURE__*/React.createElement(WhoWeWorkWith, null), /*#__PURE__*/React.createElement(SelectedProjects, {
    filter: filter,
    setFilter: setFilter
  }), /*#__PURE__*/React.createElement(SignatureBand, null), /*#__PURE__*/React.createElement(Enquiry, {
    service: service
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    showSignature: false,
    onNavigate: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Bands.jsx
try { (() => {
const {
  Wordmark,
  Hero,
  SectionHeading,
  Button,
  KeywordList,
  ServiceCategory,
  ProjectCard
} = window.ALDECODesignSystem_c1a2dc;
function LogoOpening({
  onCue
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-opening",
    id: "home",
    "data-screen-label": "01 Logo opening"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "l",
    tone: "inverse",
    as: "h1"
  }), /*#__PURE__*/React.createElement("button", {
    className: "kit-cue",
    onClick: onCue,
    "aria-label": "Scroll to content"
  }, "Scroll", /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "kit-triline"
  }, /*#__PURE__*/React.createElement("span", null, "Your space"), /*#__PURE__*/React.createElement("i", null, "/"), /*#__PURE__*/React.createElement("span", null, "Our design"), /*#__PURE__*/React.createElement("i", null, "/"), /*#__PURE__*/React.createElement("span", null, "A better tomorrow"))));
}
function ServicesStatement({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-band",
    id: "about",
    "data-screen-label": "03 Services statement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Premium interior design",
    title: "Quality Design Lasts",
    lead: "We design, build and install the whole space. One studio, one contract, from the first sketch to the day you walk in."
  }), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    phoneFull: true,
    onClick: () => go('Services')
  }, "Our services")), /*#__PURE__*/React.createElement("div", {
    className: "kit-slot"
  }, "Photography slot \u2014 portrait interior")));
}
function ServiceKeywords({
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-band",
    id: "services",
    style: {
      paddingTop: 0
    },
    "data-screen-label": "04 Service keywords"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-kw"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kit-eyebrow"
  }, "Services"), /*#__PURE__*/React.createElement(KeywordList, {
    onSelect: onPick
  })));
}
function WhoWeWorkWith() {
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-band",
    style: {
      paddingTop: 0
    },
    "data-screen-label": "05 Who we work with"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-cats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-cat-grid"
  }, ['Residential', 'Commercial', 'Healthcare', 'Hospitality'].map(c => /*#__PURE__*/React.createElement(ServiceCategory, {
    key: c,
    category: c
  })))));
}
function SelectedProjects({
  filter,
  setFilter
}) {
  const all = [['Residential'], ['Commercial'], ['Healthcare'], ['Hospitality'], ['Residential'], ['Commercial']];
  const shown = all.filter(([c]) => !filter || c === filter).slice(0, 6);
  return /*#__PURE__*/React.createElement("section", {
    className: "al-inverse kit-band",
    id: "projects",
    "data-screen-label": "06 Selected projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    eyebrow: "Projects",
    title: "Selected projects"
  }), filter && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 32px',
      font: '400 12px/18px var(--font-sans)',
      letterSpacing: '.12em',
      color: 'var(--on-inverse-muted)',
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, "SHOWING ", filter.toUpperCase(), " ", /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => setFilter(null)
  }, "Show all")), /*#__PURE__*/React.createElement("div", {
    className: "al-proj-grid"
  }, shown.map(([c], i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: i,
    tone: "inverse",
    name: "Project name \u2014 to be supplied",
    category: c,
    onClick: e => e.preventDefault()
  })))));
}
function SignatureBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-sig",
    "data-screen-label": "07 Signature"
  }, /*#__PURE__*/React.createElement("p", null, "Better Space, Better Living."));
}
Object.assign(window, {
  LogoOpening,
  ServicesStatement,
  ServiceKeywords,
  WhoWeWorkWith,
  SelectedProjects,
  SignatureBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Bands.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Enquiry.jsx
try { (() => {
const {
  SectionHeading: EqHeading,
  Button: EqButton
} = window.ALDECODesignSystem_c1a2dc;
function Enquiry({
  service
}) {
  const [sent, setSent] = React.useState(null);
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    type: 'Residential',
    message: ''
  });
  React.useEffect(() => {
    if (service) setForm(f => ({
      ...f,
      message: f.message || 'I am interested in ' + service + '.'
    }));
  }, [service]);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const ok = form.name.trim() && form.phone.trim();
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-band",
    id: "contact",
    style: {
      borderTop: '1px solid var(--line)'
    },
    "data-screen-label": "08 Enquiry"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-enq"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EqHeading, {
    eyebrow: "Enquiry",
    title: "Get in touch"
  }), sent ? /*#__PURE__*/React.createElement("div", {
    className: "kit-done"
  }, /*#__PURE__*/React.createElement("h3", null, "Thank you, ", sent, "."), /*#__PURE__*/React.createElement("p", null, "We have your details. We will call you to arrange a site visit."), /*#__PURE__*/React.createElement(EqButton, {
    variant: "outline",
    onClick: () => {
      setSent(null);
      setForm({
        name: '',
        phone: '',
        type: 'Residential',
        message: ''
      });
    }
  }, "New enquiry")) : /*#__PURE__*/React.createElement("form", {
    className: "kit-form",
    onSubmit: e => {
      e.preventDefault();
      if (ok) setSent(form.name.trim().split(' ')[0]);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-name"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    id: "f-name",
    value: form.name,
    onChange: set('name'),
    autoComplete: "name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "al-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-phone"
  }, "Phone"), /*#__PURE__*/React.createElement("input", {
    id: "f-phone",
    value: form.phone,
    onChange: set('phone'),
    inputMode: "tel",
    autoComplete: "tel"
  })), /*#__PURE__*/React.createElement("div", {
    className: "al-field full"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-type"
  }, "Property type"), /*#__PURE__*/React.createElement("select", {
    id: "f-type",
    value: form.type,
    onChange: set('type')
  }, ['Residential', 'Commercial', 'Healthcare', 'Hospitality'].map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "al-field full"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "f-msg"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "f-msg",
    rows: "4",
    value: form.message,
    onChange: set('message')
  })), /*#__PURE__*/React.createElement("div", {
    className: "full"
  }, /*#__PURE__*/React.createElement(EqButton, {
    type: "submit",
    arrow: true,
    phoneFull: true,
    disabled: !ok
  }, "Send enquiry")))), /*#__PURE__*/React.createElement("aside", {
    className: "kit-contact"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "kit-eyebrow"
  }, "Phone"), /*#__PURE__*/React.createElement("p", {
    className: "v"
  }, "To be supplied by the studio")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "kit-eyebrow"
  }, "Email"), /*#__PURE__*/React.createElement("p", {
    className: "v"
  }, "To be supplied by the studio")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "kit-eyebrow"
  }, "Studio"), /*#__PURE__*/React.createElement("p", {
    className: "v"
  }, "Address to be supplied")))));
}
window.Enquiry = Enquiry;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Enquiry.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Cover = __ds_scope.Cover;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.KeywordList = __ds_scope.KeywordList;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCategory = __ds_scope.ServiceCategory;

})();
