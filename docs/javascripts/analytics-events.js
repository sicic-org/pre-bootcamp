/*
 * Funnel analytics for the free intro site (P1.5 D / P2.4).
 * Sends GA4 events for the diversion CTAs and email capture, using the gtag
 * injected by Material's Google analytics integration (extra.analytics).
 * Elements opt in via a data-analytics-event="<name>" attribute.
 */
(function () {
  function track(name, params) {
    if (name && typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  }

  // Diversion CTA clicks (Workshops / For Teams links).
  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[data-analytics-event]");
    if (!link) {
      return;
    }
    track(link.getAttribute("data-analytics-event"), {
      link_url: link.href,
      link_text: (link.textContent || "").trim()
    });
  });

  // Email capture submit (fires once the form is wired to a real provider).
  document.addEventListener("submit", function (event) {
    var form = event.target.closest("form[data-analytics-event]");
    if (!form) {
      return;
    }
    track(form.getAttribute("data-analytics-event"), {});
  });
})();
