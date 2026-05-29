---
title: Projects
layout: page
date: 2026-05-29 00:00:00
comments: false
---

A selection of production ML and generative-AI systems I've designed and shipped.

## Multimodal Product Matching — Cimri.com

A large-scale system that combines visual and textual signals to identify
duplicate and equivalent products across vendors. Used hard-negative mining and
metric learning to improve retrieval, served through a microservices pipeline on
EKS/EC2 with **Milvus** for vector search and **Solr** for text indexing, wired
into an end-to-end MLOps workflow (MLflow, Jenkins, ArgoCD, Prometheus, Grafana).

- **0.88 Top-1 accuracy** on production data.
- An **LLM-driven, DPO fine-tuned** data-refinement pipeline that automatically
  flags low-quality samples and pushed **Top-1 accuracy to 94%**.

## Fotorama — AI Portrait Generation (AppNation)

The core generative engine behind Fotorama, one of the most realistic AI
portrait generators on the market with **500K+ monthly active users**.

- Applied research on efficient fine-tuning — **LoRA, DreamBooth, textual
  inversion** — and diffusion-aware sampling.
- **15–20% improvement** in identity similarity (ArcFace) and CLIP-based
  prompt-image alignment.
- **~40% reduction in inference time** via quantization and scheduler tuning.

## Arch — AI Interior Design (AppNation)

An AI interior-design app that reached **#1 in the US App Store (Design
category)**.

- Integrated **MultiDiffusion** into the generation pipeline.
- **63% fewer visual artifacts**, **40% faster inference**, and an **18%
  increase in image quality** by human evaluation.

## Diffusion-based Furniture Rendering & Visual Search — Vivense

Production generative-AI and search systems for a leading European furniture
e-commerce platform.

- **Stable Diffusion** rendering services on GPU infrastructure, in a full MLOps
  workflow (MLflow, Jenkins, ArgoCD, Prometheus, Grafana).
- Hybrid NLP search with **BERT / transformer embeddings** for better query
  relevance.
- Visual search built on **CLIP** and **Vision Transformers (ViT)** with custom
  similarity scoring, served as GPU microservices.

## In-House Recommendation System — eBay Turkey / GittiGidiyor.com

The company's first fully in-house product recommendation system, replacing
legacy black-box solutions.

- **DeepFM**, **Neural Collaborative Filtering (NCF)**, and **Wide & Deep**
  models to optimize CTR across verticals.
- Containerized and deployed with **Kubeflow** on Kubernetes.
- Multi-modal fashion recommendation using visual (ViT, ResNet) and textual
  (BERT) embeddings.

## Optical-Flow Research — Yeterly.ai

Research on frame-to-frame point-trajectory estimation in real-world video,
implementing and adapting state-of-the-art optical-flow architectures
(**RAFT**, **PIPs**) to domain-specific constraints.

## Publication

- *Exploring The Limits Of Data Augmentation For Retinal Vessel Segmentation* —
  pre-print, [arXiv:2105.09365](https://arxiv.org/abs/2105.09365)
