# Agora Design System

This repository contains the source of truth for the Agora design system: a compact, dark-first, industry standard visual language for product surfaces, layouts, and reusable UI primitives.

## What’s Included

- `DESIGN.MD` - the full design specification, including token definitions and usage guidance
- `design_tokens.json` - a token export for tooling, automation, and downstream pipelines
- `tailwind.config.js` - a Tailwind config derived from the core tokens

## Design Principles

- Compact, disciplined UI with strong information hierarchy
- Dark-first palette with selective cyan emphasis
- Industry standard typography and spacing conventions
- Borders, contrast, and surface treatment over decorative effects

## Usage

Use `DESIGN.MD` as the canonical reference when implementing or updating product UI. The token files are intended to keep implementation aligned across code, design tools, and generated output.
