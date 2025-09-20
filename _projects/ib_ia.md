---
layout: page
title: "IB Mathematics IA — Wheel of Theodorus"
subtitle: "Exploring Irrational Roots and Spiral Geometry"
category: International Baccalaureate    # Appears under the IB section of your Early Research page
importance: 9                # Lower than EE if you want EE shown first
img: /assets/img/IB_IA_thumbnail.png   # put this image in assets/img/projects/
description: Investigates the Wheel of Theodorus, deriving its geometric properties, links to irrational numbers, and approximation to the Archimedean spiral.
date: 2021-11-01        # adjust if you want exact timing
---

**Research question:** *What mathematical properties emerge from the Wheel of Theodorus, and how does it approximate the Archimedean spiral?*

**Overview:** This IA constructs the Wheel of Theodorus by joining successive right triangles with unit bases. It shows how hypotenuse lengths naturally trace irrational square roots (√2, √3, √4, …) and how the spiral structure relates to trigonometric angle sums. By comparing the spiral’s growth to the Archimedean spiral $r = a + b\theta$, the work demonstrates that the Wheel asymptotically aligns with an Archimedean curve while retaining unique discrete geometry.

**Highlights**
- Hypotenuse of the $n$-th triangle follows $R_n = \sqrt{n+1}$.
- Cumulative angle given by $\sum_{x=1}^{n}\arcsin\big(\tfrac{1}{\sqrt{x+1}}\big)$.
- Winding distance from the $v$-th triangle to its immediate inner $u$-th triangle is

  $$\sqrt{v} - \frac{\sqrt{u}}{\cos\Bigg(\sum_{n=u+1}^{v} \arcsin\bigg(\tfrac{1}{\sqrt{n}}\bigg)\Bigg)},$$

  which approaches $\pi$, consistent with Archimedean spiral spacing.


<!-- Inline PDF viewer -->
<div class="pdf-viewer my-3">
  <object
    data="{{ '/assets/pdf/IB_IA.pdf' | relative_url }}"
    type="application/pdf"
    width="100%"
    height="700"
  >
    <!-- Fallback for browsers that block <object> -->
    <iframe
      src="{{ '/assets/pdf/IB_IA.pdf' | relative_url }}"
      width="100%"
      height="700"
      style="border: none;"
    ></iframe>

    <p>
      Your browser can’t display PDFs. 
      <a href="{{ '/assets/pdf/IB_IA.pdf' | relative_url }}">Open the PDF</a>.
    </p>
  </object>
</div>
