---
title: "Page au hasard"
layout: "layout"
---

<script>
  const basePath = "/tusavais-org/content/"; // ← adapte selon ton dossier GitHub Pages
  const pages = [
    "chiquita.html",
    "nike-air.html",
    "apple-iphone.html"
  ];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.replace(window.location.origin + basePath + randomPage);
</script>

<p>Redirection vers une page au hasard...</p>
