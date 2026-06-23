/*
 * Funnel analytics for the free intro site (P1.5 D / P2.4).
 * Sends GA4 events for the diversion CTA links, using the gtag injected by
 * Material's Google analytics integration (extra.analytics). Links opt in via
 * a data-analytics-event="<name>" attribute. The email_capture_submit event
 * is fired by email-signup.js so it counts exactly once on real submit.
 */
(function () {
  // Diversion CTA clicks (Workshops / For Teams links).
  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[data-analytics-event]");
    if (!link || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", link.getAttribute("data-analytics-event"), {
      link_url: link.href,
      link_text: (link.textContent || "").trim()
    });
  });
})();
