# Ilocos Empanada Website Improvement Backlog

This document tracks planned improvements for the Ilocos Empanada
website.

**Website:** https://ilocosempanada.ca\
**Repository:** `ilocos-empanada`\
**Production branch:** `main`

## Goals

-   Make it easier for visitors to place an order.
-   Clearly explain the products, pricing, pickup, and delivery options.
-   Build trust in the business through authentic photos and customer
    feedback.
-   Improve search visibility, accessibility, and website performance.
-   Preserve the current warm cream, burnt orange, and editorial visual
    identity.

## Priority 1: Ordering experience

### \[ \] Add a prominent Order Now navigation action

**Description:** Add a visually prominent `Order Now` button to the main
navigation.

**Expected behaviour:** - The button is visible and easy to find on
desktop and mobile. - It takes visitors to the preferred ordering
channel, such as Facebook Messenger. - The destination opens the correct
Ilocos Empanada business conversation.

**Acceptance criteria:** - \[ \] Button appears in the desktop
navigation. - \[ \] Mobile navigation provides an equally clear ordering
action. - \[ \] Link opens the correct Facebook Page conversation. - \[
\] Link works on desktop and mobile.

### \[ \] Add a floating Messenger button

**Description:** Add a branded Messenger button fixed near the bottom
right of the viewport.

**Expected behaviour:** - Remains available while visitors scroll
through the website. - Opens a Messenger conversation with the Ilocos
Empanada Facebook Page. - Does not cover important content or other
mobile controls.

**Acceptance criteria:** - \[ \] Correct Messenger URL is configured. -
\[ \] Button has an accessible name. - \[ \] Button is keyboard
accessible. - \[ \] Button is positioned correctly on desktop and
mobile. - \[ \] Button does not obscure content or interfere with
navigation.

**Implementation note:** Use a direct Messenger link such as
`https://m.me/PAGE_USERNAME`. Meta's former embedded Customer Chat
Plugin should not be used.

## Priority 2: Menu and ordering information

### \[ \] Add product descriptions

**Description:** Explain what customers receive with each menu item.

Suggested menu information:

**Regular Ilocos Empanada** - Price: CA\$6 each - Minimum order: 3
pieces - Add a concise description of the actual filling and pastry.

**Mini Ilocos Empanada** - Price: CA\$45 per 10 pieces - Add a concise
description and explain that it is suitable for sharing, if accurate.

**Acceptance criteria:** - \[ \] Each product has a clear name and
description. - \[ \] Prices are easy to find. - \[ \] Minimum quantities
or package sizes are explicit. - \[ \] Descriptions accurately reflect
the products.

### \[ \] Clarify preorder requirements

**Description:** Explain how and when customers should place orders.

Potential information to include: - Weekend availability. - Whether
orders must be placed in advance. - How customers confirm
availability. - How customers receive pickup instructions.

**Acceptance criteria:** - \[ \] Preorder instructions are visible near
the menu or ordering CTA. - \[ \] Customers know how to confirm
availability. - \[ \] Information matches the business's actual
operating process.

### \[ \] Add pickup and delivery information

**Description:** Explain the pickup area and local delivery options.

Suggested content: - Weekend preorders available. - Pickup in
Meadowvale, Mississauga. - Local delivery available. - Message the
business to confirm availability and delivery fees.

Current delivery policy to verify before publishing: - CA\$5 within 5
km. - Add CA\$1 per additional kilometre beyond 5 km. - Free delivery on
orders of CA\$100 or more within 10 km.

**Acceptance criteria:** - \[ \] Pickup area is clearly stated. - \[ \]
Delivery availability and fees are accurate. - \[ \] Free delivery
conditions are clear. - \[ \] Customers are directed to confirm delivery
details before ordering.

## Priority 3: Trust and brand story

### \[ \] Expand the Our Story section

**Description:** Add a more personal account of the business and its
connection to Ilocos Norte.

Potential content: - Why the business was started. - Personal connection
to Ilocos and Filipino food. - What makes Ilocos empanada special. - The
care taken in preparing each order.

**Acceptance criteria:** - \[ \] Story is written in the business's
authentic voice. - \[ \] Claims are accurate and personally
meaningful. - \[ \] Section remains concise and easy to read.

### \[ \] Add authentic business and preparation photos

**Description:** Include real photos that help visitors understand who
makes the food and how orders are prepared.

Potential photos: - Food preparation. - Freshly made empanadas. -
Packaging and completed orders. - The people behind the business.

**Acceptance criteria:** - \[ \] Photos are genuine and represent the
actual business. - \[ \] Images are optimized for web delivery. - \[ \]
Images have meaningful alternative text where appropriate.

### \[ \] Add customer testimonials

**Description:** Display selected customer feedback with permission.

**Acceptance criteria:** - \[ \] Testimonials are genuine. - \[ \]
Permission is obtained where needed. - \[ \] Customer names or
identifying details are shown only with permission. - \[ \] Testimonials
are readable on mobile.

## Priority 4: Privacy and contact details

### \[ \] Review the public pickup address

**Current concern:** The website capture displays the full residential
pickup address.

**Recommendation:** Consider displaying
`Meadowvale, Mississauga, Ontario` publicly and sharing the exact pickup
address after an order is confirmed.

**Acceptance criteria:** - \[ \] Decide whether the full residential
address should remain public. - \[ \] Public location information
matches the chosen privacy approach. - \[ \] Exact pickup instructions
are still provided to confirmed customers.

### \[ \] Verify all contact and social links

**Acceptance criteria:** - \[ \] Phone number uses a working `tel:`
link. - \[ \] Facebook link opens the correct business Page. - \[ \]
Instagram link opens the correct business profile. - \[ \] Messenger
link opens the correct conversation. - \[ \] External links behave
appropriately on mobile and desktop.

## Priority 5: SEO and discoverability

### \[ \] Add page metadata

**Description:** Review the document title, meta description, canonical
URL, and social sharing metadata.

Suggested page title:

`Ilocos Empanada | Fresh Filipino Empanadas in Mississauga`

Suggested meta description:

`Enjoy freshly made Ilocos empanadas in Meadowvale, Mississauga. Explore our menu, weekend availability, pickup, and local delivery options.`

**Acceptance criteria:** - \[ \] Page title is descriptive and unique. -
\[ \] Meta description accurately summarizes the business. - \[ \]
Canonical URL uses `https://ilocosempanada.ca/`. - \[ \] Open Graph
title, description, and image are configured. - \[ \] Social sharing
preview is checked.

### \[ \] Set up Google Search Console

**Acceptance criteria:** - \[ \] Verify ownership of
`ilocosempanada.ca`. - \[ \] Submit the sitemap if one is available. -
\[ \] Check indexing status. - \[ \] Review search queries and indexing
issues periodically.

### \[ \] Add structured business information

**Description:** Consider appropriate Schema.org structured data for a
local food business.

**Acceptance criteria:** - \[ \] Business name and public contact
details are accurate. - \[ \] Public address follows the chosen privacy
approach. - \[ \] Opening hours are accurate. - \[ \] Structured data is
validated before release.

## Priority 6: Accessibility, performance, and quality

### \[ \] Review mobile responsiveness

**Acceptance criteria:** - \[ \] Navigation works on small screens. - \[
\] Text is readable without zooming. - \[ \] Buttons have comfortable
tap targets. - \[ \] Product cards stack cleanly. - \[ \] Images do not
overflow their containers. - \[ \] Floating Messenger button does not
cover important content.

### \[ \] Improve image performance

**Acceptance criteria:** - \[ \] Large images are resized to appropriate
display dimensions. - \[ \] Use WebP or AVIF where supported by the
build pipeline. - \[ \] Images below the fold use lazy loading where
appropriate. - \[ \] Hero imagery is not unnecessarily lazy loaded. - \[
\] Images include width and height or an aspect ratio to reduce layout
shifts.

### \[ \] Review accessibility

**Acceptance criteria:** - \[ \] Meaningful images have useful alt
text. - \[ \] Decorative images are hidden from assistive technology. -
\[ \] Text and background contrast are sufficient. - \[ \] Interactive
elements are keyboard accessible. - \[ \] Focus indicators are
visible. - \[ \] Heading levels follow a logical order. - \[ \] Form
controls, if added, have labels.

### \[ \] Run Lighthouse checks

Run Lighthouse in Chrome DevTools for desktop and mobile.

Record results and address meaningful issues in: - Performance -
Accessibility - Best Practices - SEO

### \[ \] Verify production deployment

**Acceptance criteria:** - \[ \] Production site loads over HTTPS. - \[
\] Root domain and `www` behaviour are correct. - \[ \] Navigation and
section links work. - \[ \] Phone and social links work. - \[ \] No
broken images or obvious console errors. - \[ \] A push to `main`
triggers an Amplify deployment. - \[ \] A failed build does not replace
the last successful deployment.

## Suggested implementation order

1.  [ ] Order Now navigation action.
2.  [ ] Floating Messenger button.
3.  [ ] Product descriptions and preorder instructions.
4.  [ ] Pickup and delivery information.
5.  [ ] Review public residential address.
6.  [ ] Verify phone and social links.
7.  [ ] Add authentic business photos and testimonials.
8.  [ ] SEO metadata and Google Search Console.
9.  [ ] Mobile, accessibility, and performance review.

## Notes and decisions

Use this section to record decisions, links, or implementation notes as
work progresses.

-   **Messenger Page URL:** To be added.
-   **Google Search Console property:** To be added.
-   **Last reviewed:** 2026-11-08
