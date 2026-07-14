---
status: pending
title: Multiplication Table of 22
---

1. Create /app/src/styles/global.css with `@import "tailwindcss";` as the first line to set up Tailwind v4 styling.

2. Create /app/src/main.tsx as the app entry point, importing global.css and rendering the root App component into the DOM.

3. Create /app/src/App.tsx as the root component that renders the MultiplicationTable page.

4. Create /app/src/pages/MultiplicationTable.tsx as the main page component:
   - Display a centered page with a heading "Multiplication Table of 22".
   - Generate rows for 22 × 1 through 22 × 10 (standard 10-step table).
   - Render each row in a clean, readable table with three columns: the multiplier (e.g. 22), the operator (×), the factor (1–10), an equals sign (=), and the result.
   - Apply alternating row background colors for readability.
   - Style the table with rounded corners, a shadow, and clear typography so it looks polished.

Expected outcome: The app displays a neatly styled multiplication table showing 22 × 1 = 22 through 22 × 10 = 220, centered on the page.
