import { e as createComponent, f as createAstro, h as addAttribute, l as renderScript, r as renderTemplate, k as renderComponent, n as renderSlot, o as renderHead } from './astro/server_Cnzn1h4g.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { n as noop, f as subscribe_to_store, g as run_all, e as escape_html, s as store_get, a as ensure_array_like, d as attr, u as unsubscribe_stores, b as attr_class } from './_@astro-renderers_DhOb6nU_.mjs';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl, a as getPathByLocale$1 } from './utils_C67RWlTZ.mjs';
import deepmerge from 'deepmerge';
import { IntlMessageFormat } from 'intl-messageformat';

/** @import { Equals } from '#client' */


/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function safe_not_equal(a, b) {
	return a != a
		? b == b
		: a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
}

/** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
/** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

/**
 * @type {Array<SubscribeInvalidateTuple<any> | any>}
 */
const subscriber_queue = [];

/**
 * Creates a `Readable` store that allows reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Readable<T>}
 */
function readable(value, start) {
	return {
		subscribe: writable(value, start).subscribe
	};
}

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {Unsubscriber | null} */
	let stop = null;

	/** @type {Set<SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();

	/**
	 * @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(/** @type {T} */ (value)));
	}

	/**
	 * @param {Subscriber<T>} run
	 * @param {() => void} [invalidate]
	 * @returns {Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(/** @type {T} */ (value));
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * @template {Stores} S
 * @template T
 * @overload
 * @param {S} stores
 * @param {(values: StoresValues<S>, set: (value: T) => void, update: (fn: Updater<T>) => void) => Unsubscriber | void} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * @template {Stores} S
 * @template T
 * @overload
 * @param {S} stores
 * @param {(values: StoresValues<S>) => T} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
/**
 * @template {Stores} S
 * @template T
 * @param {S} stores
 * @param {Function} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
function derived(stores, fn, initial_value) {
	const single = !Array.isArray(stores);
	/** @type {Array<Readable<any>>} */
	const stores_array = single ? [stores] : stores;
	if (!stores_array.every(Boolean)) {
		throw new Error('derived() expects stores as input, got a falsy value');
	}
	const auto = fn.length < 2;
	return readable(initial_value, (set, update) => {
		let started = false;
		/** @type {T[]} */
		const values = [];
		let pending = 0;
		let cleanup = noop;
		const sync = () => {
			if (pending) {
				return;
			}
			cleanup();
			const result = fn(single ? values[0] : values, set, update);
			if (auto) {
				set(result);
			} else {
				cleanup = typeof result === 'function' ? result : noop;
			}
		};
		const unsubscribers = stores_array.map((store, i) =>
			subscribe_to_store(
				store,
				(value) => {
					values[i] = value;
					pending &= ~(1 << i);
					if (started) {
						sync();
					}
				},
				() => {
					pending |= 1 << i;
				}
			)
		);
		started = true;
		sync();
		return function stop() {
			run_all(unsubscribers);
			cleanup();
			// We need to set this to false because callbacks can still happen despite having unsubscribed:
			// Callbacks might already be placed in the queue which doesn't know it should no longer
			// invoke this derived store.
			started = false;
		};
	});
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "gr"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});
const getPathByLocale = (locale) => getPathByLocale$1(locale, locales);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/node_modules/astro/components/ClientRouter.astro", void 0);

function delve(obj, fullKey) {
  if (fullKey == null)
    return void 0;
  if (fullKey in obj) {
    return obj[fullKey];
  }
  const keys = fullKey.split(".");
  let result = obj;
  for (let p = 0; p < keys.length; p++) {
    if (typeof result === "object") {
      if (p > 0) {
        const partialKey = keys.slice(p, keys.length).join(".");
        if (partialKey in result) {
          result = result[partialKey];
          break;
        }
      }
      result = result[keys[p]];
    } else {
      result = void 0;
    }
  }
  return result;
}

const lookupCache = {};
const addToCache = (path, locale, message) => {
  if (!message)
    return message;
  if (!(locale in lookupCache))
    lookupCache[locale] = {};
  if (!(path in lookupCache[locale]))
    lookupCache[locale][path] = message;
  return message;
};
const lookup = (path, refLocale) => {
  if (refLocale == null)
    return void 0;
  if (refLocale in lookupCache && path in lookupCache[refLocale]) {
    return lookupCache[refLocale][path];
  }
  const locales = getPossibleLocales(refLocale);
  for (let i = 0; i < locales.length; i++) {
    const locale = locales[i];
    const message = getMessageFromDictionary(locale, path);
    if (message) {
      return addToCache(path, refLocale, message);
    }
  }
  return void 0;
};

let dictionary;
const $dictionary = writable({});
function getLocaleDictionary(locale) {
  return dictionary[locale] || null;
}
function hasLocaleDictionary(locale) {
  return locale in dictionary;
}
function getMessageFromDictionary(locale, id) {
  if (!hasLocaleDictionary(locale)) {
    return null;
  }
  const localeDictionary = getLocaleDictionary(locale);
  const match = delve(localeDictionary, id);
  return match;
}
function getClosestAvailableLocale(refLocale) {
  if (refLocale == null)
    return void 0;
  const relatedLocales = getPossibleLocales(refLocale);
  for (let i = 0; i < relatedLocales.length; i++) {
    const locale = relatedLocales[i];
    if (hasLocaleDictionary(locale)) {
      return locale;
    }
  }
  return void 0;
}
function addMessages(locale, ...partials) {
  delete lookupCache[locale];
  $dictionary.update((d) => {
    d[locale] = deepmerge.all([d[locale] || {}, ...partials]);
    return d;
  });
}
derived(
  [$dictionary],
  ([dictionary2]) => Object.keys(dictionary2)
);
$dictionary.subscribe((newDictionary) => dictionary = newDictionary);

const queue = {};
function removeLoaderFromQueue(locale, loader) {
  queue[locale].delete(loader);
  if (queue[locale].size === 0) {
    delete queue[locale];
  }
}
function getLocaleQueue(locale) {
  return queue[locale];
}
function getLocalesQueues(locale) {
  return getPossibleLocales(locale).map((localeItem) => {
    const localeQueue = getLocaleQueue(localeItem);
    return [localeItem, localeQueue ? [...localeQueue] : []];
  }).filter(([, localeQueue]) => localeQueue.length > 0);
}
function hasLocaleQueue(locale) {
  if (locale == null)
    return false;
  return getPossibleLocales(locale).some(
    (localeQueue) => {
      var _a;
      return (_a = getLocaleQueue(localeQueue)) == null ? void 0 : _a.size;
    }
  );
}
function loadLocaleQueue(locale, localeQueue) {
  const allLoadersPromise = Promise.all(
    localeQueue.map((loader) => {
      removeLoaderFromQueue(locale, loader);
      return loader().then((partial) => partial.default || partial);
    })
  );
  return allLoadersPromise.then((partials) => addMessages(locale, ...partials));
}
const activeFlushes = {};
function flush(locale) {
  if (!hasLocaleQueue(locale)) {
    if (locale in activeFlushes) {
      return activeFlushes[locale];
    }
    return Promise.resolve();
  }
  const queues = getLocalesQueues(locale);
  activeFlushes[locale] = Promise.all(
    queues.map(
      ([localeName, localeQueue]) => loadLocaleQueue(localeName, localeQueue)
    )
  ).then(() => {
    if (hasLocaleQueue(locale)) {
      return flush(locale);
    }
    delete activeFlushes[locale];
  });
  return activeFlushes[locale];
}

var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultFormats = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function defaultMissingKeyHandler({ locale, id }) {
  console.warn(
    `[svelte-i18n] The message "${id}" was not found in "${getPossibleLocales(
      locale
    ).join('", "')}".${hasLocaleQueue(getCurrentLocale()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const defaultOptions = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: defaultFormats,
  warnOnMissingMessages: true,
  handleMissingMessage: void 0,
  ignoreTag: true
};
const options = defaultOptions;
function getOptions() {
  return options;
}
function init(opts) {
  const _a = opts, { formats } = _a, rest = __objRest$1(_a, ["formats"]);
  let initialLocale = opts.fallbackLocale;
  if (opts.initialLocale) {
    try {
      if (IntlMessageFormat.resolveLocale(opts.initialLocale)) {
        initialLocale = opts.initialLocale;
      }
    } catch (e) {
      console.warn(
        `[svelte-i18n] The initial locale "${opts.initialLocale}" is not a valid locale.`
      );
    }
  }
  if (rest.warnOnMissingMessages) {
    delete rest.warnOnMissingMessages;
    if (rest.handleMissingMessage == null) {
      rest.handleMissingMessage = defaultMissingKeyHandler;
    } else {
      console.warn(
        '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
      );
    }
  }
  Object.assign(options, rest, { initialLocale });
  if (formats) {
    if ("number" in formats) {
      Object.assign(options.formats.number, formats.number);
    }
    if ("date" in formats) {
      Object.assign(options.formats.date, formats.date);
    }
    if ("time" in formats) {
      Object.assign(options.formats.time, formats.time);
    }
  }
  return $locale.set(initialLocale);
}

const $isLoading = writable(false);

var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
let current;
const internalLocale = writable(null);
function getSubLocales(refLocale) {
  return refLocale.split("-").map((_, i, arr) => arr.slice(0, i + 1).join("-")).reverse();
}
function getPossibleLocales(refLocale, fallbackLocale = getOptions().fallbackLocale) {
  const locales = getSubLocales(refLocale);
  if (fallbackLocale) {
    return [.../* @__PURE__ */ new Set([...locales, ...getSubLocales(fallbackLocale)])];
  }
  return locales;
}
function getCurrentLocale() {
  return current != null ? current : void 0;
}
internalLocale.subscribe((newLocale) => {
  current = newLocale != null ? newLocale : void 0;
  if (typeof window !== "undefined" && newLocale != null) {
    document.documentElement.setAttribute("lang", newLocale);
  }
});
const set = (newLocale) => {
  if (newLocale && getClosestAvailableLocale(newLocale) && hasLocaleQueue(newLocale)) {
    const { loadingDelay } = getOptions();
    let loadingTimer;
    if (typeof window !== "undefined" && getCurrentLocale() != null && loadingDelay) {
      loadingTimer = window.setTimeout(
        () => $isLoading.set(true),
        loadingDelay
      );
    } else {
      $isLoading.set(true);
    }
    return flush(newLocale).then(() => {
      internalLocale.set(newLocale);
    }).finally(() => {
      clearTimeout(loadingTimer);
      $isLoading.set(false);
    });
  }
  return internalLocale.set(newLocale);
};
const $locale = __spreadProps(__spreadValues$1({}, internalLocale), {
  set
});

const monadicMemoize = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  const memoizedFn = (arg) => {
    const cacheKey = JSON.stringify(arg);
    if (cacheKey in cache) {
      return cache[cacheKey];
    }
    return cache[cacheKey] = fn(arg);
  };
  return memoizedFn;
};

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const getIntlFormatterOptions = (type, name) => {
  const { formats } = getOptions();
  if (type in formats && name in formats[type]) {
    return formats[type][name];
  }
  throw new Error(`[svelte-i18n] Unknown "${name}" ${type} format.`);
};
const createNumberFormatter = monadicMemoize(
  (_a) => {
    var _b = _a, { locale, format } = _b, options = __objRest(_b, ["locale", "format"]);
    if (locale == null) {
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    }
    if (format) {
      options = getIntlFormatterOptions("number", format);
    }
    return new Intl.NumberFormat(locale, options);
  }
);
const createDateFormatter = monadicMemoize(
  (_c) => {
    var _d = _c, { locale, format } = _d, options = __objRest(_d, ["locale", "format"]);
    if (locale == null) {
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    }
    if (format) {
      options = getIntlFormatterOptions("date", format);
    } else if (Object.keys(options).length === 0) {
      options = getIntlFormatterOptions("date", "short");
    }
    return new Intl.DateTimeFormat(locale, options);
  }
);
const createTimeFormatter = monadicMemoize(
  (_e) => {
    var _f = _e, { locale, format } = _f, options = __objRest(_f, ["locale", "format"]);
    if (locale == null) {
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    }
    if (format) {
      options = getIntlFormatterOptions("time", format);
    } else if (Object.keys(options).length === 0) {
      options = getIntlFormatterOptions("time", "short");
    }
    return new Intl.DateTimeFormat(locale, options);
  }
);
const getNumberFormatter = (_g = {}) => {
  var _h = _g, {
    locale = getCurrentLocale()
  } = _h, args = __objRest(_h, [
    "locale"
  ]);
  return createNumberFormatter(__spreadValues({ locale }, args));
};
const getDateFormatter = (_i = {}) => {
  var _j = _i, {
    locale = getCurrentLocale()
  } = _j, args = __objRest(_j, [
    "locale"
  ]);
  return createDateFormatter(__spreadValues({ locale }, args));
};
const getTimeFormatter = (_k = {}) => {
  var _l = _k, {
    locale = getCurrentLocale()
  } = _l, args = __objRest(_l, [
    "locale"
  ]);
  return createTimeFormatter(__spreadValues({ locale }, args));
};
const getMessageFormatter = monadicMemoize(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (message, locale = getCurrentLocale()) => new IntlMessageFormat(message, locale, getOptions().formats, {
    ignoreTag: getOptions().ignoreTag
  })
);

const formatMessage = (id, options = {}) => {
  var _a, _b, _c, _d;
  let messageObj = options;
  if (typeof id === "object") {
    messageObj = id;
    id = messageObj.id;
  }
  const {
    values,
    locale = getCurrentLocale(),
    default: defaultValue
  } = messageObj;
  if (locale == null) {
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  }
  let message = lookup(id, locale);
  if (!message) {
    message = (_d = (_c = (_b = (_a = getOptions()).handleMissingMessage) == null ? void 0 : _b.call(_a, { locale, id, defaultValue })) != null ? _c : defaultValue) != null ? _d : id;
  } else if (typeof message !== "string") {
    console.warn(
      `[svelte-i18n] Message with id "${id}" must be of type "string", found: "${typeof message}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    );
    return message;
  }
  if (!values) {
    return message;
  }
  let result = message;
  try {
    result = getMessageFormatter(message, locale).format(values);
  } catch (e) {
    if (e instanceof Error) {
      console.warn(
        `[svelte-i18n] Message "${id}" has syntax error:`,
        e.message
      );
    }
  }
  return result;
};
const formatTime = (t, options) => {
  return getTimeFormatter(options).format(t);
};
const formatDate = (d, options) => {
  return getDateFormatter(options).format(d);
};
const formatNumber = (n, options) => {
  return getNumberFormatter(options).format(n);
};
const getJSON = (id, locale = getCurrentLocale()) => {
  return lookup(id, locale);
};
const $format = derived([$locale, $dictionary], () => formatMessage);
derived([$locale], () => formatTime);
derived([$locale], () => formatDate);
derived([$locale], () => formatNumber);
derived([$locale, $dictionary], () => getJSON);

const messages = {
  en: {
    seo: {
      homeTitle: "VM | My Portfolio",
      homeDescription: "Welcome to my portfolio built with Astro, Svelte, and Tailwind. Fast, responsive, and SEO-friendly.",
      aboutTitle: "VM | About me",
      aboutDescription: "About Vangelis, a frontend engineer building clear, modern, and useful interfaces with an engineering mindset.",
      projectsTitle: "VM | My Projects",
      projectsDescription: "Projects page (coming soon).",
      contactTitle: "VM | Contact",
      contactDescription: "Contact page (coming soon)."
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    pages: {
      notReady: "Sorry, this page is not ready yet.",
      backHome: "Back to Home",
      about: { title: "About" },
      projects: { title: "Projects" },
      contact: { title: "Contact" }
    },
    footer: {
      name: "VM Portfolio",
      rights: "All rights reserved.",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      badge: "Portfolio",
      titleHi: "Hi, I'm",
      name: "Vangelis",
      role: "Frontend Engineer",
      tagline: "“Good front-end is where engineering discipline meets human experience.”",
      ctaProjects: "See my work",
      ctaContact: "Let’s build something"
    },
    projectsSection: {
      title: "Projects",
      subtitle: "A selection of work. Click a card to see details.",
      homeSubtitle: "A quick preview of selected work. Open the projects page for the full carousel and details.",
      loading: "Loading projects…",
      loaded: "All projects are visible.",
      ctaView: "View details",
      viewAll: "View all projects",
      viewProjectPage: "Open projects page",
      previousProject: "Previous project",
      nextProject: "Next project",
      modalTitle: "Project details",
      close: "Close",
      tags: "Tech",
      links: "Links",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      empty: "No projects to show yet."
    },
    contactSection: {
      title: "Contact",
      subtitle: "Send me a message.",
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      subjectPlaceholder: "What is this about?",
      messagePlaceholder: "Write your message…",
      submit: "Send message"
    }
  },
  gr: {
    seo: {
      homeTitle: "ΒΜ | Το Portfolio μου",
      homeDescription: "Καλώς ήλθατε στο Portfolio μου. Σχεδιάστηκε με Astro + Svelte + Tailwind. Γρήγορο, responsive και φιλικό στο SEO.",
      aboutTitle: "ΒΜ | Σχετικά με εμένα",
      aboutDescription: "Σχετικά με τον Βαγγέλη, frontend engineer που χτίζει καθαρά, μοντέρνα και χρήσιμα interfaces με engineering mindset.",
      projectsTitle: "ΒΜ | Τα Projects μου",
      projectsDescription: "Σελίδα Projects (σύντομα κοντά σας).",
      contactTitle: "ΒΜ | Επικοινωνία",
      contactDescription: "Σελίδα Επικοινωνία (σύντομα κοντά σας)."
    },
    nav: {
      home: "Αρχική",
      about: "Σχετικά",
      projects: "Projects",
      contact: "Επικοινωνία",
      language: "Γλώσσα",
      openMenu: "Άνοιγμα μενού",
      closeMenu: "Κλείσιμο μενού"
    },
    pages: {
      notReady: "Λυπούμαστε, η σελίδα δεν είναι διαθέσιμη ακόμα.",
      backHome: "Πίσω στην Αρχική",
      about: { title: "Σχετικά" },
      projects: { title: "Projects" },
      contact: { title: "Επικοινωνία" }
    },
    footer: {
      name: "ΒΜ Portfolio",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      home: "Αρχική",
      about: "Σχετικά",
      projects: "Projects",
      contact: "Επικοινωνία"
    },
    hero: {
      badge: "Portfolio",
      titleHi: "Γειά σας, με λένε",
      name: "Βαγγέλη",
      role: "Frontend Engineer",
      tagline: "«Το front-end είναι το σημείο όπου η τεχνολογία γίνεται εμπειρία.»",
      ctaProjects: "Η δουλειά μου",
      ctaContact: "Επικοινωνήστε μαζί μου"
    },
    projectsSection: {
      title: "Projects",
      subtitle: "Μερικά δείγματα δουλειάς. Πατήστε στην κάρτα για λεπτομέρειες.",
      homeSubtitle: "Γρήγορη προεπισκόπηση επιλεγμένων Projects. Ανοίξτε τη σελίδα Projects για το πλήρες carousel και τις λεπτομέρειες.",
      loading: "Φόρτωση Projects…",
      loaded: "Όλα τα Projects εμφανίστηκαν.",
      ctaView: "Λεπτομέρειες",
      viewAll: "Δείτε όλα τα Projects",
      viewProjectPage: "Άνοιγμα σελίδας Projects",
      previousProject: "Προηγούμενο Project",
      nextProject: "Επόμενο Project",
      modalTitle: "Περισσότερα για το Project",
      close: "Κλείσιμο",
      tags: "Τεχνολογίες",
      links: "Σύνδεσμοι",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      empty: "Δεν υπάρχουν Projects ακόμη."
    },
    contactSection: {
      title: "Επικοινωνία",
      subtitle: "Στείλτε μου μήνυμα.",
      nameLabel: "Όνομα",
      emailLabel: "Email",
      subjectLabel: "Θέμα",
      messageLabel: "Μήνυμα",
      namePlaceholder: "Το όνομά σας",
      emailPlaceholder: "you@example.com",
      subjectPlaceholder: "Με τι σχετίζεται;",
      messagePlaceholder: "Γράψτε το μήνυμά σας…",
      submit: "Αποστολή"
    }
  }
};

let initialized = false;
function bootstrapI18n(initialLocale) {
  if (initialized) return;
  addMessages("en", messages.en);
  addMessages("gr", messages.gr);
  init({
    fallbackLocale: "en",
    initialLocale
  });
  initialized = true;
}
bootstrapI18n("en");

function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { locale = "en", links = [] } = $$props;
		const t = $format;
		const year = new Date().getFullYear();

		$$renderer.push(`<footer class="border-t border-white/10 bg-[color:var(--surface)] text-white"><div class="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-teal-100"><p>© ${escape_html(year)}
      ${escape_html(store_get($$store_subs ??= {}, '$t', t)("footer.name"))}. ${escape_html(store_get($$store_subs ??= {}, '$t', t)("footer.rights"))}</p> <div class="flex gap-4"><!--[-->`);

		const each_array = ensure_array_like(links);

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];

			$$renderer.push(`<a${attr('href', link.href)} class="hover:text-[color:var(--accent)] transition-colors">${escape_html(store_get($$store_subs ??= {}, '$t', t)(link.labelKey))}</a>`);
		}

		$$renderer.push(`<!--]--></div></div></footer>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const lang = Astro2.currentLocale || "en";
  const origin = Astro2.url.origin;
  const pathname = Astro2.url.pathname;
  const normalizedPath = pathname.startsWith("/gr") ? pathname.slice(3) || "/" : pathname || "/";
  const hreflangLinks = [
    {
      hreflang: "en",
      href: new URL(normalizedPath, origin).toString()
    },
    {
      hreflang: "el",
      href: new URL(
        `/gr${normalizedPath === "/" ? "" : normalizedPath}`,
        origin
      ).toString()
    },
    {
      hreflang: "x-default",
      href: new URL(normalizedPath, origin).toString()
    }
  ];
  const footerLinks = [
    { href: getRelativeLocaleUrl(lang), labelKey: "footer.home" },
    { href: getRelativeLocaleUrl(lang, "about"), labelKey: "footer.about" },
    { href: getRelativeLocaleUrl(lang, "projects"), labelKey: "footer.projects" },
    { href: getRelativeLocaleUrl(lang, "contact"), labelKey: "footer.contact" }
  ];
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="manifest" href="/site.webmanifest"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">', "", "", "", "", '<meta property="og:type" content="website">', "", "", '</head> <body class="app-background bg-[color:var(--background)] text-white antialiased min-h-screen flex flex-col font-sans"> <main class="flex-1 animate-fadeIn"> ', " </main> ", ' <script>\n            const updateSpotlight = (event) => {\n                if (event.pointerType !== "mouse") return;\n\n                document.documentElement.style.setProperty(\n                    "--spotlight-x",\n                    `${(event.clientX / window.innerWidth) * 100}%`\n                );\n                document.documentElement.style.setProperty(\n                    "--spotlight-y",\n                    `${(event.clientY / window.innerHeight) * 100}%`\n                );\n            };\n\n            window.addEventListener("pointermove", updateSpotlight, {\n                passive: true,\n            });\n        <\/script> </body> </html>'], ["<html", '> <head><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="manifest" href="/site.webmanifest"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">', "", "", "", "", '<meta property="og:type" content="website">', "", "", '</head> <body class="app-background bg-[color:var(--background)] text-white antialiased min-h-screen flex flex-col font-sans"> <main class="flex-1 animate-fadeIn"> ', " </main> ", ' <script>\n            const updateSpotlight = (event) => {\n                if (event.pointerType !== "mouse") return;\n\n                document.documentElement.style.setProperty(\n                    "--spotlight-x",\n                    \\`\\${(event.clientX / window.innerWidth) * 100}%\\`\n                );\n                document.documentElement.style.setProperty(\n                    "--spotlight-y",\n                    \\`\\${(event.clientY / window.innerHeight) * 100}%\\`\n                );\n            };\n\n            window.addEventListener("pointermove", updateSpotlight, {\n                passive: true,\n            });\n        <\/script> </body> </html>'])), addAttribute(lang === "gr" ? "el" : "en", "lang"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), title && renderTemplate`<title>${title}</title>`, description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, title && renderTemplate`<meta property="og:title"${addAttribute(title, "content")}>`, description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`, hreflangLinks.map(({ hreflang, href }) => renderTemplate`<link rel="alternate"${addAttribute(hreflang, "hreflang")}${addAttribute(href, "href")}>`), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "locale": lang, "links": footerLinks }));
}, "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/layouts/BaseLayout.astro", void 0);

const navLinks = [
  { path: "/", labelKey: "nav.home" },
  { path: "/about", labelKey: "nav.about" },
  { path: "/projects", labelKey: "nav.projects" },
  { path: "/contact", labelKey: "nav.contact" }
];
function normalizePath(pathname) {
  if (!pathname) return "/";
  const withLeading = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (withLeading === "/") return "/";
  return withLeading.replace(/\/+$/, "");
}

function NavBar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;

		let {
			locale = "en",
			navItems = [],
			languageSwitch = { en: "/", gr: "/gr" },
			homeHref = "/"
		} = $$props;

		const t = $format;
		let open = false;
		let activePath = "/";

		function isActiveLink(href) {
			return normalizePath(href) === activePath;
		}

		$$renderer.push(`<nav class="bg-[color:var(--surface)]/90 backdrop-blur fixed w-full z-10 top-0 shadow-md border-b border-white/10"><div class="max-w-5xl mx-auto flex items-center justify-between px-4 py-4"><a${attr('href', homeHref)} class="text-white text-2xl font-semibold tracking-wide">Portfolio</a> <div class="hidden md:flex items-center gap-8"><ul class="flex items-center gap-8"><!--[-->`);

		const each_array = ensure_array_like(navItems);

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];

			$$renderer.push(`<li><a${attr('href', link.href)}${attr_class(`transition-colors duration-150 hover:text-[color:var(--accent)] ${isActiveLink(link.href) ? "nav-active font-semibold" : "text-white"}`)}${attr('aria-current', isActiveLink(link.href) ? "page" : undefined)}>${escape_html(store_get($$store_subs ??= {}, '$t', t)(link.labelKey))}</a></li>`);
		}

		$$renderer.push(`<!--]--></ul> <div class="flex items-center gap-2"><span class="text-teal-100 text-sm">${escape_html(store_get($$store_subs ??= {}, '$t', t)("nav.language"))}:</span> <button type="button"${attr_class(`px-2 py-1 text-sm rounded border border-[color:var(--accent-weak)] transition-shadow duration-200 ${locale === "en"
			? "lang-active"
			: "text-white bg-white/5 hover:bg-[color:var(--accent-glow-hover)] hover:shadow-[var(--accent-glow-hover)]"}`)}${attr('aria-pressed', locale === "en")}>EN</button> <button type="button"${attr_class(`px-2 py-1 text-sm rounded border border-[color:var(--accent-weak)] transition-shadow duration-200 ${locale === "gr"
			? "lang-active"
			: "text-white bg-white/5 hover:bg-[color:var(--accent-glow-hover)] hover:shadow-[var(--accent-glow-hover)]"}`)}${attr('aria-pressed', locale === "gr")}>GR</button></div></div> <button type="button" class="md:hidden inline-flex items-center justify-center rounded border border-gray-600 p-2 text-white hover:bg-gray-700"${attr('aria-label', store_get($$store_subs ??= {}, '$t', t)("nav.openMenu"))}${attr('aria-expanded', open)}><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div> `);

		{
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></nav>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

const $$Astro = createAstro();
const $$NavBarShell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NavBarShell;
  const lang = Astro2.currentLocale || "en";
  const localePath = getPathByLocale(lang);
  const pathWithoutLocale = Astro2.url.pathname.replace(new RegExp(`^/${localePath}(?=/|$)`), "") || "/";
  const pathForLocale = pathWithoutLocale.replace(/^\/+/, "");
  const navItems = navLinks.map((link) => ({
    href: getRelativeLocaleUrl(lang, link.path === "/" ? "" : link.path.slice(1)),
    labelKey: link.labelKey
  }));
  const languageSwitch = {
    en: getRelativeLocaleUrl("en", pathForLocale),
    gr: getRelativeLocaleUrl("gr", pathForLocale)
  };
  const homeHref = getRelativeLocaleUrl(lang);
  return renderTemplate`${renderComponent($$result, "NavBar", NavBar, { "client:load": true, "locale": lang, "navItems": navItems, "languageSwitch": languageSwitch, "homeHref": homeHref, "client:component-hydration": "load", "client:component-path": "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/NavBar.svelte", "client:component-export": "default" })}`;
}, "C:/Downloads/Tutorial/mine/Portfolio-Astro-webeleven/Portfolio-Astro-Svelte-Tailwind/src/components/NavBarShell.astro", void 0);

function tSeo(locale) {
  return messages[locale]?.seo ?? messages.en.seo;
}

export { $$BaseLayout as $, $$NavBarShell as a, $format as b, $locale as c, getRelativeLocaleUrl as g, tSeo as t };
