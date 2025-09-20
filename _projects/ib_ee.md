---
layout: page
title: "IB Extended Essay — Chess Rating Systems"
subtitle: "Reliability of Elo and Glicko"
category: International Baccalaureate    # This makes it appear under the IB section on your Early Research page
importance: 8                # Higher = shows earlier within its category
img: /assets/img/IB_EE_thumbnail.png   # put this image in assets/img/projects/
description: Evaluates Elo vs Glicko for how well ratings reflect chess performance, focusing on expected score, rating deviation, and responsiveness.
date: 2021-05-01        # adjust if you want exact timing
math: true
---

**Research question.** *To what extent do the Elo and Glicko rating systems reflect a player’s performance in chess?*

**Overview.** The essay analyses Elo’s normal-distribution premise (σ≈200) to derive draw probabilities and expected scores, then reformulates expected score as a logistic curve based on rating differences (≈400 points ≙ 10× odds). It contrasts this with Glicko’s introduction of **rating deviation (RD)** and update dynamics (constant \(c\), RD bounds), showing how uncertainty and game volume affect rating adjustments.

**Highlights**
- Derives intersection area of two normal distributions to interpret draw likelihood at a given rating gap.
- Recasts Elo expected score into logistic form \(E_A = \frac{1}{1+10^{(R_B-R_A)/400}}\).
- Explains Glicko’s RD, its growth via constant \(c\), and how RD contracts with recent results, yielding more responsive ratings.

<!-- Inline PDF viewer -->
<div class="pdf-viewer my-3">
  <object
    data="{{ '/assets/pdf/IB_EE.pdf' | relative_url }}"
    type="application/pdf"
    width="100%"
    height="900"
  >
    <!-- Fallback for browsers that block <object> -->
    <iframe
      src="{{ '/assets/pdf/IB_EE.pdf' | relative_url }}"
      width="100%"
      height="900"
      style="border: none;"
    ></iframe>

    <p>
      Your browser can’t display PDFs. 
      <a href="{{ '/assets/pdf/IB_EE.pdf' | relative_url }}">Open the PDF</a>.
    </p>
  </object>
</div>

Special thanks to [Dr. Mark Glickman](https://www.glicko.net/) for responding to my inquiry about his Glicko rating system and sharing valuable insights.
