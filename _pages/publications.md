---
layout: page
permalink: /research/
title: Research
description: Publications are listed in reversed chronological order by categories.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->
<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[status=published] %}

<h2 class="mt-5">Preprints</h2>

{% bibliography --query @*[status=preprint] %}

</div>
