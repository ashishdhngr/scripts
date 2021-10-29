(function(e) {
    function t(t) {
        for (var s, a, o = t[0], c = t[1], u = t[2], l = 0, d = []; l < o.length; l++)
            a = o[l],
            Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]),
            i[a] = 0;
        for (s in c)
            Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
        p && p(t);
        while (d.length)
            d.shift()();
        return r.push.apply(r, u || []), n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], s = !0, a = 1; a < n.length; a++) {
                var o = n[a];
                0 !== i[o] && (s = !1)
            }
            s && (r.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var s = {},
        a = {
            app: 0
        },
        i = {
            app: 0
        },
        r = [];
    function o(e) {
        return c.p + "js/" + ({}[e] || e) + "." + {
            "chunk-2983b6b0": "6aa6895b"
        }[e] + ".js"
    }
    function c(t) {
        if (s[t])
            return s[t].exports;
        var n = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(e) {
        var t = [],
            n = {
                "chunk-2983b6b0": 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
            for (var s = "css/" + ({}[e] || e) + "." + {
                    "chunk-2983b6b0": "489a7b77"
                }[e] + ".css", i = c.p + s, r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                var u = r[o],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === s || l === i))
                    return t()
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
                u = d[o],
                l = u.getAttribute("data-href");
                if (l === s || l === i)
                    return t()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet",
            p.type = "text/css",
            p.onload = t,
            p.onerror = function(t) {
                var s = t && t.target && t.target.src || i,
                    r = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED",
                r.request = s,
                delete a[e],
                p.parentNode.removeChild(p),
                n(r)
            },
            p.href = i;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p)
        })).then((function() {
            a[e] = 0
        })));
        var s = i[e];
        if (0 !== s)
            if (s)
                t.push(s[2]);
            else {
                var r = new Promise((function(t, n) {
                    s = i[e] = [t, n]
                }));
                t.push(s[2] = r);
                var u,
                    l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                c.nc && l.setAttribute("nonce", c.nc),
                l.src = o(e);
                var d = new Error;
                u = function(t) {
                    l.onerror = l.onload = null,
                    clearTimeout(p);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var s = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + s + ": " + a + ")",
                            d.name = "ChunkLoadError",
                            d.type = s,
                            d.request = a,
                            n[1](d)
                        }
                        i[e] = void 0
                    }
                };
                var p = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = u,
                document.head.appendChild(l)
            }
        return Promise.all(t)
    },
    c.m = e,
    c.c = s,
    c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var s in e)
                c.d(n, s, function(t) {
                    return e[t]
                }.bind(null, s));
        return n
    },
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    },
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    c.p = "/",
    c.oe = function(e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var d = 0; d < u.length; d++)
        t(u[d]);
    var p = l;
    r.push([0, "chunk-vendors"]),
    n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "002b": function(e, t, n) {},
    "007e": function(e, t, n) {
        "use strict";
        n("94c8")
    },
    "011b": function(e, t, n) {
        "use strict";
        n("40e5")
    },
    "01b0": function(e, t, n) {},
    "02da": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Beschikbare apps"},"AppsList":{"aria":{"appsLogoAlt":"Pictogram voor discussiestroom"},"booting":"opstarten","running":"rennen","title":"Beschikbare apps"},"BaseMessage":{"retrySending":"Er is een fout opgetreden. Klik om het opnieuw te proberen."},"BotCard":{"highContrastMode":"Visuele toegankelijkheid","optionsPanelTitle":"Opties","privacyPolicy":"Privacybeleid","restartConversation":"Gesprek opnieuw starten","screenReaderMode":"Audiomodus","termsAndConditions":"Voorwaarden"},"DiscussionsListCard":{"disabledLabel":"Gehandicapt","lastMessageFormats":{"image":"Afbeelding","url":"Koppeling","video":"Video"},"title":"Discussies"},"DownvoteForm":{"reasonMessageLabel":"vertel ons meer over je probleem","reasonTypeLabel":"Wat ging er mis","reportReasonsList":{"ERRONEOUS_ANSWER":"Het antwoord bevat foutieve informatie","INCOMPLETE_ANSWER":"Het antwoord is onvolledig","IRRELEVANT_ANSWER":"Het antwoord is niet relevant","OTHER":"Andere reden"},"writeHere":"Schrijf hier ..."},"DownvoteModal":{"title":"Een antwoord melden"},"FileMessage":{"aria":{"fileThumbnailAlt":"Voorbeeldafbeelding bestand"}},"ImageMessage":{"aria":{"defaultImageAlt":"Ontvangen afbeelding"},"tooltips":{"download":"Downloaden","expand":"Uitbreiden"}},"Index":{"errors":{"404":"De door u opgevraagde pagina bestaat niet.","500-text":"Probeer het later opnieuw.","500-title":"Oh, er is een probleem!"}},"InputCard":{"dropFilesHere":"Zet je bestanden hier neer","inactiveChannel":"U kunt dit gesprek niet beantwoorden"},"LinkMessage":{"aria":{"faviconImageAlt":"Favicon van de doelwebsite van de link"}},"NetworkInfoPanel":{"text":"Verbinding verbroken, je wordt automatisch opnieuw verbonden"},"NewMessageInfoPanel":{"text":"Je hebt nieuwe berichten ontvangen. Klik om te scrollen."},"NotificationService":{"browserNotification":{"title":"Je hebt een nieuw bericht ontvangen!"}},"PendingModal":{"description":"We zullen uw vraag per e-mail beantwoorden wanneer er een antwoord is gegeven.","title":"Ontvang een reactie via e-mail"},"RightSideBar":{"theApps":"De apps"},"TextInput":{"aria":{"label":"Schrijf hier een bericht"},"speechModePlaceholder":"Zeg iets...","submitText":"Versturen","textModePlaceholder":"Schrijf een bericht..."},"gen":{"aria":{"botImageAlt":"Bot-afbeelding"},"cancel":"Annuleren","logout":"Uitloggen","submit":"Indienen"}}')
    },
    "034f": function(e, t, n) {
        "use strict";
        n("85ec")
    },
    "05a9": function(e, t, n) {},
    "066a": function(e, t, n) {
        "use strict";
        n("929f")
    },
    "06fc": function(e, t, n) {
        "use strict";
        n("05a9")
    },
    "0807": function(e, t, n) {
        "use strict";
        n("2cbe")
    },
    "0af2": function(e, t, n) {},
    "0c4e": function(e, t, n) {
        "use strict";
        n("3f4d")
    },
    "0ee3": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return x
        }));
        var s = n("2b0e"),
            a = "MESSAGE_SENDING_ONGOING",
            i = "MESSAGE_SENDING_SUCCEEDED",
            r = "MESSAGE_SENDING_FAILED",
            o = "RETRY_SENDING",
            c = "DISPLAY_MESSAGE",
            u = "SET_CURRENT_CSML_FLOW",
            l = "SET_AUTOCOMPLETE_STATE",
            d = "UPDATE_MESSAGE",
            p = "OPEN_SIDEBAR",
            f = "CLOSE_SIDEBAR",
            m = "SIDEBAR_OPENED",
            g = "SIDEBAR_CLOSED",
            h = "DISCUSSION_CHANGED",
            b = "CSML_FLOW_CHANGED",
            _ = "SET_TEXT_INPUT_CHARS_LIMIT",
            v = "CLEAR_MESSAGES",
            y = "RESET_MEMORY",
            w = "RESTART_CONVERSATION",
            E = "SAY_TEXT",
            k = "OPEN_APPS_MOBILE_PANEL",
            S = "CLOSE_APPS_MOBILE_PANEL",
            C = "COMMAND",
            O = "FILES_DROPPED";
        t["a"] = {
            MESSAGE_SENDING_ONGOING: a,
            MESSAGE_SENDING_SUCCEEDED: i,
            MESSAGE_SENDING_FAILED: r,
            RETRY_SENDING: o,
            DISPLAY_MESSAGE: c,
            SET_CURRENT_CSML_FLOW: u,
            SET_AUTOCOMPLETE_STATE: l,
            UPDATE_MESSAGE: d,
            OPEN_SIDEBAR: p,
            CLOSE_SIDEBAR: f,
            SIDEBAR_OPENED: m,
            SIDEBAR_CLOSED: g,
            DISCUSSION_CHANGED: h,
            CSML_FLOW_CHANGED: b,
            SET_TEXT_INPUT_CHARS_LIMIT: _,
            CLEAR_MESSAGES: v,
            RESET_MEMORY: y,
            RESTART_CONVERSATION: w,
            SAY_TEXT: E,
            OPEN_APPS_MOBILE_PANEL: k,
            CLOSE_APPS_MOBILE_PANEL: S,
            COMMAND: C,
            FILES_DROPPED: O
        };
        s["default"];
        var x = new s["default"]
    },
    1: function(e, t) {},
    "11d5": function(e, t, n) {
        "use strict";
        n("8df7")
    },
    1330: function(e, t, n) {
        "use strict";
        n("6e7e")
    },
    "139a": function(e, t, n) {},
    1508: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACK+310AAAOF0lEQVR4Ae1cCXBbxRn+90m2JZ9JSGzLie8LSDmGKwFCSQl3aaAZzkJpytXCNJNpKYGSSSkzLYFCZyh0oAFmgAAFZsgQKJSSlnCFK8AMCSRNLMeSQ3wnTnxbkvVe//9ZT9rVZUnvSZaZt2N5d/+9/v3+vfffB2AaEwETARMBEwETARMBEwETARMBEwETARMBEwETARMBEwETARMBEwETARMBE4HvOgIs2yvY0t5Tp/jlJcCUY5DZZkVhDQyUWcCgCN2FjCk+UNgQ+odAUToVgL0M2F6wSF/ZpdKPKivZWDbXMesEoCiK5Nzfuwxk+WoEcxmCWq0DQC9j7FNM/6ZizXmhuXJuh4680pI0awTgdvc5vMrEagT9pwh6hdG1RUHImO9WkODxxmrHq+jHoqbfTLsA9nX2V/k9nrsQnBsQkbxMQILg72aSsr6hyvEPVTCZKDRGGdMmABxqcp3tXXeAAmsVBewx+EszmX1htSq31ldVfJHmgmJmPy0CcLr7TpJl34vIVVNMzjIUMNkDlEcbaxx3oNuXoWKDxWRcAM62risVpjwzfa0+WHfBgeC/l59TcPmCBcWHhIA0ezImABxymLO9+15FVtaluU4pZ49CaGMSLMdJelfKmSSZMCMC6O7uLhgcUzaiEFYkyd80RGdDkoVd21hd/s9MFJ52AUyCL7+PQ87JmaiQEWVMzgtwY1Ot4xkj8ouXhxQvUG8YDTuTLX/mgE91Rr4l/G3Y1967RC8GU6VPqwDUMX9GDDtRYcr1+/2b2to69ezEo2bME9M2BNFqB7eeL/OFzUQ3Y7Cj2C6dWV5ePpIO/tPSA2idT0vNdDCc6Txx7johsIBIS2M1XAA4dubSJivb1vl6BId1WuF0d92iJ49YaQ0XgNPVtQYLm/YdbqwKp0rHc6r7OjsH56aaPlY6Q7vV5MHa+J5EW3/3gAU6j1hgzMtg3MeCNi6ewGJR8OAS0MYfHlxa0ZbQJr8VuZYkdAe4lxEdGeMqMgNy459qKFj9qf8UyM9VoNgu40+BojwZ8vO0mIEEU1tPNddV3Dx1tMRjBKqQeIJ4MVtcXY9hd701WhwC5vO2PNiOP2ePFfb15cDIuOEdMFrRMWm2HAWayn1wdIUXjqnwwffme2FeEYkylmETeRJrqqkpd8WKkSzdMAGo5/myz4U4C0fK2BvgjR358OyHhXBwGJtvVhvcLdZ44YpTR2Bxgycqp4xJG5pqy38ZNTAFomECwNZ/P7b+O3kejowyWLdpDnx9IJcnR7gV3wjI4304dvhxE4QtkH443DAJ07FcYBa00c2kHLStaFuRHibMQDoF86B81LzkgBvXkpQXk7BtWDCPBMxpdeNw1yUDMKdA7BEImIfZWWWjw4EM6zeGCACBl1rc3d8iesGbrIExBrc9Oxc6DiNYYcZ3eBf4uj8C/1Ar+Ec6QfENhsVI0Msob+xiBHjChqEsi8FSUAlSYRVYimoht+wMYDlFETmUlfjhwav6oeqoCSEMe8Fq7AWPCMQUPYYIAC/Oz1P8/i08D2temgPbXcJohIC3wejux2FiYC8fdfrd2DNyHWeDrXo5WFAovHGUTMATNxyEIhsKOmCwQ33ZVFtxiubXYxszC+IFOs/E+3tsEeD7ej+Dwe1rsg98Ylz2gLdjCwx+sho8+9/gqwJdA1Z4+O0SgYbz2snO/T31AjFFjyECwLaxjC//mW2FvBdbvhuGdz4E4PcK9Kzz4FA2uucJ8B4QOjO8s9sG+3rFoRR7vFDnVOuiWwCkt4Njf7XGADHqwiUmb8awUtTKZooZ2bMB5LEejl0Gr35ZwPlp5mHnCIQUPboFoCpNcYVva7FxPoCJI3vBd/gbgRbLU1/jgOUXLIZZxWJlY8VPhn7qiU1w3tkngS0v/opMzVP2wfi+l4TsP2zJw3YmkM4SfCl6dAuANNb4sneFLTl9PR/zwVHdeAECv7/9WtjxzmPw8oa7Yc+2p+DSC0+PGjdZohW30Jufvgc+2PwQvP7sH+Czfz0MJyysmzIbL/Eth4bMgVELtPRwPRtXfM5Dh4qnzGiKCLoFgMuoZr6M9n5xrPQd3skHR3X/5hcr4HerrsJjhsm1fQn2gL8/sAocpXOixk+GePfqq+GCH4Qu45rqF6iCOGp25LKTz1fxj4GvX+y57j6xbtKIV6g7nz5Rt24B4LlNg1aYB5fLPQNilv7hA1pwVLtqQSms+/VPIsJmlRTCZRedEUFPlvDzq86PSFI6dxasX3tDBD2c4B9yCST3QVEAfn+o7kLEJDwiWkkk1KKqirIBz5B6thPaWsjjqOExxeR7+Q+XQF4e17W1jNFesmgh50veSXNKeensqAlXXHxmzHK1BP7RDs2p2odHRLj4ugsRk/CIOSaRMBgVtZQ1N51q8kbxj/LeqO6Lzz0tKp2IdlsCE2bM1BB3wi3It8HSM46PkxpXOr5hIXwUT2x5g3NysO48PRm3bgHgEBRc9NORMm+UiXHeG9XtiNFCKfLI6NTpo2YaII6OxV/6ls2L3ju0PJUJUbN9PKyB4Vl3sO5ammRt3QJQ9fMDpVojchPXbdGYs8Vp5Tt2tUVLkjBtf0cv9B8Zihk/3yYelcSMGAigOwnByEpomSQEJO6JgCzxpIGY9DgiYOx44cEbZhH3BHyY5m51dWnOCHvzvz+JoCVD8PtlePO/22MmaXV3xgyjAGa1C+F0ocMbPJQTxyg+MEG3fgHQy5SAseWEHd1a87WgmPZ7H+2IGrb5rY+h1RUfoKgJw4h/fXIzeL2ROrcejw8+/nx3WGzRK1nFDaE9V6yf+ipHTJK0T78A8FmQVuqsfAXolkkzku0oPH+PP5H+7enXof1Ar5ZEtb/t7INVax8TaKl6du1th3V/3hiR/N6/PA9TzRFSwXwh3fzZ4rE3roKCdRciJuHRLQCEWzhbrpzDn53j3W6+WIlw3oaGx+BH198D1OI7ug/B85u2wqKLVsPB/hTvCMILQP8jT70Gl9/0R/j6fy7Yh8POb+99Eh7GnjGVsRRWC1Fqwu4FZCYJdRciJ+gRdxYJJuKj0YM4JXgNDlA7z4d3vqF1vXX2cXga6uKTRLidbR1wza33R9CNJNBcEG8+iCgL7wisc/hlKt4fO0JDGa73PI1Vpe6IdEkSdPcAeo3Il7m4Xlz65ZSdzgfPGHdu2WK89QytkhbO9wnXk3gaujOgxKurTroFQE9BkYPgcmxRnQdyUKVEMzmzF4K1pFnzzgwb75vtdcIdEyxbKO4J8PzwXSMqo1sA9A4XW8KnGjMFeHV34fHiDth+9M14mR4alrS42WrbG1cCPwHPLfTDJSeKdcKb5a1G8K9bAAEm3uSZue70YWE1ZC1pgvyFqyI1GfhEWeFmYGu4Dmw1lwrc3HbuIOQKmzA2bLOWfiBEStFjiADoETQ/HpaVyHD7hQMCS3mOpVB0yp9QG6FKoGeFB4ec3LIlULToQRx6rhRYuvK0YTjnGPFIBIefV4x6gS8e3ghFJ+dpaev8D4785/KpXvy0ADa8S+dVfDEK+Po+V9VSJkgtZbQbT0xDqws+fdrcuDexFCxQG4OlqAZyy78Pkm1uRHErlwzByrMiN7sWSVrWUFNuyBDEIxPBQDKEFnfnCtSN2hSeZpszDx7ZUgK9g0If5qIp4B87CIqqmIV7CMxEVc7CGJOKWKRQpSln4TyiKmahjTpBTJrMUwkoYIWUsnDHqmBeSFdp2GRVJS9cWtLKhlnpiCR21etLfbD6/EE4vjK4tgjxy2BPU43jWOzxoZVGKDRpV2wukswKlbOY0939DdrHhicdxwb+xlf58NbOfNQuyM7J2DFrAo5b4MUFxBicVB0F+GCl2M+a6xwbg16dDsMEQHw42zuvw0b3XDye+vFSoxU3aq2oPUE2aUfTMS/dJXgmJNXG9qtqRKua0eiWcFlLGtHkJw1pOnUl7WiyqRnKmICUf/GrKeBHW2uaVDls/Gpbl9C2o0Z0MWpEF6GGNP1I7bAZlXObHV6gY5QpDWOuppryJmz9/HZ/ymTxIhCPhhlVRdHV/RlCcIphmWZRRvh89Qp8Q/yKkSwZsgrSGKKVEH17gV8RaWEz3cae9LbR4BMmhgqAMpz88IXyKLm/OwYfb1utv0pHfQwdgjQGcSjKwQl5C9pLNdpMtak3M4ldlq6X84b3AAIamfbRhy/QbpupwGt8Ywu9O13gUxlpEQBlTF8doQ9foDiCN2ZEn0kGwX+hsdbxQDp5TpsAiGn66gh9+GImTsq4dduewxw3pRN8yjutAqACAt33RnTG291Q1KwxBL61QFpeW8vEQ6A0cJiWSTgan/ThC/r2At6elUYLzxYaDTvU8jMBPtU5YwKgwujDFxMMXkM17xPIn01GXe0AW9tYW57eu9GwSmdUAFR24PtBz6EQfhzGyzR6M/uRJr6iGRcAFY77Azy467oFT1/uw4Mb/TrofI2SdNMOlzZZDZWlrUkmNST6tAhA45y+vTA0PrweR8KVKBbdGhpavgnZeLAmSbAmHccLCZUfiDStAtAYdbu7a70K3Il3ASuxV4RUEbQIRtp4no+npuvxnS99tNWwU81UWcwKAWjMO7u65inj7Bo8XL6enoJqdP02G8ahZpPE2Mb66rJ3EfgEzp71l5pIDlklAJ5heodLT0EDrxHPwomjgg+P58ZKeTDd1wj6VtJeKMgr/bCigolqDfEyyGBY1gogHAN6EEdvsuhZEL1MwSZchIvoQvxOjQ9btPr5etLVJHVB0lijZWV4HqbfRMBEwETARMBEwETARMBEwETARMBEwETARMBEwETARMBEwETARMBEwETARMBEYDoQ+D9cj2jZ8vUQKwAAAABJRU5ErkJggg=="
    },
    "18b1": function(e, t, n) {
        "use strict";
        n("01b0")
    },
    1927: function(e, t, n) {
        "use strict";
        n("139a")
    },
    "1e5b": function(e, t, n) {
        "use strict";
        n("b561")
    },
    2007: function(e, t, n) {},
    "201f": function(e, t, n) {
        "use strict";
        n("d894")
    },
    2291: function(e, t, n) {
        e.exports = n.p + "img/logo-inline.97034ca8.png"
    },
    "22d9": function(e, t, n) {},
    2399: function(e, t, n) {},
    "23cd": function(e, t, n) {
        "use strict";
        n("24c9")
    },
    "23e0": function(e, t, n) {
        "use strict";
        n("e01e")
    },
    "245d": function(e, t, n) {},
    "24c9": function(e, t, n) {},
    2738: function(e, t, n) {},
    "29a3": function(e, t, n) {},
    "2a0b": function(e, t, n) {
        "use strict";
        n("2bab")
    },
    "2b1b": function(e, t, n) {
        "use strict";
        n("a3d8")
    },
    "2b7e": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Menu"},"AppsList":{"aria":{"appsLogoAlt":"Ikona przebiegu dyskusji "},"booting":"startowy","running":"uruchamiam","title":"Menu"},"BaseMessage":{"retrySending":"Coś poszło nie tak. Kliknij, aby spróbować ponownie."},"BotCard":{"highContrastMode":"Powiększ tekst","optionsPanelTitle":"Opcje","privacyPolicy":"Polityka prywatności","restartConversation":"Zresetuj rozmowę","screenReaderMode":"Czytaj tekst","termsAndConditions":"Regulamin"},"DiscussionsListCard":{"disabledLabel":"Wyłączony","lastMessageFormats":{"image":"Obraz","url":"Link","video":"Wideo"},"title":"Dyskusje"},"DownvoteForm":{"reasonMessageLabel":"Powiedz coś więcej na temat problemu","reasonTypeLabel":"Co poszło nie tak?","reportReasonsList":{"ERRONEOUS_ANSWER":"Odpowiedź zawiera błędne informacje","INCOMPLETE_ANSWER":"Odpowiedź jest niekompletna","IRRELEVANT_ANSWER":"Odpowiedź jest niezwiązana z tematem","OTHER":"Inne przyczyny"},"writeHere":"Napisz tutaj ..."},"DownvoteModal":{"title":"Zgłoś odpowiedź"},"FileMessage":{"aria":{"fileThumbnailAlt":"Obraz podglądu pliku"}},"ImageMessage":{"aria":{"defaultImageAlt":"Otrzymano obraz"},"tooltips":{"download":"Pobierz","expand":"Powiększ"}},"Index":{"errors":{"404":"Strona nie istnieje.","500-text":"Spróbuj później.","500-title":"Och, jest problem!"}},"InputCard":{"dropFilesHere":"Załaduj swój plik","inactiveChannel":"Nie możesz odpowiedzieć w tej konwersacji"},"LinkMessage":{"aria":{"faviconImageAlt":"Link favicona na stronie"}},"NetworkInfoPanel":{"text":"Utracono połączenie, nastąpi automatyczne ponowne połączenie"},"NewMessageInfoPanel":{"text":"Masz nową wiadomość. Kliknij, aby przewinąć."},"NotificationService":{"browserNotification":{"title":"Masz nową wiadomość!"}},"PendingModal":{"description":"Prześlemy odpowiedź e-mailem jak tylko będzie gotowa.","title":"Uzyskaj odpowiedź przez e-mail"},"RightSideBar":{"theApps":"Menu "},"TextInput":{"aria":{"label":"Napisz wiadomość tutaj"},"speechModePlaceholder":"Możesz mówić...","submitText":"Wyślij","textModePlaceholder":"Wpisz wiadomość"},"gen":{"aria":{"botImageAlt":"Zdjęcie bota"},"cancel":"Anuluj","logout":"Wyloguj","submit":"Wybierz"}}')
    },
    "2bab": function(e, t, n) {},
    "2cbe": function(e, t, n) {},
    "2db4": function(e, t, n) {},
    "339e4": function(e, t, n) {},
    "34d4": function(e, t, n) {},
    "35af": function(e, t, n) {
        "use strict";
        n("e13f")
    },
    "362f": function(e, t, n) {
        "use strict";
        n("c5f3")
    },
    3942: function(e, t, n) {
        "use strict";
        n("6892")
    },
    3962: function(e, t, n) {},
    "3b9b": function(e, t, n) {
        "use strict";
        n("abd8")
    },
    "3f4d": function(e, t, n) {},
    "40d2": function(e, t, n) {
        "use strict";
        n("6a8d")
    },
    "40e5": function(e, t, n) {},
    4370: function(e, t, n) {
        "use strict";
        n("b27b")
    },
    "43c5": function(e, t, n) {
        "use strict";
        n("dad0")
    },
    "443b": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"App disponibili"},"AppsList":{"aria":{"appsLogoAlt":"Icona del flusso di discussione"},"booting":"avvio","running":"in esecuzione","title":"App disponibili"},"BaseMessage":{"retrySending":"Si è verificato un errore. Fare clic per riprovare."},"BotCard":{"highContrastMode":"Accessibilità visiva","optionsPanelTitle":"Opzioni","privacyPolicy":"politica sulla riservatezza","restartConversation":"Riavvia la conversazione","screenReaderMode":"Modalità audio","termsAndConditions":"Termini e Condizioni"},"DiscussionsListCard":{"disabledLabel":"Disabilitato","lastMessageFormats":{"image":"Immagine","url":"Collegamento","video":"video"},"title":"Discussioni"},"DownvoteForm":{"reasonMessageLabel":"dicci di piu sul tuo problema","reasonTypeLabel":"Cosa è andato storto","reportReasonsList":{"ERRONEOUS_ANSWER":"La risposta contiene informazioni errate","INCOMPLETE_ANSWER":"La risposta è incompleta","IRRELEVANT_ANSWER":"La risposta è irrilevante","OTHER":"Un\'altra ragione"},"writeHere":"Scrivere qui ..."},"DownvoteModal":{"title":"Segnala una risposta"},"FileMessage":{"aria":{"fileThumbnailAlt":"Immagine di anteprima del file"}},"ImageMessage":{"aria":{"defaultImageAlt":"Immagine ricevuta"},"tooltips":{"download":"Scarica","expand":"Espandere"}},"Index":{"errors":{"404":"La pagina richiesta non esiste.","500-text":"Per favore riprova più tardi.","500-title":"Oh, c\'è un problema!"}},"InputCard":{"dropFilesHere":"Trascina qui i tuoi file","inactiveChannel":"Non puoi rispondere a questa conversazione"},"LinkMessage":{"aria":{"faviconImageAlt":"Favicon del sito web di destinazione del link"}},"NetworkInfoPanel":{"text":"Connessione persa, verrai riconnesso automaticamente"},"NewMessageInfoPanel":{"text":"Hai ricevuto nuovi messaggi. Fare clic per scorrere."},"NotificationService":{"browserNotification":{"title":"Hai ricevuto un nuovo messaggio!"}},"PendingModal":{"description":"Risponderemo alla tua domanda via e-mail quando verrà fornita una risposta.","title":"Ricevi una risposta via e-mail"},"RightSideBar":{"theApps":"Le app"},"TextInput":{"aria":{"label":"Scrivi un messaggio qui"},"speechModePlaceholder":"Di \'qualcosa...","submitText":"Spedire","textModePlaceholder":"Scrivi un messaggio..."},"gen":{"aria":{"botImageAlt":"Immagine del bot"},"cancel":"Annulla","logout":"Disconnettersi","submit":"Invia"}}')
    },
    "498f": function(e, t, n) {
        "use strict";
        n("22d9")
    },
    "4e59": function(e, t, n) {},
    "4eab": function(e, t, n) {},
    5026: function(e, t, n) {
        "use strict";
        n("a94b")
    },
    "52f4": function(e, t, n) {},
    "53fa": function(e, t, n) {
        "use strict";
        n("c912")
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("a4d3"),
        n("e01a"),
        n("b636"),
        n("dc8d"),
        n("efe9"),
        n("d28b"),
        n("2a1b"),
        n("8edd"),
        n("80e0"),
        n("6b9e"),
        n("197b"),
        n("2351"),
        n("8172"),
        n("944a"),
        n("81b8"),
        n("967a"),
        n("99af"),
        n("a874"),
        n("cb29"),
        n("4de4"),
        n("7db0"),
        n("c740"),
        n("0481"),
        n("5db7"),
        n("a630"),
        n("caad"),
        n("e260"),
        n("a15b"),
        n("d81d"),
        n("5ded"),
        n("13d5"),
        n("f4dd"),
        n("fb6a"),
        n("f785"),
        n("a434"),
        n("4069"),
        n("73d9"),
        n("c19f"),
        n("82da"),
        n("ace4"),
        n("efec"),
        n("b56e"),
        n("b0c0"),
        n("6c57"),
        n("e9c4"),
        n("0c47"),
        n("4ec9"),
        n("5327"),
        n("79a8"),
        n("9ff9"),
        n("3ea3"),
        n("40d9"),
        n("ff9c"),
        n("0ac8"),
        n("f664"),
        n("4057"),
        n("bc01"),
        n("6b93"),
        n("ca21"),
        n("90d7"),
        n("2af1"),
        n("0261"),
        n("7898"),
        n("23dc"),
        n("b65f"),
        n("a9e3"),
        n("35b3"),
        n("f00c"),
        n("8ba4"),
        n("9129"),
        n("583b"),
        n("aff5"),
        n("e6e1"),
        n("c35a"),
        n("25eb"),
        n("b680"),
        n("cca6"),
        n("12a8"),
        n("e71b"),
        n("4fad"),
        n("dca8"),
        n("c1f9"),
        n("e439"),
        n("dbb4"),
        n("7039"),
        n("3410"),
        n("2b19"),
        n("c906"),
        n("e21d"),
        n("e43e"),
        n("b64b"),
        n("bf96"),
        n("5bf7"),
        n("cee8"),
        n("af93"),
        n("131a"),
        n("d3b7"),
        n("07ac"),
        n("e6cf"),
        n("820e"),
        n("dbfa"),
        n("a79d"),
        n("a6fd"),
        n("4ae1"),
        n("3f3a"),
        n("ac16"),
        n("5d41"),
        n("9e4a"),
        n("7f78"),
        n("c760"),
        n("db96"),
        n("1bf2"),
        n("d6dd"),
        n("7ed3"),
        n("8b9a"),
        n("f8c9"),
        n("4d63"),
        n("ac1f"),
        n("5377"),
        n("2c3e"),
        n("00b4"),
        n("25f0"),
        n("6062"),
        n("f5b2"),
        n("8a79"),
        n("f6d6"),
        n("2532"),
        n("3ca3"),
        n("466d"),
        n("a1f0"),
        n("843c"),
        n("4d90"),
        n("d80f"),
        n("38cf"),
        n("5319"),
        n("5b81"),
        n("841c"),
        n("1276"),
        n("2ca0"),
        n("498a"),
        n("1e25"),
        n("eee7"),
        n("18a5"),
        n("1393"),
        n("04d3"),
        n("cc71"),
        n("c7cd"),
        n("9767"),
        n("1913"),
        n("c5d0"),
        n("9911"),
        n("c96a"),
        n("2315"),
        n("4c53"),
        n("664f"),
        n("cfc3"),
        n("4a9b"),
        n("fd87"),
        n("8b09"),
        n("143c"),
        n("5cc6"),
        n("8a59"),
        n("84c3"),
        n("fb2c"),
        n("9a8c"),
        n("a975"),
        n("735e"),
        n("c1ac"),
        n("d139"),
        n("3a7b"),
        n("d5d6"),
        n("20bf"),
        n("82f8"),
        n("e91f"),
        n("60bd"),
        n("5f96"),
        n("3280"),
        n("3fcc"),
        n("ec97"),
        n("ca91"),
        n("25a1"),
        n("cd26"),
        n("3c5d"),
        n("2954"),
        n("649e"),
        n("219c"),
        n("170b"),
        n("b39a"),
        n("72f7"),
        n("10d1"),
        n("1fe2"),
        n("159b"),
        n("ddb0"),
        n("130f"),
        n("9f96"),
        n("2b3d"),
        n("bf19"),
        n("9861"),
        n("f373"),
        n("32a4"),
        n("7ec0"),
        n("a5d8"),
        n("c89d"),
        n("e50d");
        var s = n("5e2b"),
            a = (n("96cf"), n("2de2"), n("2b0e")),
            i = n("0628"),
            r = n.n(i),
            o = n("1881"),
            c = n.n(o),
            u = n("e37d"),
            l = n("5887"),
            d = n.n(l),
            p = n("bfc7"),
            f = (n("be0f"), n("353a")),
            m = n.n(f),
            g = n("3181"),
            h = n.n(g),
            b = n("b5c1"),
            _ = n.n(b),
            v = n("339e"),
            y = n.n(v);
        function w(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function E(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function k(e, t, n) {
            return t && E(e.prototype, t), n && E(e, n), e
        }
        y.a.setFlavor("github");
        var S = new y.a.Converter({
                literalMidWordUnderscores: !0,
                noHeaderId: !0,
                omitExtraWLInCodeBlocks: !0,
                simplifiedAutoLink: !0,
                requireSpaceBeforeHeadingText: !0,
                openLinksInNewWindow: !0,
                strikethrough: !0,
                excludeTrailingPunctuationFromURLs: !0
            }),
            C = function() {
                function e() {
                    w(this, e)
                }
                return k(e, null, [{
                    key: "markdownToHtml",
                    value: function(e) {
                        return e ? S.makeHtml(e) : ""
                    }
                }, {
                    key: "markdownToRawText",
                    value: function(e) {
                        return e ? _()(e) : ""
                    }
                }]), e
            }(),
            O = C;
        a["default"].directive("markdown", {
            inserted: function(e, t) {
                e.classList.add("s-markdown"),
                e.innerHTML = O.markdownToHtml(t.value)
            },
            update: function(e, t) {
                e.innerHTML = O.markdownToHtml(t.value)
            }
        });
        var x = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "u-full-w-h u-flex-x-y-center",
                    class: {
                        "s-high-contrast-mode": e.highContrastEnabled
                    },
                    attrs: {
                        id: "app"
                    }
                }, [e.isChatbox ? n("button", {
                    staticClass: "c-header-card__close-button c-header-card__close-button--absolute",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.close
                    }
                }, [n("i", {
                    staticClass: "material-icons c-header-card__close-button__icon"
                }, [e._v(" close ")])]) : e._e(), n("router-view")], 1)
            },
            A = [],
            M = n("2f62"),
            P = "Opera",
            T = "Chrome",
            I = "Safari",
            L = "Firefox",
            D = "MSIE",
            N = "Unknown",
            R = {
                OPERA: P,
                CHROME: T,
                SAFARI: I,
                FIREFOX: L,
                MSIE: D,
                UNKNOWN: N
            },
            j = function() {
                return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? P : -1 != navigator.userAgent.indexOf("Chrome") ? T : -1 != navigator.userAgent.indexOf("Safari") ? I : -1 != navigator.userAgent.indexOf("Firefox") ? L : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? D : N
            };
        function B(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function $(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? B(Object(n), !0).forEach((function(t) {
                    U(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function U(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var F = {
                computed: $($({}, Object(M["b"])(["isChatbox"])), {}, {
                    highContrastEnabled: function() {
                        return this.$store.state.options.highContrast
                    }
                }),
                mounted: function() {
                    this.$store.dispatch("setChatboxMode", "true" === this.$route.query.chatbox),
                    j() === R.FIREFOX && document.documentElement.classList.add("is-firefox")
                },
                methods: {
                    close: function() {
                        window.parent && window.parent.postMessage("csml:webapp:close", "*")
                    }
                }
            },
            G = F,
            V = (n("034f"), n("2877")),
            H = Object(V["a"])(G, x, A, !1, null, null, null),
            W = H.exports,
            z = n("1ad2"),
            q = n.n(z),
            K = n("8c4f"),
            Y = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "c-index u-full-w-h",
                    class: {
                        "c-index--no-topbar": !e.showTopbar
                    }
                }, [s("util-loading-wrapper", {
                    staticClass: "u-full-w-h",
                    attrs: {
                        "is-loading": e.isLoading
                    }
                }, [e.error404 || e.display404Error ? s("div", {
                    staticClass: "c-index__404-notice"
                }, [s("img", {
                    staticClass: "c-index__404-notice__img",
                    attrs: {
                        src: n("2291")
                    }
                }), s("h1", {
                    staticClass: "c-index__404-notice__title"
                }, [e._v(" 404 ")]), s("p", {
                    staticClass: "c-index__404-notice__text"
                }, [e._v(" " + e._s(e.$t("Index.errors.404")) + " ")])]) : e.error500 ? s("div", {
                    staticClass: "c-index__500-notice"
                }, [s("img", {
                    staticClass: "c-index__500-notice__img",
                    attrs: {
                        src: n("2291")
                    }
                }), s("h1", {
                    staticClass: "c-index__500-notice__title"
                }, [e._v(" " + e._s(e.$t("Index.errors.500-title")) + " ")]), s("p", {
                    staticClass: "c-index__500-notice__text"
                }, [e._v(" " + e._s(e.$t("Index.errors.500-text")) + " ")])]) : s("div", {
                    staticClass: "c-index__wrapper"
                }, [s("left-side-bar"), s("div", {
                    staticClass: "c-index__spacer js-index-spacer--left"
                }), s("keep-alive", [s(e.currentDiscussionComponent, e._b({
                    tag: "component"
                }, "component", e.currentDiscussionComponentProps, !1))], 1), s("div", {
                    staticClass: "c-index__spacer js-index-spacer--right"
                }), s("right-side-bar")], 1)]), s("modals-container")], 1)
            },
            J = [],
            Q = n("a34a"),
            X = n.n(Q),
            Z = n("c64e"),
            ee = n.n(Z),
            te = n("bbd7"),
            ne = n("8a60"),
            se = n.n(ne);
        var ae = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: e.handleClickOutside,
                        expression: "handleClickOutside"
                    }],
                    staticClass: "c-right-side-bar"
                }, [n("div", {
                    staticClass: "c-right-side-bar__wrapper js-right-side-bar__wrapper"
                }, [n("header", {
                    staticClass: "c-right-side-bar__header"
                }, [n("h1", {
                    staticClass: "c-right-side-bar__header__title"
                }, [e._v(" " + e._s(e.$t("RightSideBar.theApps")) + " ")]), n("button", {
                    staticClass: "c-right-side-bar__header__close-button",
                    on: {
                        click: function(t) {
                            e.isOpen = !1
                        }
                    }
                }, [n("i", {
                    staticClass: "material-icons c-right-side-bar__header__close-button__icon"
                }, [e._v(" close ")])])]), n("apps-card", {
                    staticClass: "c-right-side-bar__apps-card"
                })], 1)])
            },
            ie = [],
            re = n("e67d"),
            oe = n.n(re),
            ce = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.showCsmlApps ? n("div", {
                    staticClass: "c-card c-apps-card"
                }, [n("util-loading-wrapper", {
                    staticClass: "c-apps-card__loading-wrapper",
                    attrs: {
                        "is-loading": e.isLoading
                    }
                }, [n("card-accordion-panel", {
                    attrs: {
                        name: "apps-panel",
                        title: "Menu"
                    }
                }, [n("keep-alive", [n(e.currentAppsListComponent, e._b({
                    tag: "component"
                }, "component", e.currentAppsListComponentProps, !1))], 1)], 1)], 1)], 1) : e._e()
            },
            ue = [],
            le = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", {
                    staticClass: "c-card-accordion-panel",
                    attrs: {
                        "data-restored": e.restored
                    }
                }, [n("div", {
                    staticClass: "c-card-accordion-panel__trigger",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.togglePanel
                    }
                }, [n("h1", {
                    staticClass: "c-card-accordion-panel__trigger__title"
                }, [e._v(" " + e._s(e.title) + " ")]), n("i", {
                    staticClass: "c-card-accordion-panel__trigger__icon material-icons",
                    style: e.triggerIconStyleBinding
                }, [e._v(" keyboard_arrow_down ")])]), n("div", {
                    staticClass: "js-panel-content c-card-accordion-panel__content",
                    attrs: {
                        "data-visible": e.isContentVisible
                    }
                }, [e._t("default")], 2)])
            },
            de = [],
            pe = {
                name: "card-accordion-panel",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    name: {
                        type: String,
                        default: null
                    },
                    visibleByDefault: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        isContentVisible: !1,
                        restored: !1
                    }
                },
                computed: {
                    triggerIconStyleBinding: function() {
                        return {
                            transform: "rotate(".concat(this.isContentVisible ? 180 : 0, "deg)")
                        }
                    }
                },
                watch: {
                    isContentVisible: {
                        immediate: !0,
                        handler: function() {
                            this.updatePanelVisibility()
                        }
                    }
                },
                mounted: function() {
                    this.isContentVisible = this.visibleByDefault,
                    this.restorePreviousPanelState()
                },
                methods: {
                    restorePreviousPanelState: function() {
                        if (this.name) {
                            this.restored = !0;
                            var e = this.$session.get("cl-card-accordion-panel:".concat(this.name));
                            if ("undefined" === typeof e)
                                return;
                            this.isContentVisible = Boolean(e)
                        }
                    },
                    savePanelState: function() {
                        this.name && this.$session.set("cl-card-accordion-panel:".concat(this.name), this.isContentVisible)
                    },
                    updatePanelVisibility: function() {
                        var e,
                            t = null === (e = this.$el) || void 0 === e ? void 0 : e.querySelector(".js-panel-content");
                        t && (this.isContentVisible ? t.style.maxHeight = "".concat(t.scrollHeight, "px") : t.style.maxHeight = null)
                    },
                    togglePanel: function() {
                        this.restored = !1,
                        this.isContentVisible = !this.isContentVisible,
                        this.savePanelState(),
                        this.$emit("toggle", this.isContentVisible)
                    }
                }
            },
            fe = pe,
            me = (n("ca8e"), Object(V["a"])(fe, le, de, !1, null, null, null)),
            ge = me.exports,
            he = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", {
                    staticClass: "c-apps-list",
                    class: e.classBinding
                }, e._l(e.apps, (function(t, s) {
                    return n("li", {
                        key: s,
                        staticClass: "c-apps-list__item",
                        class: {
                            "is-running": e.isAppRunning(t)
                        },
                        attrs: {
                            role: "button"
                        },
                        on: {
                            click: function(n) {
                                return e.launchApp(t)
                            }
                        }
                    }, [t.logo ? n("aside", {
                        staticClass: "c-apps-list__item__aside"
                    }, [t.is_icon ? [n("i", {
                        staticClass: "c-apps-list__item__aside__icon material-icons"
                    }, [e._v(" " + e._s(t.logo) + " ")])] : [n("img", {
                        staticClass: "c-apps-list__item__aside__img",
                        attrs: {
                            src: t.logo,
                            alt: e.$t("AppsList.aria.appsLogoAlt")
                        }
                    })]], 2) : e._e(), n("article", {
                        staticClass: "c-apps-list__item__article"
                    }, [n("h2", {
                        staticClass: "c-apps-list__item__article__title"
                    }, [e._v(" " + e._s(t.title) + " "), n("transition", {
                        attrs: {
                            name: "cl-transition__fade"
                        }
                    }, [e.isAppRunning(t) || e.isAppBooting(t) ? n("span", {
                        staticClass: "c-apps-list__item__article__title__indicator"
                    }, [e.isAppBooting(t) ? [e._v(" " + e._s(e.$t("AppsList.booting")) + " ")] : [e._v(" " + e._s(e.$t("AppsList.running")) + " ")]], 2) : e._e()])], 1), n("p", {
                        staticClass: "c-apps-list__item__article__description"
                    }, [e._v(" " + e._s(t.description) + " ")])])])
                })), 0)
            },
            be = [],
            _e = n("0ee3");
        function ve(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var ye = {
                name: "apps-list",
                props: {
                    apps: {
                        type: Array,
                        required: !0
                    },
                    token: {
                        type: String,
                        required: !0
                    },
                    displayMode: {
                        type: String,
                        default: "apps-card",
                        validator: function(e) {
                            return ["apps-card", "apps-mobile-panel"].indexOf(e) > -1
                        }
                    }
                },
                data: function() {
                    return {
                        isLoading: !1,
                        runningFlowUuid: null,
                        bootingFlowUuid: null
                    }
                },
                computed: {
                    classBinding: function() {
                        return ve({}, "c-apps-list--".concat(this.displayMode, "-mode"), !0)
                    }
                },
                created: function() {
                    this.setupEventsListener()
                },
                methods: {
                    isAppRunning: function(e) {
                        return !1
                    },
                    isAppBooting: function(e) {
                        return !1
                    },
                    setupEventsListener: function() {
                        var e = this;
                        this.$eventBus(this.token).$on(_e["a"].SET_CURRENT_CSML_FLOW, (function(t) {
                            e.runningFlowUuid = t,
                            e.bootingFlowUuid = null
                        }))
                    },
                    launchApp: function(e) {
                        var t = this,
                            n = e.payload,
                            s = e.flow_uuid,
                            a = this.bootingFlowUuid === s,
                            i = this.runningFlowUuid === s;
                        a || i || (this.bootingFlowUuid = s, setTimeout((function() {
                            t.bootingFlowUuid = null
                        }), 5e3), this.$service("ask").sendAction(n), _e["b"].$emit(_e["a"].CSML_FLOW_CHANGED))
                    }
                }
            },
            we = ye,
            Ee = (n("eb04"), Object(V["a"])(we, he, be, !1, null, null, null)),
            ke = Ee.exports;
        function Se(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function Ce(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        Se(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        Se(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function Oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oe(Object(n), !0).forEach((function(t) {
                    Ae(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function Ae(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Me = {
                name: "apps-card",
                components: {
                    CardAccordionPanel: ge,
                    UtilLoadingWrapper: te["UtilLoadingWrapper"],
                    AppsList: ke
                },
                data: function() {
                    return {
                        apps: [],
                        componentsMap: {},
                        isLoading: !0
                    }
                },
                created: function() {
                    this.loadApps()
                },
                computed: xe(xe({}, Object(M["b"])(["showCsmlApps", "currentAppsListComponent"])), {}, {
                    currentAppsListComponentProps: function() {
                        return {
                            token: this.$store.state.channels.currentToken,
                            displayMode: "apps-card",
                            apps: this.apps
                        }
                    }
                }),
                methods: {
                    loadApps: function() {
                        var e = this;
                        return Ce(X.a.mark((function t() {
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return e.isLoading = !0, t.next = 3, e.$service("requester").execute("loadCsmlApps");
                                    case 3:
                                        e.apps = t.sent,
                                        e.isLoading = !1;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    }
                }
            },
            Pe = Me,
            Te = (n("ed1e"), Object(V["a"])(Pe, ce, ue, !1, null, null, null)),
            Ie = Te.exports,
            Le = n("87d4");
        function De(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Re(e, t, n) {
            return t && Ne(e.prototype, t), n && Ne(e, n), e
        }
        var je = function() {
                function e() {
                    De(this, e)
                }
                return Re(e, null, [{
                    key: "attachListeners",
                    value: function(e) {
                        function t(e, t) {
                            e && t && (t.style.width = "".concat(e.clientWidth, "px"))
                        }
                        function n(e, t) {
                            e && t && (t.style.height = "".concat(e.clientHeight, "px"))
                        }
                        function s(e) {
                            var t;
                            return t = "string" === typeof e ? document.querySelector(e) : e, t
                        }
                        function a(e) {
                            return e ? (t = "string" === typeof e ? document.querySelector(e) : e, t) : null;
                            var t
                        }
                        e.forEach((function(e) {
                            var i = e.source,
                                r = e.target,
                                o = e.targets,
                                c = e.followWidth,
                                u = e.followHeight,
                                l = e.onWidthResize,
                                d = void 0 === l ? t : l,
                                p = e.onHeightResize,
                                f = void 0 === p ? n : p,
                                m = s(i),
                                g = null;
                            function h() {
                                c && d(m, o || g),
                                u && f(m, o || g)
                            }
                            o ? Object.keys(o).forEach((function(e) {
                                o[e] = a(o[e])
                            })) : r && (g = a(r)),
                            new Le["ResizeSensor"](m, h),
                            h()
                        }))
                    }
                }]), e
            }(),
            Be = je,
            $e = {
                name: "right-side-bar",
                components: {
                    AppsCard: Ie
                },
                directives: {
                    ClickOutside: oe.a
                },
                data: function() {
                    return {
                        isOpen: !1
                    }
                },
                watch: {
                    isOpen: function() {
                        var e = "is-open",
                            t = this.$el.classList;
                        this.isOpen ? (t.add(e), _e["b"].$emit(_e["a"].SIDEBAR_OPENED)) : (t.remove(e), _e["b"].$emit(_e["a"].SIDEBAR_CLOSED))
                    }
                },
                mounted: function() {
                    this.attachResizeListeners(),
                    this.setupEventListener()
                },
                methods: {
                    handleClickOutside: function(e) {
                        var t = "js-header-card__right-open-button",
                            n = !e.target.classList.contains(t);
                        n && (this.isOpen = !1)
                    },
                    setupEventListener: function() {
                        var e = this;
                        _e["b"].$on(_e["a"].OPEN_SIDEBAR, (function(t) {
                            "right" === t && (e.isOpen = !0)
                        })),
                        _e["b"].$on(_e["a"].CLOSE_SIDEBAR, (function(t) {
                            "right" === t && (e.isOpen = !1)
                        })),
                        _e["b"].$on([_e["a"].DISCUSSION_CHANGED, _e["a"].CSML_FLOW_CHANGED], (function() {
                            e.isOpen = !1
                        }))
                    },
                    attachResizeListeners: function() {
                        var e = [{
                            source: ".js-right-side-bar__wrapper",
                            target: ".js-index-spacer--right",
                            followWidth: !0,
                            followHeight: !1,
                            onWidthResize: function(e, t) {
                                t.style.minWidth = e.offsetWidth + "px"
                            }
                        }];
                        Be.attachListeners(e)
                    },
                    handleResize: function(e) {
                        var t = e.width,
                            n = document.querySelector(".js-index-spacer--right");
                        n.style.width = "".concat(t, "px")
                    }
                }
            },
            Ue = $e,
            Fe = (n("ad44"), Object(V["a"])(Ue, ae, ie, !1, null, null, null)),
            Ge = Fe.exports,
            Ve = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: e.handleClickOutside,
                        expression: "handleClickOutside"
                    }],
                    staticClass: "c-left-side-bar"
                }, [n("div", {
                    staticClass: "c-left-side-bar__wrapper js-left-side-bar__wrapper"
                }, [n("bot-card", {
                    staticClass: "c-left-side-bar__first-card"
                }), n("div", {
                    staticClass: "c-left-side-bar__spacing o-spacing-24--h"
                }), n("discussions-list-card")], 1), n("div", {
                    staticClass: "c-left-side-bar__collapse-button",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.close
                    }
                }, [e._m(0)])])
            },
            He = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("span", {
                    staticClass: "c-left-side-bar__collapse-button__icons"
                }, [n("i", {
                    staticClass: "material-icons"
                }, [e._v("keyboard_arrow_left")]), n("i", {
                    staticClass: "material-icons"
                }, [e._v("keyboard_arrow_left")])])
            }],
            We = n("c8b5"),
            ze = n.n(We),
            qe = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-card c-bot-card"
                }, [n("header", {
                    staticClass: "c-bot-card__header"
                }, [n("div", {
                    staticClass: "c-bot-card__header__banner",
                    style: e.headerBannerStyle,
                    attrs: {
                        role: "banner"
                    }
                }), n("div", {
                    staticClass: "c-bot-card__header__description"
                }, [n("div", {
                    staticClass: "c-bot-card__header__description__img-box"
                }, [n("img", {
                    staticClass: "c-bot-card__header__description__img-box__img",
                    attrs: {
                        src: e.currentBot.imageUrl,
                        alt: e.$t("gen.aria.botImageAlt")
                    }
                })]), n("h1", {
                    staticClass: "c-bot-card__header__description__title"
                }, [e._v(" " + e._s(e.currentChannel.channel_title) + " ")]), n("p", {
                    directives: [{
                        name: "markdown",
                        rawName: "v-markdown",
                        value: e.currentChannel.channel_description,
                        expression: "currentChannel.channel_description"
                    }],
                    staticClass: "c-bot-card__header__description__text"
                })])]), n("hr"), n("card-accordion-panel", {
                    staticClass: "c-bot-card__options-panel",
                    attrs: {
                        name: "option-panel",
                        title: e.$t("BotCard.optionsPanelTitle"),
                        "visible-by-default": !0
                    }
                }, [n("ul", {
                    staticClass: "c-bot-card__options-panel"
                }, [n("li", {
                    staticClass: "c-bot-card__options-panel__high-contrast c-bot-card__options-panel__item",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.toggleHighContrastMode
                    }
                }, [n("p", {
                    staticClass: "c-bot-card__options-panel__item__text"
                }, [e._v(" " + e._s(e.$t("BotCard.highContrastMode")) + " ")]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.highContrastEnabled,
                        expression: "highContrastEnabled"
                    }],
                    staticClass: "c-bot-card__options-panel__high-contrast__checkbox",
                    attrs: {
                        "aria-checked": e.highContrastEnabled,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.highContrastEnabled) ? e._i(e.highContrastEnabled, null) > -1 : e.highContrastEnabled
                    },
                    on: {
                        change: function(t) {
                            var n = e.highContrastEnabled,
                                s = t.target,
                                a = !!s.checked;
                            if (Array.isArray(n)) {
                                var i = null,
                                    r = e._i(n, i);
                                s.checked ? r < 0 && (e.highContrastEnabled = n.concat([i])) : r > -1 && (e.highContrastEnabled = n.slice(0, r).concat(n.slice(r + 1)))
                            } else
                                e.highContrastEnabled = a
                        }
                    }
                })]), e.speechToTextIsAvailable && e.displayAudioModeButton ? n("li", {
                    staticClass: "c-bot-card__options-panel__screen-reader c-bot-card__options-panel__item",
                    on: {
                        click: e.toggleScreenReaderMode
                    }
                }, [n("p", {
                    staticClass: "c-bot-card__options-panel__item__text"
                }, [e._v(" " + e._s(e.$t("BotCard.screenReaderMode")) + " ")]), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.screenReaderEnabled,
                        expression: "screenReaderEnabled"
                    }],
                    staticClass: "c-bot-card__options-panel__screen-reader__checkbox",
                    attrs: {
                        "aria-checked": e.screenReaderEnabled,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.screenReaderEnabled) ? e._i(e.screenReaderEnabled, null) > -1 : e.screenReaderEnabled
                    },
                    on: {
                        change: function(t) {
                            var n = e.screenReaderEnabled,
                                s = t.target,
                                a = !!s.checked;
                            if (Array.isArray(n)) {
                                var i = null,
                                    r = e._i(n, i);
                                s.checked ? r < 0 && (e.screenReaderEnabled = n.concat([i])) : r > -1 && (e.screenReaderEnabled = n.slice(0, r).concat(n.slice(r + 1)))
                            } else
                                e.screenReaderEnabled = a
                        }
                    }
                })]) : e._e(), n("li", {
                    staticClass: "c-bot-card__options-panel__screen-reader c-bot-card__options-panel__item",
                    on: {
                        click: e.restartConversation
                    }
                }, [n("p", {
                    staticClass: "c-bot-card__options-panel__item__text"
                }, [e._v(" " + e._s(e.$t("BotCard.restartConversation")) + " ")])])])]), e.currentChannel.cgu_url ? [n("hr"), n("div", {
                    staticClass: "c-bot-card__terms-conditions"
                }, [n("a", {
                    staticClass: "c-bot-card__terms-conditions__text",
                    attrs: {
                        href: e.currentChannel.cgu_url,
                        target: "_blank"
                    }
                }, [e._v(" " + e._s(e.$t("BotCard.termsAndConditions")) + " ")])])] : e._e(), e.currentChannel.privacy_url ? [n("hr"), n("div", {
                    staticClass: "c-bot-card__terms-conditions"
                }, [n("a", {
                    staticClass: "c-bot-card__terms-conditions__text",
                    attrs: {
                        href: e.currentChannel.privacy_url,
                        target: "_blank"
                    }
                }, [e._v(" " + e._s(e.$t("BotCard.privacyPolicy")) + " ")])])] : e._e(), e.showLogoutSection ? [n("hr"), n("div", {
                    staticClass: "c-bot-card__logout"
                }, [n("ui-button", {
                    staticClass: "c-bot-card__logout__button",
                    attrs: {
                        "icon-class": "c-bot-card__logout__button__icon",
                        "icon-name": "exit-to-app",
                        theme: "link"
                    },
                    on: {
                        click: e.logout
                    }
                }, [e._v(" " + e._s(e.$t("gen.logout")) + " ")])], 1)] : e._e()], 2)
            },
            Ke = [];
        function Ye(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ye(Object(n), !0).forEach((function(t) {
                    Qe(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function Qe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Xe = {
                name: "bot-card",
                components: {
                    UiButton: te["UiButton"],
                    CardAccordionPanel: ge
                },
                computed: Je(Je(Je({}, Object(M["c"])({
                    highContrastEnabled: function(e) {
                        return e.options.highContrast
                    },
                    screenReaderEnabled: function(e) {
                        return e.options.screenReader
                    }
                })), Object(M["b"])(["currentBot", "currentChannel", "currentChannelStyle"])), {}, {
                    headerBannerStyle: function() {
                        var e = this.currentChannelStyle,
                            t = e.header_card_image,
                            n = e.header_card_color,
                            s = {};
                        return n && (s.background = n), t && Object.assign(s, {
                            "background-image": t && 'url("'.concat(t, '")'),
                            "background-size": t && "cover",
                            "background-repeat": t && "no-repeat"
                        }), s
                    },
                    displayAudioModeButton: function() {
                        var e;
                        return !(null !== (e = this.currentChannelStyle) && void 0 !== e && e.hide_audio_mode)
                    },
                    speechToTextIsAvailable: function() {
                        return Boolean(window.speechSynthesis)
                    },
                    showLogoutSection: function() {
                        return this.currentChannel.sso_status && this.$session.get("jwt")
                    }
                }),
                methods: {
                    toggleHighContrastMode: function() {
                        this.$store.dispatch("toggleOption", "high-contrast")
                    },
                    toggleScreenReaderMode: function() {
                        this.$store.dispatch("toggleOption", "screen-reader")
                    },
                    restartConversation: function() {
                        this.$eventBus(this.currentChannel.token).$emit(_e["a"].RESTART_CONVERSATION)
                    },
                    logout: function() {
                        this.$service("auth").logout()
                    }
                }
            },
            Ze = Xe,
            et = (n("1e5b"), n("18b1"), Object(V["a"])(Ze, qe, Ke, !1, null, null, null)),
            tt = et.exports,
            nt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.formattedDiscussionsList.length > 1 ? n("div", {
                    staticClass: "c-card c-discussions-list-card"
                }, [n("card-accordion-panel", {
                    attrs: {
                        name: "discussions-list-panel",
                        title: e.$t("DiscussionsListCard.title")
                    }
                }, [n("hr"), n("ul", {
                    staticClass: "c-discussions-list-card__list"
                }, e._l(e.formattedDiscussionsList, (function(t) {
                    return n("li", {
                        key: t.token,
                        staticClass: "c-discussions-list-card__list__item",
                        class: {
                            "is-current": t.token === e.currentToken
                        },
                        attrs: {
                            "data-disabled": t.isDisabled
                        },
                        on: {
                            click: function(n) {
                                return e.changeDiscussion(t.token)
                            }
                        }
                    }, [n("div", {
                        staticClass: "c-discussions-list-card__list__item__header o-rel-wrapper"
                    }, [n("transition", {
                        attrs: {
                            name: "cl-transition__fade"
                        }
                    }, [t.unreadMessagesCount > 0 ? n("div", {
                        staticClass: "c-discussions-list-card__list__item__unread"
                    }, [n("span", {
                        staticClass: "c-discussions-list-card__list__item__unread__text"
                    }, [t.unreadMessagesCount > 9 ? [e._v(" +9 ")] : [e._v(" " + e._s(t.unreadMessagesCount) + " ")]], 2)]) : e._e()]), n("div", {
                        staticClass: "c-discussions-list-card__list__item__header__img-box"
                    }, [n("img", {
                        staticClass: "c-discussions-list-card__list__item__header__img-box__img",
                        attrs: {
                            src: t.botImageUrl,
                            alt: ""
                        }
                    })])], 1), n("div", {
                        staticClass: "o-spacing-12--w"
                    }), n("div", {
                        staticClass: "c-discussions-list-card__list__item__wrapper"
                    }, [n("h2", {
                        staticClass: "c-discussions-list-card__list__item__wrapper__title"
                    }, [e._v(" " + e._s(t.title) + " ")]), t.formattedLastMessage ? n("div", {
                        directives: [{
                            name: "markdown",
                            rawName: "v-markdown",
                            value: t.formattedLastMessage,
                            expression: "discussion.formattedLastMessage"
                        }],
                        staticClass: "c-discussions-list-card__list__item__wrapper__last"
                    }) : e._e(), t.isDisabled ? n("span", {
                        staticClass: "c-discussions-list-card__list__item__wrapper__offline"
                    }, [e._v(" " + e._s(e.$t("DiscussionsListCard.disabledLabel")) + " ")]) : e._e()])])
                })), 0)])], 1) : e._e()
            },
            st = [];
        function at(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function it(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? at(Object(n), !0).forEach((function(t) {
                    rt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function rt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var ot = {
                name: "discussions-list-card",
                components: {
                    CardAccordionPanel: ge
                },
                computed: it(it({}, Object(M["c"])({
                    currentToken: function(e) {
                        return e.channels.currentToken
                    },
                    discussionsList: function(e) {
                        return e.discussions.discussionsList
                    }
                })), {}, {
                    formattedDiscussionsList: function() {
                        var e = this;
                        return this.discussionsList.reduce((function(t, n) {
                            var s = n.token,
                                a = e.$store.getters.getChannel(s);
                            if (a) {
                                var i = a.channel_title,
                                    r = a.active,
                                    o = e.$store.getters.getLastMessage(s),
                                    c = e.formatLastMessageDisplay(o),
                                    u = e.$store.getters.getUnreadMessagesCount(s),
                                    l = e.$store.getters.getBot(s),
                                    d = l.imageUrl;
                                return t.push({
                                    token: s,
                                    title: i,
                                    isDisabled: !r,
                                    formattedLastMessage: c,
                                    unreadMessagesCount: u,
                                    botImageUrl: d
                                }), t
                            }
                            return t
                        }), [])
                    }
                }),
                methods: {
                    formatLastMessageDisplay: function(e) {
                        if (!e)
                            return "";
                        var t = e.content_type;
                        return "text" === t ? e.text : "image" === t ? "_".concat(this.$i18n.t("DiscussionsListCard.lastMessageFormats.image"), "_") : "video" === t ? "_".concat(this.$i18n.t("DiscussionsListCard.lastMessageFormats.video"), "_") : "url" === t ? "_".concat(e.title || e.url, "_") : ""
                    },
                    changeDiscussion: function(e) {
                        var t = this.$route.params.groupToken;
                        this.$service("channels").formatAndReplaceUrl(e, t),
                        this.$store.dispatch("setCurrentToken", e),
                        this.$store.dispatch("resetUnreadMessagesCount", e),
                        _e["b"].$emit(_e["a"].DISCUSSION_CHANGED)
                    }
                }
            },
            ct = ot,
            ut = (n("d170"), Object(V["a"])(ct, nt, st, !1, null, null, null)),
            lt = ut.exports,
            dt = {
                name: "left-side-bar",
                components: {
                    DiscussionsListCard: lt,
                    BotCard: tt
                },
                directives: {
                    ClickOutside: oe.a
                },
                data: function() {
                    return {
                        isOpen: !1
                    }
                },
                mounted: function() {
                    this.attachResizeListeners(),
                    this.setupEventListener()
                },
                methods: {
                    open: function() {
                        var e = this,
                            t = "is-open",
                            n = this.$el.classList;
                        n.add(t),
                        _e["b"].$emit(_e["a"].SIDEBAR_OPENED),
                        setTimeout((function() {
                            e.isOpen = !0
                        }), 300)
                    },
                    close: function() {
                        var e = this,
                            t = "is-open",
                            n = this.$el.classList;
                        n.remove(t),
                        _e["b"].$emit(_e["a"].SIDEBAR_CLOSED),
                        setTimeout((function() {
                            e.isOpen = !1
                        }), 300)
                    },
                    handleClickOutside: function() {
                        this.isOpen && this.close()
                    },
                    setupEventListener: function() {
                        var e = this;
                        _e["b"].$on(_e["a"].OPEN_SIDEBAR, (function(t) {
                            "left" === t && e.open()
                        })),
                        _e["b"].$on(_e["a"].CLOSE_SIDEBAR, (function(t) {
                            "left" === t && e.close()
                        })),
                        _e["b"].$on([_e["a"].DISCUSSION_CHANGED, _e["a"].CSML_FLOW_CHANGED], (function() {
                            e.close()
                        }))
                    },
                    attachResizeListeners: function() {
                        var e = [{
                            source: ".js-left-side-bar__wrapper",
                            target: ".js-index-spacer--left",
                            followWidth: !0,
                            followHeight: !1,
                            onWidthResize: function(e, t) {
                                t.style.minWidth = "".concat(e.offsetWidth, "px")
                            }
                        }];
                        Be.attachListeners(e)
                    },
                    attachSwipeListeners: function() {
                        var e = this,
                            t = new ze.a(document.body, {
                                direction: ze.a.DIRECTION_HORIZONTAL
                            });
                        t.on("swipe", (function(t) {
                            4 === t.direction && e.open(),
                            2 === t.direction && e.close()
                        }))
                    }
                }
            },
            pt = dt,
            ft = (n("f56d"), Object(V["a"])(pt, Ve, He, !1, null, null, null)),
            mt = ft.exports,
            gt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "relative"
                }, [n("div", {
                    staticClass: "text-right mx-2 mb-1"
                }, [n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showBranding,
                        expression: "showBranding"
                    }],
                    staticClass: "c-input-card__powered-by__text"
                }, [e._m(0)])]), n("div", {
                    staticClass: "c-card c-input-card",
                    class: {
                        "border-none": e.isDraggingOver
                    },
                    attrs: {
                        "data-disabled": e.isInputCardDisabled,
                        "data-inactive-channel": e.showInactiveChannelNotice
                    },
                    on: {
                        drop: function(t) {
                            return t.preventDefault(), e.handleDrop(t)
                        },
                        dragover: function(t) {
                            return t.preventDefault(), e.handleDragOver(t)
                        }
                    }
                }, [e.isDraggingOver ? n("div", {
                    staticClass: "c-input-card__dropzone"
                }, [e._v(" " + e._s(e.$t("InputCard.dropFilesHere")) + " ")]) : e._e(), e.showInactiveChannelNotice ? [n("h1", {
                    staticClass: "c-input-card__inactive-channel"
                }, [e._v(" " + e._s(e.$t("InputCard.inactiveChannel")) + " ")])] : [n("div", {
                    staticClass: "c-input-card__wrapper"
                }, [n("text-input", {
                    attrs: {
                        token: e.token
                    }
                })], 1)]], 2)])
            },
            ht = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "flex justify-end"
                }, [n("div", {
                    staticClass: "opacity-50 transition duration-200 ease-in-out hover:opacity-75 flex items-center"
                }, [n("span", {
                    staticClass: "mr-1 text-blue-900 cursor-default"
                }, [e._v("powered by")]), n("a", {
                    attrs: {
                        href: "https://google.com",
                        target: "_blank",
                        draggable: "false"
                    }
                }, [n("img", {
                    staticClass: "c-input-card__powered-by__img",
                    attrs: {
                        src: "https://res.cloudinary.com/db63jz2w7/image/upload/v1635396623/Frame_6_ixrmhc.png",
                        alt: "Rentrise logo",
                        draggable: "false"
                    }
                })])])])
            }],
            bt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("form", {
                    staticClass: "c-text-input",
                    on: {
                        submit: function(t) {
                            t.preventDefault(),
                            e.submitText(),
                            e.submitFiles()
                        }
                    }
                }, ["ENABLED" === e.autocompleteState ? n("text-input-autocomplete-panel", {
                    attrs: {
                        token: e.token,
                        terms: e.text,
                        parent: e.$el,
                        "is-text-input-focused": e.isFocused
                    },
                    on: {
                        submit: e.submitAutocomplete
                    }
                }) : e._e(), n("upload-panel", {
                    attrs: {
                        files: e.files
                    },
                    on: {
                        "delete-file": e.deleteFile
                    }
                }), n("div", {
                    staticClass: "c-text-input__wrapper"
                }, [e.displayDebugButton ? n("debug-button", {
                    attrs: {
                        token: e.token
                    }
                }) : e._e(), e.displayFileUploadButton ? n("upload-input", {
                    on: {
                        input: e.handleFileInput
                    }
                }) : e._e(), n("div", {
                    staticClass: "o-spacing-4--w"
                }), n("div", {
                    staticClass: "bg-cl-grey-100 flex w-full rounded-2xl",
                    class: {
                        "shadow-outline": e.isFocused
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.text,
                        expression: "text"
                    }],
                    ref: "textInput",
                    staticClass: "c-text-input__input mousetrap focus:outline-none",
                    attrs: {
                        "aria-label": e.$t("TextInput.aria.label"),
                        placeholder: e.textInputPlaceholder,
                        autofocus: "",
                        minlength: e.minLength,
                        maxlength: e.maxLength ? e.maxLength : e.text.length,
                        disabled: e.isInSpeechMode
                    },
                    domProps: {
                        value: e.text
                    },
                    on: {
                        keydown: [e.handleKeyboardInput, function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleKeyboardSubmit(t)
                        }],
                        blur: e.handleBlur,
                        focus: e.handleFocus,
                        input: [function(t) {
                            t.target.composing || (e.text = t.target.value)
                        }, e.noop]
                    }
                }), n("transition", {
                    attrs: {
                        name: "cl-transition__fade",
                        mode: "out-in"
                    }
                }, [e.displaySendButton ? n("button", {
                    ref: "sendButton",
                    staticClass: "c-text-input__submit",
                    attrs: {
                        disabled: !e.canSubmit
                    }
                }, [n("i", {
                    staticClass: "material-icons c-text-input__submit__icon"
                }, [e._v(" send ")]), n("span", {
                    staticClass: "c-text-input__submit__text"
                }, [e._v(" " + e._s(e.$t("TextInput.submitText")) + " ")])]) : e._e(), e.displaySendButton ? e._e() : n("speech-input", {
                    ref: "speechInput",
                    staticClass: "c-text-input__speech-input",
                    attrs: {
                        token: e.token,
                        "is-speech-mode": e.isInSpeechMode
                    },
                    on: {
                        "start-recording": e.handleSpeechStart,
                        "stop-recording": e.handleSpeechStop,
                        input: e.handleSpeechInput
                    }
                })], 1)], 1)], 1)], 1)
            },
            _t = [],
            vt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-debug-button"
                }, [n("div", {
                    staticClass: "c-debug-button__button js-debug-button",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation(),
                            e.showPanel = !e.showPanel
                        }
                    }
                }, [n("i", {
                    staticClass: "material-icons c-debug-button__button__icon"
                }, [e._v("settings")])]), n("transition", {
                    attrs: {
                        name: "cl-transition__fade"
                    }
                }, [e.showPanel ? n("debug-panel", {
                    attrs: {
                        token: e.token
                    },
                    on: {
                        close: function(t) {
                            e.showPanel = !1
                        }
                    }
                }) : e._e()], 1)], 1)
            },
            yt = [],
            wt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: e.handleClickOutside,
                        expression: "handleClickOutside"
                    }],
                    staticClass: "c-debug-panel"
                }, [n("li", {
                    staticClass: "c-debug-panel__item",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.clearMessages
                    }
                }, [n("i", {
                    staticClass: "material-icons c-debug-panel__item__icon"
                }, [e._v("clear")]), e._v(" Clear messages ")]), n("li", {
                    staticClass: "c-debug-panel__item",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.resetMemory
                    }
                }, [n("i", {
                    staticClass: "material-icons c-debug-panel__item__icon"
                }, [e._v("autorenew")]), e._v(" Reset memory ")])])
            },
            Et = [],
            kt = {
                name: "debug-panel",
                directives: {
                    ClickOutside: oe.a
                },
                props: {
                    token: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        items: [{
                            icon: "clear",
                            label: "Clear view"
                        }, {
                            icon: "autorenew",
                            label: "Clear view"
                        }]
                    }
                },
                methods: {
                    handleClickOutside: function(e) {
                        var t = "js-debug-button",
                            n = !e.target.classList.contains(t);
                        n && this.$emit("close")
                    },
                    clearMessages: function() {
                        this.$eventBus(this.token).$emit(_e["a"].CLEAR_MESSAGES),
                        this.$emit("close")
                    },
                    resetMemory: function() {
                        this.$eventBus(this.token).$emit(_e["a"].RESET_MEMORY),
                        this.$emit("close")
                    }
                }
            },
            St = kt,
            Ct = (n("23cd"), Object(V["a"])(St, wt, Et, !1, null, null, null)),
            Ot = Ct.exports,
            xt = {
                name: "debug-button",
                components: {
                    DebugPanel: Ot
                },
                props: {
                    token: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        showPanel: !1
                    }
                }
            },
            At = xt,
            Mt = (n("689c"), Object(V["a"])(At, vt, yt, !1, null, null, null)),
            Pt = Mt.exports,
            Tt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.files.length ? n("div", {
                    staticClass: "c-upload-panel"
                }, [n("ul", {
                    staticClass: "c-upload-panel__list"
                }, e._l(e.files, (function(t, s) {
                    return n("li", {
                        key: s,
                        staticClass: "c-upload-panel__list__item"
                    }, [n("upload-panel-file", {
                        attrs: {
                            file: t
                        },
                        on: {
                            delete: function(t) {
                                return e.$emit("delete-file", s)
                            }
                        }
                    })], 1)
                })), 0)]) : e._e()
            },
            It = [],
            Lt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-upload-panel-file"
                }, [n("i", {
                    staticClass: "material-icons c-upload-panel-file__ext-icon",
                    class: e.iconClassBinding
                }, [e._v(" insert_drive_file "), n("span", {
                    staticClass: "c-upload-panel-file__ext-icon__ext-name"
                }, [e._v(" " + e._s(e.extensionName) + " ")])]), n("p", {
                    staticClass: "c-upload-panel-file__filename"
                }, [e._v(" " + e._s(e.file.name) + " ")]), n("button", {
                    staticClass: "c-upload-panel-file__delete-button",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("delete", t)
                        }
                    }
                }, [n("i", {
                    staticClass: "material-icons c-upload-panel-file__delete-button__icon"
                }, [e._v("close")])])])
            },
            Dt = [],
            Nt = n("339ed"),
            Rt = n.n(Nt);
        function jt(e) {
            return Rt.a.getExtension(e || "application/octet-stream")
        }
        var Bt = {
            getExtension: jt
        };
        function $t(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Ut = {
                name: "upload-panel-file",
                props: {
                    file: {
                        type: File,
                        required: !0
                    }
                },
                computed: {
                    extensionName: function() {
                        return Bt.getExtension(this.file.type)
                    },
                    iconClassBinding: function() {
                        var e = Boolean(this.extensionName);
                        return $t({}, "c-upload-panel-file__ext-icon--".concat(this.extensionName), e)
                    }
                }
            },
            Ft = Ut,
            Gt = (n("d17c"), Object(V["a"])(Ft, Lt, Dt, !1, null, null, null)),
            Vt = Gt.exports,
            Ht = {
                name: "upload-panel",
                components: {
                    UploadPanelFile: Vt
                },
                props: {
                    files: {
                        type: Array,
                        required: !0
                    }
                }
            },
            Wt = Ht,
            zt = (n("d57e"), Object(V["a"])(Wt, Tt, It, !1, null, null, null)),
            qt = zt.exports,
            Kt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-upload-input"
                }, [n("input", {
                    ref: "fileInputElement",
                    staticClass: "c-upload-input__input",
                    attrs: {
                        enctype: "multipart/form-data",
                        type: "file"
                    },
                    on: {
                        change: e.handleFileUpload
                    }
                }), n("div", {
                    staticClass: "c-upload-input__button",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.triggerFileInput(t)
                        }
                    }
                }, [n("i", {
                    staticClass: "material-icons c-upload-input__button__icon"
                }, [e._v("attach_file")])])])
            },
            Yt = [],
            Jt = {
                name: "upload-input",
                methods: {
                    handleFileUpload: function() {
                        var e = this.$refs.fileInputElement.files;
                        this.$emit("input", Array.from(e)),
                        this.$refs.fileInputElement.value = ""
                    },
                    triggerFileInput: function() {
                        this.$refs.fileInputElement.click()
                    }
                }
            },
            Qt = Jt,
            Xt = (n("56fc"), Object(V["a"])(Qt, Kt, Yt, !1, null, null, null)),
            Zt = Xt.exports,
            en = n("82d0"),
            tn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "cl-transition__fade"
                    }
                }, [e.isMounted && e.isVisible ? n("div", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: e.handleClickOutside,
                        expression: "handleClickOutside"
                    }],
                    staticClass: "c-text-input-autocomplete-panel",
                    attrs: {
                        "data-visible": !e.isReduced
                    }
                }, [n("ul", {
                    staticClass: "c-text-input-autocomplete-panel__list"
                }, e._l(e.results, (function(t, s) {
                    return n("li", {
                        key: t.payload,
                        staticClass: "c-text-input-autocomplete-panel__list__item",
                        attrs: {
                            "data-is-current": s === e.currentResultIndex,
                            role: "button"
                        },
                        on: {
                            click: function(n) {
                                return e.submitAutocomplete(t)
                            }
                        }
                    }, [e._v(" " + e._s(t.title) + " ")])
                })), 0)]) : e._e()])
            },
            nn = [],
            sn = n("6f56"),
            an = n.n(sn);
        function rn(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function on(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        rn(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        rn(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        var cn = function(e) {
                return e && e.replace(/(\?)+/g, "?")
            },
            un = {
                name: "text-input-autocomplete-panel",
                directives: {
                    ClickOutside: oe.a
                },
                props: {
                    terms: {
                        type: String,
                        required: !0
                    },
                    isTextInputFocused: {
                        type: Boolean,
                        required: !0
                    },
                    token: {
                        type: String,
                        required: !0
                    },
                    parent: {
                        type: HTMLFormElement,
                        default: null
                    }
                },
                data: function() {
                    return {
                        isVisible: !1,
                        isReduced: !1,
                        currentResultIndex: null,
                        results: []
                    }
                },
                computed: {
                    isMounted: function() {
                        return this.terms && this.terms.length > 2
                    },
                    highlightedWords: function() {
                        var e = [];
                        return (this.results || []).forEach((function(t) {
                            var n = t.matches;
                            if (n.has_highlights) {
                                var s = n.highlights.filter((function(e) {
                                    return e.highlight
                                })).map((function(e) {
                                    return e.word
                                }));
                                e = e.concat(s)
                            }
                        })), e
                    }
                },
                watch: {
                    terms: function() {
                        var e = this;
                        return on(X.a.mark((function t() {
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        e.isReduced = !1,
                                        e.isMounted || (e.isVisible = !1, e.currentResultIndex = null),
                                        e.fetchAutocompleteResults();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    },
                    results: function() {
                        var e = this;
                        return on(X.a.mark((function t() {
                            var n;
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.highlight();
                                    case 2:
                                        n = e.results || [],
                                        e.currentResultIndex = n.length,
                                        e.isVisible = e.isMounted && Boolean(n.length);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    },
                    isTextInputFocused: function() {
                        this.isReduced && this.isTextInputFocused && (this.isReduced = !1)
                    }
                },
                mounted: function() {
                    this.setupKeyboardBindings()
                },
                methods: {
                    fetchAutocompleteResults: function() {
                        var e = this;
                        return on(X.a.mark((function t() {
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!e.isMounted) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 3, e.$service("requester").execute("getAutocompleteResults", {
                                            text: cn(e.terms)
                                        });
                                    case 3:
                                        e.results = t.sent;
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    },
                    submitAutocomplete: function(e) {
                        this.$emit("submit", e)
                    },
                    setupKeyboardBindings: function() {
                        var e = this;
                        function t(e, t, n) {
                            var s = e;
                            return s = s < t ? t : s, s = s > n ? n : s, s
                        }
                        se()(this.parent).bind("esc", (function() {
                            e.isReduced = !0,
                            e.currentResultIndex = null
                        })).bind("down", (function() {
                            if (e.isVisible) {
                                var n = e.results.length - 1;
                                e.currentResultIndex = t(e.currentResultIndex + 1, 0, n)
                            }
                        })).bind("up", (function() {
                            if (e.isVisible) {
                                var n = e.results.length - 1;
                                e.currentResultIndex = t(e.currentResultIndex - 1, 0, n)
                            }
                        })).bind("enter", (function() {
                            var t = e.results[e.currentResultIndex];
                            t && e.submitAutocomplete(t)
                        }))
                    },
                    handleClickOutside: function(e) {
                        var t = "c-text-input__input";
                        e && -1 !== e.target.className.indexOf(t) || (this.isReduced = !0, this.currentResultIndex = null)
                    },
                    highlight: function() {
                        var e = new an.a(".c-text-input-autocomplete-panel__list__item");
                        function t() {
                            var t = this;
                            return new Promise((function(n) {
                                e.mark(t.highlightedWords, {
                                    className: "highlight",
                                    accuracy: "exactly",
                                    done: function() {
                                        n()
                                    }
                                })
                            }))
                        }
                        function n() {
                            return new Promise((function(t) {
                                e.unmark({
                                    className: "highlight",
                                    done: t
                                })
                            }))
                        }
                        this.highlightedWords.length && n.bind(this)(),
                        t.bind(this)()
                    }
                }
            },
            ln = un,
            dn = (n("fde4"), Object(V["a"])(ln, tn, nn, !1, null, null, null)),
            pn = dn.exports,
            fn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-speech-input select-none",
                    class: {
                        "c-speech-input--enabled": e.recorderRunning
                    }
                }, [n("button", {
                    staticClass: "c-speech-input__button",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: e.toggleRecording
                    }
                }, [e.recorderLoading ? n("i", {
                    staticClass: "material-icons c-speech-input__button__icon"
                }, [e._v(" " + e._s(e.recorderLoadingAlt ? "hdr_strong" : "hdr_weak") + " ")]) : n("i", {
                    staticClass: "material-icons c-speech-input__button__icon"
                }, [e._v(" mic ")]), e.recorderRunning ? n("svg", {
                    staticClass: "progress-ring",
                    attrs: {
                        width: "30",
                        height: "30"
                    }
                }, [n("circle", {
                    staticClass: "progress-ring__circle",
                    attrs: {
                        stroke: "red",
                        "stroke-width": "2",
                        fill: "transparent",
                        r: "13",
                        cx: "15",
                        cy: "15"
                    }
                })]) : e._e()])])
            },
            mn = [],
            gn = n("1fb5"),
            hn = n.n(gn);
        function bn(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function _n(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        bn(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        bn(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function vn(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function yn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function wn(e, t, n) {
            return t && yn(e.prototype, t), n && yn(e, n), e
        }
        var En = 4096,
            kn = 16e3,
            Sn = function(e) {
                var t = e < 0 ? 32768 : 32767;
                return e * t
            },
            Cn = function(e, t) {
                var n = new Uint8Array(e.byteLength + t.byteLength);
                return n.set(new Uint8Array(e), 0), n.set(new Uint8Array(t), e.byteLength), n
            },
            On = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "https://speech.googleapis.com";
                    vn(this, e),
                    this.apiKey = t,
                    this.regionalEndpoint = n,
                    this.languageCode = navigator.language || navigator.userLanguage,
                    this.tempBuffer = new ArrayBuffer(2 * En),
                    this.tempBufferView = new Uint16Array(this.tempBuffer)
                }
                return wn(e, [{
                    key: "connectMicrophoneAndProcessor",
                    value: function() {
                        var e = _n(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i,
                                r,
                                o,
                                c = this;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.mediaDevices.getUserMedia({
                                            audio: {
                                                advanced: [{
                                                    channelCount: 1,
                                                    sampleRate: kn
                                                }]
                                            }
                                        });
                                    case 2:
                                        n = e.sent,
                                        s = window.AudioContext || window.webkitAudioContext,
                                        this.audioContext || (this.audioContext = new s({
                                            sampleRate: kn
                                        }));
                                        try {
                                            this.microphone = this.audioContext.createMediaStreamSource(n)
                                        } catch (u) {
                                            this.audioContext = new s,
                                            this.microphone = this.audioContext.createMediaStreamSource(n)
                                        }
                                        this.processor || (this.processor = this.audioContext.createScriptProcessor(En, 1, 1)),
                                        a = Date.now(),
                                        i = a,
                                        r = 1,
                                        o = 275,
                                        this.processor.onaudioprocess = function() {
                                            var e = _n(X.a.mark((function e(n) {
                                                var s,
                                                    u;
                                                return X.a.wrap((function(e) {
                                                    while (1)
                                                        switch (e.prev = e.next) {
                                                        case 0:
                                                            for (s = n.inputBuffer.getChannelData(0), u = 0; u < s.length; u++)
                                                                c.tempBufferView[u] = Sn(s[u]);
                                                            if (c.outputBuffer = Cn(c.outputBuffer, c.tempBuffer), t) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 5:
                                                            if (a = Date.now(), !(a - i < o * r)) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 8:
                                                            return i = a, r *= 1.6, e.next = 12, t(c.outputBuffer);
                                                        case 12:
                                                        case "end":
                                                            return e.stop()
                                                        }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(),
                                        this.microphone.connect(this.processor),
                                        this.processor.connect(this.audioContext.destination);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "disconnectMicrophoneAndProcessor",
                    value: function() {
                        this.microphone && (this.microphone.disconnect(), this.microphone.mediaStream.getTracks().forEach((function(e) {
                            return e.stop()
                        })), this.microphone = null),
                        this.processor && this.processor.disconnect()
                    }
                }, {
                    key: "startListening",
                    value: function() {
                        var e = _n(X.a.mark((function e(t) {
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.starting) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.starting = !0, this.outputBuffer = new ArrayBuffer(0), e.next = 6, this.connectMicrophoneAndProcessor(t);
                                    case 6:
                                        this.cancelStart && (this.disconnectMicrophoneAndProcessor(), this.cancelStart = !1),
                                        this.starting = !1;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "stopListening",
                    value: function() {
                        var e = _n(X.a.mark((function e() {
                            var t;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (this.starting && (this.cancelStart = !0), this.disconnectMicrophoneAndProcessor(), null !== (t = this.outputBuffer) && void 0 !== t && t.length) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.abrupt("return", this.outputBuffer);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "speechToText",
                    value: function() {
                        var e = _n(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i = arguments;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = i.length > 1 && void 0 !== i[1] ? i[1] : this.languageCode, null !== t && void 0 !== t && t.length) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, fetch("".concat(this.regionalEndpoint, "/v1/speech:recognize?key=").concat(this.apiKey), {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                config: {
                                                    encoding: "LINEAR16",
                                                    sampleRateHertz: this.audioContext.sampleRate,
                                                    languageCode: n
                                                },
                                                audio: {
                                                    content: hn.a.fromByteArray(t)
                                                }
                                            })
                                        });
                                    case 5:
                                        return s = e.sent, e.next = 8, s.json();
                                    case 8:
                                        if (a = e.sent, !a.error) {
                                            e.next = 13;
                                            break
                                        }
                                        throw a.error.message;
                                    case 13:
                                        return e.abrupt("return", a);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }]), e
            }(),
            xn = On;
        function An(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function Mn(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        An(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        An(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        var Pn = new xn("AIzaSyDghdDIDznZEpS7WV5j6w50RDKnns3eS2E", "https://eu-speech.googleapis.com"),
            Tn = {
                name: "speech-input",
                props: {
                    token: {
                        type: String,
                        required: !0
                    },
                    isSpeechMode: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        recorder: null,
                        recorderRunning: !1,
                        recorderLoading: !1,
                        recorderLoadingAlt: !1,
                        recordingTimeout: null
                    }
                },
                watch: {
                    isSpeechMode: {
                        immediate: !0,
                        handler: function(e) {
                            !1 === e && this.resetRecording()
                        }
                    }
                },
                methods: {
                    startRecording: function() {
                        var e = this;
                        return Mn(X.a.mark((function t() {
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return e.recordingTimeout && clearTimeout(e.recordingTimeout), e.recordingTimeout = null, t.next = 4, Pn.startListening(function() {
                                            var t = Mn(X.a.mark((function t(n) {
                                                var s;
                                                return X.a.wrap((function(t) {
                                                    while (1)
                                                        switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, e.speechToText(n);
                                                        case 2:
                                                            s = t.sent,
                                                            s && e.$emit("input", s);
                                                        case 4:
                                                        case "end":
                                                            return t.stop()
                                                        }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }());
                                    case 4:
                                        e.recordingTimeout = setTimeout((function() {
                                            return e.stopRecording()
                                        }), 1e4),
                                        setTimeout((function() {
                                            e.recorderRunning = !0,
                                            e.$emit("start-recording")
                                        }), 100);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    },
                    stopRecording: function(e) {
                        var t = this;
                        return Mn(X.a.mark((function n() {
                            var s,
                                a,
                                i;
                            return X.a.wrap((function(n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (s = t, t.recorderRunning = !1, t.recordingTimeout && clearTimeout(t.recordingTimeout), !e) {
                                            n.next = 6;
                                            break
                                        }
                                        return console.log("Aborting recording"), n.abrupt("return");
                                    case 6:
                                        return t.recorderLoading = !0, t.loaderInterval = setInterval((function() {
                                            s.recorderLoadingAlt = !s.recorderLoadingAlt
                                        }), 500), n.prev = 8, n.next = 11, Pn.stopListening();
                                    case 11:
                                        return a = n.sent, n.next = 14, t.speechToText(a);
                                    case 14:
                                        i = n.sent,
                                        i && t.$emit("input", i),
                                        n.next = 22;
                                        break;
                                    case 18:
                                        throw n.prev = 18, n.t0 = n["catch"](8), console.error(n.t0), n.t0;
                                    case 22:
                                        return n.prev = 22, t.resetRecording(), t.loaderInterval && clearInterval(t.loaderInterval), n.finish(22);
                                    case 26:
                                    case "end":
                                        return n.stop()
                                    }
                            }), n, null, [[8, 18, 22, 26]])
                        })))()
                    },
                    toggleRecording: function() {
                        this.recorderRunning ? this.stopRecording(Date.now() - this.startTime < 500) : this.recorderLoading || (this.startTime = Date.now(), this.startRecording())
                    },
                    resetRecording: function() {
                        Pn.disconnectMicrophoneAndProcessor(),
                        this.recorderRunning = !1,
                        this.recorderLoading = !1,
                        this.recorderLoadingAlt = !1,
                        this.$emit("stop-recording")
                    },
                    speechToText: function(e) {
                        return Mn(X.a.mark((function t() {
                            var n,
                                s;
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Pn.speechToText(e);
                                    case 2:
                                        return n = t.sent, s = n && n.results && n.results[0] && n.results[0].alternatives && n.results[0].alternatives[0] && n.results[0].alternatives[0].transcript, t.abrupt("return", s && (s[0].toUpperCase() + s.slice(1)).trim());
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    }
                }
            },
            In = Tn,
            Ln = (n("3b9b"), Object(V["a"])(In, fn, mn, !1, null, null, null)),
            Dn = Ln.exports;
        function Nn(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function Rn(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        Nn(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        Nn(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function jn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function Bn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? jn(Object(n), !0).forEach((function(t) {
                    $n(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function $n(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Un = {
                name: "text-input",
                components: {
                    DebugButton: Pt,
                    TextInputAutocompletePanel: pn,
                    UploadInput: Zt,
                    UploadPanel: qt,
                    SpeechInput: Dn
                },
                props: {
                    token: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        text: "",
                        isInSpeechMode: !1,
                        isFocused: !1,
                        preventKeyboardSubmit: !1,
                        autocompleteState: "ENABLED",
                        files: [],
                        minLength: 0,
                        maxLength: 100
                    }
                },
                computed: Bn(Bn({}, Object(M["b"])(["showCsmlApps", "currentChannelStyle"])), {}, {
                    textInputPlaceholder: function() {
                        return this.isInSpeechMode ? this.$i18n.t("TextInput.speechModePlaceholder") : this.$i18n.t("TextInput.textModePlaceholder")
                    },
                    canSubmit: function() {
                        var e = this.text,
                            t = this.minLength,
                            n = this.maxLength,
                            s = e.length >= t && e.length <= n;
                        return this.text && s || this.files.length
                    },
                    displayDebugButton: function() {
                        return "true" === this.$route.query.debug
                    },
                    displaySpeechInputButton: function() {
                        return !this.currentChannelStyle.hide_speech_input
                    },
                    displayFileUploadButton: function() {
                        return !this.currentChannelStyle.hide_file_upload
                    },
                    displaySendButton: function() {
                        return !window.AudioContext && !window.webkitAudioContext || (!this.displaySpeechInputButton || (this.files.length > 0 || !(!this.text || this.isInSpeechMode)))
                    }
                }),
                created: function() {
                    this.setupEventsHandler()
                },
                methods: {
                    handleSpeechStart: function() {
                        this.isInSpeechMode = !0
                    },
                    handleSpeechStop: function() {
                        var e = this;
                        this.isInSpeechMode = !1,
                        setTimeout((function() {
                            e.text && e.$refs.textInput.focus()
                        }), 300)
                    },
                    setupEventsHandler: function() {
                        var e = this,
                            t = ["DISABLED", "ENABLED"];
                        this.$eventBus(this.token).$on(_e["a"].SET_AUTOCOMPLETE_STATE, (function(n) {
                            if (t.indexOf(n) < 0)
                                throw new Error("Invalid autocomplete state: '".concat(n, "'"));
                            e.autocompleteState = n
                        })),
                        this.$eventBus(this.token).$on(_e["a"].SET_TEXT_INPUT_CHARS_LIMIT, (function(t) {
                            var n = t.min,
                                s = t.max;
                            "undefined" !== typeof n && (e.minLength = Math.max(n, 0)),
                            "undefined" !== typeof s && (e.maxLength = Math.max(s, 0))
                        })),
                        this.$eventBus(this.token).$on(_e["a"].FILES_DROPPED, this.handleFileInput)
                    },
                    deleteFile: function(e) {
                        this.files.splice(e, 1)
                    },
                    handleFileInput: function(e) {
                        var t = this;
                        return Rn(X.a.mark((function n() {
                            return X.a.wrap((function(n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return t.files = t.files.concat(e), n.next = 3, t.$nextTick();
                                    case 3:
                                        setTimeout((function() {
                                            t.$refs.sendButton.focus()
                                        }), 300);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                    }
                            }), n)
                        })))()
                    },
                    handleSpeechInput: function(e) {
                        this.isInSpeechMode && (this.text = e || "")
                    },
                    handleKeyboardInput: function(e) {
                        var t = (null === e || void 0 === e ? void 0 : e.code) || "";
                        -1 === t.indexOf("Key") && -1 === t.indexOf("Space") && -1 === t.indexOf("Digit") && -1 === t.indexOf("Backspace") || (this.isInSpeechMode = !1)
                    },
                    noop: function(e) {
                        e.preventDefault()
                    },
                    handleBlur: function(e) {
                        this.isFocused = !1,
                        this.$emit("blur", e)
                    },
                    handleFocus: function(e) {
                        this.isFocused = !0,
                        this.$emit("focus", e)
                    },
                    handleInput: function(e) {
                        this.$emit("input", e)
                    },
                    submitFiles: function() {
                        var e = this;
                        this.files.length && (this.files.forEach((function(t) {
                            var n = en["a"].createMessage("file", "user", {
                                name: t.name,
                                extension: Bt.getExtension(t.type),
                                mime_type: t.type,
                                size: t.size,
                                file_url: null
                            });
                            e.$eventBus(e.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                message: n
                            }),
                            e.$service("ask").sendFileMessage(t, n)
                        })), this.files = [])
                    },
                    submitText: function() {
                        var e;
                        if (this.text.trim()) {
                            var t = en["a"].createMessage("text", "user", {
                                text: this.text.trim()
                            });
                            this.text = "",
                            this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                message: t
                            }),
                            this.$service("ask").sendTextMessage(t),
                            null === (e = this.$refs.speechInput) || void 0 === e || e.stopRecording(),
                            this.$refs.textInput.focus()
                        }
                    },
                    handleKeyboardSubmit: function(e) {
                        this.files.length && this.submitFiles(),
                        this.preventKeyboardSubmit && e.preventDefault()
                    },
                    submitAutocomplete: function(e) {
                        this.preventKeyboardSubmit = !0;
                        var t = en["a"].createMessage("text", "user", {
                            text: e.title
                        });
                        this.text = "",
                        this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                            message: t
                        }),
                        this.$service("ask").sendAction(e.payload, t),
                        this.preventKeyboardSubmit = !1
                    }
                }
            },
            Fn = Un,
            Gn = (n("d809"), Object(V["a"])(Fn, bt, _t, !1, null, null, null)),
            Vn = Gn.exports,
            Hn = {
                DISABLE_INPUT: "DISABLE_INPUT",
                ENABLE_INPUT: "ENABLE_INPUT",
                SET_CURRENT_CSML_FLOW: "SET_CURRENT_CSML_FLOW",
                DISABLE_AUTOCOMPLETE: "DISABLE_AUTOCOMPLETE",
                ENABLE_AUTOCOMPLETE: "ENABLE_AUTOCOMPLETE",
                SET_TEXT_INPUT_CHARS_LIMIT: "SET_TEXT_INPUT_CHARS_LIMIT",
                OPEN_APPS_MOBILE_PANEL: "OPEN_APPS_MOBILE_PANEL",
                CLOSE_APPS_MOBILE_PANEL: "CLOSE_APPS_MOBILE_PANEL"
            };
        function Wn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function zn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Wn(Object(n), !0).forEach((function(t) {
                    qn(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function qn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Kn = {
                name: "input-card",
                components: {
                    TextInput: Vn
                },
                props: {
                    token: {
                        type: String,
                        required: !0
                    },
                    showInactiveChannelNotice: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        hasBeenManuallyDisabled: !1,
                        isDraggingOver: !1,
                        dragOverTimeout: null
                    }
                },
                computed: zn(zn({}, Object(M["b"])(["showCsmlApps", "currentAppsListComponent", "isConnected", "currentChannelStyle"])), {}, {
                    showBranding: function() {
                        return !this.currentChannelStyle.hide_branding
                    },
                    isInputCardDisabled: function() {
                        return this.hasBeenManuallyDisabled || !this.isConnected
                    }
                }),
                created: function() {
                    this.setupEventsHandlers()
                },
                methods: {
                    handleDrop: function(e) {
                        clearTimeout(this.dragOverTimeout),
                        this.isDraggingOver = !1;
                        var t = e.dataTransfer.files;
                        t && this.$eventBus(this.token).$emit(_e["a"].FILES_DROPPED, Array.from(t))
                    },
                    handleDragOver: function() {
                        var e = this;
                        this.isDraggingOver = !0,
                        clearTimeout(this.dragOverTimeout),
                        this.dragOverTimeout = setTimeout((function() {
                            e.isDraggingOver = !1
                        }), 1e3)
                    },
                    setupEventsHandlers: function() {
                        var e = this;
                        this.$eventBus(this.token).$on(_e["a"].COMMAND, (function(t) {
                            switch (t.name) {
                            case Hn.DISABLE_INPUT:
                                e.hasBeenManuallyDisabled = !0;
                                break;
                            case Hn.ENABLE_INPUT:
                                e.hasBeenManuallyDisabled = !1;
                                break
                            }
                        }))
                    },
                    openPanel: function() {
                        this.$eventBus(this.token).$emit(_e["a"].OPEN_APPS_MOBILE_PANEL)
                    }
                }
            },
            Yn = Kn,
            Jn = (n("70e4"), Object(V["a"])(Yn, gt, ht, !1, null, null, null)),
            Qn = Jn.exports,
            Xn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", {
                    staticClass: "c-input-card-modes"
                }, e._l(e.availableInputModesList, (function(t) {
                    return n("li", {
                        key: t.id,
                        staticClass: "c-input-card-modes__mode",
                        attrs: {
                            "data-activated": t.id === e.currentInputModeId,
                            role: "button"
                        },
                        on: {
                            click: function(n) {
                                return e.$emit("input-mode-id-update", t.id)
                            }
                        }
                    }, [n("i", {
                        staticClass: "c-input-card-modes__mode__icon material-icons"
                    }, [e._v(" " + e._s(t.icon) + " ")])])
                })), 0)
            },
            Zn = [],
            es = {
                name: "input-card-modes",
                props: {
                    currentInputModeId: {
                        type: String,
                        default: "TEXT",
                        validator: function(e) {
                            return ["TEXT", "CALENDAR", "SHOPPING", "UPLOAD"].indexOf(e) > -1
                        }
                    }
                },
                data: function() {
                    return {
                        inputModes: [{
                            id: "TEXT",
                            icon: "textsms",
                            isAvailable: !0
                        }, {
                            id: "UPLOAD",
                            icon: "attach_file",
                            isAvailable: !0
                        }]
                    }
                },
                computed: {
                    availableInputModesList: function() {
                        return this.inputModes.filter((function(e) {
                            return e.isAvailable
                        }))
                    }
                }
            },
            ts = es,
            ns = (n("b542"), Object(V["a"])(ts, Xn, Zn, !1, null, null, null)),
            ss = (ns.exports, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", {
                    staticClass: "c-messages-list js-messages-list"
                }, [n("li", {
                    staticClass: "flex-1"
                }), n("transition-group", {
                    attrs: {
                        name: "cl-transition__slide-fade"
                    }
                }, e._l(e.messageGroups, (function(t, s) {
                    return n("div", {
                        key: e.getGroupKey(s),
                        staticClass: "c-messages-list__group cl-transition__slide-fade-item"
                    }, [e._l(t, (function(t) {
                        return ["text" === t.content_type ? [n("text-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "image" === t.content_type ? [n("image-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "list" === t.content_type ? [n("list-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "carousel" === t.content_type ? [n("carousel-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "quick-buttons" === t.content_type ? [n("quick-buttons-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "suggestion-buttons" === t.content_type ? [n("suggestion-buttons-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "calendar" === t.content_type ? [n("calendar-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "file" === t.content_type ? [n("file-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "separator" === t.content_type ? [n("separator-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "iframe" === t.content_type ? [n("iframe-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "form" === t.content_type ? [n("form-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "video" === t.content_type ? [n("video-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "link" === t.content_type ? [n("link-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "audio" === t.content_type ? [n("audio-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "input" === t.content_type ? [n("input-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t,
                                "is-last-group": s === e.messageGroups.length - 1
                            }
                        })] : e._e(), "multiselect" === t.content_type ? [n("multiselect-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t,
                                "is-last-group": s === e.messageGroups.length - 1
                            }
                        })] : e._e(), "stripe" === t.content_type ? [n("stripe-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t,
                                "is-last-group": s === e.messageGroups.length - 1
                            }
                        })] : e._e(), "latex" === t.content_type ? [n("latex-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "cnedraw" === t.content_type ? [n("cned-raw-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e(), "cnedrawcarousel" === t.content_type ? [n("cned-raw-carousel-message", {
                            key: t.meta.message_id,
                            attrs: {
                                token: e.token,
                                message: t
                            }
                        })] : e._e()]
                    }))], 2)
                })), 0), n("div", {
                    staticClass: "transition-opacity duration-300 ease-in-out",
                    class: {
                        "opacity-0": !e.showTyping
                    }
                }, [n("typing-message", {
                    attrs: {
                        show: !0
                    }
                })], 1), n("div", {
                    staticClass: "c-messages-list__floating-box js-messages-list-floating-box"
                })], 1)
            }),
            as = [],
            is = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "cl-transition__fade"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    staticClass: "c-typing-message"
                }, [n("div", {
                    staticClass: "c-typing-message__wave"
                }, [n("span", {
                    staticClass: "c-typing-message__wave__dot"
                }), n("span", {
                    staticClass: "c-typing-message__wave__dot"
                }), n("span", {
                    staticClass: "c-typing-message__wave__dot"
                })])])])
            },
            rs = [],
            os = {
                name: "typing-message",
                props: {
                    show: {
                        type: Boolean,
                        required: !0
                    }
                }
            },
            cs = os,
            us = (n("06fc"), Object(V["a"])(cs, is, rs, !1, null, null, null)),
            ls = us.exports,
            ds = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-text-message",
                    class: e.classBinding,
                    style: e.backgroundBinding
                }, [n("table", {
                    staticClass: "c-text-message__table"
                }, [n("tbody", [n("tr", ["user" !== e.sender ? n("td", {
                    directives: [{
                        name: "markdown",
                        rawName: "v-markdown",
                        value: e.message.text,
                        expression: "message.text"
                    }],
                    staticClass: "c-text-message__text"
                }) : n("td", {
                    staticClass: "c-text-message__text",
                    style: e.textBinding
                }, [e._v(" " + e._s(e.message.text) + " ")])])])])])])
            },
            ps = [],
            fs = n("ad95");
        function ms(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function gs(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ms(Object(n), !0).forEach((function(t) {
                    hs(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ms(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function hs(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var bs = {
                name: "text-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                computed: gs(gs({}, Object(M["b"])(["currentChannelStyle"])), {}, {
                    classBinding: function() {
                        var e,
                            t = this.message,
                            n = t.meta,
                            s = t.options;
                        return e = {}, hs(e, "c-text-message--".concat(n.sender), !0), hs(e, "c-text-message--highlight-".concat(s.highlight), Boolean(s.highlight)), e
                    },
                    textBinding: function() {
                        var e = this.message.meta;
                        return "user" !== e.sender ? {} : {
                            color: this.currentChannelStyle.user_message_text_color
                        }
                    },
                    backgroundBinding: function() {
                        var e = this.message.meta;
                        return "user" !== e.sender ? {} : {
                            background: this.currentChannelStyle.user_message_text_background
                        }
                    }
                })
            },
            _s = bs,
            vs = (n("b3ca"), n("23e0"), Object(V["a"])(_s, ds, ps, !1, null, null, null)),
            ys = vs.exports,
            ws = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-image-message"
                }, [n("image-loader", {
                    staticClass: "c-image-message__image",
                    attrs: {
                        src: e.message.url,
                        title: e.message.title,
                        alt: e.message.alt || e.$t("ImageMessage.aria.defaultImageAlt")
                    },
                    on: {
                        loaded: function(t) {
                            e.loadingState = "LOADED"
                        },
                        failed: function(t) {
                            e.loadingState = "FAILED"
                        }
                    }
                }), "LOADED" === e.loadingState ? n("div", {
                    staticClass: "c-image-message__actions"
                }, [n("image-message-button", {
                    attrs: {
                        "tooltip-text": e.$t("ImageMessage.tooltips.expand"),
                        "icon-name": "fullscreen"
                    },
                    on: {
                        click: e.expandImage
                    }
                }), n("div", {
                    staticClass: "o-spacing-8--w"
                }), n("image-message-button", {
                    attrs: {
                        "tooltip-text": e.$t("ImageMessage.tooltips.download"),
                        "icon-name": "get_app"
                    },
                    on: {
                        click: e.downloadImage
                    }
                })], 1) : e._e()], 1)])
            },
            Es = [],
            ks = n("aeb1"),
            Ss = n.n(ks),
            Cs = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            trigger: "hover",
                            content: e.tooltipText
                        },
                        expression: "{ trigger: 'hover', content: tooltipText }"
                    }],
                    staticClass: "c-image-message-button",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("click", t)
                        }
                    }
                }, [e.iconName ? n("i", {
                    staticClass: "c-image-message-button__icon material-icons"
                }, [e._v(" " + e._s(e.iconName) + " ")]) : e._e()])
            },
            Os = [],
            xs = {
                name: "image-message",
                props: {
                    tooltipText: {
                        type: String,
                        default: ""
                    },
                    iconName: {
                        type: String,
                        default: null
                    }
                }
            },
            As = xs,
            Ms = (n("498f"), Object(V["a"])(As, Cs, Os, !1, null, null, null)),
            Ps = Ms.exports,
            Ts = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-image-viewer-modal"
                }, [n("util-loading-wrapper", {
                    staticClass: "c-image-viewer-modal__loading-wrapper",
                    attrs: {
                        "is-loading": e.imageIsLoading
                    }
                }, [n("div", {
                    staticClass: "c-image-viewer-modal__content-wrapper"
                }, [n("img", {
                    ref: "image",
                    staticClass: "c-image-viewer-modal__image",
                    attrs: {
                        src: e.url,
                        alt: e.alt
                    }
                }), n("div", {
                    staticClass: "c-image-viewer-modal__actions"
                }, [n("image-message-button", {
                    attrs: {
                        "tooltip-text": e.$t("ImageMessage.tooltips.download"),
                        "icon-name": "get_app"
                    },
                    on: {
                        click: e.downloadImage
                    }
                })], 1)])])], 1)
            },
            Is = [],
            Ls = {
                name: "image-viewer-modal",
                data: function() {
                    return {
                        imageIsLoading: !1
                    }
                },
                components: {
                    ImageMessageButton: Ps,
                    UtilLoadingWrapper: te["UtilLoadingWrapper"]
                },
                props: {
                    url: {
                        type: String,
                        required: !0
                    },
                    alt: {
                        type: String,
                        required: !0
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$refs.image.addEventListener("load", (function() {
                        e.handleLoading()
                    }))
                },
                methods: {
                    downloadImage: function() {
                        Ss()(this.url)
                    },
                    handleLoading: function() {
                        this.imageIsLoading = !1
                    }
                }
            },
            Ds = Ls,
            Ns = (n("d13b"), Object(V["a"])(Ds, Ts, Is, !1, null, null, null)),
            Rs = Ns.exports,
            js = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "o-image-loader z-0"
                }, [n("img", {
                    ref: "image",
                    staticClass: "c-image",
                    attrs: {
                        src: e.src,
                        alt: e.alt,
                        title: e.title
                    },
                    on: {
                        load: e.onLoad,
                        error: e.onError
                    }
                }), n("util-loading-wrapper", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "FAILED" !== e.loadingState,
                        expression: "loadingState !== 'FAILED'"
                    }],
                    staticClass: "z-0",
                    attrs: {
                        "is-loading": !0
                    }
                })], 1)
            },
            Bs = [],
            $s = n("8656"),
            Us = {
                name: "image-loader",
                components: {
                    UtilLoadingWrapper: te["UtilLoadingWrapper"]
                },
                props: {
                    src: {
                        type: String,
                        required: !0
                    },
                    alt: {
                        type: String,
                        default: null
                    },
                    title: {
                        type: String,
                        default: null
                    }
                },
                data: function() {
                    return {
                        loadingState: "LOADING"
                    }
                },
                methods: {
                    onLoad: function() {
                        this.loadingState = "LOADED",
                        this.$emit("loaded"),
                        this.updateScroll()
                    },
                    onError: function() {
                        this.loadingState = "FAILED",
                        this.$emit("failed"),
                        this.updateScroll()
                    },
                    updateScroll: function() {
                        var e = $s["a"].getScrollableDistance();
                        e < this.$refs.image.clientHeight && ($s["a"].scrollToBottom(!0), this.$store.dispatch("setNewMessageNoticeVisibility", !1))
                    }
                }
            },
            Fs = Us,
            Gs = (n("5026"), Object(V["a"])(Fs, js, Bs, !1, null, "2e5184bc", null)),
            Vs = Gs.exports,
            Hs = {
                name: "image-message",
                components: {
                    BaseMessage: fs["a"],
                    ImageMessageButton: Ps,
                    ImageLoader: Vs
                },
                extends: fs["a"],
                data: function() {
                    return {
                        loadingState: "LOADING"
                    }
                },
                methods: {
                    expandImage: function() {
                        this.$modal.show(Rs, {
                            url: this.message.url,
                            alt: this.message.alt || this.$i18n.t("ImageMessage.aria.defaultImageAlt")
                        }, {
                            width: "100%",
                            height: "100%",
                            transition: "cl-transition__fade",
                            name: "image-viewer-modal",
                            classes: "c-image-viewer-modal__box"
                        })
                    },
                    downloadImage: function() {
                        Ss()(this.message.url)
                    }
                }
            },
            Ws = Hs,
            zs = (n("011b"), Object(V["a"])(Ws, ws, Es, !1, null, null, null)),
            qs = zs.exports,
            Ks = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-list-message"
                }, [n("ul", {
                    staticClass: "c-list-message__list"
                }, e._l(e.message.elements, (function(t, s) {
                    return n("li", {
                        key: s,
                        staticClass: "c-list-message__list__item"
                    }, ["button" === t.content_type ? n("list-message-button", {
                        attrs: {
                            token: e.token,
                            element: t
                        }
                    }) : e._e(), "url" === t.content_type ? n("list-message-url", {
                        attrs: {
                            token: e.token,
                            element: t
                        }
                    }) : e._e(), "email_feedback" === t.content_type ? n("list-message-pending-button", {
                        attrs: {
                            token: e.token,
                            element: t
                        }
                    }) : e._e()], 1)
                })), 0)])])
            },
            Ys = [],
            Js = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-list-message-url",
                    attrs: {
                        role: "button"
                    }
                }, [n("a", {
                    attrs: {
                        href: e.element.url,
                        target: "_blank"
                    }
                }, [n("div", {
                    staticClass: "c-link-message__content"
                }, [e.shouldFetchFavicon(e.element.url) ? n("img", {
                    staticClass: "c-link-message__content__favicon",
                    attrs: {
                        src: "https://s2.googleusercontent.com/s2/favicons?domain_url=" + (e.element.url || "").toLowerCase(),
                        alt: e.$t("LinkMessage.aria.faviconImageAlt")
                    }
                }) : e._e(), e.element.title ? n("p", {
                    staticClass: "c-link-message__content__title"
                }, [e._v(" " + e._s(e.element.title) + " ")]) : e._e(), e.element.hide_url ? e._e() : n("p", {
                    staticClass: "c-link-message__content__url"
                }, [e._v(" " + e._s(e.element.url) + " ")])])])])
            },
            Qs = [],
            Xs = {
                name: "list-message-url",
                props: {
                    element: {
                        type: Object,
                        required: !0
                    },
                    token: {
                        type: String,
                        required: !0
                    }
                },
                methods: {
                    shouldFetchFavicon: function(e) {
                        return 0 !== e.indexOf("tel:") && 0 !== e.indexOf("mailto:")
                    }
                }
            },
            Zs = Xs,
            ea = (n("40d2"), Object(V["a"])(Zs, Js, Qs, !1, null, null, null)),
            ta = ea.exports,
            na = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("button", {
                    staticClass: "c-list-message-button",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.sendAction
                    }
                }, [e._v(" " + e._s(e.element.title) + " ")])
            },
            sa = [],
            aa = {
                name: "list-message-button",
                props: {
                    element: {
                        type: Object,
                        required: !0
                    },
                    token: {
                        type: String,
                        required: !0
                    }
                },
                methods: {
                    sendAction: function() {
                        var e = en["a"].createMessage("text", "user", {
                            text: this.element.title
                        });
                        this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                            message: e
                        }),
                        this.$service("ask").sendAction(this.element.payload, e)
                    }
                }
            },
            ia = aa,
            ra = (n("71aa"), Object(V["a"])(ia, na, sa, !1, null, null, null)),
            oa = ra.exports,
            ca = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("button", {
                    staticClass: "c-list-message-pending-button",
                    on: {
                        click: e.openPendingModal
                    }
                }, [e._v(" " + e._s(e.element.title) + " ")])
            },
            ua = [],
            la = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-base-modal c-pending-modal u-full-w-h"
                }, [n("header", {
                    staticClass: "c-pending-modal__header"
                }, [n("h1", {
                    staticClass: "c-pending-modal__header__title"
                }, [e._v(" " + e._s(e.$t("PendingModal.title")) + " ")]), n("p", {
                    staticClass: "c-pending-modal__header__description"
                }, [e._v(" " + e._s(e.$t("PendingModal.description")) + " ")])]), n("div", {
                    staticClass: "o-spacing-16--h"
                }), n("pending-form", {
                    attrs: {
                        "default-email": e.email
                    },
                    on: {
                        submit: e.handleSubmit,
                        cancel: function(t) {
                            return e.$emit("close")
                        }
                    }
                })], 1)
            },
            da = [],
            pa = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("util-form", {
                    staticClass: "c-pending-form",
                    attrs: {
                        data: e.email
                    },
                    on: {
                        submit: function(t) {
                            return e.$emit("submit", e.email)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var s = t.staticValidation,
                                a = t.dynamicValidation,
                                i = t.refreshStaticValidation;
                            return [n("util-form-group", {
                                scopedSlots: e._u([{
                                    key: "default",
                                    fn: function(t) {
                                        var a = t.canShowErrors,
                                            r = t.showErrors;
                                        return [n("ui-input-text", {
                                            attrs: {
                                                id: "email",
                                                "icon-name": "email",
                                                placeholder: "alan.turing@gov.uk",
                                                "is-errored": a && s.isErrored
                                            },
                                            on: {
                                                blur: function(e) {
                                                    r(),
                                                    i()
                                                }
                                            },
                                            model: {
                                                value: e.email,
                                                callback: function(t) {
                                                    e.email = t
                                                },
                                                expression: "email"
                                            }
                                        }), n("ui-input-error", {
                                            attrs: {
                                                show: a && s.isErrored
                                            }
                                        }, [e._v(" Please provide a valid email. ")])]
                                    }
                                }], null, !0)
                            }), n("div", {
                                staticClass: "o-spacing-24--h"
                            }), n("footer", {
                                staticClass: "c-pending-form__footer"
                            }, [n("ui-button", {
                                attrs: {
                                    theme: "link"
                                },
                                on: {
                                    click: function(t) {
                                        return e.$emit("cancel")
                                    }
                                }
                            }, [e._v(" " + e._s(e.$t("gen.cancel")) + " ")]), n("div", {
                                staticClass: "o-spacing-12--w"
                            }), n("ui-button", {
                                attrs: {
                                    disabled: a.isErrored,
                                    type: "submit",
                                    theme: "primary"
                                }
                            }, [e._v(" " + e._s(e.$t("gen.submit")) + " ")])], 1)]
                        }
                    }])
                })
            },
            fa = [],
            ma = {
                name: "pending-form",
                components: {
                    UiInputText: te["UiInputText"],
                    UiInputError: te["UiInputError"],
                    UtilForm: te["UtilForm"],
                    UtilFormGroup: te["UtilFormGroup"],
                    UiButton: te["UiButton"]
                },
                props: {
                    defaultEmail: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        email: ""
                    }
                },
                created: function() {
                    this.email = this.defaultEmail
                }
            },
            ga = ma,
            ha = (n("362f"), Object(V["a"])(ga, pa, fa, !1, null, null, null)),
            ba = ha.exports,
            _a = {
                name: "downvote-modal",
                components: {
                    PendingForm: ba
                },
                props: {
                    email: {
                        type: String,
                        default: ""
                    },
                    onSubmit: {
                        type: Function,
                        required: !0
                    }
                },
                methods: {
                    handleSubmit: function(e) {
                        this.onSubmit(e),
                        this.$emit("close")
                    }
                }
            },
            va = _a,
            ya = (n("2b1b"), Object(V["a"])(va, la, da, !1, null, null, null)),
            wa = ya.exports,
            Ea = {
                name: "list-message-pending-button",
                props: {
                    element: {
                        type: Object,
                        required: !0
                    },
                    token: {
                        type: String,
                        required: !0
                    }
                },
                methods: {
                    openPendingModal: function() {
                        var e = this.$service("user").getMeta(),
                            t = e.local_email,
                            n = e.sso_email;
                        n ? this.sendPending(n) : this.$modal.show(wa, {
                            onSubmit: this.sendPending,
                            email: t
                        }, {
                            width: 300,
                            height: "auto",
                            transition: "cl-transition__fade"
                        })
                    },
                    sendPending: function(e) {
                        this.$session.set("local_email", e),
                        this.$service("ask").sendFollowUpRequest(this.element.payload)
                    }
                }
            },
            ka = Ea,
            Sa = (n("201f"), Object(V["a"])(ka, ca, ua, !1, null, null, null)),
            Ca = Sa.exports,
            Oa = {
                name: "list-message",
                components: {
                    BaseMessage: fs["a"],
                    ListMessageUrl: ta,
                    ListMessageButton: oa,
                    ListMessagePendingButton: Ca
                },
                extends: fs["a"]
            },
            xa = Oa,
            Aa = (n("8cb8"), Object(V["a"])(xa, Ks, Ys, !1, null, null, null)),
            Ma = Aa.exports,
            Pa = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [e.elements.length > 2 ? n("div", {
                    staticClass: "js-carousel-message-wrapper"
                }, [n("div", {
                    staticClass: "c-carousel-message"
                }, [n("splide", {
                    attrs: {
                        options: e.sliderOptions,
                        slides: e.elements,
                        hasSliderWrapper: !0
                    },
                    scopedSlots: e._u([{
                        key: "controls",
                        fn: function() {},
                        proxy: !0
                    }], null, !1, 3552510269)
                }, e._l(e.elements, (function(t, s) {
                    return n("splide-slide", {
                        key: s
                    }, [n("carousel-message-item", {
                        attrs: {
                            token: e.token,
                            item: t,
                            "single-card-mode": !!e.message.single_card
                        }
                    })], 1)
                })), 1)], 1)]) : n("div", {
                    staticClass: "flex space-x-2 overflow-auto"
                }, e._l(e.elements, (function(t, s) {
                    return n("div", {
                        key: s
                    }, [n("carousel-message-item", {
                        staticClass: "c-carousel-message-item--single",
                        attrs: {
                            token: e.token,
                            item: t,
                            "single-card-mode": !!e.message.single_card
                        }
                    })], 1)
                })), 0)])], 1)
            },
            Ta = [],
            Ia = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-carousel-message-item",
                    class: {
                        "is-morphing": !e.singleCardMode
                    }
                }, [e.item.image_url ? n("header", {
                    staticClass: "c-carousel-message-item__header",
                    class: {
                        "c-carousel-message-clickable": !!e.item.action_url
                    },
                    on: {
                        click: e.openActionPage
                    }
                }, [n("h1", {
                    staticClass: "aspect-ratio-box"
                }, [n("div", {
                    staticClass: "aspect-ratio-box__inside"
                }, [n("image-loader", {
                    staticClass: "c-carousel-message-item__header__image",
                    attrs: {
                        src: e.item.image_url
                    }
                })], 1)])]) : e._e(), n("section", {
                    staticClass: "flex-grow p-4",
                    class: {
                        "c-carousel-message-clickable": !!e.item.action_url
                    },
                    on: {
                        click: e.openActionPage
                    }
                }, [e.item.title || e.item.subtitle ? n("h1", {
                    staticClass: "\n        font-semibold\n        text-lg text-cl-grey-800\n        tracking-wide\n        leading-normal\n      "
                }, [e._v(" " + e._s(e.item.title || e.item.subtitle) + " ")]) : e._e(), e.item.description ? n("p", {
                    staticClass: "text-cl-grey-700 leading-normal mt-1"
                }, [e._v(" " + e._s(e.trimDescription(e.item.description, e.item.description_limit)) + " ")]) : e._e(), e.item.action_url && !0 !== e.item.hide_url ? n("p", {
                    staticClass: "flex items-center text-sm text-cl-grey-700 mt-2"
                }, [n("i", {
                    staticClass: "material-icons text-lg mr-1"
                }, [e._v("link")]), n("span", [e._v(e._s(e.trimDescription(e.item.action_url, 23)))])]) : e._e()]), (e.item.buttons || []).length > 0 ? n("footer", {
                    staticClass: "bg-gray-200 p-2"
                }, e._l(e.item.buttons, (function(t, s) {
                    return n("div", {
                        key: s
                    }, [e.isValidButtonType(t.content_type) ? n("button", {
                        staticClass: "c-list-message-button",
                        attrs: {
                            role: "button"
                        },
                        on: {
                            click: function(n) {
                                return e.handleClick(t, n)
                            }
                        }
                    }, [e._v(" " + e._s(t.title) + " ")]) : e._e()])
                })), 0) : e._e()])
            },
            La = [],
            Da = {
                name: "card-message",
                components: {
                    ImageLoader: Vs
                },
                props: {
                    item: {
                        type: Object,
                        required: !0
                    },
                    token: {
                        type: String,
                        required: !0
                    },
                    singleCardMode: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    handleClick: function(e, t) {
                        if (t.preventDefault(), "url" !== e.content_type) {
                            if (!e.payload)
                                throw new Error("Missing button payload");
                            var n = en["a"].createMessage("text", "user", {
                                text: e.title
                            });
                            this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                message: n
                            }),
                            this.$service("ask").sendAction(e.payload, n)
                        } else
                            window.open(e.url, "_blank")
                    },
                    isValidButtonType: function(e) {
                        return "button" === e || "url" === e
                    },
                    trimDescription: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 140;
                        return e.length > t ? "".concat(e.substr(0, t), "...") : e
                    },
                    openActionPage: function() {
                        this.item.action_url && window.open(this.item.action_url, "_blank")
                    }
                }
            },
            Na = Da,
            Ra = (n("53fa"), Object(V["a"])(Na, Ia, La, !1, null, null, null)),
            ja = Ra.exports,
            Ba = {
                name: "carousel-message",
                components: {
                    BaseMessage: fs["a"],
                    CarouselMessageItem: ja
                },
                extends: fs["a"],
                data: function() {
                    return {
                        width: null,
                        slider: null,
                        sliderOptions: {
                            type: "slide",
                            rewind: !0,
                            gap: "8px",
                            pagination: "slider",
                            perPage: this.message.single_card ? 1 : 3,
                            perMove: 1,
                            trimSpace: !0,
                            padding: 32,
                            autoplay: !!this.message.autoplay,
                            breakpoints: {
                                640: this.message.single_card ? {} : {
                                    fixedWidth: 192,
                                    autoWidth: !0,
                                    perPage: 0,
                                    focus: 0
                                }
                            }
                        }
                    }
                },
                computed: {
                    displayableSlidesAmount: function() {
                        var e = this.width,
                            t = 192,
                            n = 3,
                            s = Math.max(e / n, t);
                        return e / s
                    },
                    elements: function() {
                        return this.message.elements.filter((function(e) {
                            return "card" === e.content_type || "object" === e.content_type
                        }))
                    }
                },
                mounted: function() {
                    this.attachResizeListeners(),
                    this.keepTrackOfCarouselWidth()
                },
                methods: {
                    keepTrackOfCarouselWidth: function() {
                        this.width = this.$el.querySelector(".c-carousel-message").offsetWidth
                    },
                    attachResizeListeners: function() {
                        var e = this,
                            t = this.$el,
                            n = [{
                                source: t.querySelector(".c-carousel-message"),
                                target: t.querySelector(".js-carousel-message-wrapper"),
                                followWidth: !0,
                                followHeight: !0,
                                onWidthResize: function() {
                                    e.keepTrackOfCarouselWidth()
                                }
                            }];
                        Be.attachListeners(n)
                    }
                }
            },
            $a = Ba,
            Ua = (n("92c5"), Object(V["a"])($a, Pa, Ta, !1, null, null, null)),
            Fa = Ua.exports,
            Ga = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-file-message",
                    class: e.classBinding,
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.downloadFile
                    }
                }, [e.message.thumbnail_url ? n("div", {
                    staticClass: "c-file-message__thumbnail"
                }, [n("img", {
                    staticClass: "c-file-message__thumbnail__image",
                    attrs: {
                        src: e.message.thumbnail_url,
                        alt: e.$t("FileMessage.aria.fileThumbnailAlt")
                    }
                }), n("hr")]) : e._e(), n("div", {
                    staticClass: "c-file-message__content"
                }, [n("div", {
                    staticClass: "c-file-message__content__wrapper"
                }, [n("i", {
                    staticClass: "material-icons c-file-message__content__ext-icon",
                    class: e.extIconClassBinding
                }, [e._v(" insert_drive_file "), n("span", {
                    staticClass: "c-file-message__content__ext-icon__ext-name"
                }, [e._v(" " + e._s(e.message.extension) + " ")])]), n("p", {
                    staticClass: "c-file-message__content__filename"
                }, [e._v(" " + e._s(e.message.name || "Unknown name") + " ")])]), e.message.file_url ? n("i", {
                    staticClass: "material-icons c-file-message__content__download-icon"
                }, [e._v(" get_app ")]) : e._e()])])])
            },
            Va = [];
        function Ha(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Wa = {
                name: "file-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                computed: {
                    extIconClassBinding: function() {
                        return Ha({}, "c-file-message__content__ext-icon--".concat(this.message.extension), !0)
                    },
                    classBinding: function() {
                        return Ha({}, "c-file-message--".concat(this.message.meta.sender), !0)
                    }
                },
                methods: {
                    downloadFile: function() {
                        var e = this.message.file_url;
                        e && window.open(e, "_blank").focus()
                    }
                }
            },
            za = Wa,
            qa = (n("6d74"), Object(V["a"])(za, Ga, Va, !1, null, null, null)),
            Ka = qa.exports,
            Ya = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-calendar-message"
                }, [n("transition", {
                    attrs: {
                        name: "cl-transition__fade",
                        mode: "out-in"
                    }
                }, [e.submittedDateData ? n("calendar-message-recap", {
                    key: "recap",
                    attrs: {
                        "date-data": e.submittedDateData,
                        "date-data-format": e.message.input_mode
                    }
                }) : n("calendar-form", {
                    key: "reload-calendar-form-" + e.reloadKey,
                    staticClass: "c-calendar-message__form",
                    attrs: {
                        options: e.message
                    },
                    on: {
                        submit: e.handleSubmit,
                        cancel: e.handleCancel
                    }
                })], 1)], 1)])
            },
            Ja = [],
            Qa = n("b166"),
            Xa = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-calendar-message-recap"
                }, [n("i", {
                    staticClass: "material-icons c-calendar-message-recap__icon"
                }, [e._v(" date_range ")]), n("div", {
                    staticClass: "c-calendar-message-recap__body"
                }, ["single" === e.recapData.type ? n("p", {
                    staticClass: "c-calendar-message-recap__body__text"
                }, [e._v(" " + e._s(e.recapData.date) + " ")]) : e._e(), "multiple" === e.recapData.type ? n("ul", {
                    staticClass: "c-calendar-message-recap__body__list"
                }, e._l(e.recapData.dateList, (function(t, s) {
                    return n("li", {
                        key: s,
                        staticClass: "c-calendar-message-recap__body__list__item"
                    }, [e._v(" " + e._s(t) + " ")])
                })), 0) : e._e(), "range" === e.recapData.type ? n("p", {
                    staticClass: "c-calendar-message-recap__body__text"
                }, [e._v(" " + e._s(e.recapData.range.start) + " — " + e._s(e.recapData.range.end) + " ")]) : e._e()])])
            },
            Za = [],
            ei = {
                name: "calendar-message-recap",
                props: {
                    dateData: {
                        type: [Object, Number, Array],
                        required: !0
                    },
                    dateDataFormat: {
                        type: String,
                        required: !0,
                        validator: function(e) {
                            return !!["single", "multiple", "range"].indexOf(e) > -1
                        }
                    }
                },
                computed: {
                    recapData: function() {
                        var e = this,
                            t = this.dateDataFormat,
                            n = this.dateData;
                        if ("single" === t || "multiple" === t)
                            return 1 === n.length ? {
                                type: "single",
                                date: this.formatDate(n[0])
                            } : {
                                type: "multiple",
                                dateList: n.map((function(t) {
                                    return e.formatDate(t)
                                }))
                            };
                        if ("range" === t)
                            return {
                                type: "range",
                                range: {
                                    start: this.formatDate(n[0]),
                                    end: this.formatDate(n[1])
                                }
                            };
                        throw new Error("No recap format found for date data format: '".concat(t, "'. Make sure the props validation works fine."))
                    }
                },
                methods: {
                    formatDate: function(e) {
                        return Object(Qa["a"])(new Date(e), "dd/MM/yyyy")
                    }
                }
            },
            ti = ei,
            ni = (n("4370"), Object(V["a"])(ti, Xa, Za, !1, null, null, null)),
            si = ni.exports,
            ai = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("util-form", {
                    staticClass: "c-calendar-form",
                    attrs: {
                        data: e.model
                    },
                    on: {
                        submit: function(t) {
                            return e.$emit("submit", e.model)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var s = t.dynamicValidation;
                            return [n("ui-date-picker", {
                                staticClass: "c-calendar-form__calendar",
                                attrs: {
                                    "is-inline": "panel" === e.options.display_mode,
                                    attributes: e.options.attributes,
                                    "min-date": e.minDate,
                                    "max-date": e.options.max_date,
                                    popover: {
                                        placement: "top"
                                    },
                                    mode: e.options.input_mode
                                },
                                scopedSlots: e._u([{
                                    key: "default",
                                    fn: function(t) {
                                        var s = t.inputProps,
                                            a = t.inputEvents;
                                        return n("ui-input-text", e._g(e._b({
                                            attrs: {
                                                "icon-name": "date-range",
                                                type: "text"
                                            }
                                        }, "ui-input-text", s, !1), a))
                                    }
                                }], null, !0),
                                model: {
                                    value: e.model,
                                    callback: function(t) {
                                        e.model = t
                                    },
                                    expression: "model"
                                }
                            }), n("div", {
                                staticClass: "o-spacing-8--h"
                            }), n("footer", {
                                staticClass: "c-calendar-form__footer"
                            }, [n("ui-button", {
                                attrs: {
                                    theme: "link"
                                },
                                on: {
                                    click: function(t) {
                                        return e.$emit("cancel")
                                    }
                                }
                            }, [e._v(" " + e._s(e.$t("gen.cancel")) + " ")]), n("div", {
                                staticClass: "o-spacing-12--w"
                            }), n("ui-button", {
                                attrs: {
                                    disabled: s.isErrored,
                                    type: "submit",
                                    theme: "primary"
                                }
                            }, [e._v(" " + e._s(e.$t("gen.submit")) + " ")])], 1)]
                        }
                    }])
                })
            },
            ii = [],
            ri = {
                name: "calendar-form",
                components: {
                    UtilForm: te["UtilForm"],
                    UiButton: te["UiButton"],
                    UiInputText: te["UiInputText"]
                },
                props: {
                    options: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        model: null
                    }
                },
                computed: {
                    minDate: function() {
                        return "number" === typeof this.options.min_date && this.options.min_date >= 0 ? this.options.min_date : new Date
                    }
                }
            },
            oi = ri,
            ci = (n("c0a1"), Object(V["a"])(oi, ai, ii, !1, null, null, null)),
            ui = ci.exports,
            li = {
                name: "calendar-message",
                components: {
                    BaseMessage: fs["a"],
                    CalendarForm: ui,
                    CalendarMessageRecap: si
                },
                extends: fs["a"],
                data: function() {
                    return {
                        submittedDateData: null,
                        reloadKey: 0
                    }
                },
                created: function() {
                    "undefined" === typeof this.message.is_submitted && (this.message.is_submitted = !1)
                },
                methods: {
                    formatDateData: function(e) {
                        var t = this.message.input_mode,
                            n = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
                            s = [];
                        if ("single" === t) {
                            var a = e;
                            s.push(Object(Qa["a"])(a, n))
                        } else if ("multiple" === t) {
                            var i = e;
                            i.forEach((function(e) {
                                var t = Object(Qa["a"])(e, n);
                                s.push(t)
                            }))
                        } else {
                            if ("range" !== t)
                                throw new Error("Invalid inputMode");
                            var r = e;
                            s.push(Object(Qa["a"])(r.start, n), Object(Qa["a"])(r.end, n))
                        }
                        return s
                    },
                    handleSubmit: function(e) {
                        var t = this.message.input_mode,
                            n = this.formatDateData(e);
                        this.submittedDateData = n,
                        this.$service("ask").sendDate(t, n.join(",")),
                        this.message.is_submitted = !0
                    },
                    handleCancel: function() {
                        this.reloadKey += 1
                    }
                }
            },
            di = li,
            pi = (n("9802"), Object(V["a"])(di, Ya, Ja, !1, null, null, null)),
            fi = pi.exports,
            mi = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-separator-message"
                }, [e.message.label ? [e.message.display_lines ? n("hr", {
                    staticClass: "c-separator-message__hr"
                }) : e._e(), n("span", {
                    staticClass: "c-separator-message__label"
                }, [e._v(" " + e._s(e.message.label) + " ")]), e.message.display_lines ? n("hr", {
                    staticClass: "c-separator-message__hr"
                }) : e._e()] : [n("hr", {
                    staticClass: "c-separator-message__hr"
                })]], 2)])
            },
            gi = [],
            hi = {
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"]
            },
            bi = hi,
            _i = (n("066a"), Object(V["a"])(bi, mi, gi, !1, null, null, null)),
            vi = _i.exports,
            yi = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("iframe", {
                    ref: "iframe",
                    staticClass: "c-iframe-message",
                    attrs: {
                        height: e.message.height,
                        src: e.message.url,
                        frameborder: "0",
                        allowfullscreen: e.message.allowfullscreen
                    }
                })])
            },
            wi = [],
            Ei = {
                name: "iframe-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                mounted: function() {
                    var e = this.message.width;
                    "auto" === e && (this.$refs.iframe.style.width = "auto"),
                    "full" === e && (this.$refs.iframe.style.width = "100%"),
                    "number" === typeof e && (this.$refs.iframe.width = e)
                }
            },
            ki = Ei,
            Si = (n("8021"), Object(V["a"])(ki, yi, wi, !1, null, null, null)),
            Ci = Si.exports,
            Oi = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("util-form", {
                    staticClass: "c-form-message",
                    attrs: {
                        data: e.model
                    },
                    on: {
                        submit: e.submitForm
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var s = t.dynamicValidation;
                            return [e._l(e.extendedFormEntries, (function(t, s) {
                                return n("util-form-group", {
                                    key: s
                                }, [t.label ? n("ui-input-label", {
                                    attrs: {
                                        "input-id": t.id
                                    }
                                }, [e._v(" " + e._s(t.label) + " ")]) : e._e(), "select" === t.element.content_type ? [n("ui-input-select", {
                                    attrs: {
                                        id: t.id,
                                        value: (e.message.data || {})[t.name],
                                        options: t.element.options,
                                        clearable: t.element.clearable || !1,
                                        searchable: t.element.searchable || !1,
                                        multiple: t.element.multiple || !1,
                                        taggable: t.element.taggable || !1,
                                        max: t.element.max,
                                        min: t.element.min,
                                        placeholder: t.element.placeholder,
                                        "close-on-select": t.element.closeOnSelect || !0,
                                        "get-option-label": function(e) {
                                            return e.label
                                        },
                                        reduce: function(e) {
                                            return e.value
                                        }
                                    },
                                    model: {
                                        value: e.model[t.name],
                                        callback: function(n) {
                                            e.$set(e.model, t.name, n)
                                        },
                                        expression: "model[entry.name]"
                                    }
                                })] : e._e(), "textarea" === t.element.content_type ? [n("ui-input-text-area", {
                                    attrs: {
                                        id: t.id,
                                        value: (e.message.data || {})[t.name],
                                        placeholder: t.element.placeholder,
                                        autofocus: t.element.autofocus || !1,
                                        cols: t.element.cols,
                                        rows: t.element.rows,
                                        "max-length": t.element.maxLength,
                                        "min-length": t.element.minLength,
                                        spellcheck: !1,
                                        resizable: t.element.resizable ? "vertical" : "none"
                                    },
                                    model: {
                                        value: e.model[t.name],
                                        callback: function(n) {
                                            e.$set(e.model, t.name, n)
                                        },
                                        expression: "model[entry.name]"
                                    }
                                })] : e._e()], 2)
                            })), n("div", {
                                staticClass: "o-spacing-24--h"
                            }), n("footer", {
                                staticClass: "c-form-message__footer"
                            }, [n("ui-button", {
                                attrs: {
                                    theme: "link"
                                },
                                on: {
                                    click: function(t) {
                                        return e.$emit("cancel")
                                    }
                                }
                            }, [e._v(" " + e._s(e.$t("gen.cancel")) + " ")]), n("div", {
                                staticClass: "o-spacing-12--w"
                            }), n("ui-button", {
                                attrs: {
                                    disabled: s.hasErrors,
                                    type: "submit",
                                    theme: "primary"
                                }
                            }, [e._v(" " + e._s(e.$t("gen.submit")) + " ")])], 1)]
                        }
                    }])
                })], 1)
            },
            xi = [],
            Ai = {
                name: "form-message",
                components: {
                    BaseMessage: fs["a"],
                    UtilForm: te["UtilForm"],
                    UtilFormGroup: te["UtilFormGroup"],
                    UiInputSelect: te["UiInputSelect"],
                    UiInputLabel: te["UiInputLabel"],
                    UiInputTextArea: te["UiInputTextArea"],
                    UiButton: te["UiButton"]
                },
                extends: fs["a"],
                data: function() {
                    return {
                        model: {}
                    }
                },
                computed: {
                    extendedFormEntries: function() {
                        return this.message.entries.map((function(e) {
                            return e.id = ee()(), e
                        }))
                    }
                },
                methods: {
                    submitForm: function() {
                        this.$service("ask").sendForm(this.model, this.message.payload),
                        this.$emit("submit", this.model)
                    }
                }
            },
            Mi = Ai,
            Pi = (n("9314"), Object(V["a"])(Mi, Oi, xi, !1, null, null, null)),
            Ti = Pi.exports,
            Ii = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-video-message"
                }, [e.isUrlEmbeddable && e.iframeUrl ? [n("div", {
                    staticClass: "c-video-message__iframe-wrapper"
                }, [n("iframe", {
                    staticClass: "c-video-message__iframe",
                    attrs: {
                        src: e.iframeUrl,
                        frameborder: "0",
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen: ""
                    }
                })])] : [n("video", {
                    staticClass: "c-video-message__video video-js js-video-message__video"
                }, [n("source", {
                    attrs: {
                        src: e.message.url
                    }
                })])]], 2)])
            },
            Li = [],
            Di = (n("fda2"), n("837a"), n("c59d")),
            Ni = n.n(Di),
            Ri = n("6e74"),
            ji = n.n(Ri),
            Bi = {
                name: "video-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                data: function() {
                    return {
                        player: null
                    }
                },
                computed: {
                    isUrlEmbedded: function() {
                        for (var e = ["www.dailymotion.com/embed", "www.youtube.com/embed", "player.vimeo.com/video"], t = 0; t < e.length; t += 1) {
                            var n = e[t];
                            if (this.message.url.includes(n))
                                return !0
                        }
                        return !1
                    },
                    isUrlEmbeddable: function() {
                        return Boolean(ji.a.info(this.message.url || "")) || this.isUrlEmbedded
                    },
                    iframeUrl: function() {
                        if (this.isUrlEmbeddable) {
                            if (this.isUrlEmbedded)
                                return this.message.url;
                            try {
                                var e = ji()(this.message.url),
                                    t = /<iframe.*?src="(.*?)"/;
                                return t.exec(e)[1]
                            } catch (n) {
                                throw new Error("Malformed iframe url", n)
                            }
                        }
                    }
                },
                mounted: function() {
                    this.isUrlEmbeddable || this.setupVideoWrapper()
                },
                methods: {
                    setupVideoWrapper: function() {
                        var e = this.$el.querySelector(".js-video-message__video");
                        this.player = Ni()(e, {
                            controls: !0,
                            autoplay: !1,
                            preload: "auto",
                            fluid: !0
                        })
                    }
                }
            },
            $i = Bi,
            Ui = (n("35af"), Object(V["a"])($i, Ii, Li, !1, null, null, null)),
            Fi = Ui.exports,
            Gi = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("a", {
                    staticClass: "c-link-message",
                    attrs: {
                        href: e.message.url,
                        target: e.message.open_in_current_tab ? "_self" : "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [n("div", {
                    staticClass: "c-link-message__content"
                }, [e.shouldFetchFavicon(e.message.url) ? n("img", {
                    staticClass: "c-link-message__content__favicon",
                    attrs: {
                        src: "https://s2.googleusercontent.com/s2/favicons?domain_url=" + (e.message.url || "").toLowerCase(),
                        alt: e.$t("LinkMessage.aria.faviconImageAlt")
                    }
                }) : e._e(), e.message.title ? n("p", {
                    staticClass: "c-link-message__content__title"
                }, [e._v(" " + e._s(e.message.title) + " ")]) : e._e(), e.message.hide_url ? e._e() : n("p", {
                    staticClass: "c-link-message__content__url"
                }, [e._v(" " + e._s(e.message.url) + " ")])])])])
            },
            Vi = [],
            Hi = {
                name: "link-message",
                components: {
                    BaseMessage: fs["a"]
                },
                methods: {
                    shouldFetchFavicon: function(e) {
                        return 0 !== e.indexOf("tel:") && 0 !== e.indexOf("mailto:")
                    }
                },
                extends: fs["a"]
            },
            Wi = Hi,
            zi = (n("8e84"), Object(V["a"])(Wi, Gi, Vi, !1, null, null, null)),
            qi = zi.exports,
            Ki = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-audio-message"
                }, ["custom" === e.audioProviderName ? n("audio", {
                    staticClass: "c-audio-message__audio",
                    attrs: {
                        controls: ""
                    }
                }, [n("source", {
                    attrs: {
                        src: e.message.url
                    }
                }), e._v(" Your browser does not support the audio tag for audio " + e._s(e.message.url) + " ")]) : e._e(), "soundcloud" === e.audioProviderName ? n("iframe", {
                    attrs: {
                        width: "100%",
                        height: "300",
                        frameborder: "0",
                        allow: "autoplay",
                        src: e.message.url
                    }
                }) : "spotify" === e.audioProviderName ? n("iframe", {
                    attrs: {
                        width: "100%",
                        height: "380",
                        frameborder: "0",
                        allowtransparency: "true",
                        allow: "encrypted-media",
                        src: e.buildSpotifyEmbeddedUrl()
                    }
                }) : "deezer" === e.audioProviderName ? n("iframe", {
                    attrs: {
                        scrolling: "no",
                        frameborder: "0",
                        allowtransparency: "true",
                        src: e.buildDeezerEmbeddedUrl(),
                        width: "100%"
                    }
                }) : e._e()])])
            },
            Yi = [],
            Ji = {
                name: "audio-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                computed: {
                    audioProviderName: function() {
                        if (!this.message.url || "string" !== typeof this.message.url)
                            return null;
                        var e = this.message.url.split("&")[0].toLowerCase();
                        return e.includes("soundcloud") ? "soundcloud" : e.includes("open.spotify.com/") ? "spotify" : e.includes("www.deezer.com/") ? "deezer" : e.includes(".mp3") || e.includes(".wav") || e.includes(".ogg") ? "custom" : null
                    }
                },
                methods: {
                    buildSpotifyEmbeddedUrl: function() {
                        return this.message.url.includes("/embed/") ? this.message.url : this.message.url.replace("/open.spotify.com/", "/open.spotify.com/embed/")
                    },
                    buildDeezerEmbeddedUrl: function() {
                        if (this.message.url.includes("/plugins/player"))
                            return this.message.url;
                        var e = this.message.url.split("&")[0].toLowerCase(),
                            t = e.substring(e.lastIndexOf("/") + 1),
                            n = "https://www.deezer.com/plugins/player";
                        return n += "?format=classic&autoplay=false&color=ff0000&layout=dark&size=medium&playlist=true", this.message.url.includes("/playlist") ? (n += "&type=playlist", n += "&id=".concat(t)) : this.message.url.includes("/album") ? (n += "&type=album", n += "&id=".concat(t)) : this.message.url.includes("/track") || this.message.url.includes("/tracks") ? (n += "&type=tracks", n += "&id=".concat(t)) : this.message.url.includes("/podcast") ? (n += "&type=podcast", n += "&id=".concat(t)) : this.message.url.includes("/episodes") ? (n += "&type=episodes", n += "&id=".concat(t)) : this.message.url.includes("/radio") ? (n += "&type=radio", n += "&id=radio-".concat(t)) : this.message.url.includes("/artist") ? (n += "&type=radio", n += "&id=artist-".concat(t)) : this.message.url.includes("/charts") && (n += "&type=charts", n += "&id=".concat(t)), n
                    }
                }
            },
            Qi = Ji,
            Xi = (n("11d5"), Object(V["a"])(Qi, Ki, Yi, !1, null, null, null)),
            Zi = Xi.exports,
            er = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("form", {
                    staticClass: "c-input-message c-input-message--bot",
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.submit(t)
                        }
                    }
                }, [e.message.title ? n("div", {
                    staticClass: "c-input-message__text font-bold"
                }, [e._v(" " + e._s(e.message.title) + " ")]) : e._e(), e.message.description ? n("div", {
                    staticClass: "c-input-message__text text-base text-blue-800"
                }, [e._v(" " + e._s(e.message.description) + " ")]) : e._e(), "textarea" === e.message.type ? n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.text,
                        expression: "text"
                    }],
                    staticClass: "c-input-message__textarea",
                    class: {
                        "c-input-message__textarea--disabled": e.submitted,
                        "c-input-message__textarea--invalid": e.invalid && e.hasBeenFocused
                    },
                    attrs: {
                        placeholder: e.message.placeholder,
                        disabled: e.submitted,
                        rows: "5",
                        autofocus: ""
                    },
                    domProps: {
                        value: e.text
                    },
                    on: {
                        focus: function(t) {
                            e.hasBeenFocused = !0
                        },
                        input: function(t) {
                            t.target.composing || (e.text = t.target.value)
                        }
                    }
                }) : "checkbox" === e.message.type ? n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.text,
                        expression: "text"
                    }],
                    staticClass: "c-input-message__input",
                    class: {
                        "c-input-message__input--disabled": e.submitted,
                        "c-input-message__input--invalid": e.invalid && e.hasBeenFocused
                    },
                    attrs: {
                        placeholder: e.message.placeholder,
                        min: e.message.min,
                        max: e.message.max,
                        minlength: e.message.minlength,
                        maxlength: e.message.maxlength,
                        disabled: e.submitted,
                        autofocus: "",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.text) ? e._i(e.text, null) > -1 : e.text
                    },
                    on: {
                        focus: function(t) {
                            e.hasBeenFocused = !0
                        },
                        change: function(t) {
                            var n = e.text,
                                s = t.target,
                                a = !!s.checked;
                            if (Array.isArray(n)) {
                                var i = null,
                                    r = e._i(n, i);
                                s.checked ? r < 0 && (e.text = n.concat([i])) : r > -1 && (e.text = n.slice(0, r).concat(n.slice(r + 1)))
                            } else
                                e.text = a
                        }
                    }
                }) : "radio" === e.message.type ? n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.text,
                        expression: "text"
                    }],
                    staticClass: "c-input-message__input",
                    class: {
                        "c-input-message__input--disabled": e.submitted,
                        "c-input-message__input--invalid": e.invalid && e.hasBeenFocused
                    },
                    attrs: {
                        placeholder: e.message.placeholder,
                        min: e.message.min,
                        max: e.message.max,
                        minlength: e.message.minlength,
                        maxlength: e.message.maxlength,
                        disabled: e.submitted,
                        autofocus: "",
                        type: "radio"
                    },
                    domProps: {
                        checked: e._q(e.text, null)
                    },
                    on: {
                        focus: function(t) {
                            e.hasBeenFocused = !0
                        },
                        change: function(t) {
                            e.text = null
                        }
                    }
                }) : n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.text,
                        expression: "text"
                    }],
                    staticClass: "c-input-message__input",
                    class: {
                        "c-input-message__input--disabled": e.submitted,
                        "c-input-message__input--invalid": e.invalid && e.hasBeenFocused
                    },
                    attrs: {
                        placeholder: e.message.placeholder,
                        min: e.message.min,
                        max: e.message.max,
                        minlength: e.message.minlength,
                        maxlength: e.message.maxlength,
                        disabled: e.submitted,
                        autofocus: "",
                        type: e.message.type
                    },
                    domProps: {
                        value: e.text
                    },
                    on: {
                        focus: function(t) {
                            e.hasBeenFocused = !0
                        },
                        input: function(t) {
                            t.target.composing || (e.text = t.target.value)
                        }
                    }
                }), e.message.submit_label ? n("button", {
                    staticClass: "c-input-message__button",
                    class: {
                        "c-input-message__button--disabled": e.submitted || e.invalid
                    },
                    attrs: {
                        type: "submit",
                        disabled: e.submitted || e.invalid
                    }
                }, [e._v(" " + e._s(e.message.submit_label) + " ")]) : e._e()])])
            },
            tr = [],
            nr = {
                name: "input-message",
                props: ["isLastGroup"],
                data: function() {
                    return {
                        submitted: !1,
                        hasBeenFocused: !1,
                        text: this.message.default_value || ""
                    }
                },
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                watch: {
                    isLastGroup: {
                        immediate: !0,
                        handler: function(e) {
                            !1 === e && (this.submitted = !0)
                        }
                    }
                },
                computed: {
                    invalid: function() {
                        var e = this.message,
                            t = e.max,
                            n = e.min,
                            s = e.type,
                            a = e.maxlength,
                            i = e.minlength,
                            r = this.text || "";
                        if ("number" === s) {
                            if ("undefined" !== typeof t && Number(r) > t)
                                return !0;
                            if ("undefined" !== typeof n && Number(r) < n)
                                return !0
                        } else {
                            if ("email" === s)
                                return !"".concat(r).match(/.+@.+\..+/i);
                            if ("text" === s) {
                                if ("undefined" !== typeof a && "".concat(r).length > a)
                                    return !0;
                                if ("undefined" !== typeof i && "".concat(r).length < i)
                                    return !0
                            }
                        }
                        return !1
                    }
                },
                methods: {
                    submit: function() {
                        if (!this.invalid && !this.submitted && this.text.trim()) {
                            var e = en["a"].createMessage("text", "user", {
                                text: this.text.trim()
                            });
                            this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                message: e
                            }),
                            this.$service("ask").sendTextMessage(e),
                            this.submitted = !0
                        }
                    }
                }
            },
            sr = nr,
            ar = (n("917b"), Object(V["a"])(sr, er, tr, !1, null, null, null)),
            ir = ar.exports,
            rr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-latex-message"
                }, [n("katex-element", {
                    attrs: {
                        expression: e.message.expression
                    }
                })], 1)])
            },
            or = [],
            cr = {
                name: "latex-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"]
            },
            ur = cr,
            lr = (n("c119"), Object(V["a"])(ur, rr, or, !1, null, null, null)),
            dr = lr.exports,
            pr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-text-message",
                    class: e.classBinding,
                    style: e.backgroundBinding
                }, [n("table", {
                    staticClass: "c-text-message__table"
                }, [n("tbody", e._l(e.parsed, (function(e) {
                    return n("tr", {
                        key: e.content
                    }, ["text" === e.type ? n("td", {
                        directives: [{
                            name: "markdown",
                            rawName: "v-markdown",
                            value: e.content,
                            expression: "part.content"
                        }],
                        staticClass: "c-text-message__text"
                    }) : n("td", [n("katex-element", {
                        attrs: {
                            expression: e.content
                        }
                    })], 1)])
                })), 0)])])])
            },
            fr = [];
        function mr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function gr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? mr(Object(n), !0).forEach((function(t) {
                    hr(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mr(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function hr(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        function br(e) {
            var t = new RegExp("{latex}", "gm"),
                n = e.split(t),
                s = [];
            return n.forEach((function(e) {
                if (-1 !== e.indexOf("{/latex}")) {
                    var t = e.split("{/latex}");
                    s.push({
                        type: "latex",
                        content: t[0]
                    }),
                    t[1] && s.push({
                        type: "text",
                        content: t[1]
                    })
                } else
                    s.push({
                        type: "text",
                        content: e
                    })
            })), s
        }
        var _r = {
                name: "cned-raw-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                computed: gr(gr({}, Object(M["b"])(["currentChannelStyle"])), {}, {
                    parsed: function() {
                        return br(this.message.text)
                    },
                    classBinding: function() {
                        var e,
                            t = this.message,
                            n = t.meta,
                            s = t.options;
                        return e = {}, hr(e, "c-text-message--".concat(n.sender), !0), hr(e, "c-text-message--highlight-".concat(s.highlight), Boolean(s.highlight)), e
                    },
                    textBinding: function() {
                        var e = this.message.meta;
                        return "user" !== e.sender ? {} : {
                            color: this.currentChannelStyle.user_message_text_color
                        }
                    },
                    backgroundBinding: function() {
                        var e = this.message.meta;
                        return "user" !== e.sender ? {} : {
                            background: this.currentChannelStyle.user_message_text_background
                        }
                    }
                })
            },
            vr = _r,
            yr = (n("68c1"), n("ead3"), Object(V["a"])(vr, pr, fr, !1, null, null, null)),
            wr = yr.exports,
            Er = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("form", {
                    staticClass: "c-multiselect-message c-multiselect-message--bot",
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.submit(t)
                        }
                    }
                }, [e.message.title ? n("div", {
                    staticClass: "c-multiselect-message__text font-bold"
                }, [e._v(" " + e._s(e.message.title) + " ")]) : e._e(), e.message.description ? n("div", {
                    staticClass: "c-multiselect-message__text text-base text-blue-800"
                }, [e._v(" " + e._s(e.message.description) + " ")]) : e._e(), n("div", {
                    staticClass: "c-multiselect-message__container"
                }, e._l(e.message.options, (function(t) {
                    return n("div", {
                        key: "multiselect-" + t.id + "-" + e.checkedValues.join(""),
                        staticClass: "c-multiselect-message__checkbox",
                        class: {
                            checked: e.isChecked(t.value) && !e.submitted,
                            disabled: e.submitted
                        }
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.checkedValues,
                            expression: "checkedValues"
                        }],
                        attrs: {
                            type: "checkbox",
                            id: t.id,
                            disabled: e.submitted,
                            checked: ""
                        },
                        domProps: {
                            value: t.value,
                            checked: Array.isArray(e.checkedValues) ? e._i(e.checkedValues, t.value) > -1 : e.checkedValues
                        },
                        on: {
                            change: function(n) {
                                var s = e.checkedValues,
                                    a = n.target,
                                    i = !!a.checked;
                                if (Array.isArray(s)) {
                                    var r = t.value,
                                        o = e._i(s, r);
                                    a.checked ? o < 0 && (e.checkedValues = s.concat([r])) : o > -1 && (e.checkedValues = s.slice(0, o).concat(s.slice(o + 1)))
                                } else
                                    e.checkedValues = i
                            }
                        }
                    }), n("label", {
                        attrs: {
                            for: t.id
                        }
                    }, [e._v(e._s(t.label || t.value))])])
                })), 0), n("button", {
                    staticClass: "c-multiselect-message__button",
                    class: {
                        "c-multiselect-message__button--disabled": e.submitted || e.invalid
                    },
                    attrs: {
                        type: "submit",
                        disabled: e.submitted || e.invalid
                    }
                }, [e._v(" " + e._s(e.message.submit_label || "OK") + " ")])])])
            },
            kr = [],
            Sr = {
                name: "input-message",
                props: ["isLastGroup"],
                data: function() {
                    return {
                        submitted: !1,
                        checkedValues: []
                    }
                },
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                watch: {
                    isLastGroup: {
                        immediate: !0,
                        handler: function(e) {
                            !1 === e && (this.submitted = !0)
                        }
                    }
                },
                computed: {
                    invalid: function() {
                        var e = this.message,
                            t = e.required,
                            n = e.min,
                            s = e.max;
                        return !(!t || this.checkedValues.length) || (this.checkedValues.length < n || this.checkedValues.length > s)
                    },
                    checkedOptions: function() {
                        var e = this;
                        return this.message.options.reduce((function(t, n) {
                            return e.checkedValues.find((function(e) {
                                return n.value == e
                            })) && t.push(n), t
                        }), [])
                    }
                },
                methods: {
                    isChecked: function(e) {
                        return !!this.checkedValues.find((function(t) {
                            return t === e
                        }))
                    },
                    submit: function() {
                        if (!this.invalid && !this.submitted) {
                            var e = en["a"].createMessage("text", "user", {
                                text: this.checkedOptions.map((function(e) {
                                    return e.label || e.value
                                })).join(", ")
                            });
                            this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                message: e
                            }),
                            console.log(this.checkedValues.join(",")),
                            this.$service("ask").sendAction(this.checkedValues.join(",")),
                            this.submitted = !0
                        }
                    }
                }
            },
            Cr = Sr,
            Or = (n("c180"), Object(V["a"])(Cr, Er, kr, !1, null, null, null)),
            xr = Or.exports,
            Ar = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({
                    attrs: {
                        "no-sender-icon": !0
                    }
                }, "base-message", {
                    message: e.message,
                    token: e.token
                }, !1), [n("transition", {
                    attrs: {
                        name: "cl-transition__absolute"
                    }
                }, [e.isHidden ? e._e() : n("div", {
                    staticClass: "c-quick-buttons-message"
                }, [n("ul", {
                    staticClass: "c-quick-buttons-message__list"
                }, e._l(e.message.buttons, (function(t, s) {
                    return n("li", {
                        key: s,
                        staticClass: "c-quick-buttons-message__list__button",
                        attrs: {
                            role: "button"
                        },
                        on: {
                            click: function(n) {
                                return e.handleClick(t)
                            }
                        }
                    }, [e._v(" " + e._s(t.title) + " ")])
                })), 0)])])], 1)
            },
            Mr = [],
            Pr = {
                name: "quick-buttons-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                data: function() {
                    return {
                        isHidden: !1
                    }
                },
                created: function() {
                    this.isHidden = !(this.message.buttons || []).length || this.message.meta.is_hidden
                },
                mounted: function() {
                    var e = this;
                    this.$eventBus(this.token).$on(_e["a"].DISPLAY_MESSAGE, (function() {
                        e.isHidden = !0,
                        e.message.meta.is_hidden = !0,
                        e.message.meta.is_first_message_in_group = !1;
                        var t = e.$store.getters.getDiscussion(e.token),
                            n = t.messageGroups.find((function(t) {
                                return t.find((function(t) {
                                    return t.meta.message_id === e.message.meta.message_id
                                }))
                            }));
                        n && 0 === e.message.meta.pos_in_group && n[1] && (n[1].meta.is_first_message_in_group = !0)
                    }))
                },
                methods: {
                    handleClick: function(e) {
                        this.isHidden = !0;
                        var t = en["a"].createMessage("text", "user", {
                            text: e.title
                        });
                        if (this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                            message: t
                        }), !e.payload)
                            throw new Error("Missing button payload");
                        this.$service("ask").sendAction(e.payload, t)
                    }
                }
            },
            Tr = Pr,
            Ir = (n("1927"), n("2a0b"), Object(V["a"])(Tr, Ar, Mr, !1, null, null, null)),
            Lr = Ir.exports,
            Dr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("base-message", e._b({}, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "js-carousel-message-wrapper"
                }, [n("div", {
                    staticClass: "c-carousel-message"
                }, [n("splide", {
                    attrs: {
                        options: e.sliderOptions,
                        slides: e.elements,
                        hasSliderWrapper: !0
                    },
                    scopedSlots: e._u([{
                        key: "controls",
                        fn: function() {},
                        proxy: !0
                    }])
                }, e._l(e.elements, (function(t, s) {
                    return n("splide-slide", {
                        key: s
                    }, [n("div", {
                        staticClass: "c-text-message c-text-message--bot",
                        staticStyle: {
                            "max-width": "100%"
                        }
                    }, [n("table", {
                        staticClass: "c-text-message__table"
                    }, [n("tbody", e._l(e.parseRaw(t.content.text), (function(e) {
                        return n("tr", {
                            key: e.content
                        }, ["text" === e.type ? n("td", {
                            directives: [{
                                name: "markdown",
                                rawName: "v-markdown",
                                value: e.content,
                                expression: "part.content"
                            }],
                            staticClass: "c-text-message__text"
                        }) : n("td", [n("katex-element", {
                            attrs: {
                                expression: e.content
                            }
                        })], 1)])
                    })), 0)])])])
                })), 1)], 1)])])], 1)
            },
            Nr = [];
        function Rr(e) {
            var t = new RegExp("{latex}", "gm"),
                n = e.split(t),
                s = [];
            return n.forEach((function(e) {
                if (-1 !== e.indexOf("{/latex}")) {
                    var t = e.split("{/latex}");
                    s.push({
                        type: "latex",
                        content: t[0]
                    }),
                    t[1] && s.push({
                        type: "text",
                        content: t[1]
                    })
                } else
                    s.push({
                        type: "text",
                        content: e
                    })
            })), s
        }
        var jr = {
                name: "carousel-raw-message",
                extends: Fa,
                components: {
                    BaseMessage: fs["a"]
                },
                data: function() {
                    return {
                        width: null,
                        slider: null,
                        sliderOptions: {
                            type: "slide",
                            rewind: !0,
                            gap: "8px",
                            pagination: "slider",
                            perPage: 1,
                            perMove: 1,
                            trimSpace: !0,
                            padding: 32,
                            autoplay: !1,
                            autoWidth: !1,
                            breakpoints: {
                                640: {
                                    fixedWidth: "85%",
                                    autoWidth: !1
                                }
                            }
                        }
                    }
                },
                computed: {
                    elements: function() {
                        return this.message.elements.filter((function(e) {
                            return "cnedraw" === e.content_type
                        }))
                    }
                },
                methods: {
                    keepTrackOfCarouselWidth: function() {
                        this.width = this.$el.querySelector(".c-carousel-message").offsetWidth
                    },
                    attachResizeListeners: function() {
                        var e = this,
                            t = this.$el,
                            n = [{
                                source: t.querySelector(".c-carousel-message"),
                                target: t.querySelector(".js-carousel-message-wrapper"),
                                followWidth: !0,
                                followHeight: !0,
                                onWidthResize: function() {
                                    e.keepTrackOfCarouselWidth()
                                }
                            }];
                        Be.attachListeners(n)
                    },
                    parseRaw: function(e) {
                        return Rr(e)
                    }
                }
            },
            Br = jr,
            $r = Object(V["a"])(Br, Dr, Nr, !1, null, null, null),
            Ur = $r.exports,
            Fr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("base-message", e._b({
                    attrs: {
                        "no-sender-icon": !0
                    }
                }, "base-message", {
                    message: e.message,
                    sender: e.sender,
                    token: e.token
                }, !1), [n("div", {
                    staticClass: "c-suggestion-buttons-message"
                }, [e.message.title ? n("h1", {
                    staticClass: "c-suggestion-buttons-message__title"
                }, [e._v(" " + e._s(e.message.title) + " ")]) : e._e(), n("ul", {
                    staticClass: "c-suggestion-buttons-message__list"
                }, e._l(e.message.buttons, (function(t, s) {
                    return n("li", {
                        key: s,
                        staticClass: "c-suggestion-buttons-message__list__button-wrapper"
                    }, [n("button", {
                        staticClass: "c-suggestion-buttons-message__list__button",
                        class: {
                            visited: t.options.visited
                        },
                        on: {
                            click: function(n) {
                                return e.handleClick(t)
                            }
                        }
                    }, [e._v(" " + e._s(t.title) + " ")])])
                })), 0)])])
            },
            Gr = [],
            Vr = {
                name: "suggestion-buttons-message",
                components: {
                    BaseMessage: fs["a"]
                },
                extends: fs["a"],
                methods: {
                    handleClick: function(e) {
                        this.hideMessage = !0,
                        e.options.visited = !0;
                        var t = en["a"].createMessage("text", "user", {
                            text: e.title
                        });
                        if (this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                            message: t
                        }), !e.payload)
                            throw new Error("Missing button payload");
                        this.$service("ask").sendAction(e.payload, t)
                    }
                }
            },
            Hr = Vr,
            Wr = (n("1330"), Object(V["a"])(Hr, Fr, Gr, !1, null, null, null)),
            zr = Wr.exports,
            qr = {
                name: "messages-list",
                components: {
                    TypingMessage: ls,
                    TextMessage: ys,
                    ImageMessage: qs,
                    ListMessage: Ma,
                    CarouselMessage: Fa,
                    FileMessage: Ka,
                    CalendarMessage: fi,
                    SeparatorMessage: vi,
                    IframeMessage: Ci,
                    FormMessage: Ti,
                    VideoMessage: Fi,
                    LinkMessage: qi,
                    AudioMessage: Zi,
                    InputMessage: ir,
                    LatexMessage: dr,
                    CnedRawMessage: wr,
                    MultiselectMessage: xr,
                    QuickButtonsMessage: Lr,
                    CnedRawCarouselMessage: Ur,
                    SuggestionButtonsMessage: zr,
                    StripeMessage: function() {
                        return n.e("chunk-2983b6b0").then(n.bind(null, "095f"))
                    }
                },
                props: {
                    token: {
                        type: String,
                        required: !0
                    },
                    showTyping: {
                        type: Boolean,
                        default: !1
                    },
                    messageGroups: {
                        type: Array,
                        required: !0
                    }
                },
                methods: {
                    getGroupKey: function(e) {
                        var t = this.messageGroups[e][0];
                        return t ? "group" + t.meta.message_id : "group-" + e
                    }
                }
            },
            Kr = qr,
            Yr = (n("bf29"), Object(V["a"])(Kr, ss, as, !1, null, null, null)),
            Jr = Yr.exports,
            Qr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-header-card c-card"
                }, [n("button", {
                    staticClass: "c-header-card__left-sidebar-button js-header-card__left-open-button",
                    on: {
                        click: e.openLeftSidebar
                    }
                }, [n("div", {
                    staticClass: "c-header-card__left-sidebar-button__image-box"
                }, [e.currentBotImage ? n("img", {
                    staticClass: "c-header-card__left-sidebar-button__image-box__image",
                    attrs: {
                        src: e.currentBotImage,
                        alt: e.$t("gen.aria.botImageAlt")
                    }
                }) : e._e()]), n("div", {
                    staticClass: "c-header-card__left-sidebar-button__text-box"
                }, [n("h1", {
                    staticClass: "c-header-card__left-sidebar-button__title"
                }, [n("span", {
                    staticClass: "green-dot"
                }), e._v(" " + e._s(e.discussionTitle) + " ")]), e.channelDescription ? n("h3", {
                    staticClass: "c-header-card__left-sidebar-button__subtitle",
                    class: {
                        "c-header-card__left-sidebar-button__subtitle-open": e.showDetails
                    }
                }, [e._v(" " + e._s(e.channelDescription) + " ")]) : e._e()]), e.channelDescription ? n("i", {
                    staticClass: "material-icons c-header-card__left-sidebar-button__icon"
                }, [e._v(" keyboard_arrow_right ")]) : e._e()]), e.showCsmlApps ? n("button", {
                    staticClass: "c-header-card__right-sidebar-button js-header-card__right-open-button",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.openRightSidebar
                    }
                }, [n("i", {
                    staticClass: "material-icons c-header-card__right-sidebar-button__icon"
                }, [e._v(" menu ")])]) : e._e(), e.isChatbox ? n("button", {
                    staticClass: "c-header-card__close-button",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.close
                    }
                }, [n("i", {
                    staticClass: "material-icons c-header-card__close-button__icon"
                }, [e._v(" close ")])]) : e._e()])
            },
            Xr = [];
        function Zr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function eo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zr(Object(n), !0).forEach((function(t) {
                    to(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function to(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var no = {
                name: "header-card",
                props: {
                    token: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        showDetails: !1
                    }
                },
                computed: eo(eo({}, Object(M["b"])(["showCsmlApps", "isChatbox"])), {}, {
                    channel: function() {
                        return this.$store.getters.getChannel(this.token) || {}
                    },
                    discussionTitle: function() {
                        return this.channel.channel_title
                    },
                    channelDescription: function() {
                        return this.channel.channel_description || ""
                    },
                    currentBot: function() {
                        return this.$store.getters.getBot(this.token)
                    },
                    currentBotName: function() {
                        return this.currentBot.name
                    },
                    currentBotImage: function() {
                        return this.currentBot.imageUrl
                    }
                }),
                methods: {
                    openLeftSidebar: function() {
                        _e["b"].$emit(_e["a"].OPEN_SIDEBAR, "left")
                    },
                    openRightSidebar: function() {
                        _e["b"].$emit(_e["a"].OPEN_SIDEBAR, "right")
                    },
                    close: function() {
                        window.parent && window.parent.postMessage("csml:webapp:close", "*")
                    }
                }
            },
            so = no,
            ao = (n("e83d"), Object(V["a"])(so, Qr, Xr, !1, null, null, null)),
            io = ao.exports,
            ro = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-sidebar-mask"
                }, [n("transition", {
                    attrs: {
                        name: "cl-transition__fade"
                    }
                }, [e.isVisible ? n("div", {
                    staticClass: "c-sidebar-mask__mask"
                }) : e._e()])], 1)
            },
            oo = [],
            co = {
                name: "sidebar-mask",
                data: function() {
                    return {
                        isVisible: !1
                    }
                },
                mounted: function() {
                    this.setupEventsHandlers()
                },
                methods: {
                    setupEventsHandlers: function() {
                        var e = this;
                        _e["b"].$on(_e["a"].SIDEBAR_OPENED, (function() {
                            e.isVisible = !0
                        })),
                        _e["b"].$on(_e["a"].SIDEBAR_CLOSED, (function() {
                            e.isVisible = !1
                        }))
                    }
                }
            },
            uo = co,
            lo = (n("f972"), Object(V["a"])(uo, ro, oo, !1, null, null, null)),
            po = lo.exports,
            fo = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-network-info-panel"
                }, [n("p", {
                    staticClass: "c-network-info-panel__text"
                }, [e._v(" " + e._s(e.$t("NetworkInfoPanel.text")) + " ")])])
            },
            mo = [],
            go = {
                name: "network-info-panel"
            },
            ho = go,
            bo = (n("670c"), Object(V["a"])(ho, fo, mo, !1, null, null, null)),
            _o = bo.exports,
            vo = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.newMessageNoticeVisible ? n("div", {
                    staticClass: "c-new-message-info-panel",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.scrollToNewMessages
                    }
                }, [n("p", {
                    staticClass: "c-new-message-info-panel__text"
                }, [e._v(" " + e._s(e.$t("NewMessageInfoPanel.text")) + " ")])]) : e._e()
            },
            yo = [];
        function wo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function Eo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? wo(Object(n), !0).forEach((function(t) {
                    ko(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function ko(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var So = {
                name: "new-message-info-panel",
                computed: Eo({}, Object(M["b"])(["newMessageNoticeVisible"])),
                methods: {
                    scrollToNewMessages: function() {
                        $s["a"].scrollToBottom(!0),
                        this.$store.dispatch("setNewMessageNoticeVisibility", !1)
                    }
                }
            },
            Co = So,
            Oo = (n("3942"), Object(V["a"])(Co, vo, yo, !1, null, null, null)),
            xo = Oo.exports,
            Ao = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-apps-mobile-panel",
                    class: e.classBinding
                }, [n("header", {
                    staticClass: "c-apps-mobile-panel__header"
                }, [n("h1", {
                    staticClass: "c-apps-mobile-panel__header__title"
                }, [e._v(" " + e._s(e.$t("AppsList.title")) + " ")]), n("ui-button", {
                    staticClass: "c-apps-mobile-panel__header__close-button",
                    attrs: {
                        "icon-name": "close"
                    },
                    on: {
                        click: e.closePanel
                    }
                })], 1), n("util-loading-wrapper", {
                    staticClass: "u-full-w-h",
                    attrs: {
                        "is-loading": e.isLoading
                    }
                }, [n("apps-list", {
                    attrs: {
                        token: e.token,
                        apps: e.apps,
                        "display-mode": "apps-mobile-panel"
                    }
                })], 1)], 1)
            },
            Mo = [];
        function Po(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function To(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        Po(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        Po(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function Io(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function Lo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Io(Object(n), !0).forEach((function(t) {
                    Do(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Io(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function Do(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var No = {
                name: "apps-mobile-panel",
                components: {
                    UiButton: te["UiButton"],
                    UtilLoadingWrapper: te["UtilLoadingWrapper"],
                    AppsList: ke
                },
                props: {
                    token: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        apps: [],
                        isOpen: !1,
                        isLoading: !0
                    }
                },
                computed: Lo(Lo({}, Object(M["c"])({
                    currentToken: function(e) {
                        return e.channels.currentToken
                    }
                })), {}, {
                    classBinding: function() {
                        return {
                            "is-open": this.isOpen
                        }
                    }
                }),
                created: function() {
                    this.setupEventsHandlers(),
                    this.loadApps()
                },
                methods: {
                    loadApps: function() {
                        var e = this;
                        return To(X.a.mark((function t() {
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return e.isLoading = !0, t.next = 3, e.$service("requester").execute("loadCsmlApps");
                                    case 3:
                                        e.apps = t.sent,
                                        e.isLoading = !1;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    },
                    closePanel: function() {
                        this.$eventBus(this.token).$emit(_e["a"].CLOSE_APPS_MOBILE_PANEL)
                    },
                    setupEventsHandlers: function() {
                        var e = this,
                            t = this.$eventBus(this.token),
                            n = function() {
                                e.token === e.currentToken && (e.isOpen = !0)
                            },
                            s = function() {
                                e.token === e.currentToken && (e.isOpen = !1)
                            };
                        t.$on(_e["a"].OPEN_APPS_MOBILE_PANEL, n),
                        t.$on(_e["a"].CLOSE_APPS_MOBILE_PANEL, s),
                        _e["b"].$on(_e["a"].CSML_FLOW_CHANGED, s)
                    }
                }
            },
            Ro = No,
            jo = (n("0807"), Object(V["a"])(Ro, Ao, Mo, !1, null, null, null)),
            Bo = jo.exports;
        function $o(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function Uo(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        $o(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        $o(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function Fo(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Go(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Vo(e, t, n) {
            return t && Go(e.prototype, t), n && Go(e, n), e
        }
        var Ho = function() {
                function e(t) {
                    Fo(this, e),
                    this.apiKey = t,
                    this.languageCode = navigator.language || navigator.userLanguage
                }
                return Vo(e, [{
                    key: "speak",
                    value: function() {
                        var e = Uo(X.a.mark((function e(t) {
                            var n,
                                s,
                                a = this;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (this.audioContext) {
                                            e.next = 6;
                                            break
                                        }
                                        if (n = window.AudioContext || window.webkitAudioContext, n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        this.audioContext = new n,
                                        this.audioContext.resume();
                                    case 6:
                                        return e.next = 8, this.textToSpeech(t);
                                    case 8:
                                        return s = e.sent, e.abrupt("return", new Promise((function(e) {
                                            a.audioContext.decodeAudioData(s, (function(t) {
                                                var n = a.audioContext.createBufferSource();
                                                console.log(n),
                                                n.buffer = t,
                                                n.connect(a.audioContext.destination),
                                                n.onended = e,
                                                n.start()
                                            }))
                                        })));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "textToSpeech",
                    value: function() {
                        var e = Uo(X.a.mark((function e(t) {
                            var n,
                                s;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fetch("https://texttospeech.googleapis.com/v1/text:synthesize?key=".concat(this.apiKey), {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                input: {
                                                    text: t
                                                },
                                                voice: {
                                                    languageCode: this.languageCode
                                                },
                                                audioConfig: {
                                                    audioEncoding: "LINEAR16"
                                                }
                                            })
                                        });
                                    case 2:
                                        return n = e.sent, e.next = 5, n.json();
                                    case 5:
                                        if (s = e.sent, !s.error) {
                                            e.next = 10;
                                            break
                                        }
                                        throw s.error.message;
                                    case 10:
                                        return e.abrupt("return", hn.a.toByteArray(s.audioContent).buffer);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }]), e
            }(),
            Wo = Ho;
        function zo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function qo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zo(Object(n), !0).forEach((function(t) {
                    Ko(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function Ko(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        function Yo(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function Jo(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        Yo(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        Yo(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        var Qo = new Wo("AIzaSyDghdDIDznZEpS7WV5j6w50RDKnns3eS2E", "https://eu-speech.googleapis.com");
        function Xo(e) {
            return Zo.apply(this, arguments)
        }
        function Zo() {
            return Zo = Jo(X.a.mark((function e(t) {
                return X.a.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new Promise((function(e) {
                                setTimeout(e, t)
                            })));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }), e)
            }))), Zo.apply(this, arguments)
        }
        var ec = {
                name: "index",
                components: {
                    UtilLoadingWrapper: te["UtilLoadingWrapper"],
                    RightSideBar: Ge,
                    LeftSideBar: mt
                },
                props: {
                    display404Error: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isLoading: !1,
                        error404: !1,
                        error500: !1,
                        showTopbar: "true" !== this.$route.query.hide_topbar,
                        ttsQueue: []
                    }
                },
                computed: qo(qo(qo({}, Object(M["c"])({
                    channelsList: function(e) {
                        return e.channels.channelsList
                    },
                    screenReaderEnabled: function(e) {
                        return !0
                    }
                })), Object(M["b"])(["currentDiscussionComponent", "currentDiscussion"])), {}, {
                    currentDiscussionComponentProps: function() {
                        if (!this.currentDiscussion)
                            return {};
                        var e = this.currentDiscussion.token,
                            t = this.$store.getters.getChannel(e) || {},
                            n = t.active;
                        return {
                            token: e,
                            isDisabled: !n,
                            showTopbar: this.showTopbar
                        }
                    }
                }),
                mounted: function() {
                    this.setupWindowFocusListeners(),
                    this.$session.exists() || this.$session.start(),
                    this.$session.get("session_uuid") && this.$session.get("session_uuid") || this.$session.set("session_uuid", ee()())
                },
                created: function() {
                    var e = this;
                    return Jo(X.a.mark((function t() {
                        return X.a.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.setupEventListeners(), !e.channelsList.length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return e.isLoading = !0, t.prev = 4, t.next = 7, e.fetchData();
                                case 7:
                                    t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t["catch"](4),
                                    404 === (t.t0.response || {}).status ? e.error404 = !0 : e.error500 = !0;
                                case 12:
                                    e.isLoading = !1;
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }), t, null, [[4, 9]])
                    })))()
                },
                methods: {
                    setupEventListeners: function() {
                        var e = this;
                        _e["b"].$on(_e["a"].SAY_TEXT, (function(t) {
                            setTimeout(Jo(X.a.mark((function n() {
                                return X.a.wrap((function(n) {
                                    while (1)
                                        switch (n.prev = n.next) {
                                        case 0:
                                            if (!e.screenReaderEnabled) {
                                                n.next = 4;
                                                break
                                            }
                                            return e.ttsQueue.push(O.markdownToRawText(t)), n.next = 4, e.speakNext();
                                        case 4:
                                        case "end":
                                            return n.stop()
                                        }
                                }), n)
                            }))), 300)
                        }))
                    },
                    speakNext: function() {
                        var e = this;
                        return Jo(X.a.mark((function t() {
                            var n;
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!e.isSpeaking && e.ttsQueue.length) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return e.isSpeaking = !0, n = e.ttsQueue.shift(), t.next = 6, Qo.speak(n);
                                    case 6:
                                        return t.next = 8, Xo(100);
                                    case 8:
                                        return e.isSpeaking = !1, t.abrupt("return", e.speakNext());
                                    case 10:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    },
                    fetchData: function() {
                        var e = this;
                        return Jo(X.a.mark((function t() {
                            var n,
                                s,
                                a,
                                i,
                                r,
                                o,
                                c,
                                u;
                            return X.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.$store, s = e.$route, a = s.params, i = a.channelToken, r = a.groupToken, t.next = 4, e.$service("channels").load({
                                            groupToken: r,
                                            channelToken: i
                                        });
                                    case 4:
                                        if (o = t.sent, c = i || o[0].token, !i || -1 !== o.map((function(e) {
                                            return e.token
                                        })).indexOf(i)) {
                                            t.next = 10;
                                            break
                                        }
                                        return e.isLoading = !1, e.error404 = !0, t.abrupt("return");
                                    case 10:
                                        n.dispatch("registerChannels", o),
                                        n.dispatch("registerDiscussions", o),
                                        n.dispatch("setCurrentToken", c),
                                        e.$service("channels").formatAndReplaceUrl(c, r),
                                        u = e.$service("auth"),
                                        u.isAuthenticated() || u.authenticate();
                                    case 16:
                                    case "end":
                                        return t.stop()
                                    }
                            }), t)
                        })))()
                    },
                    setupWindowFocusListeners: function() {
                        var e = this;
                        window.addEventListener("focus", (function() {
                            e.$store.dispatch("setWindowFocusState", !0)
                        })),
                        window.addEventListener("blur", (function() {
                            e.$store.dispatch("setWindowFocusState", !1)
                        }))
                    }
                }
            },
            tc = ec,
            nc = (n("ca9c"), Object(V["a"])(tc, Y, J, !1, null, null, null)),
            sc = nc.exports,
            ac = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-discussion js-discussion"
                }, [n("sidebar-mask"), e.showTopbar ? n("div", {
                    staticClass: "js-header-card-wrapper c-discussion__header-card-wrapper"
                }, [n("header-card", {
                    staticClass: "js-header-card",
                    attrs: {
                        token: e.token
                    }
                })], 1) : e._e(), n("messages-list", {
                    attrs: {
                        token: e.token,
                        "show-typing": e.showTyping,
                        "message-groups": e.messageGroups
                    }
                }), n("notification-zone", {
                    attrs: {
                        position: "bottom"
                    }
                }, [e.isConnected ? n("new-message-info-panel") : n("network-info-panel")], 1), n("div", {
                    staticClass: "js-input-card-wrapper c-discussion__input-card-wrapper"
                }, [n("input-card", {
                    attrs: {
                        "show-inactive-channel-notice": e.isDisabled,
                        token: e.token
                    }
                })], 1), e.showCsmlApps ? n("apps-mobile-panel", {
                    staticClass: "js-apps-mobile-panel",
                    attrs: {
                        token: e.token
                    }
                }) : e._e()], 1)
            },
            ic = [],
            rc = n("84a2"),
            oc = n.n(rc),
            cc = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "o-notification-zone js-notification-zone",
                    class: {
                        "o-notification-zone--pointer-events-none": e.disablePointerEvents
                    }
                }, [n("transition", {
                    attrs: {
                        name: "cl-transition__fade"
                    }
                }, [e._t("default")], 2)], 1)
            },
            uc = [],
            lc = {
                name: "notification-zone",
                props: {
                    position: {
                        type: String,
                        required: !0,
                        validator: function(e) {
                            return ["top", "bottom"].indexOf(e) > -1
                        }
                    }
                },
                data: function() {
                    return {
                        disablePointerEvents: !1
                    }
                },
                mounted: function() {
                    this.attachResizeListeners()
                },
                beforeUpdate: function() {
                    this.disablePointerEvents = !this.$slots.default
                },
                methods: {
                    attachResizeListeners: function() {
                        var e = this.$el,
                            t = [{
                                source: document.querySelector(".js-messages-list"),
                                target: e,
                                followWidth: !0,
                                followHeight: !1
                            }];
                        "top" === this.position && t.push({
                            source: document.querySelector(".js-header-card-wrapper"),
                            target: e,
                            followWidth: !1,
                            followHeight: !0,
                            onHeightResize: function(e, t) {
                                e.clientHeight ? t.style.top = "".concat(e.clientHeight, "px") : t.style.top = "24px"
                            }
                        }),
                        "bottom" === this.position && t.push({
                            source: document.querySelector(".js-input-card-wrapper"),
                            target: e,
                            followWidth: !1,
                            followHeight: !0,
                            onHeightResize: function(e, t) {
                                t.style.bottom = "".concat(e.clientHeight, "px")
                            }
                        }),
                        Be.attachListeners(t)
                    }
                }
            },
            dc = lc,
            pc = (n("badd"), Object(V["a"])(dc, cc, uc, !1, null, null, null)),
            fc = pc.exports,
            mc = n("323e"),
            gc = n.n(mc);
        function hc(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function bc(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        hc(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        hc(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function _c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function vc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _c(Object(n), !0).forEach((function(t) {
                    yc(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _c(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function yc(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var wc = {
                name: "discussion",
                components: {
                    InputCard: Qn,
                    MessagesList: Jr,
                    HeaderCard: io,
                    SidebarMask: po,
                    AppsMobilePanel: Bo,
                    NotificationZone: fc,
                    NetworkInfoPanel: _o,
                    NewMessageInfoPanel: xo
                },
                props: {
                    token: {
                        type: String,
                        required: !0
                    },
                    isDisabled: {
                        type: Boolean,
                        default: !1
                    },
                    showTopbar: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        isLoading: !0,
                        showTyping: !1,
                        lastInsertion: null,
                        typingTimeout: null,
                        loadingTimeout: null
                    }
                },
                computed: vc(vc({}, Object(M["b"])(["showCsmlApps", "currentAppsListComponent", "isConnected"])), {}, {
                    discussion: function() {
                        return this.$store.getters.getDiscussion(this.token)
                    },
                    messageGroups: function() {
                        return this.discussion.messageGroups
                    },
                    messageMap: function() {
                        return this.discussion.messageMap
                    },
                    greetingSent: function() {
                        return this.discussion.greetingSent
                    },
                    channel: function() {
                        return this.$store.getters.getChannel(this.token) || {}
                    }
                }),
                watch: {
                    isLoading: function(e) {
                        e ? gc.a.start() : gc.a.done()
                    }
                },
                created: function() {
                    this.setupWebSocket(),
                    this.setupEventsHandlers()
                },
                mounted: function() {
                    var e = this;
                    this.attachResizeListeners(),
                    this.setupEventsListeners(),
                    window.addEventListener("message", (function(t) {
                        var n = t.data;
                        if ("trigger-csml-app" === n.command) {
                            e.isLoading = !0,
                            e.messageGroups.length > 0 && e.insertMessage({
                                content_type: "separator",
                                meta: {
                                    message_id: ee()()
                                }
                            });
                            var s = n.data.payload;
                            e.$service("ask").sendAction(s),
                            e.loadingTimeout = setTimeout((function() {
                                e.isLoading = !1
                            }), 700)
                        }
                    }), !1)
                },
                methods: {
                    attachResizeListeners: function() {
                        var e = this.$el,
                            t = [{
                                source: e,
                                target: e.querySelector(".js-input-card-wrapper"),
                                followWidth: !0,
                                followHeight: !1
                            }, {
                                source: e,
                                target: e.querySelector(".js-header-card"),
                                followWidth: !0,
                                followHeight: !1
                            }, {
                                source: e.querySelector(".js-input-card-wrapper"),
                                target: e.querySelector(".js-messages-list"),
                                followWidth: !1,
                                followHeight: !0,
                                onHeightResize: function(e, t) {
                                    t && e && (t.style.marginBottom = "".concat(e.clientHeight, "px"))
                                }
                            }, {
                                source: e,
                                target: e.querySelector(".js-apps-mobile-panel"),
                                followWidth: !0,
                                followHeight: !1
                            }];
                        Be.attachListeners(t)
                    },
                    insertMessage: function(e) {
                        var t = 0,
                            n = e.meta.message_id;
                        if (!n)
                            throw new Error("Missing messageId");
                        var s = this.token,
                            a = this.messageGroups[Math.max(0, this.messageGroups.length - 1)];
                        if (a && "separator" !== e.content_type) {
                            var i = a[Math.max(0, a.length - 1)],
                                r = i.meta,
                                o = r.sequence_id,
                                c = r.sender,
                                u = e.meta,
                                l = u.sequence_id,
                                d = u.sender,
                                p = new Date,
                                f = p - this.lastInsertion,
                                m = (l === o || f < t) && d === c;
                            m && "separator" !== i.content_type ? (e.meta.pos_in_group = a.length, this.$store.dispatch("addMessageToLastGroup", {
                                message: e,
                                token: s
                            })) : (e.meta.pos_in_group = 0, e.meta.is_first_message_in_group = !0, this.$store.dispatch("addMessagesArrayToGroups", {
                                token: s,
                                messages: [e]
                            }), this.$store.dispatch("addMessageToMap", {
                                token: s,
                                messageId: n,
                                message: e
                            }))
                        } else
                            e.meta.pos_in_group = 0,
                            e.meta.is_first_message_in_group = !0,
                            this.$store.dispatch("addMessagesArrayToGroups", {
                                token: s,
                                messages: [e]
                            }),
                            this.$store.dispatch("addMessageToMap", {
                                token: s,
                                messageId: n,
                                message: e
                            });
                        this.lastInsertion = new Date;
                        var g = this.channel.keep_history_length;
                        while (g && this.messageGroups && this.messageGroups.length > g)
                            try {
                                this.$store.dispatch("shiftMessageGroups", {
                                    token: s
                                })
                            } catch (h) {
                                console.error("Impossible to delete message from history")
                            }
                    },
                    setMessageSendingStatus: function(e, t) {
                        this.$store.dispatch("setMessageSendingStatus", {
                            token: this.token,
                            messageId: e,
                            sendingStatus: t
                        })
                    },
                    setupEventsHandlers: function() {
                        var e = this,
                            t = this.token,
                            n = this.$eventBus(t),
                            s = this.$service("ask");
                        n.$on(_e["a"].UPDATE_MESSAGE, (function(n) {
                            var s = n.meta.message_id;
                            e.$store.dispatch("updateMessage", {
                                token: t,
                                messageId: s,
                                message: n
                            })
                        })),
                        n.$on(_e["a"].DISPLAY_MESSAGE, (function(n) {
                            var s = n.message;
                            if (s && "typing" !== s.content_type) {
                                var a;
                                e.insertMessage(s);
                                var i = "bot" === s.meta.sender ? "received" : "sent";
                                null === (a = window.parent) || void 0 === a || a.postMessage("csml:webapp:message:".concat(i), "*"),
                                e.$store.dispatch("registerLastNonUserMessage", {
                                    token: t,
                                    message: s
                                })
                            }
                        })),
                        n.$on(_e["a"].MESSAGE_SENDING_ONGOING, (function(t) {
                            if (t) {
                                var n = t.meta.message_id;
                                e.setMessageSendingStatus(n, _e["a"].MESSAGE_SENDING_ONGOING)
                            }
                        })),
                        n.$on(_e["a"].MESSAGE_SENDING_SUCCEEDED, (function(t) {
                            if (t) {
                                var n = t.meta.message_id;
                                e.setMessageSendingStatus(n, _e["a"].MESSAGE_SENDING_SUCCEEDED)
                            }
                        })),
                        n.$on(_e["a"].MESSAGE_SENDING_FAILED, (function(t) {
                            if (t) {
                                var n = t.meta.message_id;
                                e.setMessageSendingStatus(n, _e["a"].MESSAGE_SENDING_FAILED)
                            }
                        })),
                        n.$on(_e["a"].RETRY_SENDING, (function(e) {
                            var t = e.meta.message_id;
                            s.retryCall(t)
                        })),
                        n.$on(_e["a"].CLEAR_MESSAGES, (function() {
                            e.$store.dispatch("clearDiscussion", e.token),
                            e.$store.dispatch("removeLastNonUserMessage", e.token)
                        })),
                        n.$on(_e["a"].RESET_MEMORY, (function() {
                            e.$session.set("session_uuid", ee()()),
                            e.$store.dispatch("clearDiscussion", e.token),
                            e.$store.dispatch("removeLastNonUserMessage", e.token),
                            e.$service("ws").closeSocket(),
                            e.setupWebSocket()
                        })),
                        n.$on(_e["a"].RESTART_CONVERSATION, (function() {
                            e.isLoading = !0,
                            e.$store.dispatch("clearDiscussion", e.token),
                            e.$store.dispatch("removeLastNonUserMessage", e.token),
                            e.$service("ws").closeSocket(),
                            e.setupWebSocket()
                        }))
                    },
                    setupWebSocket: function() {
                        var e = this.$service("ws");
                        this.isLoading = !0;
                        var t = {
                            message: function(e) {
                                var t = this;
                                if (en["a"].addDefaultFields(e), "quick-buttons" === e.content_type && e.title) {
                                    var n = en["a"].createMessage("text", "bot", {
                                        text: e.title
                                    });
                                    this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                        message: n
                                    })
                                }
                                if (clearTimeout(this.loadingTimeout), this.isLoading = !1, "typing" === e.content_type)
                                    return clearTimeout(this.typingTimeout), void (e.typing ? this.showTyping = !0 : this.typingTimeout = setTimeout((function() {
                                        t.showTyping = !1
                                    }), 100));
                                if ("text" === e.content_type && e.options && e.options.highlight) {
                                    var s = "error" === e.options.highlight,
                                        a = "debug" === e.options.highlight,
                                        i = "true" === this.$route.query.debug;
                                    if ((s || a) && !i)
                                        return
                                }
                                this.$store.state.options.screenReader && (e.tts ? _e["b"].$emit(_e["a"].SAY_TEXT, e.tts) : !1 !== e.tts && "text" === e.content_type && _e["b"].$emit(_e["a"].SAY_TEXT, e.text));
                                var r = this.$store.state.channels.currentToken;
                                this.token !== r && this.$store.dispatch("incrementUnreadMessagesCount", this.token),
                                this.$store.state.dom.windowHasFocus || oc()((function() {
                                    t.$service("notification").notifyMessage(e)
                                }), 1500)(),
                                this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                    message: e
                                })
                            },
                            connect: function() {
                                var e = this;
                                return bc(X.a.mark((function t() {
                                    var n;
                                    return X.a.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (e.greetingSent) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.next = 3, e.$service("ask").sendGreeting(e.$route.query.payload);
                                            case 3:
                                                e.$store.dispatch("setGreetingSent", e.token);
                                            case 4:
                                                e.isLoading = !1,
                                                null === (n = window.parent) || void 0 === n || n.postMessage("csml:webapp:ready", "*");
                                            case 6:
                                            case "end":
                                                return t.stop()
                                            }
                                    }), t)
                                })))()
                            },
                            command: function(e) {
                                this.$eventBus(this.token).$emit(_e["a"].COMMAND, e);
                                var t = Object.keys(Hn),
                                    n = e.name,
                                    s = e.params;
                                if (t.indexOf(n) < 0)
                                    console.warn("No command '".concat(n, "' available."));
                                else {
                                    var a = Hn.SET_CURRENT_CSML_FLOW,
                                        i = Hn.DISABLE_AUTOCOMPLETE,
                                        r = Hn.ENABLE_AUTOCOMPLETE,
                                        o = Hn.SET_TEXT_INPUT_CHARS_LIMIT;
                                    if (n === _e["a"].OPEN_APPS_MOBILE_PANEL && this.$eventBus(this.token).$emit(_e["a"].OPEN_APPS_MOBILE_PANEL), n === _e["a"].CLOSE_APPS_MOBILE_PANEL && this.$eventBus(this.token).$emit(_e["a"].CLOSE_APPS_MOBILE_PANEL), n === a) {
                                        var c = s.flow_uuid;
                                        this.$eventBus(this.token).$emit(_e["a"].SET_CURRENT_CSML_FLOW, c)
                                    }
                                    if (n === i && this.$eventBus(this.token).$emit(_e["a"].SET_AUTOCOMPLETE_STATE, "DISABLED"), n === r && this.$eventBus(this.token).$emit(_e["a"].SET_AUTOCOMPLETE_STATE, "ENABLED"), n === o) {
                                        var u = s.min,
                                            l = s.max;
                                        this.$eventBus(this.token).$emit(_e["a"].SET_TEXT_INPUT_CHARS_LIMIT, {
                                            min: u,
                                            max: l
                                        })
                                    }
                                }
                            },
                            error: function(e) {
                                throw e
                            },
                            disconnect: function() {}
                        };
                        e.createSocket(t)
                    },
                    interceptClickEvent: function(e) {
                        var t = e.target || e.srcElement;
                        if ("A" === t.tagName) {
                            var n = t.getAttribute("href"),
                                s = t.textContent,
                                a = new URL(n),
                                i = a.searchParams.entries(),
                                r = Object.fromEntries(i);
                            if ("chatbot:" === a.protocol) {
                                e.preventDefault();
                                var o = en["a"].createMessage("text", "user", {
                                    text: s
                                });
                                this.$eventBus(this.token).$emit(_e["a"].DISPLAY_MESSAGE, {
                                    message: o
                                }),
                                this.$service("ask").sendAction(r.payload, o)
                            }
                        }
                    },
                    setupEventsListeners: function() {
                        var e = this,
                            t = function() {
                                0 === $s["a"].getScrollableDistance() && e.$store.dispatch("setNewMessageNoticeVisibility", !1)
                            };
                        window.addEventListener("scroll", t),
                        document.querySelector(".js-messages-list").addEventListener("scroll", t),
                        document.addEventListener("click", this.interceptClickEvent)
                    }
                }
            },
            Ec = wc,
            kc = (n("7b58"), Object(V["a"])(Ec, ac, ic, !1, null, null, null)),
            Sc = kc.exports,
            Cc = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-logout"
                }, [e._v(" Successfully logged out. ")])
            },
            Oc = [],
            xc = {
                name: "logout"
            },
            Ac = xc,
            Mc = Object(V["a"])(Ac, Cc, Oc, !1, null, null, null),
            Pc = Mc.exports,
            Tc = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div")
            },
            Ic = [],
            Lc = {
                created: function() {
                    var e = this.$route.query,
                        t = e.jwt,
                        n = e.channel_token,
                        s = e.multichannel_uuid;
                    this.$session.set("jwt", t),
                    this.$service("channels").formatAndReplaceUrl(n, s)
                }
            },
            Dc = Lc,
            Nc = Object(V["a"])(Dc, Tc, Ic, !1, null, null, null),
            Rc = Nc.exports;
        a["default"].use(K["a"]);
        var jc = [{
                path: "/sso",
                component: Rc
            }, {
                path: "/channels/:channelToken",
                alias: "/s/:channelToken",
                component: sc
            }, {
                path: "/multi/:groupToken",
                alias: "/m/:groupToken",
                component: sc
            }, {
                path: "/multi/:groupToken/:channelToken",
                alias: "/m/:groupToken/:channelToken",
                component: sc
            }, {
                name: "logout",
                path: "/logout",
                component: Pc
            }, {
                name: "not-found",
                path: "*",
                component: sc,
                props: function() {
                    return {
                        display404Error: !0
                    }
                }
            }],
            Bc = new K["a"]({
                mode: "history",
                base: "/",
                routes: jc
            });
        Object({
            NODE_ENV: "production",
            VUE_APP_WS_URL: "wss://ws.csml.dev/prod",
            VUE_APP_API_URL: "https://clients.csml.dev/v1",
            VUE_APP_S3_BUCKET: "csml.dev-chat",
            VUE_APP_CLOUDFRONT_DISTRIBUTION_ID: "E2T4MOQLMGAE9C",
            VUE_APP_GOOGLE_SPEECH_API_KEY: "AIzaSyDghdDIDznZEpS7WV5j6w50RDKnns3eS2E",
            VUE_APP_ENV: "local",
            VUE_APP_BUGSNAG_API_KEY: "",
            BASE_URL: "/"
        }).VUE_APP_GTM_ID && a["default"].use(q.a, {
            id: Object({
                NODE_ENV: "production",
                VUE_APP_WS_URL: "wss://ws.csml.dev/prod",
                VUE_APP_API_URL: "https://clients.csml.dev/v1",
                VUE_APP_S3_BUCKET: "csml.dev-chat",
                VUE_APP_CLOUDFRONT_DISTRIBUTION_ID: "E2T4MOQLMGAE9C",
                VUE_APP_GOOGLE_SPEECH_API_KEY: "AIzaSyDghdDIDznZEpS7WV5j6w50RDKnns3eS2E",
                VUE_APP_ENV: "local",
                VUE_APP_BUGSNAG_API_KEY: "",
                BASE_URL: "/"
            }).VUE_APP_GTM_ID,
            enabled: !0,
            debug: !1,
            vueRouter: Bc
        });
        var $c,
            Uc = Bc,
            Fc = "ADD_LAST_MESSAGE_TO_MAP",
            Gc = "SET_UNREAD_MESSAGES_COUNT",
            Vc = "ADD_SOCKET_TO_MAP",
            Hc = "ADD_FAILED_CALL_TO_MAP",
            Wc = "SET_WS_CONNECTION_STATE",
            zc = "SET_NEW_MESSAGE_NOTICE_VISIBILITY",
            qc = "SET_CHATBOX_MODE",
            Kc = {
                SET_WS_CONNECTION_STATE: Wc,
                SET_NEW_MESSAGE_NOTICE_VISIBILITY: zc,
                SET_CHATBOX_MODE: qc
            },
            Yc = "SET_WINDOW_FOCUS_STATE",
            Jc = {
                SET_WINDOW_FOCUS_STATE: Yc
            },
            Qc = "SET_HIGH_CONTRAST_MODE",
            Xc = "SET_SCREEN_READER_MODE",
            Zc = {
                SET_HIGH_CONTRAST_MODE: Qc,
                SET_SCREEN_READER_MODE: Xc
            },
            eu = "ADD_CHANNEL_TO_LIST",
            tu = "ADD_CHANNEL_TO_MAP",
            nu = "SET_CURRENT_CHANNEL_TOKEN",
            su = {
                ADD_CHANNEL_TO_LIST: eu,
                ADD_CHANNEL_TO_MAP: tu,
                SET_CURRENT_CHANNEL_TOKEN: nu
            },
            au = "INITIATE",
            iu = "CLEAR",
            ru = {
                INITIATE: au,
                CLEAR: iu
            },
            ou = "ADD_DISCUSSION_TO_LIST",
            cu = "ADD_DISCUSSION_TO_MAP",
            uu = "CLEAR_DISCUSSION",
            lu = "SET_GREETING_SENT",
            du = {
                ADD_DISCUSSION_TO_LIST: ou,
                ADD_DISCUSSION_TO_MAP: cu,
                CLEAR_DISCUSSION: uu,
                SET_GREETING_SENT: lu
            };
        function pu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var fu = {
            state: {
                wsConnectionState: "CONNECTED",
                newMessageNoticeVisible: !1,
                isChatbox: !1
            },
            mutations: ($c = {}, pu($c, Kc.SET_WS_CONNECTION_STATE, (function(e, t) {
                e.wsConnectionState = t
            })), pu($c, Kc.SET_NEW_MESSAGE_NOTICE_VISIBILITY, (function(e, t) {
                e.newMessageNoticeVisible = t
            })), pu($c, Kc.SET_CHATBOX_MODE, (function(e, t) {
                e.isChatbox = t
            })), $c),
            getters: {
                isConnected: function(e) {
                    return "CONNECTED" === e.wsConnectionState
                },
                newMessageNoticeVisible: function(e) {
                    return e.newMessageNoticeVisible
                },
                isChatbox: function(e) {
                    return e.isChatbox
                }
            },
            actions: {
                setNewMessageNoticeVisibility: function(e, t) {
                    var n = e.commit;
                    n(Kc.SET_NEW_MESSAGE_NOTICE_VISIBILITY, t)
                },
                setWsConnectionState: function(e, t) {
                    var n = e.commit;
                    if (-1 === ["CONNECTED", "DISCONNECTED"].indexOf(t))
                        throw new Error("Unknown WS connection state '".concat(t, "'"));
                    n(Kc.SET_WS_CONNECTION_STATE, t)
                },
                setChatboxMode: function(e, t) {
                    var n = e.commit;
                    n(Kc.SET_CHATBOX_MODE, t)
                }
            }
        };
        function mu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var gu,
            hu = {
                state: {
                    windowHasFocus: !0
                },
                mutations: mu({}, Jc.SET_WINDOW_FOCUS_STATE, (function(e, t) {
                    e.windowHasFocus = t
                })),
                actions: {
                    setWindowFocusState: function(e, t) {
                        var n = e.commit;
                        n(Jc.SET_WINDOW_FOCUS_STATE, t)
                    }
                }
            };
        function bu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var _u,
            vu = {
                state: {
                    highContrast: !1,
                    screenReader: !1
                },
                mutations: (gu = {}, bu(gu, Zc.SET_HIGH_CONTRAST_MODE, (function(e, t) {
                    e.highContrast = t
                })), bu(gu, Zc.SET_SCREEN_READER_MODE, (function(e, t) {
                    e.screenReader = t
                })), gu),
                actions: {
                    toggleOption: function(e, t) {
                        var n = e.commit,
                            s = e.state,
                            a = {
                                "screen-reader": {
                                    mutation: Zc.SET_SCREEN_READER_MODE,
                                    state: s.screenReader
                                },
                                "high-contrast": {
                                    mutation: Zc.SET_HIGH_CONTRAST_MODE,
                                    state: s.highContrast
                                }
                            },
                            i = a[t];
                        if (!i) {
                            var r = "";
                            throw Object.keys(a).forEach((function(e) {
                                r += "- '".concat(e, "'\n")
                            })), new Error("Unknown option '".concat(t, "'. Available options are:\n").concat(r))
                        }
                        n(i.mutation, !i.state)
                    }
                }
            };
        function yu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var wu,
            Eu = {
                state: {
                    currentToken: null,
                    channelsList: [],
                    channelsMap: {}
                },
                getters: {
                    getChannel: function(e) {
                        return function(t) {
                            return e.channelsMap[t]
                        }
                    },
                    currentChannel: function(e, t) {
                        return t.getChannel(e.currentToken)
                    },
                    currentChannelStyle: function(e, t) {
                        var n,
                            s = t.getChannel(e.currentToken);
                        return (null === s || void 0 === s || null === (n = s.settings) || void 0 === n ? void 0 : n.style) || {}
                    }
                },
                mutations: (_u = {}, yu(_u, su.SET_CURRENT_CHANNEL_TOKEN, (function(e, t) {
                    e.currentToken = t
                })), yu(_u, su.ADD_CHANNEL_TO_MAP, (function(e, t) {
                    var n = t.token;
                    e.channelsMap[n] = t
                })), yu(_u, su.ADD_CHANNEL_TO_LIST, (function(e, t) {
                    e.channelsList.push(t)
                })), _u),
                actions: {
                    registerChannels: function(e, t) {
                        var n = e.rootState,
                            s = e.commit;
                        t.forEach((function(e) {
                            n.needsAuth || (n.needsAuth = e.sso_status),
                            s(su.ADD_CHANNEL_TO_LIST, e),
                            s(su.ADD_CHANNEL_TO_MAP, e)
                        }))
                    },
                    setCurrentToken: function(e, t) {
                        var n = e.getters,
                            s = e.commit;
                        if (!n.getChannel(t))
                            throw new Error("No channel found with the token ".concat(t, "."));
                        document.title = n.getChannel(t).channel_title,
                        s(su.SET_CURRENT_CHANNEL_TOKEN, t)
                    }
                }
            };
        function ku(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function Su(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ku(Object(n), !0).forEach((function(t) {
                    Cu(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ku(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function Cu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Ou,
            xu = {
                state: {
                    appsListComponentsMap: {},
                    discussionComponentsMap: {}
                },
                getters: {
                    currentDiscussionComponent: function(e, t, n) {
                        return e.discussionComponentsMap[n.channels.currentToken]
                    },
                    currentAppsListComponent: function(e, t, n) {
                        return e.appsListComponentsMap[n.channels.currentToken]
                    }
                },
                mutations: (wu = {}, Cu(wu, ru.INITIATE, (function(e, t) {
                    e.discussionComponentsMap[t] = Su({}, Sc),
                    e.appsListComponentsMap[t] = Su({}, ke)
                })), Cu(wu, ru.CLEAR, (function(e, t) {
                    delete e.discussionComponentsMap[t],
                    delete e.appsListComponentsMap[t]
                })), wu)
            };
        function Au(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Mu,
            Pu = {
                state: {
                    discussionsList: [],
                    discussionsMap: {}
                },
                getters: {
                    getDiscussion: function(e) {
                        return function(t) {
                            return e.discussionsMap[t]
                        }
                    },
                    currentDiscussion: function(e, t, n) {
                        return e.discussionsMap[n.channels.currentToken]
                    }
                },
                mutations: (Ou = {}, Au(Ou, du.ADD_DISCUSSION_TO_LIST, (function(e, t) {
                    e.discussionsList.find((function(e) {
                        return e.token === t.token
                    })) || e.discussionsList.push(t)
                })), Au(Ou, du.ADD_DISCUSSION_TO_MAP, (function(e, t) {
                    var n = t.token;
                    e.discussionsMap[n] || (e.discussionsMap[n] = t)
                })), Au(Ou, du.CLEAR_DISCUSSION, (function(e, t) {
                    var n = e.discussionsMap[t];
                    n && (n.messageGroups = [], n.messageMap = {}, n.greetingSent = !1)
                })), Au(Ou, du.SET_GREETING_SENT, (function(e, t) {
                    var n = e.discussionsMap[t];
                    n && (n.greetingSent = !0)
                })), Ou),
                actions: {
                    registerDiscussions: function(e, t) {
                        var n = e.commit,
                            s = e.getters;
                        t.forEach((function(e) {
                            var t = e.token,
                                a = e.keep_history_length,
                                i = s.getDiscussion(t);
                            if (n(ru.INITIATE, t), i)
                                (!a || a <= 0) && n(du.CLEAR_DISCUSSION, t);
                            else {
                                var r = {
                                    token: t,
                                    messageGroups: [],
                                    messageMap: {},
                                    greetingSent: !1
                                };
                                n(du.ADD_DISCUSSION_TO_LIST, r),
                                n(du.ADD_DISCUSSION_TO_MAP, r)
                            }
                        }))
                    },
                    setGreetingSent: function(e, t) {
                        var n = e.commit;
                        n(du.SET_GREETING_SENT, t)
                    },
                    clearDiscussion: function(e, t) {
                        var n = e.commit;
                        n(du.CLEAR_DISCUSSION, t),
                        n(ru.CLEAR, t),
                        n(ru.INITIATE, t)
                    },
                    addMessageToLastGroup: function(e, t) {
                        var n = e.state,
                            s = t.token,
                            a = t.message,
                            i = n.discussionsMap[s];
                        if (i) {
                            var r = i.messageGroups,
                                o = r[Math.max(0, r.length - 1)];
                            o.push(a)
                        }
                    },
                    addMessageToMap: function(e, t) {
                        var n = e.state,
                            s = t.token,
                            a = t.messageId,
                            i = t.message,
                            r = n.discussionsMap[s];
                        if (r) {
                            var o = r.messageMap;
                            o[a] = i
                        }
                    },
                    addMessagesArrayToGroups: function(e, t) {
                        var n = e.state,
                            s = t.token,
                            a = t.messages,
                            i = n.discussionsMap[s];
                        if (i) {
                            var r = i.messageGroups;
                            r.push(a)
                        }
                    },
                    shiftMessageGroups: function(e, t) {
                        var n = e.state,
                            s = t.token,
                            a = n.discussionsMap[s];
                        if (a) {
                            var i = a.messageGroups,
                                r = a.messageMap,
                                o = i.shift();
                            o.forEach((function(e) {
                                return delete r[e.meta.message_id]
                            }))
                        }
                    },
                    setMessageSendingStatus: function(e, t) {
                        var n = e.state,
                            s = t.token,
                            a = t.messageId,
                            i = t.sendingStatus,
                            r = n.discussionsMap[s];
                        if (r) {
                            var o = r.messageMap;
                            o[a] && (o[a].meta.sending_status = i)
                        }
                    },
                    updateMessage: function(e, t) {
                        var n = e.state,
                            s = t.token,
                            a = t.messageId,
                            i = t.message,
                            r = n.discussionsMap[s];
                        if (r) {
                            var o = r.messageGroups,
                                c = r.messageMap;
                            c && c[a] && (c[a] = i, (o || []).forEach((function(e) {
                                (e || []).forEach((function(t, n) {
                                    t.meta.message_id === a && (e[n] = i)
                                }))
                            })))
                        }
                    }
                }
            },
            Tu = {
                app: fu,
                dom: hu,
                options: vu,
                channels: Eu,
                components: xu,
                discussions: Pu
            },
            Iu = function() {
                var e = "localstorage";
                try {
                    return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                } catch (t) {
                    return !1
                }
            },
            Lu = n("0e44");
        function Du(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function Nu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Du(Object(n), !0).forEach((function(t) {
                    Ru(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Du(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function Ru(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Iu() || (document.body.innerHTML = "<strong>We're sorry but CSML Chat doesn't work properly without cookies allowed. Please allow cookies to continue.</strong>"),
        a["default"].use(M["a"]);
        var ju = window.location.hostname,
            Bu = new M["a"].Store({
                plugins: [Object(Lu["a"])({
                    key: "csml-webapp-" + ju.toLowerCase(),
                    paths: ["discussions"]
                })],
                state: {
                    lastMessageMap: {},
                    unreadMessagesCountsMap: {},
                    needsAuth: !1,
                    socketMap: {},
                    failedCallsMap: {}
                },
                getters: {
                    showCsmlApps: function(e, t) {
                        var n = t.currentChannel,
                            s = n.has_apps,
                            a = n.force_hide_apps;
                        return s && !a
                    },
                    getFailedCalls: function(e) {
                        return function(t) {
                            return e.failedCallsMap[t]
                        }
                    },
                    getSocket: function(e) {
                        return function(t) {
                            return e.socketMap[t] || null
                        }
                    },
                    currentBot: function(e, t) {
                        return t.getBot(e.channels.currentToken)
                    },
                    getBot: function(e) {
                        return function(t) {
                            var s = e.channels.channelsMap[t],
                                a = s.bot_id,
                                i = s.bot_uuid,
                                r = s.bot_name,
                                o = s.bot_description,
                                c = s.settings,
                                u = (c || {}).logo_url || n("1508");
                            return {
                                id: a,
                                uuid: i,
                                name: r,
                                description: o,
                                imageUrl: u
                            }
                        }
                    },
                    getUnreadMessagesCount: function(e) {
                        return function(t) {
                            return e.unreadMessagesCountsMap[t] || 0
                        }
                    },
                    getLastMessage: function(e) {
                        return function(t) {
                            return e.lastMessageMap[t]
                        }
                    }
                },
                mutations: (Mu = {}, Ru(Mu, Gc, (function(e, t) {
                    var n = t.count,
                        s = t.token;
                    e.unreadMessagesCountsMap[s] = n,
                    e.unreadMessagesCountsMap = Nu({}, e.unreadMessagesCountsMap)
                })), Ru(Mu, Fc, (function(e, t) {
                    var n = t.token,
                        s = t.message;
                    e.lastMessageMap[n] = s,
                    e.lastMessageMap = Nu({}, e.lastMessageMap)
                })), Ru(Mu, Vc, (function(e, t) {
                    var n = t.token,
                        s = t.socket;
                    e.socketMap[n] = s
                })), Ru(Mu, Hc, (function(e, t) {
                    var n = t.message,
                        s = t.message.meta.message_id,
                        a = t.retry,
                        i = t.token;
                    e.failedCallsMap[i] = e.failedCallsMap[i] || {},
                    e.failedCallsMap[i][s] = {
                        message: n,
                        retry: a
                    }
                })), Mu),
                actions: {
                    removeLastNonUserMessage: function(e, t) {
                        var n = e.commit;
                        n(Fc, {
                            token: t,
                            message: null
                        })
                    },
                    registerLastNonUserMessage: function(e, t) {
                        var n = e.commit,
                            s = t.token,
                            a = t.message;
                        if ("user" !== a.meta.sender) {
                            var i = ["text", "image", "video", "url"];
                            i.indexOf(a.content_type) < 0 || n(Fc, {
                                token: s,
                                message: a
                            })
                        }
                    },
                    incrementUnreadMessagesCount: function(e, t) {
                        var n = e.getters,
                            s = e.commit,
                            a = n.getUnreadMessagesCount(t);
                        s(Gc, {
                            count: a + 1,
                            token: t
                        })
                    },
                    resetUnreadMessagesCount: function(e, t) {
                        var n = e.commit;
                        n(Gc, {
                            count: 0,
                            token: t
                        })
                    },
                    registerSocket: function(e, t) {
                        var n = e.commit,
                            s = t.token,
                            a = t.socket;
                        n(Vc, {
                            token: s,
                            socket: a
                        })
                    },
                    addFailedCall: function(e, t) {
                        var n = e.commit,
                            s = t.message,
                            a = t.retry,
                            i = t.token;
                        n(Hc, {
                            message: s,
                            retry: a,
                            token: i
                        })
                    }
                },
                modules: Tu
            }),
            $u = n("a925"),
            Uu = n("a74a"),
            Fu = n("f101"),
            Gu = n("823d"),
            Vu = n("cf4e"),
            Hu = n("cee6"),
            Wu = n("c5ba"),
            zu = n("5c2e"),
            qu = n("d41d"),
            Ku = n("443b"),
            Yu = n("02da"),
            Ju = n("98fc"),
            Qu = n("2b7e"),
            Xu = n("86dd"),
            Zu = n("5b2e"),
            el = n("821e"),
            tl = n("ba72");
        a["default"].use($u["a"]);
        var nl = (navigator.language || navigator.userLanguage).slice(0, 2),
            sl = new $u["a"]({
                locale: nl,
                fallbackLocale: "en",
                messages: {
                    cs: Uu,
                    da: Fu,
                    de: Gu,
                    en: Vu,
                    es: Hu,
                    fi: Wu,
                    fr: zu,
                    hi: qu,
                    it: Ku,
                    nl: Yu,
                    nn: Ju,
                    pl: Qu,
                    pt: Xu,
                    ru: Zu,
                    sv: el,
                    uk: tl
                }
            });
        function al(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var il = function e(t) {
                al(this, e),
                this.vm = t,
                this.vm.$service = this.vm.$service.bind(this.vm)
            },
            rl = il;
        function ol(e) {
            return ol = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ol(e)
        }
        function cl(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function ul(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        cl(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        cl(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function ll(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function dl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function pl(e, t, n) {
            return t && dl(e.prototype, t), n && dl(e, n), e
        }
        function fl(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && ml(e, t)
        }
        function ml(e, t) {
            return ml = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, ml(e, t)
        }
        function gl(e) {
            var t = _l();
            return function() {
                var n,
                    s = vl(e);
                if (t) {
                    var a = vl(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return hl(this, n)
            }
        }
        function hl(e, t) {
            return !t || "object" !== ol(t) && "function" !== typeof t ? bl(e) : t
        }
        function bl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _l() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function vl(e) {
            return vl = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, vl(e)
        }
        var yl = function(e) {
                fl(n, e);
                var t = gl(n);
                function n() {
                    return ll(this, n), t.apply(this, arguments)
                }
                return pl(n, [{
                    key: "prepareData",
                    value: function() {
                        var e = this.vm.$service("user").getMeta(),
                            t = this.vm.$store.getters.getSocket(this.vm.token);
                        return {
                            userMeta: e,
                            socket: t
                        }
                    }
                }, {
                    key: "beforeCallHook",
                    value: function() {
                        var e = this.vm.$service("auth");
                        e.isAuthenticated() || e.authenticate()
                    }
                }, {
                    key: "retryCall",
                    value: function(e) {
                        var t = this.vm.$store.getters.getFailedCalls(this.vm.token)[e];
                        t && t.retry()
                    }
                }, {
                    key: "monitorSending",
                    value: function() {
                        var e = ul(X.a.mark((function e(t, n, s) {
                            var a,
                                i;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (a = this.vm.$eventBus(this.vm.token), n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", t);
                                    case 3:
                                        return a.$emit(_e["a"].MESSAGE_SENDING_ONGOING, n), e.prev = 4, e.next = 7, t;
                                    case 7:
                                        return i = e.sent, a.$emit(_e["a"].MESSAGE_SENDING_SUCCEEDED, n), e.abrupt("return", i);
                                    case 12:
                                        return e.prev = 12, e.t0 = e["catch"](4), this.vm.$store.dispatch("addFailedCall", {
                                            message: n,
                                            token: this.vm.token,
                                            retry: s
                                        }), a.$emit(_e["a"].MESSAGE_SENDING_FAILED, n), e.abrupt("return", null);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this, [[4, 12]])
                        })));
                        function t(t, n, s) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "sendGreeting",
                    value: function(e) {
                        var t = this.prepareData(),
                            n = t.userMeta,
                            s = t.socket,
                            a = {
                                socket_id: s.id,
                                type: "greeting",
                                user_meta: n
                            };
                        try {
                            e && (a.payload = atob(e))
                        } catch (i) {
                            console.error(i)
                        }
                        return this.beforeCallHook(), this.vm.$service("requester").execute("sendAskRequest", {
                            body: a
                        })
                    }
                }, {
                    key: "sendTextMessage",
                    value: function(e) {
                        var t = e.text,
                            n = this.prepareData(),
                            s = n.userMeta,
                            a = n.socket,
                            i = this.sendTextMessage.bind(this, e),
                            r = {
                                socket_id: a.id,
                                type: "text",
                                text: t,
                                user_meta: s
                            };
                        return this.beforeCallHook(), this.monitorSending(this.vm.$service("requester").execute("sendAskRequest", {
                            body: r
                        }), e, i)
                    }
                }, {
                    key: "uploadFile",
                    value: function() {
                        var e = ul(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i,
                                r,
                                o,
                                c,
                                u;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = this.vm.$service("file"), this.beforeCallHook(), e.next = 4, n.getS3LocationObject(t);
                                    case 4:
                                        return s = e.sent, a = s.signature, i = a.bucket, r = a.key, o = {
                                            bucket: i,
                                            key: r,
                                            title: t.name,
                                            mime_type: t.type || "application/octet-stream",
                                            size: t.size
                                        }, e.next = 10, n.uploadFileToS3(t, s);
                                    case 10:
                                        return e.next = 12, this.vm.$service("requester").execute("getFileUrl", {
                                            body: o
                                        });
                                    case 12:
                                        return c = e.sent, u = c.short_url, e.abrupt("return", u);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "sendFileMessage",
                    value: function() {
                        var e = ul(X.a.mark((function e(t, n) {
                            var s,
                                a,
                                i,
                                r,
                                o,
                                c = this;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return s = this.prepareData(), a = s.userMeta, i = s.socket, r = this.sendFileMessage.bind(this, t, n), this.beforeCallHook(), o = ul(X.a.mark((function e() {
                                            var s,
                                                r;
                                            return X.a.wrap((function(e) {
                                                while (1)
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, c.uploadFile(t);
                                                    case 2:
                                                        return s = e.sent, n.file_url = s, c.vm.$eventBus(c.vm.token).$emit(_e["a"].UPDATE_MESSAGE, n), r = {
                                                            socket_id: i.id,
                                                            type: "file",
                                                            files: [{
                                                                url: s
                                                            }],
                                                            user_meta: a
                                                        }, e.next = 8, c.vm.$service("requester").execute("sendAskRequest", {
                                                            body: r
                                                        });
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }), e)
                                        })))(), e.abrupt("return", this.monitorSending(o, n, r));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t, n) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "sendDate",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            s = this.prepareData(),
                            a = s.userMeta,
                            i = s.socket,
                            r = this.sendDate.bind(this, e, t, n),
                            o = {
                                socket_id: i.id,
                                type: "csml",
                                payload: {
                                    content_type: "payload",
                                    content: {
                                        input_mode: e,
                                        payload: t
                                    }
                                },
                                user_meta: a
                            };
                        return this.beforeCallHook(), this.monitorSending(this.vm.$service("requester").execute("sendAskRequest", {
                            body: o
                        }), n, r)
                    }
                }, {
                    key: "sendForm",
                    value: function(e, t) {
                        var n = this.prepareData(),
                            s = n.userMeta,
                            a = n.socket,
                            i = {
                                socket_id: a.id,
                                form: {
                                    payload: t,
                                    data: e
                                },
                                user_meta: s
                            };
                        return this.vm.$service("requester").execute("sendAskRequest", {
                            body: i
                        })
                    }
                }, {
                    key: "sendAction",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = this.prepareData(),
                            s = n.userMeta,
                            a = n.socket,
                            i = this.sendAction.bind(this, e, t),
                            r = {
                                socket_id: a.id,
                                type: "action",
                                payload: e,
                                user_meta: s
                            };
                        return this.beforeCallHook(), this.monitorSending(this.vm.$service("requester").execute("sendAskRequest", {
                            body: r
                        }), t, i)
                    }
                }, {
                    key: "sendFollowUpRequest",
                    value: function(e) {
                        var t = this.prepareData(),
                            n = t.userMeta,
                            s = t.socket,
                            a = {
                                socket_id: s.id,
                                type: "pending",
                                payload: e,
                                user_meta: n
                            };
                        return this.beforeCallHook(), this.vm.$service("requester").execute("sendAskRequest", {
                            body: a
                        })
                    }
                }, {
                    key: "upvoteMessage",
                    value: function(e) {
                        var t = e.payload,
                            n = this.prepareData(),
                            s = n.userMeta,
                            a = n.socket,
                            i = {
                                socket_id: a.id,
                                type: "like",
                                payload: t,
                                user_meta: s
                            };
                        return this.beforeCallHook(), this.vm.$service("requester").execute("sendAskRequest", {
                            body: i
                        })
                    }
                }, {
                    key: "downvoteMessage",
                    value: function(e, t) {
                        var n = e.payload,
                            s = this.prepareData(),
                            a = s.userMeta,
                            i = s.socket,
                            r = {
                                socket_id: i.id,
                                type: "report",
                                payload: n,
                                user_meta: a,
                                report_reason: t
                            };
                        return this.beforeCallHook(), this.vm.$service("requester").execute("sendAskRequest", {
                            body: r
                        })
                    }
                }]), n
            }(rl),
            wl = yl,
            El = n("72bf"),
            kl = n.n(El),
            Sl = n("04e1"),
            Cl = n.n(Sl);
        function Ol(e) {
            return Ol = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ol(e)
        }
        function xl(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Al(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Ml(e, t, n) {
            return t && Al(e.prototype, t), n && Al(e, n), e
        }
        function Pl(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Tl(e, t)
        }
        function Tl(e, t) {
            return Tl = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, Tl(e, t)
        }
        function Il(e) {
            var t = Nl();
            return function() {
                var n,
                    s = Rl(e);
                if (t) {
                    var a = Rl(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return Ll(this, n)
            }
        }
        function Ll(e, t) {
            return !t || "object" !== Ol(t) && "function" !== typeof t ? Dl(e) : t
        }
        function Dl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Nl() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function Rl(e) {
            return Rl = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Rl(e)
        }
        var jl = function(e) {
                Pl(n, e);
                var t = Il(n);
                function n() {
                    return xl(this, n), t.apply(this, arguments)
                }
                return Ml(n, [{
                    key: "authenticate",
                    value: function() {
                        var e = this.vm.$route.params,
                            t = e.channelToken,
                            n = e.groupToken,
                            s = "https://clients.csml.dev/v1",
                            a = encodeURIComponent(t),
                            i = encodeURIComponent(n),
                            r = "".concat(s, "/sso/login");
                        r += "?redirect_to=webappv2&channel_token=".concat(a),
                        n && (r += "&multichannel_uuid=".concat(i));
                        var o = kl.a.stringify(this.vm.$route.query);
                        o && (r += "&".concat(kl.a.stringify(this.vm.$route.query))),
                        window.location.replace(r)
                    }
                }, {
                    key: "isAuthenticated",
                    value: function() {
                        var e = this.vm,
                            t = e.$session,
                            n = e.$store,
                            s = t.get("jwt"),
                            a = n.getters.currentChannel.organization_uuid;
                        return !n.state.needsAuth || !!s && this.isJwtValid(s, {
                                organizationUuid: a
                            })
                    }
                }, {
                    key: "isJwtExpired",
                    value: function(e) {
                        var t = Cl()(e),
                            n = t.exp,
                            s = new Date,
                            a = Math.floor(Date.UTC(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()) / 1e3);
                        return !n || n < a
                    }
                }, {
                    key: "isJwtValid",
                    value: function(e, t) {
                        var n = Cl()(e),
                            s = n.organization_uuid,
                            a = t.organizationUuid;
                        return !this.isJwtExpired(e) && s === a
                    }
                }, {
                    key: "logout",
                    value: function() {
                        this.vm.$session.remove("jwt"),
                        this.vm.$router.push("/logout")
                    }
                }]), n
            }(rl),
            Bl = jl;
        function $l(e) {
            return $l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, $l(e)
        }
        function Ul(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function Fl(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        Ul(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        Ul(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function Gl(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Vl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Hl(e, t, n) {
            return t && Vl(e.prototype, t), n && Vl(e, n), e
        }
        function Wl(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && zl(e, t)
        }
        function zl(e, t) {
            return zl = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, zl(e, t)
        }
        function ql(e) {
            var t = Jl();
            return function() {
                var n,
                    s = Ql(e);
                if (t) {
                    var a = Ql(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return Kl(this, n)
            }
        }
        function Kl(e, t) {
            return !t || "object" !== $l(t) && "function" !== typeof t ? Yl(e) : t
        }
        function Yl(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Jl() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function Ql(e) {
            return Ql = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Ql(e)
        }
        var Xl = function(e) {
                Wl(n, e);
                var t = ql(n);
                function n() {
                    return Gl(this, n), t.apply(this, arguments)
                }
                return Hl(n, [{
                    key: "load",
                    value: function() {
                        var e = Fl(X.a.mark((function e(t) {
                            var n;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = this.vm.$service("requester"), e.abrupt("return", n.execute("loadChannels", {
                                            tokens: t
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "formatAndReplaceUrl",
                    value: function(e, t) {
                        var n = {
                                multi: "multi/".concat(t, "/").concat(e),
                                single: "channels/".concat(e)
                            },
                            s = this.vm.$route.query,
                            a = t ? n.multi : n.single,
                            i = "".concat(window.location.protocol, "//").concat(window.location.host, "/").concat(a),
                            r = new URL(i),
                            o = Object.keys(s);
                        o.forEach((function(e) {
                            ["jwt", "channel_token", "multichannel_uuid"].includes(e) || r.searchParams.append(e, s[e])
                        })),
                        this.vm.$route.path !== r.pathname && this.vm.$router.replace(r.pathname + r.search)
                    }
                }]), n
            }(rl),
            Zl = Xl,
            ed = n("9483");
        function td(e) {
            return td = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, td(e)
        }
        function nd(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function sd(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function ad(e, t, n) {
            return t && sd(e.prototype, t), n && sd(e, n), e
        }
        function id(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && rd(e, t)
        }
        function rd(e, t) {
            return rd = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, rd(e, t)
        }
        function od(e) {
            var t = ld();
            return function() {
                var n,
                    s = dd(e);
                if (t) {
                    var a = dd(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return cd(this, n)
            }
        }
        function cd(e, t) {
            return !t || "object" !== td(t) && "function" !== typeof t ? ud(e) : t
        }
        function ud(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ld() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function dd(e) {
            return dd = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, dd(e)
        }
        var pd = function(e) {
                id(n, e);
                var t = od(n);
                function n() {
                    return nd(this, n), t.apply(this, arguments)
                }
                return ad(n, null, [{
                    key: "register",
                    value: function() {
                        Object(ed["a"])("".concat("/", "service-worker.js"), {
                            ready: function() {
                                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
                            },
                            registered: function() {
                                console.log("Service worker has been registered.")
                            },
                            cached: function() {
                                console.log("Content has been cached for offline use.")
                            },
                            updatefound: function() {
                                console.log("New content is downloading.")
                            },
                            updated: function() {
                                console.log("New content is available; please refresh.")
                            },
                            offline: function() {
                                console.log("No internet connection found. App is running in offline mode.")
                            },
                            error: function(e) {
                                console.error("Error during service worker registration:", e)
                            }
                        })
                    }
                }]), n
            }(rl),
            fd = pd,
            md = n("8055"),
            gd = n.n(md);
        function hd(e) {
            return hd = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, hd(e)
        }
        function bd(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function vd(e, t, n) {
            return t && _d(e.prototype, t), n && _d(e, n), e
        }
        function yd(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && wd(e, t)
        }
        function wd(e, t) {
            return wd = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, wd(e, t)
        }
        function Ed(e) {
            var t = Cd();
            return function() {
                var n,
                    s = Od(e);
                if (t) {
                    var a = Od(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return kd(this, n)
            }
        }
        function kd(e, t) {
            return !t || "object" !== hd(t) && "function" !== typeof t ? Sd(e) : t
        }
        function Sd(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Cd() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function Od(e) {
            return Od = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Od(e)
        }
        var xd = function(e) {
                yd(n, e);
                var t = Ed(n);
                function n() {
                    return bd(this, n), t.apply(this, arguments)
                }
                return vd(n, [{
                    key: "createSocket",
                    value: function(e) {
                        var t = this,
                            n = this.vm,
                            s = n.jwt,
                            a = n.token,
                            i = "".concat("wss://ws.csml.dev/prod", "/webapp?channel_token=").concat(a);
                        i += s ? "&jwt=".concat(s) : "";
                        var r = gd()(i, {
                                transports: ["websocket"]
                            }),
                            o = Object.keys(e);
                        o.forEach((function(n) {
                            var s = e[n].bind(t.vm);
                            r.on(n, s)
                        })),
                        r.on("ping", (function() {}));
                        var c = function() {
                            t.vm.$store.dispatch("setWsConnectionState", "DISCONNECTED")
                        };
                        return r.on("disconnect", c), r.on("connect_error", c), r.on("reconnect", (function() {
                            t.vm.$store.dispatch("setWsConnectionState", "CONNECTED")
                        })), this.vm.$store.dispatch("registerSocket", {
                            token: a,
                            socket: r
                        }), r
                    }
                }, {
                    key: "closeSocket",
                    value: function() {
                        var e = this.vm.token,
                            t = this.vm.$store.getters.getSocket(e);
                        t.close()
                    }
                }]), n
            }(rl),
            Ad = function(e) {
                yd(n, e);
                var t = Ed(n);
                function n() {
                    return bd(this, n), t.apply(this, arguments)
                }
                return vd(n, [{
                    key: "createSocket",
                    value: function(e) {
                        var t = this,
                            n = this.vm.token,
                            s = this.vm.$session.get("jwt"),
                            a = this.vm.$session.get("session_uuid"),
                            i = "true" === this.vm.$route.query.debug,
                            r = new URL("wss://ws.csml.dev/prod");
                        if (r.searchParams.set("user_id", a), r.searchParams.set("channel_token", n), s && r.searchParams.set("jwt", s), s && this.vm.$service("auth").isJwtExpired(s))
                            console.error("JWT expired");
                        else {
                            var o = new WebSocket(r.href);
                            o.onopen = function() {
                                i && console.log("Socket open");
                                var n = e.connect.bind(t.vm);
                                return t.backoff = 500, t.vm.$store.dispatch("setWsConnectionState", "CONNECTED"), n()
                            },
                            o.onmessage = function(n) {
                                i && console.log("Message received:", n.data);
                                var s = JSON.parse(n.data);
                                if ("CONNECT_ACK" !== s.action || !s.connection_id) {
                                    var a = e.message.bind(t.vm);
                                    return a(s)
                                }
                                o.id = s.connection_id
                            },
                            o.onclose = function(n) {
                                t.vm.$store.dispatch("setWsConnectionState", "DISCONNECTED"),
                                t.backoff = Math.min(1e4, 2 * t.backoff) || 500,
                                i && console.log("Socket is closed. Reconnect will be attempted in ".concat(t.backoff, "ms."), n.reason),
                                setTimeout((function() {
                                    t.createSocket(e)
                                }), t.backoff)
                            },
                            o.onerror = function(e) {
                                i && console.error("Socket encountered error: ", e, "Closing socket"),
                                o.close()
                            },
                            this.vm.$store.dispatch("registerSocket", {
                                token: n,
                                socket: o
                            }),
                            this.socket = o
                        }
                    }
                }, {
                    key: "closeSocket",
                    value: function() {
                        var e = this,
                            t = this.vm.token,
                            n = this.vm.$store.getters.getSocket(t);
                        n.onclose = function() {
                            var t = "true" === e.vm.$route.query.debug;
                            t && console.log("Socket has been closed.")
                        },
                        n.close()
                    }
                }, {
                    key: "getSocketStatus",
                    value: function() {
                        return this.socket.readyState === WebSocket.OPEN
                    }
                }]), n
            }(xd);
        function Md(e) {
            return Md = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Md(e)
        }
        function Pd(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Td(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Id(e, t, n) {
            return t && Td(e.prototype, t), n && Td(e, n), e
        }
        function Ld(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Dd(e, t)
        }
        function Dd(e, t) {
            return Dd = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, Dd(e, t)
        }
        function Nd(e) {
            var t = Bd();
            return function() {
                var n,
                    s = $d(e);
                if (t) {
                    var a = $d(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return Rd(this, n)
            }
        }
        function Rd(e, t) {
            return !t || "object" !== Md(t) && "function" !== typeof t ? jd(e) : t
        }
        function jd(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Bd() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function $d(e) {
            return $d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, $d(e)
        }
        var Ud = function(e) {
                Ld(n, e);
                var t = Nd(n);
                function n() {
                    return Pd(this, n), t.apply(this, arguments)
                }
                return Id(n, [{
                    key: "getMeta",
                    value: function() {
                        var e = this.vm.$session,
                            t = e.get("jwt"),
                            n = null,
                            s = null;
                        t && (s = Cl()(t), n = s.email);
                        var a = {
                            lang: navigator.language || navigator.userLanguage,
                            sso_email: n,
                            session_uuid: e.get("session_uuid"),
                            local_email: e.get("local_email")
                        };
                        return s && (a.decoded_jwt = s), a
                    }
                }]), n
            }(rl),
            Fd = Ud;
        function Gd(e) {
            return Gd = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Gd(e)
        }
        function Vd(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function Hd(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        Vd(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        Vd(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function Wd(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function zd(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function qd(e, t, n) {
            return t && zd(e.prototype, t), n && zd(e, n), e
        }
        function Kd(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Yd(e, t)
        }
        function Yd(e, t) {
            return Yd = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, Yd(e, t)
        }
        function Jd(e) {
            var t = Zd();
            return function() {
                var n,
                    s = ep(e);
                if (t) {
                    var a = ep(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return Qd(this, n)
            }
        }
        function Qd(e, t) {
            return !t || "object" !== Gd(t) && "function" !== typeof t ? Xd(e) : t
        }
        function Xd(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Zd() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function ep(e) {
            return ep = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, ep(e)
        }
        var tp = function(e) {
                Kd(n, e);
                var t = Jd(n);
                function n() {
                    return Wd(this, n), t.apply(this, arguments)
                }
                return qd(n, [{
                    key: "addS3Metadata",
                    value: function(e) {
                        var t = this.vm.token,
                            n = this.vm.$service("user"),
                            s = n.getMeta(),
                            a = s.session_uuid,
                            i = this.vm.$store.getters.getBot(t),
                            r = i.uuid;
                        e.set("X-Amz-Meta-requester-id", a),
                        e.set("X-Amz-Meta-channel-token", t),
                        e.set("X-Amz-Meta-bot-id", r),
                        e.set("X-Amz-Meta-webapp-version", "webappv2")
                    }
                }, {
                    key: "getS3LocationObject",
                    value: function() {
                        var e = Hd(X.a.mark((function e(t) {
                            var n,
                                s;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = this.vm.$service("requester"), s = new FormData, s.set("filePath", t.name), s.set("contentType", t.type), this.addS3Metadata(s), e.abrupt("return", n.execute("presignFile", {
                                            formData: s
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "getFormData",
                    value: function(e, t) {
                        var n = t.signature,
                            s = new FormData;
                        return Object.keys(n).forEach((function(e) {
                            s.set(e, n[e])
                        })), this.addS3Metadata(s), s.append("file", e), s
                    }
                }, {
                    key: "uploadFileToS3",
                    value: function(e, t) {
                        var n = this.vm.$service("requester"),
                            s = this.getFormData(e, t),
                            a = t.postEndpoint;
                        return n.execute("uploadFileToS3", {
                            postEndpoint: a,
                            formData: s
                        })
                    }
                }]), n
            }(rl),
            np = tp,
            sp = n("bc3a"),
            ap = n.n(sp);
        function ip(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function rp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function op(e, t, n) {
            return t && rp(e.prototype, t), n && rp(e, n), e
        }
        var cp = function() {
                function e() {
                    ip(this, e)
                }
                return op(e, null, [{
                    key: "request",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e4;
                        return ap.a.create({
                            baseURL: "https://clients.csml.dev/v1",
                            timeout: t,
                            headers: e || {}
                        })
                    }
                }]), e
            }(),
            up = cp;
        function lp(e) {
            return lp = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, lp(e)
        }
        function dp(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && pp(e, t)
        }
        function pp(e, t) {
            return pp = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, pp(e, t)
        }
        function fp(e) {
            var t = hp();
            return function() {
                var n,
                    s = bp(e);
                if (t) {
                    var a = bp(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return mp(this, n)
            }
        }
        function mp(e, t) {
            return !t || "object" !== lp(t) && "function" !== typeof t ? gp(e) : t
        }
        function gp(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function hp() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function bp(e) {
            return bp = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, bp(e)
        }
        function _p(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function vp(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        _p(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        _p(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function yp(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function wp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Ep(e, t, n) {
            return t && wp(e.prototype, t), n && wp(e, n), e
        }
        var kp = function() {
                function e(t, n) {
                    yp(this, e),
                    this.vm = t,
                    this.jwt = n
                }
                return Ep(e, [{
                    key: "loadCsmlApps",
                    value: function() {
                        var e = vp(X.a.mark((function e() {
                            var t,
                                n;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t = this.vm.$store.getters.currentBot.uuid, n = "/webapp/".concat(t, "/apps"), e.next = 5, up.request({
                                            "x-user-jwt": "Bearer ".concat(this.jwt)
                                        }).get(n);
                                    case 5:
                                        return e.abrupt("return", e.sent.data);
                                    case 8:
                                        return e.prev = 8, e.t0 = e["catch"](0), console.error(e.t0), e.abrupt("return", []);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this, [[0, 8]])
                        })));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "getAutocompleteResults",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, n = this.vm.token, s = "/webapp/".concat(n, "/autocomplete"), a = t.text, e.next = 6, up.request({
                                            "x-user-jwt": "Bearer ".concat(this.jwt)
                                        }).post(s, {
                                            text: a
                                        });
                                    case 6:
                                        return e.abrupt("return", e.sent.data);
                                    case 9:
                                        return e.prev = 9, e.t0 = e["catch"](0), console.error(e.t0), e.abrupt("return", []);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this, [[0, 9]])
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "loadChannels",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i,
                                r;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.tokens, s = n.groupToken, a = n.channelToken, !s) {
                                            e.next = 7;
                                            break
                                        }
                                        return i = "/webapp/channels/multi/".concat(s, "/info"), e.next = 6, up.request({
                                            "x-user-jwt": "Bearer ".concat(this.jwt)
                                        }).get(i);
                                    case 6:
                                        return e.abrupt("return", e.sent.data);
                                    case 7:
                                        return r = "/webapp/channels/single/".concat(a, "/info"), e.next = 10, up.request({
                                            "x-user-jwt": "Bearer ".concat(this.jwt)
                                        }).get(r);
                                    case 10:
                                        return e.t0 = e.sent.data, e.abrupt("return", [e.t0]);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "presignFile",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = 12e5, s = "/webapp/".concat(this.vm.token, "/presignFile"), a = t.formData, e.next = 5, up.request({
                                            "x-user-jwt": "Bearer ".concat(this.jwt)
                                        }, n).post(s, a);
                                    case 5:
                                        return e.abrupt("return", e.sent.data);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "uploadFileToS3",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = 12e5, s = t.postEndpoint, a = t.formData, e.next = 4, up.request(null, n).post(s, a);
                                    case 4:
                                        return e.abrupt("return", e.sent.data);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "sendAskRequest",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i,
                                r;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = "https://clients.csml.dev/v1", s = t.body, a = this.vm.token, i = this.vm.$session.get("session_uuid"), r = "".concat(n, "/ask/default/").concat(a, "?session_uuid=").concat(i), e.next = 7, up.request({
                                            "x-user-jwt": "Bearer ".concat(this.jwt)
                                        }).post(r, s);
                                    case 7:
                                        return e.abrupt("return", e.sent.data);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "getFileUrl",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.body, s = "/webapp/".concat(this.vm.token, "/uploadFile"), e.next = 4, up.request({
                                            "x-user-jwt": "Bearer ".concat(this.jwt)
                                        }).post(s, n);
                                    case 4:
                                        return e.abrupt("return", e.sent.data);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }]), e
            }(),
            Sp = function(e) {
                dp(n, e);
                var t = fp(n);
                function n() {
                    var e;
                    yp(this, n);
                    for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
                        a[i] = arguments[i];
                    return e = t.call.apply(t, [this].concat(a)), e.debug = "true" === e.vm.$route.query.debug, e.jwt = e.vm.$session.get("jwt") || e.vm.$route.query.jwt, e.bot_id = e.vm.$route.query.bot_id, e
                }
                return Ep(n, [{
                    key: "loadCsmlApps",
                    value: function() {
                        var e = vp(X.a.mark((function e() {
                            var t,
                                n,
                                s;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.vm.$store.state.channels.currentToken, n = "/webapp/".concat(t, "/apps"), s = this.jwt ? {
                                            Authorization: "Bearer ".concat(this.jwt)
                                        } : null, e.next = 5, up.request(s).get(n);
                                    case 5:
                                        return e.abrupt("return", e.sent.data);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "getAutocompleteResults",
                    value: function() {
                        var e = vp(X.a.mark((function e() {
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", []);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e)
                        })));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "loadChannels",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.tokens.channelToken, s = "/webapp/".concat(n, "/info"), a = this.jwt ? {
                                            Authorization: "Bearer ".concat(this.jwt)
                                        } : null, n && "undefined" !== n) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", []);
                                    case 5:
                                        return e.next = 7, up.request(a).get(s);
                                    case 7:
                                        return e.t0 = e.sent.data, e.abrupt("return", [e.t0]);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "sendAskRequest",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i,
                                r,
                                o,
                                c,
                                u;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (this.debug && console.log("Sending ask request", JSON.stringify(t)), n = t.body, s = this.vm.token, a = this.vm.$session.get("session_uuid"), i = this.jwt ? {
                                            Authorization: "Bearer ".concat(this.jwt)
                                        } : null, r = new URLSearchParams(window.location.search), o = r.get("metadata"), n.webapp_metadata = {
                                            language_code: navigator.language || navigator.userLanguage
                                        }, o)
                                            try {
                                                c = JSON.parse(decodeURIComponent(o)),
                                                Object.assign(n.webapp_metadata, c)
                                            } catch (l) {
                                                console.warn("Invalid metadata", l)
                                            }
                                        return u = "/webapp/".concat(s, "/receive?session_id=").concat(a), e.next = 12, up.request(i).post(u, n);
                                    case 12:
                                        return e.abrupt("return", e.sent.data);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "presignFile",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = 12e5, s = "/webapp/".concat(this.vm.token, "/uploads/presign"), a = t.formData, i = this.jwt ? {
                                            Authorization: "Bearer ".concat(this.jwt)
                                        } : null, e.next = 6, up.request(i, n).post(s, a);
                                    case 6:
                                        return e.abrupt("return", e.sent.data);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "uploadFileToS3",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = 12e5, s = t.postEndpoint, a = t.formData, e.next = 4, up.request(null, n).post(s, a);
                                    case 4:
                                        return e.abrupt("return", e.sent.data);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "getFileUrl",
                    value: function() {
                        var e = vp(X.a.mark((function e(t) {
                            var n,
                                s,
                                a,
                                i;
                            return X.a.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = "/webapp/".concat(this.vm.token, "/uploads/presign?key=").concat(t.body.key), s = this.jwt ? {
                                            Authorization: "Bearer ".concat(this.jwt)
                                        } : null, e.next = 4, up.request(s).get(n);
                                    case 4:
                                        return a = e.sent, i = a.data, e.abrupt("return", {
                                            short_url: i.signed_url
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, this)
                        })));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }]), n
            }(kp);
        function Cp(e) {
            return Cp = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Cp(e)
        }
        function Op(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function xp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Ap(e, t, n) {
            return t && xp(e.prototype, t), n && xp(e, n), e
        }
        function Mp(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Pp(e, t)
        }
        function Pp(e, t) {
            return Pp = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, Pp(e, t)
        }
        function Tp(e) {
            var t = Dp();
            return function() {
                var n,
                    s = Np(e);
                if (t) {
                    var a = Np(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return Ip(this, n)
            }
        }
        function Ip(e, t) {
            return !t || "object" !== Cp(t) && "function" !== typeof t ? Lp(e) : t
        }
        function Lp(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Dp() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function Np(e) {
            return Np = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Np(e)
        }
        var Rp = function(e) {
                Mp(n, e);
                var t = Tp(n);
                function n(e) {
                    var s;
                    Op(this, n),
                    s = t.call(this, e);
                    var a = e.$session.get("jwt");
                    return s.requester = new Sp(e, a), s
                }
                return Ap(n, [{
                    key: "execute",
                    value: function(e, t) {
                        var n = this.requester[e].bind(this.requester);
                        if (!n)
                            throw new Error("No request found under the name: '".concat(e, "'"));
                        return n(t)
                    }
                }]), n
            }(rl),
            jp = Rp,
            Bp = n("b730"),
            $p = n.n(Bp);
        function Up(e) {
            return Up = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Up(e)
        }
        function Fp(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Gp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function Vp(e, t, n) {
            return t && Gp(e.prototype, t), n && Gp(e, n), e
        }
        function Hp(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Wp(e, t)
        }
        function Wp(e, t) {
            return Wp = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, Wp(e, t)
        }
        function zp(e) {
            var t = Yp();
            return function() {
                var n,
                    s = Jp(e);
                if (t) {
                    var a = Jp(this).constructor;
                    n = Reflect.construct(s, arguments, a)
                } else
                    n = s.apply(this, arguments);
                return qp(this, n)
            }
        }
        function qp(e, t) {
            return !t || "object" !== Up(t) && "function" !== typeof t ? Kp(e) : t
        }
        function Kp(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Yp() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }
        function Jp(e) {
            return Jp = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Jp(e)
        }
        var Qp = function(e) {
                Hp(n, e);
                var t = zp(n);
                function n() {
                    return Fp(this, n), t.apply(this, arguments)
                }
                return Vp(n, [{
                    key: "notifyMessage",
                    value: function(e) {
                        var t = e.content_type,
                            n = "";
                        switch (t) {
                        case "text":
                            n = e.text;
                            break;
                        case "image":
                            n = "Image";
                            break;
                        default:
                            n = "";
                            break
                        }
                        n = O.markdownToRawText(n),
                        $p.a.create(this.vm.$i18n.t("NotificationService.browserNotification.title"), {
                            body: n,
                            timeout: 3e3,
                            onClick: function() {
                                window.focus(),
                                this.close()
                            }
                        })
                    }
                }]), n
            }(rl),
            Xp = Qp,
            Zp = {
                ask: wl,
                auth: Bl,
                channels: Zl,
                worker: fd,
                ws: Ad,
                user: Fd,
                file: np,
                requester: jp,
                notification: Xp
            },
            ef = {
                install: function(e) {
                    function t(e) {
                        var t = e.name;
                        if (!(e.prototype instanceof rl))
                            throw new Error("\n            Can't use service class '".concat(t, "' as a service.\n            '").concat(t, "' don't integrate the 'BaseService' class.\n          "))
                    }
                    e.prototype.$service = function(e) {
                        var n = this;
                        if ("string" === typeof e) {
                            var s = e,
                                a = Zp[s];
                            if (!a)
                                throw new Error("Unknown service '".concat(s, "'"));
                            return t(a), new a(this)
                        }
                        if (Array.isArray(e)) {
                            var i = e,
                                r = {};
                            return i.forEach((function(e) {
                                var s = i[e];
                                if (!s)
                                    throw new Error("Unknown service '".concat(e, "'"));
                                t(s),
                                r[e] = new s(n)
                            })), r
                        }
                        return null
                    }
                }
            },
            tf = ef,
            nf = {
                install: function(e) {
                    var t = new a["default"],
                        n = {};
                    e.prototype.$eventBus = function(e) {
                        if (arguments.length >= 1 && ("undefined" === typeof e || null === e))
                            throw new Error("Can't pass an undefined $eventBus id, remove the undefined parameter or pass a valid parameter.");
                        return e ? (n[e] || (n[e] = new a["default"]), n[e]) : t
                    }
                }
            },
            sf = nf;
        window.HELP_IMPROVE_VIDEOJS = !1,
        a["default"].use(s["a"]);
        var af = Object({
                NODE_ENV: "production",
                VUE_APP_WS_URL: "wss://ws.csml.dev/prod",
                VUE_APP_API_URL: "https://clients.csml.dev/v1",
                VUE_APP_S3_BUCKET: "csml.dev-chat",
                VUE_APP_CLOUDFRONT_DISTRIBUTION_ID: "E2T4MOQLMGAE9C",
                VUE_APP_GOOGLE_SPEECH_API_KEY: "AIzaSyDghdDIDznZEpS7WV5j6w50RDKnns3eS2E",
                VUE_APP_ENV: "local",
                VUE_APP_BUGSNAG_API_KEY: "",
                BASE_URL: "/"
            }),
            rf = af.VUE_APP_BUGSNAG_API_KEY,
            of = af.VUE_APP_ENV;
        if (rf && "local" !== of) {
            var cf = m()({
                apiKey: rf,
                collectUserIp: !1
            });
            cf.use(h.a, a["default"])
        }
        a["default"].config.productionTip = !1,
        a["default"].use(tf),
        a["default"].use(sf),
        a["default"].use(r.a),
        a["default"].use(c.a, {
            dynamic: !0,
            classes: ["c-modal"],
            injectModalContainer: !0
        }),
        a["default"].use(u["a"], {}),
        a["default"].use(d.a, {
            componentPrefix: "ui"
        }),
        a["default"].use(p["a"], {
            globalOptions: {}
        }),
        new a["default"]({
            router: Uc,
            store: Bu,
            i18n: sl,
            render: function(e) {
                return e(W)
            }
        }).$mount("#app")
    },
    "56fc": function(e, t, n) {
        "use strict";
        n("6947")
    },
    "5b2e": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Доступные приложения"},"AppsList":{"aria":{"appsLogoAlt":"Значок потока обсуждения"},"booting":"загрузка","running":"Бег","title":"Доступные приложения"},"BaseMessage":{"retrySending":"Произошла ошибка. Нажмите, чтобы повторить попытку."},"BotCard":{"highContrastMode":"Визуальная доступность","optionsPanelTitle":"Опции","privacyPolicy":"Политика конфиденциальности","restartConversation":"Начать разговор заново","screenReaderMode":"Аудио режим","termsAndConditions":"Условия и положения"},"DiscussionsListCard":{"disabledLabel":"инвалид","lastMessageFormats":{"image":"Изображение","url":"Ссылка на сайт","video":"видео"},"title":"Обсуждения"},"DownvoteForm":{"reasonMessageLabel":"Расскажите о вашей проблеме подробнее","reasonTypeLabel":"Что пошло не так","reportReasonsList":{"ERRONEOUS_ANSWER":"Ответ содержит ошибочную информацию","INCOMPLETE_ANSWER":"Ответ неполный","IRRELEVANT_ANSWER":"Ответ не имеет значения","OTHER":"Другая причина"},"writeHere":"Напишите здесь ..."},"DownvoteModal":{"title":"Сообщить об ответе"},"FileMessage":{"aria":{"fileThumbnailAlt":"Изображение предварительного просмотра файла"}},"ImageMessage":{"aria":{"defaultImageAlt":"Полученное изображение"},"tooltips":{"download":"Скачать","expand":"Расширять"}},"Index":{"errors":{"404":"Запрошенная страница не существует.","500-text":"Пожалуйста, повторите попытку позже.","500-title":"Ух О, есть проблема!"}},"InputCard":{"dropFilesHere":"Перетащите сюда свои файлы","inactiveChannel":"Вы не можете ответить на этот разговор"},"LinkMessage":{"aria":{"faviconImageAlt":"Значок целевого веб-сайта ссылки"}},"NetworkInfoPanel":{"text":"Соединение потеряно, соединение будет восстановлено автоматически"},"NewMessageInfoPanel":{"text":"Вы получили новые сообщения. Щелкните для прокрутки."},"NotificationService":{"browserNotification":{"title":"Вы получили новое сообщение!"}},"PendingModal":{"description":"После получения ответа мы ответим на ваш вопрос по электронной почте.","title":"Получите ответ по электронной почте"},"RightSideBar":{"theApps":"Приложения"},"TextInput":{"aria":{"label":"Напишите здесь сообщение"},"speechModePlaceholder":"Скажите что-то...","submitText":"послать","textModePlaceholder":"Напиши сообщение..."},"gen":{"aria":{"botImageAlt":"Изображение бота"},"cancel":"Отмена","logout":"Выйти","submit":"Представлять на рассмотрение"}}')
    },
    "5c2e": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Apps disponibles"},"AppsList":{"aria":{"appsLogoAlt":"Icône de flux de discussion"},"booting":"démarrage","running":"en cours","title":"Applications disponibles"},"BaseMessage":{"retrySending":"Une erreur est survenue. Cliquez pour réessayer."},"BotCard":{"highContrastMode":"Accessibilité visuelle","optionsPanelTitle":"Options","privacyPolicy":"Politique de confidentialité","restartConversation":"Redémarrer la conversation","screenReaderMode":"Mode audio","termsAndConditions":"Conditions d\'utilisation"},"DiscussionsListCard":{"disabledLabel":"désactivé","lastMessageFormats":{"image":"Image","url":"Lien","video":"Vidéo"},"title":"Discussions"},"DownvoteForm":{"reasonMessageLabel":"Dites-nous en plus à propos de votre problème","reasonTypeLabel":"Qu\'est ce qui ne s\'est pas bien passé","reportReasonsList":{"ERRONEOUS_ANSWER":"La réponse contient des informations erronées","INCOMPLETE_ANSWER":"La réponse est incomplète","IRRELEVANT_ANSWER":"La réponse n\'est pas pertinente","OTHER":"Autre raison"},"writeHere":"Ecrire ici ..."},"DownvoteModal":{"title":"Signaler une réponse"},"FileMessage":{"aria":{"fileThumbnailAlt":"Image d\'aperçu du fichier"}},"ImageMessage":{"aria":{"defaultImageAlt":"Image reçue"},"tooltips":{"download":"Télécharger","expand":"Agrandir"}},"Index":{"errors":{"404":"La page que vous avez demandée n\'existe pas.","500-text":"Veuillez réessayer plus tard.","500-title":"Oh, il y a un problème!"}},"InputCard":{"dropFilesHere":"Déposez vos fichiers ici","inactiveChannel":"Vous ne pouvez pas répondre à cette conversation"},"LinkMessage":{"aria":{"faviconImageAlt":"Favicon du site Web cible du lien"}},"NetworkInfoPanel":{"text":"Connexion perdue, vous serez reconnecté automatiquement"},"NewMessageInfoPanel":{"text":"Vous avez reçu de nouveaux messages. Cliquez pour faire défiler."},"NotificationService":{"browserNotification":{"title":"Vous avez reçu un nouveau message !"}},"PendingModal":{"description":"Nous répondrons à votre question par e-mail lorsqu\'une réponse sera fournie.","title":"Obtenez une réponse par e-mail"},"RightSideBar":{"theApps":"Les applis"},"TextInput":{"aria":{"label":"Écrivez un message ici"},"speechModePlaceholder":"Dites quelque chose...","submitText":"Envoyer","textModePlaceholder":"Écrivez un message..."},"gen":{"aria":{"botImageAlt":"Image du bot"},"cancel":"Annuler","logout":"Se déconnecter","submit":"Soumettre"}}')
    },
    "621f": function(e, t, n) {},
    "670c": function(e, t, n) {
        "use strict";
        n("ee84")
    },
    6719: function(e, t, n) {},
    6794: function(e, t, n) {},
    "67b9": function(e, t, n) {},
    6831: function(e, t, n) {},
    6892: function(e, t, n) {},
    "689c": function(e, t, n) {
        "use strict";
        n("9c35")
    },
    "68c1": function(e, t, n) {
        "use strict";
        n("29a3")
    },
    6947: function(e, t, n) {},
    "6a8d": function(e, t, n) {},
    "6b30": function(e, t, n) {},
    "6d74": function(e, t, n) {
        "use strict";
        n("2db4")
    },
    "6e7e": function(e, t, n) {},
    "6f27": function(e, t, n) {},
    "6f78": function(e, t, n) {},
    "70e4": function(e, t, n) {
        "use strict";
        n("6831")
    },
    "71aa": function(e, t, n) {
        "use strict";
        n("621f")
    },
    7539: function(e, t, n) {},
    "7b58": function(e, t, n) {
        "use strict";
        n("eee4")
    },
    "7ec0": function(e, t, n) {},
    8021: function(e, t, n) {
        "use strict";
        n("d9fa")
    },
    "821e": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Tillgängliga appar"},"AppsList":{"aria":{"appsLogoAlt":"Diskussionsflödesikon"},"booting":"startar","running":"löpning","title":"Tillgängliga appar"},"BaseMessage":{"retrySending":"Ett fel uppstod. Klicka för att försöka igen."},"BotCard":{"highContrastMode":"Visuell tillgänglighet","optionsPanelTitle":"alternativ","privacyPolicy":"Integritetspolicy","restartConversation":"Starta om konversation","screenReaderMode":"Ljudläge","termsAndConditions":"Villkor"},"DiscussionsListCard":{"disabledLabel":"Inaktiverad","lastMessageFormats":{"image":"Bild","url":"Länk","video":"Video"},"title":"Diskussioner"},"DownvoteForm":{"reasonMessageLabel":"berätta mer om ditt problem","reasonTypeLabel":"Vad gick fel","reportReasonsList":{"ERRONEOUS_ANSWER":"Svaret innehåller felaktig information","INCOMPLETE_ANSWER":"Svaret är ofullständigt","IRRELEVANT_ANSWER":"Svaret är irrelevant","OTHER":"Annan orsak"},"writeHere":"Skriv här ..."},"DownvoteModal":{"title":"Anmäl ett svar"},"FileMessage":{"aria":{"fileThumbnailAlt":"Fil förhandsgranskning"}},"ImageMessage":{"aria":{"defaultImageAlt":"Mottagen bild"},"tooltips":{"download":"Ladda ner","expand":"Bygga ut"}},"Index":{"errors":{"404":"Sidan du begärde finns inte.","500-text":"Vänligen försök igen senare.","500-title":"Åh, det är ett problem!"}},"InputCard":{"dropFilesHere":"Släpp dina filer här","inactiveChannel":"Du kan inte svara på den här konversationen"},"LinkMessage":{"aria":{"faviconImageAlt":"Länks målwebbplats favicon"}},"NetworkInfoPanel":{"text":"Anslutningen avbröts, du kommer att återanslutas automatiskt"},"NewMessageInfoPanel":{"text":"Du fick nya meddelanden. Klicka för att rulla."},"NotificationService":{"browserNotification":{"title":"Du fick ett nytt meddelande!"}},"PendingModal":{"description":"Vi svarar på din fråga via e -post när ett svar kommer.","title":"Få svar via mejl"},"RightSideBar":{"theApps":"Appar"},"TextInput":{"aria":{"label":"Skriv ett meddelande här"},"speechModePlaceholder":"Säg något...","submitText":"Skicka","textModePlaceholder":"Skriv ett meddelande..."},"gen":{"aria":{"botImageAlt":"Bot -bild"},"cancel":"Annullera","logout":"Logga ut","submit":"Skicka in"}}')
    },
    "823d": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Verfügbare Apps"},"AppsList":{"aria":{"appsLogoAlt":"Symbol für Diskussionsfluss"},"booting":"booten","running":"Laufen","title":"Verfügbare Apps"},"BaseMessage":{"retrySending":"Ein Fehler ist aufgetreten. Klicken Sie auf , um es erneut zu versuchen."},"BotCard":{"highContrastMode":"Visuelle Barrierefreiheit","optionsPanelTitle":"Optionen","privacyPolicy":"Datenschutz-Bestimmungen","restartConversation":"Konversation neu starten","screenReaderMode":"Audiomodus","termsAndConditions":"Geschäftsbedingungen"},"DiscussionsListCard":{"disabledLabel":"Deaktiviert","lastMessageFormats":{"image":"Bild","url":"Verknüpfung","video":"Video"},"title":"Diskussionen"},"DownvoteForm":{"reasonMessageLabel":"Erzähl uns mehr über dein Problem","reasonTypeLabel":"Was schief gelaufen ist","reportReasonsList":{"ERRONEOUS_ANSWER":"Die Antwort enthält falsche Informationen","INCOMPLETE_ANSWER":"Die Antwort ist unvollständig","IRRELEVANT_ANSWER":"Die Antwort ist irrelevant","OTHER":"Anderer Grund"},"writeHere":"Hier schreiben ..."},"DownvoteModal":{"title":"Antwort melden"},"FileMessage":{"aria":{"fileThumbnailAlt":"Dateivorschaubild"}},"ImageMessage":{"aria":{"defaultImageAlt":"Empfangenes Bild"},"tooltips":{"download":"Herunterladen","expand":"Erweitern"}},"Index":{"errors":{"404":"Die angeforderte Seite existiert nicht.","500-text":"Bitte versuchen Sie es später erneut.","500-title":"Oh, es gibt ein Problem!"}},"InputCard":{"dropFilesHere":"Legen Sie Ihre Dateien hier ab","inactiveChannel":"Sie können dieses Gespräch nicht beantworten"},"LinkMessage":{"aria":{"faviconImageAlt":"Favicon der Zielwebsite des Links"}},"NetworkInfoPanel":{"text":"Verbindung verloren, Sie werden automatisch wieder verbunden"},"NewMessageInfoPanel":{"text":"Sie haben neue Nachrichten erhalten. Klicken Sie, um zu scrollen."},"NotificationService":{"browserNotification":{"title":"Sie haben eine neue Nachricht erhalten!"}},"PendingModal":{"description":"Wir beantworten Ihre Frage per E-Mail, wenn eine Antwort erfolgt.","title":"Erhalten Sie eine Antwort per E-Mail"},"RightSideBar":{"theApps":"Die Apps"},"TextInput":{"aria":{"label":"Schreiben Sie hier eine Nachricht"},"speechModePlaceholder":"Sag etwas...","submitText":"Senden","textModePlaceholder":"Eine Nachricht schreiben..."},"gen":{"aria":{"botImageAlt":"Bot-Bild"},"cancel":"Stornieren","logout":"Ausloggen","submit":"einreichen"}}')
    },
    "82d0": function(e, t, n) {
        "use strict";
        var s = n("c64e"),
            a = n.n(s),
            i = n("5994"),
            r = n.n(i),
            o = n("0ee3");
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function l(e, t, n) {
            return t && u(e.prototype, t), n && u(e, n), e
        }
        var d = function() {
            function e() {
                c(this, e)
            }
            return l(e, null, [{
                key: "createMessage",
                value: function(e, t, n) {
                    var s = {
                        content_type: e,
                        timestamp: null,
                        options: {
                            reportable: !1,
                            likable: !1
                        },
                        payload: null,
                        meta: {
                            message_id: a()(),
                            sequence_id: a()(),
                            sender: t,
                            sending_status: o["a"].MESSAGE_SENDING_ONGOING,
                            is_first_message_in_group: !1
                        }
                    };
                    return Object.assign(s, n)
                }
            }, {
                key: "addDefaultFields",
                value: function(e) {
                    if (!e)
                        throw new Error("Missing message");
                    r()(e, {
                        options: {
                            reportable: !1,
                            likable: !1
                        },
                        meta: {
                            message_id: a()(),
                            sequence_id: a()(),
                            sender: "bot",
                            is_upvoted: !1,
                            is_downvoted: !1,
                            is_first_message_in_group: !1
                        }
                    }),
                    "suggestion-buttons" === e.content_type && e.buttons.forEach((function(e) {
                        r()(e, {
                            options: {
                                visited: !1
                            }
                        })
                    }))
                }
            }]), e
        }();
        t["a"] = d
    },
    "85ec": function(e, t, n) {},
    8656: function(e, t, n) {
        "use strict";
        function s(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function i(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }
        var r = function() {
            function e() {
                s(this, e)
            }
            return i(e, null, [{
                key: "pxToNumber",
                value: function(e) {
                    return Number(e.replace("px", ""))
                }
            }, {
                key: "getScrollableDistance",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = document,
                        n = t.body,
                        s = t.documentElement,
                        a = s.scrollTop || n.scrollTop,
                        i = s.scrollHeight || n.scrollHeight,
                        r = s.clientHeight;
                    return e && (a = e.scrollTop, i = e.scrollHeight, r = e.clientHeight), Math.max(i - r - a, 0)
                }
            }, {
                key: "scrollToBottom",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = document.documentElement.clientHeight / 2 || 200,
                        n = this.getScrollableDistance();
                    return !(!e && n >= t) && (window.scrollTo(0, document.body.scrollHeight), !0)
                }
            }]), e
        }();
        t["a"] = r,
        window.DomUtil = r
    },
    "86dd": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Aplicativos disponíveis"},"AppsList":{"aria":{"appsLogoAlt":"Ícone de fluxo de discussão"},"booting":"inicialização","running":"corrida","title":"Aplicativos disponíveis"},"BaseMessage":{"retrySending":"Um erro ocorreu. Clique para tentar novamente."},"BotCard":{"highContrastMode":"Acessibilidade visual","optionsPanelTitle":"Opções","privacyPolicy":"Política de Privacidade","restartConversation":"Reiniciar conversa","screenReaderMode":"Modo áudio","termsAndConditions":"Termos e Condições"},"DiscussionsListCard":{"disabledLabel":"Desativado","lastMessageFormats":{"image":"Imagem","url":"Ligação","video":"Vídeo"},"title":"Discussões"},"DownvoteForm":{"reasonMessageLabel":"conte-nos mais sobre seu problema","reasonTypeLabel":"O que deu errado","reportReasonsList":{"ERRONEOUS_ANSWER":"A resposta contém informações erradas","INCOMPLETE_ANSWER":"A resposta está incompleta","IRRELEVANT_ANSWER":"A resposta é irrelevante","OTHER":"Outra razão"},"writeHere":"Escreva aqui ..."},"DownvoteModal":{"title":"Denunciar uma resposta"},"FileMessage":{"aria":{"fileThumbnailAlt":"Imagem de visualização do arquivo"}},"ImageMessage":{"aria":{"defaultImageAlt":"Imagem recebida"},"tooltips":{"download":"Baixar","expand":"Expandir"}},"Index":{"errors":{"404":"A página que você solicitou não existe.","500-text":"Por favor, tente novamente mais tarde.","500-title":"Uh Oh, há um problema!"}},"InputCard":{"dropFilesHere":"Deixe seus arquivos aqui","inactiveChannel":"Você não pode responder a esta conversa"},"LinkMessage":{"aria":{"faviconImageAlt":"Favicon do site de destino do link"}},"NetworkInfoPanel":{"text":"Conexão perdida, você será reconectado automaticamente"},"NewMessageInfoPanel":{"text":"Você recebeu novas mensagens. Clique para rolar."},"NotificationService":{"browserNotification":{"title":"Você recebeu uma nova mensagem!"}},"PendingModal":{"description":"Responderemos sua pergunta por e-mail quando uma resposta for fornecida.","title":"Obtenha uma resposta por e-mail"},"RightSideBar":{"theApps":"Os aplicativos"},"TextInput":{"aria":{"label":"Escreva aqui uma mensagem"},"speechModePlaceholder":"Diga alguma coisa...","submitText":"Mandar","textModePlaceholder":"Escreva algo..."},"gen":{"aria":{"botImageAlt":"Imagem de bot"},"cancel":"Cancelar","logout":"Sair","submit":"Enviar"}}')
    },
    "8cb8": function(e, t, n) {
        "use strict";
        n("339e4")
    },
    "8df7": function(e, t, n) {},
    "8e84": function(e, t, n) {
        "use strict";
        n("8f9a")
    },
    "8f9a": function(e, t, n) {},
    "917b": function(e, t, n) {
        "use strict";
        n("6f27")
    },
    "929f": function(e, t, n) {},
    "92c5": function(e, t, n) {
        "use strict";
        n("4e59")
    },
    9314: function(e, t, n) {
        "use strict";
        n("0af2")
    },
    "94c8": function(e, t, n) {},
    "955b": function(e, t, n) {},
    9802: function(e, t, n) {
        "use strict";
        n("2738")
    },
    "98fc": function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Tilgjengelige apper"},"AppsList":{"aria":{"appsLogoAlt":"Ikon for diskusjonsflyt"},"booting":"oppstart","running":"løping","title":"Tilgjengelige apper"},"BaseMessage":{"retrySending":"En feil oppstod. Klikk for å prøve på nytt."},"BotCard":{"highContrastMode":"Visuell tilgjengelighet","optionsPanelTitle":"Alternativer","privacyPolicy":"Personvernerklæring","restartConversation":"Start samtalen på nytt","screenReaderMode":"Lydmodus","termsAndConditions":"Vilkår og betingelser"},"DiscussionsListCard":{"disabledLabel":"Funksjonshemmet","lastMessageFormats":{"image":"Bilde","url":"Lenke","video":"Video"},"title":"Diskusjoner"},"DownvoteForm":{"reasonMessageLabel":"Fortell oss mer om ditt problem","reasonTypeLabel":"Hva gikk galt","reportReasonsList":{"ERRONEOUS_ANSWER":"Svaret inneholder feil informasjon","INCOMPLETE_ANSWER":"Svaret er ufullstendig","IRRELEVANT_ANSWER":"Svaret er irrelevant","OTHER":"Annen grunn"},"writeHere":"Skriv her ..."},"DownvoteModal":{"title":"Rapporter et svar"},"FileMessage":{"aria":{"fileThumbnailAlt":"Forhåndsvisning av fil"}},"ImageMessage":{"aria":{"defaultImageAlt":"Mottatt bilde"},"tooltips":{"download":"nedlasting","expand":"Utvide"}},"Index":{"errors":{"404":"Siden du ba om eksisterer ikke.","500-text":"Prøv igjen senere.","500-title":"Åh, det er et problem!"}},"InputCard":{"dropFilesHere":"Slipp filene dine her","inactiveChannel":"Du kan ikke svare på denne samtalen"},"LinkMessage":{"aria":{"faviconImageAlt":"Links målnettsted favicon"}},"NetworkInfoPanel":{"text":"Tilkoblingen er tapt, du blir automatisk tilkoblet igjen"},"NewMessageInfoPanel":{"text":"Du mottok nye meldinger. Klikk for å bla."},"NotificationService":{"browserNotification":{"title":"Du har mottatt en ny melding!"}},"PendingModal":{"description":"Vi svarer på spørsmålet ditt via e -post når et svar er gitt.","title":"Få svar via e -post"},"RightSideBar":{"theApps":"Appene"},"TextInput":{"aria":{"label":"Skriv en melding her"},"speechModePlaceholder":"Si noe...","submitText":"Sende","textModePlaceholder":"Skrive en melding..."},"gen":{"aria":{"botImageAlt":"Bot -bilde"},"cancel":"Avbryt","logout":"Logg ut","submit":"Sende inn"}}')
    },
    "9c35": function(e, t, n) {},
    a3d8: function(e, t, n) {},
    a74a: function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Dostupné aplikace"},"AppsList":{"aria":{"appsLogoAlt":"Ikona toku diskuzí"},"booting":"bootování","running":"běh","title":"Dostupné aplikace"},"BaseMessage":{"retrySending":"Vyskytla se chyba. Kliknutím to zkuste znovu."},"BotCard":{"highContrastMode":"Vizuální přístupnost","optionsPanelTitle":"Možnosti","privacyPolicy":"Zásady ochrany osobních údajů","restartConversation":"Restartujte konverzaci","screenReaderMode":"Režim zvuku","termsAndConditions":"Pravidla a podmínky"},"DiscussionsListCard":{"disabledLabel":"Zakázáno","lastMessageFormats":{"image":"obraz","url":"Odkaz","video":"Video"},"title":"Diskuse"},"DownvoteForm":{"reasonMessageLabel":"Řekněte nám více o vašem problému","reasonTypeLabel":"Co se pokazilo","reportReasonsList":{"ERRONEOUS_ANSWER":"Odpověď obsahuje chybné informace","INCOMPLETE_ANSWER":"Odpověď je neúplná","IRRELEVANT_ANSWER":"Odpověď je irelevantní","OTHER":"Jiný důvod"},"writeHere":"Pište zde ..."},"DownvoteModal":{"title":"Nahlásit odpověď"},"FileMessage":{"aria":{"fileThumbnailAlt":"Obrázek náhledu souboru"}},"ImageMessage":{"aria":{"defaultImageAlt":"Přijatý obrázek"},"tooltips":{"download":"Stažení","expand":"Rozšířit"}},"Index":{"errors":{"404":"Požadovaná stránka neexistuje.","500-text":"Prosím zkuste to znovu později.","500-title":"Ach, problém!"}},"InputCard":{"dropFilesHere":"Sem přetáhněte soubory","inactiveChannel":"Na tuto konverzaci nemůžete odpovědět"},"LinkMessage":{"aria":{"faviconImageAlt":"Favicon cílového webu odkazu"}},"NetworkInfoPanel":{"text":"Připojení ztraceno, budete automaticky znovu připojeni"},"NewMessageInfoPanel":{"text":"Obdrželi jste nové zprávy. Kliknutím se posouváte."},"NotificationService":{"browserNotification":{"title":"Obdrželi jste novou zprávu!"}},"PendingModal":{"description":"Na vaši otázku odpovíme e -mailem, pokud bude poskytnuta odpověď.","title":"Získejte odpověď e -mailem"},"RightSideBar":{"theApps":"Aplikace"},"TextInput":{"aria":{"label":"Zde napište zprávu"},"speechModePlaceholder":"Řekni něco...","submitText":"Poslat","textModePlaceholder":"Napište zprávu..."},"gen":{"aria":{"botImageAlt":"Obrázek robota"},"cancel":"zrušení","logout":"Odhlásit se","submit":"Předložit"}}')
    },
    a94b: function(e, t, n) {},
    abd8: function(e, t, n) {},
    ad44: function(e, t, n) {
        "use strict";
        n("6b30")
    },
    ad95: function(e, t, n) {
        "use strict";
        var s = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("li", {
                    staticClass: "c-base-message",
                    attrs: {
                        "data-errored": e.sendingStatus === e.status.MESSAGE_SENDING_FAILED
                    }
                }, [e.hasContext ? n("div", {
                    staticClass: "flex p-1 text-sm text-gray-600",
                    class: ["user" === e.sender ? "ml-auto mr-8" : "ml-12"],
                    domProps: {
                        innerHTML: e._s(e.message.meta.context_label)
                    }
                }) : e._e(), n("div", {
                    staticClass: "c-base-message__wrapper"
                }, [e.displaySenderImageBox ? n("div", {
                    staticClass: "c-base-message__sender-img-box"
                }, [e.displaySenderImage ? n("img", {
                    staticClass: "c-base-message__sender-img-box__img",
                    attrs: {
                        src: e.currentBot.imageUrl
                    }
                }) : e._e()]) : e._e(), n("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.messageTooltip,
                        expression: "messageTooltip"
                    }],
                    staticClass: "w-full flex"
                }, [e._t("default"), e.menuButtonsVisible ? n("div", {
                    staticClass: "c-base-message__buttons"
                }, [n("transition-group", {
                    attrs: {
                        name: "cl-transition__fade"
                    }
                }, [e.upvoteButtonVisible ? n("div", {
                    key: 1,
                    staticClass: "c-base-message__buttons__upvote",
                    attrs: {
                        "data-activated": e.isUpvoted
                    },
                    on: {
                        click: e.upVote
                    }
                }, [n("i", {
                    staticClass: "c-base-message__buttons__upvote__icon material-icons"
                }, [e._v("thumb_up_alt")])]) : e._e(), e.downvoteButtonVisible ? n("div", {
                    key: 2,
                    staticClass: "c-base-message__buttons__downvote",
                    attrs: {
                        "data-activated": e.isDownvoted
                    },
                    on: {
                        click: e.openDownVoteModal
                    }
                }, [n("i", {
                    staticClass: "c-base-message__buttons__downvote__icon material-icons"
                }, [e._v("thumb_down_alt")])]) : e._e()])], 1) : e._e()], 2), "user" === e.sender && e.indicatorIcon ? n("div", {
                    staticClass: "c-base-message__indicator"
                }, [n("i", {
                    staticClass: "c-base-message__indicator__icon material-icons"
                }, [e._v(" " + e._s(e.indicatorIcon) + " ")])]) : e._e()]), e.sendingStatus === e.status.MESSAGE_SENDING_FAILED ? n("span", {
                    staticClass: "c-base-message__error-msg",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.retrySending
                    }
                }, [e._v(" " + e._s(e.$t("BaseMessage.retrySending")) + " ")]) : e._e()])
            },
            a = [],
            i = n("a34a"),
            r = n.n(i),
            o = n("b166"),
            c = n("3a9b"),
            u = n("2f62"),
            l = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "c-base-modal c-downvote-modal u-full-w-h"
                }, [n("header", {
                    staticClass: "c-downvote-modal__header"
                }, [n("h1", {
                    staticClass: "c-downvote-modal__header__title"
                }, [e._v(" " + e._s(e.$t("DownvoteModal.title")) + " ")])]), n("div", {
                    staticClass: "o-spacing-16--h"
                }), n("downvote-form", {
                    on: {
                        submit: e.handleSubmit,
                        cancel: function(t) {
                            return e.$emit("close")
                        }
                    }
                })], 1)
            },
            d = [],
            p = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("util-form", {
                    staticClass: "c-downvote-form",
                    attrs: {
                        data: e.reportReason
                    },
                    on: {
                        submit: function(t) {
                            return e.$emit("submit", e.reportReason)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var s = t.dynamicValidation;
                            return [n("util-form-group", [n("ui-input-label", {
                                attrs: {
                                    "input-id": "type"
                                }
                            }, [e._v(" " + e._s(e.$t("DownvoteForm.reasonTypeLabel")) + " ")]), n("ui-input-select", {
                                attrs: {
                                    id: "type",
                                    clearable: !1,
                                    searchable: !1,
                                    options: e.reportReasonsList,
                                    "get-option-label": function(t) {
                                        return e.$t("DownvoteForm.reportReasonsList." + t)
                                    }
                                },
                                model: {
                                    value: e.reportReason.type,
                                    callback: function(t) {
                                        e.$set(e.reportReason, "type", t)
                                    },
                                    expression: "reportReason.type"
                                }
                            })], 1), "OTHER" === e.reportReason.type ? n("util-form-group", [n("div", {
                                staticClass: "o-spacing-12--h"
                            }), n("ui-input-label", {
                                attrs: {
                                    "input-id": "message"
                                }
                            }, [e._v(" " + e._s(e.$t("DownvoteForm.reasonMessageLabel")) + " ")]), n("ui-input-text-area", {
                                attrs: {
                                    id: "message",
                                    rows: 5,
                                    counter: !0,
                                    maxlength: 140,
                                    placeholder: e.$t("DownvoteForm.writeHere")
                                },
                                model: {
                                    value: e.reportReason.message,
                                    callback: function(t) {
                                        e.$set(e.reportReason, "message", t)
                                    },
                                    expression: "reportReason.message"
                                }
                            })], 1) : e._e(), n("div", {
                                staticClass: "o-spacing-24--h"
                            }), n("footer", {
                                staticClass: "c-downvote-form__footer"
                            }, [n("ui-button", {
                                attrs: {
                                    theme: "link"
                                },
                                on: {
                                    click: function(t) {
                                        return e.$emit("cancel")
                                    }
                                }
                            }, [e._v(" " + e._s(e.$t("gen.cancel")) + " ")]), n("div", {
                                staticClass: "o-spacing-12--w"
                            }), n("ui-button", {
                                attrs: {
                                    disabled: s.hasErrors,
                                    type: "submit",
                                    theme: "primary"
                                }
                            }, [e._v(" " + e._s(e.$t("gen.submit")) + " ")])], 1)]
                        }
                    }])
                })
            },
            f = [],
            m = n("bbd7"),
            g = {
                name: "downvote-form",
                components: {
                    UiInputSelect: m["UiInputSelect"],
                    UiInputLabel: m["UiInputLabel"],
                    UiInputTextArea: m["UiInputTextArea"],
                    UtilForm: m["UtilForm"],
                    UtilFormGroup: m["UtilFormGroup"],
                    UiButton: m["UiButton"]
                },
                data: function() {
                    return {
                        reportReason: {
                            type: "IRRELEVANT_ANSWER",
                            message: null
                        },
                        reportReasonsList: ["IRRELEVANT_ANSWER", "ERRONEOUS_ANSWER", "INCOMPLETE_ANSWER", "OTHER"]
                    }
                }
            },
            h = g,
            b = (n("43c5"), n("2877")),
            _ = Object(b["a"])(h, p, f, !1, null, null, null),
            v = _.exports,
            y = {
                name: "downvote-modal",
                components: {
                    DownvoteForm: v
                },
                props: {
                    onSubmit: {
                        type: Function,
                        required: !0
                    }
                },
                methods: {
                    handleSubmit: function(e) {
                        this.onSubmit(e),
                        this.$emit("close")
                    }
                }
            },
            w = y,
            E = (n("0c4e"), Object(b["a"])(w, l, d, !1, null, null, null)),
            k = E.exports,
            S = n("8656"),
            C = n("0ee3");
        function O(e, t, n, s, a, i, r) {
            try {
                var o = e[i](r),
                    c = o.value
            } catch (u) {
                return void n(u)
            }
            o.done ? t(c) : Promise.resolve(c).then(s, a)
        }
        function x(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(s, a) {
                    var i = e.apply(t, n);
                    function r(e) {
                        O(i, s, a, r, o, "next", e)
                    }
                    function o(e) {
                        O(i, s, a, r, o, "throw", e)
                    }
                    r(void 0)
                }))
            }
        }
        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                n.push.apply(n, s)
            }
            return n
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(n), !0).forEach((function(t) {
                    P(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        function P(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var T = {
                name: "base-message",
                props: {
                    token: {
                        type: String,
                        required: !0
                    },
                    message: {
                        type: Object,
                        required: !0
                    },
                    noSenderIcon: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    var e,
                        t = C["a"].MESSAGE_SENDING_ONGOING,
                        n = C["a"].MESSAGE_SENDING_SUCCEEDED,
                        s = C["a"].MESSAGE_SENDING_FAILED;
                    return {
                        iconsMap: (e = {}, P(e, t, "check_circle_outline"), P(e, n, "check_circle"), P(e, s, "error_outline"), e),
                        status: {
                            MESSAGE_SENDING_ONGOING: t,
                            MESSAGE_SENDING_SUCCEEDED: n,
                            MESSAGE_SENDING_FAILED: s
                        }
                    }
                },
                computed: M(M({}, Object(u["b"])(["currentBot"])), {}, {
                    upvoteButtonVisible: function() {
                        return this.canBeUpvoted && !this.isDownvoted
                    },
                    downvoteButtonVisible: function() {
                        return this.canBeDownvoted && !this.isUpvoted && !this.isDownvoted
                    },
                    menuButtonsVisible: function() {
                        var e = this.upvoteButtonVisible,
                            t = this.downvoteButtonVisible,
                            n = this.message.sender;
                        return "user" !== n && (e || t)
                    },
                    indicatorIcon: function() {
                        return this.iconsMap[this.sendingStatus]
                    },
                    messageId: function() {
                        return this.message.meta.message_id
                    },
                    sequenceId: function() {
                        return this.message.meta.sequence_id
                    },
                    sendingStatus: function() {
                        return this.message.meta.sending_status
                    },
                    sender: function() {
                        return this.message.meta.sender
                    },
                    canBeUpvoted: function() {
                        return (this.message.options || {}).likable
                    },
                    canBeDownvoted: function() {
                        return (this.message.options || {}).reportable
                    },
                    isUpvoted: {
                        get: function() {
                            return this.message.meta.is_upvoted
                        },
                        set: function(e) {
                            this.message.meta.is_upvoted = e
                        }
                    },
                    isDownvoted: {
                        get: function() {
                            return this.message.meta.is_downvoted
                        },
                        set: function(e) {
                            this.message.meta.is_downvoted = e
                        }
                    },
                    hasContext: function() {
                        var e,
                            t;
                        return !(null === (e = this.message) || void 0 === e || null === (t = e.meta) || void 0 === t || !t.context_label)
                    },
                    readableTimestamp: function() {
                        var e,
                            t,
                            n = (null === (e = (navigator.language || navigator.userLanguage).split("_")) || void 0 === e ? void 0 : e[0]) || "en";
                        return null !== (t = this.message) && void 0 !== t && t.timestamp ? Object(o["a"])(this.message.timestamp, "PPPp", {
                            locale: c[n]
                        }) : null
                    },
                    messageTooltip: function() {
                        return !!this.readableTimestamp && {
                                content: this.readableTimestamp,
                                delay: {
                                    show: 500,
                                    hide: 0
                                },
                                placement: "user" === this.sender ? "top-end" : "top-start",
                                trigger: "hover click"
                            }
                    },
                    displaySenderImageBox: function() {
                        var e = this.message,
                            t = e.meta.sender,
                            n = e.content_type;
                        return "bot" === t && ["separator", "quick-buttons", "suggestion"].indexOf(n) < 0 && !this.noSenderIcon
                    },
                    displaySenderImage: function() {
                        if ("bot" !== this.message.meta.sender)
                            return !1;
                        var e = this.message.meta,
                            t = e.message_id,
                            n = e.is_first_message_in_group;
                        if (!n)
                            return !1;
                        var s = this.$store.getters.currentDiscussion;
                        if (!s)
                            return [];
                        var a = s.messageGroups;
                        if (!a || !a.length)
                            return [];
                        var i = a.slice().reverse().find((function(e) {
                            var t = e[0],
                                n = t.meta,
                                s = t.content_type;
                            return "bot" === n.sender && ["separator", "quick-buttons", "suggestion"].indexOf(s) < 0
                        }));
                        return !(null === i || void 0 === i || !i.find((function(e) {
                            return e.meta.message_id === t
                        })))
                    }
                }),
                mounted: function() {
                    var e = this;
                    return x(r.a.mark((function t() {
                        var n,
                            s;
                        return r.a.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.$store.state.channels.currentToken, e.token !== n) {
                                        t.next = 10;
                                        break
                                    }
                                    if ("user" !== e.sender) {
                                        t.next = 6;
                                        break
                                    }
                                    S["a"].scrollToBottom(!0),
                                    t.next = 10;
                                    break;
                                case 6:
                                    return t.next = 8, e.$nextTick();
                                case 8:
                                    s = !S["a"].scrollToBottom(),
                                    s && e.$store.dispatch("setNewMessageNoticeVisibility", !0);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }), t)
                    })))()
                },
                methods: {
                    retrySending: function() {
                        this.$eventBus(this.token).$emit(C["a"].RETRY_SENDING, this.message)
                    },
                    upVote: function() {
                        if (!this.isUpvoted) {
                            var e = this.message;
                            e.meta.is_upvoted = !0,
                            this.$service("ask").upvoteMessage(e),
                            this.isUpvoted = !0
                        }
                    },
                    downVote: function(e) {
                        if (!this.isDownvoted) {
                            var t = this.message;
                            t.meta.is_downvoted = !0,
                            this.$service("ask").downvoteMessage(t, e),
                            this.isDownvoted = !0
                        }
                    },
                    openDownVoteModal: function() {
                        this.isDownvoted || this.$modal.show(k, {
                            onSubmit: this.downVote
                        }, {
                            width: 376,
                            height: "auto",
                            transition: "cl-transition__fade"
                        })
                    }
                }
            },
            I = T,
            L = (n("007e"), Object(b["a"])(I, s, a, !1, null, null, null));
        t["a"] = L.exports
    },
    adac: function(e, t, n) {},
    b27b: function(e, t, n) {},
    b3ca: function(e, t, n) {
        "use strict";
        n("7539")
    },
    b542: function(e, t, n) {
        "use strict";
        n("c5e1")
    },
    b561: function(e, t, n) {},
    ba72: function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Доступні програми"},"AppsList":{"aria":{"appsLogoAlt":"Значок потоку обговорення"},"booting":"завантаження","running":"біг","title":"Доступні програми"},"BaseMessage":{"retrySending":"Сталась помилка. Натисніть, щоб повторити спробу."},"BotCard":{"highContrastMode":"Візуальна доступність","optionsPanelTitle":"Варіанти","privacyPolicy":"Політика конфіденційності","restartConversation":"Перезапустіть розмову","screenReaderMode":"Режим аудіо","termsAndConditions":"Правила та умови"},"DiscussionsListCard":{"disabledLabel":"Інвалід","lastMessageFormats":{"image":"Зображення","url":"Посилання","video":"Відео"},"title":"Обговорення"},"DownvoteForm":{"reasonMessageLabel":"Розкажіть докладніше про свою проблему","reasonTypeLabel":"Що пішло не так","reportReasonsList":{"ERRONEOUS_ANSWER":"Відповідь містить помилкову інформацію","INCOMPLETE_ANSWER":"Відповідь неповна","IRRELEVANT_ANSWER":"Відповідь неактуальна","OTHER":"Інша причина"},"writeHere":"Пишіть тут ..."},"DownvoteModal":{"title":"Повідомте відповідь"},"FileMessage":{"aria":{"fileThumbnailAlt":"Зображення попереднього перегляду файлу"}},"ImageMessage":{"aria":{"defaultImageAlt":"Отримане зображення"},"tooltips":{"download":"Завантажити","expand":"Розгорнути"}},"Index":{"errors":{"404":"Запитана вами сторінка не існує.","500-text":"Будь-ласка спробуйте пізніше.","500-title":"Ой, є проблема!"}},"InputCard":{"dropFilesHere":"Скиньте свої файли сюди","inactiveChannel":"Ви не можете відповісти на цю розмову"},"LinkMessage":{"aria":{"faviconImageAlt":"Цільовий веб -сайт посилання Favicon"}},"NetworkInfoPanel":{"text":"З’єднання втрачено, ви автоматично під’єднаєтесь знову"},"NewMessageInfoPanel":{"text":"Ви отримали нові повідомлення. Натисніть, щоб прокрутити."},"NotificationService":{"browserNotification":{"title":"Ви отримали нове повідомлення!"}},"PendingModal":{"description":"Коли ми надамо відповідь, ми відповімо на ваше запитання електронною поштою.","title":"Отримайте відповідь електронною поштою"},"RightSideBar":{"theApps":"Програми"},"TextInput":{"aria":{"label":"Напишіть повідомлення тут"},"speechModePlaceholder":"Скажи що-небудь...","submitText":"Надіслати","textModePlaceholder":"Напишіть повідомлення ..."},"gen":{"aria":{"botImageAlt":"Зображення бота"},"cancel":"Скасувати","logout":"Вийти","submit":"Подати"}}')
    },
    badd: function(e, t, n) {
        "use strict";
        n("6794")
    },
    bd7e: function(e, t, n) {},
    be75: function(e, t, n) {},
    bf29: function(e, t, n) {
        "use strict";
        n("6719")
    },
    c00b: function(e, t, n) {},
    c0a1: function(e, t, n) {
        "use strict";
        n("2399")
    },
    c119: function(e, t, n) {
        "use strict";
        n("be75")
    },
    c180: function(e, t, n) {
        "use strict";
        n("e97f")
    },
    c5ba: function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Käytettävissä olevat sovellukset"},"AppsList":{"aria":{"appsLogoAlt":"Keskustelun kulun kuvake"},"booting":"käynnistys","running":"käynnissä","title":"Käytettävissä olevat sovellukset"},"BaseMessage":{"retrySending":"Tapahtui virhe. Yritä uudelleen napsauttamalla."},"BotCard":{"highContrastMode":"Visuaalinen saavutettavuus","optionsPanelTitle":"Asetukset","privacyPolicy":"Tietosuojakäytäntö","restartConversation":"Käynnistä keskustelu uudelleen","screenReaderMode":"Äänitila","termsAndConditions":"Käyttöehdot"},"DiscussionsListCard":{"disabledLabel":"Liikuntarajoitteinen","lastMessageFormats":{"image":"Kuva","url":"Linkki","video":"Video"},"title":"Keskustelut"},"DownvoteForm":{"reasonMessageLabel":"Kerro meille enemmän ongelmastasi","reasonTypeLabel":"Mikä meni vikaan","reportReasonsList":{"ERRONEOUS_ANSWER":"Vastaus sisältää virheellistä tietoa","INCOMPLETE_ANSWER":"Vastaus on epätäydellinen","IRRELEVANT_ANSWER":"Vastaus on merkityksetön","OTHER":"Muu syy"},"writeHere":"Kirjoita tähän ..."},"DownvoteModal":{"title":"Ilmoita vastaus"},"FileMessage":{"aria":{"fileThumbnailAlt":"Tiedoston esikatselukuva"}},"ImageMessage":{"aria":{"defaultImageAlt":"Vastaanotettu kuva"},"tooltips":{"download":"ladata","expand":"Laajentaa"}},"Index":{"errors":{"404":"Pyytämääsi sivua ei ole olemassa.","500-text":"Yritä uudelleen myöhemmin.","500-title":"Voi, on ongelma!"}},"InputCard":{"dropFilesHere":"Pudota tiedostosi tänne","inactiveChannel":"Et voi vastata tähän keskusteluun"},"LinkMessage":{"aria":{"faviconImageAlt":"Linkin kohdesivuston favicon"}},"NetworkInfoPanel":{"text":"Yhteys katkesi, yhteys muodostetaan automaattisesti uudelleen"},"NewMessageInfoPanel":{"text":"Olet saanut uusia viestejä. Vieritä napsauttamalla."},"NotificationService":{"browserNotification":{"title":"Sait uuden viestin!"}},"PendingModal":{"description":"Vastaamme kysymykseesi sähköpostitse, kun vastaus on saatu.","title":"Saat vastauksen sähköpostitse"},"RightSideBar":{"theApps":"Sovellukset"},"TextInput":{"aria":{"label":"Kirjoita viesti tähän"},"speechModePlaceholder":"Sano jotain...","submitText":"Lähettää","textModePlaceholder":"Kirjoittaa viestin..."},"gen":{"aria":{"botImageAlt":"Bot -kuva"},"cancel":"Peruuttaa","logout":"Kirjautua ulos","submit":"Lähetä"}}')
    },
    c5e1: function(e, t, n) {},
    c5f3: function(e, t, n) {},
    c912: function(e, t, n) {},
    ca8e: function(e, t, n) {
        "use strict";
        n("67b9")
    },
    ca9c: function(e, t, n) {
        "use strict";
        n("34d4")
    },
    cee6: function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Aplicaciones disponibles"},"AppsList":{"aria":{"appsLogoAlt":"Icono de flujo de discusión"},"booting":"arranque","running":"corriendo","title":"Aplicaciones disponibles"},"BaseMessage":{"retrySending":"Ocurrió un error. Haga clic para volver a intentarlo."},"BotCard":{"highContrastMode":"Accesibilidad visual","optionsPanelTitle":"Opciones","privacyPolicy":"Política de privacidad","restartConversation":"Reiniciar conversación","screenReaderMode":"Modo audio","termsAndConditions":"Condiciones del servicio"},"DiscussionsListCard":{"disabledLabel":"Discapacitado","lastMessageFormats":{"image":"Imagen","url":"Enlace","video":"Vídeo"},"title":"Discusiones"},"DownvoteForm":{"reasonMessageLabel":"Cuéntanos más acerca de su problema","reasonTypeLabel":"Qué salió mal","reportReasonsList":{"ERRONEOUS_ANSWER":"La respuesta contiene información errónea.","INCOMPLETE_ANSWER":"La respuesta es incompleta","IRRELEVANT_ANSWER":"La respuesta es irrelevante.","OTHER":"Otra razon"},"writeHere":"Escriba aqui ..."},"DownvoteModal":{"title":"Informar una respuesta"},"FileMessage":{"aria":{"fileThumbnailAlt":"Imagen de vista previa de archivo"}},"ImageMessage":{"aria":{"defaultImageAlt":"Imagen recibida"},"tooltips":{"download":"Descargar","expand":"Expandir"}},"Index":{"errors":{"404":"La página solicitada no existe.","500-text":"Por favor, inténtelo de nuevo más tarde.","500-title":"¡Oh, hay un problema!"}},"InputCard":{"dropFilesHere":"Deposite tus archivos aquí","inactiveChannel":"No puedes responder esta conversación"},"LinkMessage":{"aria":{"faviconImageAlt":"Favicon del sitio web de destino del enlace"}},"NetworkInfoPanel":{"text":"Conexión perdida, se volverá a conectar automáticamente"},"NewMessageInfoPanel":{"text":"Recibiste nuevos mensajes. Haga clic para desplazarse."},"NotificationService":{"browserNotification":{"title":"¡Recibiste un nuevo mensaje!"}},"PendingModal":{"description":"Responderemos su pregunta por correo electrónico cuando se proporcione una respuesta.","title":"Obtenga una respuesta por correo electrónico"},"RightSideBar":{"theApps":"Las aplicaciones"},"TextInput":{"aria":{"label":"Escribe un mensaje aquí"},"speechModePlaceholder":"Di algo...","submitText":"Enviar","textModePlaceholder":"\\nEscribe algo"},"gen":{"aria":{"botImageAlt":"Imagen bot"},"cancel":"Cancelar","logout":"Cerrar sesión","submit":"Enviar"}}')
    },
    cf4e: function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Available apps"},"AppsList":{"aria":{"appsLogoAlt":"Discussion flow icon"},"booting":"booting","running":"running","title":"Available apps"},"BaseMessage":{"retrySending":"An error occurred. Click to retry."},"BotCard":{"highContrastMode":"Visual accessibility","optionsPanelTitle":"Options","privacyPolicy":"Privacy Policy","restartConversation":"Restart Conversation","screenReaderMode":"Audio mode","termsAndConditions":"Terms and Conditions"},"DiscussionsListCard":{"disabledLabel":"Disabled","lastMessageFormats":{"image":"Image","url":"Link","video":"Video"},"title":"Discussions"},"DownvoteForm":{"reasonMessageLabel":"Tell us more about your issue","reasonTypeLabel":"What went wrong","reportReasonsList":{"ERRONEOUS_ANSWER":"The answer contains erroneous information","INCOMPLETE_ANSWER":"The answer is incomplete","IRRELEVANT_ANSWER":"The answer is irrelevant","OTHER":"Other reason"},"writeHere":"Write here ..."},"DownvoteModal":{"title":"Report an answer"},"FileMessage":{"aria":{"fileThumbnailAlt":"File preview image"}},"ImageMessage":{"aria":{"defaultImageAlt":"Received image"},"tooltips":{"download":"Download","expand":"Expand"}},"Index":{"errors":{"404":"The page you requested does not exist.","500-text":"Please try again later.","500-title":"Uh Oh, there is problem!"}},"InputCard":{"dropFilesHere":"Drop your files here","inactiveChannel":"You can not answer this conversation"},"LinkMessage":{"aria":{"faviconImageAlt":"Link\'s target website favicon"}},"NetworkInfoPanel":{"text":"Connection lost, you will be reconnected automatically"},"NewMessageInfoPanel":{"text":"You received new messages. Click to scroll."},"NotificationService":{"browserNotification":{"title":"You received a new message!"}},"PendingModal":{"description":"We\'ll answer your question via email when a response is provided.","title":"Get a response via email"},"RightSideBar":{"theApps":"The Apps"},"TextInput":{"aria":{"label":"Write a message here"},"speechModePlaceholder":"Say something...","submitText":"Send","textModePlaceholder":"Write a message..."},"gen":{"aria":{"botImageAlt":"Bot image"},"cancel":"Cancel","logout":"Logout","submit":"Submit"}}')
    },
    d13b: function(e, t, n) {
        "use strict";
        n("52f4")
    },
    d170: function(e, t, n) {
        "use strict";
        n("245d")
    },
    d17c: function(e, t, n) {
        "use strict";
        n("3962")
    },
    d41d: function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"उपलब्ध ऐप्स"},"AppsList":{"aria":{"appsLogoAlt":"चर्चा प्रवाह आइकन"},"booting":"बूटिंग","running":"दौड़ना","title":"उपलब्ध ऐप्स"},"BaseMessage":{"retrySending":"एक त्रुटि पाई गई। पुनः प्रयास करने के लिए क्लिक करें।"},"BotCard":{"highContrastMode":"दृश्य अभिगम्यता","optionsPanelTitle":"विकल्प","privacyPolicy":"गोपनीयता नीति","restartConversation":"बातचीत फिर से शुरू करें","screenReaderMode":"ऑडियो मोड","termsAndConditions":"नियम और शर्तें"},"DiscussionsListCard":{"disabledLabel":"विकलांग","lastMessageFormats":{"image":"छवि","url":"संपर्क","video":"वीडियो"},"title":"चर्चाएँ"},"DownvoteForm":{"reasonMessageLabel":"अपनी समस्या के बारे में हमें और अधिक बताएँ","reasonTypeLabel":"क्या गलत हुआ","reportReasonsList":{"ERRONEOUS_ANSWER":"उत्तर में गलत जानकारी है","INCOMPLETE_ANSWER":"उत्तर अधूरा है","IRRELEVANT_ANSWER":"उत्तर अप्रासंगिक है","OTHER":"दूसरी वजह"},"writeHere":"यहाँ लिखें ..."},"DownvoteModal":{"title":"उत्तर की रिपोर्ट करें"},"FileMessage":{"aria":{"fileThumbnailAlt":"फ़ाइल पूर्वावलोकन छवि"}},"ImageMessage":{"aria":{"defaultImageAlt":"प्राप्त छवि"},"tooltips":{"download":"डाउनलोड","expand":"विस्तार करना"}},"Index":{"errors":{"404":"आपके द्वारा अनुरोधित पृष्ठ मौजूद नहीं है।","500-text":"बाद में पुन: प्रयास करें।","500-title":"उह, समस्या है!"}},"InputCard":{"dropFilesHere":"अपनी फ़ाइलें यहाँ छोड़ें","inactiveChannel":"आप इस बातचीत का जवाब नहीं दे सकते"},"LinkMessage":{"aria":{"faviconImageAlt":"लिंक का लक्ष्य वेबसाइट फ़ेविकॉन"}},"NetworkInfoPanel":{"text":"कनेक्शन टूट गया, आप अपने आप फिर से जुड़ जाएंगे"},"NewMessageInfoPanel":{"text":"आपको नए संदेश प्राप्त हुए। स्क्रॉल करने के लिए क्लिक करें।"},"NotificationService":{"browserNotification":{"title":"आपको एक नया संदेश मिला है!"}},"PendingModal":{"description":"जवाब मिलने पर हम आपके सवाल का जवाब ईमेल के जरिए देंगे।","title":"ईमेल के माध्यम से प्रतिक्रिया प्राप्त करें"},"RightSideBar":{"theApps":"ऐप्स"},"TextInput":{"aria":{"label":"यहां संदेश लिखें"},"speechModePlaceholder":"कुछ कहो...","submitText":"भेजना","textModePlaceholder":"एक सन्देश लिखिए..."},"gen":{"aria":{"botImageAlt":"बॉट छवि"},"cancel":"रद्द करना","logout":"लॉग आउट","submit":"प्रस्तुत करना"}}')
    },
    d57e: function(e, t, n) {
        "use strict";
        n("4eab")
    },
    d809: function(e, t, n) {
        "use strict";
        n("adac")
    },
    d894: function(e, t, n) {},
    d9fa: function(e, t, n) {},
    dad0: function(e, t, n) {},
    e01e: function(e, t, n) {},
    e13f: function(e, t, n) {},
    e83d: function(e, t, n) {
        "use strict";
        n("6f78")
    },
    e97f: function(e, t, n) {},
    ead3: function(e, t, n) {
        "use strict";
        n("955b")
    },
    eb04: function(e, t, n) {
        "use strict";
        n("002b")
    },
    ed1e: function(e, t, n) {
        "use strict";
        n("bd7e")
    },
    ee84: function(e, t, n) {},
    eee4: function(e, t, n) {},
    f101: function(e) {
        e.exports = JSON.parse('{"AppsCard":{"title":"Tilgængelige apps"},"AppsList":{"aria":{"appsLogoAlt":"Ikon for diskussionsflow"},"booting":"opstart","running":"løb","title":"Tilgængelige apps"},"BaseMessage":{"retrySending":"En fejl opstod. Klik for at prøve igen."},"BotCard":{"highContrastMode":"Visuel tilgængelighed","optionsPanelTitle":"Muligheder","privacyPolicy":"Fortrolighedspolitik","restartConversation":"Genstart samtale","screenReaderMode":"Lydtilstand","termsAndConditions":"Vilkår og betingelser"},"DiscussionsListCard":{"disabledLabel":"handicappet","lastMessageFormats":{"image":"Billede","url":"Link","video":"Video"},"title":"Diskussioner"},"DownvoteForm":{"reasonMessageLabel":"Fortæl os mere om dit problem","reasonTypeLabel":"Hvad gik galt","reportReasonsList":{"ERRONEOUS_ANSWER":"Svaret indeholder fejlagtige oplysninger","INCOMPLETE_ANSWER":"Svaret er ufuldstændigt","IRRELEVANT_ANSWER":"Svaret er irrelevant","OTHER":"En anden grund"},"writeHere":"Skriv her ..."},"DownvoteModal":{"title":"Rapporter et svar"},"FileMessage":{"aria":{"fileThumbnailAlt":"Fileksempelbillede"}},"ImageMessage":{"aria":{"defaultImageAlt":"Modtaget billede"},"tooltips":{"download":"Hent","expand":"Udvide"}},"Index":{"errors":{"404":"Den side, du anmodede om, findes ikke.","500-text":"Prøv igen senere.","500-title":"Uh Åh, der er et problem!"}},"InputCard":{"dropFilesHere":"Drop dine filer her","inactiveChannel":"Du kan ikke besvare denne samtale"},"LinkMessage":{"aria":{"faviconImageAlt":"Links målwebsted favicon"}},"NetworkInfoPanel":{"text":"Forbindelsen er tabt, du bliver automatisk tilsluttet igen"},"NewMessageInfoPanel":{"text":"Du har modtaget nye beskeder. Klik for at rulle."},"NotificationService":{"browserNotification":{"title":"Du har modtaget en ny besked!"}},"PendingModal":{"description":"Vi besvarer dit spørgsmål via e -mail, når der er givet et svar.","title":"Få svar via e -mail"},"RightSideBar":{"theApps":"Apps"},"TextInput":{"aria":{"label":"Skriv en besked her"},"speechModePlaceholder":"Sig noget...","submitText":"Sende","textModePlaceholder":"Skriv en besked ..."},"gen":{"aria":{"botImageAlt":"Bot billede"},"cancel":"Afbestille","logout":"Log ud","submit":"Indsend"}}')
    },
    f373: function(e, t, n) {},
    f56d: function(e, t, n) {
        "use strict";
        n("c00b")
    },
    f972: function(e, t, n) {
        "use strict";
        n("2007")
    },
    fdbf1: function(e, t, n) {},
    fde4: function(e, t, n) {
        "use strict";
        n("fdbf1")
    }
});
//# sourceMappingURL=app.fb276b7c.js.map
