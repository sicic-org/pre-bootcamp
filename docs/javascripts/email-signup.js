/*
 * Email capture -> MailerLite (P1.5 D).
 * Keeps the on-brand styled form: intercepts submit, posts to MailerLite with
 * a no-cors request (the subscribe + double opt-in are handled server-side),
 * shows inline success, and fires the GA4 email_capture_submit event once.
 * If JS is unavailable, the form still posts natively to the same endpoint.
 */
(function () {
  document.addEventListener("submit", function (event) {
    var form = event.target.closest("form.js-email-signup");
    if (!form) {
      return;
    }
    event.preventDefault();

    if (typeof window.gtag === "function") {
      window.gtag("event", form.getAttribute("data-analytics-event") || "email_capture_submit", {});
    }

    fetch(form.action, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(new FormData(form))
    }).catch(function () {
      /* opaque response under no-cors; nothing to read either way */
    });

    // Optimistic inline success (the confirmation email does the real gating).
    var wrap = form.parentNode;
    var success = wrap.querySelector(".sicic-cta__success");
    form.hidden = true;
    if (success) {
      success.hidden = false;
    }
  });
})();
