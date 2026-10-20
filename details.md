  

**Project Type:** Digital Newspaper / News Platform  
**Design Era:** 2025–2027  
**System Level:** Enterprise / Award-Grade  
**Compatibility:** Web · Mobile · SaaS · Apps

* * *

## 1\. Inferred Analysis (From Minimal Input)

### Brand Personality

-   **Authoritative, Trustworthy, Intelligent**
    
-   Calm confidence rather than loud persuasion
    
-   Serious journalism with modern clarity
    

### Industry

-   Digital media / journalism / editorial publishing
    

### Target Users

-   Daily readers (mobile-first)
    
-   Analysts, professionals, academics
    
-   Editors, journalists, contributors
    
-   Accessibility-sensitive audiences
    

### Emotional Tone

-   **Credible**
    
-   **Calm**
    
-   **Human**
    
-   **Unbiased**
    
-   **Modern, not trendy**
    

* * *

## 2\. Color System

### Design Philosophy

Editorial products require **high contrast, low fatigue, emotional neutrality**, and **trust reinforcement**.  
Color must support content — never compete with it.

* * *

### Core Palette

| Role | Color | HEX | Rationale |
| --- | --- | --- | --- |
| Primary | Deep Editorial Blue | `#0B1F33` | Trust, intelligence, authority |
| Secondary | Slate Gray | `#4B5563` | Neutral hierarchy support |
| Accent | Signal Red | `#C1121F` | Breaking news, urgency |
| Accent Soft | Muted Gold | `#C9A24D` | Prestige, premium sections |

* * *

### Neutral & Surface Scale

| Token | HEX | Usage |
| --- | --- | --- |
| Surface 0 | `#FFFFFF` | Primary background |
| Surface 1 | `#F9FAFB` | Card backgrounds |
| Surface 2 | `#F1F5F9` | Section separators |
| Border | `#E5E7EB` | Dividers |
| Text Primary | `#111827` | Headlines |
| Text Secondary | `#374151` | Body |
| Text Muted | `#6B7280` | Meta |

* * *

### Semantic Colors

| Type | HEX | Accessibility |
| --- | --- | --- |
| Success | `#0E9F6E` | WCAG AA+ |
| Warning | `#F59E0B` | WCAG AA |
| Error | `#DC2626` | WCAG AAA |
| Info | `#2563EB` | WCAG AA+ |

* * *

### Light / Dark Mode Logic

-   Dark mode uses **charcoal surfaces**, not pure black
    
-   Accent colors slightly desaturated to avoid glare
    
-   All text maintains **minimum 4.5:1 contrast**
    

* * *

## 3\. Typography System

### Philosophy

Typography **is the product** in editorial systems.

* * *

### Font Families

**Primary (Headlines):**

-   `Merriweather`  
    Fallback: Georgia, Times New Roman
    

**Secondary (Body & UI):**

-   `Inter`  
    Fallback: SF Pro, Roboto, Arial
    

* * *

### Typographic Scale

| Element | Size (Desktop) | Line Height |
| --- | --- | --- |
| H1 | 48px | 1.2 |
| H2 | 36px | 1.25 |
| H3 | 28px | 1.3 |
| H4 | 22px | 1.35 |
| Body | 16px | 1.6 |
| Caption | 13px | 1.5 |
| Overline | 12px | 1.4 |

**Mobile:** Scale down by ~15%, preserve rhythm.

* * *

### Usage Rules

-   Headlines: **Serif = authority**
    
-   Body: **Sans-serif = readability**
    
-   Max line length: **65–75 characters**
    
-   Strong vertical rhythm between paragraphs
    

* * *

## 4\. Button System

### Button Philosophy

Buttons must feel **tactile, intentional, and restrained**.

* * *

### Button Types

| Type | Usage |
| --- | --- |
| Primary | Subscribe, Sign up |
| Secondary | Read more, Actions |
| Tertiary | Utility actions |
| Ghost | Toolbar / inline |
| Danger | Destructive actions |

* * *

### Visual Specs

-   Radius: **8px**
    
-   Elevation: Subtle shadow only on Primary
    
-   Font weight: 600
    
-   Padding: 14px × 20px
    

* * *

### Example

-   Primary: Solid blue, white text
    
-   Secondary: Outline, transparent background
    
-   Ghost: Text-only, hover underline
    

* * *

## 5\. Interactive States

### State Definitions

| State | Behavior |
| --- | --- |
| Default | Neutral |
| Hover | Background darkens 6–8% |
| Active | Slight inset + scale 0.98 |
| Focus | 2px outline (accessible) |
| Disabled | 40% opacity |
| Loading | Spinner replaces icon |

**Transitions:**

-   Color: 120ms
    
-   Transform: 80ms
    

* * *

## 6\. Motion System

### Motion Principles

-   Motion **guides attention**, never decorates
    
-   Feels **editorial, not playful**
    

* * *

### Timing Tokens

| Token | Duration |
| --- | --- |
| Fast | 80ms |
| Normal | 160ms |
| Slow | 240ms |

### Easing

-   `cubic-bezier(0.4, 0, 0.2, 1)`
    

* * *

### Approved Animations

-   Article card entrance (fade + 8px slide)
    
-   Section transitions
    
-   Toast entry/exit
    

### Forbidden

-   Infinite loops
    
-   Bounce effects
    
-   Distracting parallax
    

* * *

## 7\. Micro-Interactions

### Examples

-   Bookmark icon fills smoothly
    
-   Like action gives subtle scale feedback
    
-   Form validation animates height, not color flash
    

**Rule:**  
Delight must be **felt**, not seen.

* * *

## 8\. UI Feedback System

### Feedback Types

| Type | Tone |
| --- | --- |
| Toasts | Calm, informative |
| Alerts | Clear, neutral |
| Errors | Respectful, actionable |

### Messaging Style

-   No blame
    
-   No technical jargon
    
-   Human clarity
    

* * *

## 9\. Universality & Scalability

-   Framework-agnostic
    
-   Token-based system
    
-   Works for:
    
    -   News articles
        
    -   Dashboards
        
    -   Subscriptions
        
    -   Admin panels
        
-   Ready for AI-driven content modules
    

* * *

## 10\. Design Logic & Justification

### Why This Feels Premium

-   Content-first hierarchy
    
-   Emotionally restrained color science
    
-   Typography engineered for long-form reading
    

### Why It Beats Generic AI Designs

-   No arbitrary gradients
    
-   No trend-chasing
    
-   Every decision has **psychological and functional intent**
    

### Trust & Emotional Resonance

-   Calm visuals reduce cognitive load
    
-   High contrast reinforces credibility
    
-   Motion reinforces meaning, not distraction
    

###