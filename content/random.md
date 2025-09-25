---
title: "Page au hasard"
layout: "layout"
---

<script>
  const pages = [
    "/content/chiquita.html",
    "/content/nike-air.html",
    "/content/apple-iphone.html"
  ];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
</script>

<p>Redirection vers une page au hasard...</p>