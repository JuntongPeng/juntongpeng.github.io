// Functional enhancements stay independent of the optional motion effects.
(() => {
  const menu = document.querySelector('ninja-keys');
  if (menu && Array.isArray(menu.data)) {
    const navigation = [...document.querySelectorAll('nav[data-editorial-nav] a.nav-link')];
    menu.data = [
      ...navigation.map((link, index) => ({
        id: `preview-nav-${index}`,
        title: link.textContent.trim(),
        section: 'Navigation',
        handler: () => { window.location.href = link.href; },
      })),
      ...menu.data.filter((item) => item.section !== 'Navigation'),
    ];
  }

  // Retain the site's existing abstract/BibTeX click handlers, including keyboard use.
  document.querySelectorAll('a.abstract.btn:not([href]), a.bibtex.btn:not([href]), a.award.btn:not([href])').forEach((button) => {
    button.tabIndex = 0;
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      button.click();
    });
  });

  const input = document.getElementById('bibsearch');
  if (!input) return;
  const groups = [...document.querySelectorAll('.preview-page .publications ol.bibliography')];
  const filter = () => {
    const query = input.value.trim().toLocaleLowerCase();
    groups.forEach((group) => {
      const items = [...group.children];
      items.forEach((item) => item.classList.toggle('unloaded', !item.textContent.toLocaleLowerCase().includes(query)));
      const empty = items.every((item) => item.classList.contains('unloaded'));
      group.classList.toggle('unloaded', empty);
      const heading = group.previousElementSibling;
      if (heading?.matches('h2.bibliography')) heading.classList.toggle('unloaded', empty);
    });
  };
  const readHash = () => {
    try { input.value = decodeURIComponent(window.location.hash.slice(1)); }
    catch { input.value = ''; }
    filter();
  };
  let timeout;
  input.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(filter, 150);
  });
  window.addEventListener('hashchange', readHash);
  readHash();
})();
