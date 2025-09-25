---
title: "Page au hasard"
layout: "layout"
---

<script>
  const base = window.location.pathname.replace(/\\/[^\\/]*$/, '');
  const pages = [
    "chiquita.html",
    "nike-air.html",
    "apple-iphone.html"
  ];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = `${base}/${randomPage}`;
</script>

<p>Redirection vers une page au hasard...</p>
