---
layout: page
title: "Research Proposal & Literature Review - Zero-Knowledge Proofs"
subtitle: "Decentralised Bayesian Games with Complex Rules"
category: Undergraduate
importance: 9
img: /assets/img/ZKP_thumbnail.png
description: Proposal and survey on using zk-SNARK-based zero-knowledge proofs to verify complex actions in decentralised Bayesian games (e.g., poker) without leaking private information.
date: 2023-04-01
---

**Research problem:** *How can zero-knowledge proofs (particularly zk-SNARKs) be applied to decentralised Bayesian games with complex rules?*

**Overview:** This work outlines a system where players prove move validity without revealing hidden information, discusses practical zk-SNARK workflows (circuits → R1CS → QAP → proof/verify), and considers design choices for on-chain verification and smart-contract setup. It also explores tuning verification rigour with an additional “experience level” parameter to balance soundness and performance in realistic gameplay.

**Highlights**
- Motivation and background for interactive vs. non-interactive ZKPs and why zk-SNARKs fit decentralised games.
- End-to-end pipeline for proof generation and verification, targeting on-chain verification.
- Design considerations for trusted setup, data feeds, and efficiency trade-offs.

<!-- Inline PDF viewer -->
<div class="pdf-viewer my-3">
  <object
    data="{{ '/assets/pdf/ZKP.pdf' | relative_url }}"
    type="application/pdf"
    width="100%"
    height="900"
  >
    <iframe
      src="{{ '/assets/pdf/ZKP.pdf' | relative_url }}"
      width="100%"
      height="900"
      style="border: none;"
    ></iframe>

    <p>
      Your browser can’t display PDFs.
      <a href="{{ '/assets/pdf/ZKP.pdf' | relative_url }}">Open the PDF</a>.
    </p>
  </object>
</div>
