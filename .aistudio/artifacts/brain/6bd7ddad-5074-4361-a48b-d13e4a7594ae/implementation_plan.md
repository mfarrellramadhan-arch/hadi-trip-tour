# Nusantara Trans - Executive Rental & Tour Service

A luxury car rental and archipelago tour web platform tailored for Indonesian corporate delegations, family getaways, and private chartered journeys. The application implements the **Champagne Gold Luxury** aesthetic with seamless Light and Dark mode transitions, instant pricing calculations, vehicle inspection drawers, fleet filtering, custom itinerary planning, and direct WhatsApp booking dispatch.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following product and design choices were confirmed during Phase 1 clarification:
> - **Visual Identity**: Champagne Gold Luxury theme featuring elegant Cormorant Garamond serif headings, Plus Jakarta Sans interface typography, warm travertine light mode, and obsidian dark mode with brushed bronze accents.
> - **Booking Experience**: Interactive modal featuring real-time date and duration math, chauffeur vs. self-drive pricing breakdown, add-on options, and structured WhatsApp dispatch message generation.
> - **Core Feature Scope**: Category fleet filtering (MPV, SUV, City Car, Luxury Van), deep-dive vehicle detail drawer with 24-point inspection checklist, and custom tour itinerary builder.

---

## 1. Overview & Core Concept

### What It Does
Nusantara Trans provides a streamlined digital showroom and booking engine for premium vehicle rentals and all-inclusive Indonesian tour packages (Bromo, Bali, Labuan Bajo, Yogyakarta). Users can explore fleet specifications, calculate rental quotes transparently based on pickup location, rental duration, and chauffeur services, inspect vehicle hygiene and mechanical guarantees, and assemble custom tour routes with immediate WhatsApp concierge dispatch.

### Target Audience & Persona
- **Corporate & Diplomatic Delegations**: Demanding immaculate executive vehicles (Innova Zenix Hybrid, Alphard VIP) with certified, uniformed drivers and official invoicing.
- **Vacationing Families & Groups**: Seeking high-capacity, dependable vehicles (HiAce Premio, All New Avanza) with complete safety guarantees and child-friendly comfort.
- **Archipelago Travelers**: Seeking private, hassle-free curated tour packages with verified 4x4 jeeps, speedboats, and bilingual tour guides.

### Key Value Delivered
- **100% Price Transparency**: Real-time rate breakdown without hidden fees.
- **Fleet Assurance**: Transparent display of passenger capacity, transmission type, fuel efficiency, and 24-point pre-delivery inspection status.
- **Instant Human Touch**: Direct bridge between web exploration and immediate 24/7 WhatsApp concierge booking.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Discovery & Floating Search Bar**:
   - The user arrives at the cinematic hero section highlighting verified customer trust and fleet scale.
   - The floating search bar allows instant switching between **Sewa Mobil** (Car Rental) and **Paket Wisata** (Tour Packages), with an immediate toggle between **Dengan Sopir** (With Driver) and **Lepas Kunci** (Self-Drive).
   - Selecting pickup location and dates automatically pre-configures the search filter and feeds the booking calculator.

2. **Fleet Filtering & Vehicle Inspection Drawer**:
   - Filter pills dynamically narrow cars by category (*Semua*, *MPV Keluarga*, *SUV Premium*, *City Car Hemat*, *Van Rombongan*).
   - Clicking any vehicle card opens a sliding **Vehicle Detail Drawer** showcasing full specifications, interior comfort highlights, 24-point inspection certification, rental requirements (KTP/SIM verification), and insurance terms.

3. **Interactive Booking & Pricing Modal**:
   - Clicking "Sewa" triggers the booking modal with date calculation, duration multiplier, chauffeur service toggles, airport meet-and-greet options, and transparent subtotal computation.
   - The user enters their name, contact, and flight/pickup notes; clicking "Konfirmasi via WhatsApp" formats a structured reservation message and opens the official concierge chat.

4. **Custom Itinerary Builder**:
   - Beyond standard tour cards (Bromo Midnight, Bali Romantic, Labuan Bajo Phinisi, Jogja Heritage), an interactive **Custom Rute Wisata** builder allows travelers to select multi-city stops, vehicle preferences, and trip durations to receive customized quotes.

5. **Theme Switcher**:
   - Smoothly toggles between the **Champagne Gold Light Mode** (warm off-white travertine background with gold highlights) and **Matte Obsidian Dark Mode** (deep charcoal canvas with brushed bronze and soft silver typography).

### Visual Identity & Theme Tokens

- **Palette**:
  - `Canvas Light`: `#F8F9FA` with warm cream containers `#FAF9F6` and champagne borders `#E9DCB8`.
  - `Canvas Dark`: `#0E1217` with matte graphite surfaces `#181C22` and deep bronze borders `#4E4228`.
  - `Primary Accent`: Champagne Gold (`#C5A059` / `#B8860B`) with subtle luminous glow.
  - `Text Primary`: Deep Charcoal Slate (`#1E293B`) in light mode; Soft Silver (`#F1F5F9`) in dark mode.
  - `Text Muted`: Refined Slate (`#64748B` light / `#94A3B8` dark).
- **Typography**:
  - Headings & Editorial Display: *Cormorant Garamond* (warm, authoritative serif).
  - UI Labels, Specifications & Body: *Plus Jakarta Sans* (humanist geometric sans-serif).
  - Numbers & IDR Pricing: *Plus Jakarta Sans* with tabular numerals (`tabular-nums font-bold`).
- **Surface Math & Radii**:
  - Base interactive controls: `rounded-xl` (12px) and `rounded-full` for badges/toggles.
  - Cards & Modals: `rounded-2xl` (16px) with clean hairline borders (`border border-gold/30`).
  - Zero heavy drop shadows; depth is conveyed through subtle tonal contrast and ambient gold glows.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct WhatsApp Concierge Dispatch vs. Complex Payment Gateway**
  - *Chosen Approach*: Instant WhatsApp integration with structured, formatted message generation (vehicle model, dates, duration, pickup spot, total price, and customer details).
  - *Rationale*: In the Indonesian rental automotive industry, over 90% of bookings require identity verification (KTP/SIM), delivery coordination, and customized schedule adjustments directly with dispatch admins. Eliminating checkout friction dramatically boosts conversion while preserving transparent pricing.
- **Decision 2: Comprehensive Client-Side State Management**
  - *Chosen Approach*: React state hooks with local storage persistence for theme preference, active filters, and booking configurations.
  - *Rationale*: Ensures lightning-fast responsiveness with zero latency, offline resilience, and zero database setup overhead for this presentation-grade showcase.
- **Decision 3: Image Delivery Strategy**
  - *Chosen Approach*: Use the provided high-resolution Google CDN asset URLs from the design mockups with graceful CSS gradient fallbacks to guarantee instant rendering and zero broken image frames.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          Nusantara Trans App                           │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Top Navigation Bar (Brand, Anchor Links, WA Action, Theme)    │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                   │                                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Hero Section (Headline, Value Metrics Strip, Showcase Graphic)  │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                   │                                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Floating Search Engine (Rental vs Tour, Location, Date Range)  │   │
│   └────────────────────────────────────────────────────────────────┘   │
│            │                                              │            │
│            ▼                                              ▼            │
│   ┌──────────────────────────────┐        ┌────────────────────────┐   │
│   │ Fleet Showcase               │        │ Tour Packages Bento    │   │
│   │ - Category Filter Pills      │        │ - 4 Featured Packages  │   │
│   │ - Vehicle Cards with Specs   │        │ - Inclusions & Badges  │   │
│   │ - "Detail" & "Sewa" Triggers │        │ - Itinerary Modal      │   │
│   └──────────────────────────────┘        └────────────────────────┘   │
│            │                                              │            │
│            ▼                                              ▼            │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Interactive Overlays & Modals                                  │   │
│   │  • Booking Calculator Modal (Pricing Math, WA Dispatch)        │   │
│   │  • Vehicle Inspection & Specs Drawer (24-point check, terms)  │   │
│   │  • Custom Tour Itinerary Builder Modal                         │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                   │                                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Why Choose Us (4 Service Pillars) + Client Testimonials Grid   │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                   │                                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Free Consultation Banner + Comprehensive Corporate Footer      │   │
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

### State Store & Interactive Event Mapping

| UI Component | State Variable | User Action | State Mutation & Behavior |
| :--- | :--- | :--- | :--- |
| **Theme Toggle** | `isDarkMode: boolean` | Click sun/moon icon | Toggles HTML `dark` class & saves to `localStorage` |
| **Search Engine** | `searchTab: 'rental' \| 'tour'`, `serviceMode: 'driver' \| 'self'` | Click tab or toggle switch | Swaps active search form controls without reload |
| **Fleet Filter** | `selectedCategory: string` | Click filter pill | Filters vehicle catalog cards with smooth transition |
| **Vehicle Detail** | `selectedVehicle: Vehicle \| null` | Click "Detail" or card image | Opens slide-over drawer with full specs, inspection list, and terms |
| **Booking Modal** | `bookingModalState: BookingData \| null` | Click "Sewa" on any card | Opens calculation modal; calculates subtotal from days $\times$ rate + driver fee |
| **Tour Builder** | `customTourModalOpen: boolean` | Click "Custom Rute Wisata" | Opens customized itinerary form to compile private archipelago tour quote |
| **WhatsApp Dispatch**| Generated WhatsApp URL | Click "Konfirmasi via WhatsApp" | Compiles encoded text message with quote details and opens WhatsApp |
