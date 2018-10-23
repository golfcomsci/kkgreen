/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return d(f), e
                    },
                    set: function (a) {
                        d(f), e = a
                    }
                })
            } catch (g) {
            }
            a._definePropertyBroken = !0, b[c] = e
        }

        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function () {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function () {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function (b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function (b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function (a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function (a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function (b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function (a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function (a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function (a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
            function b(a, c) {
                return new b.fn.init(a, c)
            }

            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function () {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function () {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function (a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function (b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function (b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function (a) {
                    return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function (b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function (a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function (b, c) {
            a.fn[c] = function () {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function (b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function (c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function (b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function (b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function (a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function (b, c) {
            a.event.special[c] = {
                setup: function () {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function () {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function () {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function () {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function () {
            return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
        }, a.fn.find = function (a) {
            var b = N.apply(this, arguments);
            return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
        }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function (b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function () {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
                        a.each(P, function (f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function () {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function () {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function () {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
jQuery(function (t) {
    if ("undefined" == typeof wc_add_to_cart_params) return !1;
    var a = function () {
        t(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart", this.updateCartPage).on("added_to_cart removed_from_cart", this.updateFragments)
    };
    a.prototype.onAddToCart = function (a) {
        var o = t(this);
        if (o.is(".ajax_add_to_cart")) {
            if (!o.attr("data-product_id")) return !0;
            a.preventDefault(), o.removeClass("added"), o.addClass("loading");
            var r = {};
            t.each(o.data(), function (t, a) {
                r[t] = a
            }), t(document.body).trigger("adding_to_cart", [o, r]), t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), r, function (a) {
                a && (a.error && a.product_url ? window.location = a.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? t(document.body).trigger("added_to_cart", [a.fragments, a.cart_hash, o]) : window.location = wc_add_to_cart_params.cart_url)
            })
        }
    }, a.prototype.onRemoveFromCart = function (a) {
        var o = t(this),
            r = o.closest(".woocommerce-mini-cart-item");
        a.preventDefault(), r.block({
            message: null,
            overlayCSS: {
                opacity: .6
            }
        }), t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"), {
            cart_item_key: o.data("cart_item_key")
        }, function (a) {
            a && a.fragments ? t(document.body).trigger("removed_from_cart", [a.fragments, a.cart_hash]) : window.location = o.attr("href")
        }).fail(function () {
            window.location = o.attr("href")
        })
    }, a.prototype.updateButton = function (a, o, r, e) {
        (e = void 0 !== e && e) && (e.removeClass("loading"), e.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== e.parent().find(".added_to_cart").length || e.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), t(document.body).trigger("wc_cart_button_updated", [e]))
    }, a.prototype.updateCartPage = function () {
        var a = window.location.toString().replace("add-to-cart", "added-to-cart");
        t(".shop_table.cart").load(a + " .shop_table.cart:eq(0) > *", function () {
            t(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), t(document.body).trigger("cart_page_refreshed")
        }), t(".cart_totals").load(a + " .cart_totals:eq(0) > *", function () {
            t(".cart_totals").stop(!0).css("opacity", "1").unblock(), t(document.body).trigger("cart_totals_refreshed")
        })
    }, a.prototype.updateFragments = function (a, o) {
        o && (t.each(o, function (a) {
            t(a).addClass("updating").fadeTo("400", "0.6").block({
                message: null,
                overlayCSS: {
                    opacity: .6
                }
            })
        }), t.each(o, function (a, o) {
            t(a).replaceWith(o), t(a).stop(!0).css("opacity", "1").unblock()
        }), t(document.body).trigger("wc_fragments_loaded"))
    }, new a
});
window.jQuery(document).ready(function ($) {
    $('body').on('adding_to_cart', function (event, $button, data) {
        $button && $button.hasClass('vc_gitem-link') && $button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));
    }).on('added_to_cart', function (event, fragments, cart_hash, $button) {
        if ('undefined' === typeof($button)) {
            $button = $('.vc-gitem-add-to-cart-loading-btn');
        }
        $button && $button.hasClass('vc_gitem-link') && $button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove();
    });
});

window.Modernizr = function (e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function o(e, t) {
        return r(S.join(e + ";") + (t || ""))
    }

    function i(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!a(o, "-") && b[o] !== n) return "pfx" != t || o
        }
        return !1
    }

    function s(e, t, r) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }

    function l(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + k.join(r + " ") + r).split(" ");
        return i(t, "string") || i(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
    }

    function u() {
        m.input = function (n) {
            for (var r = 0, o = n.length; r < o; r++) P[n[r]] = n[r] in E;
            return P.list && (P.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), P
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), m.inputtypes = function (e) {
            for (var r, o, i, a = 0, c = e.length; a < c; a++) E.setAttribute("type", o = e[a]), r = "text" !== E.type, r && (E.value = w, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), i = t.defaultView, r = i.getComputedStyle && "textfield" !== i.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != w)), M[e[a]] = !!r;
            return M
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var f, d, p = "2.6.2",
        m = {},
        h = !0,
        g = t.documentElement,
        v = "modernizr",
        y = t.createElement(v),
        b = y.style,
        E = t.createElement("input"),
        w = ":)",
        x = {}.toString,
        S = " -webkit- -moz- -o- -ms- ".split(" "),
        C = "Webkit Moz O ms",
        k = C.split(" "),
        T = C.toLowerCase().split(" "),
        j = {
            svg: "http://www.w3.org/2000/svg"
        },
        N = {},
        M = {},
        P = {},
        A = [],
        L = A.slice,
        $ = function (e, n, r, o) {
            var i, a, c, s, l = t.createElement("div"),
                u = t.body,
                f = u || t.createElement("body");
            if (parseInt(r, 10))
                for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), l.appendChild(c);
            return i = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), l.id = v, (u ? l : f).innerHTML += i, f.appendChild(l), u || (f.style.background = "", f.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(f)), a = n(l, e), u ? l.parentNode.removeChild(l) : (f.parentNode.removeChild(f), g.style.overflow = s), !!a
        },
        z = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t).matches;
            var r;
            return $("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
                r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), r
        },
        D = function () {
            function e(e, o) {
                o = o || t.createElement(r[e] || "div"), e = "on" + e;
                var a = e in o;
                return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = i(o[e], "function"), i(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a
            }

            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        F = {}.hasOwnProperty;
    d = i(F, "undefined") || i(F.call, "undefined") ? function (e, t) {
        return t in e && i(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return F.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = L.call(arguments, 1),
            r = function () {
                if (this instanceof r) {
                    var o = function () {
                    };
                    o.prototype = t.prototype;
                    var i = new o,
                        a = t.apply(i, n.concat(L.call(arguments)));
                    return Object(a) === a ? a : i
                }
                return t.apply(e, n.concat(L.call(arguments)))
            };
        return r
    }), N.flexbox = function () {
        return l("flexWrap")
    }, N.canvas = function () {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }, N.canvastext = function () {
        return !!m.canvas && !!i(t.createElement("canvas").getContext("2d").fillText, "function")
    }, N.webgl = function () {
        return !!e.WebGLRenderingContext
    }, N.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : $(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, N.geolocation = function () {
        return "geolocation" in navigator
    }, N.postmessage = function () {
        return !!e.postMessage
    }, N.websqldatabase = function () {
        return !!e.openDatabase
    }, N.indexedDB = function () {
        return !!l("indexedDB", e)
    }, N.hashchange = function () {
        return D("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, N.history = function () {
        return !!e.history && !!history.pushState
    }, N.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, N.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, N.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
    }, N.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    }, N.multiplebgs = function () {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, N.backgroundsize = function () {
        return l("backgroundSize")
    }, N.borderimage = function () {
        return l("borderImage")
    }, N.borderradius = function () {
        return l("borderRadius")
    }, N.boxshadow = function () {
        return l("boxShadow")
    }, N.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, N.opacity = function () {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, N.cssanimations = function () {
        return l("animationName")
    }, N.csscolumns = function () {
        return l("columnCount")
    }, N.cssgradients = function () {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
    }, N.cssreflections = function () {
        return l("boxReflect")
    }, N.csstransforms = function () {
        return !!l("transform")
    }, N.csstransforms3d = function () {
        var e = !!l("perspective");
        return e && "webkitPerspective" in g.style && $("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, N.csstransitions = function () {
        return l("transition")
    }, N.fontface = function () {
        var e;
        return $('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
            var o = t.getElementById("smodernizr"),
                i = o.sheet || o.styleSheet,
                a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }), e
    }, N.generatedcontent = function () {
        var e;
        return $(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, N.video = function () {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, N.audio = function () {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, N.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, N.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, N.webworkers = function () {
        return !!e.Worker
    }, N.applicationcache = function () {
        return !!e.applicationCache
    }, N.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(j.svg, "svg").createSVGRect
    }, N.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == j.svg
    }, N.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(j.svg, "animate")))
    }, N.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(j.svg, "clipPath")))
    };
    for (var O in N) d(N, O) && (f = O.toLowerCase(), m[f] = N[O](), A.push((m[f] ? "" : "no-") + f));
    return m.input || u(), m.addTest = function (e, t) {
        if ("object" == typeof e)
            for (var r in e) d(e, r) && m.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(), m[e] !== n) return m;
            t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), m[e] = t
        }
        return m
    }, r(""), y = E = null,
        function (e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }

            function r() {
                var e = v.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function o(e) {
                var t = g[e[m]];
                return t || (t = {}, h++, e[m] = h, g[h] = t), t
            }

            function i(e, n, r) {
                if (n || (n = t), u) return n.createElement(e);
                r || (r = o(n));
                var i;
                return i = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), i.canHaveChildren && !d.test(e) ? r.frag.appendChild(i) : i
            }

            function a(e, n) {
                if (e || (e = t), u) return e.createDocumentFragment();
                n = n || o(e);
                for (var i = n.frag.cloneNode(), a = 0, c = r(), s = c.length; a < s; a++) i.createElement(c[a]);
                return i
            }

            function c(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                    return v.shivMethods ? i(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(v, t.frag)
            }

            function s(e) {
                e || (e = t);
                var r = o(e);
                return v.shivCSS && !l && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || c(e, r), e
            }

            var l, u, f = e.html5 || {},
                d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                m = "_html5shiv",
                h = 0,
                g = {};
            !function () {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
                } catch (n) {
                    l = !0, u = !0
                }
            }();
            var v = {
                elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: f.shivCSS !== !1,
                supportsUnknownElements: u,
                shivMethods: f.shivMethods !== !1,
                type: "default",
                shivDocument: s,
                createElement: i,
                createDocumentFragment: a
            };
            e.html5 = v, s(t)
        }(this, t), m._version = p, m._prefixes = S, m._domPrefixes = T, m._cssomPrefixes = k, m.mq = z, m.hasEvent = D, m.testProp = function (e) {
        return c([e])
    }, m.testAllProps = l, m.testStyles = $, m.prefixed = function (e, t, n) {
        return t ? l(e, t, n) : l(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + A.join(" ") : ""), m
}(this, this.document),
    function (e, t, n) {
        function r(e) {
            return "[object Function]" == g.call(e)
        }

        function o(e) {
            return "string" == typeof e
        }

        function i() {
        }

        function a(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function c() {
            var e = v.shift();
            y = 1, e ? e.t ? m(function () {
                ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), c()) : y = 0
        }

        function s(e, n, r, o, i, s, l) {
            function u(t) {
                if (!p && a(f.readyState) && (b.r = p = 1, !y && c(), f.onload = f.onreadystatechange = null, t)) {
                    "img" != e && m(function () {
                        w.removeChild(f)
                    }, 50);
                    for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
                }
            }

            var l = l || d.errorTimeout,
                f = t.createElement(e),
                p = 0,
                g = 0,
                b = {
                    t: r,
                    s: n,
                    e: i,
                    a: s,
                    x: l
                };
            1 === T[n] && (g = 1, T[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
                u.call(this, g)
            }, v.splice(o, 0, b), "img" != e && (g || 2 === T[n] ? (w.insertBefore(f, E ? null : h), m(u, l)) : T[n].push(f))
        }

        function l(e, t, n, r, i) {
            return y = 0, t = t || "j", o(e) ? s("c" == t ? S : x, e, t, this.i++, n, r, i) : (v.splice(this.i++, 0, e), 1 == v.length && c()), this
        }

        function u() {
            var e = d;
            return e.loader = {
                load: l,
                i: 0
            }, e
        }

        var f, d, p = t.documentElement,
            m = e.setTimeout,
            h = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            E = b && !!t.createRange().compareNode,
            w = E ? p : h.parentNode,
            p = e.opera && "[object Opera]" == g.call(e.opera),
            p = !!t.attachEvent && !p,
            x = b ? "object" : p ? "script" : "img",
            S = p ? "script" : x,
            C = Array.isArray || function (e) {
                return "[object Array]" == g.call(e)
            },
            k = [],
            T = {},
            j = {
                timeout: function (e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        d = function (e) {
            function t(e) {
                var t, n, r, e = e.split("!"),
                    o = k.length,
                    i = e.pop(),
                    a = e.length,
                    i = {
                        url: i,
                        origUrl: i,
                        prefixes: e
                    };
                for (n = 0; n < a; n++) r = e[n].split("="), (t = j[r.shift()]) && (i = t(i, r));
                for (n = 0; n < o; n++) i = k[n](i);
                return i
            }

            function a(e, o, i, a, c) {
                var s = t(e),
                    l = s.autoCallback;
                s.url.split(".").pop().split("?").shift(), s.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, o, i, a, c) : (T[s.url] ? s.noexec = !0 : T[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : n, s.noexec, s.attrs, s.timeout), (r(o) || r(l)) && i.load(function () {
                    u(), o && o(s.origUrl, c, a), l && l(s.origUrl, c, a), T[s.url] = 2
                })))
            }

            function c(e, t) {
                function n(e, n) {
                    if (e) {
                        if (o(e)) n || (f = function () {
                            var e = [].slice.call(arguments);
                            d.apply(this, e), p()
                        }), a(e, f, t, 0, l);
                        else if (Object(e) === e)
                            for (s in c = function () {
                                var t, n = 0;
                                for (t in e) e.hasOwnProperty(t) && n++;
                                return n
                            }(), e) e.hasOwnProperty(s) && (!n && !--c && (r(f) ? f = function () {
                                var e = [].slice.call(arguments);
                                d.apply(this, e), p()
                            } : f[s] = function (e) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(d[s])), a(e[s], f, t, s, l))
                    } else !n && p()
                }

                var c, s, l = !!e.test,
                    u = e.load || e.both,
                    f = e.callback || i,
                    d = f,
                    p = e.complete || i;
                n(l ? e.yep : e.nope, !!u), u && n(u)
            }

            var s, l, f = this.yepnope.loader;
            if (o(e)) a(e, 0, f, 0);
            else if (C(e))
                for (s = 0; s < e.length; s++) l = e[s], o(l) ? a(l, 0, f, 0) : C(l) ? d(l) : Object(l) === l && c(l, f);
            else Object(e) === e && c(e, f)
        }, d.addPrefix = function (e, t) {
            j[e] = t
        }, d.addFilter = function (e) {
            k.push(e)
        }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function () {
            t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function (e, n, r, o, s, l) {
            var u, f, p = t.createElement("script"),
                o = o || d.errorTimeout;
            p.src = e;
            for (f in r) p.setAttribute(f, r[f]);
            n = l ? c : n || i, p.onreadystatechange = p.onload = function () {
                !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
            }, m(function () {
                u || (u = 1, n(1))
            }, o), s ? p.onload() : h.parentNode.insertBefore(p, h)
        }, e.yepnope.injectCss = function (e, n, r, o, a, s) {
            var l, o = t.createElement("link"),
                n = s ? c : n || i;
            o.href = e, o.rel = "stylesheet", o.type = "text/css";
            for (l in r) o.setAttribute(l, r[l]);
            a || (h.parentNode.insertBefore(o, h), m(n, 0))
        }
    }(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function ($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function () {
        wpcf7.supportHtml5 = (function () {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function (index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function () {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function (form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function (form) {
        var $form = $(form);
        $form.submit(function (event) {
            if (typeof window.FormData !== 'function') {
                return;
            }
            wpcf7.submit($form);
            event.preventDefault();
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function () {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function () {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function () {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function () {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function () {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function () {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function () {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function () {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function () {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function (target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function () {
                updateCount(this);
                $(this).keyup(function () {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function () {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function (form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        $('[placeholder].placeheld', $form).each(function (i, n) {
            $(n).val('');
        });
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function (i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {
            } else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function (data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function (i, n) {
                        $(n.into, $form).each(function () {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    $('[name="g-recaptcha-response"]', $form).each(function () {
                        if ('' === $(this).val()) {
                            var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                            wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
                        }
                    });
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-' +
                        data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function () {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            $form.find('[placeholder].placeheld').each(function (i, n) {
                $(n).val($(n).attr('placeholder'));
            });
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function (i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function (data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function (xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function (target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function (form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function () {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function (target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function (target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function () {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function () {
                fadeOut(this);
            });
            $target.on('focus', ':input', function () {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function (form, data) {
        var $form = $(form);
        var refillCaptcha = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function (xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function (data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function (form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function (path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function () {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window,
                y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
                    fadeOut: 0
                }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y,
                        g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function () {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function (e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
                        else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
                        else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window,
                d = e(t),
                a = d.data("blockUI.history"),
                c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body),
                    d = l.width(),
                    a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window,
                l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function () {
                    l(i)
                }, 10), !1
            }
            var s = t.data,
                d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }

        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function () {
            },
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function (e) {
            t(window, e)
        }, e.unblockUI = function (e) {
            o(window, e)
        }, e.growlUI = function (t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function (t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function () {
                l({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function (o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function () {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function (t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null,
            b = []
    }

    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = o, t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({
                        path: "/"
                    }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {
                    }
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {
                        }
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {
                    }
                }
                return c
            }
        }

        return t.set = t, t.get = function (e) {
            return t.call(t, e)
        }, t.getJSON = function () {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function (n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }

    return n(function () {
    })
});
jQuery(function (o) {
    o(".woocommerce-ordering").on("change", "select.orderby", function () {
        o(this).closest("form").submit()
    }), o("input.qty:not(.product-quantity input.qty)").each(function () {
        var e = parseFloat(o(this).attr("min"));
        e >= 0 && parseFloat(o(this).val()) < e && o(this).val(e)
    }), o(".woocommerce-store-notice__dismiss-link").click(function () {
        Cookies.set("store_notice", "hidden", {
            path: "/"
        }), o(".woocommerce-store-notice").hide()
    }), "hidden" === Cookies.get("store_notice") ? o(".woocommerce-store-notice").hide() : o(".woocommerce-store-notice").show(), o(document.body).on("click", function () {
        o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), o(".woocommerce-input-wrapper").on("click", function (o) {
        o.stopPropagation()
    }), o(".woocommerce-input-wrapper :input").on("keydown", function (e) {
        var t = o(this).parent().find("span.description");
        if (27 === e.which && t.length && t.is(":visible")) return t.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
    }).on("focus", function () {
        var e = o(this).parent(),
            t = e.find("span.description");
        e.addClass("currentTarget"), o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), t.length && t.is(":hidden") && t.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
    }), o.scroll_to_notices = function (e) {
        var t = "scrollBehavior" in document.documentElement.style;
        e.length && (t ? e[0].scrollIntoView({
            behavior: "smooth",
            block: "center"
        }) : o("html, body").animate({
            scrollTop: e.offset().top - 100
        }, 1e3))
    }
});
jQuery(function (e) {
    function t() {
        o && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }

    function n(e) {
        o && (localStorage.setItem(a, e), sessionStorage.setItem(a, e))
    }

    function r() {
        e.ajax(s)
    }

    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var o = !0,
        a = wc_cart_fragments_params.cart_hash_key;
    try {
        o = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
    } catch (w) {
        o = !1
    }
    var s = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        success: function (r) {
            r && r.fragments && (e.each(r.fragments, function (t, n) {
                e(t).replaceWith(n)
            }), o && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(r.fragments)), n(r.cart_hash), r.cart_hash && t()), e(document.body).trigger("wc_fragments_refreshed"))
        }
    };
    if (o) {
        var i = null;
        e(document.body).on("wc_fragment_refresh updated_wc_div", function () {
            r()
        }), e(document.body).on("added_to_cart removed_from_cart", function (e, r, o) {
            var s = sessionStorage.getItem(a);
            null !== s && s !== undefined && "" !== s || t(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(r)), n(o)
        }), e(document.body).on("wc_fragments_refreshed", function () {
            clearTimeout(i), i = setTimeout(r, 864e5)
        }), e(window).on("storage onstorage", function (e) {
            a === e.originalEvent.key && localStorage.getItem(a) !== sessionStorage.getItem(a) && r()
        }), e(window).on("pageshow", function (t) {
            t.originalEvent.persisted && (e(".widget_shopping_cart_content").empty(), e(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
                _ = sessionStorage.getItem(a),
                g = Cookies.get("woocommerce_cart_hash"),
                m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
            if (m) {
                var d = 1 * m + 864e5,
                    f = (new Date).getTime();
                if (d < f) throw "Fragment expired";
                i = setTimeout(r, d - f)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
            e.each(c, function (t, n) {
                e(t).replaceWith(n)
            }), e(document.body).trigger("wc_fragments_loaded")
        } catch (w) {
            r()
        }
    } else r();
    Cookies.get("woocommerce_items_in_cart") > 0 ? e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), e(document.body).on("adding_to_cart", function () {
        e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    })
});
"use strict";
var mapStyles = [{
    featureType: "water",
    elementType: "geometry",
    stylers: [{
        color: "#e9e9e9"
    }, {
        lightness: 17
    }]
}, {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{
        color: "#f5f5f5"
    }, {
        lightness: 20
    }]
}, {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{
        color: "#ffffff"
    }, {
        lightness: 17
    }]
}, {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{
        color: "#ffffff"
    }, {
        lightness: 29
    }, {
        weight: .2
    }]
}, {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{
        color: "#ffffff"
    }, {
        lightness: 18
    }]
}, {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{
        color: "#ffffff"
    }, {
        lightness: 16
    }]
}, {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{
        color: "#f5f5f5"
    }, {
        lightness: 21
    }]
}, {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{
        color: "#dedede"
    }, {
        lightness: 21
    }]
}, {
    elementType: "labels.text.stroke",
    stylers: [{
        visibility: "on"
    }, {
        color: "#ffffff"
    }, {
        lightness: 16
    }]
}, {
    elementType: "labels.text.fill",
    stylers: [{
        saturation: 36
    }, {
        color: "#333333"
    }, {
        lightness: 40
    }]
}, {
    elementType: "labels.icon",
    stylers: [{
        visibility: "off"
    }]
}, {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{
        color: "#f2f2f2"
    }, {
        lightness: 19
    }]
}, {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{
        color: "#fefefe"
    }, {
        lightness: 20
    }]
}, {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{
        color: "#fefefe"
    }, {
        lightness: 17
    }, {
        weight: 1.2
    }]
}];
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
!function (t) {
    "use strict";
    t.fn.counterUp = function (e) {
        var n = t.extend({
            time: 400,
            delay: 10
        }, e);
        return this.each(function () {
            var e = t(this),
                u = n,
                a = function () {
                    var t = [],
                        n = u.time / u.delay,
                        a = e.text(),
                        r = /[0-9]+,[0-9]+/.test(a);
                    a = a.replace(/,/g, "");
                    for (var o = (/^[0-9]+$/.test(a), /^[0-9]+\.[0-9]+$/.test(a)), c = o ? (a.split(".")[1] || []).length : 0, i = n; i >= 1; i--) {
                        var s = parseInt(a / n * i);
                        if (o && (s = parseFloat(a / n * i).toFixed(c)), r)
                            for (;
                                /(\d+)(\d{3})/.test(s.toString());) s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        t.unshift(s)
                    }
                    e.data("counterup-nums", t), e.text("0");
                    var d = function () {
                        e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), u.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                    };
                    e.data("counterup-func", d), setTimeout(e.data("counterup-func"), u.delay)
                };
            e.waypoint(a, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);

!function (e) {
    function t(t, o, n) {
        var a = o.hash.slice(1),
            i = document.getElementById(a) || document.getElementsByName(a)[0];
        if (i) {
            t && t.preventDefault();
            var r = e(n.target);
            if (!(n.lock && r.is(":animated") || n.onBefore && n.onBefore.call(n, t, i, r) === !1)) {
                if (n.stop && r.stop(!0), n.hash) {
                    var l = i.id == a ? "id" : "name",
                        s = e("<a> </a>").attr(l, a).css({
                            position: "absolute",
                            top: e(window).scrollTop(),
                            left: e(window).scrollLeft()
                        });
                    i[l] = "", e("body").prepend(s), location = o.hash, s.remove(), i[l] = a
                }
                r.scrollTo(i, n).trigger("notify.serialScroll", [i])
            }
        }
    }

    var o = location.href.replace(/#.*/, ""),
        n = e.localScroll = function (t) {
            e("body").localScroll(t)
        };
    n.defaults = {
        duration: 1e3,
        axis: "y",
        event: "click",
        stop: !0,
        target: window,
        reset: !0
    }, n.hash = function (o) {
        if (location.hash) {
            if (o = e.extend({}, n.defaults, o), o.hash = !1, o.reset) {
                var a = o.duration;
                delete o.duration, e(o.target).scrollTo(0, o), o.duration = a
            }
            t(0, location, o)
        }
    }, e.fn.localScroll = function (a) {
        function i() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, "") == o && (!a.filter || e(this).is(a.filter))
        }

        return a = e.extend({}, n.defaults, a), a.lazy ? this.bind(a.event, function (o) {
            var n = e([o.target, o.target.parentNode]).filter(i)[0];
            n && t(o, n, a)
        }) : this.find("a,area").filter(i).bind(a.event, function (e) {
            t(e, this, a)
        }).end().end()
    }
}(jQuery);
!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = -1,
        o = -1,
        a = function (t) {
            return parseFloat(t) || 0
        },
        i = function (e) {
            var o = 1,
                i = t(e),
                n = null,
                r = [];
            return i.each(function () {
                var e = t(this),
                    i = e.offset().top - a(e.css("margin-top")),
                    s = r.length > 0 ? r[r.length - 1] : null;
                null === s ? r.push(e) : Math.floor(Math.abs(n - i)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), n = i
            }), r
        },
        n = function (e) {
            var o = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
        },
        r = t.fn.matchHeight = function (e) {
            var o = n(e);
            if (o.remove) {
                var a = this;
                return this.css(o.property, ""), t.each(r._groups, function (t, e) {
                    e.elements = e.elements.not(a)
                }), this
            }
            return this.length <= 1 && !o.target ? this : (r._groups.push({
                elements: this,
                options: o
            }), r._apply(this, o), this)
        };
    r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = i, r._parse = a, r._parseOptions = n, r._apply = function (e, o) {
        var s = n(o),
            h = t(e),
            l = [h],
            c = t(window).scrollTop(),
            p = t("html").outerHeight(!0),
            d = h.parents().filter(":hidden");
        return d.each(function () {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
            var e = t(this),
                o = e.css("display");
            "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), l = i(h), h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(l, function (e, o) {
            var i = t(o),
                n = 0;
            if (s.target) n = s.target.outerHeight(!1);
            else {
                if (s.byRow && i.length <= 1) return void i.css(s.property, "");
                i.each(function () {
                    var e = t(this),
                        o = e.attr("style"),
                        a = e.css("display");
                    "inline-block" !== a && "flex" !== a && "inline-flex" !== a && (a = "block");
                    var i = {
                        display: a
                    };
                    i[s.property] = "", e.css(i), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                })
            }
            i.each(function () {
                var e = t(this),
                    o = 0;
                s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += a(e.css("border-top-width")) + a(e.css("border-bottom-width")), o += a(e.css("padding-top")) + a(e.css("padding-bottom"))), e.css(s.property, n - o + "px"))
            })
        }), d.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this
    }, r._applyDataApi = function () {
        var e = {};
        t("[data-match-height], [data-mh]").each(function () {
            var o = t(this),
                a = o.attr("data-mh") || o.attr("data-match-height");
            a in e ? e[a] = e[a].add(o) : e[a] = o
        }), t.each(e, function () {
            this.matchHeight(!0)
        })
    };
    var s = function (e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function (a, i) {
        if (i && "resize" === i.type) {
            var n = t(window).width();
            if (n === e) return;
            e = n
        }
        a ? o === -1 && (o = setTimeout(function () {
            s(i), o = -1
        }, r._throttle)) : s(i)
    }, t(r._applyDataApi), t(window).bind("load", function (t) {
        r._update(!1, t)
    }), t(window).bind("resize orientationchange", function (t) {
        r._update(!0, t)
    })
});
!function (n) {
    var t = n(window),
        o = t.height();
    t.resize(function () {
        o = t.height()
    }), n.fn.parallax = function (i, e, r) {
        function u() {
            var r = t.scrollTop();
            c.each(function () {
                var t = n(this),
                    u = t.offset().top,
                    f = h(t);
                u + f < r || u > r + o || c.css("backgroundPosition", i + " " + Math.round((l - r) * e) + "px")
            })
        }

        var h, l, c = n(this);
        c.each(function () {
            l = c.offset().top - 200
        }), h = r ? function (n) {
            return n.outerHeight(!0)
        } : function (n) {
            return n.height()
        }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === r) && (r = !0), t.bind("scroll", u).resize(u), u()
    }
}(jQuery);

!function (e) {
    function t(e) {
        return "object" == typeof e ? e : {
            top: e,
            left: e
        }
    }

    var o = e.scrollTo = function (t, o, n) {
        e(window).scrollTo(t, o, n)
    };
    o.defaults = {
        axis: "xy",
        duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1
    }, o.window = function (t) {
        return e(window)._scrollable()
    }, e.fn._scrollable = function () {
        return this.map(function () {
            var t = this,
                o = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!o) return t;
            var n = (t.contentWindow || t).document || t.ownerDocument || t;
            return e.browser.safari || "BackCompat" == n.compatMode ? n.body : n.documentElement
        })
    }, e.fn.scrollTo = function (n, r, a) {
        return "object" == typeof r && (a = r, r = 0), "function" == typeof a && (a = {
            onAfter: a
        }), "max" == n && (n = 9e9), a = e.extend({}, o.defaults, a), r = r || a.speed || a.duration, a.queue = a.queue && a.axis.length > 1, a.queue && (r /= 2), a.offset = t(a.offset), a.over = t(a.over), this._scrollable().each(function () {
            function i(e) {
                f.animate(l, r, a.easing, e && function () {
                    e.call(this, n, a)
                })
            }

            var s, c = this,
                f = e(c),
                u = n,
                l = {},
                d = f.is("html,body");
            switch (typeof u) {
                case "number":
                case "string":
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(u)) {
                        u = t(u);
                        break
                    }
                    u = e(u, this);
                case "object":
                    (u.is || u.style) && (s = (u = e(u)).offset())
            }
            e.each(a.axis.split(""), function (e, t) {
                var n = "x" == t ? "Left" : "Top",
                    r = n.toLowerCase(),
                    m = "scroll" + n,
                    h = c[m],
                    p = o.max(c, t);
                if (s) l[m] = s[r] + (d ? 0 : h - f.offset()[r]), a.margin && (l[m] -= parseInt(u.css("margin" + n), 10) || 0, l[m] -= parseInt(u.css("border" + n + "Width")) || 0), l[m] += a.offset[r] || 0, a.over[r] && (l[m] += u["x" == t ? "width" : "height"]() * a.over[r]);
                else {
                    var w = u[r];
                    l[m] = w.slice && "%" == w.slice(-1) ? parseFloat(w) / 100 * p : w
                }
                /^\d+$/.test(l[m]) && (l[m] = l[m] <= 0 ? 0 : Math.min(l[m], p)), !e && a.queue && (h != l[m] && i(a.onAfterFirst), delete l[m])
            }), i(a.onAfter)
        }).end()
    }, o.max = function (t, o) {
        var n = "x" == o ? "Width" : "Height",
            r = "scroll" + n;
        if (!e(t).is("html,body")) return t[r] - e(t)[n.toLowerCase()]();
        var a = "client" + n,
            i = t.ownerDocument.documentElement,
            s = t.ownerDocument.body;
        return Math.max(i[r], s[r]) - Math.min(i[a], s[a])
    }
}(jQuery);
/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
!function (e, t, i, s) {
    i.swipebox = function (o, a) {
        var n, r, l = {
                useCSS: !0,
                useSVG: !0,
                initialIndexOnArray: 0,
                removeBarsOnMobile: !0,
                hideCloseButtonOnMobile: !1,
                hideBarsDelay: 3e3,
                videoMaxWidth: 1140,
                vimeoColor: "cccccc",
                beforeOpen: null,
                afterOpen: null,
                afterClose: null,
                afterMedia: null,
                nextSlide: null,
                prevSlide: null,
                loopAtEnd: !1,
                autoplayVideos: !1,
                queryStringData: {},
                toggleClassOnLoad: ""
            },
            d = this,
            p = [],
            c = o.selector,
            b = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
            u = null !== b || t.createTouch !== s || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
            h = !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            g = e.innerWidth ? e.innerWidth : i(e).width(),
            w = e.innerHeight ? e.innerHeight : i(e).height(),
            f = 0,
            m = '<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>';
        d.settings = {}, i.swipebox.close = function () {
            n.closeSlide()
        }, i.swipebox.extend = function () {
            return n
        }, d.init = function () {
            d.settings = i.extend({}, l, a), i.isArray(o) ? (p = o, n.target = i(e), n.init(d.settings.initialIndexOnArray)) : i(t).on("click", c, function (e) {
                if ("slide current" === e.target.parentNode.className) return !1;
                i.isArray(o) || (n.destroy(), r = i(c), n.actions()), p = [];
                var t, s, a;
                a || (s = "data-rel", a = i(this).attr(s)), a || (s = "rel", a = i(this).attr(s)), r = a && "" !== a && "nofollow" !== a ? i(c).filter("[" + s + '="' + a + '"]') : i(c), r.each(function () {
                    var e = null,
                        t = null;
                    i(this).attr("title") && (e = i(this).attr("title")), i(this).attr("href") && (t = i(this).attr("href")), p.push({
                        href: t,
                        title: e
                    })
                }), t = r.index(i(this)), e.preventDefault(), e.stopPropagation(), n.target = i(e.target), n.init(t)
            })
        }, n = {
            init: function (e) {
                d.settings.beforeOpen && d.settings.beforeOpen(), this.target.trigger("swipebox-start"), i.swipebox.isOpen = !0, this.build(), this.openSlide(e), this.openMedia(e), this.preloadMedia(e + 1), this.preloadMedia(e - 1), d.settings.afterOpen && d.settings.afterOpen(e)
            },
            build: function () {
                var e, t = this;
                i("body").append(m), h && d.settings.useSVG === !0 && (e = i("#swipebox-close").css("background-image"), e = e.replace("png", "svg"), i("#swipebox-prev, #swipebox-next, #swipebox-close").css({
                    "background-image": e
                })), b && d.settings.removeBarsOnMobile && i("#swipebox-bottom-bar, #swipebox-top-bar").remove(), i.each(p, function () {
                    i("#swipebox-slider").append('<div class="slide"></div>')
                }), t.setDim(), t.actions(), u && t.gesture(), t.keyboard(), t.animBars(), t.resize()
            },
            setDim: function () {
                var t, s, o = {};
                "onorientationchange" in e ? e.addEventListener("orientationchange", function () {
                    0 === e.orientation ? (t = g, s = w) : 90 !== e.orientation && e.orientation !== -90 || (t = w, s = g)
                }, !1) : (t = e.innerWidth ? e.innerWidth : i(e).width(), s = e.innerHeight ? e.innerHeight : i(e).height()), o = {
                    width: t,
                    height: s
                }, i("#swipebox-overlay").css(o)
            },
            resize: function () {
                var t = this;
                i(e).resize(function () {
                    t.setDim()
                }).resize()
            },
            supportTransition: function () {
                var e,
                    i = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                for (e = 0; e < i.length; e++)
                    if (t.createElement("div").style[i[e]] !== s) return i[e];
                return !1
            },
            doCssTrans: function () {
                if (d.settings.useCSS && this.supportTransition()) return !0
            },
            gesture: function () {
                var e, t, s, o, a, n, r = this,
                    l = !1,
                    d = !1,
                    c = 10,
                    b = 50,
                    u = {},
                    h = {},
                    w = i("#swipebox-top-bar, #swipebox-bottom-bar"),
                    m = i("#swipebox-slider");
                w.addClass("visible-bars"), r.setTimeout(), i("body").bind("touchstart", function (r) {
                    return i(this).addClass("touching"), e = i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current")), h = r.originalEvent.targetTouches[0], u.pageX = r.originalEvent.targetTouches[0].pageX, u.pageY = r.originalEvent.targetTouches[0].pageY, i("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + f + "%, 0, 0)",
                        transform: "translate3d(" + f + "%, 0, 0)"
                    }), i(".touching").bind("touchmove", function (r) {
                        if (r.preventDefault(), r.stopPropagation(), h = r.originalEvent.targetTouches[0], !d && (a = s, s = h.pageY - u.pageY, Math.abs(s) >= b || l)) {
                            var w = .75 - Math.abs(s) / m.height();
                            m.css({
                                top: s + "px"
                            }), m.css({
                                opacity: w
                            }), l = !0
                        }
                        o = t, t = h.pageX - u.pageX, n = 100 * t / g, !d && !l && Math.abs(t) >= c && (i("#swipebox-slider").css({
                            "-webkit-transition": "",
                            transition: ""
                        }), d = !0), d && (0 < t ? 0 === e ? i("#swipebox-overlay").addClass("leftSpringTouch") : (i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), i("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (f + n) + "%, 0, 0)",
                            transform: "translate3d(" + (f + n) + "%, 0, 0)"
                        })) : 0 > t && (p.length === e + 1 ? i("#swipebox-overlay").addClass("rightSpringTouch") : (i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), i("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (f + n) + "%, 0, 0)",
                            transform: "translate3d(" + (f + n) + "%, 0, 0)"
                        }))))
                    }), !1
                }).bind("touchend", function (e) {
                    if (e.preventDefault(), e.stopPropagation(), i("#swipebox-slider").css({
                        "-webkit-transition": "-webkit-transform 0.4s ease",
                        transition: "transform 0.4s ease"
                    }), s = h.pageY - u.pageY, t = h.pageX - u.pageX, n = 100 * t / g, l)
                        if (l = !1, Math.abs(s) >= 2 * b && Math.abs(s) > Math.abs(a)) {
                            var p = s > 0 ? m.height() : -m.height();
                            m.animate({
                                top: p + "px",
                                opacity: 0
                            }, 300, function () {
                                r.closeSlide()
                            })
                        } else m.animate({
                            top: 0,
                            opacity: 1
                        }, 300);
                    else d ? (d = !1, t >= c && t >= o ? r.getPrev() : t <= -c && t <= o && r.getNext()) : w.hasClass("visible-bars") ? (r.clearTimeout(), r.hideBars()) : (r.showBars(), r.setTimeout());
                    i("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + f + "%, 0, 0)",
                        transform: "translate3d(" + f + "%, 0, 0)"
                    }), i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), i(".touching").off("touchmove").removeClass("touching")
                })
            },
            setTimeout: function () {
                if (d.settings.hideBarsDelay > 0) {
                    var t = this;
                    t.clearTimeout(), t.timeout = e.setTimeout(function () {
                        t.hideBars()
                    }, d.settings.hideBarsDelay)
                }
            },
            clearTimeout: function () {
                e.clearTimeout(this.timeout), this.timeout = null
            },
            showBars: function () {
                var e = i("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? e.addClass("visible-bars") : (i("#swipebox-top-bar").animate({
                    top: 0
                }, 500), i("#swipebox-bottom-bar").animate({
                    bottom: 0
                }, 500), setTimeout(function () {
                    e.addClass("visible-bars")
                }, 1e3))
            },
            hideBars: function () {
                var e = i("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? e.removeClass("visible-bars") : (i("#swipebox-top-bar").animate({
                    top: "-50px"
                }, 500), i("#swipebox-bottom-bar").animate({
                    bottom: "-50px"
                }, 500), setTimeout(function () {
                    e.removeClass("visible-bars")
                }, 1e3))
            },
            animBars: function () {
                var e = this,
                    t = i("#swipebox-top-bar, #swipebox-bottom-bar");
                t.addClass("visible-bars"), e.setTimeout(), i("#swipebox-slider").click(function () {
                    t.hasClass("visible-bars") || (e.showBars(), e.setTimeout())
                }), i("#swipebox-bottom-bar").hover(function () {
                    e.showBars(), t.addClass("visible-bars"), e.clearTimeout()
                }, function () {
                    d.settings.hideBarsDelay > 0 && (t.removeClass("visible-bars"), e.setTimeout())
                })
            },
            keyboard: function () {
                var t = this;
                i(e).bind("keyup", function (e) {
                    e.preventDefault(), e.stopPropagation(), 37 === e.keyCode ? t.getPrev() : 39 === e.keyCode ? t.getNext() : 27 === e.keyCode && t.closeSlide()
                })
            },
            actions: function () {
                var e = this,
                    t = "touchend click";
                p.length < 2 ? (i("#swipebox-bottom-bar").hide(), s === p[1] && i("#swipebox-top-bar").hide()) : (i("#swipebox-prev").bind(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.getPrev(), e.setTimeout()
                }), i("#swipebox-next").bind(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.getNext(), e.setTimeout()
                })), i("#swipebox-close").bind(t, function () {
                    e.closeSlide()
                })
            },
            setSlide: function (e, t) {
                t = t || !1;
                var s = i("#swipebox-slider");
                f = 100 * -e, this.doCssTrans() ? s.css({
                    "-webkit-transform": "translate3d(" + 100 * -e + "%, 0, 0)",
                    transform: "translate3d(" + 100 * -e + "%, 0, 0)"
                }) : s.animate({
                    left: 100 * -e + "%"
                }), i("#swipebox-slider .slide").removeClass("current"), i("#swipebox-slider .slide").eq(e).addClass("current"), this.setTitle(e), t && s.fadeIn(), i("#swipebox-prev, #swipebox-next").removeClass("disabled"), 0 === e ? i("#swipebox-prev").addClass("disabled") : e === p.length - 1 && d.settings.loopAtEnd !== !0 && i("#swipebox-next").addClass("disabled")
            },
            openSlide: function (t) {
                i("html").addClass("swipebox-html"), u ? (i("html").addClass("swipebox-touch"), d.settings.hideCloseButtonOnMobile && i("html").addClass("swipebox-no-close-button")) : i("html").addClass("swipebox-no-touch"), i(e).trigger("resize"), this.setSlide(t, !0)
            },
            preloadMedia: function (e) {
                var t = this,
                    i = null;
                p[e] !== s && (i = p[e].href), t.isVideo(i) ? t.openMedia(e) : setTimeout(function () {
                    t.openMedia(e)
                }, 1e3)
            },
            openMedia: function (e) {
                var t, o, a = this;
                return p[e] !== s && (t = p[e].href), !(e < 0 || e >= p.length) && (o = i("#swipebox-slider .slide").eq(e), void(a.isVideo(t) ? (o.html(a.getVideo(t)), d.settings.afterMedia && d.settings.afterMedia(e)) : (o.addClass("slide-loading"), a.loadMedia(t, function () {
                    o.removeClass("slide-loading"), o.html(this), d.settings.afterMedia && d.settings.afterMedia(e)
                }))))
            },
            setTitle: function (e) {
                var t = null;
                i("#swipebox-title").empty(), p[e] !== s && (t = p[e].title), t ? (i("#swipebox-top-bar").show(), i("#swipebox-title").append(t)) : i("#swipebox-top-bar").hide()
            },
            isVideo: function (e) {
                if (e) {
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) return !0;
                    if (e.toLowerCase().indexOf("swipeboxvideo=1") >= 0) return !0
                }
            },
            parseUri: function (e, s) {
                var o = t.createElement("a"),
                    a = {};
                return o.href = decodeURIComponent(e), o.search && (a = JSON.parse('{"' + o.search.toLowerCase().replace("?", "").replace(/&/g, '","').replace(/=/g, '":"') + '"}')), i.isPlainObject(s) && (a = i.extend(a, s, d.settings.queryStringData)), i.map(a, function (e, t) {
                    if (e && e > "") return encodeURIComponent(t) + "=" + encodeURIComponent(e)
                }).join("&")
            },
            getVideo: function (e) {
                var t = "",
                    i = e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),
                    s = e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
                    o = e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),
                    a = "";
                return i || s ? (s && (i = s), a = n.parseUri(e, {
                    autoplay: d.settings.autoplayVideos ? "1" : "0",
                    v: ""
                }), t = '<iframe width="560" height="315" src="//' + i[1] + "/embed/" + i[2] + "?" + a + '" frameborder="0" allowfullscreen></iframe>') : o ? (a = n.parseUri(e, {
                    autoplay: d.settings.autoplayVideos ? "1" : "0",
                    byline: "0",
                    portrait: "0",
                    color: d.settings.vimeoColor
                }), t = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + o[1] + "?" + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : t = '<iframe width="560" height="315" src="' + e + '" frameborder="0" allowfullscreen></iframe>', '<div class="swipebox-video-container" style="max-width:' + d.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + t + "</div></div>"
            },
            loadMedia: function (e, t) {
                if (0 === e.trim().indexOf("#")) t.call(i("<div>", {
                    "class": "swipebox-inline-container"
                }).append(i(e).clone().toggleClass(d.settings.toggleClassOnLoad)));
                else if (!this.isVideo(e)) {
                    var s = i("<img>").on("load", function () {
                        t.call(s)
                    });
                    s.attr("src", e)
                }
            },
            getNext: function () {
                var e, t = this,
                    s = i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));
                s + 1 < p.length ? (e = i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"), i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src", e), s++, t.setSlide(s), t.preloadMedia(s + 1), d.settings.nextSlide && d.settings.nextSlide(s)) : d.settings.loopAtEnd === !0 ? (e = i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"), i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src", e), s = 0, t.preloadMedia(s), t.setSlide(s), t.preloadMedia(s + 1), d.settings.nextSlide && d.settings.nextSlide(s)) : (i("#swipebox-overlay").addClass("rightSpring"), setTimeout(function () {
                    i("#swipebox-overlay").removeClass("rightSpring")
                }, 500))
            },
            getPrev: function () {
                var e, t = i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));
                t > 0 ? (e = i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src"), i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src", e), t--, this.setSlide(t), this.preloadMedia(t - 1), d.settings.prevSlide && d.settings.prevSlide(t)) : (i("#swipebox-overlay").addClass("leftSpring"), setTimeout(function () {
                    i("#swipebox-overlay").removeClass("leftSpring")
                }, 500))
            },
            nextSlide: function (e) {
            },
            prevSlide: function (e) {
            },
            closeSlide: function () {
                i("html").removeClass("swipebox-html"), i("html").removeClass("swipebox-touch"), i(e).trigger("resize"), this.destroy()
            },
            destroy: function () {
                i(e).unbind("keyup"), i("body").unbind("touchstart"), i("body").unbind("touchmove"), i("body").unbind("touchend"), i("#swipebox-slider").unbind(), i("#swipebox-overlay").remove(), i.isArray(o) || o.removeData("_swipebox"), this.target && this.target.trigger("swipebox-destroy"), i.swipebox.isOpen = !1, d.settings.afterClose && d.settings.afterClose()
            }
        }, d.init()
    }, i.fn.swipebox = function (e) {
        if (!i.data(this, "_swipebox")) {
            var t = new i.swipebox(this, e);
            this.data("_swipebox", t)
        }
        return this.data("_swipebox")
    }
}(window, document, jQuery);
!function (s, t, e, n) {
    function a(i, t) {
        this.element = i, this.$el = s(i), this._defaults = r, this._name = o;
        var e = this.$el.data(),
            n = {};
        for (var a in e)
            if (e.hasOwnProperty(a) && a.match(/zs[A-Z]/)) {
                var l = a.substr(2);
                l = l.charAt(0).toLowerCase() + l.slice(1), n[l] = e[a]
            }
        return this.settings = s.extend({}, r, n, t), null == this.settings.src || this.settings.src.length < 1 ? void console.log("ZoomSlider terminated - invalid input.") : void this.init()
    }

    var o = "zoomSlider",
        r = {
            src: null,
            src2: null,
            speed: 8e3,
            initzoom: 1.2,
            switchSpeed: 1e3,
            interval: 4600,
            autoplay: !0,
            bullets: !0,
            overlay: "plain"
        };
    s.extend(a.prototype, {
        init: function () {
            0 == s.isArray(this.settings.src) && (this.settings.src = [this.settings.src]), 0 == s.isArray(this.settings.src2) && (this.settings.src2 = [this.settings.src2]), this.transEndEventNames = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            }, this.transEndEventName = this.transEndEventNames[Modernizr.prefixed("transition")], this.support = Modernizr.csstransitions && Modernizr.csstransforms;
            var i = Modernizr.prefixed("transform");
            switch (i = i.replace(/([A-Z])/g, function (s, i) {
                return "-" + i.toLowerCase()
            }).replace(/^ms-/, "-ms-"), this.transitionProp = {
                transition: i + " " + this.settings.speed + "ms ease-out, opacity " + this.settings.switchSpeed + "ms"
            }, this.numSlides = this.settings.src.length, this.$el.css("position")) {
                case "relative":
                case "absolute":
                case "fixed":
                    break;
                default:
                    this.$el.css("position", "relative")
            }
            var t = this,
                e = s("<img />");
            e.load(function () {
                1 == t.numSlides ? t.initSingle() : t.initSlideshow()
            }), e.attr("src", this.settings.src[0])
        },
        initSlideshow: function () {
            var t = this,
                e = s('<div class="zs-slideshow"></div>'),
                n = s('<div class="zs-slides"></div>'),
                a = s('<div class="zs-arrows"></div>'),
                o = s('<div class="zs-layer"></div>'),
                r = s('<div class="zs-bullets"></div>');
            for (i = 0; i < this.numSlides; i++) {
                var l = s('<div class="zs-slide zs-slide-' + i + '"></div>');
                l.css({
                    "background-image": "url('" + this.settings.src[i] + "')"
                }).appendTo(n);
                var d = s('<div class="zs-bullet zs-bullet-' + i + '"></div>');
                d.appendTo(r), 0 == i && (l.addClass("active").css("opacity", 1), d.addClass("active"))
            }
            if (t._promoteChildren(), o.css({
                "background-image": "url('" + this.settings.src2[0] + "')"
            }), e.append(o), e.append(n).prependTo(this.$el), 1 == this.settings.bullets && (e.append(r), e.on("click", ".zs-bullet", function (i) {
                t.jump(s(this).index())
            })), 1 == this.settings.arrows && (s('<div class="container"><span class="arrow-right">' + this.settings.next + '</span><span class="arrow-left">' + this.settings.prev + "</span></div>").appendTo(a), this.$el.append(a), this.$el.on("click", ".arrow-left", function (s) {
                t.prev()
            }), this.$el.on("click", ".arrow-right", function (s) {
                t.next()
            })), this.pos = 0, this.pending = null, this.switching = !1, this.$slideshow = e, this.$slides = n.children(".zs-slide"), this.$bullets = r.children(".zs-bullet"), this.$el.addClass("zs-enabled"), "dots" == this.settings.overlay ? this.$el.addClass("overlay-dots") : "plain" == this.settings.overlay && this.$el.addClass("overlay-plain"), this.support) {
                var h = this.$slides.eq(0),
                    c = this.settings.initzoom;
                h.css("opacity", 0).css(this.transitionProp), setTimeout(function () {
                    h.css({
                        opacity: 1,
                        transform: "scale(" + c + ", " + c + ")",
                        "z-index": 2
                    })
                }, 50)
            }
            1 == this.settings.autoplay && this.play()
        },
        initSingle: function () {
            var i = this,
                t = s('<div class="zs-slideshow"></div>'),
                e = s('<div class="zs-slides"></div>'),
                n = s('<div class="zs-slide zs-slide-0"></div>');
            n.css({
                "background-image": "url('" + this.settings.src[0] + "')"
            }).appendTo(e), n.addClass("active").css("opacity", 1), i._promoteChildren(), t.append(e).prependTo(this.$el), this.$el.addClass("zs-enabled"), "dots" == this.settings.overlay ? this.$el.addClass("overlay-dots") : "plain" == this.settings.overlay && this.$el.addClass("overlay-plain"), this.support && (n.css("opacity", 0).css(this.transitionProp), setTimeout(function () {
                n.css({
                    opacity: 1,
                    transform: "scale(" + this.settings.initzoom + ", " + this.settings.initzoom + ")",
                    "z-index": 2
                })
            }, 50))
        },
        _promoteChildren: function () {
            this.$el.children().each(function (i) {
                $this = s(this), "auto" == $this.css("z-index") && $this.css("z-index", 2), "static" == $this.css("position") && $this.css("position", "relative")
            })
        },
        jump: function (s) {
            if (s >= this.numSlides) return void console.log("ZoomSlider: jump(pos) aborted. supplied index out of range.");
            if (this.pos != s) {
                if (this.switching) return void(this.pending = s);
                var i = this,
                    t = this.$slides.eq(this.pos),
                    e = this.$slides.eq(s);
                this.support ? (this.switching = !0, t.css("z-index", 1), e.addClass("active").css(this.transitionProp).css({
                    opacity: 1,
                    transform: "scale(" + this.settings.initzoom + ", " + this.settings.initzoom + ")",
                    "z-index": 2
                }).on(this.transEndEventName, function (s) {
                    "opacity" == s.originalEvent.propertyName && (lastSlideBg = t.css("background-image"), t.removeClass("active").removeAttr("style").css("background-image", lastSlideBg), e.off(i.transEndEventName), i.switching = !1, null != i.pending && setTimeout(function () {
                        var s = i.pending;
                        i.pending = null, i.$bullets.eq(s).click()
                    }, 30))
                })) : (t.removeClass("active"), e.addClass("active")), this.$bullets.eq(this.pos).removeClass("active"), this.$bullets.eq(s).addClass("active"), this.pos = s, this.settings.autoplay && this.play()
            }
        },
        prev: function () {
            var s = this.pos - 1;
            s < 0 && (s = this.numSlides - 1), this.jump(s)
        },
        next: function () {
            var s = this.pos + 1;
            s >= this.numSlides && (s = 0), this.jump(s)
        },
        play: function () {
            null != this.timer && clearInterval(this.timer);
            var s = this;
            this.settings.autoplay = !0, this.timer = setInterval(function () {
                s.next()
            }, this.settings.interval)
        },
        stop: function () {
            this.settings.autoplay = !1, clearInterval(this.timer), this.timer = null
        }
    }), s.fn[o] = function (i) {
        return this.each(function () {
            s.data(this, "plugin_" + o) || s.data(this, "plugin_" + o, new a(this, i))
        })
    };
    var l = s("[data-zs-src]");
    l.length > 0 && l.each(function (i) {
        var t = s(this);
        t.zoomSlider()
    })
}(jQuery, window, document);
(function () {
    "use strict";

    function a() {
    }

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if ("object" == typeof a) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if ("object" === c)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this),
    function (a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }

        var c = document.documentElement,
            d = function () {
            };
        c.addEventListener ? d = function (a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function (a, c, d) {
            a[c + d] = d.handleEvent ? function () {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function () {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function () {
        };
        c.removeEventListener ? e = function (a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function (a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (c, d) {
            return b(a, c, d)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(window, function (a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" == l.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b, c);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function () {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a, b) {
            this.url = a, this.element = b, this.img = new Image
        }

        var j = a.jQuery,
            k = a.console,
            l = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function () {
            this.images = [];
            for (var a = 0; a < this.elements.length; a++) {
                var b = this.elements[a];
                this.addElementImages(b)
            }
        }, g.prototype.addElementImages = function (a) {
            "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
            var b = a.nodeType;
            if (b && m[b]) {
                for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                    var e = c[d];
                    this.addImage(e)
                }
                if ("string" == typeof this.options.background) {
                    var f = a.querySelectorAll(this.options.background);
                    for (d = 0; d < f.length; d++) {
                        var g = f[d];
                        this.addElementBackgroundImages(g)
                    }
                }
            }
        };
        var m = {
            1: !0,
            9: !0,
            11: !0
        };
        g.prototype.addElementBackgroundImages = function (a) {
            for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                var e = d && d[1];
                e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
            }
        };
        var n = a.getComputedStyle || function (a) {
            return a.currentStyle
        };
        return g.prototype.addImage = function (a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.addBackground = function (a, b) {
            var c = new i(a, b);
            this.images.push(c)
        }, g.prototype.check = function () {
            function a(a, c, d) {
                setTimeout(function () {
                    b.progress(a, c, d)
                })
            }

            var b = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (var c = 0; c < this.images.length; c++) {
                var d = this.images[c];
                d.once("progress", a), d.check()
            }
        }, g.prototype.progress = function (a, b, c) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b)
        }, g.prototype.complete = function () {
            var a = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
                var b = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[b](this)
            }
        }, h.prototype = new b, h.prototype.check = function () {
            var a = this.getIsImageComplete();
            return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
        }, h.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, h.prototype.confirm = function (a, b) {
            this.isLoaded = a, this.emit("progress", this, this.img, b)
        }, h.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, h.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, h.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, h.prototype.unbindEvents = function () {
            c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
        }, i.prototype = new h, i.prototype.check = function () {
            c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
            var a = this.getIsImageComplete();
            a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, i.prototype.unbindEvents = function () {
            c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
        }, i.prototype.confirm = function (a, b) {
            this.isLoaded = a, this.emit("progress", this, this.element, b)
        }, g.makeJQueryPlugin = function (b) {
            b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function (a, b) {
                var c = new g(this, a, b);
                return c.jqDeferred.promise(j(this))
            })
        }, g.makeJQueryPlugin(), g
    });
/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function (a) {
    function b() {
    }

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }

        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }

    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
    function (a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }

        var c = document.documentElement,
            d = function () {
            };
        c.addEventListener ? d = function (a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function (a, c, d) {
            a[c + d] = d.handleEvent ? function () {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function () {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function () {
        };
        c.removeEventListener ? e = function (a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function (a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
    }(window),
    function () {
        function a() {
        }

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function () {
                return this[a].apply(this, arguments)
            }
        }

        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function (a) {
            var b, c, d = this._getEvents();
            if (a instanceof RegExp) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function (a) {
            var b, c = [];
            for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function (a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function (a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
            return this.getListeners(a), this
        }, d.defineEvents = function (a) {
            for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function (a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function (a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function (a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function (a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function (a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if (a instanceof RegExp)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function (a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function (a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function () {
            return this._events || (this._events = {})
        }, a.noConflict = function () {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
    }.call(this),
    function (a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }

        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function (a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {
        }

        function d() {
            for (var a = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function e(c) {
            function e() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function () {
                        var a = d ? function (a) {
                            return d(a, null)
                        } : function (a) {
                            return a.currentStyle
                        };
                        return function (b) {
                            var c = a(b);
                            return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                        }
                    }(), k = c("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var g = document.body || document.documentElement;
                        g.appendChild(e);
                        var h = j(e);
                        l = 200 === b(h.width), g.removeChild(e)
                    }
                }
            }

            function h(a) {
                if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var c = j(a);
                    if ("none" === c.display) return d();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                        var o = g[m],
                            p = c[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = h && l,
                        y = b(c.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = b(c.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }

            var j, k, l, m = !1;
            return h
        }

        var f = "undefined" == typeof console ? c : function (a) {
                console.error(a)
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
    }(window),
    function (a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }

        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function (a) {
        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }

        var f, g = function () {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function (a, b) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function (a, b, c) {
        var d = {};
        d.extend = function (a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function (a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function (a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function (a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
            return a.indexOf(b)
        } : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function (a, b) {
            var c = d.indexOf(a, b);
            -1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
            return a instanceof HTMLElement
        } : function (a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function () {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }

            var b;
            return a
        }(), d.getParent = function (a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function (a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function (a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function (a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function () {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function () {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function (a) {
            return a.replace(/(.)([A-Z])/g, function (a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function (c, e) {
            b(function () {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function (a, b) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function (a, b, c, d, e) {
        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase()
            })
        }

        var i = a.getComputedStyle,
            j = i ? function (a) {
                return i(a, null)
            } : function (a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function () {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function () {
            this.size = c(this.element)
        }, g.prototype.css = function (a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function () {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function () {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function (a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function (a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function (a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function (a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function (a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function (a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function (a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function (a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function () {
            this.css(t)
        }, g.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function () {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function () {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function (a, b) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function (a, b, c, d, e, f) {
        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var h = a.console,
            i = a.jQuery,
            j = function () {
            },
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
            e.extend(this.options, a)
        }, g.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function (a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function (a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function () {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
            this.getSize()
        }, g.prototype.getSize = function () {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function (a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function (a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function (a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function (a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function (a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function (a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function () {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function (a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }

            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function (a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function (a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function (a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function (a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function (a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function (a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function () {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function () {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function () {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function () {
            function a() {
                b.resize(), delete b.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function () {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function (a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function (a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function (a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function (a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function (a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function (a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function (a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function (a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function (a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function () {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function (a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function (a, b) {
            function c() {
                g.apply(this, arguments)
            }

            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function (a, b) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function (a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function () {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                x: this.columnWidth * h,
                y: g
            }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function (a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function (a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function () {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function () {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    });
!function () {
    "use strict";

    function e(n) {
        return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.4", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = {
            elements: {},
            containers: []
        }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), O)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (O.tools.isNode(e.container)) return e.container;
            console.log('ScrollReveal: invalid container "' + e.container + '" provided.'), console.log("ScrollReveal: falling back to default container.")
        }
        return O.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function i() {
        return ++O.uid
    }

    function o(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config,
            i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = {
            target: e,
            config: t,
            interval: n
        };
        O.history.push(i)
    }

    function d() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", f), O.store.containers[e].addEventListener("resize", f);
            O.initialized || (window.addEventListener("scroll", f), window.addEventListener("resize", f), O.initialized = !0)
        }
        return O
    }

    function f() {
        S(y)
    }

    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function (o) {
            i = O.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e
        })
    }

    function y() {
        var e, t;
        u(), O.tools.forOwn(O.store.elements, function (n) {
            t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1)
        })
    }

    function m(e, t) {
        var n = 0,
            i = 0,
            o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
            started: new Date
        }, e.sequence.timer.clock = window.setTimeout(function () {
            o.blocked = !1, e.sequence.timer = null, f()
        }, Math.abs(o.interval) + i - n)
    }

    function p(e, t, n) {
        var i = 0,
            o = 0,
            r = "after";
        switch (e) {
            case "reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case "reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
            started: new Date
        }, t.timer.clock = window.setTimeout(function () {
            t.config[r](t.domEl), t.timer = null
        }, o - i)
    }

    function g(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return q(e) && !e.revealing && !e.disabled
    }

    function w(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen
    }

    function v(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return !t.active && e.config.reset && e.revealing && !e.disabled
        }
        return !q(e) && e.config.reset && e.revealing && !e.disabled
    }

    function b(e) {
        return {
            width: e.clientWidth,
            height: e.clientHeight
        }
    }

    function h(e) {
        if (e && e !== window.document.documentElement) {
            var t = x(e);
            return {
                x: e.scrollLeft + t.left,
                y: e.scrollTop + t.top
            }
        }
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }

    function x(e) {
        var t = 0,
            n = 0,
            i = e.offsetHeight,
            o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return {
            top: t,
            left: n,
            height: i,
            width: o
        }
    }

    function q(e) {
        function t() {
            var t = c + a * s,
                n = d + l * s,
                i = f - a * s,
                y = u - l * s,
                m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left,
                g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n > p && y < w
        }

        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position
        }

        var i = x(e.domEl),
            o = b(e.config.container),
            r = h(e.config.container),
            s = e.config.viewFactor,
            a = i.height,
            l = i.width,
            c = i.top,
            d = i.left,
            f = c + a,
            u = d + l;
        return t() || n()
    }

    function E() {
    }

    var O, S;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        beforeReveal: function (e) {
        },
        beforeReset: function (e) {
        },
        afterReveal: function (e) {
        },
        afterReset: function (e) {
        }
    }, e.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function (e, s, a, f) {
        var u, y, m, p, g, w;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return console.log('ScrollReveal: reveal on "' + e + '" failed, no elements found.'), O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = {
            id: w,
            interval: a,
            elemIds: [],
            active: !1
        });
        for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = {
            id: i(),
            domEl: y[v],
            seen: !1,
            revealing: !1
        }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = {
            id: g.id,
            index: g.elemIds.length
        }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
        return !f && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(d, 0)), O
    }, e.prototype.sync = function () {
        if (O.history.length && O.isSupported()) {
            for (var e = 0; e < O.history.length; e++) {
                var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0)
            }
            d()
        } else console.log("ScrollReveal: sync failed, no reveals found.");
        return O
    }, E.prototype.isObject = function (e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, E.prototype.isNode = function (e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, E.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e),
            n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, E.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, E.prototype.extend = function (e, t) {
        return this.forOwn(t, function (n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, E.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
    }, E.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, S = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}();
!function () {
    "use strict";

    function e(e) {
        e.fn.swiper = function (a) {
            var s;
            return e(this).each(function () {
                var e = new t(this, a);
                s || (s = e)
            }), s
        }
    }

    var a, t = function (e, s) {
        function r(e) {
            return Math.floor(e)
        }

        function i() {
            var e = T.params.autoplay,
                a = T.slides.eq(T.activeIndex);
            a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay), T.autoplayTimeoutId = setTimeout(function () {
                T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? s.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T))
            }, e)
        }

        function n(e, t) {
            var s = a(e.target);
            if (!s.is(t))
                if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) {
                    var r;
                    return s.parents().each(function (e, a) {
                        a === t && (r = t)
                    }), r ? t : void 0
                }
            if (0 !== s.length) return s[0]
        }

        function o(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                s = new t(function (e) {
                    e.forEach(function (e) {
                        T.onResize(!0), T.emit("onObserverUpdate", T, e)
                    })
                });
            s.observe(e, {
                attributes: "undefined" == typeof a.attributes || a.attributes,
                childList: "undefined" == typeof a.childList || a.childList,
                characterData: "undefined" == typeof a.characterData || a.characterData
            }), T.observers.push(s)
        }

        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a)) return !1;
            if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length) return;
                    var s = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        r = window.innerWidth,
                        i = window.innerHeight,
                        n = T.container.offset();
                    T.rtl && (n.left = n.left - T.container[0].scrollLeft);
                    for (var o = [
                        [n.left, n.top],
                        [n.left + T.width, n.top],
                        [n.left, n.top + T.height],
                        [n.left + T.width, n.top + T.height]
                    ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + r && p[1] >= s.top && p[1] <= s.top + i && (t = !0)
                    }
                    if (!t) return
                }
                T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(), (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && T.slideNext(), 38 === a && T.slidePrev())
            }
        }

        function p() {
            var e = "onwheel",
                a = e in document;
            if (!a) {
                var t = document.createElement("div");
                t.setAttribute(e, "return;"), a = "function" == typeof t[e]
            }
            return !a && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = 0,
                t = T.rtl ? -1 : 1,
                s = u(e);
            if (T.params.mousewheelForceToAxis)
                if (T.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;
                    a = s.pixelX * t
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;
                    a = s.pixelY
                }
            else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
            if (0 !== a) {
                if (T.params.mousewheelInvert && (a = -a), T.params.freeMode) {
                    var r = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity,
                        i = T.isBeginning,
                        n = T.isEnd;
                    if (r >= T.minTranslate() && (r = T.minTranslate()), r <= T.maxTranslate() && (r = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(r), T.updateProgress(), T.updateActiveIndex(), (!i && T.isBeginning || !n && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function () {
                        T.slideReset()
                    }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), T.emit("onScroll", T, e), T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(), 0 === r || r === T.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (T.isEnd && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges) return !0
                            } else T.slideNext(), T.emit("onScroll", T, e);
                        else if (T.isBeginning && !T.params.loop || T.animating) {
                            if (T.params.mousewheelReleaseOnEdges) return !0
                        } else T.slidePrev(), T.emit("onScroll", T, e);
                    T.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function u(e) {
            var a = 10,
                t = 40,
                s = 800,
                r = 0,
                i = 0,
                n = 0,
                o = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (r = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (r = i, i = 0), n = r * a, o = i * a, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= t, o *= t) : (n *= s, o *= s)), n && !r && (r = n < 1 ? -1 : 1), o && !i && (i = o < 1 ? -1 : 1), {
                spinX: r,
                spinY: i,
                pixelX: n,
                pixelY: o
            }
        }

        function m(e, t) {
            e = a(e);
            var s, r, i, n = T.rtl ? -1 : 1;
            s = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), i = e.attr("data-swiper-parallax-y"), r || i ? (r = r || "0", i = i || "0") : T.isHorizontal() ? (r = s, i = "0") : (i = s, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t * n + "%" : r * t * n + "px", i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", e.transform("translate3d(" + r + ", " + i + ",0px)")
        }

        function c(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }

        if (!(this instanceof t)) return new t(e, s);
        var g = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            h = s && s.virtualTranslate;
        s = s || {};
        var f = {};
        for (var v in s)
            if ("object" != typeof s[v] || null === s[v] || (s[v].nodeType || s[v] === window || s[v] === document || "undefined" != typeof Dom7 && s[v] instanceof Dom7 || "undefined" != typeof jQuery && s[v] instanceof jQuery)) f[v] = s[v];
            else {
                f[v] = {};
                for (var w in s[v]) f[v][w] = s[v][w]
            }
        for (var y in g)
            if ("undefined" == typeof s[y]) s[y] = g[y];
            else if ("object" == typeof s[y])
                for (var x in g[y]) "undefined" == typeof s[y][x] && (s[y][x] = g[y][x]);
        var T = this;
        if (T.params = s, T.originalParams = f, T.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (T.$ = a, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function () {
            if (!T.params.breakpoints) return !1;
            var e, a = !1,
                t = [];
            for (e in T.params.breakpoints) T.params.breakpoints.hasOwnProperty(e) && t.push(e);
            t.sort(function (e, a) {
                return parseInt(e, 10) > parseInt(a, 10)
            });
            for (var s = 0; s < t.length; s++) e = t[s], e >= window.innerWidth && !a && (a = e);
            return a || "max"
        }, T.setBreakpoint = function () {
            var e = T.getActiveBreakpoint();
            if (e && T.currentBreakpoint !== e) {
                var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams,
                    t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;
                for (var s in a) T.params[s] = a[s];
                T.currentBreakpoint = e, t && T.destroyLoop && T.reLoop(!0)
            }
        }, T.params.breakpoints && T.setBreakpoint(), T.container = a(e), 0 !== T.container.length)) {
            if (T.container.length > 1) {
                var b = [];
                return T.container.each(function () {
                    b.push(new t(this, s))
                }), b
            }
            T.container[0].swiper = T, T.container.data("swiper", T), T.classNames.push(T.params.containerModifierClass + T.params.direction), T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"), T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"), T.params.slidesPerColumn = 1), T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"), (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0), T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"), "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect), "cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0, T.params.setWrapperSize = !1), "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, T.params.setWrapperSize = !1, "undefined" == typeof h && (T.params.virtualTranslate = !0)), T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1), T.wrapper = T.container.children("." + T.params.wrapperClass), T.params.pagination && (T.paginationContainer = a(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)), (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = a(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = a(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))), T.isHorizontal = function () {
                return "horizontal" === T.params.direction
            }, T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")), T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"), T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")), T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"), T.device.android && T.classNames.push(T.params.containerModifierClass + "android"), T.container.addClass(T.classNames.join(" ")), T.translate = 0, T.progress = 0, T.velocity = 0, T.lockSwipeToNext = function () {
                T.params.allowSwipeToNext = !1, T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }, T.lockSwipeToPrev = function () {
                T.params.allowSwipeToPrev = !1, T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }, T.lockSwipes = function () {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1, T.params.grabCursor && T.unsetGrabCursor()
            }, T.unlockSwipeToNext = function () {
                T.params.allowSwipeToNext = !0, T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor()
            }, T.unlockSwipeToPrev = function () {
                T.params.allowSwipeToPrev = !0, T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor()
            }, T.unlockSwipes = function () {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0, T.params.grabCursor && T.setGrabCursor()
            }, T.setGrabCursor = function (e) {
                T.container[0].style.cursor = "move", T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", T.container[0].style.cursor = e ? "grabbing" : "grab"
            }, T.unsetGrabCursor = function () {
                T.container[0].style.cursor = ""
            }, T.params.grabCursor && T.setGrabCursor(), T.imagesToLoad = [], T.imagesLoaded = 0, T.loadImage = function (e, a, t, s, r, i) {
                function n() {
                    i && i()
                }

                var o;
                e.complete && r ? n() : a ? (o = new window.Image, o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n()
            }, T.preloadImages = function () {
                function e() {
                    "undefined" != typeof T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)))
                }

                T.imagesToLoad = T.container.find("img");
                for (var a = 0; a < T.imagesToLoad.length; a++) T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e)
            }, T.autoplayTimeoutId = void 0, T.autoplaying = !1, T.autoplayPaused = !1, T.startAutoplay = function () {
                return "undefined" == typeof T.autoplayTimeoutId && (!!T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void i())))
            }, T.stopAutoplay = function (e) {
                T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T))
            }, T.pauseAutoplay = function (e) {
                T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === e ? (T.autoplayPaused = !1, i()) : T.wrapper.transitionEnd(function () {
                    T && (T.autoplayPaused = !1, T.autoplaying ? i() : T.stopAutoplay())
                }))
            }, T.minTranslate = function () {
                return -T.snapGrid[0]
            }, T.maxTranslate = function () {
                return -T.snapGrid[T.snapGrid.length - 1]
            }, T.updateAutoHeight = function () {
                var e, a = [],
                    t = 0;
                if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
                        var s = T.activeIndex + e;
                        if (s > T.slides.length) break;
                        a.push(T.slides.eq(s)[0])
                    } else a.push(T.slides.eq(T.activeIndex)[0]);
                for (e = 0; e < a.length; e++)
                    if ("undefined" != typeof a[e]) {
                        var r = a[e].offsetHeight;
                        t = r > t ? r : t
                    }
                t && T.wrapper.css("height", t + "px")
            }, T.updateContainerSize = function () {
                var e, a;
                e = "undefined" != typeof T.params.width ? T.params.width : T.container[0].clientWidth, a = "undefined" != typeof T.params.height ? T.params.height : T.container[0].clientHeight, 0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = e, T.height = a, T.size = T.isHorizontal() ? T.width : T.height)
            }, T.updateSlidesSize = function () {
                T.slides = T.wrapper.children("." + T.params.slideClass), T.snapGrid = [], T.slidesGrid = [], T.slidesSizesGrid = [];
                var e, a = T.params.spaceBetween,
                    t = -T.params.slidesOffsetBefore,
                    s = 0,
                    i = 0;
                if ("undefined" != typeof T.size) {
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size), T.virtualSize = -a, T.rtl ? T.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : T.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var n;
                    T.params.slidesPerColumn > 1 && (n = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (n = Math.max(n, T.params.slidesPerView * T.params.slidesPerColumn)));
                    var o, l = T.params.slidesPerColumn,
                        p = n / l,
                        d = p - (T.params.slidesPerColumn * p - T.slides.length);
                    for (e = 0; e < T.slides.length; e++) {
                        o = 0;
                        var u = T.slides.eq(e);
                        if (T.params.slidesPerColumn > 1) {
                            var m, c, g;
                            "column" === T.params.slidesPerColumnFill ? (c = Math.floor(e / l), g = e - c * l, (c > d || c === d && g === l - 1) && ++g >= l && (g = 0, c++), m = c + g * n / l, u.css({
                                "-webkit-box-ordinal-group": m,
                                "-moz-box-ordinal-group": m,
                                "-ms-flex-order": m,
                                "-webkit-order": m,
                                order: m
                            })) : (g = Math.floor(e / p), c = e - g * p), u.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== g && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", c).attr("data-swiper-row", g)
                        }
                        "none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), T.params.roundLengths && (o = r(o))) : (o = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView, T.params.roundLengths && (o = r(o)), T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"), T.slides[e].swiperSlideSize = o, T.slidesSizesGrid.push(o), T.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === e && (t = t - T.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % T.params.slidesPerGroup === 0 && T.snapGrid.push(t), T.slidesGrid.push(t)) : (i % T.params.slidesPerGroup === 0 && T.snapGrid.push(t), T.slidesGrid.push(t), t = t + o + a), T.virtualSize += o + a, s = o, i++)
                    }
                    T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                    var h;
                    if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }) : T.wrapper.css({
                        height: T.virtualSize + T.params.spaceBetween + "px"
                    })), T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * n, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.isHorizontal() ? T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }) : T.wrapper.css({
                        height: T.virtualSize + T.params.spaceBetween + "px"
                    }), T.params.centeredSlides)) {
                        for (h = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && h.push(T.snapGrid[e]);
                        T.snapGrid = h
                    }
                    if (!T.params.centeredSlides) {
                        for (h = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] <= T.virtualSize - T.size && h.push(T.snapGrid[e]);
                        T.snapGrid = h, Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                    }
                    0 === T.snapGrid.length && (T.snapGrid = [0]), 0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                        marginLeft: a + "px"
                    }) : T.slides.css({
                        marginRight: a + "px"
                    }) : T.slides.css({
                        marginBottom: a + "px"
                    })), T.params.watchSlidesProgress && T.updateSlidesOffset()
                }
            }, T.updateSlidesOffset = function () {
                for (var e = 0; e < T.slides.length; e++) T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
            }, T.currentSlidesPerView = function () {
                var e, a, t = 1;
                if (T.params.centeredSlides) {
                    var s, r = T.slides[T.activeIndex].swiperSlideSize;
                    for (e = T.activeIndex + 1; e < T.slides.length; e++) T.slides[e] && !s && (r += T.slides[e].swiperSlideSize, t++, r > T.size && (s = !0));
                    for (a = T.activeIndex - 1; a >= 0; a--) T.slides[a] && !s && (r += T.slides[a].swiperSlideSize, t++, r > T.size && (s = !0))
                } else
                    for (e = T.activeIndex + 1; e < T.slides.length; e++) T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
                return t
            }, T.updateSlidesProgress = function (e) {
                if ("undefined" == typeof e && (e = T.translate || 0), 0 !== T.slides.length) {
                    "undefined" == typeof T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                    var a = -e;
                    T.rtl && (a = e), T.slides.removeClass(T.params.slideVisibleClass);
                    for (var t = 0; t < T.slides.length; t++) {
                        var s = T.slides[t],
                            r = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + T.params.spaceBetween);
                        if (T.params.watchSlidesVisibility) {
                            var i = -(a - s.swiperSlideOffset),
                                n = i + T.slidesSizesGrid[t],
                                o = i >= 0 && i < T.size || n > 0 && n <= T.size || i <= 0 && n >= T.size;
                            o && T.slides.eq(t).addClass(T.params.slideVisibleClass)
                        }
                        s.progress = T.rtl ? -r : r
                    }
                }
            }, T.updateProgress = function (e) {
                "undefined" == typeof e && (e = T.translate || 0);
                var a = T.maxTranslate() - T.minTranslate(),
                    t = T.isBeginning,
                    s = T.isEnd;
                0 === a ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1), T.isBeginning && !t && T.emit("onReachBeginning", T), T.isEnd && !s && T.emit("onReachEnd", T), T.params.watchSlidesProgress && T.updateSlidesProgress(e), T.emit("onProgress", T, T.progress)
            }, T.updateActiveIndex = function () {
                var e, a, t, s = T.rtl ? T.translate : -T.translate;
                for (a = 0; a < T.slidesGrid.length; a++) "undefined" != typeof T.slidesGrid[a + 1] ? s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a : s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] && (e = a + 1) : s >= T.slidesGrid[a] && (e = a);
                T.params.normalizeSlideIndex && (e < 0 || "undefined" == typeof e) && (e = 0), t = Math.floor(e / T.params.slidesPerGroup), t >= T.snapGrid.length && (t = T.snapGrid.length - 1), e !== T.activeIndex && (T.snapIndex = t, T.previousIndex = T.activeIndex, T.activeIndex = e, T.updateClasses(), T.updateRealIndex())
            }, T.updateRealIndex = function () {
                T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
            }, T.updateClasses = function () {
                T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                var e = T.slides.eq(T.activeIndex);
                e.addClass(T.params.slideActiveClass), s.loop && (e.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                var t = e.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                T.params.loop && 0 === t.length && (t = T.slides.eq(0), t.addClass(T.params.slideNextClass));
                var r = e.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                if (T.params.loop && 0 === r.length && (r = T.slides.eq(-1), r.addClass(T.params.slidePrevClass)), s.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass), r.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)), T.paginationContainer && T.paginationContainer.length > 0) {
                    var i,
                        n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                    if (T.params.loop ? (i = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup), i > T.slides.length - 1 - 2 * T.loopedSlides && (i -= T.slides.length - 2 * T.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== T.params.paginationType && (i = n + i)) : i = "undefined" != typeof T.snapIndex ? T.snapIndex : T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function () {
                        a(this).index() === i && a(this).addClass(T.params.bulletActiveClass)
                    }) : T.bullets.eq(i).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(i + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)), "progress" === T.params.paginationType) {
                        var o = (i + 1) / n,
                            l = o,
                            p = 1;
                        T.isHorizontal() || (p = o, l = 1), T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                    }
                    "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, i + 1, n)), T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                }
                T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
            }, T.updatePagination = function () {
                if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === T.params.paginationType) {
                        for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++) e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                        T.paginationContainer.html(e), T.bullets = T.paginationContainer.find("." + T.params.bulletClass), T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                    }
                    "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(e)), "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(e)), "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                }
            }, T.update = function (e) {
                function a() {
                    T.rtl ? -T.translate : T.translate;
                    s = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()), T.setWrapperTranslate(s), T.updateActiveIndex(), T.updateClasses()
                }

                if (T)
                    if (T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), e) {
                        var t, s;
                        T.controller && T.controller.spline && (T.controller.spline = void 0), T.params.freeMode ? (a(), T.params.autoHeight && T.updateAutoHeight()) : (t = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0), t || a())
                    } else T.params.autoHeight && T.updateAutoHeight()
            }, T.onResize = function (e) {
                T.params.breakpoints && T.setBreakpoint();
                var a = T.params.allowSwipeToPrev,
                    t = T.params.allowSwipeToNext;
                T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0, T.updateContainerSize(), T.updateSlidesSize(), ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), T.controller && T.controller.spline && (T.controller.spline = void 0);
                var s = !1;
                if (T.params.freeMode) {
                    var r = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                    T.setWrapperTranslate(r), T.updateActiveIndex(), T.updateClasses(), T.params.autoHeight && T.updateAutoHeight()
                } else T.updateClasses(), s = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                T.params.lazyLoading && !s && T.lazy && T.lazy.load(), T.params.allowSwipeToPrev = a, T.params.allowSwipeToNext = t
            }, T.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), T.touchEvents = {
                start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction), T.initEvents = function (e) {
                var a = e ? "off" : "on",
                    t = e ? "removeEventListener" : "addEventListener",
                    r = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
                    i = T.support.touch ? r : document,
                    n = !!T.params.nested;
                if (T.browser.ie) r[t](T.touchEvents.start, T.onTouchStart, !1), i[t](T.touchEvents.move, T.onTouchMove, n), i[t](T.touchEvents.end, T.onTouchEnd, !1);
                else {
                    if (T.support.touch) {
                        var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r[t](T.touchEvents.start, T.onTouchStart, o), r[t](T.touchEvents.move, T.onTouchMove, n), r[t](T.touchEvents.end, T.onTouchEnd, o)
                    }
                    (s.simulateTouch && !T.device.ios && !T.device.android || s.simulateTouch && !T.support.touch && T.device.ios) && (r[t]("mousedown", T.onTouchStart, !1), document[t]("mousemove", T.onTouchMove, n), document[t]("mouseup", T.onTouchEnd, !1))
                }
                window[t]("resize", T.onResize), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)), T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)), (T.params.preventClicks || T.params.preventClicksPropagation) && r[t]("click", T.preventClicks, !0);
            }, T.attachEvents = function () {
                T.initEvents()
            }, T.detachEvents = function () {
                T.initEvents(!0)
            }, T.allowClick = !0, T.preventClicks = function (e) {
                T.allowClick || (T.params.preventClicks && e.preventDefault(), T.params.preventClicksPropagation && T.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, T.onClickNext = function (e) {
                e.preventDefault(), T.isEnd && !T.params.loop || T.slideNext()
            }, T.onClickPrev = function (e) {
                e.preventDefault(), T.isBeginning && !T.params.loop || T.slidePrev()
            }, T.onClickIndex = function (e) {
                e.preventDefault();
                var t = a(this).index() * T.params.slidesPerGroup;
                T.params.loop && (t += T.loopedSlides), T.slideTo(t)
            }, T.updateClickedSlide = function (e) {
                var t = n(e, "." + T.params.slideClass),
                    s = !1;
                if (t)
                    for (var r = 0; r < T.slides.length; r++) T.slides[r] === t && (s = !0);
                if (!t || !s) return T.clickedSlide = void 0, void(T.clickedIndex = void 0);
                if (T.clickedSlide = t, T.clickedIndex = a(t).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                    var i, o = T.clickedIndex,
                        l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
                    if (T.params.loop) {
                        if (T.animating) return;
                        i = parseInt(a(T.clickedSlide).attr("data-swiper-slide-index"), 10), T.params.centeredSlides ? o < T.loopedSlides - l / 2 || o > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(), o = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                            T.slideTo(o)
                        }, 0)) : T.slideTo(o) : o > T.slides.length - l ? (T.fixLoop(), o = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                            T.slideTo(o)
                        }, 0)) : T.slideTo(o)
                    } else T.slideTo(o)
                }
            };
            var S, C, z, M, P, E, I, k, D, L, B = "input, select, textarea, button, video",
                H = Date.now(),
                G = [];
            T.animating = !1, T.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var X, Y;
            T.onTouchStart = function (e) {
                if (e.originalEvent && (e = e.originalEvent), X = "touchstart" === e.type, X || !("which" in e) || 3 !== e.which) {
                    if (T.params.noSwiping && n(e, "." + T.params.noSwipingClass)) return void(T.allowClick = !0);
                    if (!T.params.swipeHandler || n(e, T.params.swipeHandler)) {
                        var t = T.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            s = T.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
                            if (S = !0, C = !1, z = !0, P = void 0, Y = void 0, T.touches.startX = t, T.touches.startY = s, M = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (k = !1), "touchstart" !== e.type) {
                                var r = !0;
                                a(e.target).is(B) && (r = !1), document.activeElement && a(document.activeElement).is(B) && document.activeElement.blur(), r && e.preventDefault()
                            }
                            T.emit("onTouchStart", T, e)
                        }
                    }
                }
            }, T.onTouchMove = function (e) {
                if (e.originalEvent && (e = e.originalEvent), !X || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return T.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(T.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (T.params.onlyExternal) return T.allowClick = !1, void(S && (T.touches.startX = T.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, T.touches.startY = T.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, M = Date.now()));
                    if (X && T.params.touchReleaseOnEdges && !T.params.loop)
                        if (T.isHorizontal()) {
                            if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate()) return
                        } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate()) return;
                    if (X && document.activeElement && e.target === document.activeElement && a(e.target).is(B)) return C = !0, void(T.allowClick = !1);
                    if (z && T.emit("onTouchMove", T, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                        if (T.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, T.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof P) {
                            var t;
                            T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? P = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI, P = T.isHorizontal() ? t > T.params.touchAngle : 90 - t > T.params.touchAngle)
                        }
                        if (P && T.emit("onTouchMoveOpposite", T, e), "undefined" == typeof Y && T.browser.ieTouch && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (Y = !0)), S) {
                            if (P) return void(S = !1);
                            if (Y || !T.browser.ieTouch) {
                                T.allowClick = !1, T.emit("onSliderMove", T, e), e.preventDefault(), T.params.touchMoveStopPropagation && !T.params.nested && e.stopPropagation(), C || (s.loop && T.fixLoop(), I = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), L = !1, !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)), C = !0;
                                var r = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                r *= T.params.touchRatio, T.rtl && (r = -r), T.swipeDirection = r > 0 ? "prev" : "next", E = r + I;
                                var i = !0;
                                if (r > 0 && E > T.minTranslate() ? (i = !1, T.params.resistance && (E = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + I + r, T.params.resistanceRatio))) : r < 0 && E < T.maxTranslate() && (i = !1, T.params.resistance && (E = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - I - r, T.params.resistanceRatio))), i && (e.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && E < I && (E = I), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && E > I && (E = I), T.params.threshold > 0) {
                                    if (!(Math.abs(r) > T.params.threshold || k)) return void(E = I);
                                    if (!k) return k = !0, T.touches.startX = T.touches.currentX, T.touches.startY = T.touches.currentY, E = I, void(T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                }
                                T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === G.length && G.push({
                                    position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                    time: M
                                }), G.push({
                                    position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), T.updateProgress(E), T.setWrapperTranslate(E))
                            }
                        }
                    }
                }
            }, T.onTouchEnd = function (e) {
                if (e.originalEvent && (e = e.originalEvent), z && T.emit("onTouchEnd", T, e), z = !1, S) {
                    T.params.grabCursor && C && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);
                    var t = Date.now(),
                        s = t - M;
                    if (T.allowClick && (T.updateClickedSlide(e), T.emit("onTap", T, e), s < 300 && t - H > 300 && (D && clearTimeout(D), D = setTimeout(function () {
                        T && (T.params.paginationHide && T.paginationContainer.length > 0 && !a(e.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, e))
                    }, 300)), s < 300 && t - H < 300 && (D && clearTimeout(D), T.emit("onDoubleTap", T, e))), H = Date.now(), setTimeout(function () {
                        T && (T.allowClick = !0)
                    }, 0), !S || !C || !T.swipeDirection || 0 === T.touches.diff || E === I) return void(S = C = !1);
                    S = C = !1;
                    var r;
                    if (r = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -E, T.params.freeMode) {
                        if (r < -T.minTranslate()) return void T.slideTo(T.activeIndex);
                        if (r > -T.maxTranslate()) return void(T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                        if (T.params.freeModeMomentum) {
                            if (G.length > 1) {
                                var i = G.pop(),
                                    n = G.pop(),
                                    o = i.position - n.position,
                                    l = i.time - n.time;
                                T.velocity = o / l, T.velocity = T.velocity / 2, Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (T.velocity = 0)
                            } else T.velocity = 0;
                            T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio, G.length = 0;
                            var p = 1e3 * T.params.freeModeMomentumRatio,
                                d = T.velocity * p,
                                u = T.translate + d;
                            T.rtl && (u = -u);
                            var m, c = !1,
                                g = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                            if (u < T.maxTranslate()) T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -g && (u = T.maxTranslate() - g), m = T.maxTranslate(), c = !0, L = !0) : u = T.maxTranslate();
                            else if (u > T.minTranslate()) T.params.freeModeMomentumBounce ? (u - T.minTranslate() > g && (u = T.minTranslate() + g), m = T.minTranslate(), c = !0, L = !0) : u = T.minTranslate();
                            else if (T.params.freeModeSticky) {
                                var h, f = 0;
                                for (f = 0; f < T.snapGrid.length; f += 1)
                                    if (T.snapGrid[f] > -u) {
                                        h = f;
                                        break
                                    }
                                u = Math.abs(T.snapGrid[h] - u) < Math.abs(T.snapGrid[h - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[h] : T.snapGrid[h - 1], T.rtl || (u = -u)
                            }
                            if (0 !== T.velocity) p = T.rtl ? Math.abs((-u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);
                            else if (T.params.freeModeSticky) return void T.slideReset();
                            T.params.freeModeMomentumBounce && c ? (T.updateProgress(m), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function () {
                                T && L && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(m), T.wrapper.transitionEnd(function () {
                                    T && T.onTransitionEnd()
                                }))
                            })) : T.velocity ? (T.updateProgress(u), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
                                T && T.onTransitionEnd()
                            }))) : T.updateProgress(u), T.updateActiveIndex()
                        }
                        return void((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()))
                    }
                    var v, w = 0,
                        y = T.slidesSizesGrid[0];
                    for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup) "undefined" != typeof T.slidesGrid[v + T.params.slidesPerGroup] ? r >= T.slidesGrid[v] && r < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v, y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : r >= T.slidesGrid[v] && (w = v, y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                    var x = (r - T.slidesGrid[w]) / y;
                    if (s > T.params.longSwipesMs) {
                        if (!T.params.longSwipes) return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)), "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w))
                    } else {
                        if (!T.params.shortSwipes) return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup), "prev" === T.swipeDirection && T.slideTo(w)
                    }
                }
            }, T._slideTo = function (e, a) {
                return T.slideTo(e, a, !0, !0)
            }, T.slideTo = function (e, a, t, s) {
                "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), e < 0 && (e = 0), T.snapIndex = Math.floor(e / T.params.slidesPerGroup), T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                var r = -T.snapGrid[T.snapIndex];
                if (T.params.autoplay && T.autoplaying && (s || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()), T.updateProgress(r), T.params.normalizeSlideIndex)
                    for (var i = 0; i < T.slidesGrid.length; i++) -Math.floor(100 * r) >= Math.floor(100 * T.slidesGrid[i]) && (e = i);
                return !(!T.params.allowSwipeToNext && r < T.translate && r < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && r > T.translate && r > T.maxTranslate() && (T.activeIndex || 0) !== e) && ("undefined" == typeof a && (a = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = e, T.updateRealIndex(), T.rtl && -r === T.translate || !T.rtl && r === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(r), !1) : (T.updateClasses(), T.onTransitionStart(t), 0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(r), T.setWrapperTransition(0), T.onTransitionEnd(t)) : (T.setWrapperTranslate(r), T.setWrapperTransition(a), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
                    T && T.onTransitionEnd(t)
                }))), !0)))
            }, T.onTransitionStart = function (e) {
                "undefined" == typeof e && (e = !0), T.params.autoHeight && T.updateAutoHeight(), T.lazy && T.lazy.onTransitionStart(), e && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
            }, T.onTransitionEnd = function (e) {
                T.animating = !1, T.setWrapperTransition(0), "undefined" == typeof e && (e = !0), T.lazy && T.lazy.onTransitionEnd(), e && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))), T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex), T.params.hashnav && T.hashnav && T.hashnav.setHash()
            }, T.slideNext = function (e, a, t) {
                if (T.params.loop) {
                    if (T.animating) return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
                }
                return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
            }, T._slideNext = function (e) {
                return T.slideNext(!0, e, !0)
            }, T.slidePrev = function (e, a, t) {
                if (T.params.loop) {
                    if (T.animating) return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex - 1, a, e, t)
                }
                return T.slideTo(T.activeIndex - 1, a, e, t)
            }, T._slidePrev = function (e) {
                return T.slidePrev(!0, e, !0)
            }, T.slideReset = function (e, a, t) {
                return T.slideTo(T.activeIndex, a, e)
            }, T.disableTouchControl = function () {
                return T.params.onlyExternal = !0, !0
            }, T.enableTouchControl = function () {
                return T.params.onlyExternal = !1, !0
            }, T.setWrapperTransition = function (e, a) {
                T.wrapper.transition(e), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e), T.params.parallax && T.parallax && T.parallax.setTransition(e), T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e), T.params.control && T.controller && T.controller.setTransition(e, a), T.emit("onSetTransition", T, e)
            }, T.setWrapperTranslate = function (e, a, t) {
                var s = 0,
                    i = 0,
                    n = 0;
                T.isHorizontal() ? s = T.rtl ? -e : e : i = e, T.params.roundLengths && (s = r(s), i = r(i)), T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + s + "px, " + i + "px, " + n + "px)") : T.wrapper.transform("translate(" + s + "px, " + i + "px)")), T.translate = T.isHorizontal() ? s : i;
                var o, l = T.maxTranslate() - T.minTranslate();
                o = 0 === l ? 0 : (e - T.minTranslate()) / l, o !== T.progress && T.updateProgress(e), a && T.updateActiveIndex(), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate), T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate), T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate), T.params.control && T.controller && T.controller.setTranslate(T.translate, t), T.emit("onSetTranslate", T, T.translate)
            }, T.getTranslate = function (e, a) {
                var t, s, r, i;
                return "undefined" == typeof a && (a = "x"), T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
                    return e.replace(",", ".")
                }).join(", ")), i = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), T.rtl && s && (s = -s), s || 0)
            }, T.getWrapperTranslate = function (e) {
                return "undefined" == typeof e && (e = T.isHorizontal() ? "x" : "y"), T.getTranslate(T.wrapper[0], e)
            }, T.observers = [], T.initObservers = function () {
                if (T.params.observeParents)
                    for (var e = T.container.parents(), a = 0; a < e.length; a++) o(e[a]);
                o(T.container[0], {
                    childList: !1
                }), o(T.wrapper[0], {
                    attributes: !1
                })
            }, T.disconnectObservers = function () {
                for (var e = 0; e < T.observers.length; e++) T.observers[e].disconnect();
                T.observers = []
            }, T.createLoop = function () {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                var e = T.wrapper.children("." + T.params.slideClass);
                "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = e.length), T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10), T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides, T.loopedSlides > e.length && (T.loopedSlides = e.length);
                var t, s = [],
                    r = [];
                for (e.each(function (t, i) {
                    var n = a(this);
                    t < T.loopedSlides && r.push(i), t < e.length && t >= e.length - T.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                }), t = 0; t < r.length; t++) T.wrapper.append(a(r[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                for (t = s.length - 1; t >= 0; t--) T.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
            }, T.destroyLoop = function () {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(), T.slides.removeAttr("data-swiper-slide-index")
            }, T.reLoop = function (e) {
                var a = T.activeIndex - T.loopedSlides;
                T.destroyLoop(), T.createLoop(), T.updateSlidesSize(), e && T.slideTo(a + T.loopedSlides, 0, !1)
            }, T.fixLoop = function () {
                var e;
                T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex, e += T.loopedSlides, T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides, e += T.loopedSlides, T.slideTo(e, 0, !1, !0))
            }, T.appendSlide = function (e) {
                if (T.params.loop && T.destroyLoop(), "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++) e[a] && T.wrapper.append(e[a]);
                else T.wrapper.append(e);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0)
            }, T.prependSlide = function (e) {
                T.params.loop && T.destroyLoop();
                var a = T.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++) e[t] && T.wrapper.prepend(e[t]);
                    a = T.activeIndex + e.length
                } else T.wrapper.prepend(e);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.slideTo(a, 0, !1)
            }, T.removeSlide = function (e) {
                T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));
                var a, t = T.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var s = 0; s < e.length; s++) a = e[s], T.slides[a] && T.slides.eq(a).remove(), a < t && t--;
                    t = Math.max(t, 0)
                } else a = e, T.slides[a] && T.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1)
            }, T.removeAllSlides = function () {
                for (var e = [], a = 0; a < T.slides.length; a++) e.push(a);
                T.removeSlide(e)
            }, T.effects = {
                fade: {
                    setTranslate: function () {
                        for (var e = 0; e < T.slides.length; e++) {
                            var a = T.slides.eq(e),
                                t = a[0].swiperSlideOffset,
                                s = -t;
                            T.params.virtualTranslate || (s -= T.translate);
                            var r = 0;
                            T.isHorizontal() || (r = s, s = 0);
                            var i = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: i
                            }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function (e) {
                        if (T.slides.transition(e), T.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            T.slides.transitionEnd(function () {
                                if (!a && T) {
                                    a = !0, T.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) T.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function () {
                        for (var e = 0; e < T.slides.length; e++) {
                            var t = T.slides.eq(e),
                                s = t[0].progress;
                            T.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                            var r = t[0].swiperSlideOffset,
                                i = -180 * s,
                                n = i,
                                o = 0,
                                l = -r,
                                p = 0;
                            if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + T.slides.length, T.params.flip.slideShadows) {
                                var d = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    u = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0))
                            }
                            t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                        }
                    },
                    setTransition: function (e) {
                        if (T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), T.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            T.slides.eq(T.activeIndex).transitionEnd(function () {
                                if (!t && T && a(this).hasClass(T.params.slideActiveClass)) {
                                    t = !0, T.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < e.length; s++) T.wrapper.trigger(e[s])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function () {
                        var e, t = 0;
                        T.params.cube.shadow && (T.isHorizontal() ? (e = T.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(e)), e.css({
                            height: T.width + "px"
                        })) : (e = T.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), T.container.append(e))));
                        for (var s = 0; s < T.slides.length; s++) {
                            var r = T.slides.eq(s),
                                i = 90 * s,
                                n = Math.floor(i / 360);
                            T.rtl && (i = -i, n = Math.floor(-i / 360));
                            var o = Math.max(Math.min(r[0].progress, 1), -1),
                                l = 0,
                                p = 0,
                                d = 0;
                            s % 4 === 0 ? (l = 4 * -n * T.size, d = 0) : (s - 1) % 4 === 0 ? (l = 0, d = 4 * -n * T.size) : (s - 2) % 4 === 0 ? (l = T.size + 4 * n * T.size, d = T.size) : (s - 3) % 4 === 0 && (l = -T.size, d = 3 * T.size + 4 * T.size * n), T.rtl && (l = -l), T.isHorizontal() || (p = l, l = 0);
                            var u = "rotateX(" + (T.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (T.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                            if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, T.rtl && (t = 90 * -s - 90 * o)), r.transform(u), T.params.cube.slideShadows) {
                                var m = T.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                    c = T.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), r.append(m)), 0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(c)), m.length && (m[0].style.opacity = Math.max(-o, 0)), c.length && (c[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (T.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "transform-origin": "50% 50% -" + T.size / 2 + "px"
                        }), T.params.cube.shadow)
                            if (T.isHorizontal()) e.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                            else {
                                var g = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                    h = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2),
                                    f = T.params.cube.shadowScale,
                                    v = T.params.cube.shadowScale / h,
                                    w = T.params.cube.shadowOffset;
                                e.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                            }
                        var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                        T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t : 0) + "deg)")
                    },
                    setTransition: function (e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function () {
                        for (var e = T.translate, t = T.isHorizontal() ? -e + T.width / 2 : -e + T.height / 2, s = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, r = T.params.coverflow.depth, i = 0, n = T.slides.length; i < n; i++) {
                            var o = T.slides.eq(i),
                                l = T.slidesSizesGrid[i],
                                p = o[0].swiperSlideOffset,
                                d = (t - p - l / 2) / l * T.params.coverflow.modifier,
                                u = T.isHorizontal() ? s * d : 0,
                                m = T.isHorizontal() ? 0 : s * d,
                                c = -r * Math.abs(d),
                                g = T.isHorizontal() ? 0 : T.params.coverflow.stretch * d,
                                h = T.isHorizontal() ? T.params.coverflow.stretch * d : 0;
                            Math.abs(h) < .001 && (h = 0), Math.abs(g) < .001 && (g = 0), Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0), Math.abs(m) < .001 && (m = 0);
                            var f = "translate3d(" + h + "px," + g + "px," + c + "px)  rotateX(" + m + "deg) rotateY(" + u + "deg)";
                            if (o.transform(f), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, T.params.coverflow.slideShadows) {
                                var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                    w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (T.browser.ie) {
                            var y = T.wrapper[0].style;
                            y.perspectiveOrigin = t + "px 50%"
                        }
                    },
                    setTransition: function (e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, T.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function (e, t) {
                    if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== T.slides.length)) {
                        var s = T.slides.eq(e),
                            r = s.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                        !s.hasClass(T.params.lazyLoadingClass) || s.hasClass(T.params.lazyStatusLoadedClass) || s.hasClass(T.params.lazyStatusLoadingClass) || (r = r.add(s[0])), 0 !== r.length && r.each(function () {
                            var e = a(this);
                            e.addClass(T.params.lazyStatusLoadingClass);
                            var r = e.attr("data-background"),
                                i = e.attr("data-src"),
                                n = e.attr("data-srcset"),
                                o = e.attr("data-sizes");
                            T.loadImage(e[0], i || r, n, o, !1, function () {
                                if (r ? (e.css("background-image", 'url("' + r + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass), s.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(), T.params.loop && t) {
                                    var a = s.attr("data-swiper-slide-index");
                                    if (s.hasClass(T.params.slideDuplicateClass)) {
                                        var l = T.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                        T.lazy.loadImageInSlide(l.index(), !1)
                                    } else {
                                        var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                        T.lazy.loadImageInSlide(p.index(), !1)
                                    }
                                }
                                T.emit("onLazyImageReady", T, s[0], e[0])
                            }), T.emit("onLazyImageLoad", T, s[0], e[0])
                        })
                    }
                },
                load: function () {
                    var e, t = T.params.slidesPerView;
                    if ("auto" === t && (t = 0), T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0), T.params.watchSlidesVisibility) T.wrapper.children("." + T.params.slideVisibleClass).each(function () {
                        T.lazy.loadImageInSlide(a(this).index())
                    });
                    else if (t > 1)
                        for (e = T.activeIndex; e < T.activeIndex + t; e++) T.slides[e] && T.lazy.loadImageInSlide(e);
                    else T.lazy.loadImageInSlide(T.activeIndex);
                    if (T.params.lazyLoadingInPrevNext)
                        if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                            var s = T.params.lazyLoadingInPrevNextAmount,
                                r = t,
                                i = Math.min(T.activeIndex + r + Math.max(s, r), T.slides.length),
                                n = Math.max(T.activeIndex - Math.max(r, s), 0);
                            for (e = T.activeIndex + t; e < i; e++) T.slides[e] && T.lazy.loadImageInSlide(e);
                            for (e = n; e < T.activeIndex; e++) T.slides[e] && T.lazy.loadImageInSlide(e)
                        } else {
                            var o = T.wrapper.children("." + T.params.slideNextClass);
                            o.length > 0 && T.lazy.loadImageInSlide(o.index());
                            var l = T.wrapper.children("." + T.params.slidePrevClass);
                            l.length > 0 && T.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function () {
                    T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                },
                onTransitionEnd: function () {
                    T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                }
            }, T.scrollbar = {
                isTouched: !1,
                setDragPosition: function (e) {
                    var a = T.scrollbar,
                        t = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                        s = t - a.track.offset()[T.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                        r = -T.minTranslate() * a.moveDivider,
                        i = -T.maxTranslate() * a.moveDivider;
                    s < r ? s = r : s > i && (s = i), s = -s / a.moveDivider, T.updateProgress(s), T.setWrapperTranslate(s, !0)
                },
                dragStart: function (e) {
                    var a = T.scrollbar;
                    a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), T.params.scrollbarHide && a.track.css("opacity", 1), T.wrapper.transition(100), a.drag.transition(100), T.emit("onScrollbarDragStart", T)
                },
                dragMove: function (e) {
                    var a = T.scrollbar;
                    a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), T.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), T.emit("onScrollbarDragMove", T))
                },
                dragEnd: function (e) {
                    var a = T.scrollbar;
                    a.isTouched && (a.isTouched = !1, T.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
                        a.track.css("opacity", 0), a.track.transition(400)
                    }, 1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset())
                },
                draggableEvents: function () {
                    return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                }(),
                enableDraggable: function () {
                    var e = T.scrollbar,
                        t = T.support.touch ? e.track : document;
                    a(e.track).on(e.draggableEvents.start, e.dragStart), a(t).on(e.draggableEvents.move, e.dragMove), a(t).on(e.draggableEvents.end, e.dragEnd)
                },
                disableDraggable: function () {
                    var e = T.scrollbar,
                        t = T.support.touch ? e.track : document;
                    a(e.track).off(e.draggableEvents.start, e.dragStart), a(t).off(e.draggableEvents.move, e.dragMove), a(t).off(e.draggableEvents.end, e.dragEnd)
                },
                set: function () {
                    if (T.params.scrollbar) {
                        var e = T.scrollbar;
                        e.track = a(T.params.scrollbar), T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && e.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (e.track = T.container.find(T.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = T.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = T.size / T.virtualSize, e.moveDivider = e.divider * (e.trackSize / T.size), e.dragSize = e.trackSize * e.divider, T.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", T.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function () {
                    if (T.params.scrollbar) {
                        var e, a = T.scrollbar,
                            t = (T.translate || 0, a.dragSize);
                        e = (a.trackSize - a.dragSize) * T.progress, T.rtl && T.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), T.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
                            a.track[0].style.opacity = 0, a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function (e) {
                    T.params.scrollbar && T.scrollbar.drag.transition(e)
                }
            }, T.controller = {
                LinearSpline: function (e, a) {
                    this.x = e, this.y = a, this.lastIndex = e.length - 1;
                    var t, s;
                    this.x.length;
                    this.interpolate = function (e) {
                        return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                    };
                    var r = function () {
                        var e, a, t;
                        return function (s, r) {
                            for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t : e = t;
                            return e
                        }
                    }()
                },
                getInterpolateFunction: function (e) {
                    T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, e.snapGrid))
                },
                setTranslate: function (e, a) {
                    function s(a) {
                        e = a.rtl && "horizontal" === a.params.direction ? -T.translate : T.translate, "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a), i = -T.controller.spline.interpolate(-e)), i && "container" !== T.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()), i = (e - T.minTranslate()) * r + a.minTranslate()), T.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, T), a.updateActiveIndex()
                    }

                    var r, i, n = T.params.control;
                    if (T.isArray(n))
                        for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);
                    else n instanceof t && a !== n && s(n)
                },
                setTransition: function (e, a) {
                    function s(a) {
                        a.setWrapperTransition(e, T), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
                            i && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                        }))
                    }

                    var r, i = T.params.control;
                    if (T.isArray(i))
                        for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && s(i[r]);
                    else i instanceof t && a !== i && s(i)
                }
            }, T.hashnav = {
                onHashCange: function (e, a) {
                    var t = document.location.hash.replace("#", ""),
                        s = T.slides.eq(T.activeIndex).attr("data-hash");
                    t !== s && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                attachEvents: function (e) {
                    var t = e ? "off" : "on";
                    a(window)[t]("hashchange", T.hashnav.onHashCange)
                },
                setHash: function () {
                    if (T.hashnav.initialized && T.params.hashnav)
                        if (T.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                        else {
                            var e = T.slides.eq(T.activeIndex),
                                a = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = a || ""
                        }
                },
                init: function () {
                    if (T.params.hashnav && !T.params.history) {
                        T.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var a = 0, t = 0, s = T.slides.length; t < s; t++) {
                                var r = T.slides.eq(t),
                                    i = r.attr("data-hash") || r.attr("data-history");
                                if (i === e && !r.hasClass(T.params.slideDuplicateClass)) {
                                    var n = r.index();
                                    T.slideTo(n, a, T.params.runCallbacksOnInit, !0)
                                }
                            }
                        T.params.hashnavWatchState && T.hashnav.attachEvents()
                    }
                },
                destroy: function () {
                    T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                }
            }, T.history = {
                init: function () {
                    if (T.params.history) {
                        if (!window.history || !window.history.pushState) return T.params.history = !1, void(T.params.hashnav = !0);
                        T.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit), T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function () {
                    T.history.paths = T.history.getPathValues(), T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                },
                getPathValues: function () {
                    var e = window.location.pathname.slice(1).split("/"),
                        a = e.length,
                        t = e[a - 2],
                        s = e[a - 1];
                    return {
                        key: t,
                        value: s
                    }
                },
                setHistory: function (e, a) {
                    if (T.history.initialized && T.params.history) {
                        var t = T.slides.eq(a),
                            s = this.slugify(t.attr("data-history"));
                        window.location.pathname.includes(e) || (s = e + "/" + s), T.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                    }
                },
                slugify: function (e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function (e, a, t) {
                    if (a)
                        for (var s = 0, r = T.slides.length; s < r; s++) {
                            var i = T.slides.eq(s),
                                n = this.slugify(i.attr("data-history"));
                            if (n === a && !i.hasClass(T.params.slideDuplicateClass)) {
                                var o = i.index();
                                T.slideTo(o, e, t)
                            }
                        } else T.slideTo(0, e, t)
                }
            }, T.disableKeyboardControl = function () {
                T.params.keyboardControl = !1, a(document).off("keydown", l)
            }, T.enableKeyboardControl = function () {
                T.params.keyboardControl = !0, a(document).on("keydown", l)
            }, T.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : p() ? "wheel" : "mousewheel"), T.disableMousewheelControl = function () {
                if (!T.mousewheel.event) return !1;
                var e = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (e = a(T.params.mousewheelEventsTarged)), e.off(T.mousewheel.event, d), !0
            }, T.enableMousewheelControl = function () {
                if (!T.mousewheel.event) return !1;
                var e = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (e = a(T.params.mousewheelEventsTarged)), e.on(T.mousewheel.event, d), !0
            }, T.parallax = {
                setTranslate: function () {
                    T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        m(this, T.progress)
                    }), T.slides.each(function () {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            m(this, a)
                        })
                    })
                },
                setTransition: function (e) {
                    "undefined" == typeof e && (e = T.params.speed), T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        var t = a(this),
                            s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.transition(s)
                    })
                }
            }, T.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: T.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function (e) {
                    if (e.targetTouches.length < 2) return 1;
                    var a = e.targetTouches[0].pageX,
                        t = e.targetTouches[0].pageY,
                        s = e.targetTouches[1].pageX,
                        r = e.targetTouches[1].pageY,
                        i = Math.sqrt(Math.pow(s - a, 2) + Math.pow(r - t, 2));
                    return i
                },
                onGestureStart: function (e) {
                    var t = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(e)
                    }
                    return t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = a(this), 0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), void(t.isScaling = !0)) : void(t.gesture.image = void 0)
                },
                onGestureChange: function (e) {
                    var a = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                    }
                    a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                },
                onGestureEnd: function (e) {
                    var a = T.zoom;
                    !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin), a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0))
                },
                onTouchStart: function (e, a) {
                    var t = e.zoom;
                    t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                },
                onTouchMove: function (e) {
                    var a = T.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
                        a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), T.rtl && (a.image.startX = -a.image.startX), T.rtl && (a.image.startY = -a.image.startY));
                        var t = a.image.width * a.scale,
                            s = a.image.height * a.scale;
                        if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                            if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                                if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void(a.image.isTouched = !1);
                                if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void(a.image.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function (e, a) {
                    var t = e.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void(t.image.isMoved = !1);
                        t.image.isTouched = !1, t.image.isMoved = !1;
                        var s = 300,
                            r = 300,
                            i = t.velocity.x * s,
                            n = t.image.currentX + i,
                            o = t.velocity.y * r,
                            l = t.image.currentY + o;
                        0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (r = Math.abs((l - t.image.currentY) / t.velocity.y));
                        var p = Math.max(s, r);
                        t.image.currentX = n, t.image.currentY = l;
                        var d = t.image.width * t.scale,
                            u = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function (e) {
                    var a = e.zoom;
                    a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1)
                },
                toggleZoom: function (e, t) {
                    var s = e.zoom;
                    if (s.gesture.slide || (s.gesture.slide = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + e.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
                        var r, i, n, o, l, p, d, u, m, c, g, h, f, v, w, y, x, T;
                        "undefined" == typeof s.image.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = s.image.touchesStart.x, i = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - r, p = o + T / 2 - i, m = s.gesture.image[0].offsetWidth, c = s.gesture.image[0].offsetHeight, g = m * s.scale, h = c * s.scale, f = Math.min(x / 2 - g / 2, 0), v = Math.min(T / 2 - h / 2, 0), w = -f, y = -v, d = l * s.scale, u = p * s.scale, d < f && (d = f), d > w && (d = w), u < v && (u = v), u > y && (u = y)) : (d = 0, u = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                    }
                },
                attachEvents: function (e) {
                    var t = e ? "off" : "on";
                    if (T.params.zoom) {
                        var s = (T.slides, !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, s), T.slides[t]("gesturechange", T.zoom.onGestureChange, s), T.slides[t]("gestureend", T.zoom.onGestureEnd, s)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, s), T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, s), T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, s)), T[t]("touchStart", T.zoom.onTouchStart), T.slides.each(function (e, s) {
                            a(s).find("." + T.params.zoomContainerClass).length > 0 && a(s)[t](T.touchEvents.move, T.zoom.onTouchMove)
                        }), T[t]("touchEnd", T.zoom.onTouchEnd), T[t]("transitionEnd", T.zoom.onTransitionEnd), T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                    }
                },
                init: function () {
                    T.zoom.attachEvents()
                },
                destroy: function () {
                    T.zoom.attachEvents(!0)
                }
            }, T._plugins = [];
            for (var A in T.plugins) {
                var O = T.plugins[A](T, T.params[A]);
                O && T._plugins.push(O)
            }
            return T.callPlugins = function (e) {
                for (var a = 0; a < T._plugins.length; a++) e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, T.emitterEventListeners = {}, T.emit = function (e) {
                T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (T.emitterEventListeners[e])
                    for (a = 0; a < T.emitterEventListeners[e].length; a++) T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, T.on = function (e, a) {
                return e = c(e), T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []), T.emitterEventListeners[e].push(a), T
            }, T.off = function (e, a) {
                var t;
                if (e = c(e), "undefined" == typeof a) return T.emitterEventListeners[e] = [], T;
                if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                    for (t = 0; t < T.emitterEventListeners[e].length; t++) T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
                    return T
                }
            }, T.once = function (e, a) {
                e = c(e);
                var t = function () {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), T.off(e, t)
                };
                return T.on(e, t), T
            }, T.a11y = {
                makeFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function (e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function (e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function (e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function (e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function (e) {
                    13 === e.keyCode && (a(e.target).is(T.params.nextButton) ? (T.onClickNext(e), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : a(e.target).is(T.params.prevButton) && (T.onClickPrev(e), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), a(e.target).is("." + T.params.bulletClass) && a(e.target)[0].click())
                },
                liveRegion: a('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function (e) {
                    var a = T.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function () {
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)), a(T.container).append(T.a11y.liveRegion)
                },
                initPagination: function () {
                    T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function () {
                        var e = a(this);
                        T.a11y.makeFocusable(e), T.a11y.addRole(e, "button"), T.a11y.addLabel(e, T.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function () {
                    T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                }
            }, T.init = function () {
                T.params.loop && T.createLoop(), T.updateContainerSize(), T.updateSlidesSize(), T.updatePagination(), T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()), "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()), T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))), T.attachEvents(), T.params.observer && T.support.observer && T.initObservers(), T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(), T.params.zoom && T.zoom && T.zoom.init(), T.params.autoplay && T.startAutoplay(), T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(), T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(), T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState), T.params.history && T.history && T.history.init(), T.params.hashnav && T.hashnav && T.hashnav.init(), T.params.a11y && T.a11y && T.a11y.init(), T.emit("onInit", T)
            }, T.cleanupStyles = function () {
                T.container.removeClass(T.classNames.join(" ")).removeAttr("style"), T.wrapper.removeAttr("style"), T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass), T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass), T.params.prevButton && a(T.params.prevButton).removeClass(T.params.buttonDisabledClass), T.params.nextButton && a(T.params.nextButton).removeClass(T.params.buttonDisabledClass), T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
            }, T.destroy = function (e, a) {
                T.detachEvents(), T.stopAutoplay(), T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(), T.params.loop && T.destroyLoop(), a && T.cleanupStyles(), T.disconnectObservers(), T.params.zoom && T.zoom && T.zoom.destroy(), T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(), T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(), T.params.a11y && T.a11y && T.a11y.destroy(), T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState), T.params.hashnav && T.hashnav && T.hashnav.destroy(), T.emit("onDestroy"), e !== !1 && (T = null)
            }, T.init(), T
        }
    };
    t.prototype = {
        isSafari: function () {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function () {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
            }()
        },
        device: function () {
            var e = window.navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || r || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function () {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(),
            passiveListener: function () {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, a)
                } catch (t) {
                }
                return e
            }(),
            gestures: function () {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function (e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
        }

        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (t = 0; t < s.length; t++) r.on(s[t], a);
        return this
    }), "transform" in i.fn || (i.fn.transform = function (e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    }), "outerWidth" in i.fn || (i.fn.outerWidth = function (e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
    "use strict";
    return window.Swiper
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";

    function o() {
        var e = c.currentScript || function () {
                var e = c.getElementsByTagName("script");
                return !!e.length && e[e.length - 1]
            }(),
            o = e ? e.src.split("?")[0] : "";
        return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
    }

    function t(e, o, t) {
        for (var r = 0, i = o.length; r < i; r++) t(e, o[r])
    }

    var r = !1,
        i = !1,
        s = 0,
        n = 2e3,
        l = 0,
        a = e,
        c = document,
        d = window,
        u = a(d),
        h = [],
        p = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || !1,
        m = d.cancelAnimationFrame || d.webkitCancelAnimationFrame || d.mozCancelAnimationFrame || !1;
    if (p) d.cancelAnimationFrame || (m = function (e) {
    });
    else {
        var f = 0;
        p = function (e, o) {
            var t = (new Date).getTime(),
                r = Math.max(0, 16 - (t - f)),
                i = d.setTimeout(function () {
                    e(t + r)
                }, r);
            return f = t + r, i
        }, m = function (e) {
            d.clearTimeout(e)
        }
    }
    var g = d.MutationObserver || d.WebKitMutationObserver || !1,
        v = Date.now || function () {
            return (new Date).getTime()
        },
        w = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "6px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 40,
            mousescrollstep: 27,
            touchbehavior: !1,
            emulatetouch: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: o(),
            preventmultitouchscrolling: !0,
            disablemutationobserver: !1,
            enableobserver: !0,
            scrollbarid: !1
        },
        b = !1,
        y = function () {
            function e() {
                var e = ["grab", "-webkit-grab", "-moz-grab"];
                (s.ischrome && !s.ischrome38 || s.isie) && (e = []);
                for (var o = 0, r = e.length; o < r; o++) {
                    var i = e[o];
                    if (t.cursor = i, t.cursor == i) return i
                }
                return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
            }

            if (b) return b;
            var o = c.createElement("DIV"),
                t = o.style,
                r = navigator.userAgent,
                i = navigator.platform,
                s = {};
            return s.haspointerlock = "pointerLockElement" in c || "webkitPointerLockElement" in c || "mozPointerLockElement" in c, s.isopera = "opera" in d, s.isopera12 = s.isopera && "getUserMedia" in navigator, s.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(d.operamini), s.isie = "all" in c && "attachEvent" in o && !s.isopera, s.isieold = s.isie && !("msInterpolationMode" in t), s.isie7 = s.isie && !s.isieold && (!("documentMode" in c) || 7 === c.documentMode), s.isie8 = s.isie && "documentMode" in c && 8 === c.documentMode, s.isie9 = s.isie && "performance" in d && 9 === c.documentMode, s.isie10 = s.isie && "performance" in d && 10 === c.documentMode, s.isie11 = "msRequestFullscreen" in o && c.documentMode >= 11, s.ismsedge = "msCredentials" in d, s.ismozilla = "MozAppearance" in t, s.iswebkit = !s.ismsedge && "WebkitAppearance" in t, s.ischrome = s.iswebkit && "chrome" in d, s.ischrome38 = s.ischrome && "touchAction" in t, s.ischrome22 = !s.ischrome38 && s.ischrome && s.haspointerlock, s.ischrome26 = !s.ischrome38 && s.ischrome && "transition" in t, s.cantouch = "ontouchstart" in c.documentElement || "ontouchstart" in d, s.hasw3ctouch = (d.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), s.hasmstouch = !s.hasw3ctouch && (d.MSPointerEvent || !1), s.ismac = /^mac$/i.test(i), s.isios = s.cantouch && /iphone|ipad|ipod/i.test(i), s.isios4 = s.isios && !("seal" in Object), s.isios7 = s.isios && "webkitHidden" in c, s.isios8 = s.isios && "hidden" in c, s.isios10 = s.isios && d.Proxy, s.isandroid = /android/i.test(r), s.haseventlistener = "addEventListener" in o, s.trstyle = !1, s.hastransform = !1, s.hastranslate3d = !1, s.transitionstyle = !1, s.hastransition = !1, s.transitionend = !1, s.trstyle = "transform", s.hastransform = "transform" in t || function () {
                for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], o = 0, r = e.length; o < r; o++)
                    if (void 0 !== t[e[o]]) {
                        s.trstyle = e[o];
                        break
                    }
                s.hastransform = !!s.trstyle
            }(), s.hastransform && (t[s.trstyle] = "translate3d(1px,2px,3px)", s.hastranslate3d = /translate3d/.test(t[s.trstyle])), s.transitionstyle = "transition", s.prefixstyle = "", s.transitionend = "transitionend", s.hastransition = "transition" in t || function () {
                s.transitionend = !1;
                for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], o = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], i = 0, n = e.length; i < n; i++)
                    if (e[i] in t) {
                        s.transitionstyle = e[i], s.prefixstyle = o[i], s.transitionend = r[i];
                        break
                    }
                s.ischrome26 && (s.prefixstyle = o[1]), s.hastransition = s.transitionstyle
            }(), s.cursorgrabvalue = e(), s.hasmousecapture = "setCapture" in o, s.hasMutationObserver = g !== !1, o = null, b = s, s
        },
        x = function (e, o) {
            function t() {
                var e = T.doc.css(P.trstyle);
                return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
            }

            function f() {
                var e = T.win;
                if ("zIndex" in e) return e.zIndex();
                for (; e.length > 0;) {
                    if (9 == e[0].nodeType) return !1;
                    var o = e.css("zIndex");
                    if (!isNaN(o) && 0 !== o) return parseInt(o);
                    e = e.parent()
                }
                return !1
            }

            function b(e, o, t) {
                var r = e.css(o),
                    i = parseFloat(r);
                if (isNaN(i)) {
                    i = I[r] || 0;
                    var s = 3 == i ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
                    return T.isie8 && i && (i += 1), s ? i : 0
                }
                return i
            }

            function x(e, o, t, r) {
                T._bind(e, o, function (r) {
                    r = r || d.event;
                    var i = {
                        original: r,
                        target: r.target || r.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function () {
                            return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
                        },
                        stopImmediatePropagation: function () {
                            r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                        }
                    };
                    return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
                }, r)
            }

            function z(e, o, t, r) {
                T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), A = v());
                var i = v() - A;
                if (A = v(), i > 350 ? q = 1 : q += (2 - q) / 10, e = e * q | 0, o = o * q | 0, e) {
                    if (r)
                        if (e < 0) {
                            if (T.getScrollLeft() >= T.page.maxw) return !0
                        } else if (T.getScrollLeft() <= 0) return !0;
                    var s = e > 0 ? 1 : -1;
                    D !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), D = s), T.lastdeltax -= e
                }
                if (o) {
                    var n = function () {
                        var e = T.getScrollTop();
                        if (o < 0) {
                            if (e >= T.page.maxh) return !0
                        } else if (e <= 0) return !0
                    }();
                    if (n) {
                        if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
                        var l = T.view.h >> 1;
                        T.newscrolly < -l ? (T.newscrolly = -l, o = -1) : T.newscrolly > T.page.maxh + l ? (T.newscrolly = T.page.maxh + l, o = 1) : o = 0
                    }
                    var a = o > 0 ? 1 : -1;
                    X !== a && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), X = a), T.lastdeltay -= o
                }
                (o || e) && T.synched("relativexy", function () {
                    var e = T.lastdeltay + T.newscrolly;
                    T.lastdeltay = 0;
                    var o = T.lastdeltax + T.newscrollx;
                    T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e)
                })
            }

            function k(e, o, t) {
                var r, i;
                if (!t && j) return !0;
                if (0 === e.deltaMode ? (r = 0 | -(e.deltaX * (M.mousescrollstep / 54)), i = 0 | -(e.deltaY * (M.mousescrollstep / 54))) : 1 === e.deltaMode && (r = 0 | -(e.deltaX * M.mousescrollstep * 50 / 80), i = 0 | -(e.deltaY * M.mousescrollstep * 50 / 80)), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t)) {
                    var s = r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0;
                    s && (i = r, r = 0)
                }
                T.isrtlmode && (r = -r);
                var n = z(r, i, t, !0);
                return n ? void(t && (j = !0)) : (j = !1, e.stopImmediatePropagation(), e.preventDefault())
            }

            var T = this;
            this.version = "3.7.6", this.name = "nicescroll", this.me = o;
            var E = a("body"),
                M = this.opt = {
                    doc: E,
                    win: !1
                };
            if (a.extend(M, w), M.snapbackspeed = 80, e)
                for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
            if (M.disablemutationobserver && (g = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = M.win !== !1, this.win = M.win || (this.ispage ? u : this.doc), this.docscroll = this.ispage && !this.haswrapper ? u : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
                x: 0,
                y: 0
            }, this.scrollratio = {
                x: 0,
                y: 0
            }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
                var C = this.win[0] == d ? this.body : this.win,
                    N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
                "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
            } else this.isrtlmode = M.rtlmode === !0, this.isvertical = !1;
            if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, M.scrollbarid !== !1) this.id = M.scrollbarid;
            else
                do this.id = "ascrail" + n++; while (c.getElementById(this.id));
            this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = y();
            var P = a.extend({}, this.detected);
            this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
                if (T) {
                    var r = T.delaylist[e] || !1;
                    r || (T.delaylist[e] = {
                        h: p(function () {
                            T.delaylist[e].fn.call(T), T.delaylist[e] = !1
                        }, t)
                    }, o.call(T)), T.delaylist[e].fn = o
                }
            }, this.synched = function (e, o) {
                T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, p(function () {
                    T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null)
                }))
            }, this.unsynched = function (e) {
                T.synclist[e] && (T.synclist[e] = !1)
            }, this.css = function (e, o) {
                for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
            }, this.scrollTop = function (e) {
                return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
            }, this.scrollLeft = function (e) {
                return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
            };
            var R = function (e, o, t, r, i, s, n) {
                this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = v(), this.df = o - e
            };
            if (R.prototype = {
                B2: function (e) {
                    return 3 * (1 - e) * (1 - e) * e
                },
                B3: function (e) {
                    return 3 * (1 - e) * e * e
                },
                B4: function (e) {
                    return e * e * e
                },
                getPos: function () {
                    return (v() - this.ts) / this.spd
                },
                getNow: function () {
                    var e = (v() - this.ts) / this.spd,
                        o = this.B2(e) + this.B3(e) + this.B4(e);
                    return e >= 1 ? this.ed : this.st + this.df * o | 0
                },
                update: function (e, o) {
                    return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = v(), this.df = this.ed - this.st, this
                }
            }, this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                }, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
                    if (!e) {
                        var o = t();
                        if (o) return 16 == o.length ? -o[13] : -o[5];
                        if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow()
                    }
                    return T.doc.translate.y
                }, this.getScrollLeft = function (e) {
                    if (!e) {
                        var o = t();
                        if (o) return 16 == o.length ? -o[12] : -o[4];
                        if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow()
                    }
                    return T.doc.translate.x
                }, this.notifyScrollEvent = function (e) {
                    var o = c.createEvent("UIEvents");
                    o.initUIEvent("scroll", !1, !1, d, 1), o.niceevent = !0, e.dispatchEvent(o)
                };
                var _ = this.isrtlmode ? 1 : -1;
                P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
                    T.doc.translate.y = e, T.doc.translate.ty = e * -1 + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
                }, this.setScrollLeft = function (e, o) {
                    T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
                }) : (this.setScrollTop = function (e, o) {
                    T.doc.translate.y = e, T.doc.translate.ty = e * -1 + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
                }, this.setScrollLeft = function (e, o) {
                    T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
                })
            } else this.getScrollTop = function () {
                return T.docscroll.scrollTop()
            }, this.setScrollTop = function (e) {
                T.docscroll.scrollTop(e)
            }, this.getScrollLeft = function () {
                var e;
                return e = T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
            }, this.setScrollLeft = function (e) {
                return setTimeout(function () {
                    if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e)
                }, 1)
            };
            this.getTarget = function (e) {
                return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
            }, this.hasParent = function (e, o) {
                if (!e) return !1;
                for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
                return t !== !1
            };
            var I = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getDocumentScrollOffset = function () {
                return {
                    top: d.pageYOffset || c.documentElement.scrollTop,
                    left: d.pageXOffset || c.documentElement.scrollLeft
                }
            }, this.getOffset = function () {
                if (T.isfixed) {
                    var e = T.win.offset(),
                        o = T.getDocumentScrollOffset();
                    return e.top -= o.top, e.left -= o.left, e
                }
                var t = T.win.offset();
                if (!T.viewport) return t;
                var r = T.viewport.offset();
                return {
                    top: t.top - r.top,
                    left: t.left - r.left
                }
            }, this.updateScrollBar = function (e) {
                var o, t;
                if (T.ishwscroll) T.rail.css({
                    height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
                }), T.railh && T.railh.css({
                    width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
                });
                else {
                    var r = T.getOffset();
                    if (o = {
                        top: r.top,
                        left: r.left - (M.railpadding.left + M.railpadding.right)
                    }, o.top += b(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - b(T.win, "border-right-width") - T.rail.width : b(T.win, "border-left-width"), t = M.railoffset, t && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
                        top: o.top,
                        left: o.left,
                        height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
                    }), T.zoom && T.zoom.css({
                        top: o.top + 1,
                        left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
                    }), T.railh && !T.railslocked) {
                        o = {
                            top: r.top,
                            left: r.left
                        }, t = M.railhoffset, t && (t.top && (o.top += t.top), t.left && (o.left += t.left));
                        var i = T.railh.align ? o.top + b(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + b(T.win, "border-top-width", !0),
                            s = o.left + b(T.win, "border-left-width");
                        T.railh.css({
                            top: i - (M.railpadding.top + M.railpadding.bottom),
                            left: s,
                            width: T.railh.width
                        })
                    }
                }
            }, this.doRailClick = function (e, o, t) {
                var r, i, s, n;
                T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + c.documentElement.scrollLeft, e.pageY = e.clientY + c.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)))
            }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in d, T.hascancelanimationframe = "cancelAnimationFrame" in d, T.hasborderbox = !1, this.init = function () {
                if (T.saved.css = [], P.isoperamini) return !0;
                if (P.isandroid && !("hidden" in c)) return !0;
                M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = d.getComputedStyle && "border-box" === d.getComputedStyle(c.body)["box-sizing"];
                var e = {
                    "overflow-y": "hidden"
                };
                if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = f() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > l && (l = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
                    var o = T.docscroll;
                    T.ispage && (o = T.haswrapper ? T.win : T.doc), T.css(o, e), T.ispage && (P.isie11 || P.isie) && T.css(a("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var t = a(c.createElement("div"));
                    t.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: M.cursorwidth,
                        height: 0,
                        "background-color": M.cursorcolor,
                        border: M.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": M.cursorborderradius,
                        "-moz-border-radius": M.cursorborderradius,
                        "border-radius": M.cursorborderradius
                    }), t.addClass("nicescroll-cursors"), T.cursor = t;
                    var n = a(c.createElement("div"));
                    n.attr("id", T.id), n.addClass("nicescroll-rails nicescroll-rails-vr");
                    var h, p, m = ["left", "right", "top", "bottom"];
                    for (var v in m) p = m[v], h = M.railpadding[p] || 0, h && n.css("padding-" + p, h + "px");
                    n.append(t), n.width = Math.max(parseFloat(M.cursorwidth), t.outerWidth()), n.css({
                        width: n.width + "px",
                        zIndex: T.zindex,
                        background: M.background,
                        cursor: "default"
                    }), n.visibility = !0, n.scrollable = !0, n.align = "left" == M.railalign ? 0 : 1, T.rail = n, T.rail.drag = !1;
                    var w = !1;
                    !M.boxzoom || T.ispage || P.isieold || (w = c.createElement("div"), T.bind(w, "click", T.doZoom), T.bind(w, "mouseenter", function () {
                        T.zoom.css("opacity", M.cursoropacitymax)
                    }), T.bind(w, "mouseleave", function () {
                        T.zoom.css("opacity", M.cursoropacitymin)
                    }), T.zoom = a(w), T.zoom.css({
                        cursor: "pointer",
                        zIndex: T.zindex,
                        backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0 0"
                    }), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
                        return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
                    }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
                    var b;
                    if (M.horizrailenabled && (T.css(o, {
                        overflowX: "hidden"
                    }), t = a(c.createElement("div")), t.css({
                        position: "absolute",
                        top: 0,
                        height: M.cursorwidth,
                        width: 0,
                        backgroundColor: M.cursorcolor,
                        border: M.cursorborder,
                        backgroundClip: "padding-box",
                        "-webkit-border-radius": M.cursorborderradius,
                        "-moz-border-radius": M.cursorborderradius,
                        "border-radius": M.cursorborderradius
                    }), P.isieold && t.css("overflow", "hidden"), t.addClass("nicescroll-cursors"), T.cursorh = t, b = a(c.createElement("div")), b.attr("id", T.id + "-hr"), b.addClass("nicescroll-rails nicescroll-rails-hr"), b.height = Math.max(parseFloat(M.cursorwidth), t.outerHeight()), b.css({
                        height: b.height + "px",
                        zIndex: T.zindex,
                        background: M.background
                    }), b.append(t), b.visibility = !0, b.scrollable = !0, b.align = "top" == M.railvalign ? 0 : 1, T.railh = b, T.railh.drag = !1), T.ispage) n.css({
                        position: "fixed",
                        top: 0,
                        height: "100%"
                    }), n.css(n.align ? {
                        right: 0
                    } : {
                        left: 0
                    }), T.body.append(n), T.railh && (b.css({
                        position: "fixed",
                        left: 0,
                        width: "100%"
                    }), b.css(b.align ? {
                        bottom: 0
                    } : {
                        top: 0
                    }), T.body.append(b));
                    else {
                        if (T.ishwscroll) {
                            "static" == T.win.css("position") && T.css(T.win, {
                                position: "relative"
                            });
                            var y = "HTML" == T.win[0].nodeName ? T.body : T.win;
                            a(y).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
                                position: "absolute",
                                top: 1,
                                right: 0,
                                "margin-right": n.width + 4
                            }), y.append(T.zoom)), n.css({
                                position: "absolute",
                                top: 0
                            }), n.css(n.align ? {
                                right: 0
                            } : {
                                left: 0
                            }), y.append(n), b && (b.css({
                                position: "absolute",
                                left: 0,
                                bottom: 0
                            }), b.css(b.align ? {
                                bottom: 0
                            } : {
                                top: 0
                            }), y.append(b))
                        } else {
                            T.isfixed = "fixed" == T.win.css("position");
                            var x = T.isfixed ? "fixed" : "absolute";
                            T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
                                position: "relative"
                            })), n.css({
                                position: x
                            }), T.zoom && T.zoom.css({
                                position: x
                            }), T.updateScrollBar(), T.body.append(n), T.zoom && T.body.append(T.zoom), T.railh && (b.css({
                                position: x
                            }), T.body.append(b))
                        }
                        P.isios && T.css(T.win, {
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            "-webkit-touch-callout": "none"
                        }), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"))
                    }
                    if (M.autohidemode === !1 ? (T.autohidedom = !1, T.rail.css({
                        opacity: M.cursoropacitymax
                    }), T.railh && T.railh.css({
                        opacity: M.cursoropacitymax
                    })) : M.autohidemode === !0 || "leave" === M.autohidemode ? (T.autohidedom = a().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = a().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = a().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
                        T.scrollmom = new S(T);
                        T.ontouchstart = function (e) {
                            if (T.locked) return !1;
                            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                            if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
                                var o = T.getTarget(e);
                                if (o) {
                                    var t = /INPUT/i.test(o.nodeName) && /range/i.test(o.type);
                                    if (t) return T.stopPropagation(e)
                                }
                                var r = "mousedown" === e.type;
                                if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                                    var i = e;
                                    e = {
                                        original: e.original ? e.original : e
                                    }, e.clientX = i.screenX, e.clientY = i.screenY
                                }
                                if (T.rail.drag = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    sx: T.scroll.x,
                                    sy: T.scroll.y,
                                    st: T.getScrollTop(),
                                    sl: T.getScrollLeft(),
                                    pt: 2,
                                    dl: !1,
                                    tg: o
                                }, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f";
                                else {
                                    var s = {
                                            w: u.width(),
                                            h: u.height()
                                        },
                                        n = T.getContentSize(),
                                        l = n.h - s.h,
                                        c = n.w - s.w;
                                    T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = c > 0 && "h" : T.rail.drag.ck = !1
                                }
                                if (M.emulatetouch && T.isiframe && P.isie) {
                                    var d = T.win.position();
                                    T.rail.drag.x += d.left, T.rail.drag.y += d.top
                                }
                                if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && r) {
                                    var h = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName);
                                    if (!h) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                                        return !T.hasmoving && void o._onclick.call(this, e)
                                    }), T.cancelEvent(e)) : T.stopPropagation(e);
                                    /SUBMIT|CANCEL|BUTTON/i.test(a(o).attr("type")) && (T.preventclick = {
                                        tg: o,
                                        click: !1
                                    })
                                }
                            }
                        }, T.ontouchend = function (e) {
                            if (!T.rail.drag) return !0;
                            if (2 == T.rail.drag.pt) {
                                if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                                T.rail.drag = !1;
                                var o = "mouseup" === e.type;
                                if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && c.releaseCapture(), o)) return T.cancelEvent(e)
                            } else if (1 == T.rail.drag.pt) return T.onmouseup(e)
                        };
                        var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
                            k = .3 * M.directionlockdeadzone | 0;
                        T.ontouchmove = function (e, o) {
                            if (!T.rail.drag) return !0;
                            if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
                            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
                            if (2 == T.rail.drag.pt) {
                                "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
                                var t, r;
                                if (r = t = 0, z && !o) {
                                    var i = T.win.position();
                                    r = -i.left, t = -i.top
                                }
                                var s = e.clientY + t,
                                    n = s - T.rail.drag.y,
                                    l = e.clientX + r,
                                    a = l - T.rail.drag.x,
                                    d = T.rail.drag.st - n;
                                if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
                                else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
                                var u = T.getScrollLeft();
                                if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? a - T.rail.drag.sl : T.rail.drag.sl - a, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, l = 0), u > T.page.maxw && (u = T.page.maxw, l = 0))), !T.hasmoving) {
                                    if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
                                    var h = Math.abs(n),
                                        p = Math.abs(a),
                                        m = M.directionlockdeadzone;
                                    if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
                                    T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0
                                }
                                return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                                    T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(l, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && c.selection.clear())
                                }), T.cancelEvent(e)
                            }
                            return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
                        }, T.ontouchstartCursor = function (e, o) {
                            if (!T.rail.drag || 3 == T.rail.drag.pt) {
                                if (T.locked) return T.cancelEvent(e);
                                T.cancelScroll(), T.rail.drag = {
                                    x: e.touches[0].clientX,
                                    y: e.touches[0].clientY,
                                    sx: T.scroll.x,
                                    sy: T.scroll.y,
                                    pt: 3,
                                    hr: !!o
                                };
                                var t = T.getTarget(e);
                                return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                                    "pointer-events": "none"
                                })), T.cancelEvent(e)
                            }
                        }, T.ontouchendCursor = function (e) {
                            if (T.rail.drag) {
                                if (P.hasmousecapture && c.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
                                return T.rail.drag = !1, T.cancelEvent(e)
                            }
                        }, T.ontouchmoveCursor = function (e) {
                            if (T.rail.drag) {
                                if (3 != T.rail.drag.pt) return;
                                if (T.cursorfreezed = !0, T.rail.drag.hr) {
                                    T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                                    var o = T.scrollvaluemaxw;
                                    T.scroll.x > o && (T.scroll.x = o)
                                } else {
                                    T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                                    var t = T.scrollvaluemax;
                                    T.scroll.y > t && (T.scroll.y = t)
                                }
                                return T.synched("touchmove", function () {
                                    T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
                                }), T.cancelEvent(e)
                            }
                        }
                    }
                    if (T.onmousedown = function (e, o) {
                        if (!T.rail.drag || 1 == T.rail.drag.pt) {
                            if (T.railslocked) return T.cancelEvent(e);
                            T.cancelScroll(), T.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                pt: 1,
                                hr: o || !1
                            };
                            var t = T.getTarget(e);
                            return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                                "pointer-events": "none"
                            })), T.hasmoving = !1, T.cancelEvent(e)
                        }
                    }, T.onmouseup = function (e) {
                        if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && c.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e))
                    }, T.onmousemove = function (e) {
                        if (T.rail.drag) {
                            if (1 !== T.rail.drag.pt) return;
                            if (P.ischrome && 0 === e.which) return T.onmouseup(e);
                            if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
                                T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                                var o = T.scrollvaluemaxw;
                                T.scroll.x > o && (T.scroll.x = o)
                            } else {
                                T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                                var t = T.scrollvaluemax;
                                T.scroll.y > t && (T.scroll.y = t)
                            }
                            return T.synched("mousemove", function () {
                                T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
                            }), T.cancelEvent(e)
                        }
                        T.checkarea = 0
                    }, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
                        if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)
                    }, T.onclick = !P.isios && function (e) {
                        return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e))
                    }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
                        cursor: P.cursorgrabvalue
                    }), T.css(T.rail, {
                        cursor: P.cursorgrabvalue
                    }));
                    else {
                        var L = function (e) {
                            if (T.selectiondrag) {
                                if (e) {
                                    var o = T.win.outerHeight(),
                                        t = e.pageY - T.selectiondrag.top;
                                    t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t
                                }
                                if (0 !== T.selectiondrag.df) {
                                    var r = 0 | -(2 * T.selectiondrag.df / 6);
                                    T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                                        L()
                                    }, 50)
                                }
                            }
                        };
                        "getSelection" in c ? T.hasTextSelected = function () {
                            return c.getSelection().rangeCount > 0
                        } : "selection" in c ? T.hasTextSelected = function () {
                            return "None" != c.selection.type
                        } : T.hasTextSelected = function () {
                            return !1
                        }, T.onselectionstart = function (e) {
                            T.ispage || (T.selectiondrag = T.win.offset())
                        }, T.onselectionend = function (e) {
                            T.selectiondrag = !1
                        }, T.onselectiondrag = function (e) {
                            T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
                                L(e)
                            }, 250)
                        }
                    }
                    if (P.hasw3ctouch ? (T.css(T.ispage ? a("html") : T.win, {
                        "touch-action": "none"
                    }), T.css(T.rail, {
                        "touch-action": "none"
                    }), T.css(T.cursor, {
                        "touch-action": "none"
                    }), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(c, "pointerup", T.ontouchend), T.delegate(c, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? a("html") : T.win, {
                        "-ms-touch-action": "none"
                    }), T.css(T.rail, {
                        "-ms-touch-action": "none"
                    }), T.css(T.cursor, {
                        "-ms-touch-action": "none"
                    }), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(c, "MSPointerUp", T.ontouchend), T.delegate(c, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
                        e.preventDefault()
                    }), T.bind(T.cursor, "contextmenu", function (e) {
                        e.preventDefault()
                    })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(c, "touchend", T.ontouchend, !1, !0), T.bind(c, "touchcancel", T.ontouchend, !1, !0), T.delegate(c, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(c, "mouseup", T.ontouchend, !1, !0), T.bind(c, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
                        cursor: "default"
                    }), T.railh && T.railh.css({
                        cursor: "default"
                    }), T.jqbind(T.rail, "mouseenter", function () {
                        return !(!T.ispage && !T.win.is(":visible")) && (T.canshowonmouseevent && T.showCursor(), void(T.rail.active = !0))
                    }), T.jqbind(T.rail, "mouseleave", function () {
                        T.rail.active = !1, T.rail.drag || T.hideCursor()
                    }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
                        T.doRailClick(e, !1, !1)
                    }), T.bind(T.rail, "dblclick", function (e) {
                        T.doRailClick(e, !0, !1)
                    }), T.bind(T.cursor, "click", function (e) {
                        T.cancelEvent(e)
                    }), T.bind(T.cursor, "dblclick", function (e) {
                        T.cancelEvent(e)
                    })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
                        return !(!T.ispage && !T.win.is(":visible")) && (T.canshowonmouseevent && T.showCursor(), void(T.rail.active = !0))
                    }), T.jqbind(T.railh, "mouseleave", function () {
                        T.rail.active = !1, T.rail.drag || T.hideCursor()
                    }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
                        T.doRailClick(e, !1, !0)
                    }), T.bind(T.railh, "dblclick", function (e) {
                        T.doRailClick(e, !0, !0)
                    }), T.bind(T.cursorh, "click", function (e) {
                        T.cancelEvent(e)
                    }), T.bind(T.cursorh, "dblclick", function (e) {
                        T.cancelEvent(e)
                    })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
                        T.ontouchstartCursor(e, !0)
                    }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : c, "mouseup", T.ontouchend), T.onclick && T.bind(c, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
                        T.onmousedown(e, !0)
                    }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
                        e.preventDefault()
                    }), T.railh && T.bind(T.railh, "mousedown", function (e) {
                        e.preventDefault()
                    }))) : (T.bind(P.hasmousecapture ? T.win : c, "mouseup", T.onmouseup), T.bind(c, "mousemove", T.onmousemove), T.onclick && T.bind(c, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
                        T.onmousedown(e, !0)
                    }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(c, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(c, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
                        T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                    }), T.jqbind(T.zoom, "mouseleave", function () {
                        T.rail.active = !1, T.rail.drag || T.hideCursor()
                    }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? c : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
                        tabindex: ++s
                    }), T.bind(T.win, "focus", function (e) {
                        r = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
                    }), T.bind(T.win, "blur", function (e) {
                        r = !1, T.hasfocus = !1
                    }), T.bind(T.win, "mouseenter", function (e) {
                        i = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
                    }), T.bind(T.win, "mouseleave", function (e) {
                        i = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor()
                    })), T.onkeypress = function (e) {
                        if (T.railslocked && 0 === T.page.maxh) return !0;
                        e = e || d.event;
                        var o = T.getTarget(e);
                        if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)) {
                            var t = o.getAttribute("type") || o.type || !1;
                            if (!t || !/submit|button|cancel/i.tp) return !0
                        }
                        if (a(o).attr("contenteditable")) return !0;
                        if (T.hasfocus || T.hasmousefocus && !r || T.ispage && !r && !i) {
                            var s = e.keyCode;
                            if (T.railslocked && 27 != s) return T.cancelEvent(e);
                            var n = e.ctrlKey || !1,
                                l = e.shiftKey || !1,
                                c = !1;
                            switch (s) {
                                case 38:
                                case 63233:
                                    T.doScrollBy(72), c = !0;
                                    break;
                                case 40:
                                case 63235:
                                    T.doScrollBy(-72), c = !0;
                                    break;
                                case 37:
                                case 63232:
                                    T.railh && (n ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                                    break;
                                case 39:
                                case 63234:
                                    T.railh && (n ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                                    break;
                                case 33:
                                case 63276:
                                    T.doScrollBy(T.view.h), c = !0;
                                    break;
                                case 34:
                                case 63277:
                                    T.doScrollBy(-T.view.h), c = !0;
                                    break;
                                case 36:
                                case 63273:
                                    T.railh && n ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                                    break;
                                case 35:
                                case 63275:
                                    T.railh && n ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                                    break;
                                case 32:
                                    M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                                    break;
                                case 27:
                                    T.zoomactive && (T.doZoom(), c = !0)
                            }
                            if (c) return T.cancelEvent(e)
                        }
                    }, M.enablekeyboard && T.bind(c, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(c, "keydown", function (e) {
                        var o = e.ctrlKey || !1;
                        o && (T.wheelprevented = !0)
                    }), T.bind(c, "keyup", function (e) {
                        var o = e.ctrlKey || !1;
                        o || (T.wheelprevented = !1)
                    }), T.bind(d, "blur", function (e) {
                        T.wheelprevented = !1
                    }), T.bind(d, "resize", T.onscreenresize), T.bind(d, "orientationchange", T.onscreenresize), T.bind(d, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
                        var C = T.win.attr("style"),
                            N = parseFloat(T.win.css("width")) + 1;
                        T.win.css("width", N), T.synched("chromefix", function () {
                            T.win.attr("style", C)
                        })
                    }
                    if (T.onAttributeChange = function (e) {
                        T.lazyResize(T.isieold ? 250 : 30)
                    }, M.enableobserver && (T.isie11 || g === !1 || (T.observerbody = new g(function (e) {
                        if (e.forEach(function (e) {
                            if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !a.contains(a(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
                        }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30)
                    }), T.observerbody.observe(c.body, {
                        childList: !0,
                        subtree: !0,
                        characterData: !1,
                        attributes: !0,
                        attributeFilter: ["class"]
                    })), !T.ispage && !T.haswrapper)) {
                        var R = T.win[0];
                        g !== !1 ? (T.observer = new g(function (e) {
                            e.forEach(T.onAttributeChange)
                        }), T.observer.observe(R, {
                            childList: !0,
                            characterData: !1,
                            attributes: !0,
                            subtree: !1
                        }), T.observerremover = new g(function (e) {
                            e.forEach(function (e) {
                                if (e.removedNodes.length > 0)
                                    for (var o in e.removedNodes)
                                        if (T && e.removedNodes[o] === R) return T.remove()
                            })
                        }), T.observerremover.observe(R.parentNode, {
                            childList: !0,
                            characterData: !1,
                            attributes: !1,
                            subtree: !1
                        })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
                            e.target === R && T.remove()
                        }))
                    }
                    !T.ispage && M.boxzoom && T.bind(d, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var _ = function () {
                        T.iframexd = !1;
                        var o;
                        try {
                            o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc;
                            o.domain
                        } catch (t) {
                            T.iframexd = !0, o = !1
                        }
                        if (T.iframexd) return "console" in d && console.log("NiceScroll error: policy restriced iframe"), !0;
                        if (T.forcescreen = !0, T.isiframe && (T.iframe = {
                            doc: a(o),
                            html: T.doc.contents().find("html")[0],
                            body: T.doc.contents().find("body")[0]
                        }, T.getContentSize = function () {
                            return {
                                w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
                                h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
                            }
                        }, T.docscroll = a(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
                            T.win.scrollTop(0), T.doc.height("");
                            var r = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                            T.doc.height(r)
                        }
                        T.lazyResize(30), T.css(a(T.iframe.body), e), P.isios && T.haswrapper && T.css(a(o.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        }), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
                            return T.ontouchmove(e, !0)
                        }), M.grabcursorenabled && P.cursorgrabvalue && T.css(a(o.body), {
                            cursor: P.cursorgrabvalue
                        })), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
                        _.call(T.doc[0], !1)
                    }, 500), T.bind(this.doc, "load", _)
                }
            }, this.showCursor = function (e, o) {
                if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
                    if (T.autohidedom && (T.autohidedom.stop().css({
                        opacity: M.cursoropacitymax
                    }), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && e !== !1 && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
                        height: T.cursorheight,
                        top: T.scroll.y
                    }), T.cursorh) {
                        var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
                        T.cursorh.css({
                            width: T.cursorwidth,
                            left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
                        }), T.cursoractive = !0
                    }
                    T.zoom && T.zoom.stop().css({
                        opacity: M.cursoropacitymax
                    })
                }
            }, this.hideCursor = function (e) {
                T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
                    T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
                        opacity: M.cursoropacitymin
                    }), T.zoom && T.zoom.stop().animate({
                        opacity: M.cursoropacitymin
                    }), T.cursoractive = !1), T.cursortimeout = 0
                }, e || M.hidecursordelay)))
            }, this.noticeCursor = function (e, o, t) {
                T.showCursor(o, t), T.rail.active || T.hideCursor(e)
            }, this.getContentSize = T.ispage ? function () {
                return {
                    w: Math.max(c.body.scrollWidth, c.documentElement.scrollWidth),
                    h: Math.max(c.body.scrollHeight, c.documentElement.scrollHeight)
                }
            } : T.haswrapper ? function () {
                return {
                    w: T.doc[0].offsetWidth,
                    h: T.doc[0].offsetHeight
                }
            } : function () {
                return {
                    w: T.docscroll[0].scrollWidth,
                    h: T.docscroll[0].scrollHeight
                }
            }, this.onResize = function (e, o) {
                if (!T || !T.win) return !1;
                var t = T.page.maxh,
                    r = T.page.maxw,
                    i = T.view.h,
                    s = T.view.w;
                if (T.view = {
                    w: T.ispage ? T.win.width() : T.win[0].clientWidth,
                    h: T.ispage ? T.win.height() : T.win[0].clientHeight
                }, T.page = o ? o : T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
                    if (T.ispage) return T;
                    var n = T.win.offset();
                    if (T.lastposition) {
                        var l = T.lastposition;
                        if (l.top == n.top && l.left == n.left) return T
                    }
                    T.lastposition = n
                }
                if (0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked) return T.ispage || T.updateScrollBar(T.view), !1;
                T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
                    x: T.page.maxw / T.scrollvaluemaxw,
                    y: T.page.maxh / T.scrollvaluemax
                };
                var a = T.getScrollTop();
                return a > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T
            }, this.resize = T.onResize;
            var O = 0;
            this.onscreenresize = function (e) {
                clearTimeout(O);
                var o = !T.ispage && !T.haswrapper;
                o && T.hideRails(), O = setTimeout(function () {
                    T && (o && T.showRails(), T.resize()), O = 0
                }, 120)
            }, this.lazyResize = function (e) {
                return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
                    T && T.resize(), O = 0
                }, e), T
            }, this.jqbind = function (e, o, t) {
                T.events.push({
                    e: e,
                    n: o,
                    f: t,
                    q: !0
                }), a(e).on(o, t)
            }, this.mousewheel = function (e, o, t) {
                var r = "jquery" in e ? e[0] : e;
                if ("onwheel" in c.createElement("div")) T._bind(r, "wheel", o, t || !1);
                else {
                    var i = void 0 !== c.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                    x(r, i, o, t || !1), "DOMMouseScroll" == i && x(r, "MozMousePixelScroll", o, t || !1)
                }
            };
            var Y = !1;
            if (P.haseventlistener) {
                try {
                    var H = Object.defineProperty({}, "passive", {
                        get: function () {
                            Y = !0
                        }
                    });
                    d.addEventListener("test", null, H)
                } catch (B) {
                }
                this.stopPropagation = function (e) {
                    return !!e && (e = e.original ? e.original : e, e.stopPropagation(), !1)
                }, this.cancelEvent = function (e) {
                    return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
                }
            } else Event.prototype.preventDefault = function () {
                this.returnValue = !1
            }, Event.prototype.stopPropagation = function () {
                this.cancelBubble = !0
            }, d.constructor.prototype.addEventListener = c.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
                this.attachEvent("on" + e, o)
            }, d.constructor.prototype.removeEventListener = c.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
                this.detachEvent("on" + e, o)
            }, this.cancelEvent = function (e) {
                return e = e || d.event, e && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
            }, this.stopPropagation = function (e) {
                return e = e || d.event, e && (e.cancelBubble = !0), !1
            };
            this.delegate = function (e, o, t, r, i) {
                var s = h[o] || !1;
                s || (s = {
                    a: [],
                    l: [],
                    f: function (e) {
                        for (var o = s.l, t = o.length - 1, r = !1, i = t; i >= 0; i--)
                            if (r = o[i].call(e.target, e), r === !1) return !1;
                        return r
                    }
                }, T.bind(e, o, s.f, r, i), h[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t))
            }, this.undelegate = function (e, o, t, r, i) {
                var s = h[o] || !1;
                if (s && s.l)
                    for (var n = 0, l = s.l.length; n < l; n++) s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), h[o] = null))
            }, this.bind = function (e, o, t, r, i) {
                var s = "jquery" in e ? e[0] : e;
                T._bind(s, o, t, r || !1, i || !1)
            }, this._bind = function (e, o, t, r, i) {
                T.events.push({
                    e: e,
                    n: o,
                    f: t,
                    b: r,
                    q: !1
                }), Y && i ? e.addEventListener(o, t, {
                    passive: !1,
                    capture: r
                }) : e.addEventListener(o, t, r || !1)
            }, this._unbind = function (e, o, t, r) {
                h[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
            }, this.unbindAll = function () {
                for (var e = 0; e < T.events.length; e++) {
                    var o = T.events[e];
                    o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
                }
            }, this.showRails = function () {
                return T.showRail().showRailHr()
            }, this.showRail = function () {
                return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T
            }, this.showRailHr = function () {
                return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T
            }, this.hideRails = function () {
                return T.hideRail().hideRailHr()
            }, this.hideRail = function () {
                return T.rail.visibility = !1, T.rail.css("display", "none"), T
            }, this.hideRailHr = function () {
                return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T
            }, this.show = function () {
                return T.hidden = !1, T.railslocked = !1, T.showRails()
            }, this.hide = function () {
                return T.hidden = !0, T.railslocked = !0, T.hideRails()
            }, this.toggle = function () {
                return T.hidden ? T.show() : T.hide()
            }, this.remove = function () {
                T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
                for (var e in T.delaylist) T.delaylist[e] && m(T.delaylist[e].h);
                T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), T.observer !== !1 && T.observer.disconnect(), T.observerremover !== !1 && T.observerremover.disconnect(), T.observerbody !== !1 && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();
                for (var o = 0; o < T.saved.css.length; o++) {
                    var t = T.saved.css[o];
                    t[0].css(t[1], void 0 === t[2] ? "" : t[2])
                }
                T.saved = !1, T.me.data("__nicescroll", "");
                var r = a.nicescroll;
                r.each(function (e) {
                    if (this && this.id === T.id) {
                        delete r[e];
                        for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
                        r.length--, r.length && delete r[r.length]
                    }
                });
                for (var i in T) T[i] = null, delete T[i];
                T = null
            }, this.scrollstart = function (e) {
                return this.onscrollstart = e, T
            }, this.scrollend = function (e) {
                return this.onscrollend = e, T
            }, this.scrollcancel = function (e) {
                return this.onscrollcancel = e, T
            }, this.zoomin = function (e) {
                return this.onzoomin = e, T
            }, this.zoomout = function (e) {
                return this.onzoomout = e, T
            }, this.isScrollable = function (e) {
                var o = e.target ? e.target : e;
                if ("OPTION" == o.nodeName) return !0;
                for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
                    var t = a(o),
                        r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                    if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
                    o = !!o.parentNode && o.parentNode
                }
                return !1
            }, this.getViewport = function (e) {
                for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
                    var t = a(o);
                    if (/fixed|absolute/.test(t.css("position"))) return t;
                    var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                    if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
                    if (t.getNiceScroll().length > 0) return t;
                    o = !!o.parentNode && o.parentNode
                }
                return !1
            }, this.triggerScrollStart = function (e, o, t, r, i) {
                if (T.onscrollstart) {
                    var s = {
                        type: "scrollstart",
                        current: {
                            x: e,
                            y: o
                        },
                        request: {
                            x: t,
                            y: r
                        },
                        end: {
                            x: T.newscrollx,
                            y: T.newscrolly
                        },
                        speed: i
                    };
                    T.onscrollstart.call(T, s)
                }
            }, this.triggerScrollEnd = function () {
                if (T.onscrollend) {
                    var e = T.getScrollLeft(),
                        o = T.getScrollTop(),
                        t = {
                            type: "scrollend",
                            current: {
                                x: e,
                                y: o
                            },
                            end: {
                                x: e,
                                y: o
                            }
                        };
                    T.onscrollend.call(T, t)
                }
            };
            var X = 0,
                D = 0,
                A = 0,
                q = 1,
                j = !1;
            if (this.onmousewheel = function (e) {
                if (T.wheelprevented || T.locked) return !1;
                if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
                if (T.rail.drag) return T.cancelEvent(e);
                if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
                var o = v(),
                    t = !1;
                if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
                var r = k(e, !1, t);
                return r && (T.checkarea = 0), r
            }, this.onmousewheelhr = function (e) {
                if (!T.wheelprevented) {
                    if (T.railslocked || !T.railh.scrollable) return !0;
                    if (T.rail.drag) return T.cancelEvent(e);
                    var o = v(),
                        t = !1;
                    return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
                }
            }, this.stop = function () {
                return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
            }, this.getTransitionSpeed = function (e) {
                return 80 + e / 72 * M.scrollspeed | 0
            }, M.smoothscroll)
                if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
                    var F = "";
                    this.resetTransition = function () {
                        F = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms")
                    }, this.prepareTransition = function (e, o) {
                        var t = o ? e : T.getTransitionSpeed(e),
                            r = t + "ms";
                        return F !== r && (F = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t
                    }, this.doScrollLeft = function (e, o) {
                        var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                        T.doScrollPos(e, t, o)
                    }, this.doScrollTop = function (e, o) {
                        var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                        T.doScrollPos(t, e, o)
                    }, this.cursorupdate = {
                        running: !1,
                        start: function () {
                            var e = this;
                            if (!e.running) {
                                e.running = !0;
                                var o = function () {
                                    e.running && p(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0])
                                };
                                p(o)
                            }
                        },
                        stop: function () {
                            this.running = !1
                        }
                    }, this.doScrollPos = function (e, o, t) {
                        var r = T.getScrollTop(),
                            i = T.getScrollLeft();
                        if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
                        T.newscrolly = o, T.newscrollx = e;
                        var s = T.getScrollTop(),
                            n = T.getScrollLeft(),
                            l = {};
                        l.x = e - n, l.y = o - s;
                        var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
                            c = T.prepareTransition(a);
                        T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx)
                    }, this.cancelScroll = function () {
                        if (!T.scrollendtrapped) return !0;
                        var e = T.getScrollTop(),
                            o = T.getScrollLeft();
                        return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T
                    }, this.onScrollTransitionEnd = function () {
                        if (T.scrollendtrapped) {
                            var e = T.getScrollTop(),
                                o = T.getScrollLeft();
                            if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
                            T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1
                        }
                    }
                } else this.doScrollLeft = function (e, o) {
                    var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, t, o)
                }, this.doScrollTop = function (e, o) {
                    var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(t, e, o)
                }, this.doScrollPos = function (e, o, t) {
                    var r = T.getScrollTop(),
                        i = T.getScrollLeft();
                    ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
                    var s = !1;
                    if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
                    T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
                    var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
                        l = T.getTransitionSpeed(n);
                    T.bzscroll = {};
                    var a = s ? 1 : .58;
                    T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
                    var c = (v(), function () {
                        if (T.scrollrunning) {
                            var e = T.bzscroll.y.getPos();
                            T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = p(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd())
                        }
                    });
                    T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = p(c))
                }, this.cancelScroll = function () {
                    return T.timer && m(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
                };
            else this.doScrollLeft = function (e, o) {
                var t = T.getScrollTop();
                T.doScrollPos(e, t, o)
            }, this.doScrollTop = function (e, o) {
                var t = T.getScrollLeft();
                T.doScrollPos(t, e, o)
            }, this.doScrollPos = function (e, o, t) {
                var r = e > T.page.maxw ? T.page.maxw : e;
                r < 0 && (r = 0);
                var i = o > T.page.maxh ? T.page.maxh : o;
                i < 0 && (i = 0), T.synched("scroll", function () {
                    T.setScrollTop(i), T.setScrollLeft(r)
                })
            }, this.cancelScroll = function () {
            };
            this.doScrollBy = function (e, o) {
                z(0, e)
            }, this.doScrollLeftBy = function (e, o) {
                z(e, 0)
            }, this.doScrollTo = function (e, o) {
                var t = o ? Math.round(e * T.scrollratio.y) : e;
                t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
            }, this.checkContentSize = function () {
                var e = T.getContentSize();
                e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
            }, T.onscroll = function (e) {
                T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
                    T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor()
                })
            }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
                if (!T.zoomactive) {
                    T.zoomactive = !0, T.zoomrestore = {
                        style: {}
                    };
                    var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                        t = T.win[0].style;
                    for (var r in o) {
                        var i = o[r];
                        T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
                    }
                    T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
                        w: T.win.outerWidth() - T.win.width(),
                        h: T.win.outerHeight() - T.win.height()
                    }, P.isios4 && (T.zoomrestore.scrollTop = u.scrollTop(), u.scrollTop(0)), T.win.css({
                        position: P.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        zIndex: l + 100,
                        margin: 0
                    });
                    var s = T.win.css("backgroundColor");
                    return ("" === s || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
                        zIndex: l + 101
                    }), T.zoom.css({
                        zIndex: l + 102
                    }), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e)
                }
            }, this.doZoomOut = function (e) {
                if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && u.scrollTop(T.zoomrestore.scrollTop), T.rail.css({
                    "z-index": T.zindex
                }), T.zoom.css({
                    "z-index": T.zindex
                }), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e)
            }, this.doZoom = function (e) {
                return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
            }, this.resizeZoom = function () {
                if (T.zoomactive) {
                    var e = T.getScrollTop();
                    T.win.css({
                        width: u.width() - T.zoomrestore.padding.w + "px",
                        height: u.height() - T.zoomrestore.padding.h + "px"
                    }), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e))
                }
            }, this.init(), a.nicescroll.push(this)
        },
        S = function (e) {
            var o = this;
            this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
                o.stop(), o.steptime = 0, o.lasttime = v(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
            }, this.update = function (e, t) {
                var r = v();
                o.steptime = r - o.lasttime, o.lasttime = r;
                var i = t - o.lasty,
                    s = e - o.lastx,
                    n = o.nc.getScrollTop(),
                    l = o.nc.getScrollLeft(),
                    a = n + i,
                    c = l + s;
                o.snapx = c < 0 || c > o.nc.page.maxw, o.snapy = a < 0 || a > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t
            }, this.stop = function () {
                o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
            }, this.doSnapy = function (e, t) {
                var r = !1;
                t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
            }, this.doMomentum = function (e) {
                var t = v(),
                    r = e ? t + e : o.lasttime,
                    i = o.nc.getScrollLeft(),
                    s = o.nc.getScrollTop(),
                    n = o.nc.page.maxh,
                    l = o.nc.page.maxw;
                o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
                var a = r && t - r <= 60;
                (s < 0 || s > n || i < 0 || i > l) && (a = !1);
                var c = !(!o.speedy || !a) && o.speedy,
                    d = !(!o.speedx || !a) && o.speedx;
                if (c || d) {
                    var u = Math.max(16, o.steptime);
                    if (u > 50) {
                        var h = u / 50;
                        o.speedx *= h, o.speedy *= h, u = 50
                    }
                    o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
                    var p = o.lastscrollx,
                        m = o.lastscrolly,
                        f = function () {
                            var e = v() - t > 600 ? .04 : .02;
                            o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
                                if (o.speedx) {
                                    o.nc.getScrollLeft();
                                    o.chkx = p, o.nc.setScrollLeft(p)
                                }
                                if (o.speedy) {
                                    o.nc.getScrollTop();
                                    o.chky = m, o.nc.setScrollTop(m)
                                }
                                o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
                            }), o.demulxy < 1 ? o.timer = setTimeout(f, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
                        };
                    f()
                } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
            }
        },
        z = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (e, o, t) {
            var r = a.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : z.call(e)
        },
        set: function (e, o) {
            var t = a.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : z.call(e, o), this
        }
    }, e.fn.scrollTop = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollTop() : z.call(this)
        }
        return this.each(function () {
            var o = a.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : z.call(a(this), e)
        })
    };
    var k = e.fn.scrollLeft;
    a.cssHooks.pageXOffset = {
        get: function (e, o, t) {
            var r = a.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : k.call(e)
        },
        set: function (e, o) {
            var t = a.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : k.call(e, o), this
        }
    }, e.fn.scrollLeft = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollLeft() : k.call(this)
        }
        return this.each(function () {
            var o = a.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : k.call(a(this), e)
        })
    };
    var T = function (e) {
        var o = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
            return a.each(o, e), o
        }, this.push = function (e) {
            o[o.length] = e, o.length++
        }, this.eq = function (e) {
            return o[e]
        }, e)
            for (var t = 0; t < e.length; t++) {
                var r = a.data(e[t], "__nicescroll") || !1;
                r && (this[this.length] = r, this.length++)
            }
        return this
    };
    t(T.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
        e[o] = function () {
            var e = arguments;
            return this.each(function () {
                this[o].apply(this, e)
            })
        }
    }), e.fn.getNiceScroll = function (e) {
        return void 0 === e ? new T(this) : this[e] && a.data(this[e], "__nicescroll") || !1
    };
    var E = e.expr.pseudos || e.expr[":"];
    E.nicescroll = function (e) {
        return void 0 !== a.data(e, "__nicescroll")
    }, a.fn.niceScroll = function (e, o) {
        void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1);
        var t = new T;
        return this.each(function () {
            var r = a(this),
                i = a.extend({}, o);
            if (e) {
                var s = a(e);
                i.doc = s.length > 1 ? a(e, r) : s, i.win = r
            }
            var n = !("doc" in i);
            n || "win" in i || (i.win = r);
            var l = r.data("__nicescroll") || !1;
            l || (i.doc = i.doc || r, l = new x(i, r), r.data("__nicescroll", l)), t.push(l)
        }), 1 === t.length ? t[0] : t
    }, d.NiceScroll = {
        getjQuery: function () {
            return e
        }
    }, a.nicescroll || (a.nicescroll = new T, a.nicescroll.options = w)
});
(function () {
    var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        e = [].slice;
    !function (t, e) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (n) {
            return e(n, t)
        }) : e(t.jQuery, t)
    }(this, function (n, r) {
        var i, o, l, s, c, a, u, f, h, d, p, v, y, w, g, S;
        return i = n(r), f = t.call(r, "ontouchstart") >= 0, s = {
            horizontal: {},
            vertical: {}
        }, c = 1, u = {}, a = "waypoints-context-id", p = "resize.waypoints", v = "scroll.waypoints", y = 1, w = "waypoints-waypoint-ids", g = "waypoint", S = "waypoints", o = function () {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + c++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, t.data(a, this.id), u[this.id] = this, t.bind(v, function () {
                    var t;
                    if (!e.didScroll && !f) return e.didScroll = !0, t = function () {
                        return e.doScroll(), e.didScroll = !1
                    }, r.setTimeout(t, n[S].settings.scrollThrottle)
                }), t.bind(p, function () {
                    var t;
                    if (!e.didResize) return e.didResize = !0, t = function () {
                        return n[S]("refresh"), e.didResize = !1
                    }, r.setTimeout(t, n[S].settings.resizeThrottle)
                })
            }

            return t.prototype.doScroll = function () {
                var t, e = this;
                return t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !f || t.vertical.oldScroll && t.vertical.newScroll || n[S]("refresh"), n.each(t, function (t, r) {
                    var i, o, l;
                    return l = [], o = r.newScroll > r.oldScroll, i = o ? r.forward : r.backward, n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        return r.oldScroll < (n = e.offset) && n <= r.newScroll ? l.push(e) : r.newScroll < (i = e.offset) && i <= r.oldScroll ? l.push(e) : void 0
                    }), l.sort(function (t, e) {
                        return t.offset - e.offset
                    }), o || l.reverse(), n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) return e.trigger([i])
                    })
                }), this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }, t.prototype.refresh = function () {
                var t, e, r, i = this;
                return r = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[S]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, c;
                        if (i = r.options.offset, l = r.offset, o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp], n.isFunction(i) ? i = i.apply(r.element) : "string" == typeof i && (i = parseFloat(i), r.options.offset.indexOf("%") > -1 && (i = Math.ceil(e.contextDimension * i / 100))), r.offset = o - e.contextOffset + e.contextScroll - i, (!r.options.onlyOnScroll || null == l) && r.enabled) return null !== l && l < (s = e.oldScroll) && s <= r.offset ? r.trigger([e.backward]) : null !== l && l > (c = e.oldScroll) && c >= r.offset ? r.trigger([e.forward]) : null === l && e.oldScroll >= r.offset ? r.trigger([e.forward]) : void 0
                    })
                })
            }, t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, v].join(" ")), delete u[this.id]
            }, t
        }(), l = function () {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r), "bottom-in-view" === r.offset && (r.offset = function () {
                    var t;
                    return t = n[S]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = r.horizontal ? "horizontal" : "vertical", this.callback = r.handler, this.context = e, this.enabled = r.enabled, this.id = "waypoints" + y++, this.offset = null, this.options = r, e.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, i = null != (o = t.data(w)) ? o : [], i.push(this.id), t.data(w, i)
            }

            return t.prototype.trigger = function (t) {
                if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
            }, t.prototype.disable = function () {
                return this.enabled = !1
            }, t.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, t.prototype.destroy = function () {
                return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, t.getWaypointsByElement = function (t) {
                var e, r;
                return (r = n(t).data(w)) ? (e = n.extend({}, s.horizontal, s.vertical), n.map(r, function (t) {
                    return e[t]
                })) : []
            }, t
        }(), d = {
            init: function (t, e) {
                var r;
                return null == e && (e = {}), null == (r = e.handler) && (e.handler = t), this.each(function () {
                    var t, r, i, s;
                    return t = n(this), i = null != (s = e.context) ? s : n.fn[g].defaults.context, n.isWindow(i) || (i = t.closest(i)), i = n(i), r = u[i.data(a)], r || (r = new o(i)), new l(t, r, e)
                }), n[S]("refresh"), this
            },
            disable: function () {
                return d._invoke(this, "disable")
            },
            enable: function () {
                return d._invoke(this, "enable")
            },
            destroy: function () {
                return d._invoke(this, "destroy")
            },
            prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) return t.push(n[e - 1])
                })
            },
            next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) return t.push(n[e + 1])
                })
            },
            _traverse: function (t, e, i) {
                var o, l;
                return null == t && (t = "vertical"), null == e && (e = r), l = h.aggregate(e), o = [], this.each(function () {
                    var e;
                    return e = n.inArray(this, l[t]), i(o, e, l[t])
                }), this.pushStack(o)
            },
            _invoke: function (t, e) {
                return t.each(function () {
                    var t;
                    return t = l.getWaypointsByElement(this), n.each(t, function (t, n) {
                        return n[e](), !0
                    })
                }), this
            }
        }, n.fn[g] = function () {
            var t, r;
            return r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[r] ? d[r].apply(this, t) : n.isFunction(r) ? d.init.apply(this, arguments) : n.isPlainObject(r) ? d.init.apply(this, [null, r]) : r ? n.error("The " + r + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[g].defaults = {
            context: r,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, h = {
            refresh: function () {
                return n.each(u, function (t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function () {
                var t;
                return null != (t = r.innerHeight) ? t : i.height()
            },
            aggregate: function (t) {
                var e, r, i;
                return e = s, t && (e = null != (i = u[n(t).data(a)]) ? i.waypoints : void 0), e ? (r = {
                    horizontal: [],
                    vertical: []
                }, n.each(r, function (t, i) {
                    return n.each(e[t], function (t, e) {
                        return i.push(e)
                    }), i.sort(function (t, e) {
                        return t.offset - e.offset
                    }), r[t] = n.map(i, function (t) {
                        return t.element
                    }), r[t] = n.unique(r[t])
                }), r) : []
            },
            above: function (t) {
                return null == t && (t = r), h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function (t) {
                return null == t && (t = r), h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function (t) {
                return null == t && (t = r), h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function (t) {
                return null == t && (t = r), h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function () {
                return h._invoke("enable")
            },
            disable: function () {
                return h._invoke("disable")
            },
            destroy: function () {
                return h._invoke("destroy")
            },
            extendFn: function (t, e) {
                return d[t] = e
            },
            _invoke: function (t) {
                var e;
                return e = n.extend({}, s.vertical, s.horizontal), n.each(e, function (e, n) {
                    return n[t](), !0
                })
            },
            _filter: function (t, e, r) {
                var i, o;
                return (i = u[n(t).data(a)]) ? (o = [], n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) return o.push(e)
                }), o.sort(function (t, e) {
                    return t.offset - e.offset
                }), n.map(o, function (t) {
                    return t.element
                })) : []
            }
        }, n[S] = function () {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[n] ? h[n].apply(null, t) : h.aggregate.call(null, n)
        }, n[S].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, i.load(function () {
            return n[S]("refresh")
        })
    })
}).call(this);
/*!
 * fullPage 2.9.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function (e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function (e, n, t, o, i) {
    "use strict";
    var a = "fullpage-wrapper",
        r = "." + a,
        l = "fp-scrollable",
        s = "." + l,
        c = "fp-responsive",
        d = "fp-notransition",
        f = "fp-destroyed",
        u = "fp-enabled",
        h = "fp-viewing",
        p = "active",
        v = "." + p,
        g = "fp-completely",
        m = "." + g,
        w = ".section",
        S = "fp-section",
        y = "." + S,
        b = y + v,
        x = y + ":first",
        C = y + ":last",
        T = "fp-tableCell",
        k = "." + T,
        I = "fp-auto-height",
        L = "fp-normal-scroll",
        E = "fp-nav",
        M = "#" + E,
        O = "fp-tooltip",
        A = "." + O,
        R = "fp-show-active",
        H = ".slide",
        B = "fp-slide",
        z = "." + B,
        D = z + v,
        P = "fp-slides",
        q = "." + P,
        F = "fp-slidesContainer",
        V = "." + F,
        W = "fp-table",
        U = "fp-slidesNav",
        Y = "." + U,
        j = Y + " a",
        N = "fp-controlArrow",
        X = "." + N,
        K = "fp-prev",
        Q = "." + K,
        G = N + " " + K,
        J = X + Q,
        Z = "fp-next",
        $ = "." + Z,
        _ = N + " " + Z,
        ee = X + $,
        ne = e(n),
        te = e(t),
        oe = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function (l) {
        function s(n, t) {
            n || nt(0), rt("autoScrolling", n, t);
            var o = e(b);
            l.autoScrolling && !l.scrollBar ? (ct.css({
                overflow: "hidden",
                height: "100%"
            }), N(Bt.recordHistory, "internal"), St.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && nt(o.position().top)) : (ct.css({
                overflow: "visible",
                height: "initial"
            }), N(!1, "internal"), St.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), o.length && ct.scrollTop(o.position().top))
        }

        function N(e, n) {
            rt("recordHistory", e, n)
        }

        function Q(e, n) {
            rt("scrollingSpeed", e, n)
        }

        function Z(e, n) {
            rt("fitToSection", e, n)
        }

        function $(e) {
            l.lockAnchors = e
        }

        function ae(e) {
            e ? (Kn(), Qn()) : (Xn(), Gn())
        }

        function re(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
                ot(n, t, "m")
            })) : n ? (ae(!0), Jn()) : (ae(!1), Zn())
        }

        function le(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
                ot(n, t, "k")
            })) : l.keyboardScrolling = n
        }

        function se() {
            var n = e(b).prev(y);
            n.length || !l.loopTop && !l.continuousVertical || (n = e(y).last()), n.length && Ke(n, null, !0)
        }

        function ce() {
            var n = e(b).next(y);
            n.length || !l.loopBottom && !l.continuousVertical || (n = e(y).first()), n.length && Ke(n, null, !1)
        }

        function de(e, n) {
            Q(0, "internal"), fe(e, n), Q(Bt.scrollingSpeed, "internal")
        }

        function fe(e, n) {
            var t = Dn(e);
            "undefined" != typeof n ? qn(e, n) : t.length > 0 && Ke(t)
        }

        function ue(e) {
            je("right", e)
        }

        function he(e) {
            je("left", e)
        }

        function pe(n) {
            if (!St.hasClass(f)) {
                bt = !0, yt = ne.height(), e(y).each(function () {
                    var n = e(this).find(q),
                        t = e(this).find(z);
                    l.verticalCentered && e(this).find(k).css("height", Bn(e(this)) + "px"), e(this).css("height", yt + "px"), l.scrollOverflow && (t.length ? t.each(function () {
                        Rn(e(this))
                    }) : Rn(e(this))), t.length > 1 && Sn(n, n.find(D))
                });
                var t = e(b),
                    o = t.index(y);
                o && de(o + 1), bt = !1, e.isFunction(l.afterResize) && n && l.afterResize.call(St), e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(St)
            }
        }

        function ve(n) {
            var t = dt.hasClass(c);
            n ? t || (s(!1, "internal"), Z(!1, "internal"), e(M).hide(), dt.addClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n)) : t && (s(Bt.autoScrolling, "internal"), Z(Bt.autoScrolling, "internal"), e(M).show(), dt.removeClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n))
        }

        function ge() {
            l.css3 && (l.css3 = Nn()), l.scrollBar = l.scrollBar || l.hybrid, we(), Se(), re(!0), s(l.autoScrolling, "internal"), Tn(), jn(), "complete" === t.readyState && rn(), ne.on("load", rn)
        }

        function me() {
            ne.on("scroll", Re).on("hashchange", ln).blur(pn).resize(Cn), te.keydown(sn).keyup(dn).on("click touchstart", M + " a", vn).on("click touchstart", j, gn).on("click", A, cn), e(y).on("click touchstart", X, hn), l.normalScrollElements && (te.on("mouseenter", l.normalScrollElements, function () {
                ae(!1)
            }), te.on("mouseleave", l.normalScrollElements, function () {
                ae(!0)
            }))
        }

        function we() {
            var n = St.find(l.sectionSelector);
            l.anchors.length || (l.anchors = n.filter("[data-anchor]").map(function () {
                return e(this).data("anchor").toString()
            }).get()), l.navigationTooltips.length || (l.navigationTooltips = n.filter("[data-tooltip]").map(function () {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function Se() {
            St.css({
                height: "100%",
                position: "relative"
            }), St.addClass(a), e("html").addClass(u), yt = ne.height(), St.removeClass(f), Ce(), e(y).each(function (n) {
                var t = e(this),
                    o = t.find(z),
                    i = o.length;
                be(t, n), xe(t, n), i > 0 ? ye(t, o, i) : l.verticalCentered && Hn(t)
            }), l.fixedElements && l.css3 && e(l.fixedElements).appendTo(dt), l.navigation && ke(), Le(), l.scrollOverflow ? ("complete" === t.readyState && Ie(), ne.on("load", Ie)) : Oe()
        }

        function ye(n, t, o) {
            var i = 100 * o,
                a = 100 / o;
            t.wrapAll('<div class="' + F + '" />'), t.parent().wrap('<div class="' + P + '" />'), n.find(V).css("width", i + "%"), o > 1 && (l.controlArrows && Te(n), l.slidesNavigation && Vn(n, o)), t.each(function (n) {
                e(this).css("width", a + "%"), l.verticalCentered && Hn(e(this))
            });
            var r = n.find(D);
            r.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== r.index()) ? et(r, "internal") : t.eq(0).addClass(p)
        }

        function be(n, t) {
            t || 0 !== e(b).length || n.addClass(p), vt = e(b), n.css("height", yt + "px"), l.paddingTop && n.css("padding-top", l.paddingTop), l.paddingBottom && n.css("padding-bottom", l.paddingBottom), "undefined" != typeof l.sectionsColor[t] && n.css("background-color", l.sectionsColor[t]), "undefined" != typeof l.anchors[t] && n.attr("data-anchor", l.anchors[t])
        }

        function xe(n, t) {
            "undefined" != typeof l.anchors[t] && n.hasClass(p) && Mn(l.anchors[t], t), l.menu && l.css3 && e(l.menu).closest(r).length && e(l.menu).appendTo(dt)
        }

        function Ce() {
            St.find(l.sectionSelector).addClass(S), St.find(l.slideSelector).addClass(B)
        }

        function Te(e) {
            e.find(q).after('<div class="' + G + '"></div><div class="' + _ + '"></div>'), "#fff" != l.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + l.controlArrowColor), e.find(J).css("border-color", "transparent " + l.controlArrowColor + " transparent transparent")), l.loopHorizontal || e.find(J).hide()
        }

        function ke() {
            dt.append('<div id="' + E + '"><ul></ul></div>');
            var n = e(M);
            n.addClass(function () {
                return l.showActiveTooltip ? R + " " + l.navigationPosition : l.navigationPosition
            });
            for (var t = 0; t < e(y).length; t++) {
                var o = "";
                l.anchors.length && (o = l.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    a = l.navigationTooltips[t];
                "undefined" != typeof a && "" !== a && (i += '<div class="' + O + " " + l.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i)
            }
            e(M).css("margin-top", "-" + e(M).height() / 2 + "px"), e(M).find("li").eq(e(b).index(y)).find("a").addClass(p)
        }

        function Ie() {
            e(y).each(function () {
                var n = e(this).find(z);
                n.length ? n.each(function () {
                    Rn(e(this))
                }) : Rn(e(this))
            }), Oe()
        }

        function Le() {
            St.find('iframe[src*="youtube.com/embed/"]').each(function () {
                Ee(e(this), "enablejsapi=1")
            })
        }

        function Ee(e, n) {
            var t = e.attr("src");
            e.attr("src", t + Me(t) + n)
        }

        function Me(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function Oe() {
            var n = e(b);
            n.addClass(g), l.scrollOverflowHandler.afterRender && l.scrollOverflowHandler.afterRender(n), en(n), nn(n), l.scrollOverflowHandler.afterLoad(), Ae() && e.isFunction(l.afterLoad) && l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1), e.isFunction(l.afterRender) && l.afterRender.call(St)
        }

        function Ae() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = Dn(decodeURIComponent(e[0]));
            return !t.length || t.length && t.index() === vt.index()
        }

        function Re() {
            var n;
            if (!l.autoScrolling || l.scrollBar) {
                var o = ne.scrollTop(),
                    i = ze(o),
                    a = 0,
                    r = o + ne.height() / 2,
                    s = dt.height() - ne.height() === o,
                    c = t.querySelectorAll(y);
                if (s) a = c.length - 1;
                else if (o)
                    for (var d = 0; d < c.length; ++d) {
                        var f = c[d];
                        f.offsetTop <= r && (a = d)
                    } else a = 0;
                if (Be(i) && (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)), n = e(c).eq(a), !n.hasClass(p)) {
                    zt = !0;
                    var u, h, v = e(b),
                        m = v.index(y) + 1,
                        w = On(n),
                        S = n.data("anchor"),
                        x = n.index(y) + 1,
                        C = n.find(D);
                    C.length && (h = C.data("anchor"), u = C.index()), Ct && (n.addClass(p).siblings().removeClass(p), e.isFunction(l.onLeave) && l.onLeave.call(v, m, x, w), e.isFunction(l.afterLoad) && l.afterLoad.call(n, S, x), on(v), en(n), nn(n), Mn(S, x - 1), l.anchors.length && (ut = S), Wn(u, h, S, x)), clearTimeout(Mt), Mt = setTimeout(function () {
                        zt = !1
                    }, 100)
                }
                l.fitToSection && (clearTimeout(Ot), Ot = setTimeout(function () {
                    l.fitToSection && He()
                }, l.fitToSectionDelay))
            }
        }

        function He() {
            Ct && (bt = !0, Ke(e(b)), bt = !1)
        }

        function Be(n) {
            var t = e(b).position().top,
                o = t + ne.height();
            return "up" == n ? o >= ne.scrollTop() + ne.height() : t <= ne.scrollTop()
        }

        function ze(e) {
            var n = e > Dt ? "down" : "up";
            return Dt = e, Ut = e, n
        }

        function De(e, n) {
            if (kt.m[e]) {
                var t = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ce : se;
                if (n.length > 0) {
                    if (!l.scrollOverflowHandler.isScrolled(t, n)) return !0;
                    o()
                } else o()
            }
        }

        function Pe(e) {
            var n = e.originalEvent;
            !Fe(e.target) && l.autoScrolling && Ve(n) && e.preventDefault()
        }

        function qe(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(y);
            if (!Fe(n.target) && Ve(t)) {
                l.autoScrolling && n.preventDefault();
                var a = l.scrollOverflowHandler.scrollable(i),
                    r = _n(t);
                Ft = r.y, Vt = r.x, i.find(q).length && o.abs(qt - Vt) > o.abs(Pt - Ft) ? !gt && o.abs(qt - Vt) > ne.outerWidth() / 100 * l.touchSensitivity && (qt > Vt ? kt.m.right && ue(i) : kt.m.left && he(i)) : l.autoScrolling && Ct && o.abs(Pt - Ft) > ne.height() / 100 * l.touchSensitivity && (Pt > Ft ? De("down", a) : Ft > Pt && De("up", a))
            }
        }

        function Fe(n, t) {
            t = t || 0;
            var o = e(n).parent();
            return !!(t < l.normalScrollElementTouchThreshold && o.is(l.normalScrollElements)) || t != l.normalScrollElementTouchThreshold && Fe(o, ++t)
        }

        function Ve(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function We(e) {
            var n = e.originalEvent;
            if (l.fitToSection && ct.stop(), Ve(n)) {
                var t = _n(n);
                Pt = t.y, qt = t.x
            }
        }

        function Ue(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) t += i[a];
            return o.ceil(t / n)
        }

        function Ye(t) {
            var i = (new Date).getTime(),
                a = e(m).hasClass(L);
            if (l.autoScrolling && !pt && !a) {
                t = t || n.event;
                var r = t.wheelDelta || -t.deltaY || -t.detail,
                    s = o.max(-1, o.min(1, r)),
                    c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                    d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;
                Tt.length > 149 && Tt.shift(), Tt.push(o.abs(r)), l.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var f = e(b),
                    u = l.scrollOverflowHandler.scrollable(f),
                    h = i - Wt;
                if (Wt = i, h > 200 && (Tt = []), Ct) {
                    var p = Ue(Tt, 10),
                        v = Ue(Tt, 70),
                        g = p >= v;
                    g && d && (s < 0 ? De("down", u) : De("up", u))
                }
                return !1
            }
            l.fitToSection && ct.stop()
        }

        function je(n, t) {
            var o = "undefined" == typeof t ? e(b) : t,
                i = o.find(q),
                a = i.find(z).length;
            if (!(!i.length || gt || a < 2)) {
                var r = i.find(D),
                    s = null;
                if (s = "left" === n ? r.prev(z) : r.next(z), !s.length) {
                    if (!l.loopHorizontal) return;
                    s = "left" === n ? r.siblings(":last") : r.siblings(":first")
                }
                gt = !0, Sn(i, s, n)
            }
        }

        function Ne() {
            e(D).each(function () {
                et(e(this), "internal")
            })
        }

        function Xe(e) {
            var n = e.position(),
                t = n.top,
                o = n.top > Ut,
                i = t - yt + e.outerHeight(),
                a = l.bigSectionsDestination;
            return e.outerHeight() > yt ? (o || a) && "bottom" !== a || (t = i) : (o || bt && e.is(":last-child")) && (t = i), Ut = t, t
        }

        function Ke(n, t, o) {
            if ("undefined" != typeof n) {
                var i, a, r = Xe(n),
                    s = {
                        element: n,
                        callback: t,
                        isMovementUp: o,
                        dtop: r,
                        yMovement: On(n),
                        anchorLink: n.data("anchor"),
                        sectionIndex: n.index(y),
                        activeSlide: n.find(D),
                        activeSection: e(b),
                        leavingSection: e(b).index(y) + 1,
                        localIsResizing: bt
                    };
                s.activeSection.is(n) && !bt || l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(I) || (s.activeSlide.length && (i = s.activeSlide.data("anchor"), a = s.activeSlide.index()), l.autoScrolling && l.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Je(s)), e.isFunction(l.onLeave) && !s.localIsResizing && l.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) === !1 || (s.localIsResizing || on(s.activeSection), l.scrollOverflowHandler.beforeLeave(), n.addClass(p).siblings().removeClass(p), en(n), l.scrollOverflowHandler.onLeave(), Ct = !1, Wn(a, i, s.anchorLink, s.sectionIndex), Qe(s), ut = s.anchorLink, Mn(s.anchorLink, s.sectionIndex)))
            }
        }

        function Qe(n) {
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                zn(t, !0), l.scrollingSpeed ? (clearTimeout(Lt), Lt = setTimeout(function () {
                    $e(n)
                }, l.scrollingSpeed)) : $e(n)
            } else {
                var i = Ge(n);
                e(i.element).animate(i.options, l.scrollingSpeed, l.easing).promise().done(function () {
                    l.scrollBar ? setTimeout(function () {
                        $e(n)
                    }, 30) : $e(n)
                })
            }
        }

        function Ge(e) {
            var n = {};
            return l.autoScrolling && !l.scrollBar ? (n.options = {
                top: -e.dtop
            }, n.element = r) : (n.options = {
                scrollTop: e.dtop
            }, n.element = "html, body"), n
        }

        function Je(n) {
            return n.isMovementUp ? e(b).before(n.activeSection.nextAll(y)) : e(b).after(n.activeSection.prevAll(y).get().reverse()), nt(e(b).position().top), Ne(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = On(n.element), n
        }

        function Ze(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), nt(e(b).position().top), Ne())
        }

        function $e(n) {
            Ze(n), e.isFunction(l.afterLoad) && !n.localIsResizing && l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), l.scrollOverflowHandler.afterLoad(), n.localIsResizing || nn(n.element), n.element.addClass(g).siblings().removeClass(g), Ct = !0, e.isFunction(n.callback) && n.callback.call(this)
        }

        function _e(e, n) {
            e.attr(n, e.data(n)).removeAttr("data-" + n)
        }

        function en(n) {
            if (l.lazyLoading) {
                var t, o = an(n);
                o.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    t = e(this), e.each(["src", "srcset"], function (e, n) {
                        var o = t.attr("data-" + n);
                        "undefined" != typeof o && o && _e(t, n)
                    }), t.is("source") && t.closest("video").get(0).load()
                })
            }
        }

        function nn(n) {
            var t = an(n);
            t.find("video, audio").each(function () {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && tn(n), n.onload = function () {
                    n.hasAttribute("data-autoplay") && tn(n)
                }
            })
        }

        function tn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function on(n) {
            var t = an(n);
            t.find("video, audio").each(function () {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function an(n) {
            var t = n.find(D);
            return t.length && (n = e(t)), n
        }

        function rn() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);
            t && (l.animateAnchor ? qn(t, o) : de(t, o))
        }

        function ln() {
            if (!zt && !l.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/"),
                    t = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = "undefined" == typeof ut,
                    a = "undefined" == typeof ut && "undefined" == typeof o && !gt;
                t.length && (t && t !== ut && !i || a || !gt && ht != o) && qn(t, o)
            }
        }

        function sn(n) {
            clearTimeout(At);
            var t = e(":focus");
            if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && l.keyboardScrolling && l.autoScrolling) {
                var o = n.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(), pt = n.ctrlKey, At = setTimeout(function () {
                    mn(n)
                }, 150)
            }
        }

        function cn() {
            e(this).prev().trigger("click")
        }

        function dn(e) {
            xt && (pt = e.ctrlKey)
        }

        function fn(e) {
            2 == e.which && (Yt = e.pageY, St.on("mousemove", wn))
        }

        function un(e) {
            2 == e.which && St.off("mousemove")
        }

        function hn() {
            var n = e(this).closest(y);
            e(this).hasClass(K) ? kt.m.left && he(n) : kt.m.right && ue(n)
        }

        function pn() {
            xt = !1, pt = !1
        }

        function vn(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            Ke(e(y).eq(t))
        }

        function gn(n) {
            n.preventDefault();
            var t = e(this).closest(y).find(q),
                o = t.find(z).eq(e(this).closest("li").index());
            Sn(t, o)
        }

        function mn(n) {
            var t = n.shiftKey;
            if (Ct || !([37, 39].indexOf(n.which) < 0)) switch (n.which) {
                case 38:
                case 33:
                    kt.k.up && se();
                    break;
                case 32:
                    if (t && kt.k.up) {
                        se();
                        break
                    }
                case 40:
                case 34:
                    kt.k.down && ce();
                    break;
                case 36:
                    kt.k.up && fe(1);
                    break;
                case 35:
                    kt.k.down && fe(e(y).length);
                    break;
                case 37:
                    kt.k.left && he();
                    break;
                case 39:
                    kt.k.right && ue();
                    break;
                default:
                    return
            }
        }

        function wn(e) {
            Ct && (e.pageY < Yt && kt.m.up ? se() : e.pageY > Yt && kt.m.down && ce()), Yt = e.pageY
        }

        function Sn(n, t, o) {
            var i = n.closest(y),
                a = {
                    slides: n,
                    destiny: t,
                    direction: o,
                    destinyPos: t.position(),
                    slideIndex: t.index(),
                    section: i,
                    sectionIndex: i.index(y),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(Y),
                    slideAnchor: Yn(t),
                    prevSlide: i.find(D),
                    prevSlideIndex: i.find(D).index(),
                    localIsResizing: bt
                };
            return a.xMovement = An(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (Ct = !1), l.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(l.onSlideLeave) && l.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.xMovement, a.slideIndex) === !1 ? void(gt = !1) : (t.addClass(p).siblings().removeClass(p), a.localIsResizing || (on(a.prevSlide), en(t)), !l.loopHorizontal && l.controlArrows && (i.find(J).toggle(0 !== a.slideIndex), i.find(ee).toggle(!t.is(":last-child"))), i.hasClass(p) && !a.localIsResizing && Wn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), void bn(n, a, !0))
        }

        function yn(n) {
            xn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(l.afterSlideLoad) && l.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), Ct = !0, nn(n.destiny)), gt = !1
        }

        function bn(e, n, t) {
            var i = n.destinyPos;
            if (l.css3) {
                var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                kn(e.find(V)).css(tt(a)), Et = setTimeout(function () {
                    t && yn(n)
                }, l.scrollingSpeed, l.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, l.scrollingSpeed, l.easing, function () {
                t && yn(n)
            })
        }

        function xn(e, n) {
            e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p)
        }

        function Cn() {
            if (Tn(), mt) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ne.height();
                    o.abs(i - jt) > 20 * o.max(jt, i) / 100 && (pe(!0), jt = i)
                }
            } else clearTimeout(It), It = setTimeout(function () {
                pe(!0)
            }, 350)
        }

        function Tn() {
            var e = l.responsive || l.responsiveWidth,
                n = l.responsiveHeight,
                t = e && ne.outerWidth() < e,
                o = n && ne.height() < n;
            e && n ? ve(t || o) : e ? ve(t) : n && ve(o)
        }

        function kn(e) {
            var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3;
            return e.removeClass(d), e.css({
                "-webkit-transition": n,
                transition: n
            })
        }

        function In(e) {
            return e.addClass(d)
        }

        function Ln(n, t) {
            l.navigation && (e(M).find(v).removeClass(p), n ? e(M).find('a[href="#' + n + '"]').addClass(p) : e(M).find("li").eq(t).find("a").addClass(p))
        }

        function En(n) {
            l.menu && (e(l.menu).find(v).removeClass(p), e(l.menu).find('[data-menuanchor="' + n + '"]').addClass(p))
        }

        function Mn(e, n) {
            En(e), Ln(e, n)
        }

        function On(n) {
            var t = e(b).index(y),
                o = n.index(y);
            return t == o ? "none" : t > o ? "up" : "down"
        }

        function An(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }

        function Rn(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var n, t = l.scrollOverflowHandler,
                    o = t.wrapContent(),
                    i = e.closest(y),
                    a = t.scrollable(e);
                a.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight, l.verticalCentered && (n = e.find(k).get(0).scrollHeight));
                var r = yt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
                n > r ? a.length ? t.update(e, r) : (l.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o), t.create(e, r)) : t.remove(e), e.css("overflow", "")
            }
        }

        function Hn(e) {
            e.hasClass(W) || e.addClass(W).wrapInner('<div class="' + T + '" style="height:' + Bn(e) + 'px;" />')
        }

        function Bn(e) {
            var n = yt;
            if (l.paddingTop || l.paddingBottom) {
                var t = e;
                t.hasClass(S) || (t = e.closest(y));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n = yt - o
            }
            return n
        }

        function zn(e, n) {
            n ? kn(St) : In(St), St.css(tt(e)), setTimeout(function () {
                St.removeClass(d)
            }, 10)
        }

        function Dn(n) {
            if (!n) return [];
            var t = St.find(y + '[data-anchor="' + n + '"]');
            return t.length || (t = e(y).eq(n - 1)), t
        }

        function Pn(e, n) {
            var t = n.find(q),
                o = t.find(z + '[data-anchor="' + e + '"]');
            return o.length || (o = t.find(z).eq(e)), o
        }

        function qn(e, n) {
            var t = Dn(e);
            t.length && ("undefined" == typeof n && (n = 0), e === ut || t.hasClass(p) ? Fn(t, n) : Ke(t, function () {
                Fn(t, n)
            }))
        }

        function Fn(e, n) {
            if ("undefined" != typeof n) {
                var t = e.find(q),
                    o = Pn(n, e);
                o.length && Sn(t, o)
            }
        }

        function Vn(e, n) {
            e.append('<div class="' + U + '"><ul></ul></div>');
            var t = e.find(Y);
            t.addClass(l.slidesNavPosition);
            for (var o = 0; o < n; o++) t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(p)
        }

        function Wn(e, n, t, o) {
            var i = "";
            l.anchors.length && !l.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), ht = n, Un(i + "/" + n)) : "undefined" != typeof e ? (ht = n, Un(t)) : Un(t)), jn()
        }

        function Un(e) {
            if (l.recordHistory) location.hash = e;
            else if (mt || wt) n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }

        function Yn(e) {
            var n = e.data("anchor"),
                t = e.index();
            return "undefined" == typeof n && (n = t), n
        }

        function jn() {
            var n = e(b),
                t = n.find(D),
                o = Yn(n),
                i = Yn(t),
                a = String(o);
            t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
            dt[0].className = dt[0].className.replace(r, ""), dt.addClass(h + "-" + a)
        }

        function Nn() {
            var e, o = t.createElement("p"),
                a = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            t.body.insertBefore(o, null);
            for (var r in a) o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[r]));
            return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function Xn() {
            t.addEventListener ? (t.removeEventListener("mousewheel", Ye, !1), t.removeEventListener("wheel", Ye, !1), t.removeEventListener("MozMousePixelScroll", Ye, !1)) : t.detachEvent("onmousewheel", Ye)
        }

        function Kn() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", Ye, !1) : t[e](o + a, Ye, !1)
        }

        function Qn() {
            St.on("mousedown", fn).on("mouseup", un)
        }

        function Gn() {
            St.off("mousedown", fn).off("mouseup", un)
        }

        function Jn() {
            (mt || wt) && (l.autoScrolling && dt.off(Ht.touchmove).on(Ht.touchmove, Pe), e(r).off(Ht.touchstart).on(Ht.touchstart, We).off(Ht.touchmove).on(Ht.touchmove, qe))
        }

        function Zn() {
            (mt || wt) && e(r).off(Ht.touchstart).off(Ht.touchmove)
        }

        function $n() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function _n(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, wt && Ve(e) && l.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function et(e, n) {
            Q(0, "internal"), "undefined" != typeof n && (bt = !0), Sn(e.closest(q), e), "undefined" != typeof n && (bt = !1), Q(Bt.scrollingSpeed, "internal")
        }

        function nt(e) {
            var n = o.round(e);
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + n + "px, 0px)";
                zn(t, !1)
            } else l.autoScrolling && !l.scrollBar ? St.css("top", -n) : ct.scrollTop(n)
        }

        function tt(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function ot(e, n, t) {
            switch (n) {
                case "up":
                    kt[t].up = e;
                    break;
                case "down":
                    kt[t].down = e;
                    break;
                case "left":
                    kt[t].left = e;
                    break;
                case "right":
                    kt[t].right = e;
                    break;
                case "all":
                    "m" == t ? re(e) : le(e)
            }
        }

        function it(n) {
            s(!1, "internal"), re(!1), le(!1), St.addClass(f), clearTimeout(Et), clearTimeout(Lt), clearTimeout(It), clearTimeout(Mt), clearTimeout(Ot), ne.off("scroll", Re).off("hashchange", ln).off("resize", Cn), te.off("click touchstart", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click touchstart", j).off("mouseover", l.normalScrollElements).off("mouseout", l.normalScrollElements), e(y).off("click touchstart", X), clearTimeout(Et), clearTimeout(Lt), n && at()
        }

        function at() {
            nt(0), St.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                _e(e(this), "src")
            }), St.find("img[data-srcset]").each(function () {
                _e(e(this), "srcset")
            }), e(M + ", " + Y + ", " + X).remove(), e(y).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(z).css({
                width: ""
            }), St.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), ct.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(u), dt.removeClass(c), e.each(dt.get(0).className.split(/\s+/), function (e, n) {
                0 === n.indexOf(h) && dt.removeClass(n)
            }), e(y + ", " + z).each(function () {
                l.scrollOverflowHandler.remove(e(this)), e(this).removeClass(W + " " + p)
            }), In(St), St.find(k + ", " + V + ", " + q).each(function () {
                e(this).replaceWith(this.childNodes)
            }), St.css({
                "-webkit-transition": "none",
                transition: "none"
            }), ct.scrollTop(0);
            var n = [S, B, F];
            e.each(n, function (n, t) {
                e("." + t).removeClass(t)
            })
        }

        function rt(e, n, t) {
            l[e] = n, "internal" !== t && (Bt[e] = n)
        }

        function lt() {
            var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return e("html").hasClass(u) ? void st("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (l.continuousVertical && (l.loopTop || l.loopBottom) && (l.continuousVertical = !1, st("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), l.scrollBar && l.scrollOverflow && st("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !l.continuousVertical || !l.scrollBar && l.autoScrolling || (l.continuousVertical = !1, st("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(n, function (e, n) {
                l[n] && st("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n)
            }), void e.each(l.anchors, function (n, t) {
                var o = te.find("[name]").filter(function () {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                    }),
                    i = te.find("[id]").filter(function () {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                    });
                (i.length || o.length) && (st("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && st("error", '"' + t + '" is is being used by another element `id` property'), o.length && st("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }

        function st(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }

        if (e("html").hasClass(u)) return void lt();
        var ct = e("html, body"),
            dt = e("body"),
            ft = e.fn.fullpage;
        l = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: ie,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: w,
            slideSelector: H,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, l);
        var ut, ht, pt, vt, gt = !1,
            mt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            wt = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            St = e(this),
            yt = ne.height(),
            bt = !1,
            xt = !0,
            Ct = !0,
            Tt = [],
            kt = {};
        kt.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, kt.k = e.extend(!0, {}, kt.m);
        var It, Lt, Et, Mt, Ot, At, Rt = $n(),
            Ht = {
                touchmove: "ontouchmove" in n ? "touchmove" : Rt.move,
                touchstart: "ontouchstart" in n ? "touchstart" : Rt.down
            },
            Bt = e.extend(!0, {}, l);
        lt(), oe.click = wt, oe = e.extend(oe, l.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function (e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
            }
        }), e(this).length && (ft.setAutoScrolling = s, ft.setRecordHistory = N, ft.setScrollingSpeed = Q, ft.setFitToSection = Z, ft.setLockAnchors = $, ft.setMouseWheelScrolling = ae, ft.setAllowScrolling = re, ft.setKeyboardScrolling = le, ft.moveSectionUp = se, ft.moveSectionDown = ce, ft.silentMoveTo = de, ft.moveTo = fe, ft.moveSlideRight = ue, ft.moveSlideLeft = he, ft.fitToSection = He, ft.reBuild = pe, ft.setResponsive = ve, ft.destroy = it, ge(), me());
        var zt = !1,
            Dt = 0,
            Pt = 0,
            qt = 0,
            Ft = 0,
            Vt = 0,
            Wt = (new Date).getTime(),
            Ut = 0,
            Yt = 0,
            jt = yt
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var ie = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function (n) {
            var t = e(b).find(s);
            t.each(function () {
                var t = e(this).data("iscrollInstance");
                "undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff())
            })
        },
        onLeave: function () {
            ie.toggleWheel(!1)
        },
        beforeLeave: function () {
            ie.onLeave()
        },
        afterLoad: function () {
            ie.toggleWheel(!0)
        },
        create: function (n, t) {
            var o = n.find(s);
            o.height(t), o.each(function () {
                var n = e(this),
                    t = n.data("iscrollInstance");
                t && e.each(ie.iScrollInstances, function () {
                    e(this).destroy()
                }), t = new IScroll(n.get(0), oe), ie.iScrollInstances.push(t), t.wheelOff(), n.data("iscrollInstance", t)
            })
        },
        isScrolled: function (e, n) {
            var t = n.data("iscrollInstance");
            return !t || ("top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0)
        },
        scrollable: function (e) {
            return e.find(q).length ? e.find(D).find(s) : e.find(s)
        },
        scrollHeight: function (e) {
            return e.find(s).children().first().get(0).scrollHeight
        },
        remove: function (e) {
            var n = e.find(s);
            if (n.length) {
                var t = n.data("iscrollInstance");
                t.destroy(), n.data("iscrollInstance", null)
            }
            e.find(s).children().first().children().first().unwrap().unwrap()
        },
        update: function (n, t) {
            clearTimeout(ie.refreshId), ie.refreshId = setTimeout(function () {
                e.each(ie.iScrollInstances, function () {
                    e(this).get(0).refresh()
                })
            }, 150), n.find(s).css("height", t + "px").parent().css("height", t + "px")
        },
        wrapContent: function () {
            return '<div class="' + l + '"><div class="fp-scroller"></div></div>'
        }
    }
});
/*!
 * jQuery Ripples plugin v0.5.3 / https://github.com/sirxemic/jquery.ripples
 * MIT License
 * @author sirxemic / https://sirxemic.com/
 */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    "use strict";

    function t(e) {
        return "%" == e[e.length - 1]
    }

    function r() {
        function e(e, t) {
            var i = "OES_texture_" + e,
                o = i + "_linear",
                n = o in r,
                a = [i];
            return n && a.push(o), {
                type: t,
                linearSupport: n,
                extensions: a
            }
        }

        var t = document.createElement("canvas");
        if (h = t.getContext("webgl") || t.getContext("experimental-webgl"), !h) return null;
        var r = {};
        if (["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear"].forEach(function (e) {
            var t = h.getExtension(e);
            t && (r[e] = t)
        }), !r.OES_texture_float) return null;
        var i = [];
        i.push(e("float", h.FLOAT)), r.OES_texture_half_float && i.push(e("half_float", r.OES_texture_half_float.HALF_FLOAT_OES));
        var o = h.createTexture(),
            n = h.createFramebuffer();
        h.bindFramebuffer(h.FRAMEBUFFER, n), h.bindTexture(h.TEXTURE_2D, o), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
        for (var a = null, s = 0; s < i.length; s++)
            if (h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, 32, 32, 0, h.RGBA, i[s].type, null), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, o, 0), h.checkFramebufferStatus(h.FRAMEBUFFER) === h.FRAMEBUFFER_COMPLETE) {
                a = i[s];
                break
            }
        return a
    }

    function i(e, t) {
        try {
            return new ImageData(e, t)
        } catch (r) {
            var i = document.createElement("canvas");
            return i.getContext("2d").createImageData(e, t)
        }
    }

    function o(e) {
        var t = e.split(" ");
        if (1 !== t.length) return t.map(function (t) {
            switch (e) {
                case "center":
                    return "50%";
                case "top":
                case "left":
                    return "0";
                case "right":
                case "bottom":
                    return "100%";
                default:
                    return t
            }
        });
        switch (e) {
            case "center":
                return ["50%", "50%"];
            case "top":
                return ["50%", "0"];
            case "bottom":
                return ["50%", "100%"];
            case "left":
                return ["0", "50%"];
            case "right":
                return ["100%", "50%"];
            default:
                return [e, "50%"]
        }
    }

    function n(e, t, r) {
        function i(e, t) {
            var r = h.createShader(e);
            if (h.shaderSource(r, t), h.compileShader(r), !h.getShaderParameter(r, h.COMPILE_STATUS)) throw new Error("compile error: " + h.getShaderInfoLog(r));
            return r
        }

        var o = {};
        if (o.id = h.createProgram(), h.attachShader(o.id, i(h.VERTEX_SHADER, e)), h.attachShader(o.id, i(h.FRAGMENT_SHADER, t)), h.linkProgram(o.id), !h.getProgramParameter(o.id, h.LINK_STATUS)) throw new Error("link error: " + h.getProgramInfoLog(o.id));
        o.uniforms = {}, o.locations = {}, h.useProgram(o.id), h.enableVertexAttribArray(0);
        for (var n, a, s = /uniform (\w+) (\w+)/g, u = e + t; null != (n = s.exec(u));) a = n[2], o.locations[a] = h.getUniformLocation(o.id, a);
        return o
    }

    function a(e, t) {
        h.activeTexture(h.TEXTURE0 + (t || 0)), h.bindTexture(h.TEXTURE_2D, e)
    }

    function s(e) {
        var t = /url\(["']?([^"']*)["']?\)/.exec(e);
        return null == t ? null : t[1]
    }

    function u(e) {
        return e.match(/^data:/)
    }

    var h, c = e(window),
        d = r(),
        f = i(32, 32);
    e("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");
    var l = function (t, r) {
        function i() {
            o.step(), requestAnimationFrame(i)
        }

        var o = this;
        this.$el = e(t), this.interactive = r.interactive, this.resolution = r.resolution, this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]), this.perturbance = r.perturbance, this.dropRadius = r.dropRadius, this.crossOrigin = r.crossOrigin, this.imageUrl = r.imageUrl;
        var n = document.createElement("canvas");
        n.width = this.$el.innerWidth(), n.height = this.$el.innerHeight(), this.canvas = n, this.$canvas = e(n), this.$canvas.css({
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
        }), this.$el.addClass("jquery-ripples").append(n), this.context = h = n.getContext("webgl") || n.getContext("experimental-webgl"), d.extensions.forEach(function (e) {
            h.getExtension(e)
        }), e(window).on("resize", function () {
            var e = o.$el.innerWidth(),
                t = o.$el.innerHeight();
            e == o.canvas.width && t == o.canvas.height || (n.width = e, n.height = t)
        }), this.textures = [], this.framebuffers = [], this.bufferWriteIndex = 0, this.bufferReadIndex = 1;
        for (var a = 0; a < 2; a++) {
            var s = h.createTexture(),
                u = h.createFramebuffer();
            h.bindFramebuffer(h.FRAMEBUFFER, u), u.width = this.resolution, u.height = this.resolution, h.bindTexture(h.TEXTURE_2D, s), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, d.linearSupport ? h.LINEAR : h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, d.linearSupport ? h.LINEAR : h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, this.resolution, this.resolution, 0, h.RGBA, d.type, null), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, s, 0), this.textures.push(s), this.framebuffers.push(u)
        }
        this.quad = h.createBuffer(), h.bindBuffer(h.ARRAY_BUFFER, this.quad), h.bufferData(h.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), h.STATIC_DRAW), this.initShaders(), this.initTexture(), this.setTransparentTexture(), this.loadImage(), h.clearColor(0, 0, 0, 0), h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA), this.visible = !0, this.running = !0, this.inited = !0, this.setupPointerEvents(), requestAnimationFrame(i)
    };
    l.DEFAULTS = {
        imageUrl: null,
        resolution: 256,
        dropRadius: 20,
        perturbance: .03,
        interactive: !0,
        crossOrigin: ""
    }, l.prototype = {
        setupPointerEvents: function () {
            function e() {
                return r.visible && r.running && r.interactive
            }

            function t(t, i) {
                e() && r.dropAtPointer(t, r.dropRadius * (i ? 1.5 : 1), i ? .14 : .01)
            }

            var r = this;
            this.$el.on("mousemove.ripples", function (e) {
                t(e)
            }).on("touchmove.ripples, touchstart.ripples", function (e) {
                for (var r = e.originalEvent.changedTouches, i = 0; i < r.length; i++) t(r[i])
            }).on("mousedown.ripples", function (e) {
                t(e, !0)
            })
        },
        loadImage: function () {
            var e = this;
            h = this.context;
            var t = this.imageUrl || s(this.originalCssBackgroundImage) || s(this.$el.css("backgroundImage"));
            if (t != this.imageSource) {
                if (this.imageSource = t, !this.imageSource) return void this.setTransparentTexture();
                var r = new Image;
                r.onload = function () {
                    function t(e) {
                        return 0 == (e & e - 1)
                    }

                    h = e.context;
                    var i = t(r.width) && t(r.height) ? h.REPEAT : h.CLAMP_TO_EDGE;
                    h.bindTexture(h.TEXTURE_2D, e.backgroundTexture), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, i), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, i), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, r), e.backgroundWidth = r.width, e.backgroundHeight = r.height, e.hideCssBackground()
                }, r.onerror = function () {
                    h = e.context, e.setTransparentTexture()
                }, r.crossOrigin = u(this.imageSource) ? null : this.crossOrigin, r.src = this.imageSource
            }
        },
        step: function () {
            h = this.context, this.visible && (this.computeTextureBoundaries(), this.running && this.update(), this.render())
        },
        drawQuad: function () {
            h.bindBuffer(h.ARRAY_BUFFER, this.quad), h.vertexAttribPointer(0, 2, h.FLOAT, !1, 0, 0), h.drawArrays(h.TRIANGLE_FAN, 0, 4)
        },
        render: function () {
            h.bindFramebuffer(h.FRAMEBUFFER, null), h.viewport(0, 0, this.canvas.width, this.canvas.height), h.enable(h.BLEND), h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT), h.useProgram(this.renderProgram.id), a(this.backgroundTexture, 0), a(this.textures[0], 1), h.uniform1f(this.renderProgram.locations.perturbance, this.perturbance), h.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft), h.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight), h.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio), h.uniform1i(this.renderProgram.locations.samplerBackground, 0), h.uniform1i(this.renderProgram.locations.samplerRipples, 1), this.drawQuad(), h.disable(h.BLEND)
        },
        update: function () {
            h.viewport(0, 0, this.resolution, this.resolution), h.bindFramebuffer(h.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), a(this.textures[this.bufferReadIndex]), h.useProgram(this.updateProgram.id), this.drawQuad(), this.swapBufferIndices()
        },
        swapBufferIndices: function () {
            this.bufferWriteIndex = 1 - this.bufferWriteIndex, this.bufferReadIndex = 1 - this.bufferReadIndex
        },
        computeTextureBoundaries: function () {
            var e, r = this.$el.css("background-size"),
                i = this.$el.css("background-attachment"),
                n = o(this.$el.css("background-position"));
            if ("fixed" == i ? (e = {
                left: window.pageXOffset,
                top: window.pageYOffset
            }, e.width = c.width(), e.height = c.height()) : (e = this.$el.offset(), e.width = this.$el.innerWidth(), e.height = this.$el.innerHeight()), "cover" == r) var a = Math.max(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
                s = this.backgroundWidth * a,
                u = this.backgroundHeight * a;
            else if ("contain" == r) var a = Math.min(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
                s = this.backgroundWidth * a,
                u = this.backgroundHeight * a;
            else {
                r = r.split(" ");
                var s = r[0] || "",
                    u = r[1] || s;
                t(s) ? s = e.width * parseFloat(s) / 100 : "auto" != s && (s = parseFloat(s)), t(u) ? u = e.height * parseFloat(u) / 100 : "auto" != u && (u = parseFloat(u)), "auto" == s && "auto" == u ? (s = this.backgroundWidth, u = this.backgroundHeight) : ("auto" == s && (s = this.backgroundWidth * (u / this.backgroundHeight)), "auto" == u && (u = this.backgroundHeight * (s / this.backgroundWidth)))
            }
            var h = n[0],
                d = n[1];
            h = t(h) ? e.left + (e.width - s) * parseFloat(h) / 100 : e.left + parseFloat(h), d = t(d) ? e.top + (e.height - u) * parseFloat(d) / 100 : e.top + parseFloat(d);
            var f = this.$el.offset();
            this.renderProgram.uniforms.topLeft = new Float32Array([(f.left - h) / s, (f.top - d) / u]), this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / s, this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / u]);
            var l = Math.max(this.canvas.width, this.canvas.height);
            this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / l, this.canvas.height / l])
        },
        initShaders: function () {
            var e = ["attribute vec2 vertex;", "varying vec2 coord;", "void main() {", "coord = vertex * 0.5 + 0.5;", "gl_Position = vec4(vertex, 0.0, 1.0);", "}"].join("\n");
            this.dropProgram = n(e, ["precision highp float;", "const float PI = 3.141592653589793;", "uniform sampler2D texture;", "uniform vec2 center;", "uniform float radius;", "uniform float strength;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);", "drop = 0.5 - cos(drop * PI) * 0.5;", "info.r += drop * strength;", "gl_FragColor = info;", "}"].join("\n")), this.updateProgram = n(e, ["precision highp float;", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "vec2 dx = vec2(delta.x, 0.0);", "vec2 dy = vec2(0.0, delta.y);", "float average = (", "texture2D(texture, coord - dx).r +", "texture2D(texture, coord - dy).r +", "texture2D(texture, coord + dx).r +", "texture2D(texture, coord + dy).r", ") * 0.25;", "info.g += (average - info.r) * 2.0;", "info.g *= 0.995;", "info.r += info.g;", "gl_FragColor = info;", "}"].join("\n")), h.uniform2fv(this.updateProgram.locations.delta, this.textureDelta), this.renderProgram = n(["precision highp float;", "attribute vec2 vertex;", "uniform vec2 topLeft;", "uniform vec2 bottomRight;", "uniform vec2 containerRatio;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);", "backgroundCoord.y = 1.0 - backgroundCoord.y;", "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;", "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);", "}"].join("\n"), ["precision highp float;", "uniform sampler2D samplerBackground;", "uniform sampler2D samplerRipples;", "uniform vec2 delta;", "uniform float perturbance;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "float height = texture2D(samplerRipples, ripplesCoord).r;", "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;", "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;", "vec3 dx = vec3(delta.x, heightX - height, 0.0);", "vec3 dy = vec3(0.0, heightY - height, delta.y);", "vec2 offset = -normalize(cross(dy, dx)).xz;", "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);", "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;", "}"].join("\n")), h.uniform2fv(this.renderProgram.locations.delta, this.textureDelta)
        },
        initTexture: function () {
            this.backgroundTexture = h.createTexture(), h.bindTexture(h.TEXTURE_2D, this.backgroundTexture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, 1), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR)
        },
        setTransparentTexture: function () {
            h.bindTexture(h.TEXTURE_2D, this.backgroundTexture), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, f)
        },
        hideCssBackground: function () {
            var e = this.$el[0].style.backgroundImage;
            "none" != e && (this.originalInlineCss = e, this.originalCssBackgroundImage = this.$el.css("backgroundImage"), this.$el.css("backgroundImage", "none"))
        },
        restoreCssBackground: function () {
            this.$el.css("backgroundImage", this.originalInlineCss || "")
        },
        dropAtPointer: function (e, t, r) {
            var i = parseInt(this.$el.css("border-left-width")) || 0,
                o = parseInt(this.$el.css("border-top-width")) || 0;
            this.drop(e.pageX - this.$el.offset().left - i, e.pageY - this.$el.offset().top - o, t, r)
        },
        drop: function (e, t, r, i) {
            h = this.context;
            var o = this.$el.innerWidth(),
                n = this.$el.innerHeight(),
                s = Math.max(o, n);
            r /= s;
            var u = new Float32Array([(2 * e - o) / s, (n - 2 * t) / s]);
            h.viewport(0, 0, this.resolution, this.resolution), h.bindFramebuffer(h.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), a(this.textures[this.bufferReadIndex]), h.useProgram(this.dropProgram.id), h.uniform2fv(this.dropProgram.locations.center, u), h.uniform1f(this.dropProgram.locations.radius, r), h.uniform1f(this.dropProgram.locations.strength, i), this.drawQuad(), this.swapBufferIndices()
        },
        destroy: function () {
            this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"), this.$canvas.remove(), this.restoreCssBackground()
        },
        show: function () {
            this.visible = !0, this.$canvas.show(), this.hideCssBackground()
        },
        hide: function () {
            this.visible = !1, this.$canvas.hide(), this.restoreCssBackground()
        },
        pause: function () {
            this.running = !1
        },
        play: function () {
            this.running = !0
        },
        set: function (e, t) {
            switch (e) {
                case "dropRadius":
                case "perturbance":
                case "interactive":
                case "crossOrigin":
                    this[e] = t;
                    break;
                case "imageUrl":
                    this.imageUrl = t, this.loadImage()
            }
        }
    };
    var g = e.fn.ripples;
    e.fn.ripples = function (t) {
        if (!d) throw new Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");
        var r = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
        return this.each(function () {
            var i = e(this),
                o = i.data("ripples"),
                n = e.extend({}, l.DEFAULTS, i.data(), "object" == typeof t && t);
            (o || "string" != typeof t) && (o ? "string" == typeof t && l.prototype[t].apply(o, r) : i.data("ripples", o = new l(this, n)))
        })
    }, e.fn.ripples.Constructor = l, e.fn.ripples.noConflict = function () {
        return e.fn.ripples = g, this
    }
});
"use strict";
jQuery(document).on('ready', function () {
    initSwiper();
    initEvents();
    initStyles();
    initMap();
    initCollapseMenu();
    checkCountUp();
    initScrollReveal();
    if (!/Mobi/.test(navigator.userAgent) && jQuery(window).width() > 768) jQuery('.matchHeight').matchHeight();
});
jQuery(window).on('scroll', function (event) {
    checkNavbar();
}).scroll();
jQuery(window).on('load', function () {
    initMasonry();
    initParallax();
});

function initCollapseMenu() {
    var navbar = jQuery('#navbar'),
        navbar_toggle = jQuery('.navbar-toggle'),
        navbar_wrapper = jQuery("#nav-wrapper");
    navbar_wrapper.on('click', '.navbar-toggle', function (e) {
        navbar_toggle.toggleClass('collapsed');
        navbar.toggleClass('collapse');
        navbar_wrapper.toggleClass('mob-visible');
    });
    navbar.on('click', '.menu-item-has-children > a', function () {
        var el = jQuery(this);
        if (!el.closest('#navbar').hasClass('collapse')) {
            el.next().toggleClass('show');
            el.parent().toggleClass('show');
            return false;
        }
    });
    var lastWidth;
    jQuery(window).on("resize", function () {
        checkNavbar();
        var winWidth = jQuery(window).width(),
            winHeight = jQuery(window).height();
        if (winWidth > 1199 && navbar_toggle.is(':hidden')) {
            navbar.addClass('collapse');
            navbar_toggle.addClass('collapsed');
            navbar_wrapper.removeClass('mob-visible');
        }
        lastWidth = winWidth;
    });
}

function checkNavbar() {
    var scroll = jQuery(window).scrollTop(),
        navBar = jQuery('nav.navbar:not(.no-dark)'),
        topBar = jQuery('.top-bar'),
        slideDiv = jQuery('.slider-full');
    if (scroll > 1) navBar.addClass('dark');
    else navBar.removeClass('dark');
}

function initEvents() {
    initMenuFilter();
    jQuery('.swipebox').swipebox();
    if (jQuery('.ripples ').length) {
        jQuery('.ripples').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });
        jQuery('.ripples').ripples("drop", 700, 600, 50, 0.05);
        jQuery('.ripples').ripples("drop", 750, 650, 50, 0.05);
        jQuery('.ripples').ripples("drop", 800, 700, 50, 0.05);
    }
    jQuery('.gridlist-toggle').on('click', 'a', function () {
        jQuery('.matchHeight').matchHeight();
    });
    jQuery('.menu-types').on('click', 'a', function () {
        var el = jQuery(this);
        el.addClass('active').siblings('.active').removeClass('active');
        el.parent().find('.type-value').val(el.data('value'));
        return false;
    });
    jQuery('footer').on('click', '.go-top', function () {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    jQuery('.alert').on('click', '.close', function () {
        jQuery(this).parent().fadeOut();
        return false;
    });
    var searchHandler = function (event) {
        if (jQuery(event.target).is("#top-search, #top-search *")) return;
        jQuery(document).off("click", searchHandler);
        jQuery('#top-search').toggleClass('show-field');
        jQuery('#navbar').toggleClass('muted');
    }
    jQuery('#top-search-ico').on('click', function (e) {
        e.preventDefault();
        jQuery(this).parent().toggleClass('show-field');
        jQuery('#navbar').toggleClass('muted');
        if (jQuery('#top-search').hasClass('show-field')) {
            jQuery(document).on("click", searchHandler);
        } else {
            jQuery(document).off("click", searchHandler);
        }
    });
    jQuery('#top-search input').keypress(function (e) {
        if (e.which == 13) {
            window.location = '/?s=' + jQuery('#top-search input').val();
            return false;
        }
    });
    jQuery('.woocommerce').on('click', 'div.quantity > span', function (e) {
        var f = jQuery(this).siblings('input');
        if (jQuery(this).hasClass('more')) {
            f.val(Math.max(0, parseInt(f.val())) + 1);
        } else {
            f.val(Math.max(1, Math.max(0, parseInt(f.val())) - 1));
        }
        e.preventDefault();
        jQuery(this).siblings('input').change();
        return false;
    });
    jQuery('img.parallax-float').each(function (v, el) {
        var parent = jQuery(el).closest('section'),
            mS = jQuery(el).data('ms'),
            wW = jQuery(window).width(),
            wH = jQuery(window).height();
        var w = mS / wW;
        parent.addClass('parallax-float-section');
        parent.mousemove(function (e) {
            var pageX = e.pageX - (wW / 2);
            var newvalueX = w * pageX * -1 - 50;
            jQuery(el).css('transform', 'translate(' + newvalueX + '%, -50%)');
        });
    });
}

function initParallax() {
    if (/Mobi/.test(navigator.userAgent)) return false;
    jQuery('.like-parallax').each(function () {
        jQuery(this).parallax("50%", 0.3);
    });
}

function initStyles() {
    jQuery('form:not(.checkout) select:not(#rating)').wrap('<div class="select-wrap"></div>');
    jQuery('.mc4wp-form .btn').addClass('btn-black-filled color-hover-second');
    jQuery('.wpcf7-checkbox').parent().addClass('margin-none');
    jQuery('.form-white .wpcf7-submit').addClass('btn-black-filled color-hover-second');
    jQuery('.form-btn-shadow .btn,.form-btn-shadow input[type="submit"]').addClass('btn-shadow');
    jQuery('.form-btn-wide .btn,.form-btn-wide input[type="submit"]').addClass('btn-wide');
    jQuery('.woocommerce .button').addClass('btn');
    jQuery('.woocommerce .buttons .checkout').addClass('btn  btn-default transform-default color-text-white color-hover-second');
    jQuery('.woocommerce .buttons .wc-forward:not(.checkout)').addClass('btn btn-black-filled color-text-white color-hover-second');
    jQuery('.woocommerce .price_slider_amount .button').addClass('btn btn-black-filled btn-xs color-text-white color-hover-second');
    jQuery('.woocommerce div.quantity,.woocommerce-page div.quantity').append('<span class="more"></span><span class="less"></span>');
    jQuery(document).off('updated_wc_div').on('updated_wc_div', function () {
        jQuery('.woocommerce div.quantity,.woocommerce-page div.quantity').append('<span class="more"></span><span class="less"></span>');
        initStyles();
    });
}

function checkCountUp() {
    if (jQuery(".countUp").length) {
        jQuery('.countUp').counterUp();
    }
}

function initScrollReveal() {
    if (/Mobi/.test(navigator.userAgent) || jQuery(window).width() < 768) return false;
    window.sr = ScrollReveal();
    var srAnimations = {
        zoom_in: {
            opacity: 1,
            scale: 0.01,
        },
        fade_in: {},
        slide_from_left: {
            distance: '150%',
            origin: 'left',
        },
        slide_from_right: {
            distance: '150%',
            origin: 'right',
        },
        slide_from_top: {
            distance: '150%',
            origin: 'top',
        },
        slide_from_bottom: {
            distance: '150%',
            origin: 'bottom',
        },
        slide_rotate: {
            rotate: {
                x: 0,
                y: 0,
                z: 360
            },
        },
    };
    var srElCfg = {
        block: [''],
        items: ['article', '.item'],
        text_el: ['.header', '.subheader', '.btn', 'p', 'img'],
        list_el: ['li']
    };
    jQuery('.ltx-sr').each(function () {
        var el = jQuery(this),
            srClass = el.attr('class');
        var srId = srClass.match(/ltx-sr-id-(\S+)/),
            srEffect = srClass.match(/ltx-sr-effect-(\S+)/),
            srEl = srClass.match(/ltx-sr-el-(\S+)/),
            srDelay = srClass.match(/ltx-sr-delay-(\d+)/),
            srDuration = srClass.match(/ltx-sr-duration-(\d+)/),
            srSeq = srClass.match(/ltx-sr-sequences-(\d+)/);
        var cfg = srAnimations[srEffect[1]];
        var srConfig = {
            delay: parseInt(srDelay[1]),
            duration: parseInt(srDuration[1]),
            easing: 'ease-in-out',
            afterReveal: function (domEl) {
                jQuery(domEl).css('transition', 'all .3s ease');
            }
        }
        cfg = jQuery.extend({}, cfg, srConfig);
        var initedEls = [];
        jQuery.each(srElCfg[srEl[1]], function (i, e) {
            initedEls.push('.ltx-sr-id-' + srId[1] + ' ' + e);
        });
        sr.reveal(initedEls.join(','), cfg, parseInt(srSeq[1]));
    });
}

function initSliderFilter(swiper) {
    var btns = jQuery('.slider-filter'),
        container = jQuery('.slider-filter-container');
    if (btns.length) {
        btns.on('click', 'a.cat, span.cat', function () {
            var el = jQuery(this),
                filter = el.data('filter'),
                limit = el.data('limit');
            container.find('.filter-item').show();
            el.parent().parent().find('.cat-active').removeClass('cat-active')
            el.addClass('cat-active');
            if (filter !== '') {
                container.find('.filter-item').hide();
                container.find('.filter-item.filter-type-' + filter + '').fadeIn();
            }
            if (swiper !== 0) {
                swiper.slideTo(0, 0);
                swiper.update();
            }
            return false;
        });
        var firstBtn = btns.find('.cat:first')
        firstBtn.addClass('cat-active');
        container.find('.filter-item').hide();
        container.find('.filter-item.filter-type-' + firstBtn.data('filter') + '').show();
    }
}

function initMenuFilter() {
    var container = jQuery('.menu-sc'),
        btns = jQuery('.menu-sc .menu-filter');
    var niceScrollConf = {
        cursorcolor: "#242424",
        cursorborder: "0px",
        background: "#fff",
        cursorwidth: "7px",
        cursorborderradius: "0px",
        autohidemode: false
    };
    if (btns.length) {
        btns.on('click', 'a.cat, span.cat', function () {
            var el = jQuery(this),
                filter = el.data('filter');
            container.find('article').show();
            el.parent().parent().find('.cat-active').removeClass('cat-active')
            el.addClass('cat-active');
            if (filter !== '') {
                container.find('article').hide();
                container.find('article.filter-type-' + filter + '').fadeIn();
            }
            jQuery('.menu-sc .items').getNiceScroll().resize();
            return false;
        });
        var firstBtn = btns.find('.cat:first')
        firstBtn.addClass('cat-active');
        container.find('article').hide();
        container.find('article.filter-type-' + firstBtn.data('filter') + '').show();
    }
    jQuery('.menu-sc .items').niceScroll(niceScrollConf);
}

function initSwiper() {
    var products = jQuery('.products-slider'),
        sliders = jQuery('.slider-sc'),
        services = jQuery('.services-slider'),
        clientsSwiperEl = jQuery('.testimonials-slider'),
        gallerySwiperEl = jQuery('.swiper-gallery'),
        portfolio = jQuery('.portfolio-slider'),
        textSwiperEl = jQuery('.swiper-text');
    if (products.length) {
        var productsSwiper = new Swiper(products, {
            speed: 1000,
            direction: 'horizontal',
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            slidesPerView: products.data('cols'),
            slidesPerGroup: products.data('cols'),
            autoplay: products.data('autoplay'),
            autoplayDisableOnInteraction: false,
        });
        initSliderFilter(productsSwiper);
    } else {
        initSliderFilter(0);
    }
    if (sliders.length) {
        var pagination, arrow1, arrow2;
        if (sliders.data('pagination') == 1) pagination = '.swiper-pagination';
        if (sliders.data('arrows') == 1) {
            arrow1 = '.arrow-right';
            arrow2 = '.arrow-left';
        }
        var slidersSwiper = new Swiper(sliders, {
            speed: 400,
            direction: 'horizontal',
            pagination: pagination,
            paginationClickable: true,
            nextButton: arrow1,
            prevButton: arrow2,
            effect: sliders.data('effect'),
            autoplay: sliders.data('autoplay'),
            autoplayDisableOnInteraction: true,
        });
    }
    if (clientsSwiperEl.length) {
        var clientsSwiper = new Swiper(clientsSwiperEl, {
            direction: 'horizontal',
            speed: 1000,
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            slidesPerView: clientsSwiperEl.data('cols'),
            autoplay: 7000,
            autoplayDisableOnInteraction: false,
        });
    }
    if (gallerySwiperEl.length) {
        var gallerySwiperEl = new Swiper(gallerySwiperEl, {
            direction: 'horizontal',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
        });
    }
    if (textSwiperEl.length) {
        var textSwiperEl = new Swiper(textSwiperEl, {
            direction: 'horizontal',
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
        });
    }
    jQuery(window).on('resize', function () {
        var ww = jQuery(window).width(),
            wh = jQuery(window).height();
        if (clientsSwiperEl.length && clientsSwiperEl.data('cols') >= 3) {
            if (ww > 1000) {
                clientsSwiper.params.slidesPerView = 3;
            }
            if (ww <= 1000) {
                clientsSwiper.params.slidesPerView = 2;
            }
            if (ww <= 479) {
                clientsSwiper.params.slidesPerView = 1;
            }
            clientsSwiper.update();
        }
        if (products.length && products.data('cols') >= 4) {
            if (ww > 1200) {
                productsSwiper.params.slidesPerView = 4;
                productsSwiper.params.slidesPerGroup = 4;
            }
            if (ww <= 1199) {
                productsSwiper.params.slidesPerView = 3;
                productsSwiper.params.slidesPerGroup = 3;
            }
            if (ww <= 1000) {
                productsSwiper.params.slidesPerView = 2;
                productsSwiper.params.slidesPerGroup = 2;
            }
            if (ww <= 479) {
                productsSwiper.params.slidesPerView = 1;
                productsSwiper.params.slidesPerGroup = 1;
            }
            productsSwiper.update();
        }
    }).resize();
}

function initMasonry() {
    jQuery('.masonry').masonry({
        itemSelector: '.item',
        columnWidth: '.item'
    });
}

function initMap() {
    jQuery('.ltx-google-maps').each(function (i, mapEl) {
        mapEl = jQuery(mapEl);
        if (mapEl.length) {
            var uluru = {
                lat: mapEl.data('lat'),
                lng: mapEl.data('lng')
            };
            var map = new google.maps.Map(document.getElementById(mapEl.attr('id')), {
                zoom: mapEl.data('zoom'),
                center: uluru,
                scrollwheel: false,
                styles: mapStyles
            });
            var marker = new google.maps.Marker({
                position: uluru,
                icon: mapEl.data('marker'),
                map: map
            });
        }
    });
}

function ltxBubble() {
    var c = document.getElementById('ltx-bubbles'),
        width = window.innerWidth,
        height = window.innerHeight;
    c.width = width;
    c.height = height;
    for (i = 0; i < Bubbles.length; i++) {
        var b = Bubbles[i];
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
        b.alpha = .5 * (b.y / height);
        b.speed += speed;
        ctx.strokeStyle = "rgba(255, 255, 255, .5)";
        ctx.stroke();
        ctx.fillStyle = "hsla(203, 75%, 69%," + b.alpha + ")";
        ctx.fill();
        b.y -= b.speed;
        if (b.y < 0) {
            b.y = height;
            b.speed = Math.random() * 5;
        }
    }
}

function draw() {
    ltxBubble();
    window.requestAnimationFrame(draw);
}

function resizeLtxBubblesCanvas() {
    width = window.innerWidth, height = window.innerHeight;
    var c = document.getElementById('ltx-bubbles');
    c.width = width;
    c.height = height;
    draw();
}

if (!/Mobi/.test(navigator.userAgent) && jQuery(window).width() > 768 && jQuery('#ltx-bubbles').length) {
    var c = document.getElementById('ltx-bubbles'),
        ctx = c.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        particles = 60,
        minRadius = 1,
        maxRadius = 3,
        speed = 0.01,
        x = width / particles;
    var Bubbles = [];
    for (var i = 0; i < particles; i++) {
        Bubbles.push({
            x: i * x,
            y: height * Math.random(),
            r: minRadius + Math.random() * (maxRadius - minRadius),
            speed: 10 * Math.random()
        });
    }
    resizeLtxBubblesCanvas();
    window.addEventListener('resize', resizeLtxBubblesCanvas, false);
}
;
!function (a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }

    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function (c) {
            var d = c.data;
            if (d.secret || d.message || d.value)
                if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                    var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                        k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                    for (e = 0; e < k.length; e++) k[e].style.display = "none";
                    for (e = 0; e < j.length; e++)
                        if (f = j[e], c.source === f.contentWindow) {
                            if (f.removeAttribute("style"), "height" === d.message) {
                                if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                else if (~~g < 200) g = 200;
                                f.height = g
                            }
                            if ("link" === d.message)
                                if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                    if (b.activeElement === f) a.top.location.href = d.value
                        } else ;
                }
        }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);

function vc_js() {
    vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
}

function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && 1169 > screen_w ? "desktop" : 768 < screen_w && 959 > screen_w ? "tablet" : 300 < screen_w && 767 > screen_w ? "mobile" : 300 > screen_w ? "mobile_portrait" : ""
}

function loadScript(url, $obj, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript", script.readyState && (script.onreadystatechange = function () {
        "loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null, callback())
    }), script.src = url, $obj.get(0).appendChild(script)
}

function vc_ttaActivation() {
    jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
        var $ = window.jQuery,
            ui = {};
        ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
    })
}

function vc_accordionActivate(event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
        var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = ui.newPanel.find(".vc_round-chart"),
            $line_charts = ui.newPanel.find(".vc_line-chart"),
            $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
        void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
            jQuery(this).isotope("layout")
        })
    }
}

function initVideoBackgrounds() {
    return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
}

function vc_initVideoBackgrounds() {
    jQuery("[data-vc-video-bg]").each(function () {
        var youtubeUrl, youtubeId, $element = jQuery(this);
        $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), youtubeId = vcExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
            $element.has($grid).length && vcResizeVideoBackground($element)
        })) : $element.find(".vc_video-bg").remove()
    })
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
    if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
        insertYoutubeVideoAsBackground($element, youtubeId, counter++)
    }, 100);
    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
    new YT.Player($container[0], {
        width: "100%",
        height: "100%",
        videoId: youtubeId,
        playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            wmode: "transparent"
        },
        events: {
            onReady: function (event) {
                event.target.mute().setLoop(!0)
            }
        }
    }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function () {
        vcResizeVideoBackground($element)
    })
}

function vcResizeVideoBackground($element) {
    var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
        containerH = $element.innerHeight();
    containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({
        maxWidth: "1000%",
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: iframeW,
        height: iframeH
    })
}

function vcExtractYoutubeId(url) {
    if (void 0 === url) return !1;
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    return null !== id && id[1]
}

function vc_googleMapsPointer() {
    var $ = window.jQuery,
        $wpbGmapsWidget = $(".wpb_gmaps_widget");
    $wpbGmapsWidget.click(function () {
        $("iframe", this).css("pointer-events", "auto")
    }), $wpbGmapsWidget.mouseleave(function () {
        $("iframe", this).css("pointer-events", "none")
    }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}

function vc_setHoverBoxPerspective(hoverBox) {
    hoverBox.each(function () {
        var $this = jQuery(this),
            width = $this.width(),
            perspective = 4 * width + "px";
        $this.css("perspective", perspective)
    })
}

function vc_setHoverBoxHeight(hoverBox) {
    hoverBox.each(function () {
        var $this = jQuery(this),
            hoverBoxInner = $this.find(".vc-hoverbox-inner");
        hoverBoxInner.css("min-height", 0);
        var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
            backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
            hoverBoxHeight = frontHeight > backHeight ? frontHeight : backHeight;
        hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
    })
}

function vc_prepareHoverBox() {
    var hoverBox = jQuery(".vc-hoverbox");
    vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
}

document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function () {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
    ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
        var this_element = jQuery(this),
            sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
            sliderFx = this_element.attr("data-flex_fx"),
            slideshow = !0;
        0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
            animation: sliderFx,
            slideshow: slideshow,
            slideshowSpeed: sliderTimeout,
            sliderSpeed: 800,
            smoothHeight: !0
        })
    })
}), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
    0 < jQuery(".wpb_googleplus").length && function () {
        var po = document.createElement("script");
        po.type = "text/javascript", po.async = !0, po.src = "//apis.google.com/js/plusone.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s)
    }()
}), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
    0 < jQuery(".wpb_pinterest").length && function () {
        var po = document.createElement("script");
        po.type = "text/javascript", po.async = !0, po.src = "//assets.pinterest.com/js/pinit.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s)
    }()
}), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
    void 0 !== jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function () {
        jQuery(this).find(".vc_single_bar").each(function (index) {
            var $this = jQuery(this),
                bar = $this.find(".vc_bar"),
                val = bar.data("percentage-value");
            setTimeout(function () {
                bar.css({
                    width: val + "%"
                })
            }, 200 * index)
        })
    }, {
        offset: "85%"
    })
}), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
    void 0 !== jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function () {
        jQuery(this).addClass("wpb_start_animation animated")
    }, {
        offset: "85%"
    })
}), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
    function event(e) {
        e && e.preventDefault && e.preventDefault();
        var title = jQuery(this),
            element = title.closest(".vc_toggle"),
            content = element.find(".vc_toggle_content");
        element.hasClass("vc_toggle_active") ? content.slideUp({
            duration: 300,
            complete: function () {
                element.removeClass("vc_toggle_active")
            }
        }) : content.slideDown({
            duration: 300,
            complete: function () {
                element.addClass("vc_toggle_active")
            }
        })
    }

    $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
}), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function ($tab) {
    if (jQuery.ui) {
        var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
            ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
            old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
        $call.each(function (index) {
            var $tabs, interval = jQuery(this).attr("data-interval"),
                tabs_array = [];
            if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                show: function (event, ui) {
                    wpb_prepare_tab_content(event, ui)
                },
                beforeActivate: function (event, ui) {
                    1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
                },
                activate: function (event, ui) {
                    wpb_prepare_tab_content(event, ui)
                }
            }), interval && 0 < interval) try {
                $tabs.tabs("rotate", 1e3 * interval)
            } catch (e) {
                window.console && window.console.log && console.log(e)
            }
            jQuery(this).find(".wpb_tab").each(function () {
                tabs_array.push(this.id)
            }), jQuery(this).find(".wpb_tabs_nav li").click(function (e) {
                return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
            }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function (e) {
                if (e.preventDefault(), old_version) {
                    var index = $tabs.tabs("option", "selected");
                    jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, 0 > index ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
                } else {
                    var index = $tabs.tabs("option", "active"),
                        length = $tabs.find(".wpb_tab").length;
                    index = jQuery(this).parent().hasClass("wpb_next_slide") ? index + 1 >= length ? 0 : index + 1 : 0 > index - 1 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
                }
            })
        })
    }
}), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
    jQuery(".wpb_accordion").each(function (index) {
        var $tabs, $this = jQuery(this),
            active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
            collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
        $tabs = $this.find(".wpb_accordion_wrapper").accordion({
            header: "> div > h3",
            autoHeight: !1,
            heightStyle: "content",
            active: active_tab,
            collapsible: collapsible,
            navigation: !0,
            activate: vc_accordionActivate,
            change: function (event, ui) {
                void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
            }
        }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {
        })
    })
}), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
    var layout_modes = {
        fitrows: "fitRows",
        masonry: "masonry"
    };
    jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
        var $container = jQuery(this),
            $thumbs = $container.find(".wpb_thumbnails"),
            layout_mode = $thumbs.attr("data-layout-mode");
        $thumbs.isotope({
            itemSelector: ".isotope-item",
            layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
        }), $container.find(".categories_filter a").data("isotope", $thumbs).click(function (e) {
            e.preventDefault();
            var $thumbs = jQuery(this).data("isotope");
            jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                filter: jQuery(this).attr("data-filter")
            })
        }), jQuery(window).bind("load resize", function () {
            $thumbs.isotope("layout")
        })
    })
}), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
    ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
        var $this = jQuery(this);
        if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
            $this.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1");
            var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
            carousele_li.css({
                "margin-right": carousele_li.css("margin-left"),
                "margin-left": 0
            });
            var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
            fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function () {
                var before_resize = screen_size;
                screen_size = getSizeName(), before_resize != screen_size && window.setTimeout("location.reload()", 20)
            })
        }
    })
}), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
    jQuery(".wpb_gallery_slides").each(function (index) {
        var $imagesGrid, this_element = jQuery(this);
        if (this_element.hasClass("wpb_slider_nivo")) {
            var sliderTimeout = 1e3 * this_element.attr("data-interval");
            0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 800,
                pauseTime: sliderTimeout,
                startSlide: 0,
                directionNav: !0,
                directionNavHide: !0,
                controlNav: !0,
                keyboardNav: !1,
                pauseOnHover: !0,
                manualAdvance: !1,
                prevText: "Prev",
                nextText: "Next"
            })
        } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
            $imagesGrid.isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            })
        }) : this_element.find(".wpb_image_grid_ul").isotope({
            itemSelector: ".isotope-item",
            layoutMode: "fitRows"
        }))
    })
}), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
    try {
        jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
            animationSpeed: "normal",
            hook: "data-rel",
            padding: 15,
            opacity: .7,
            showTitle: !0,
            allowresize: !0,
            counter_separator_label: "/",
            hideflash: !1,
            deeplinking: !1,
            modal: !1,
            callback: function () {
                location.href.indexOf("#!prettyPhoto") > -1 && (location.hash = "")
            },
            social_tools: ""
        })
    } catch (err) {
        window.console && window.console.log && console.log(err)
    }
}), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
    return !1
}), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
    function fullWidthRow() {
        var $elements = $('[data-vc-full-width="true"]');
        $.each($elements, function (key, item) {
            var $el = $(this);
            $el.addClass("vc_hidden");
            var $el_full = $el.next(".vc_row-full-width");
            if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                var el_margin_left = parseInt($el.css("margin-left"), 10),
                    el_margin_right = parseInt($el.css("margin-right"), 10),
                    offset = 0 - $el_full.offset().left - el_margin_left,
                    width = $(window).width();
                if ($el.css({
                    position: "relative",
                    left: offset,
                    "box-sizing": "border-box",
                    width: $(window).width()
                }), !$el.data("vcStretchContent")) {
                    var padding = -1 * offset;
                    0 > padding && (padding = 0);
                    var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                    0 > paddingRight && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })
                }
                $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                    el: $el,
                    offset: offset,
                    marginLeft: el_margin_left,
                    marginRight: el_margin_right,
                    elFull: $el_full,
                    width: width
                })
            }
        }), $(document).trigger("vc-full-width-row", $elements)
    }

    function fullHeightRow() {
        var $element = $(".vc_row-o-full-height:first");
        if ($element.length) {
            var $window, windowHeight, offsetTop, fullHeight;
            $window = $(window), windowHeight = $window.height(), offsetTop = $element.offset().top, offsetTop < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"))
        }
        $(document).trigger("vc-full-height-row", $element)
    }

    var $ = window.jQuery;
    $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(),
        function () {
            (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            })
        }(), vc_initVideoBackgrounds(),
        function () {
            var vcSkrollrOptions, callSkrollInit = !1;
            window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
                var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), $parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this)), $parallaxElement.height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), youtubeId = vcExtractYoutubeId(parallaxImage), youtubeId ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrSpeed = skrollrSize - 100, skrollrStart = -skrollrSpeed, skrollrEnd = 0, $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: " + skrollrEnd + "%;")
            }), !(!callSkrollInit || !window.skrollr) && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function () {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }()
}), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
    jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
}), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
    for (var find = !1, i = 1; !1 === find;) {
        if (el.hasClass("columns_count_" + i)) return find = !0, i;
        i++
    }
});
var screen_size = getSizeName();
"function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
    var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
        $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
        $round_charts = panel.find(".vc_round-chart"),
        $line_charts = panel.find(".vc_line-chart"),
        $carousel = panel.find('[data-ride="vc_carousel"]');
    if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
        var grid = jQuery(this).data("vcGrid");
        grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
        var grid = jQuery(this).data("vcGrid");
        grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
        reload: !1
    }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
        reload: !1
    }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
        var $frame = $google_maps.find("iframe");
        $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
    }
    panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
        jQuery(this).isotope("layout")
    })
}), window.vc_googleMapsPointer, jQuery(document).ready(vc_prepareHoverBox), jQuery(window).resize(vc_prepareHoverBox), jQuery(document).ready(function ($) {
    window.vc_js()
});

(function () {
    var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function (t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function (n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function () {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function () {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function () {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function () {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function () {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }

            t.prototype.doScroll = function () {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function (t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function () {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            };
            return t
        }();
        l = function () {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }

            t.prototype.trigger = function (t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function () {
                return this.enabled = false
            };
            t.prototype.enable = function () {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function () {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function (t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function (t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function (t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function () {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function () {
                return d._invoke(this, "disable")
            },
            enable: function () {
                return d._invoke(this, "enable")
            },
            destroy: function () {
                return d._invoke(this, "destroy")
            },
            prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function (t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function () {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function (t, e) {
                t.each(function () {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function (t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function () {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function () {
                return n.each(a, function (t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function () {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function (t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function (t, i) {
                    n.each(e[t], function (t, e) {
                        return i.push(e)
                    });
                    i.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function (t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function () {
                return h._invoke("enable")
            },
            disable: function () {
                return h._invoke("disable")
            },
            destroy: function () {
                return h._invoke("destroy")
            },
            extendFn: function (t, e) {
                return d[t] = e
            },
            _invoke: function (t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function (e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function (t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function (t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function (t) {
                    return t.element
                })
            }
        };
        n[m] = function () {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function () {
            return n[m]("refresh")
        })
    })
}).call(this);
/*! skrollr 0.6.30 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function (a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
            for (var d in c.easing) W[d] = c.easing[d];
        ta = c.edgeStrategy || "set", ka = {
            beforerender: c.beforerender,
            render: c.render,
            keyframe: c.keyframe
        }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
            targetTop: ha.getScrollTop()
        }, Sa = (c.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function () {
            var a = e.clientWidth,
                b = e.clientHeight;
            (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
        });
        var g = U();
        return function h() {
            $(), va = g(h)
        }(), ha
    }

    var e, f, g = {
            get: function () {
                return ha
            },
            init: function (a) {
                return ha || new d(a)
            },
            VERSION: "0.6.29"
        },
        h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = .004,
        z = "skrollr-body",
        A = 200,
        B = "start",
        C = "end",
        D = "center",
        E = "bottom",
        F = "___skrollable_id",
        G = /^(?:input|textarea|button|select)$/i,
        H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        K = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function (a, b) {
            return b.toUpperCase()
        },
        N = /[\-+]?[\d]*\.?[\d]+/g,
        O = /\{\?\}/g,
        P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        Q = /[a-z\-]+-gradient/g,
        R = "",
        S = "",
        T = function () {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b)
                    if (R = c.match(a) || +c == c && b[c].match(a)) break;
                if (!R) return void(R = S = "");
                R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[R]) : S = "-" + R.toLowerCase() + "-"
            }
        },
        U = function () {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                c = Ha();
            return (Sa || !b) && (b = function (b) {
                var d = Ha() - c,
                    e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function () {
                    c = Ha(), b()
                }, e)
            }), b
        },
        V = function () {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (Sa || !b) && (b = function (b) {
                return a.clearTimeout(b)
            }), b
        },
        W = {
            begin: function () {
                return 0
            },
            end: function () {
                return 1
            },
            linear: function (a) {
                return a
            },
            quadratic: function (a) {
                return a * a
            },
            cubic: function (a) {
                return a * a * a
            },
            swing: function (a) {
                return -i.cos(a * i.PI) / 2 + .5
            },
            sqrt: function (a) {
                return i.sqrt(a)
            },
            outCubic: function (a) {
                return i.pow(a - 1, 3) + 1
            },
            bounce: function (a) {
                var b;
                if (.5083 >= a) b = 3;
                else if (.8489 >= a) b = 9;
                else if (.96208 >= a) b = 27;
                else {
                    if (!(.99981 >= a)) return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function (a) {
        var d, e, f = !1;
        for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = pa,
                k = ta,
                l = !1;
            if (f && F in g && delete g[F], g.attributes) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                            if ("data-edge-strategy" !== p.name)
                                if ("data-emit-events" !== p.name) {
                                    var q = p.name.match(I);
                                    if (null !== q) {
                                        var r = {
                                            props: p.value,
                                            element: g,
                                            eventType: p.name.replace(L, M)
                                        };
                                        i.push(r);
                                        var s = q[1];
                                        s && (r.constant = s.substr(1));
                                        var t = q[2];
                                        /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                        var u = q[3],
                                            v = q[4] || u;
                                        u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                                    }
                                } else l = !0;
                            else k = p.value;
                        else j = "off" !== p.value;
                    else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
                }
                if (i.length) {
                    var w, x, y;
                    !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                        element: g,
                        styleAttr: w,
                        classAttr: x,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k,
                        emitEvents: l,
                        lastFrameIndex: -1
                    }, Ea(g, [o], [])
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z))
        }
        return ha
    }, d.prototype.relativeToAbsolute = function (a, b, c) {
        var d = e.clientHeight,
            f = a.getBoundingClientRect(),
            g = f.top,
            h = f.bottom - f.top;
        return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function (a, b) {
        b = b || {};
        var d = Ha(),
            e = ha.getScrollTop(),
            f = b.duration === c ? x : b.duration;
        return oa = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: f,
            startTime: d,
            endTime: d + f,
            easing: W[b.easing || w],
            done: b.done
        }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
    }, d.prototype.stopAnimateTo = function () {
        oa && oa.done && oa.done.call(ha, !0), oa = c
    }, d.prototype.isAnimatingTo = function () {
        return !!oa
    }, d.prototype.isMobile = function () {
        return Sa
    }, d.prototype.setScrollTop = function (b, c) {
        return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
    }, d.prototype.getScrollTop = function () {
        return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function () {
        return Ja
    }, d.prototype.on = function (a, b) {
        return ka[a] = b, ha
    }, d.prototype.off = function (a) {
        return delete ka[a], ha
    }, d.prototype.destroy = function () {
        var a = V();
        a(va), ya(), Ea(e, [t], [s, u, v]);
        for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
        e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
    };
    var X = function () {
            var d, g, h, j, o, p, q, r, s, t, u, v;
            wa(e, [k, l, m, n].join(" "), function (a) {
                var e = a.changedTouches[0];
                for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
                switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                    case k:
                        d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                        break;
                    case l:
                        G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                        break;
                    default:
                    case m:
                    case n:
                        var f = g - o,
                            w = h - p,
                            x = w * w + f * f;
                        if (49 > x) {
                            if (!G.test(d.tagName)) {
                                d.focus();
                                var y = b.createEvent("MouseEvents");
                                y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                            }
                            return
                        }
                        d = c;
                        var z = r / v;
                        z = i.max(i.min(z, 3), -3);
                        var A = i.abs(z / na),
                            B = z * A + .5 * na * A * A,
                            C = ha.getScrollTop() - B,
                            D = 0;
                        C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
        },
        Y = function () {
            var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                o = Ba();
            for (j = 0, k = ia.length; k > j; j++)
                for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
            for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                a.keyFrames.sort(Ia)
            }
        },
        Z = function (a, b) {
            for (var c = 0, d = ia.length; d > c; c++) {
                var e, f, i = ia[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l.length,
                    n = l[0],
                    s = l[l.length - 1],
                    t = k < n.frame,
                    u = k > s.frame,
                    v = t ? n : s,
                    w = i.emitEvents,
                    x = i.lastFrameIndex;
                if (t || u) {
                    if (t && -1 === i.edge || u && 1 === i.edge) continue;
                    switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                        case "reset":
                            fa(j);
                            continue;
                        case "ease":
                            k = v.frame;
                            break;
                        default:
                        case "set":
                            var y = v.props;
                            for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                            continue
                    }
                } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
                for (var z = 0; m - 1 > z; z++)
                    if (k >= l[z].frame && k <= l[z + 1].frame) {
                        var A = l[z],
                            B = l[z + 1];
                        for (e in A.props)
                            if (h.call(A.props, e)) {
                                var C = (k - A.frame) / (B.frame - A.frame);
                                C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                            }
                        w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                        break
                    }
            }
        },
        $ = function () {
            Qa && (Qa = !1, Aa());
            var a, b, d = ha.getScrollTop(),
                e = Ha();
            if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
            else if (!sa) {
                var f = ra.targetTop - d;
                f && (ra = {
                    startTop: Ma,
                    topDiff: d - Ma,
                    targetTop: d,
                    startTime: Na,
                    endTime: Na + qa
                }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
            }
            if (sa || Ma !== d) {
                La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
                var h = {
                        curTop: d,
                        lastTop: Ma,
                        maxTop: Ja,
                        direction: La
                    },
                    i = ka.beforerender && ka.beforerender.call(ha, h);
                i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
            }
            Na = e
        },
        _ = function (a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                    value: e,
                    easing: W[d]
                };
                h.props = i
            }
        },
        aa = function (a) {
            var b = [];
            return P.lastIndex = 0, a = a.replace(P, function (a) {
                return a.replace(N, function (a) {
                    return a / 255 * 100 + "%"
                })
            }), S && (Q.lastIndex = 0, a = a.replace(Q, function (a) {
                return S + a
            })), a = a.replace(N, function (a) {
                return b.push(+a), "{?}"
            }), b.unshift(a), b
        },
        ba = function (a) {
            var b, c, d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
        },
        ca = function (a, b) {
            var c;
            for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props) b[c] = a.props[c]
        },
        da = function (a, b, c) {
            var d, e = a.length;
            if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
            return f
        },
        ea = function (a) {
            var b = 1;
            return O.lastIndex = 0, a[0].replace(O, function () {
                return a[b++]
            })
        },
        fa = function (a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
        },
        ga = function () {
            ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
            var a = j(ja),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(S + "transform"),
                d = b && "none" !== b || c && "none" !== c;
            d || (ua = "")
        };
    g.setStyle = function (a, b, c) {
        var d = a.style;
        if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
        else if ("float" === b) d.styleFloat = d.cssFloat = c;
        else try {
                R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
            } catch (e) {
            }
    };
    var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function (b, c, d) {
            var e = function (b) {
                return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function () {
                    b.returnValue = !1, b.defaultPrevented = !0
                }), d.call(this, b)
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
                element: b,
                name: f,
                listener: d
            })
        },
        xa = g.removeEvent = function (a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
        },
        ya = function () {
            for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
            Ua = []
        },
        za = function (a, b, c) {
            ka.keyframe && ka.keyframe.call(ha, a, b, c)
        },
        Aa = function () {
            var a = ha.getScrollTop();
            Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
        },
        Ba = function () {
            var a, b, c = e.clientHeight,
                d = {};
            for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
            return d
        },
        Ca = function () {
            var a, b = 0;
            return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
        },
        Da = function (b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
        },
        Ea = function (b, d, e) {
            var f = "className";
            if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
            g = Fa(g);
            for (var j = 0, k = d.length; k > j; j++) -1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
            b[f] = Fa(g)
        },
        Fa = function (a) {
            return a.replace(H, "")
        },
        Ga = function (a) {
            return " " + a + " "
        },
        Ha = Date.now || function () {
            return +new Date
        },
        Ia = function (a, b) {
            return a.frame - b.frame
        },
        Ja = 0,
        Ka = 1,
        La = "down",
        Ma = -1,
        Na = Ha(),
        Oa = 0,
        Pa = 0,
        Qa = !1,
        Ra = 0,
        Sa = !1,
        Ta = 0,
        Ua = [];
    "function" == typeof define && define.amd ? define([], function () {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
}(window, document);
!function () {
    var t = void 0,
        e = void 0;
    !function () {
        function e(n, r, i) {
            function o(s, a) {
                if (!r[s]) {
                    if (!n[s]) {
                        var c = "function" == typeof t && t;
                        if (!a && c) return c(s, !0);
                        if (u) return u(s, !0);
                        var f = new Error("Cannot find module '" + s + "'");
                        throw f.code = "MODULE_NOT_FOUND", f
                    }
                    var l = r[s] = {
                        exports: {}
                    };
                    n[s][0].call(l.exports, function (t) {
                        var e = n[s][1][t];
                        return o(e || t)
                    }, l, l.exports, e, n, r, i)
                }
                return r[s].exports
            }

            for (var u = "function" == typeof t && t, s = 0; s < i.length; s++) o(i[s]);
            return o
        }

        return e
    }()({
        1: [function (t, e, n) {
            "use strict";

            function r(t) {
                var e = "animated" === a.auto_scroll;
                c(t.element, {
                    duration: e ? 800 : 1,
                    alignment: "middle"
                })
            }

            var i = function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(t("./forms/conditional-elements.js")),
                o = window.mc4wp || {},
                u = t("gator"),
                s = t("./forms/forms.js"),
                a = window.mc4wp_forms_config || {},
                c = t("scroll-to-element");
            if (u(document.body).on("submit", ".mc4wp-form", function (t) {
                var e = s.getByElement(t.target || t.srcElement);
                s.trigger("submit", [e, t]), s.trigger(e.id + ".submit", [e, t])
            }), u(document.body).on("focus", ".mc4wp-form", function (t) {
                var e = s.getByElement(t.target || t.srcElement);
                e.started || (s.trigger("started", [e, t]), s.trigger(e.id + ".started", [e, t]), e.started = !0)
            }), u(document.body).on("change", ".mc4wp-form", function (t) {
                var e = s.getByElement(t.target || t.srcElement);
                s.trigger("change", [e, t]), s.trigger(e.id + ".change", [e, t])
            }), i.default.init(), o.listeners) {
                for (var f = o.listeners, l = 0; l < f.length; l++) s.on(f[l].event, f[l].callback);
                delete o.listeners
            }
            if (o.forms = s, a.submitted_form) {
                var h = a.submitted_form,
                    d = document.getElementById(h.element_id);
                !function (t, e, n, i) {
                    var o = Date.now(),
                        u = document.body.clientHeight;
                    n && t.setData(i), window.scrollY <= 10 && a.auto_scroll && r(t), window.addEventListener("load", function () {
                        s.trigger("submitted", [t]), s.trigger(t.id + ".submitted", [t]), n ? (s.trigger("error", [t, n]), s.trigger(t.id + ".error", [t, n])) : (s.trigger("success", [t, i]), s.trigger(t.id + ".success", [t, i]), s.trigger(e + "d", [t, i]), s.trigger(t.id + "." + e + "d", [t, i]));
                        var c = Date.now() - o;
                        a.auto_scroll && c > 1e3 && c < 2e3 && document.body.clientHeight != u && r(t)
                    })
                }(s.getByElement(d), h.action, h.errors, h.data)
            }
            window.mc4wp = o
        }, {
            "./forms/conditional-elements.js": 2,
            "./forms/forms.js": 4,
            gator: 12,
            "scroll-to-element": 14
        }],
        2: [function (t, e, n) {
            "use strict";

            function r(t) {
                for (var e = !!t.getAttribute("data-show-if"), n = e ? t.getAttribute("data-show-if").split(":") : t.getAttribute("data-hide-if").split(":"), r = n[0], i = (n.length > 1 ? n[1] : "*").split("|"), o = function (t, e) {
                    for (var n = [], r = t.querySelectorAll('input[name="' + e + '"], select[name="' + e + '"], textarea[name="' + e + '"]'), i = 0; i < r.length; i++) {
                        var o = r[i],
                            u = o.getAttribute("type");
                        ("radio" !== u && "checkbox" !== u || o.checked) && n.push(o.value)
                    }
                    return n
                }(function (t) {
                    for (var e = t; e.parentElement;)
                        if ("FORM" === (e = e.parentElement).tagName) return e;
                    return null
                }(t), r), u = !1, s = 0; s < o.length; s++) {
                    var a = o[s];
                    if (u = i.indexOf(a) > -1 || i.indexOf("*") > -1 && a.length > 0) break
                }
                t.style.display = e ? u ? "" : "none" : u ? "none" : "";
                var c = t.querySelectorAll("input, select, textarea");
                [].forEach.call(c, function (t) {
                    (u || e) && t.getAttribute("data-was-required") && (t.required = !0, t.removeAttribute("data-was-required")), u && e || !t.required || (t.setAttribute("data-was-required", "true"), t.required = !1)
                })
            }

            function i() {
                var t = document.querySelectorAll(".mc4wp-form [data-show-if], .mc4wp-form [data-hide-if]");
                [].forEach.call(t, r)
            }

            function o(t) {
                if (t.target && t.target.form && !(t.target.form.className.indexOf("mc4wp-form") < 0)) {
                    var e = t.target.form.querySelectorAll("[data-show-if], [data-hide-if]");
                    [].forEach.call(e, r)
                }
            }

            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = {
                init: function () {
                    document.addEventListener("keyup", o, !0), document.addEventListener("change", o, !0), document.addEventListener("mc4wp-refresh", i, !0), window.addEventListener("load", i), i()
                }
            }
        }, {}],
        3: [function (t, e, n) {
            "use strict";
            var r = t("form-serialize"),
                i = t("populate.js"),
                o = function (t, e) {
                    this.id = t, this.element = e || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
                };
            o.prototype.setData = function (t) {
                try {
                    i(this.element, t)
                } catch (t) {
                    console.error(t)
                }
            }, o.prototype.getData = function () {
                return r(this.element, {
                    hash: !0,
                    empty: !0
                })
            }, o.prototype.getSerializedData = function () {
                return r(this.element, {
                    hash: !1,
                    empty: !0
                })
            }, o.prototype.setResponse = function (t) {
                this.element.querySelector(".mc4wp-response").innerHTML = t
            }, o.prototype.reset = function () {
                this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
            }, e.exports = o
        }, {
            "form-serialize": 11,
            "populate.js": 13
        }],
        4: [function (t, e, n) {
            "use strict";

            function r(t, e) {
                e = e || parseInt(t.getAttribute("data-id")) || 0;
                var n = new o(e, t);
                return s.push(n), n
            }

            var i = t("wolfy87-eventemitter"),
                o = t("./form.js"),
                u = new i,
                s = [];
            e.exports = {
                all: function () {
                    return s
                },
                get: function (t) {
                    for (var e = 0; e < s.length; e++)
                        if (s[e].id == t) return s[e];
                    return r(document.querySelector(".mc4wp-form-" + t), t)
                },
                getByElement: function (t) {
                    for (var e = t.form || t, n = 0; n < s.length; n++)
                        if (s[n].element == e) return s[n];
                    return r(e)
                },
                on: u.on.bind(u),
                trigger: function (t, e) {
                    "submit" === t ? u.trigger(t, e) : window.setTimeout(function () {
                        u.trigger(t, e)
                    }, 1)
                },
                off: u.off.bind(u)
            }
        }, {
            "./form.js": 3,
            "wolfy87-eventemitter": 16
        }],
        5: [function (t, e, n) {
            function r(t) {
                switch (i(t)) {
                    case "object":
                        var e = {};
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = r(t[n]));
                        return e;
                    case "array":
                        e = new Array(t.length);
                        for (var o = 0, u = t.length; o < u; o++) e[o] = r(t[o]);
                        return e;
                    case "regexp":
                        var s = "";
                        return s += t.multiline ? "m" : "", s += t.global ? "g" : "", s += t.ignoreCase ? "i" : "", new RegExp(t.source, s);
                    case "date":
                        return new Date(t.getTime());
                    default:
                        return t
                }
            }

            var i;
            try {
                i = t("component-type")
            } catch (e) {
                i = t("type")
            }
            e.exports = r
        }, {
            "component-type": 9,
            type: 9
        }],
        6: [function (t, e, n) {
            function r(t) {
                if (t) return function (t) {
                    for (var e in r.prototype) t[e] = r.prototype[e];
                    return t
                }(t)
            }

            e.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, r.prototype.once = function (t, e) {
                function n() {
                    this.off(t, n), e.apply(this, arguments)
                }

                return n.fn = e, this.on(t, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks["$" + t];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                for (var r, i = 0; i < n.length; i++)
                    if ((r = n[i]) === e || r.fn === e) {
                        n.splice(i, 1);
                        break
                    }
                return this
            }, r.prototype.emit = function (t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + t];
                if (n)
                    for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, e);
                return this
            }, r.prototype.listeners = function (t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, r.prototype.hasListeners = function (t) {
                return !!this.listeners(t).length
            }
        }, {}],
        7: [function (t, e, n) {
            n = e.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
                var e = (new Date).getTime(),
                    n = Math.max(0, 16 - (e - r)),
                    i = setTimeout(t, n);
                return r = e, i
            };
            var r = (new Date).getTime(),
                i = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;
            n.cancel = function (t) {
                i.call(window, t)
            }
        }, {}],
        8: [function (t, e, n) {
            function r(t) {
                if (!(this instanceof r)) return new r(t);
                this._from = t, this.ease("linear"), this.duration(500)
            }

            var i = t("emitter"),
                o = t("clone"),
                u = t("type"),
                s = t("ease");
            e.exports = r, i(r.prototype), r.prototype.reset = function () {
                return this.isArray = "array" === u(this._from), this._curr = o(this._from), this._done = !1, this._start = Date.now(), this
            }, r.prototype.to = function (t) {
                return this.reset(), this._to = t, this
            }, r.prototype.duration = function (t) {
                return this._duration = t, this
            }, r.prototype.ease = function (t) {
                if (!(t = "function" == typeof t ? t : s[t])) throw new TypeError("invalid easing function");
                return this._ease = t, this
            }, r.prototype.stop = function () {
                return this.stopped = !0, this._done = !0, this.emit("stop"), this.emit("end"), this
            }, r.prototype.step = function () {
                if (!this._done) {
                    var t = this._duration,
                        e = Date.now();
                    if (e - this._start >= t) return this._from = this._to, this._update(this._to), this._done = !0, this.emit("end"), this;
                    var n = this._from,
                        r = this._to,
                        i = this._curr,
                        o = (0, this._ease)((e - this._start) / t);
                    if (this.isArray) {
                        for (var u = 0; u < n.length; ++u) i[u] = n[u] + (r[u] - n[u]) * o;
                        return this._update(i), this
                    }
                    for (var s in n) i[s] = n[s] + (r[s] - n[s]) * o;
                    return this._update(i), this
                }
            }, r.prototype.update = function (t) {
                return 0 == arguments.length ? this.step() : (this._update = t, this)
            }
        }, {
            clone: 5,
            ease: 10,
            emitter: 6,
            type: 9
        }],
        9: [function (t, e, n) {
            var r = Object.prototype.toString;
            e.exports = function (t) {
                switch (r.call(t)) {
                    case "[object Date]":
                        return "date";
                    case "[object RegExp]":
                        return "regexp";
                    case "[object Arguments]":
                        return "arguments";
                    case "[object Array]":
                        return "array";
                    case "[object Error]":
                        return "error"
                }
                return null === t ? "null" : void 0 === t ? "undefined" : t != t ? "nan" : t && 1 === t.nodeType ? "element" : typeof(t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t))
            }
        }, {}],
        10: [function (t, e, n) {
            n.linear = function (t) {
                return t
            }, n.inQuad = function (t) {
                return t * t
            }, n.outQuad = function (t) {
                return t * (2 - t)
            }, n.inOutQuad = function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, n.inCube = function (t) {
                return t * t * t
            }, n.outCube = function (t) {
                return --t * t * t + 1
            }, n.inOutCube = function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, n.inQuart = function (t) {
                return t * t * t * t
            }, n.outQuart = function (t) {
                return 1 - --t * t * t * t
            }, n.inOutQuart = function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, n.inQuint = function (t) {
                return t * t * t * t * t
            }, n.outQuint = function (t) {
                return --t * t * t * t * t + 1
            }, n.inOutQuint = function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, n.inSine = function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, n.outSine = function (t) {
                return Math.sin(t * Math.PI / 2)
            }, n.inOutSine = function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, n.inExpo = function (t) {
                return 0 == t ? 0 : Math.pow(1024, t - 1)
            }, n.outExpo = function (t) {
                return 1 == t ? t : 1 - Math.pow(2, -10 * t)
            }, n.inOutExpo = function (t) {
                return 0 == t ? 0 : 1 == t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }, n.inCirc = function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, n.outCirc = function (t) {
                return Math.sqrt(1 - --t * t)
            }, n.inOutCirc = function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, n.inBack = function (t) {
                return t * t * (2.70158 * t - 1.70158)
            }, n.outBack = function (t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            }, n.inOutBack = function (t) {
                return (t *= 2) < 1 ? t * t * (3.5949095 * t - 2.5949095) * .5 : .5 * ((t -= 2) * t * (3.5949095 * t + 2.5949095) + 2)
            }, n.inBounce = function (t) {
                return 1 - n.outBounce(1 - t)
            }, n.outBounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, n.inOutBounce = function (t) {
                return t < .5 ? .5 * n.inBounce(2 * t) : .5 * n.outBounce(2 * t - 1) + .5
            }, n["in-quad"] = n.inQuad, n["out-quad"] = n.outQuad, n["in-out-quad"] = n.inOutQuad, n["in-cube"] = n.inCube, n["out-cube"] = n.outCube, n["in-out-cube"] = n.inOutCube, n["in-quart"] = n.inQuart, n["out-quart"] = n.outQuart, n["in-out-quart"] = n.inOutQuart, n["in-quint"] = n.inQuint, n["out-quint"] = n.outQuint, n["in-out-quint"] = n.inOutQuint, n["in-sine"] = n.inSine, n["out-sine"] = n.outSine, n["in-out-sine"] = n.inOutSine, n["in-expo"] = n.inExpo, n["out-expo"] = n.outExpo, n["in-out-expo"] = n.inOutExpo, n["in-circ"] = n.inCirc, n["out-circ"] = n.outCirc, n["in-out-circ"] = n.inOutCirc, n["in-back"] = n.inBack, n["out-back"] = n.outBack, n["in-out-back"] = n.inOutBack, n["in-bounce"] = n.inBounce, n["out-bounce"] = n.outBounce, n["in-out-bounce"] = n.inOutBounce
        }, {}],
        11: [function (t, e, n) {
            function r(t, e, n) {
                if (0 === e.length) return t = n;
                var i = e.shift(),
                    o = i.match(/^\[(.+?)\]$/);
                if ("[]" === i) return t = t || [], Array.isArray(t) ? t.push(r(null, e, n)) : (t._values = t._values || [], t._values.push(r(null, e, n))), t;
                if (o) {
                    var u = o[1],
                        s = +u;
                    isNaN(s) ? (t = t || {})[u] = r(t[u], e, n) : (t = t || [])[s] = r(t[s], e, n)
                } else t[i] = r(t[i], e, n);
                return t
            }

            var i = /^(?:submit|button|image|reset|file)$/i,
                o = /^(?:input|select|textarea|keygen)/i,
                u = /(\[[^\[\]]*\])/g;
            e.exports = function (t, e) {
                "object" != typeof e ? e = {
                    hash: !!e
                } : void 0 === e.hash && (e.hash = !0);
                for (var n = e.hash ? {} : "", s = e.serializer || (e.hash ? function (t, e, n) {
                    if (e.match(u)) {
                        var i = function (t) {
                            var e = [],
                                n = new RegExp(u),
                                r = /^([^\[\]]*)/.exec(t);
                            for (r[1] && e.push(r[1]); null !== (r = n.exec(t));) e.push(r[1]);
                            return e
                        }(e);
                        r(t, i, n)
                    } else {
                        var o = t[e];
                        o ? (Array.isArray(o) || (t[e] = [o]), t[e].push(n)) : t[e] = n
                    }
                    return t
                } : function (t, e, n) {
                    return n = n.replace(/(\r)?\n/g, "\r\n"), n = encodeURIComponent(n), n = n.replace(/%20/g, "+"), t + (t ? "&" : "") + encodeURIComponent(e) + "=" + n
                }), a = t && t.elements ? t.elements : [], c = Object.create(null), f = 0; f < a.length; ++f) {
                    var l = a[f];
                    if ((e.disabled || !l.disabled) && l.name && o.test(l.nodeName) && !i.test(l.type)) {
                        var h = l.name,
                            d = l.value;
                        if ("checkbox" !== l.type && "radio" !== l.type || l.checked || (d = void 0), e.empty) {
                            if ("checkbox" !== l.type || l.checked || (d = ""), "radio" === l.type && (c[l.name] || l.checked ? l.checked && (c[l.name] = !0) : c[l.name] = !1), void 0 == d && "radio" == l.type) continue
                        } else if (!d) continue;
                        if ("select-multiple" !== l.type) n = s(n, h, d);
                        else {
                            d = [];
                            for (var p = l.options, m = !1, v = 0; v < p.length; ++v) {
                                var g = p[v],
                                    y = e.empty && !g.value,
                                    w = g.value || y;
                                g.selected && w && (m = !0, n = e.hash && "[]" !== h.slice(h.length - 2) ? s(n, h + "[]", g.value) : s(n, h, g.value))
                            }
                            !m && e.empty && (n = s(n, h, ""))
                        }
                    }
                }
                if (e.empty)
                    for (var h in c) c[h] || (n = s(n, h, ""));
                return n
            }
        }, {}],
        12: [function (t, e, n) {
            !function () {
                function t(e, n, r) {
                    if ("_root" == n) return r;
                    if (e !== r) return function (t) {
                        return u || (u = t.matches ? t.matches : t.webkitMatchesSelector ? t.webkitMatchesSelector : t.mozMatchesSelector ? t.mozMatchesSelector : t.msMatchesSelector ? t.msMatchesSelector : t.oMatchesSelector ? t.oMatchesSelector : o.matchesSelector)
                    }(e).call(e, n) ? e : e.parentNode ? (s++, t(e.parentNode, n, r)) : void 0
                }

                function n(t, e, n, r) {
                    c[t.id] || (c[t.id] = {}), c[t.id][e] || (c[t.id][e] = {}), c[t.id][e][n] || (c[t.id][e][n] = []), c[t.id][e][n].push(r)
                }

                function r(t, e, n, r) {
                    if (c[t.id])
                        if (e)
                            if (r || n)
                                if (r) {
                                    if (c[t.id][e][n])
                                        for (var i = 0; i < c[t.id][e][n].length; i++)
                                            if (c[t.id][e][n][i] === r) {
                                                c[t.id][e][n].splice(i, 1);
                                                break
                                            }
                                } else delete c[t.id][e][n];
                            else c[t.id][e] = {};
                        else
                            for (var o in c[t.id]) c[t.id].hasOwnProperty(o) && (c[t.id][o] = {})
                }

                function i(e, i, u, a) {
                    function l(e) {
                        return function (n) {
                            !function (e, n, r) {
                                if (c[e][r]) {
                                    var i, u, a = n.target || n.srcElement,
                                        l = {},
                                        h = 0,
                                        d = 0;
                                    s = 0;
                                    for (i in c[e][r]) c[e][r].hasOwnProperty(i) && (u = t(a, i, f[e].element)) && o.matchesEvent(r, f[e].element, u, "_root" == i, n) && (s++, c[e][r][i].match = u, l[s] = c[e][r][i]);
                                    for (n.stopPropagation = function () {
                                        n.cancelBubble = !0
                                    }, h = 0; h <= s; h++)
                                        if (l[h])
                                            for (d = 0; d < l[h].length; d++) {
                                                if (!1 === l[h][d].call(l[h].match, n)) return void o.cancel(n);
                                                if (n.cancelBubble) return
                                            }
                                }
                            }(d, n, e)
                        }
                    }

                    if (this.element) {
                        e instanceof Array || (e = [e]), u || "function" != typeof i || (u = i, i = "_root");
                        var h, d = this.id;
                        for (h = 0; h < e.length; h++) a ? r(this, e[h], i, u) : (c[d] && c[d][e[h]] || o.addEvent(this, e[h], l(e[h])), n(this, e[h], i, u));
                        return this
                    }
                }

                function o(t, e) {
                    if (!(this instanceof o)) {
                        for (var n in f)
                            if (f[n].element === t) return f[n];
                        return a++, f[a] = new o(t, a), f[a]
                    }
                    this.element = t, this.id = e
                }

                var u, s = 0,
                    a = 0,
                    c = {},
                    f = {};
                o.prototype.on = function (t, e, n) {
                    return i.call(this, t, e, n)
                }, o.prototype.off = function (t, e, n) {
                    return i.call(this, t, e, n, !0)
                }, o.matchesSelector = function () {
                }, o.cancel = function (t) {
                    t.preventDefault(), t.stopPropagation()
                }, o.addEvent = function (t, e, n) {
                    var r = "blur" == e || "focus" == e;
                    t.element.addEventListener(e, n, r)
                }, o.matchesEvent = function () {
                    return !0
                }, void 0 !== e && e.exports && (e.exports = o), window.Gator = o
            }()
        }, {}],
        13: [function (t, n, r) {
            !function (t) {
                var r = function (t, e, n) {
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var o = i,
                                u = e[i];
                            if (void 0 === u && (u = ""), null === u && (u = ""), void 0 !== n && (o = n + "[" + i + "]"), u.constructor === Array) o += "[]";
                            else if ("object" == typeof u) {
                                r(t, u, o);
                                continue
                            }
                            var s = t.elements.namedItem(o);
                            if (s) {
                                switch (s.type || s[0].type) {
                                    default:
                                        s.value = u;
                                        break;
                                    case "radio":
                                    case "checkbox":
                                        for (var a = 0; a < s.length; a++) s[a].checked = u.indexOf(s[a].value) > -1;
                                        break;
                                    case "select-multiple":
                                        for (var c = u.constructor == Array ? u : [u], f = 0; f < s.options.length; f++) s.options[f].selected |= c.indexOf(s.options[f].value) > -1;
                                        break;
                                    case "select":
                                    case "select-one":
                                        s.value = u.toString() || u;
                                        break;
                                    case "date":
                                        s.value = new Date(u).toISOString().split("T")[0]
                                }
                            }
                        }
                };
                "function" == typeof e && "object" == typeof e.amd && e.amd ? e(function () {
                    return r
                }) : void 0 !== n && n.exports ? n.exports = r : t.populate = r
            }(this)
        }, {}],
        14: [function (t, e, n) {
            var r = t("scroll-to");
            e.exports = function (t, e) {
                if (e = e || {}, "string" == typeof t && (t = document.querySelector(t)), t) return r(0, function (t, e, n) {
                    var r = document.body,
                        i = document.documentElement,
                        o = t.getBoundingClientRect(),
                        u = i.clientHeight,
                        s = Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
                    e = e || 0;
                    var a;
                    a = "bottom" === n ? o.bottom - u : "middle" === n ? o.bottom - u / 2 - o.height / 2 : o.top;
                    var c = s - u;
                    return Math.min(a + e + window.pageYOffset, c)
                }(t, e.offset, e.align), e)
            }
        }, {
            "scroll-to": 15
        }],
        15: [function (t, e, n) {
            var r = t("tween"),
                i = t("raf");
            e.exports = function (t, e, n) {
                function o() {
                    i(o), s.update()
                }

                n = n || {};
                var u = function () {
                        var t = window.pageYOffset || document.documentElement.scrollTop,
                            e = window.pageXOffset || document.documentElement.scrollLeft;
                        return {
                            top: t,
                            left: e
                        }
                    }(),
                    s = r(u).ease(n.ease || "out-circ").to({
                        top: e,
                        left: t
                    }).duration(n.duration || 1e3);
                return s.update(function (t) {
                    window.scrollTo(0 | t.left, 0 | t.top)
                }), s.on("end", function () {
                    o = function () {
                    }
                }), o(), s
            }
        }, {
            raf: 7,
            tween: 8
        }],
        16: [function (t, n, r) {
            !function (t) {
                "use strict";

                function r() {
                }

                function i(t, e) {
                    for (var n = t.length; n--;)
                        if (t[n].listener === e) return n;
                    return -1
                }

                function o(t) {
                    return function () {
                        return this[t].apply(this, arguments)
                    }
                }

                function u(t) {
                    return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && u(t.listener)
                }

                var s = r.prototype,
                    a = t.EventEmitter;
                s.getListeners = function (t) {
                    var e, n, r = this._getEvents();
                    if (t instanceof RegExp) {
                        e = {};
                        for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n])
                    } else e = r[t] || (r[t] = []);
                    return e
                }, s.flattenListeners = function (t) {
                    var e, n = [];
                    for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                    return n
                }, s.getListenersAsObject = function (t) {
                    var e, n = this.getListeners(t);
                    return n instanceof Array && ((e = {})[t] = n), e || n
                }, s.addListener = function (t, e) {
                    if (!u(e)) throw new TypeError("listener must be a function");
                    var n, r = this.getListenersAsObject(t),
                        o = "object" == typeof e;
                    for (n in r) r.hasOwnProperty(n) && -1 === i(r[n], e) && r[n].push(o ? e : {
                        listener: e,
                        once: !1
                    });
                    return this
                }, s.on = o("addListener"), s.addOnceListener = function (t, e) {
                    return this.addListener(t, {
                        listener: e,
                        once: !0
                    })
                }, s.once = o("addOnceListener"), s.defineEvent = function (t) {
                    return this.getListeners(t), this
                }, s.defineEvents = function (t) {
                    for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                    return this
                }, s.removeListener = function (t, e) {
                    var n, r, o = this.getListenersAsObject(t);
                    for (r in o) o.hasOwnProperty(r) && -1 !== (n = i(o[r], e)) && o[r].splice(n, 1);
                    return this
                }, s.off = o("removeListener"), s.addListeners = function (t, e) {
                    return this.manipulateListeners(!1, t, e)
                }, s.removeListeners = function (t, e) {
                    return this.manipulateListeners(!0, t, e)
                }, s.manipulateListeners = function (t, e, n) {
                    var r, i, o = t ? this.removeListener : this.addListener,
                        u = t ? this.removeListeners : this.addListeners;
                    if ("object" != typeof e || e instanceof RegExp)
                        for (r = n.length; r--;) o.call(this, e, n[r]);
                    else
                        for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : u.call(this, r, i));
                    return this
                }, s.removeEvent = function (t) {
                    var e, n = typeof t,
                        r = this._getEvents();
                    if ("string" === n) delete r[t];
                    else if (t instanceof RegExp)
                        for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
                    else delete this._events;
                    return this
                }, s.removeAllListeners = o("removeEvent"), s.emitEvent = function (t, e) {
                    var n, r, i, o, u = this.getListenersAsObject(t);
                    for (o in u)
                        if (u.hasOwnProperty(o))
                            for (n = u[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                    return this
                }, s.trigger = o("emitEvent"), s.emit = function (t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(t, e)
                }, s.setOnceReturnValue = function (t) {
                    return this._onceReturnValue = t, this
                }, s._getOnceReturnValue = function () {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, s._getEvents = function () {
                    return this._events || (this._events = {})
                }, r.noConflict = function () {
                    return t.EventEmitter = a, r
                }, "function" == typeof e && e.amd ? e(function () {
                    return r
                }) : "object" == typeof n && n.exports ? n.exports = r : t.EventEmitter = r
            }(this || {})
        }, {}]
    }, {}, [1])
}();
;
