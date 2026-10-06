(function () {
  'use strict';

  function initBibtex() {
    document.querySelectorAll('[data-bibtex-target]').forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = button.getAttribute('data-bibtex-target');
        var targetBlock = document.getElementById(targetId);
        if (targetBlock) {
          targetBlock.classList.toggle('open');
        }
      });
    });

    document.querySelectorAll('.pub-copy-bib').forEach(function (button) {
      button.addEventListener('click', function () {
        var pre = button.parentElement.querySelector('pre');
        if (!pre) return;

        var text = pre.innerText || pre.textContent;
        navigator.clipboard.writeText(text).then(function () {
          var originalText = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(function () {
            button.textContent = originalText;
          }, 2000);
        }).catch(function () {
          button.textContent = 'Failed to copy';
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBibtex);
  } else {
    initBibtex();
  }
})();
