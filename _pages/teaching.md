---
layout: page
permalink: /teaching/
title: Teaching
description:
nav: true
nav_order: 4
---

## Casual Academic (TA/Tutor):

<div id="teaching-filters" class="mb-3" role="group" aria-label="Filter teaching experience">
  <div class="row">
    <div class="col-sm-4 mb-2">
      <label for="teaching-course">Course</label>
      <select id="teaching-course" class="form-control">
        <option value="">All courses</option>
        <option value="ELEC3612">ELEC3612</option>
        <option value="ELEC5308">ELEC5308</option>
        <option value="COMP3670/6670">COMP3670/6670</option>
        <option value="COMP1600/6260">COMP1600/6260</option>
      </select>
    </div>
    <div class="col-sm-4 mb-2">
      <label for="teaching-year">Year</label>
      <select id="teaching-year" class="form-control">
        <option value="">All years</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
    </div>
    <div class="col-sm-4 mb-2">
      <label for="teaching-university">University</label>
      <select id="teaching-university" class="form-control">
        <option value="">All universities</option>
        <option value="USyd">USyd</option>
        <option value="ANU">ANU</option>
      </select>
    </div>
  </div>
  <div class="d-flex align-items-center justify-content-between mb-2">
    <small id="teaching-count" aria-live="polite">6 teaching records</small>
    <button id="teaching-reset" type="button" class="btn btn-sm btn-outline-secondary">Reset filters</button>
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
      count.textContent = shown + " teaching " + (shown === 1 ? "record" : "records");
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
