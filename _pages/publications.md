---
layout: page
permalink: /research/
title: Research
description: Publications are listed in reversed chronological order by categories.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
{% include bib_search.liquid %}

<!-- Filters use the existing bibliography data and leave Scholar's cards untouched. -->
<div id="publication-filters" class="academic-filter-bar" role="group" aria-label="Filter publications">
  <div class="academic-filter-field">
    <label for="publication-topic">Topic</label>
    <select id="publication-topic">
      <option value="">All topics</option>
    </select>
  </div>
  <div class="academic-filter-field">
    <label for="publication-year">Year</label>
    <select id="publication-year">
      <option value="">All years</option>
    </select>
  </div>
  <div class="academic-filter-footer" style="flex: 1 0 100%;">
    <span id="publication-count" class="academic-filter-count" aria-live="polite"></span>
    <button id="publication-reset" class="academic-filter-reset" type="button">Reset filters</button>
  </div>
</div>

<div class="publications" id="research-publications">

{% bibliography --query @*[status=published] %}

<h2 class="mt-5" id="preprints-heading">Preprints</h2>

{% bibliography --query @*[status=preprint] %}

<p id="publication-empty" hidden>No publications match these filters.</p>
</div>

<style>
  /* Keep the existing Scholar publication formatting; only hide filtered items. */
  #research-publications li.publication-filter-hidden,
  #research-publications .publication-filter-hidden { display: none !important; }
</style>

<style>
  .academic-filter-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 0.75rem 1rem;
    margin: 1.25rem 0 1.5rem;
  }
  .academic-filter-field { flex: 1 1 175px; min-width: 0; }
  .academic-filter-field label {
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--global-text-color);
  }
  .academic-filter-field select {
    display: block;
    width: 100%;
    min-width: 0;
    height: 2.5rem;
    padding: 0.4rem 2rem 0.4rem 0.7rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    background: var(--global-bg-color);
    color: var(--global-text-color);
    font: inherit;
    font-size: 0.9rem;
    color-scheme: light dark;
  }
  .academic-filter-field select:focus-visible,
  .academic-filter-reset:focus-visible { outline: 2px solid var(--global-theme-color); outline-offset: 2px; }
  .academic-filter-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; margin-top: 0.35rem; }
  .academic-filter-count { color: var(--global-text-color-light); font-size: 0.85rem; }
  .academic-filter-reset {
    border: 0;
    background: transparent;
    color: var(--global-theme-color);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.4rem 0;
  }
  .academic-filter-reset:hover { text-decoration: underline; }
</style>

<script>
(function () {
  function setupPublicationFilters() {
    const filterPanel = document.getElementById('publication-filters');
    const container = document.getElementById('research-publications');
    if (!filterPanel || !container || filterPanel.dataset.initialized) return;
    filterPanel.dataset.initialized = 'true';

    const topic = document.getElementById('publication-topic');
    const year = document.getElementById('publication-year');
    const count = document.getElementById('publication-count');
    const empty = document.getElementById('publication-empty');
    const preprintsHeading = document.getElementById('preprints-heading');
    const publicationLists = Array.from(container.querySelectorAll('ol.bibliography, ul.bibliography'));

    // Scholar emits one <li> for each entry. Its existing markup stays untouched.
    const items = publicationLists.flatMap(function (list) {
      return Array.from(list.children).filter(function (child) {
        return child.matches('li');
      });
    });

    // Metadata is attached directly to each entry by Jekyll Scholar's
    // bibliography layout. This also supports newly added BibTeX entries.
    const entries = items.map(function (item) {
      const metadata = item.querySelector('[data-publication-year]');
      return {
        element: item,
        year: metadata ? metadata.dataset.publicationYear : '',
        topics: metadata ? metadata.dataset.publicationTopics.split(',').map(function (t) { return t.trim(); }).filter(Boolean) : []
      };
    });
    function addOptions(select, values) {
      values.forEach(function (value) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });
    }
    addOptions(topic, Array.from(new Set(entries.flatMap(function (entry) { return entry.topics; }))).sort());
    addOptions(year, Array.from(new Set(entries.map(function (entry) { return entry.year; }).filter(Boolean))).sort().reverse());

    function applyFilters() {
      let shown = 0;
      entries.forEach(function (entry) {
        const matches = (!topic.value || entry.topics.includes(topic.value)) &&
          (!year.value || entry.year === year.value);
        entry.element.classList.toggle('publication-filter-hidden', !matches);
        if (matches) shown++;
      });
      // Jekyll Scholar renders year headings as siblings of publication lists.
      // Hide headings whose associated list has no matching entries.
      publicationLists.forEach(function (list) {
        const hasVisible = Array.from(list.children).some(function (child) {
          return child.matches('li') && !child.classList.contains('publication-filter-hidden');
        });
        list.classList.toggle('publication-filter-hidden', !hasVisible);

        // Scholar inserts a year heading immediately before each bibliography list.
        // Skip only whitespace/text nodes; do not change the original markup.
        let heading = list.previousElementSibling;
        if (heading && /^H[1-6]$/.test(heading.tagName) && /^\\d{4}$/.test(heading.textContent.trim())) {
          heading.classList.toggle('publication-filter-hidden', !hasVisible);
        }
      });
      if (preprintsHeading) {
        const preprintLists = publicationLists.filter(function (list) {
          return !!(preprintsHeading.compareDocumentPosition(list) & Node.DOCUMENT_POSITION_FOLLOWING);
        });
        preprintsHeading.classList.toggle('publication-filter-hidden', !preprintLists.some(function (list) {
          return !list.classList.contains('publication-filter-hidden');
        }));
      }
      count.textContent = shown + ' publication' + (shown === 1 ? '' : 's');
      empty.hidden = shown !== 0;
    }

    [topic, year].forEach(function (select) { select.addEventListener('change', applyFilters); });
    document.getElementById('publication-reset').addEventListener('click', function () {
      topic.value = '';
      year.value = '';
      applyFilters();
    });
    applyFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupPublicationFilters);
  } else {
    setupPublicationFilters();
  }
})();
</script>
