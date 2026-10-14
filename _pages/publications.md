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
<div id="publication-filters" class="mb-3">
  <div class="row">
    <div class="col-sm-6 mb-2">
      <label for="publication-topic">Topic</label>
      <select id="publication-topic" class="form-control">
        <option value="">All topics</option>
      </select>
    </div>
    <div class="col-sm-6 mb-2">
      <label for="publication-year">Year</label>
      <select id="publication-year" class="form-control">
        <option value="">All years</option>
      </select>
    </div>
  </div>
  <div class="d-flex justify-content-between align-items-center">
    <small id="publication-count" aria-live="polite"></small>
    <button type="button" id="publication-reset" class="btn btn-sm btn-outline-secondary">Reset filters</button>
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
      publicationLists.forEach(function (list) {
        list.classList.toggle('publication-filter-hidden',
          !Array.from(list.children).some(function (child) {
            return child.matches('li') && !child.classList.contains('publication-filter-hidden');
          }));
      });
      if (preprintsHeading) {
        const preprintsList = publicationLists.find(function (list) {
          return !!(preprintsHeading.compareDocumentPosition(list) & Node.DOCUMENT_POSITION_FOLLOWING);
        });
        if (preprintsList) {
          preprintsHeading.classList.toggle('publication-filter-hidden', preprintsList.classList.contains('publication-filter-hidden'));
        }
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
