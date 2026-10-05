/**
 * Horizontal Carousel for Publications & Projects
 * Handles smooth scrolling and updates prev/next arrow button states.
 */
(function () {
  'use strict';

  function setupCarousel(wrap) {
    var track = wrap.querySelector('.pub-carousel');
    var prevBtn = wrap.querySelector('.pub-carousel-nav--prev');
    var nextBtn = wrap.querySelector('.pub-carousel-nav--next');

    if (!track || !prevBtn || !nextBtn) return;

    function getScrollStep() {
      var card = track.querySelector('.pub-card');
      return card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
    }

    function syncButtons() {
      var maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.disabled = track.scrollLeft <= 4;
      nextBtn.disabled = track.scrollLeft >= maxScroll - 4;

      // Hide navigation buttons if there is nothing to scroll
      var noOverflow = maxScroll <= 2;
      prevBtn.style.display = noOverflow ? 'none' : '';
      nextBtn.style.display = noOverflow ? 'none' : '';
    }

    prevBtn.addEventListener('click', function () {
      track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function () {
      track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });

    track.addEventListener('scroll', syncButtons, { passive: true });
    window.addEventListener('resize', syncButtons);

    // Initial check
    syncButtons();
  }

  function init() {
    var carousels = document.querySelectorAll('.pub-carousel-wrap');
    Array.prototype.forEach.call(carousels, setupCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
