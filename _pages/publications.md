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
        {% assign topic_values = '' %}
        {% for paper in site.bibliography %}
          {% assign paper_topics = paper.abbr | split: ',' %}
          {% for topic in paper_topics %}
            {% assign clean_topic = topic | strip %}
            {% assign marker = '|' | append: clean_topic | append: '|' %}
            {% unless topic_values contains marker %}
              {% assign topic_values = topic_values | append: marker %}
            {% endunless %}
          {% endfor %}
        {% endfor %}
        {% assign topics = topic_values | split: '||' | sort %}
        {% for topic in topics %}
          {% assign cleaned_topic = topic | remove: '|' | strip %}
          {% if cleaned_topic != '' %}
            <option value="{{ cleaned_topic | escape }}">{{ cleaned_topic }}</option>
          {% endif %}
        {% endfor %}
      </select>
    </div>
    <div class="col-sm-6 mb-2">
      <label for="publication-year">Year</label>
      <select id="publication-year" class="form-control">
        <option value="">All years</option>
        {% assign paper_years = site.bibliography | map: 'year' | uniq | sort | reverse %}
        {% for paper_year in paper_years %}
          {% if paper_year != blank %}
            <option value="{{ paper_year | escape }}">{{ paper_year }}</option>
          {% endif %}
        {% endfor %}
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

    // Attach metadata by BibTeX key, not by list position or title,
    // so changes to Scholar's sorting or grouping remain safe.
    const papers = {
      {% for paper in site.bibliography %}
      {{ paper.key | jsonify }}: {
        year: {{ paper.year | default: '' | append: '' | jsonify }},
        topics: {{ paper.abbr | default: '' | jsonify }}
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    };

    const entries = items.map(function (item) {
      const keyElement = item.querySelector('[id]');
      const paper = keyElement && papers[keyElement.id];
      return { element: item, year: paper ? paper.year : '', topics: paper ? paper.topics.split(',').map(function (t) { return t.trim(); }) : [] };
    });

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
