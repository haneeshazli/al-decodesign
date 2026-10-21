/* The hero loop is a 2 MB decorative background. On a phone it buys nothing
 * the poster frame does not already give — the video sits behind a scrim at
 * saturate(.35), and most of it is covered by the headline — so it is not
 * worth a visitor's mobile data.
 *
 * tools/debundle.py parks the real URL in data-src so nothing downloads
 * until this decides it should. The element is rendered by the dc runtime,
 * which only ever writes data-src, so setting src here survives re-renders.
 */
(function () {
  'use strict';

  var MIN_WIDTH = 1024;

  function wanted() {
    if (window.innerWidth < MIN_WIDTH) return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    // Save-Data and a slow effectiveType are explicit "do not spend my
    // bandwidth" signals from the visitor's own browser.
    var c = navigator.connection;
    if (c && (c.saveData || /(^|-)2g$|(^|-)3g$/.test(c.effectiveType || ''))) return false;
    return true;
  }

  function attach() {
    var v = document.querySelector('#top video[data-src]');
    if (!v) return false;
    if (!wanted()) return true;  // settled for now: the poster stands in
    v.src = v.getAttribute('data-src');
    v.removeAttribute('data-src');
    var play = function () {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    };
    play();
    v.addEventListener('canplay', play, { once: true });
    return true;
  }

  // The runtime renders the hero only after React has booted, so poll briefly
  // rather than guess at the timing. attach() reports false only while the
  // element is still missing, so this stops as soon as it has been dealt
  // with — and gives up after about six seconds either way.
  var tries = 0;
  var timer = setInterval(function () {
    if (attach() || ++tries > 100) clearInterval(timer);
  }, 60);

  // A tablet turned landscape, or a desktop window widened, crosses the
  // threshold after the fact.
  addEventListener('resize', function () {
    if (document.querySelector('#top video[data-src]')) attach();
  }, { passive: true });
})();
