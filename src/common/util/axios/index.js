/*
 * @Author: xingpan 
 * @Date: 2021-10-25 19:01:19 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-27 11:30:24
 */

import axios from 'axios';

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function setUrlParams(path) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!/:/.test(path))
        return path;
    var isFormData = typeof FormData !== 'undefined' && args[0] instanceof FormData;
    var _a = (args[1] || args[0] || {}).params, params = _a === void 0 ? '' : _a;
    if (!params)
        params = args[0] || {};
    var keys = [];
    var replacedPath = path.replace(/\/:([^/]+)/g, function (match, key) {
        var _a;
        var replacement = (_a = (isFormData ? params.get(key) : params[key])) !== null && _a !== void 0 ? _a : '';
        keys.push(key);
        return "/" + replacement;
    });
    if (!this || !this.keepPathVar || Object.keys(params).length === keys.length) {
        keys.forEach(function (key) {
            if (isFormData) {
                params.delete(key);
                return;
            }
            delete params[key];
        });
    }
    return replacedPath;
}

function parse(url, dataOrConfig, config) {
    var _a = this, _b = _a.getHost, getHost = _b === void 0 ? '' : _b, computedUrlPrefix = _a.computedUrlPrefix;
    var parsedArgs = [dataOrConfig, config].map(function (params) { return (params instanceof Array ? __spreadArrays(params) : params && __assign({}, params)); });
    var pathname = url;
    if (computedUrlPrefix && (!url || !/^\//.test(url))) {
        pathname = url ? computedUrlPrefix + url : computedUrlPrefix.slice(0, -1);
    }
    var parsedUrl = "" + (getHost && getHost()) + setUrlParams.call.apply(setUrlParams, __spreadArrays([this, pathname], parsedArgs));
    return __spreadArrays([parsedUrl], parsedArgs);
};

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function getCustomRequest(_a) {
    var url = _a.url, method = _a.method, link = _a.link, download = _a.download, targetSelf = _a.targetSelf, formData = _a.formData;
    if (!(link || download || targetSelf) && !axios.default[method]) {
        throw new Error("Method [" + method + "] is not valid http verb!");
    }
    return function (dataOrConfig, config) {
        var _a = parse(url, dataOrConfig, config), parsedUrl = _a[0], cd = _a[1], parsedConfig = _a[2];
        var configOrData = cd;
        if (link || download || targetSelf) {
            var _b = (configOrData || {}).params, params = _b === void 0 ? configOrData : _b;
            var requestUrl = axios.default.getUri({ params: params, url: parsedUrl });
            if (download)
                window.open(requestUrl);
            if (targetSelf)
                window.location.href = requestUrl;
            return requestUrl;
        }
        if (formData) {
            configOrData = exports.objToFormData(configOrData, formData);
        }
        return axios.default[method].apply(axios.default, [parsedUrl, configOrData, parsedConfig]);
    };
}

function extend (options) {
    var _this = this;
    if (!options)
        return;
    var url = options.url, urlPrefix = options.urlPrefix, getHost = options.getHost, keepPathVar = options.keepPathVar, config = __rest(options, ["url", "urlPrefix", "getHost", "keepPathVar"]);
    Object.assign(this, {
        url: url,
        urlPrefix: urlPrefix,
        getHost: getHost,
        keepPathVar: !!keepPathVar
    });
    Object.keys(config).forEach(function (key) {
        var requestMappingParam = config[key];
        _this[key] = getCustomRequest(requestMappingParam).bind(_this);
    });
};

export const _create = function create (opts) {
    return extend(opts);
}

export default Instance 