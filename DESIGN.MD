---
name: Agora Design System
colors:
  brand:
    cyan: "#00C2FF"
    blue: "#075C9A"
    cyan-light: "#A0FAFF"
    violet: "#C46FFB"
    violet-dark: "#9443C7"
  neutral:
    950: "#0F0F0F"
    900: "#171717"
    800: "#2C2C2C"
    700: "#484848"
    600: "#626262"
    400: "#B3B3B3"
    300: "#D6D6D6"
    200: "#E7E6E6"
    100: "#F1F0F0"
    50: "#FCF9F8"
  semantic:
    light:
      background: "#FDFBFC"
      foreground: "#0A0A0A"
      card: "#FFFFFF"
      primary: "#00658D"
      primary-foreground: "#FDFBFC"
      muted: "#F8F3F1"
      muted-foreground: "#757575"
      border: "#E7E6E6"
      success: "#308D2C"
      destructive: "#E7000B"
      warning: "#F59E0B"
      sidebar: "#FDFBFC"
      sidebar-border: "#E7E6E6"
    dark:
      background: "#000000"
      foreground: "#FDFCFB"
      card: "#0A0A0A"
      primary: "#00C2FF"
      primary-foreground: "#171717"
      muted: "#212121"
      muted-foreground: "#B3B3B3"
      border: "#383838"
      success: "#42B03D"
      destructive: "#DC383E"
      warning: "#F59E0B"
      sidebar: "#171717"
      sidebar-border: "#212121"
  status:
    warning: "#DCA311"
    error: "#DE344A"
    success: "#42B03D"
  chart:
    1: "#F6339A"
    2: "#FF6900"
    3: "#00A6F4"
    4: "#8E51FF"
    5: "#00BC7D"
typography:
  fonts:
    brand: Jokker
    sans: Instrument Sans
    mono: Space Mono
  weights:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
  scale:
    xs: "0.75rem"
    sm: "0.875rem"
    base: "1rem"
    lg: "1.125rem"
    xl: "1.25rem"
    2xl: "1.5rem"
    3xl: "1.875rem"
    4xl: "2.25rem"
    brand-display: "164px"
  tracking:
    tight: "-0.01em"
    normal: "-0.01em"
    wide: "0.02em"
  leading:
    none: 1
    tight: 1.1
    normal: 1.4
    relaxed: 1.5
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
components:
  button-primary:
    backgroundColor: "{colors.semantic.dark.primary}"
    textColor: "{colors.semantic.dark.primary-foreground}"
    typography: "{typography.scale.sm}"
    rounded: "{rounded.lg}"
    padding: 12px
    height: 48px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.brand.cyan}"
    typography: "{typography.scale.sm}"
    rounded: "{rounded.lg}"
    padding: 12px
    height: 48px
  input-field:
    backgroundColor: "{colors.semantic.dark.card}"
    textColor: "{colors.semantic.dark.foreground}"
    typography: "{typography.scale.base}"
    rounded: "{rounded.lg}"
    padding: 12px
  card-transparent:
    backgroundColor: transparent
    borderColor: "{colors.semantic.dark.border}"
    rounded: "{rounded.lg}"
    padding: "{spacing.gutter}"
  card-section-muted:
    backgroundColor: "{colors.semantic.dark.muted}"
    rounded: "{rounded.xl}"
    padding: "{spacing.gutter}"
  app-shell:
    backgroundColor: "{colors.semantic.dark.background}"
    textColor: "{colors.semantic.dark.foreground}"
    layout: sidebar-main-optional-utility
  sidebar:
    backgroundColor: "{colors.semantic.dark.sidebar}"
    borderColor: "{colors.semantic.dark.sidebar-border}"
    widthExpanded: 241px
    widthCollapsed: 49px
  builder-tabs:
    backgroundColor: transparent
    textColor: "{colors.semantic.dark.muted-foreground}"
    activeTextColor: "{colors.semantic.dark.foreground}"
    rounded: "{rounded.lg}"
    padding: 8px
  segmented-tabs:
    backgroundColor: "{colors.semantic.dark.muted}"
    activeBackgroundColor: "{colors.brand.cyan}"
    activeTextColor: "{colors.semantic.dark.primary-foreground}"
    rounded: "{rounded.full}"
    padding: 4px
  choice-tile:
    backgroundColor: "{colors.semantic.dark.card}"
    borderColor: "{colors.semantic.dark.border}"
    selectedBorderColor: "{colors.brand.cyan}"
    rounded: "{rounded.xl}"
    padding: "{spacing.gutter}"
  config-card:
    backgroundColor: transparent
    borderColor: "{colors.semantic.dark.border}"
    rounded: "{rounded.lg}"
    padding: "{spacing.gutter}"
  settings-surface:
    backgroundColor: "{colors.semantic.dark.background}"
    borderColor: "{colors.semantic.dark.border}"
    rounded: "{rounded.lg}"
    padding: "{spacing.gutter}"
  stacked-form:
    labelPosition: above
    fieldGap: 8px
    sectionGap: 20px
  select-field:
    backgroundColor: "{colors.semantic.dark.card}"
    borderColor: "{colors.semantic.dark.border}"
    rounded: "{rounded.md}"
    padding: 12px
    iconAffordance: trailing-chevron
  inline-utility-action:
    textColor: "{colors.semantic.dark.muted-foreground}"
    emphasis: low
  table-shell:
    backgroundColor: "{colors.semantic.dark.card}"
    borderColor: "{colors.semantic.dark.border}"
    rounded: "{rounded.lg}"
  table-toolbar:
    layout: restrained-inline-controls
    searchWidth: 280px
  status-badge:
    rounded: "{rounded.full}"
    typography: "{typography.scale.sm}"
  table-pagination:
    layout: right-aligned-inline
    controlStyle: compact-outline
  media-stage:
    backgroundColor: "{colors.semantic.dark.card}"
    rounded: "{rounded.xl}"
  pre-call-screen:
    layout: preview-dominant-with-compact-controls-below
  chat-rail:
    backgroundColor: "{colors.semantic.dark.card}"
    borderColor: "{colors.semantic.dark.border}"
    rounded: "{rounded.xl}"
  chat-bubble-user:
    alignment: right
    backgroundColor: "{colors.semantic.light.card}"
    textColor: "{colors.semantic.light.foreground}"
    rounded: "{rounded.xl}"
  chat-bubble-agent:
    alignment: left
    backgroundColor: "{colors.semantic.dark.muted}"
    textColor: "{colors.semantic.dark.foreground}"
    rounded: "{rounded.xl}"
  session-header:
    layout: compact-title-metadata-actions
  test-call-panel:
    layout: narrow-panel-with-centered-state-and-bottom-dock
  voice-orb-state:
    layout: centered-state-orb
  live-transcript-stack:
    layout: stacked-grouped-utterances
  device-preferences-card:
    layout: embedded-secondary-config-card
  rtc-action-dock:
    layout: bottom-anchored-action-row
---

## Brand & Style

Agora is a real-time communications brand with a technical, operational feel. Product UI should stay compact, disciplined, and high-signal. Brand/marketing can use Jokker and the Aura motif, but product console UI should stay restrained and use Instrument Sans.

## Colors

The palette is dark-first and warm-neutral. Cyan is the primary emphasis color, violet is secondary or visual-accent only, and bright colors should stay selective. Light mode is a token swap, not a redesign.

## Typography

Instrument Sans is the product font. Jokker is reserved for brand/marketing surfaces. Space Mono is used for code-like or token-like content.

## Layout & Spacing

The product shell uses a sidebar + main workspace model with optional utility panels. Spacing stays on a 4px rhythm, with compact internal spacing and wider separation between groups.

## Elevation & Depth

Prefer borders, surface contrast, and muted fills over heavy shadows. Product surfaces should feel clean and operational, with no decorative glow or atmospheric effects.

## Shapes

Use the established radius band: 2px, 6px, 8px, 12px, and full for pills. Most compact controls sit in the 6 to 8px range, while larger panels and media use 12px.

## Components

### Action Elements

Primary and secondary buttons stay compact, with restrained emphasis and clear hierarchy. Inputs and selects use dark fields, subtle borders, and trailing affordances where needed.

### Containers & Surfaces

Cards are transparent or minimally filled with borders. Grouped surfaces may use muted fills for separation, but should avoid decorative framing.

### Layout Primitives

Shells, sidebars, tabs, utility panels, config cards, and stacked forms should stay compact and operational. Tables use restrained toolbars, fixed status columns, and compact right-aligned pagination.

### RTC & Transcript

RTC layouts should keep the media stage dominant and controls tightly grouped. Transcript surfaces must preserve sender-specific alignment and bubble treatment, keep the transcript shell visible, and avoid avatars by default. System rows stay quiet and inline.
