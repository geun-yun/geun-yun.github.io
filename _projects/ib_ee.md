---
layout: project
title: "IB Extended Essay — Chess Rating Systems"
subtitle: "Reliability of Elo and Glicko"
category: International Baccalaureate    # This makes it appear under the IB section on your Early Research page
importance: 8                # Higher = shows earlier within its category
thumbnail: IB_EE_thumbnail.png   # put this image in assets/img/projects/
date: 2019-11-01             # adjust if you want exact timing
tags: [Chess, Elo, Glicko, Statistics, Probability, IB EE]
links:
  - icon: fa-solid fa-file-pdf
    name: PDF
    url: /assets/pdf/IB_EE.pdf
  - icon: fa-solid fa-chart-line
    name: Summary
    url: /early-research/#ib   # optional: point to a section anchor if you make one
published: true
---

**Research question.** *To what extent do the Elo and Glicko rating systems reflect a player’s performance in chess?*

**Overview.** The essay analyzes Elo’s normal-distribution premise (σ≈200) to derive draw probabilities and expected scores, then reformulates expected score as a logistic curve based on rating differences (≈400 points ≙ 10× odds). It contrasts this with Glicko’s introduction of **rating deviation (RD)** and update dynamics (constant \(c\), RD bounds), showing how uncertainty and game volume affect rating adjustments.

**Highlights**
- Derives intersection area of two normal distributions to interpret draw likelihood at a given rating gap.
- Recasts Elo expected score into logistic form \(E_A = \frac{1}{1+10^{(R_B-R_A)/400}}\).
- Explains Glicko’s RD, its growth via constant \(c\), and how RD contracts with recent results, yielding more responsive ratings.

> Word count: ~3990, excluding tables/appendices with game data (3-min, 10-min formats).
