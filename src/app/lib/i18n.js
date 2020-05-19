import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Locales, Locale } from "locale";
import path from "path";

import { createResource, useResources } from "@/lib/resources";

export const FALLBACK_LOCALE_CODE = "en";

export const LOCALE_CODES = {
  en: "English",
  ko: "한국어",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
  ja: "日本語",
  es: "español",
  fr: "français",
  nl: "Nederlands",
  ru: "русский язык",
  "vi-vn": "Tiếng Việt",
  "th-th": "ไทย"
};

export const useI18n = () => {
  const location = useLocation();
  const localeCode = location.pathname.split("/")[1] || FALLBACK_LOCALE_CODE;
  const locale = React.useMemo(
    () => new Locale(localeCode) || new Locale(FALLBACK_LOCALE_CODE),
    [localeCode]
  );
  const value = { locale };

  return value;
};

export const TranslationResourceFactory = initial => {
  if (typeof window == "undefined") {
    const fs = require("fs-extra");

    return createResource(async uri => {
      try {
        return await fs.readJSON(path.join(process.env.I18N_DIR, uri), "UTF-8");
      } catch (error) {
        console.log("error", error);
        return {};
      }
    });
  }

  const api = axios.create({
    baseURL: process.env.I18N_URL
  });

  return createResource(
    async uri => {
      try {
        let res = await api.get(uri);
        return res.data;
      } catch (error) {
        return {};
      }
    },
    null,
    initial
  );
};

export const useTranslation = ns => {
  let { locale } = useI18n();
  const { translation } = useResources();

  const t = key => {
    let result = translation.read(`/${locale.code}/${ns}.json`);
    if (result[key]) return result[key];
    let fallback = translation.read(`/${FALLBACK_LOCALE_CODE}/${ns}.json`);
    return fallback[key];
  };

  return { t };
};

export function getBestLocale(input) {
  const supported = new Locales(Object.keys(LOCALE_CODES));
  const locales = new Locales(input);
  return locales.best(supported);
}

export const convertLocalePath = (lang, path) => {
  let arr = path.split("/");
  if (arr[1]) arr[1] = lang;
  return arr.join("/");
};

export const localedTo = to => {
  return `/:localeCode(${Object.keys(LOCALE_CODES)
    .map(l => l.toLowerCase())
    .join("|")})${to}`;
};

export const LocaleLink = ({ to = "", ...rest }) => {
  const { locale } = useI18n();

  return <Link to={`/${locale.code}${to}`} {...rest} />;
};

export const LocaleNavLink = ({ to, ...rest }) => {
  const { locale } = useI18n();

  return <NavLink to={`/${locale.code}${to}`} {...rest} />;
};

export const LocaleHelmet = ({ ...rest }) => {
  const { locale } = useI18n();

  return <Helmet htmlAttributes={{ lang: locale.code }} {...rest} />;
};
