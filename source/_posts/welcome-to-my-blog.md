---
title: "Welcome to My Blog"
date: 2026-05-29 10:00:00
categories:
  - General
tags:
  - Machine Learning
  - Generative AI
  - Hello World
---

Welcome! This is the first post on my blog. Here I'll write about the things I
work on day to day — **generative AI**, large language models, diffusion models,
and what it actually takes to run machine learning systems at scale in
production.

<!-- more -->

## What to expect

I want this space to be equal parts notebook and portfolio:

- **Deep dives** — fine-tuning techniques (LoRA, QLoRA, DPO), diffusion
  sampling, model compression (quantization, distillation).
- **MLOps in practice** — deploying models on Kubernetes, vector search,
  monitoring, and the unglamorous parts that make systems reliable.
- **Notes and experiments** — short write-ups of things I'm trying out.

## A quick math check

Since a lot of what I write involves math, the blog renders LaTeX via MathJax.
For example, the softmax over a vector $\mathbf{z}$ is:

$$
\sigma(\mathbf{z})_i = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}
$$

And a quick inline example: the attention score is $\frac{QK^\top}{\sqrt{d_k}}$.

## And some code

```python
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(q, k, v):
    d_k = q.size(-1)
    scores = q @ k.transpose(-2, -1) / d_k ** 0.5
    weights = F.softmax(scores, dim=-1)
    return weights @ v
```

This first post is tagged and categorized so the **Categories**, **Tags**, and
**Archives** widgets in the sidebar have something to show. Thanks for reading —
more soon.
