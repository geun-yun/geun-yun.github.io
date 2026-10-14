---
layout: page
permalink: /teaching/
title: Teaching
description:
nav: true
nav_order: 4
---

## Casual Academic (TA/Tutor):

<div id="teaching-filters" class="academic-filter-bar" role="group" aria-label="Filter teaching experience">
  <div class="academic-filter-field">
    <label for="teaching-course">Course</label>
    <select id="teaching-course">
      <option value="">All courses</option>
      <option value="ELEC3612">ELEC3612</option>
      <option value="ELEC5308">ELEC5308</option>
      <option value="COMP3670/6670">COMP3670/6670</option>
      <option value="COMP1600/6260">COMP1600/6260</option>
    </select>
  </div>
  <div class="academic-filter-field">
    <label for="teaching-year">Year</label>
    <select id="teaching-year">
      <option value="">All years</option>
      <option value="2026">2026</option>
      <option value="2025">2025</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
    </select>
  </div>
  <div class="academic-filter-field">
    <label for="teaching-university">University</label>
    <select id="teaching-university">
      <option value="">All universities</option>
      <option value="USyd">USyd</option>
      <option value="ANU">ANU</option>
    </select>
  </div>
  <div class="academic-filter-footer" style="flex: 1 0 100%;">
    <span id="teaching-count" class="academic-filter-count" aria-live="polite">6 results</span>
    <button id="teaching-reset" class="academic-filter-reset" type="button">Reset filters</button>
  </div>
</div>

<div id="teaching-records">
  <div class="teaching-section" data-section="design">
    <div>Designed lecture slides and liaised course structure for the following course:</div>
    <div class="teaching-entry" data-year="2026" data-course="ELEC3612" data-university="USyd">2026 Semester 1: <a href="https://www.sydney.edu.au/units/ELEC3612/">ELEC3612 - Pattern Recognition and Machine Intelligence</a> @ USyd</div>
  </div>

  <div class="teaching-section mt-3" data-section="tutorial">
    <div>Taught tutorials and marked assessable items for the following courses:</div>
    <div class="teaching-entry" data-year="2026" data-course="ELEC5308" data-university="USyd">2026 Semester 2: <a href="https://www.sydney.edu.au/units/ELEC5308/">ELEC5308 - Intelligent Information Engineering Practice</a> @ USyd</div>
    <div class="teaching-entry" data-year="2026" data-course="COMP3670/6670" data-university="ANU">2026 Semester 2: <a href="https://programsandcourses.anu.edu.au/course/comp3670">COMP3670/6670 - Introduction to Machine Learning</a> @ ANU</div>
    <div class="teaching-entry" data-year="2025" data-course="COMP3670/6670" data-university="ANU">2025 Semester 2: <a href="https://programsandcourses.anu.edu.au/course/comp3670">COMP3670/6670 - Introduction to Machine Learning</a> @ ANU</div>
    <div class="teaching-entry" data-year="2024" data-course="COMP1600/6260" data-university="ANU">2024 Semester 2: <a href="https://programsandcourses.anu.edu.au/course/comp1600">COMP1600/6260 - Foundations of Computing</a> @ ANU</div>
    <div class="teaching-entry" data-year="2023" data-course="COMP1600/6260" data-university="ANU">2023 Semester 2: <a href="https://programsandcourses.anu.edu.au/course/comp1600">COMP1600/6260 - Foundations of Computing</a> @ ANU</div>
  </div>
  <p id="teaching-empty" hidden>No teaching records match these filters.</p>
</div>

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
    padding: 0.4rem 2.75rem 0.4rem 0.7rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    /* Draw the chevron as a background so its right inset is controllable. */
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--global-bg-color);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1rem;
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
  function initializeTeachingFilters() {
    const root = document.getElementById("teaching-filters");
    const records = document.getElementById("teaching-records");
    if (!root || !records || root.dataset.initialized) return;
    root.dataset.initialized = "true";

    const course = document.getElementById("teaching-course");
    const year = document.getElementById("teaching-year");
    const university = document.getElementById("teaching-university");
    const entries = Array.from(records.querySelectorAll(".teaching-entry"));
    const sections = Array.from(records.querySelectorAll(".teaching-section"));
    const count = document.getElementById("teaching-count");
    const empty = document.getElementById("teaching-empty");

    function applyFilters() {
      let shown = 0;
      entries.forEach(function (entry) {
        const matches = (!course.value || entry.dataset.course === course.value) &&
          (!year.value || entry.dataset.year === year.value) &&
          (!university.value || entry.dataset.university === university.value);
        entry.hidden = !matches;
        if (matches) shown++;
      });
      sections.forEach(function (section) {
        section.hidden = !Array.from(section.querySelectorAll(".teaching-entry"))
          .some(function (entry) { return !entry.hidden; });
      });
      count.textContent = shown + " " + (shown === 1 ? "result" : "results");
      empty.hidden = shown !== 0;
    }

    [course, year, university].forEach(function (select) {
      select.addEventListener("change", applyFilters);
    });
    document.getElementById("teaching-reset").addEventListener("click", function () {
      course.value = "";
      year.value = "";
      university.value = "";
      applyFilters();
    });
    applyFilters();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTeachingFilters);
  } else {
    initializeTeachingFilters();
  }
})();
</script>
