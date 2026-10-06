(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme, persist) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.removeAttribute('data-theme');
      root.style.colorScheme = 'light';
    }

    var favicon = document.getElementById('site-favicon');
    if (favicon) {
      favicon.href = theme === 'dark' ? './assets/img/favicon-dark.svg' : './assets/img/favicon.svg';
    }

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {}
    }

    var toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      var nextTheme = theme === 'dark' ? 'light' : 'dark';
      toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      toggleBtn.setAttribute('title', 'Switch to ' + nextTheme + ' mode');
      toggleBtn.setAttribute('aria-label', 'Switch to ' + nextTheme + ' mode');
    }
  }

  function init() {
    var toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;

    applyTheme(currentTheme(), false);

    toggleBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
