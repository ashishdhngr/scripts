"use strict";


!function (e) {
  var t,
      n = !1,
      s = !1;
  var a = e.getElementById("clevy-chatbox") || e.getElementById("ccx"),
      c = a.src.split("token=")[1] || a.src.split("t=")[1];
  var l = encodeURIComponent(decodeURIComponent(a.dataset.webappMetadata || "{}")),
      o = "true",
      i = a.dataset.position,
      r = a.dataset.logoUrl,//image logo can be placed here. Another iteration of r can be created and the exit logo can be added here.
      d = a.dataset.launcherFill, //fill of the logo on the floating button. '#' needs to be added for hex codes. 
      p = a.dataset.launcherBackground, //gradient can be placed here.
      h = "https://proxy.storyventure.workers.dev/channels/".concat(c, "?chatbox=true&metadata=").concat(l);

  function v(n) {
    var s = n.content_type,
        a = e.querySelector(".js-clevy-floating-messages");

    switch (s) {
      case "close":
        a.appendChild(function () {
          var n = e.createElement("div");
          return n.className = "c-clevy-close-message", n.innerHTML = '<span class="material-icons">cancel</span>', n.addEventListener("click", function () {
            t.querySelector(".js-clevy-floating-messages").innerHTML = "";
          }), n;
        }());
        break;

      case "text":
        a.appendChild(function (t) {
          if ("text" !== t.content_type) throw new Error("Expected 'text' content type, got '".concat(t.content_type, "' instead."));
          var n = e.createElement("div");
          return n.className = "o-clevy-floating-message c-clevy-text-message", n.innerHTML = "".concat(t.text), n;
        }(n));
        break;

      case "article":
        a.appendChild(function (t) {
          if ("article" !== t.content_type) throw new Error("Expected 'article' content type, got '".concat(t.content_type, "' instead."));
          var n = "c-clevy-article-message",
              s = e.createElement("article");
          return s.className = "o-clevy-floating-message ".concat(n), t.title && (s.innerHTML += "<h1 class=\"".concat(n, "__title\">").concat(t.title, "</h1>")), t.text && (s.innerHTML += "<p class=\"".concat(n, "__text\">").concat(t.text, "</p>")), s;
        }(n));
        break;

      case "buttons":
        a.appendChild(function (t) {
          if ("buttons" !== t.content_type) throw new Error("Expected 'button' content type, got '".concat(t.content_type, "' instead."));
          if (0 === (t.buttons || []).length) throw new Error("No message.buttons found, aborting.");
          var n = "c-clevy-buttons-message",
              s = e.createElement("div");
          return s.className = "".concat(n), (t.buttons || []).forEach(function (t) {
            if (!t.payload) return void console.error("Missing button payload for button", t);
            var a = e.createElement("button");
            a.className = "o-clevy-floating-message ".concat(n, "__button"), (t.icon || t.image_url) && (a.innerHTML = "<div class=\"".concat(n, "__button__icon-wrapper\">").concat(t.icon ? "<span class=\"".concat(n, "__button__icon material-icons\">").concat(t.icon, "</span>") : t.image_url ? "<img class=\"".concat(n, "__button__image\" src=\"").concat(t.image_url, "\">") : "", "</div>")), a.innerHTML += "<span class=\"".concat(n, "__button__text\">").concat(t.title, "</span>"), a.addEventListener("click", function () {
              h += "&payload=".concat(t.payload), y();
            }), s.appendChild(a);
          }), s;
        }(n));
        break;

      default:
        throw new Error("Unknown message type: '".concat(s, "'"));
    }
  }
window.alert(h)
window.alert(e.origin)
window.alert(e.data)
  function y() {
    if (!t) throw new Error("Chatbox has not been injected yet!");
    t.classList.add("l-clevy-chatbox--visible"), n || (t.querySelector(".js-clevy-iframe-wrapper").innerHTML = "<iframe\n      class=\"l-clevy-chatbox__popup__iframe\"\n      src=".concat(h, "\n      frameBorder=\"0\"\n      allow=\"microphone\"></iframe>"), n = !0), t.querySelector(".js-clevy-floating-messages").innerHTML = "", s = !0;
  }

  function m() {
    if (!t) throw new Error("Chatbox has not been injected yet!");
    t.classList.remove("l-clevy-chatbox--visible"), t.querySelector(".js-clevy-floating-messages").innerHTML = "", s = !1;
  }

  "true" !== o && !0 !== o || (h += "&debug=true"), window.addEventListener("message", function (e) {
    "https://proxy.storyventure.workers.dev" === e.origin && "csml:webapp:close" === e.data && m();
  }, !1), function () {
    var n = e.querySelector("head");
    var a = !1,
        l = !0;
    var o = e.createElement("link");
    o.rel = "stylesheet", o.type = "text/css", o.href = "https://chatbox.csml.dev/style.min.css";
    var h = e.createElement("link");
    h.rel = "stylesheet", h.type = "text/css", h.href = "https://fonts.googleapis.com/icon?family=Material+Icons", t = e.createElement("div"), t.className = "l-clevy-chatbox l-clevy-chatbox--loading", t.style.display = "none", "left" === i && (t.className += " l-clevy-chatbox--position-left");
    var g = r ? "<img src=\"".concat(r, "\" alt=\"chatbot-logo\" style=\"width:100%;height:100%;\"/>") : "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='".concat(d || "#ffffff", "'>\n    <path d='M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z'/>\n</svg>"),
        u = r ? "<img src=\"".concat(r, "\" alt=\"chatbot-logo\" style=\"width:100%;height:100%;\"/>") : "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='".concat(d || "#ffffff", "'>\n    <path d='M13.978 12.637l-1.341 1.341L6.989 8.33l-5.648 5.648L0 12.637l5.648-5.648L0 1.341 1.341 0l5.648 5.648L12.637 0l1.341 1.341L8.33 6.989l5.648 5.648z'/>\n  </svg>");

    function f() {
      {
        l = !1, n.appendChild(h), h.addEventListener("load", function () {
          l = !0;
        });

        var _e = new XMLHttpRequest();

        _e.open("GET", "".concat("https://clients.csml.dev/v1", "/webapp/", c, "/popup-messages")), _e.onload = function () {
          var t = [];

          try {
            t = JSON.parse(_e.response);
          } catch (e) {
            console.error("Bad formatting of server response, expected JSON array");
          }

          t.length && t.unshift({
            content_type: "close"
          }), function e(n) {
            if (!t[n]) return;
            var s = n ? 200 + 50 * Math.random() : 0;
            v(t[n]), setTimeout(function () {
              e(n + 1);
            }, s);
          }(0);
        }, _e.send();
      }
    }

    t.innerHTML = "\n\n      <div class=\"l-clevy-chatbox__popup\">\n        <div class=\"l-clevy-chatbox__popup__iframe-wrapper js-clevy-iframe-wrapper\"></div>\n      </div>\n\n      <div class=\"l-clevy-chatbox__floating-messages js-clevy-floating-messages\"></div>\n\n      <div class=\"l-clevy-chatbox__launcher-btn\" style=\"".concat(p ? "background: ".concat(p) : "", "\">\n        <div class=\"l-clevy-chatbox__launcher-btn__icons-wrapper\">\n          <!-- Open icon  -->\n          <div class=\"l-clevy-chatbox__launcher-btn__icon-open\">\n            ").concat(g, "\n          </div>\n          <!-- Close icon -->\n          <div class=\"l-clevy-chatbox__launcher-btn__icon-close\">\n            ").concat(u, "\n          </div>\n        </div>\n      </div>\n    "), t.querySelector(".l-clevy-chatbox__launcher-btn").addEventListener("click", function () {
      s ? (m(), setTimeout(f, 1e3)) : y();
    }), o.addEventListener("load", function () {
      a = !0;
    }), n.appendChild(o);

    var _ = setInterval(function () {
      a && l && (t.classList.remove("l-clevy-chatbox--loading"), t.style.display = "inline", setTimeout(function () {
        f();
      }, 1e3), clearInterval(_));
    }, 200);


    e.body.appendChild(t);
  }(), window.displayMessage = v;

  
    

}(document);


