! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("jquery"), require("i18next"), require("bootbox"), require("frontexpress"), require("moment"), require("sugar"), require("handlebars"), require("minivents")) : "function" == typeof define && define.amd ? define(["jquery", "i18next", "bootbox", "frontexpress", "moment", "sugar", "handlebars", "minivents"], e) : e((t = t || self).$, t.i18next, t.bootbox, t.frontexpress, t.moment, t.Sugar, t.Handlebars, t.Events)
}(this, function (t, e, a, r, n, o, i, s) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t, e = e && e.hasOwnProperty("default") ? e.default : e, a = a && a.hasOwnProperty("default") ? a.default : a, r = r && r.hasOwnProperty("default") ? r.default : r, n = n && n.hasOwnProperty("default") ? n.default : n, o = o && o.hasOwnProperty("default") ? o.default : o, i = i && i.hasOwnProperty("default") ? i.default : i, s = s && s.hasOwnProperty("default") ? s.default : s;
    const l = r(),
        c = new Date;
    l.set("LOCA", {
        currentMonth: c.getMonth() + 1,
        currentYear: c.getFullYear(),
        countryCode: "en-US"
    });
    const d = {
        data: ({
            data: e
        }) => e ? t.param(e) : e,
        headers({
            headers: t,
            data: e
        }) {
            if (!e) return t;
            const a = t || {};
            return a["Content-Type"] || (a["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"), a
        }
    };
    l.set("http POST transformer", d), l.set("http PATCH transformer", d), l.openPrintPreview = (t => {
        window.open(t, "_blank", "location=no,menubar=yes,status=no,titlebar=yes,toolbar=yes,scrollbars=yes,resizable=yes,width=1000,height=700")
    }), l.sendEmail = ((t, e, a, r, n = (() => { })) => {
        t || n(), l.httpPost({
            uri: "/api/emails",
            data: {
                document: e,
                tenantIds: t,
                year: a,
                month: r
            }
        }, (t, e) => {
            n(JSON.parse(e.responseText))
        })
    });
    var m = () => {
        t.validator.addMethod("mindate", function (a, r, o) {
            let i, s, l;
            return "function" == typeof (i = o[0].domSelector ? t(o[0].domSelector).val() : o[0].minDate) && (i = i()), s = n.isMoment(i) ? i : n.isDate(i) ? n(i) : n(i, "L", !0), l = n(a, "L", !0), o[1] = o[0].message ? e.t(o[0].message) : e.t("Please set a date after the", {
                date: s.format("L")
            }), this.optional(r) || l.isValid() && s.isValid() && (l.isSame(s) || l.isAfter(s))
        }, "{1}"), t.validator.addMethod("maxdate", function (a, r, o) {
            let i, s, l;
            return "function" == typeof (i = o[0].domSelector ? t(o[0].domSelector).val() : o[0].maxDate) && (i = i()), s = n.isMoment(i) ? i : n.isDate(i) ? n(i) : n(i, "L", !0), l = n(a, "L", !0), o[1] = o[0].message ? e.t(o[0].message) : e.t("Please set a date before the", {
                date: s.format("L")
            }), this.optional(r) || l.isValid() && s.isValid() && (l.isSame(s) || l.isBefore(s))
        }, "{1}"), t.validator.addMethod("maxcontractdate", function (e, a, r) {
            var o, i, s, l = t(r[0] + " #" + r[1]).val(),
                c = t(r[0] + " #" + r[2]).val(),
                d = n(e, "L", !0);
            return (o = n(c, "L", !0)).isValid() ? "custom" === l ? (s = n.duration(2, "years"), i = n(o).add(s).subtract(1, "days"), d.isValid() && d.isAfter(o) && (d.isSame(i) || d.isBefore(i))) : (s = n.duration(9, "years"), (i = n(o).add(s).subtract(1, "days")).format("L") === e) : this.optional(a)
        }, e.t("The end date of contract is not compatible with contract selected")), t.validator.methods.date = function (t, e) {
            return this.optional(e) || n(t, "L", !0).isValid()
        }, t.validator.messages.date = e.t("The date is not valid (Sample date:)", {
            date: n().format("L")
        }), t.validator.addMethod("phoneFR", function (t, e) {
            return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)33\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
        }, e.t("Please enter a valid phone number"))
    };
    const u = {
        pt: "pt_PT"
    };
    async function h(t, e) {
        let a = document.getElementById(t);
        a && document.getElementsByTagName("head")[0].removeChild(a), await new Promise((r, n) => {
            try {
                (a = document.createElement("script")).id = t, a.type = "text/javascript", a.async = !0, a.onload = (t => {
                    "error" === t.type ? n(`an error has occurred when loading the localization file ${e}`) : r(t)
                }), a.onerror = (() => {
                    n(`an error has occurred when loading the localization file ${e}`)
                }), a.src = e, document.getElementsByTagName("head")[0].appendChild(a)
            } catch (t) {
                n(t)
            }
        })
    }

    function p() {
        const e = t("#right-menu-pane").width();
        t(".js-side-menu").each(function () {
            const a = t(this),
                r = a.innerWidth() - a.width();
            a.width(e - r)
        })
    }
    var f = () => {
        t(document).on("click", ".js-nav-action", function () {
            const e = t(this).data("id"),
                a = "website" === (r = e) ? {
                    nav: `/view/${r}`,
                    history: "/"
                } : {
                        nav: `/view/${r}`,
                        history: `/${r}`
                    };
            var r;
            return l.httpGet({
                uri: a.nav,
                history: {
                    state: {
                        viewId: e
                    },
                    title: e,
                    uri: a.history
                }
            }), t(".dropdown.open .dropdown-toggle").dropdown("toggle"), !1
        }), t(document).on("click", ".navbar-collapse.collapse.in a:not(.dropdown-toggle)", function () {
            t(this).closest(".navbar-collapse").collapse("hide")
        }), t(document).on("click", ".navbar-collapse.collapse.in button:not(.navbar-toggle)", function () {
            t(this).closest(".navbar-collapse").collapse("hide")
        }), t(document).on("before-show-card", ".js-side-menu", function () {
            p(), t(this).affix({
                offset: {
                    top: 0
                }
            })
        }), t(document).on("after-show-card", ".js-side-menu", function () {
            t(this).affix("checkPosition")
        }), t(document).on("before-hide-card", ".js-side-menu", function () {
            t(window).off(".affix"), t(this).removeData("bs.affix").removeClass("affix affix-top affix-bottom")
        }), t(document).on("affix.bs.affix", ".js-side-menu", function () {
            const e = t(this);
            e.width(e.width())
        }), t(window).resize(() => p())
    };
    class w {
        static filter(t, e) {
            var a, r, n, o = this,
                i = {};
            for (a in t) void 0 !== (r = e[a]) && (n = t[a], Array.isArray(n) ? Array.isArray(r) && (i[a] = [], r.forEach(function (t) {
                i[a].push(o.filter(n[0], t))
            })) : i[a] = r);
            return i
        }
    }
    class v {
        constructor(t) {
            this.options = Object.assign({
                domSelector: "",
                httpMethod: null,
                uri: null,
                defaultData: {},
                manifest: {},
                alertOnFieldError: !0
            }, t || {})
        }
        beforeSetData() { }
        afterSetData() { }
        onGetData(t) {
            return t
        }
        onBind() { }
        onSubmit(t, e) {
            e && e(t)
        }
        showErrorMessage(t) {
            this.$alertMsg.html(t), this.$alert.show()
        }
        setData(e) {
            const a = (e, r) => {
                r || (r = ""), o.Object.forEach(e, (e, n) => {
                    if (Array.isArray(e)) {
                        if (r) throw new Error("Two levels of attributes are not supported. Attribute to fix is " + n);
                        e.forEach((t, e) => {
                            a(t, r + "_" + e)
                        })
                    } else null === e ? t(this.options.domSelector + " #" + n + r).val("") : t(this.options.domSelector + " #" + n + r).val(String(e))
                })
            };
            this.$form[0].reset(), this.$alert.hide(), this.$form.find(".has-error").removeClass("has-error"), this.$form.find(".js-form-row:not(.js-master-form-row)").remove(), this.beforeSetData(arguments), e || (e = this.options.defaultData);
            const r = w.filter(this.options.defaultData, e);
            a(r), this.afterSetData(arguments)
        }
        getData() {
            var e, a, r, n = {};
            this.$form.find(".js-js-form-rows").each(function () {
                var e = t(this),
                    a = e.attr("id"),
                    r = e.find(".js-form-row");
                n[a] = [], r.each(function () {
                    var e = t(this).find("input, select, textarea"),
                        r = {};
                    e.each(function () {
                        var e = t(this),
                            a = e.attr("id").replace(/_\d+$/, "");
                        r[a] = e.val()
                    }), n[a].push(r)
                })
            }), e = this.$form.serializeArray();
            for (var o = 0; o < e.length; ++o)
                if (!e[o].name.match(/_\d+$/)) {
                    if (a = e[o].name, r = e[o].value, a in n) throw new Error('key "' + a + '" already set to value >>' + n.key + "<<");
                    n[a] = r || ""
                } return this.onGetData(n)
        }
        submit(t) {
            var a = this;
            if (this.$form.valid()) {
                const r = a.getData();
                if ("POST" !== a.options.httpMethod && r._id && r._id.trim()) {
                    const n = `${a.options.uri}/${r._id}`;
                    l.httpPatch({
                        uri: n,
                        data: r
                    }, (e, r) => {
                        const n = JSON.parse(r.responseText);
                        n.errors && n.errors.length > 0 ? a.showErrorMessage(n.errors.join("<br>")) : a.onSubmit(n, t)
                    }, () => {
                        a.showErrorMessage(e.t("A technical issue has occurred (-_-')"))
                    })
                } else delete r._id, l.httpPost({
                    uri: a.options.uri,
                    data: r
                }, (e, r) => {
                    const n = JSON.parse(r.responseText);
                    n.errors && n.errors.length > 0 ? a.showErrorMessage(n.errors.join("<br>")) : a.onSubmit(n, t)
                }, () => {
                    a.showErrorMessage(e.t("A technical issue has occurred (-_-')"))
                })
            }
        }
        getPropertyFilters() {
            return o.Object.keys(this.options.defaultData)
        }
        unbindForm() {
            this.$form && this.$form.off(".validate").removeData("validator")
        }
        bindForm() {
            var a, r, n = this;
            return n.onBind(arguments), n.$form = t(n.options.domSelector), 0 === n.$form.length ? n.$form : (n.$alert = t(n.options.domSelector + " .form-error").hide(), n.$alertMsg = n.$alert.find(".js-form-error-message"), t(n.options.domSelector + " input, " + n.options.domSelector + " select, " + n.options.domSelector + " textarea").each(function () {
                a = t(this), r = a.attr("id"), a.attr("name") || a.attr("name", r)
            }), n.validator = n.$form.validate({
                debug: !0,
                ignore: "hidden",
                rules: n.options.manifest,
                highlight: function (e) {
                    t(e).closest(".form-group").addClass("has-error")
                },
                success: function (e) {
                    t(e).closest(".form-group").removeClass("has-error"), t(e).closest("label.error").remove()
                },
                showErrors: function () {
                    var a;
                    n.options.alertOnFieldError && (a = this.numberOfInvalids()) && (n.$alertMsg.html(e.t("The form is not valid. Please check the field with error", {
                        count: a
                    })), n.$alert.show()), this.defaultShowErrors(), t(n.options.domSelector + " label.error").addClass("control-label")
                },
                submitHandler: function (t) {
                    n.$form.attr("action") && t.submit()
                }
            }), n.$form)
        }
    }
    class g extends v {
        constructor() {
            super({
                domSelector: "#signup-form",
                httpMethod: "POST",
                uri: "/signup",
                manifest: {
                    firstname: {
                        required: !0
                    },
                    lastname: {
                        required: !0
                    },
                    username: {
                        required: !0,
                        email: !0
                    },
                    password: {
                        required: !0
                    }
                },
                alertOnFieldError: !1
            })
        }
    }
    class y extends v {
        constructor() {
            super({
                domSelector: "#login-form",
                httpMethod: "POST",
                uri: "/signin",
                manifest: {
                    username: {
                        required: !0,
                        email: !0
                    },
                    password: {
                        required: !0
                    }
                },
                alertOnFieldError: !1
            })
        }
        onGetData(t) {
            return t.username && (t.email = t.username, delete t.username), t.password && (t.secretword = t.password, delete t.password), t
        }
    }
    class b extends r.Middleware {
        entered() {
            t("body").removeClass("covered-body"), t("body > .footer").hide()
        }
    }
    class S {
        static get _Intl() {
            return {
                NumberFormat: new Intl.NumberFormat(e.language, {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }),
                NumberFormatPercent: new Intl.NumberFormat(e.language, {
                    style: "percent",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }),
                NumberFormatCurrency: new Intl.NumberFormat(e.language, {
                    style: "currency",
                    currency: e.t("__currency_code")
                })
            }
        }
        static _textToNumber(t) {
            let e = parseFloat(t);
            return isNaN(e) && (e = 0), e
        }
        static formatSurface(t, e, a) {
            const r = S._textToNumber(t);
            return 0 === r && a ? "" : e ? S._Intl.NumberFormat.format(r) : `${S._Intl.NumberFormat.format(r)} m<sup>2</sup>`
        }
        static formatNumber(t) {
            return S._Intl.NumberFormat.format(t)
        }
        static formatMoney(t, e, a) {
            const r = S._textToNumber(t);
            return 0 === r && a ? "" : e ? S._Intl.NumberFormat.format(r) : S._Intl.NumberFormatCurrency.format(r)
        }
        static formatPercent(t, e, a) {
            const r = S._textToNumber(t);
            return 0 === r && a ? "" : e ? S._Intl.NumberFormat.format(r) : S._Intl.NumberFormatPercent.format(r)
        }
        static formatMonth(t) {
            return n.months()[parseInt(t, 10) - 1]
        }
        static formatMonthYear(t, e) {
            return n.months()[parseInt(t, 10) - 1] + " " + e
        }
        static formatDate(t) {
            let e = n(t, "DD/MM/YYYY");
            return e.isValid() || (e = n(t)), e.format("L")
        }
        static formatDateText(t) {
            let e = n(t, "DD/MM/YYYY");
            return e.isValid() || (e = n(t)), e.format("LL")
        }
        static formatDateTime(t) {
            let e = n(t);
            return e.isValid() || (e = n(t, "DD/MM/YYYY HH:MM")), e.format("L LTS")
        }
    }
    i.registerHelper("ifNeg", function (t, e) {
        return t < 0 ? e.fn(this) : e.inverse(this)
    }), i.registerHelper("i18next", function (t) {
        var a, r, n;
        if (t.hash && t.hash.key) {
            for (a in t.hash) "key" !== a && (r || (r = {}), "date" === a.toLowerCase() ? r[a] = S.formatDate(t.hash[a]) : "amount" === a.toLowerCase() ? r[a] = S.formatMoney(t.hash[a]) : r[a] = t.hash[a]);
            return n = r ? e.t(t.hash.key, r) : e.t(t.hash.key), new i.SafeString(n)
        }
        return new i.SafeString("???")
    }), i.registerHelper("indexPlusOne", function () {
        return new i.SafeString(Number(arguments[0].data.index) + 1)
    }), i.registerHelper("formatSurface", function (t, e) {
        return t = i.Utils.escapeExpression(t), t = S.formatSurface(t, e.hash.hideUnit, e.hash.emptyForZero), new i.SafeString(t)
    }), i.registerHelper("formatMoney", function (t, e) {
        t = i.Utils.escapeExpression(t);
        let a = "",
            r = "price-amount";
        const n = S.formatNumber(t),
            o = S.formatMoney(t);
        if (e) {
            if (0 === parseFloat(t) && e.hash.emptyForZero) return "";
            let i = "";
            e.hash.withOdometer && (r += " odometer", i = e.hash.withOdometer), a = `<span class="price-content"><span class="${r}" data-key="${i}">${e.hash.hideCurrency ? n : o}</span></span>`
        } else a = `<span class="price-content"><span class="${r}">${o}</span></span>`;
        return new i.SafeString(a)
    }), i.registerHelper("formatPercent", function (t, e) {
        return t = i.Utils.escapeExpression(t), t = S.formatPercent(t, e.hash.hidePercent, e.hash.emptyForZero), new i.SafeString(t)
    }), i.registerHelper("formatDate", function (t) {
        return t = i.Utils.escapeExpression(t), t = S.formatDate(t), new i.SafeString(t)
    }), i.registerHelper("formatDateTime", function (t) {
        return t = i.Utils.escapeExpression(t), t = S.formatDateTime(t), new i.SafeString(t)
    }), i.registerHelper("formatMonth", function (t) {
        return t = i.Utils.escapeExpression(t), t = S.formatMonth(t), new i.SafeString(t)
    }), i.registerHelper("formatMonthYear", function (t) {
        return t.hash && t.hash.month && t.hash.year ? new i.SafeString(S.formatMonthYear(t.hash.month, t.hash.year)) : new i.SafeString("???")
    }), i.registerHelper("breaklines", function (t) {
        return t = (t = i.Utils.escapeExpression(t)).replace(/(\r\n|\n|\r)/gm, "<br>"), new i.SafeString(t)
    }), i.registerHelper("commentVisible", function (t) {
        return t && 0 !== t.length ? "" : new i.SafeString("display: none;")
    }), i.registerHelper("paymentType", function (t) {
        return this.type && (t = this.type), "cheque" === t ? new i.SafeString(e.t("cheque")) : "cash" === t ? new i.SafeString(e.t("cash")) : "levy" === t ? new i.SafeString(e.t("levy")) : "transfer" === t ? new i.SafeString(e.t("transfer")) : new i.SafeString(e.t("unknown"))
    }), i.registerHelper("cssClassPaymentStatus", function () {
        var t = "";
        return "paid" === this.status ? t = "text-success" : "notpaid" === this.status ? t = "text-danger" : "partialypaid" === this.status && (t = "text-warning"), new i.SafeString(t)
    }), i.registerHelper("paymentStatus", function () {
        var t = "";
        return "paid" === this.status ? t = e.t("Paid") : "notpaid" === this.status ? t = e.t("Not paid") : "partialypaid" === this.status && (t = e.t("Partially paid")), new i.SafeString(t)
    }), i.registerHelper("paymentBadgeStatus", function () {
        var t = "";
        return "paid" === this.status ? t = '<span class="label label-success" data-toggle="tooltip" data-placement="bottom" title="' + e.t("Paid") + '"><i class="fa fa-check"></i> ' + n.monthsShort()[parseInt(this.month, 10) - 1].toUpperCase() + "</span>" : "partialypaid" === this.status ? t = '<span class="label label-warning" data-toggle="tooltip" data-placement="bottom" title="' + e.t("Partially paid") + '"><i class="fa fa-exclamation-triangle"></i> ' + n.monthsShort()[parseInt(this.month, 10) - 1].toUpperCase() + "</span>" : "notpaid" === this.status && (t = '<span class="label label-danger" data-toggle="tooltip" data-placement="bottom" title="' + e.t("Not paid") + '"><i class="fa fa-exclamation-triangle"></i> ' + n.monthsShort()[parseInt(this.month, 10) - 1].toUpperCase() + "</span>"), new i.SafeString(t)
    }), i.registerHelper("Image", function (t, e) {
        var a, r = "";
        return a = this.type ? this.type : t, t && t.hash && t.hash.cssClass ? r = t.hash.cssClass : e && e.hash && e.hash.cssClass && (r = e.hash.cssClass), "office" === a ? new i.SafeString('<i class="fa fa-home ' + r + '"></i>') : "parking" === a ? new i.SafeString('<i class="fa fa-car ' + r + '"></i>') : "letterbox" === a ? new i.SafeString('<i class="fa fa-envelope-o ' + r + '"></i>') : "expiredDocument" === a ? new i.SafeString('<i class="fa fa-file-text ' + r + '"></i>') : "ok" === a ? new i.SafeString('<i class="fa fa-thumbs-up ' + r + '"></i>') : "warning" === a ? new i.SafeString('<i class="fa fa-exclamation-triangle ' + r + '"></i>') : new i.SafeString('<i class="fa fa-question ' + r + '"></i>')
    }), i.registerHelper("propertyName", function (t) {
        return this.type && (t = this.type), "office" === t ? new i.SafeString(e.t("Room")) : "parking" === t ? new i.SafeString(e.t("Car park")) : "letterbox" === t ? new i.SafeString(e.t("Letterbox")) : new i.SafeString(e.t("unknown"))
    });
    const D = "list.selection.changed";
    class x {
        constructor(e, a, r) {
            var n = this;
            s(this), this.listId = e.startsWith("#") ? e.slice(1, e.length) : e, this.rowTemplateId = a && a.startsWith("#") ? a.slice(1, a.length) : a, this.contentTemplateId = r && r.startsWith("#") ? r.slice(1, r.length) : r, this.filterText = "", t(document).on("click", "#" + this.listId + " .js-list-row", function () {
                return n.select(t(this)), !1
            })
        }
        _cloneObject(t) {
            var e;
            if (null === t || "object" != typeof t) return t;
            if (t instanceof Date) return (e = new Date).setTime(t.getTime()), e;
            if (t instanceof Array) {
                e = [];
                for (var a = 0, r = t.length; a < r; a++) e[a] = this._cloneObject(t[a]);
                return e
            }
            if (t instanceof Object) {
                for (var n in e = {}, t) t.hasOwnProperty(n) && (e[n] = this._cloneObject(t[n]));
                return e
            }
            throw new Error("Unable to copy obj! Its type isn't supported.")
        }
        _ref(t, e) {
            e = e.split(".");
            for (var a = 0; a < e.length; a++) t = t[e[a]];
            return t
        }
        _set(t, e, a) {
            for (e = e.split("."); e.length > 1;) t = t[e.shift()];
            t[e.shift()] = a
        }
        _animateValue(t, e, a, r) {
            var n, o = a - e,
                i = e,
                s = o / 20;
            0 !== o && (n = setInterval(function () {
                i += s, o > 0 && i >= a || o < 0 && i <= a ? (t.html(S.formatMoney(a)), clearInterval(n)) : t.html(S.formatMoney(i))
            }, r / 20))
        }
        bindDom() {
            this.$list = t("#" + this.listId), this.$rowsContainer = this.$list.find(".js-list-content");
            var e = t("#" + this.rowTemplateId);
            e.length > 0 && (this.sourceTemplateRow = e.html(), i.registerPartial(this.rowTemplateId, this.sourceTemplateRow), this.templateRowsContainer = i.compile(t("#" + this.contentTemplateId).html()))
        }
        unselectAll() {
            this.$list.find(".js-list-row").removeClass("active"), this.emit(D)
        }
        unselect(e) {
            var a;
            t("#" + e).removeClass("active"), a = this.getSelectedData(), this.emit(D, a.length > 0 ? a : null)
        }
        select(t, e) {
            t.hasClass("fixed") || (!e && t.hasClass("active") ? t.removeClass("active") : t.addClass("active"), 0 !== this.getSelection().length ? this.emit(D, this.getSelectedData()) : this.emit(D))
        }
        getSelection() {
            return this.$list.find(".js-list-row.active")
        }
        update(e) {
            for (var a, r, n, o, s, l, c = this, d = this._cloneObject(e), m = 0; m < this.dataRows.rows.length; ++m)
                if (this.dataRows.rows[m]._id === e._id) {
                    l = m, n = this.dataRows.rows[m];
                    break
                } (o = this.$list.find("#" + e._id + ".js-list-row")).find(".odometer").each(function () {
                    var e = t(this).data("key");
                    c._set(d, e, c._ref(n, e))
                }), a = i.compile(this.sourceTemplateRow), r = t(a(d)), o.hasClass("active") && r.addClass("active"), o.hasClass("fixed") && r.addClass("fixed"), o.replaceWith(r), (s = this.$list.find("#" + e._id + ".js-list-row")).find("[data-toggle=tooltip]").tooltip(), s.find(".odometer").each(function () {
                    var a = t(this),
                        r = a.data("key");
                    c._animateValue(a, c._ref(n, r), c._ref(e, r), 1e3)
                }), this.dataRows.rows[l] = e
        }
        remove(t) {
            for (var e = this.$list.find("#" + t._id + ".js-list-row"), a = 0; a < this.dataRows.rows.length; ++a)
                if (this.dataRows.rows[a]._id === t._id) {
                    this.dataRows.rows.splice(a, 1);
                    break
                } e.remove()
        }
        add(t) {
            var e, a = i.compile(this.sourceTemplateRow)(t);
            this.dataRows.rows.push(t), this.$rowsContainer.append(a), (e = this.$list.find("#" + t._id + ".js-list-row")).find("[data-toggle=tooltip]").tooltip(), this.show(e)
        }
        init(e, a, r) {
            var n, o;
            this.dataRows = e || {
                rows: []
            }, this.templateRowsContainer ? (n = this.templateRowsContainer(this.dataRows), o = t(n).hide(), this.$rowsContainer.html(o), this.$rowsContainer.find("[data-toggle=tooltip]").tooltip(), this.filter(this.filterText, !1, r)) : r && r()
        }
        setFilterText(t) {
            this.filterText = t
        }
        filter(e, a, r) {
            let n;
            this.filterText = e;
            const o = this.$list.find(".js-list-row");
            if (o.removeClass("list-element-filtered"), this.filterText) {
                const e = this.filterText.split(",");
                o.each(function () {
                    const a = t(this);
                    a.data("filter-values").split(",").some(t => -1 !== e.indexOf(t)) && a.addClass("list-element-filtered")
                });
                const a = o.not(".list-element-filtered").not(":hidden");
                n = this.$list.find(".js-list-row.list-element-filtered:hidden"), a.hide(), n.show(), r && r()
            } else (n = this.$list.find(".js-list-row:hidden")).show(), r && r()
        }
        hide(t) {
            t.hide()
        }
        show(t) {
            var e = t;
            this.filterText && (e = t.find(".js-list-value").filter(':contains("' + this.filterText + '")').closest(".js-list-row:hidden")), e.show()
        }
        hideRows(t, e) {
            0 !== t.length ? (t.hide(), e && e()) : e && e()
        }
        showRows(t, e) {
            0 !== t.length ? (t.show(), e && e()) : e && e()
        }
        showAllRows(t) {
            this.filter(this.filterText, !1, t)
        }
        hideAllRows(t) {
            this.hideRows(this.$list.find(".js-list-row").not(":hidden"), t)
        }
        getSelectedData() {
            var e = this,
                a = [];
            return this.getSelection().each(function () {
                for (var r = t(this).attr("id"), n = 0; n < e.dataRows.rows.length; n++)
                    if (e.dataRows.rows[n]._id === r) {
                        a.push(e._cloneObject(e.dataRows.rows[n]));
                        break
                    }
            }), a
        }
    }
    const C = 200;
    var M = new class {
        isMenuVisible(e) {
            return e = e.startsWith("#") ? e.slice(1, e.length) : e, t('.js-side-menu[data-id="' + e + '"]').hasClass("active")
        }
        showMenu(e, a) {
            var r;

            function n() {
                a && a()
            }
            e = e.startsWith("#") ? e.slice(1, e.length) : e, (r = t('.js-side-menu[data-id="' + e + '"]:hidden')).length > 0 ? this.hideMenu(function () {
                r.trigger("before-show-card"), r.addClass("active").velocity("transition.bounceRightIn", {
                    duration: C,
                    complete: function () {
                        n(), r.trigger("after-show-card")
                    }
                })
            }) : n()
        }
        hideMenu(e) {
            var a = t(".js-side-menu.active").not(":hidden");

            function r() {
                e && e()
            }
            a.length > 0 ? (a.trigger("before-hide-card"), a.removeClass("active"), a.velocity("transition.bounceRightOut", {
                duration: C,
                complete: function () {
                    r(), a.trigger("after-hide-card")
                }
            })) : r()
        }
        showSheet(e) {
            e = e.startsWith("#") ? e.slice(1, e.length) : e, this.hideSheet(), t('.js-sheet[data-id="' + e + '"]').addClass("active").show()
        }
        hideSheet() {
            t(".js-sheet.active").removeClass("active").hide()
        }
    };
    class j extends b {
        constructor(t) {
            super(), this.config = t, this.filterValue = "", t.domListId && (this.list = new x(t.domListId, t.domViewId + "-list-row-template", t.domViewId + "-list-content-template")), this.initListener()
        }
        initListener() {
            this.list && this.list.on("list.selection.changed", t => {
                const a = t && t.length > 0 ? t.length : 0,
                    r = $(this.config.domViewId + " .js-list-selection-menu-label");
                if (a > 0) {
                    const n = $(this.config.domViewId + " .js-user-action.js-only-mono-selection");
                    a > 1 ? (n.addClass("disabled"), r.html(e.t(this.config.listSelectionLabel, {
                        count: a
                    }) + " (" + a + ")")) : (n.removeClass("disabled"), r.html(e.t(this.config.listSelectionLabel, {
                        count: a
                    }))), $(this.config.domViewId + " .js-list-selected-elements").html(this.templateSelectedRow({
                        rows: t
                    })), M.showMenu(this.config.listSelectionMenuId)
                } else this.config.defaultMenuId ? M.isMenuVisible(this.config.defaultMenuId) || M.hideMenu(() => {
                    this.config.defaultMenuId && M.showMenu(this.config.defaultMenuId)
                }) : M.hideMenu()
            });
            const t = this;
            $(document).on("click", this.config.domViewId + " .js-user-action", function () {
                const e = $(this),
                    a = e.data("id");
                return $(this).hasClass("js-cancel-selection") ? (t.list && t.list.unselectAll(), !1) : $(this).hasClass("js-cancel-form") ? (t.closeForm(() => {
                    t.list && t.list.showAllRows()
                }), !1) : !(e.hasClass("disabled") || e.hasClass("js-only-mono-selection") && t.list && t.list.getSelection().length > 1) && (t.list ? "list-filter" === a ? (t.list.unselectAll(), t.filterValue = e.data("value"), t.list.filter(t.filterValue), $(t.config.domViewId + " .js-filterbar .js-user-action").removeClass("active"), t.filterValue ? $(t.config.domViewId + ' .js-filterbar .js-user-action[data-value="' + t.filterValue + '"]').addClass("active") : $(t.config.domViewId + " .js-filterbar .js-default-filter.js-user-action").addClass("active")) : "remove-item-from-selection" === a ? e.parent().hasClass("fixed") || t.list.unselect(e.attr("id")) : t.onUserAction && t.onUserAction(e, a) : t.onUserAction && t.onUserAction(e, a), !1)
            }), t.onInitListener && t.onInitListener()
        }
        updated() {
            super.updated();
            const t = () => {
                this.onDataChanged && this.onDataChanged(), this.config.defaultMenuId && M.showMenu(this.config.defaultMenuId)
            };
            if (this.loaded || (this.onInitTemplate && this.onInitTemplate(), this.list && (this.filterValue = $(this.config.domViewId + " .js-filterbar .active.js-user-action").data("value"), this.list.setFilterText(this.filterValue)), this.loaded = !0), this.list) return this.list.bindDom(), void this.loadList(t);
            t()
        }
        loadList(t) {
            l.httpGet(this.config.urls.overview, (e, a) => {
                const r = JSON.parse(a.responseText),
                    n = r.countAll,
                    o = r.countFree | r.countInactive,
                    i = r.countBusy | r.countActive;
                $(this.config.domViewId + " .js-all-filter-label").html("(" + n + ")"), $(this.config.domViewId + " .all-active-filter-label").html("(" + i + ")"), $(this.config.domViewId + " .all-inactive-filter-label").html("(" + o + ")"), $(this.config.domViewId + " .js-filterbar .js-user-action").removeClass("active"), this.filterValue ? $(this.config.domViewId + ' .js-filterbar .js-user-action[data-value="' + this.filterValue + '"]').addClass("active") : $(this.config.domViewId + " .js-filterbar .js-default-filter.js-user-action").addClass("active"), l.httpGet(this.config.urls.items, (e, a) => {
                    const r = JSON.parse(a.responseText);
                    this.list && this.list.init({
                        rows: r
                    }), t && t(r)
                })
            })
        }
        entered() {
            super.entered(), this.onPageEntered && this.onPageEntered()
        }
        pageExited(t) {
            var e = () => {
                t && t(), this.onPageExited && this.onPageExited()
            };
            M.hideMenu(() => {
                this.list ? this.list.hideAllRows(() => {
                    e()
                }) : e()
            })
        }
        getSelectedIds() {
            const t = [];
            if (this.list) {
                const e = this.list.getSelectedData();
                for (let a = 0; a < e.length; a++) t.push(e[a]._id)
            }
            return t
        }
        openForm(t, e, a) {
            const r = () => {
                M.showMenu(e || t + "-menu", () => {
                    a && a(), window.scroll(0, 0)
                })
            };
            this.scrollY = window.scrollY, M.hideMenu(() => {
                this.list ? this.list.hideAllRows(() => {
                    M.showSheet(t), r()
                }) : (M.showSheet(t, r), r())
            })
        }
        closeForm(t) {
            const e = () => {
                t && t(), window.scroll(0, this.scrollY)
            };
            M.hideSheet(), this.list && this.list.getSelection().length > 0 ? M.hideMenu(() => {
                M.showMenu(this.config.listSelectionMenuId), e()
            }) : M.hideMenu(() => {
                this.config.defaultMenuId && M.showMenu(this.config.defaultMenuId), e()
            })
        }
        showMenu(t, e) {
            M.showMenu(t, e)
        }
        hideMenu(t) {
            M.hideMenu(t)
        }
        scrollToElement(t) {
            const e = $(t);
            if (e.length > 0) {
                const t = parseInt($("body").css("padding-top"), 10);
                window.scroll(0, e.offset().top - t)
            }
        }
    }
    const _ = l.get("LOCA"),
        P = "#rent-payment-form",
        I = () => n({
            day: 0,
            month: Number(_.currentMonth) - 1,
            year: Number(_.currentYear)
        }).startOf("month"),
        Y = () => n({
            day: 0,
            month: Number(_.currentMonth) - 1,
            year: Number(_.currentYear)
        }).endOf("month"),
        T = () => n.months()[Number(_.currentMonth) - 1];
    class k extends v {
        constructor() {
            super({
                domSelector: P,
                uri: "/api/rents",
                manifest: {
                    payment: {
                        number: !0,
                        min: 0
                    },
                    paymentDate: {
                        required: {
                            depends: () => {
                                return Number(t(P + " #payment").val()) > 0
                            }
                        },
                        date: !0,
                        mindate: [{
                            minDate: I,
                            message: e.t("Only the payment of rent period are authorized. Please enter a date between", {
                                period: T(),
                                minDate: I().format("L"),
                                maxDate: Y().format("L")
                            })
                        }],
                        maxdate: [{
                            maxDate: Y,
                            message: e.t("Only the payment of rent period are authorized. Please enter a date between", {
                                period: T(),
                                minDate: I().format("L"),
                                maxDate: Y().format("L")
                            })
                        }]
                    },
                    paymentType: {
                        required: {
                            depends: () => {
                                return Number(t(P + " #payment").val()) > 0
                            }
                        }
                    },
                    paymentReference: {
                        required: {
                            depends: () => {
                                const e = t(P + " #paymentType").val();
                                return e && "cash" !== e
                            }
                        }
                    },
                    promo: {
                        number: !0,
                        min: 0
                    },
                    notepromo: {
                        minlength: 2,
                        required: {
                            depends: () => {
                                return Number(t(P + " #promo").val()) > 0
                            }
                        }
                    }
                },
                defaultData: {
                    _id: "",
                    month: "",
                    year: "",
                    payment: "",
                    paymentType: "",
                    paymentReference: "",
                    paymentDate: "",
                    description: "",
                    promo: "",
                    notepromo: ""
                }
            })
        }
        beforeSetData(e) {
            const a = e[0],
                {
                    occupant: r
                } = a;
            if (r.terminated) {
                t(`${P} .js-lease-state`).removeClass("hidden"), t(`${P} .js-contract-termination-date`).html(S.formatDate(r.terminationDate));
                const {
                    mindate: e,
                    maxdate: a,
                    ...n
                } = this.validator.settings.rules.paymentDate;
                this.validator.settings.rules.paymentDate = n
            } else t(`${P} .js-lease-state`).addClass("hidden");
            a.payment || (a.payment = ""), a.promo || (a.promo = ""), a.paymentDate && (a.paymentDate = n(a.paymentDate, "DD/MM/YYYY").format("L"))
        }
        afterSetData(e) {
            const a = e[0],
                r = n.months()[a.month - 1] + " " + a.year;
            t(P + " #occupantNameLabel").html(a.occupant.name), t(P + " #paymentPeriod").html(r)
        }
        onGetData(t) {
            return t.paymentDate && (t.paymentDate = n(t.paymentDate, "L").format("DD/MM/YYYY")), t
        }
    }
    const R = l.get("LOCA");
    const L = "#occupant-form";
    class F extends v {
        constructor() {
            super({
                domSelector: L,
                uri: "/api/occupants",
                manifest: {
                    isCompany: "required",
                    manager: {
                        minlength: 2,
                        required: !0
                    },
                    company: {
                        minlength: 2,
                        required: {
                            depends: () => "company" === t(L + " #isCompany option:selected").val()
                        }
                    },
                    legalForm: {
                        minlength: 2,
                        required: {
                            depends: () => "company" === t(L + " #isCompany option:selected").val()
                        }
                    },
                    siret: {
                        minlength: 2,
                        required: {
                            depends: () => "company" === t(L + " #isCompany option:selected").val()
                        }
                    },
                    capital: {
                        number: !0,
                        min: 0,
                        required: {
                            depends: () => "company" === t(L + " #isCompany option:selected").val()
                        }
                    },
                    street1: {
                        required: !0,
                        minlength: 2
                    },
                    zipCode: {
                        required: !0,
                        minlength: 2
                    },
                    city: {
                        required: !0,
                        minlength: 2
                    },
                    reference: {
                        required: !0
                    },
                    contract: "required",
                    beginDate: {
                        required: !0,
                        date: !0
                    },
                    endDate: {
                        required: !0,
                        date: !0,
                        maxcontractdate: [L, "contract", "beginDate"]
                    },
                    terminationDate: {
                        date: !0,
                        mindate: [{
                            domSelector: L + " #beginDate"
                        }]
                    },
                    guarantyPayback: {
                        number: !0,
                        min: 0
                    },
                    guaranty: {
                        number: !0,
                        min: 0
                    },
                    isVat: "required",
                    vatRatio: {
                        number: !0,
                        min: 0,
                        max: 100,
                        required: {
                            depends: () => "true" === t(L + " #isVat option:selected").val()
                        }
                    },
                    discount: {
                        number: !0,
                        min: 0
                    },
                    propertyId_0: {
                        required: !0
                    },
                    entryDate_0: {
                        required: !0,
                        mindate: [{
                            domSelector: L + " #beginDate"
                        }],
                        maxdate: [{
                            domSelector: L + " #endDate"
                        }]
                    },
                    exitDate_0: {
                        required: !0,
                        mindate: [{
                            domSelector: L + " #entryDate_0"
                        }],
                        maxdate: [{
                            domSelector: L + " #endDate"
                        }]
                    }
                },
                defaultData: {
                    _id: "",
                    isCompany: !1,
                    company: "",
                    legalForm: "",
                    siret: "",
                    capital: "",
                    manager: "",
                    name: "",
                    street1: "",
                    street2: "",
                    zipCode: "",
                    city: "",
                    contacts: [{
                        contact: "",
                        email: "",
                        phone: ""
                    }],
                    contract: "369",
                    beginDate: "",
                    endDate: "",
                    terminationDate: "",
                    guarantyPayback: "",
                    properties: [{
                        propertyId: "",
                        property: {},
                        entryDate: "",
                        exitDate: ""
                    }],
                    guaranty: "",
                    reference: "",
                    isVat: !1,
                    vatRatio: "",
                    discount: ""
                }
            })
        }
        beforeSetData(e) {
            var a, r, o, i = e[0];
            for (this.propertyRowCount = 0, this.contactRowCount = 0, i && (i.beginDate && (i.beginDate = n(i.beginDate, "DD/MM/YYYY").format("L")), i.endDate && (i.endDate = n(i.endDate, "DD/MM/YYYY").format("L")), i.terminationDate && (i.terminationDate = n(i.terminationDate, "DD/MM/YYYY").format("L")), i.properties && i.properties.forEach((t, e) => {
                t.entryDate && (t.entryDate = n(t.entryDate, "DD/MM/YYYY").format("L")), t.exitDate && (t.exitDate = n(t.exitDate, "DD/MM/YYYY").format("L")), 0 !== e && this.addPropertyRow()
            }), i.contacts && i.contacts.forEach((t, e) => {
                0 !== e && this.addContactRow()
            }), i.isVat ? i.vatRatio = 100 * i.vatRatio : i.vatRatio = 0), this.properties = e[1], a = 0; a < this.properties.length; ++a)(r = this.properties[a]).notSelectable = !i || !i._id, r.priceWithExpense = r.price + r.expense, !r.available && i && i._id === r.occupant && (r.available = !0);
            o = this.templatePropertySelector({
                properties: this.properties
            }), t(L + " .available-properties").html(o)
        }
        afterSetData(a) {
            var r = a[0];
            r && r._id ? (t(L + " #occupantNameLabel").html(r.name), t(L + " #termination-row").show(), r.terminationDate ? (t(".js-lease-state").removeClass("hidden"), t('.js-user-action[data-id="list-action-remove-occupant"]').addClass("disabled")) : (t(".js-lease-state").addClass("hidden"), t('.js-user-action[data-id="list-action-remove-occupant"]').removeClass("disabled"))) : (t(L + " #occupantNameLabel").html(e.t("Tenant")), t(L + " #termination-row").hide(), t('.js-user-action[data-id="list-action-remove-occupant"]').hide()), r && r.terminationDate && t(".js-occupant-form-termination-date").html(S.formatDate(r.terminationDate)), this._companyChanged(t(L + " #isCompany")), this._contractChanged(t(L + " #contract")), this._vatChanged(t(L + " #isVat")), this._propertyChanged(), this._computeRent()
        }
        onGetData(t) {
            return t.isVat ? t.vatRatio = t.vatRatio / 100 : t.vatRatio = 0, t.beginDate && (t.beginDate = n(t.beginDate, "L").format("DD/MM/YYYY")), t.endDate && (t.endDate = n(t.endDate, "L").format("DD/MM/YYYY")), t.terminationDate && (t.terminationDate = n(t.terminationDate, "L").format("DD/MM/YYYY")), t.properties.forEach(function (t) {
                t.entryDate && (t.entryDate = n(t.entryDate, "L").format("DD/MM/YYYY")), t.exitDate && (t.exitDate = n(t.exitDate, "L").format("DD/MM/YYYY"))
            }), t
        }
        addPropertyRow() {
            var e, a, r, n;
            this.propertyRowCount++ , e = t(L + " #properties .js-master-form-row").clone(!0).removeClass("js-master-form-row"), t(".has-error", e).removeClass("has-error"), t("label.error", e).remove(), a = "propertyId_" + this.propertyRowCount, r = "entryDate_" + this.propertyRowCount, n = "exitDate_" + this.propertyRowCount, t("#propertyId_0", e).attr("id", a).attr("name", a).val(""), t("#entryDate_0", e).attr("id", r).attr("name", r).val(""), t("#exitDate_0", e).attr("id", n).attr("name", n).val(""), t(".js-btn-form-remove-row", e).show(), t(L + " #properties").append(e), t("#" + a, e).rules("add", {
                required: !0
            }), t("#" + r, e).rules("add", {
                required: !0,
                date: !0,
                mindate: [{
                    domSelector: L + " #beginDate"
                }],
                maxdate: [{
                    domSelector: L + " #endDate"
                }]
            }), t("#" + n, e).rules("add", {
                required: !0,
                date: !0,
                mindate: [{
                    domSelector: L + " #" + r
                }],
                maxdate: [{
                    domSelector: L + " #endDate"
                }]
            })
        }
        addContactRow() {
            var e, a, r, n;
            this.contactRowCount++ , e = t(L + " #contacts .js-master-form-row").clone(!0).removeClass("js-master-form-row"), t(".has-error", e).removeClass("has-error"), t("label.error", e).remove(), a = "contact_" + this.contactRowCount, r = "phone_" + this.contactRowCount, n = "email_" + this.contactRowCount, t("#contact_0", e).attr("id", a).attr("name", a).val(""), t("#phone_0", e).attr("id", r).attr("name", r).val(""), t("#email_0", e).attr("id", n).attr("name", n).val(""), t(".js-btn-form-remove-row", e).show(), t(L + " #contacts").append(e), t("#" + a, e).rules("add", {
                minlength: 2
            }), t("#" + r, e).rules("add", {
                phoneFR: !0
            }), t("#" + n, e).rules("add", {
                email: !0
            })
        }
        onBind() {
            const e = this;
            this.templatePropertySelector = i.compile(t(L + " #occupant-property-selector-template").html()), t(L + " #isCompany").change(function () {
                e._companyChanged(t(this))
            }), t(L + " #contract").change(function () {
                e._contractChanged(t(this))
            }), t(L + " #beginDate").keyup(function () {
                e._contractBeginDateChanged(t(this))
            }), t(L + " #isVat").change(function () {
                e._vatChanged(t(this)), e._computeRent()
            }), t(L + " #vatRatio").keyup(function () {
                e._computeRent()
            }), t(L + " .available-properties").change(function () {
                e._propertyChanged(), e._computeRent()
            }), t(L + " #discount").keyup(function () {
                e._computeRent()
            }), t(L + " #guaranty").keyup(function () {
                e._computeRent()
            }), t(L + " #btn-add-contact").click(() => (this.addContactRow(), !1)), t(L + " #btn-add-property").click(() => (this.addPropertyRow(), this._propertyChanged(), this._computeRent(), !1)), t(L + " .js-btn-form-remove-row").click(function () {
                var a = t(this).parents(".js-form-row"),
                    r = a.find("select.available-properties").attr("id");
                return r && t("#occupant-form select.available-properties option[data-selectedby=" + r + "]").attr("data-selectedby", "").attr("disabled", !1), a.remove(), e._computeRent(), !1
            }), t(L + " .js-master-form-row .js-btn-form-remove-row").hide()
        }
        _getPropertyById(t) {
            if (this.properties)
                for (var e = 0; e < this.properties.length; ++e)
                    if (t === this.properties[e]._id) return this.properties[e];
            return null
        }
        _companyChanged(a) {
            "true" === a.find(":selected").val() ? (t("#occupant-form .private-fields").hide(), t("#occupant-form .js-company-fields").show(), t("#occupant-form #manager-label").html(e.t("Effective manager (first and last name)"))) : (t("#occupant-form .js-company-fields").hide(), t("#occupant-form .private-fields").show(), t("#occupant-form #manager-label").html(e.t("First and last name")))
        }
        _contractChanged() { }
        _contractBeginDateChanged(e) {
            var a, r = e.val(),
                o = t("#occupant-form #contract").val(),
                i = n.duration(9, "years"),
                s = n(r, "L", !0);
            s.isValid() && "custom" !== o && (a = n(s).add(i).subtract(1, "days"), t("#occupant-form #endDate").val(a.format("L")))
        }
        _vatChanged(e) {
            "true" === e.find(":selected").val() ? (t("#occupant-form .js-occupant-form-vatratio").show(), t(".occupant-form-vat-row").show()) : (t("#occupant-form .js-occupant-form-vatratio").hide(), t(".occupant-form-vat-row").hide())
        }
        _propertyChanged() {
            t("#occupant-form select.available-properties").each(function () {
                var e = t(this),
                    a = e.attr("id"),
                    r = e.find("option:selected").val();
                t("#occupant-form select.available-properties").not(e).each(function () {
                    t(this).find("[data-selectedby=" + a + "]").attr("data-selectedby", "").attr("disabled", !1), t(this).find("option[value=" + r + "]").attr("disabled", !0).attr("data-selectedby", a)
                })
            })
        }
        _computeRent() {
            var e, a, r = this.getData(),
                n = 0,
                o = 0,
                i = 0;
            if (r.properties)
                for (var s = 0; s < r.properties.length; ++s)(e = r.properties[s].propertyId) && (n += this._getPropertyById(e).priceWithExpense);
            i = n, n > 0 && r.discount && (i -= r.discount), i < 0 && (i = 0), r.isVat && r.vatRatio && (o = i * r.vatRatio), a = i + o, t(".js-occupant-form-summary-guaranty").html(S.formatMoney(r.guaranty, !1, !1)), t(".js-occupant-form-summary-rentwithexpenses").html(S.formatMoney(n, !1, !1)), t(".js-occupant-form-summary-discount").html(S.formatMoney(r.discount, !1, !1)), t(".js-occupant-form-summary-vat").html(S.formatMoney(o, !1, !1)), t(".js-occupant-form-summary-total-rentwithexpenses").html(S.formatMoney(i, !1, !1)), t(".js-occupant-form-summary-total-rentwithexpensesandvat").html(S.formatMoney(a, !1, !1))
        }
    }
    const N = "#contract-documents-form";
    class O extends v {
        constructor() {
            super({
                domSelector: N,
                uri: "",
                manifest: {
                    name_0: {
                        minlength: 2
                    },
                    expirationDate_0: {
                        required: {
                            depends: () => "" !== t(N + " #name_0").val().trim()
                        },
                        date: !0
                    }
                },
                defaultData: {
                    _id: "",
                    occupantId: "",
                    documents: [{
                        name: "",
                        expirationDate: ""
                    }]
                }
            })
        }
        beforeSetData(t) {
            const e = t[0];
            this.documentRowCount = 0, e.documents && e.documents.forEach((t, e) => {
                t.expirationDate && (t.expirationDate = n(t.expirationDate).format("L")), 0 !== e && this.addDocumentRow()
            })
        }
        afterSetData(a) {
            const r = a[0];
            t(N + " #occupantNameLabel").html(e.t("'s documents", {
                name: r.name
            }))
        }
        onGetData(t) {
            return t.documents && t.documents.forEach(t => {
                t.expirationDate && (t.expirationDate = n(t.expirationDate, "L").toDate())
            }), t
        }
        onBind() {
            t(N + " #btn-add-document").click(() => (this.addDocumentRow(), !1)), t(N + " .js-btn-form-remove-row").click(function () {
                const e = t(this).parents(".js-form-row");
                return e.hasClass("js-master-form-row") ? (t(N + " #name_0").val(""), t(N + " #expirationDate_0").val("")) : e.remove(), !1
            })
        }
        addDocumentRow() {
            this.documentRowCount++;
            const e = t(N + " #documents .js-master-form-row").clone(!0).removeClass("js-master-form-row");
            t(".has-error", e).removeClass("has-error"), t("label.error", e).remove();
            const a = "name_" + this.documentRowCount,
                r = "expirationDate_" + this.documentRowCount;
            t("#name_0", e).attr("id", a).attr("name", a).val(""), t("#expirationDate_0", e).attr("id", r).attr("name", r).val(""), t(".js-btn-form-remove-row", e).show(), t(N + " #documents").append(e), t("#" + a, e).rules("add", {
                required: !0,
                minlength: 2
            }), t("#" + r, e).rules("add", {
                required: !0,
                date: !0
            })
        }
    }
    const q = l.get("LOCA");
    const A = "#property-form";
    class V extends v {
        constructor() {
            super({
                domSelector: A,
                uri: "/api/properties",
                manifest: {
                    type: {
                        required: !0
                    },
                    name: {
                        required: !0,
                        minlength: 2
                    },
                    surface: {
                        number: !0,
                        min: 0
                    },
                    phone: {
                        phoneFR: !0
                    },
                    price: {
                        required: !0,
                        number: !0,
                        min: 0
                    },
                    expense: {
                        required: {
                            depends: () => {
                                return "office" === t(A + " #type").val()
                            }
                        },
                        number: !0,
                        min: 0
                    }
                },
                defaultData: {
                    _id: "",
                    type: "office",
                    name: "",
                    description: "",
                    surface: "",
                    phone: "",
                    building: "",
                    level: "",
                    location: "",
                    price: "",
                    expense: ""
                }
            })
        }
        beforeSetData(t) {
            const e = t[0];
            e && (e.phone || (e.phone = ""), e.surface || (e.surface = ""), e.expense || (e.expense = ""))
        }
        afterSetData(a) {
            const r = a[0];
            r && r._id ? (t(A + " #propertyNameLabel").html(r.name), t('.js-user-action[data-id="list-action-remove-property"]').show()) : (t(A + " #propertyNameLabel").html(e.t("Property to rent")), t('.js-user-action[data-id="list-action-remove-property"]').hide()), this._typeChanged(t(A + " #type")), this._computeRent()
        }
        onBind() {
            const e = this;
            t(A + " #type").change(function () {
                e._typeChanged(t(this))
            }), t(A + " #price").keyup(() => {
                this._computeRent()
            })
        }
        _typeChanged(e) {
            "office" !== e.find(":selected").val() ? t(".property-no-expense").hide() : t(".property-no-expense").show()
        }
        _computeRent() {
            const e = this.getData(),
                a = Number(e.price) + Number(e.expense);
            t("#property-form-summary-rent").html(S.formatMoney(e.price, !1, !1)), t("#property-form-summary-expense").html(S.formatMoney(e.expense, !1, !1)), t("#property-form-summary-totla-rentwithexpenses").html(S.formatMoney(a, !1, !1))
        }
    }
    const E = l.get("LOCA");
    const H = "#owner-form";
    class U extends v {
        constructor() {
            super({
                domSelector: H,
                httpMethod: "PATCH",
                uri: "/api/owner",
                manifest: {
                    isCompany: {
                        required: !0
                    },
                    manager: {
                        required: !0,
                        minlength: 2
                    },
                    company: {
                        minlength: 2,
                        required: {
                            depends: () => "company" === t(H + " #isCompany option:selected").val()
                        }
                    },
                    legalForm: {
                        minlength: 2,
                        required: {
                            depends: () => "company" === t(H + " #isCompany option:selected").val()
                        }
                    },
                    siret: {
                        minlength: 2,
                        required: {
                            depends: () => "company" === t(H + " #isCompany option:selected").val()
                        }
                    },
                    capital: {
                        number: !0,
                        min: 0,
                        required: {
                            depends: () => "company" === t(H + " #isCompany option:selected").val()
                        }
                    },
                    street1: {
                        required: !0,
                        minlength: 2
                    },
                    zipCode: {
                        required: !0,
                        minlength: 2
                    },
                    city: {
                        required: !0,
                        minlength: 2
                    },
                    contact: {
                        required: !0,
                        minlength: 2
                    },
                    phone1: {
                        phoneFR: !0
                    },
                    phone2: {
                        phoneFR: !0
                    },
                    email: {
                        required: !0,
                        email: !0
                    },
                    bank: {
                        minlength: 2
                    },
                    rib: {
                        minlength: 2
                    }
                },
                defaultData: {
                    _id: "",
                    isCompany: !1,
                    company: "",
                    legalForm: "",
                    siret: "",
                    capital: "",
                    vatNumber: "",
                    manager: "",
                    street1: "",
                    street2: "",
                    zipCode: "",
                    city: "",
                    contact: "",
                    phone1: "",
                    phone2: "",
                    email: "",
                    bank: "",
                    rib: ""
                }
            })
        }
        onGetData(t) {
            return t.isCompany || (t.company = null, t.legalForm = null, t.siret = null, t.capital = null, t.vatNumber = null), t
        }
        afterSetData() {
            this._companyChanged(t(H + " #isCompany"))
        }
        onBind() {
            const e = this;
            t(H + " #isCompany").change(function () {
                e._companyChanged(t(this))
            })
        }
        _companyChanged(a) {
            "true" === a.find(":selected").val() ? (t(H + " .private-fields").hide(), t(H + " .js-company-fields").show(), t(H + " #manager-label").html(e.t("Effective manager (first and last name)"))) : (t(H + " .js-company-fields").hide(), t(H + " .private-fields").show(), t(H + " #manager-label").html(e.t("First and last name")))
        }
    }
    const G = l.get("LOCA"),
        J = new class extends r.Middleware {
            entered() {
                $("#waitwindow").show()
            }
            updated() {
                $("#waitwindow").hide()
            }
            exited() {
                $("#waitwindow").hide()
            }
            failed(t, r) {
                const n = [];
                let o = !1;
                0 === r.status ? n.push(e.t("Server access problem. Check your network connection")) : 401 == r.status ? (o = !0, n.push(e.t("Your session has expired, Please reconnect")), n.push(e.t("[code: ]", {
                    code: 401
                }))) : 404 == r.status ? (n.push(e.t("Page not found on server")), n.push(e.t("[code: ]", {
                    code: 404
                }))) : 500 == r.status ? (n.push(e.t("Internal server error")), n.push(e.t("[code: ]", {
                    code: 500
                }))) : "parsererror" === r.errorThrown ? n.push(e.t("Problem during data decoding [JSON]")) : "timeout" === r.errorThrown ? n.push(e.t("Server is taking too long to reply")) : "abort" === r.errorThrown ? n.push(e.t("Request cancelled on server")) : (n.push(e.t("Unknown error")), n.push(r.statusText)), a.hideAll(), $("#waitwindow").hide(), a.alert({
                    title: e.t("Uh-oh!"),
                    message: n
                }), o && setTimeout(function () {
                    window.location.replace(location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/signin")
                }, 2e3)
            }
        };
    var B, z;
    l.get(J), l.post(J), l.get(new class extends r.Middleware {
        entered(t) {
            const e = document.querySelectorAll("li > .js-nav-action");
            for (let a = 0; a < e.length; a++) {
                const r = e[a],
                    n = r.parentNode,
                    o = new RegExp(`^/view/${r.dataset.id}|^/${r.dataset.id}`);
                t.uri.match(o) ? (n.className = "active", r.focus()) : n.className = ""
            }
        }
    }), l.get(/^\/view\//, new class extends r.Middleware {
        updated(e, a) {
            if (a.responseText) {
                const e = t(".js-view-container");
                e.html(a.responseText), e.css("visibility", "visible"), e.css("opacity", 1)
            }
        }
    }), [{
        id: "website",
        Middleware: class extends r.Middleware {
            entered() {
                t("body").addClass("covered-body"), t("body > .footer").show()
            }
        }
    }, {
        id: "signup",
        Middleware: class extends r.Middleware {
            constructor() {
                super(), this.form = new g
            }
            entered() {
                t("body").addClass("covered-body"), t("body > .footer").show()
            }
            updated() {
                this.form.bindForm(), t("#signup-send").click(() => (this.form.submit(a => {
                    let r;
                    "success" !== a.status ? (r = "missing-field" === a.status ? e.t("Please fill missing fields") : "signup-email-taken" === a.status ? e.t("This user already exists") : e.t("A technical issue has occurred (-_-')"), this.form.showErrorMessage(r)) : t("#signup-form").submit()
                }), !1))
            }
            exited() {
                this.form.unbindForm()
            }
        }
    }, {
        id: "signin",
        Middleware: class extends r.Middleware {
            constructor() {
                super(), this.form = new y
            }
            entered() {
                t("body").addClass("covered-body"), t("body > .footer").show()
            }
            updated(a, r) {
                super.updated(a, r), this.form.bindForm(), t("#login-send").click(() => (this.form.submit(a => {
                    let r;
                    "success" !== a.status ? (r = "login-user-not-found" === a.status ? e.t("Unknown user") : "login-invalid-password" === a.status ? e.t("Bad password") : "login-realm-not-found" === a.status ? e.t("This user does not manage any real estate accounts") : "missing-field" === a.status ? e.t("Please fill missing fields") : e.t("A technical issue has occurred (-_-')"), this.form.showErrorMessage(r)) : t("#login-form").submit()
                }), !1))
            }
            exited() {
                this.form.unbindForm()
            }
        }
    }, {
        id: "dashboard",
        Middleware: class extends b {
            exited() {
                super.exited(), t("#view-dashboard .carousel").carousel("pause")
            }
            updated() {
                super.updated(), this.notificationListTemplate || (this.notificationListTemplate = i.compile(t("#notification-list-template").html()));
                const e = n();
                t("#view-dashboard #current-day").html(e.format("Do")), t("#view-dashboard .current-month").html(e.format("MMMM YYYY")), this._loadRentsOverview(() => {
                    this._loadOccupantsOverview(() => {
                        this._loadPropertiesOverview(() => {
                            this._loadNotifications(() => {
                                t("#view-dashboard .carousel").each(function (e) {
                                    const a = t(this);
                                    e % 2 ? setTimeout(() => {
                                        a.carousel({
                                            interval: 8e3
                                        })
                                    }, 2500 * e) : a.carousel({
                                        interval: 8e3
                                    })
                                })
                            })
                        })
                    })
                })
            }
            _loadOccupantsOverview(a) {
                l.httpGet("/api/occupants/overview", (r, n) => {
                    const o = JSON.parse(n.responseText),
                        i = o.countAll,
                        s = o.countActive,
                        l = o.countInactive;
                    t("#view-dashboard #count-all-occupants").html(i), t("#view-dashboard #count-active-occupants").html(s), t("#view-dashboard #count-inactive-occupants").html(l), t("#view-dashboard #count-all-occupants-label").html(e.t("Tenant", {
                        count: i
                    })), t("#view-dashboard #count-active-occupants-label").html(e.t("Lease", {
                        count: s
                    })), t("#view-dashboard #count-inactive-occupants-label").html(e.t("Terminated lease", {
                        count: s
                    })), a && a()
                })
            }
            _loadPropertiesOverview(a) {
                l.httpGet("/api/properties/overview", (r, n) => {
                    const o = JSON.parse(n.responseText),
                        i = o.countAll,
                        s = o.countFree,
                        l = o.countBusy;
                    t("#view-dashboard #count-all-properties").html(i), t("#view-dashboard #count-active-properties").html(l), t("#view-dashboard #count-inactive-properties").html(s), t("#view-dashboard #count-all-properties-label").html(e.t("Property", {
                        count: i
                    })), t("#view-dashboard #count-active-properties-label").html(e.t("Leased", {
                        count: l
                    })), t("#view-dashboard #count-inactive-properties-label").html(e.t("Available", {
                        count: s
                    })), a && a()
                })
            }
            _loadRentsOverview(a) {
                l.httpGet("/api/rents/overview", (r, n) => {
                    const o = JSON.parse(n.responseText),
                        i = o.countAll,
                        s = o.countPaid,
                        l = o.countPartiallyPaid,
                        c = o.countNotPaid,
                        d = s + l,
                        m = o.totalToPay,
                        u = o.totalNotPaid,
                        h = o.totalPaid;
                    t("#view-dashboard #count-all-rents").html(i), t("#view-dashboard #count-all-rents-label").html(e.t("Rent", {
                        count: i
                    })), t("#view-dashboard #count-paid-rents").html(d + " " + e.t("Rent", {
                        count: d
                    })), t("#view-dashboard #count-not-paid-rents").html(c + " " + e.t("Rent", {
                        count: c
                    })), t("#view-dashboard #count-js-total-topay-rents").html(S.formatMoney(m)), t("#view-dashboard #count-total-notpaid-rents").html(S.formatMoney(-1 * u)), t("#view-dashboard #count-total-paid-rents").html(S.formatMoney(h)), a && a()
                })
            }
            _loadNotifications(e) {
                l.httpGet("/api/notifications", (a, r) => {
                    const n = JSON.parse(r.responseText);
                    let o;
                    const i = [{
                        type: "ok",
                        description: "Rien à signaler"
                    }];
                    n && n.length > 0 && (o = n.filter(t => t.expired)), o && 0 !== o.length || (o = i), t("#view-dashboard #carousel-notifications").html(this.notificationListTemplate({
                        notifications: o
                    })), e && e()
                })
            }
        }
    }, {
        id: "rent",
        Middleware: class extends j {
            constructor() {
                super({
                    domViewId: "#view-rent",
                    domListId: "#rents",
                    defaultMenuId: "rents-menu",
                    listSelectionLabel: "Selected rent",
                    listSelectionMenuId: "rents-selection-menu",
                    urls: {
                        overview: "/api/rents/overview",
                        items: "/api/rents"
                    }
                }), this.form = new k
            }
            loadList(e) {
                l.httpGet(`/api/rents/overview/${R.currentYear}/${R.currentMonth}`, (a, r) => {
                    const n = JSON.parse(r.responseText),
                        o = n.countAll,
                        i = n.countPaid,
                        s = n.countPartiallyPaid,
                        c = n.countNotPaid,
                        d = n.totalToPay,
                        m = n.totalNotPaid,
                        u = n.totalPaid;
                    t(".js-all-filter-label").html("(" + o + ")"), t(".js-paid-filter-label").html("(" + (i + s) + ")"), t(".js-not-paid-filter-label").html("(" + c + ")"), t(".js-total-topay").html(S.formatMoney(d)), t(".js-total-notpaid").html(S.formatMoney(m)), t(".js-total-paid").html(S.formatMoney(u)), t("#view-rent .js-filterbar .js-user-action").removeClass("active"), this.filterValue ? t('#view-rent .js-filterbar .js-user-action[data-value="' + this.filterValue + '"]').addClass("active") : t("#view-rent .js-filterbar .js-default-filter.js-user-action").addClass("active"), l.httpGet(`/api/rents/${R.currentYear}/${R.currentMonth}`, (t, a) => {
                        const r = JSON.parse(a.responseText);
                        this.list.init({
                            rows: r
                        }), e && e()
                    })
                })
            }
            onInitTemplate() {
                i.registerPartial("history-rent-row-template", t("#history-rent-row-template").html()), i.registerPartial("view-rent-payment-badges-template", t("#view-rent-payment-badges-template").html()), i.registerPartial("view-rent-email-status-badges-template", t("#view-rent-email-status-badges-template").html()), this.templateHistoryRents = i.compile(t("#history-rents-template").html());
                const e = t("#view-rent-selected-list-template");
                e.length > 0 && (this.templateSelectedRow = i.compile(e.html()));
                const a = t("#email-status-template");
                a.length > 0 && (this.emailStatus = i.compile(a.html()))
            }
            onInitListener() {
                t(document).on("click", "#view-rent #emailinvoice", () => {
                    const t = this.getSelectedIds();
                    return a.confirm(e.t("Are you sure to send invoices by email?"), e => {
                        e && l.sendEmail(t, "invoice", R.currentYear, R.currentMonth, t => {
                            a.alert(this.emailStatus({
                                results: t
                            }), () => {
                                this.closeForm(() => {
                                    this.loadList()
                                })
                            })
                        })
                    }), !1
                }), t(document).on("click", "#view-rent #emailrentcall", () => {
                    const t = this.getSelectedIds();
                    return a.confirm(e.t("Are you sure to send rent notices by email?"), e => {
                        e && l.sendEmail(t, "rentcall", R.currentYear, R.currentMonth, t => {
                            a.alert(this.emailStatus({
                                results: t
                            }), () => {
                                this.closeForm(() => {
                                    this.loadList()
                                })
                            })
                        })
                    }), !1
                }), t(document).on("click", "#view-rent #emailrentcallreminder", () => {
                    const t = this.getSelectedIds();
                    return a.confirm(e.t("Are you sure to send rent notices by email?"), e => {
                        e && l.sendEmail(t, "rentcall_reminder", R.currentYear, R.currentMonth, t => {
                            a.alert(this.emailStatus({
                                results: t
                            }), () => {
                                this.closeForm(() => {
                                    this.loadList()
                                })
                            })
                        })
                    }), !1
                }), t(document).on("click", "#view-rent #printinvoices", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/invoice/occupants/${t}/${R.currentYear}/${R.currentMonth}`), !1
                }), t(document).on("click", "#view-rent #rentcall", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/rentcall/occupants/${t}/${R.currentYear}/${R.currentMonth}`), !1
                }), t(document).on("click", "#view-rent #recovery1", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/recovery1/occupants/${t}/${R.currentYear}/${R.currentMonth}`), !1
                }), t(document).on("click", "#view-rent #recovery2", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/recovery2/occupants/${t}/${R.currentYear}/${R.currentMonth}`), !1
                }), t(document).on("click", "#view-rent #recovery3", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/recovery3/occupants/${t}/${R.currentYear}/${R.currentMonth}`), !1
                }), t(document).on("click", "#view-rent #paymentorder", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/paymentorder/occupants/${t}/${R.currentYear}/${R.currentMonth}`), !1
                }), t(document).on("click", "#view-rent .js-rent-period", function () {
                    const e = t("#view-rent .js-month-picker");
                    return e.is(":visible") ? e.hide() : e.show(), !1
                })
            }
            onUserAction(e, a) {
                const r = this.list.getSelectedData();
                if ("list-action-pay-rent" === a) {
                    const e = r[0];
                    this.form.bindForm(), this.form.setData(e), e.occupant.terminated ? (t("#rent-payment-form select").attr("readonly", !0).attr("disabled", !0).addClass("uneditable-input"), t("#rent-payment-form input").attr("readonly", !0).addClass("uneditable-input"), t("#rent-payment-form textarea").attr("readonly", !0).addClass("uneditable-input"), this.openForm("pay-rent-form", "pay-rent-view-menu")) : this.openForm("pay-rent-form", "pay-rent-edit-menu")
                } else "list-action-edit-pay-rent" === a ? (t("#rent-payment-form select").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), t("#rent-payment-form input").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), t("#rent-payment-form textarea").attr("readonly", !1).removeClass("uneditable-input"), this.showMenu("pay-rent-edit-menu")) : "list-action-edit-occupant" === a ? (t("#occupant-form select").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), t("#occupant-form input").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), t("#occupant-form .btn").removeClass("hidden"), this.showMenu("pay-rent-edit-menu")) : "list-action-rents-history" === a ? (t("#history-rents-table").html(""), this.openForm("rents-history", null, () => {
                    l.httpGet(`/api/rents/occupant/${r[0]._id}`, (e, a) => {
                        const r = JSON.parse(a.responseText);
                        t("#history-rents-table").html(this.templateHistoryRents(r)), this.scrollToElement("#history-rents-table .active")
                    })
                })) : "list-action-print" === a ? this.openForm("print-doc-selector") : "list-action-email" === a ? this.openForm("email-doc-selector") : "list-action-save-form" === a && this.form.submit(e => {
                    this.closeForm(() => {
                        l.httpGet(`/api/rents/overview/${R.currentYear}/${R.currentMonth}`, (a, r) => {
                            const n = JSON.parse(r.responseText),
                                o = n.countAll,
                                i = n.countPaid,
                                s = n.countPartiallyPaid,
                                l = n.countNotPaid,
                                c = n.totalToPay,
                                d = n.totalNotPaid,
                                m = n.totalPaid;
                            t(".js-all-filter-label").html("(" + o + ")"), t(".js-paid-filter-label").html("(" + (i + s) + ")"), t(".js-not-paid-filter-label").html("(" + l + ")"), t(".js-total-topay").html(S.formatMoney(c)), t(".js-total-notpaid").html(S.formatMoney(d)), t(".js-total-paid").html(S.formatMoney(m)), this.list.update(e), this.list.showAllRows()
                        })
                    })
                })
            }
            onDataChanged() {
                const e = this,
                    a = t("#view-rent .js-month-picker");
                a.datepicker({
                    language: R.countryCode,
                    autoclose: !0,
                    format: "MM yyyy",
                    startView: 1,
                    minViewMode: 1
                }), a.datepicker("setDate", n("01/" + R.currentMonth + "/" + R.currentYear, "DD/MM/YYYY").toDate()), t("#view-rent .js-rent-period").html(S.formatMonthYear(R.currentMonth, R.currentYear).toUpperCase()), a.on("changeDate", function () {
                    const r = n(t(this).datepicker("getDate"));
                    R.currentYear = r.get("year"), R.currentMonth = r.get("month") + 1, a.hide(), t("#view-rent .js-rent-period").html(S.formatMonthYear(R.currentMonth, R.currentYear).toUpperCase()).show(), e.loadList()
                })
            }
            exited() {
                this.form.unbindForm()
            }
        }
    }, {
        id: "occupant",
        Middleware: class extends j {
            constructor() {
                super({
                    domViewId: "#view-occupant",
                    domListId: "#occupants",
                    defaultMenuId: "occupants-menu",
                    listSelectionLabel: "Selected tenant",
                    listSelectionMenuId: "#occupants-selection-menu",
                    urls: {
                        overview: "/api/occupants/overview",
                        items: "/api/occupants"
                    }
                }), this.form = new F, this.documentsForm = new O
            }
            onInitTemplate() {
                i.registerPartial("history-rent-row-template", t("#history-rent-row-template").html()), this.templateHistoryRents = i.compile(t("#history-rents-template").html()), i.registerPartial("occupant-invoice-links-template", t("#occupant-invoice-links-template").html()), this.templateInvoices = i.compile(t("#occupant-invoices-template").html());
                const e = t("#view-occupant-selected-list-template");
                e.length > 0 && (this.templateSelectedRow = i.compile(e.html()))
            }
            _loadPropertyList(t) {
                l.httpGet("/api/properties", (e, a) => {
                    if (t) {
                        const e = JSON.parse(a.responseText);
                        t(e)
                    }
                })
            }
            onUserAction(r, o) {
                const i = this.list.getSelectedData();
                if ("list-action-view-occupant" === o) this._loadPropertyList(e => {
                    this.form.setData(i[0], e), t("#occupant-form select").attr("readonly", !0).attr("disabled", !0).addClass("uneditable-input"), t("#occupant-form input").attr("readonly", !0).addClass("uneditable-input"), t("#occupant-form .btn").addClass("hidden"), this.openForm("occupant-form", "occupant-view-menu")
                });
                else if ("list-action-edit-occupant" === o) t("#occupant-form select").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), t("#occupant-form input").attr("readonly", !1).removeClass("uneditable-input"), t("#occupant-form .btn").removeClass("hidden"), this.showMenu("occupant-edit-menu");
                else if ("list-action-add-occupant" === o) this.list.unselectAll(), this._loadPropertyList(e => {
                    this.form.setData(null, e), t("#occupant-form select").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), t("#occupant-form input").attr("readonly", !1).removeClass("uneditable-input"), t("#occupant-form .btn").removeClass("hidden"), this.openForm("occupant-form", "occupant-edit-menu")
                });
                else if ("list-action-remove-occupant" === o) a.confirm(e.t("Are you sure to remove this tenant?"), t => {
                    if (!t) return;
                    const e = [];
                    for (let t = 0; t < i.length; ++t) e.push(i[t]._id);
                    l.httpDelete(`/api/occupants/${e.join()}`, (t, e) => {
                        const a = JSON.parse(e.responseText);
                        a.errors && 0 !== a.errors.length || (this.list.unselectAll(), this.loadList(() => {
                            this.closeForm()
                        }))
                    })
                });
                else if ("list-action-save-form" === o) this.form.submit(e => {
                    this.closeForm(() => {
                        this.loadList(() => {
                            this.list.select(t(".js-list-row#" + e._id), !0)
                        })
                    })
                });
                else if ("list-action-invoices" === o) t("#occupant-invoices").html(""), this.openForm("invoices"), l.httpGet(`/api/rents/occupant/${i[0]._id}`, (e, a) => {
                    const r = JSON.parse(a.responseText),
                        o = n();
                    let s = 0;
                    const l = r.rents.reverse().filter(t => !!n(`${t.year}-${t.month}-01`).isSameOrBefore(o) && ++s <= 48).reduce((t, e) => {
                        let a = t.years.filter(t => t.year === e.year);
                        if (!a || 0 === a.length) {
                            const r = {
                                occupantId: i[0]._id,
                                year: e.year,
                                months: []
                            };
                            t.years.push(r), a = [r]
                        }
                        return a[0].months.push({
                            occupantId: i[0]._id,
                            year: Number(e.year),
                            month: Number(e.month),
                            totalToPay: e.totalToPay,
                            payment: e.payment
                        }), t
                    }, {
                            years: []
                        });
                    t("#occupant-invoices").html(this.templateInvoices(l))
                });
                else if ("invoice-link" === o) {
                    const t = r.data("month"),
                        e = r.data("year");
                    let a = `/print/invoice/occupants/${r.data("occupantId")}/${e}`;
                    t && (a += `/${t}`), l.openPrintPreview(a)
                } else "list-action-manage-documents" === o ? (this.documentsForm.setData(i[0]), this.openForm("contract-documents-form")) : "list-action-save-contract-documents" === o ? this.documentsForm.submit(e => {
                    this.closeForm(() => {
                        e._id && l.httpGet("/api/occupants/overview", (a, r) => {
                            const n = JSON.parse(r.responseText),
                                o = n.countAll,
                                i = n.countActive,
                                s = n.countInactive;
                            t("#view-occupant .js-all-filter-label").html("(" + o + ")"), t("#view-occupant .all-active-filter-label").html("(" + i + ")"), t("#view-occupant .all-inactive-filter-label").html("(" + s + ")"), this.list.update(e), this.list.showAllRows()
                        })
                    })
                }) : "list-action-rents-history" === o ? (t("#history-rents-table").html(""), this.openForm("rents-history", null, () => {
                    l.httpGet(`/api/rents/occupant/${i[0]._id}`, (e, a) => {
                        const r = JSON.parse(a.responseText);
                        t("#history-rents-table").html(this.templateHistoryRents(r)), this.scrollToElement("#history-rents-table .active")
                    })
                })) : "list-action-print" === o && this.openForm("print-doc-selector")
            }
            onInitListener() {
                t(document).on("click", "#view-occupant #printofficechecklist", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/checklist/occupants/${t}`), !1
                }), t(document).on("click", "#view-occupant #printcontract", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/contract/occupants/${t}/${q.currentYear}/${q.currentMonth}`), !1
                }), t(document).on("click", "#view-occupant #printcustomcontract", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/customcontract/occupants/${t}/${q.currentYear}/${q.currentMonth}`), !1
                }), t(document).on("click", "#view-occupant #printdomcontract", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/domcontract/occupants/${t}/${q.currentYear}/${q.currentMonth}`), !1
                }), t(document).on("click", "#view-occupant #printguarantycertificate", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/guarantycertificate/occupants/${t}/${q.currentYear}/${q.currentMonth}`), !1
                }), t(document).on("click", "#view-occupant #printguarantypayback", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/guarantypaybackcertificate/occupants/${t}/${q.currentYear}/${q.currentMonth}`), !1
                }), t(document).on("click", "#view-occupant #printguarantyrequest", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/guarantyrequest/occupants/${t}/${q.currentYear}/${q.currentMonth}`), !1
                }), t(document).on("click", "#view-occupant #printinsurancerequest", () => {
                    const t = this.getSelectedIds();
                    return l.openPrintPreview(`/print/insurance/occupants/${t}/${q.currentYear}/${q.currentMonth}`), !1
                })
            }
            onDataChanged(t) {
                this.form.bindForm(), this.documentsForm.bindForm(), t && t()
            }
            exited() {
                this.form.unbindForm(), this.documentsForm.unbindForm()
            }
        }
    }, {
        id: "property",
        Middleware: class extends j {
            constructor() {
                super({
                    domViewId: "#view-property",
                    domListId: "#properties",
                    defaultMenuId: "properties-menu",
                    listSelectionLabel: "Selected property",
                    listSelectionMenuId: "properties-selection-menu",
                    urls: {
                        overview: "/api/properties/overview",
                        items: "/api/properties"
                    }
                }), this.form = new V
            }
            onInitTemplate() {
                var e = t("#view-property-selected-list-template");
                e.length > 0 && (this.templateSelectedRow = i.compile(e.html()))
            }
            onUserAction(r, n) {
                var o, i;
                o = this.list.getSelectedData(), "list-action-edit-property" === n ? (this.form.setData(o[0]), this.openForm("property-form")) : "list-action-add-property" === n ? (this.list.unselectAll(), this.form.setData(null), this.openForm("property-form")) : "list-action-remove-property" === n ? a.confirm(e.t("Are you sure to remove this property"), t => {
                    if (t) {
                        i = [];
                        for (var e = 0; e < o.length; ++e) i.push(o[e]._id);
                        l.httpDelete(`/api/properties/${i.join()}`, (t, e) => {
                            const a = JSON.parse(e.responseText);
                            a.errors && 0 !== a.errors.length || (this.list.unselectAll(), this.loadList(() => {
                                this.closeForm()
                            }))
                        })
                    }
                }) : "list-action-save-form" === n && this.form.submit(e => {
                    this.closeForm(() => {
                        this.loadList(() => {
                            this.list.select(t(".js-list-row#" + e._id), !0)
                        })
                    })
                })
            }
            onDataChanged(t) {
                this.form.bindForm(), t && t()
            }
            exited() {
                this.form.unbindForm()
            }
        }
    }, {
        id: "accounting",
        Middleware: class extends j {
            constructor() {
                super({
                    domViewId: "#view-accounting",
                    defaultMenuId: "accounting-menu"
                }), this.year = E.currentYear
            }
            onInitListener() {
                $(document).on("click", "#view-accounting .accounting-period", function () {
                    const t = $("#view-accounting .js-year-picker");
                    return t.is(":visible") ? t.hide() : t.show(), !1
                })
            }
            onInitTemplate() {
                i.registerPartial("accounting-payments-row-template", $("#accounting-payments-row-template").html()), this.templatePaymentsTable = i.compile($("#accounting-payments-template").html()), this.templateEntriesExitsTable = i.compile($("#accounting-entries-exits-template").html())
            }
            onDataChanged(t) {
                const e = $("#view-accounting .js-year-picker");
                e.datepicker({
                    language: E.countryCode,
                    autoclose: !0,
                    format: " yyyy",
                    startView: "years",
                    minViewMode: "years"
                });
                const a = this;
                e.on("changeDate", function () {
                    const t = n($(this).datepicker("getDate"));
                    a.year = t.get("year"), e.hide(), $("#view-accounting .accounting-period").html(a.year).show(), a.load()
                }), e.datepicker("setDate", n("01/01/" + this.year, "DD/MM/YYYY").toDate()), $("#view-accounting .accounting-period").html(this.year), this.load(t)
            }
            onUserAction(t, e) {
                if ("invoice-link" === e) {
                    const e = t.data("month"),
                        a = t.data("year");
                    let r = `/print/invoice/occupants/${t.data("occupantId")}/${a}`;
                    e && (r += `/${e}`), l.openPrintPreview(r)
                }
            }
            load(t) {
                l.httpGet(`/api/accounting/${this.year}`, (e, a) => {
                    const r = JSON.parse(a.responseText);
                    r.payments.months = n.months(), $("#view-accounting #accounting-payments-table").html(this.templatePaymentsTable(r.payments)), $("#view-accounting #accounting-entries-exits-table").html(this.templateEntriesExitsTable(r.entriesExists)), $("#view-accounting #accounting-payments-fake-table").width($("#view-accounting #accounting-payments-per-year-table").outerWidth());
                    const o = $("#view-accounting #accounting-payments-table-top-hscroll"),
                        i = $("#view-accounting #accounting-payments-per-year-table").parent();
                    o.off(".topHscroll"), i.off(".topHscroll"), o.on("scroll.topHScroll", () => {
                        i.scrollLeft(o.scrollLeft())
                    }), i.on("scroll.topHScroll", () => {
                        o.scrollLeft(i.scrollLeft())
                    }), t && t()
                })
            }
        }
    }, {
        id: "selectrealm",
        Middleware: class extends j {
            constructor() {
                super({
                    domViewId: "#view-selectrealm"
                })
            }
            onInitListener() {
                t(document).on("click", ".js-realm-action", function () {
                    const e = t(this).data("id");
                    return l.httpGet(`/api/realms/${e}`, (t, e) => {
                        const a = JSON.parse(e.responseText),
                            r = window.location;
                        "success" === a.status && (window.location = `${r.origin}/dashboard`)
                    }), !1
                })
            }
        }
    }, {
        id: "owner",
        Middleware: class extends j {
            constructor() {
                super({
                    domViewId: "#view-owner"
                }), this.form = new U, this.edited = !1
            }
            onDataChanged() {
                var t;
                this.form.bindForm(), l.httpGet("/api/owner", (e, a) => {
                    const r = JSON.parse(a.responseText);
                    this.form.setData(r), t = this.form.getData(), this.edited ? this.openForm() : t._id && "" !== t._id ? this.closeForm() : this.openForm()
                })
            }
            openForm() {
                this.edited = !0, t("#owner-form select").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), t("#owner-form input").attr("readonly", !1).attr("disabled", !1).removeClass("uneditable-input"), M.showMenu("owner-form-menu")
            }
            closeForm() {
                this.edited = !1, t("#owner-form select").attr("readonly", !0).attr("disabled", !0).addClass("uneditable-input"), t("#owner-form input").attr("readonly", !0).attr("disabled", !0).addClass("uneditable-input"), M.showMenu("owner-menu")
            }
            onUserAction(t, e) {
                "edit-owner" === e ? this.openForm() : "save-form" === e && this.form.submit(() => {
                    this.closeForm()
                })
            }
            exited() {
                this.form.unbindForm()
            }
        }
    }].forEach(t => {
        const e = new t.Middleware;
        l.get(`/${"website" !== t.id ? t.id : ""}`, e), l.get(`/view/${t.id}`, e)
    }), B = G.countryCode, z = (r => {
        G.countryCode = r, l.listen(), m(), f(), t("#demo-popover").length && a.alert({
            message: e.t("Site data is reset every 30 minutes"),
            title: e.t("Caution")
        })
    }), document.addEventListener("DOMContentLoaded", () => {
        e.use(window.i18nextBrowserLanguageDetector).use(window.i18nextLocalStorageCache).use(window.i18nextXHRBackend).use(window.i18nextSprintfPostProcessor).init({
            fallbackLng: "en",
            debug: !1,
            pluralSeparator: "_",
            keySeparator: "::",
            nsSeparator: ":::",
            detection: {
                order: ["cookie", "navigator"],
                lookupCookie: "locaI18next",
                cookieDomain: "loca",
                caches: ["cookie"]
            },
            backend: {
                loadPath: "/public/locales/{{lng}}.json",
                allowMultiLoading: !1
            }
        }), e.on("languageChanged", function (t) {
            const e = (t && t.split("-") || B.split("-"))[0].toLowerCase(),
                a = u[e] || e;
            try {
                Promise.all([h("moment-language", `//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/${e}.js`), h("jquery-validate-language", `//ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/localization/messages_${a}.js`), h("bootstrap-datepicker-language", `/node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.${e}.min.js`)])
            } catch (t) {
                console.error(t)
            }
            n.locale(e), z && z(e)
        })
    })
});
//# sourceMappingURL=index.min.js.map