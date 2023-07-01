/**
 * @description 浏览器环境判断
 */
export const inBrowser = typeof window !== 'undefined' //
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA) // IE
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0 // IE9
export const isEdge = UA && UA.indexOf('edge/') > 0 // Edge
export const isAndroid = (UA && UA.indexOf('android') > 0) // Android
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) // IOS
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge // Chrome
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = UA && UA.match(/firefox\/(\d+)/) // Firefox
