(function () {
  const links = [
    {
      text: 'GitHub',
      href: 'https://github.com/Nicolaj-Rux'
    },
    {
      text: 'ORCID',
      href: 'https://orcid.org/0009-0000-1299-0580'
    },
    {
      text: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=G8T1CF8AAAAJ&hl=en'
    },
    {
      text: 'LinkedIn',
      href: 'https://de.linkedin.com/in/nicolaj-rux-b14b44299'
    },
    {
      text: 'arXiv',
      href: 'https://arxiv.org/search/?query=Nicolaj+Rux&searchtype=author&abstracts=show&order=-announced_date_first&size=50'
    }
  ];

  function makeLink(text, href) {
    const a = document.createElement('a');
    a.className = 'ex2';
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = text;
    return a;
  }

  function addSeparator(parent) {
    parent.appendChild(document.createTextNode(' | '));
  }

  function buildEmail() {
    const local = ['nicolaj', '.', 'rux'].join('');
    const domain = ['math', '.', 'tu-chemnitz', '.', 'de'].join('');
    return local + '@' + domain;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    const wrapper = document.createElement('div');

    links.forEach(function (link, index) {
      if (index > 0) addSeparator(wrapper);
      wrapper.appendChild(makeLink(link.text, link.href));
    });

    addSeparator(wrapper);

    const emailLink = document.createElement('a');
    emailLink.className = 'ex2';
    emailLink.href = 'mailto:' + buildEmail();
    emailLink.textContent = 'Email';

    wrapper.appendChild(emailLink);
    footer.appendChild(wrapper);
  });
})();