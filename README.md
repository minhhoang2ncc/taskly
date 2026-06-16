# Task.ly
Landing page of Task.ly

## 1. Semantic HTML Structure

The landing page was built using semantic HTML to ensure accessibility, SEO optimization, and a clear document outline.

### Document Layout
The page is logically divided into three primary landmarks: `<header>`, `<main>`, and `<footer>`.

- **Header Section**
  - `<nav>`: Defines the primary navigation bar.
  - `<ul>` & `<li>`: Structures the navigation links into an unordered list.
  - `<a>`: Anchor tags used for page redirection and routing.
- **Main Content Area**
  - `<section>`: Groups related UI components and thematic content together.
  - `<dl>`, `<dt>`, `<dd>`: Utilized a description list to clearly group and explain feature definitions and terminology.
- **Footer Section**
  - `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`: Implemented a structured table element to organize tabular data, utilizing dedicated header and body groupings, rows, and data cells.

---

## 2. CSS Architecture & Selectors

The styling approach utilized a variety of selectors and centralized variables to maintain a scalable and modular codebase.

- **Custom Properties:** Utilized the `:root` pseudo-class (highest specificity level globally) to define and manage CSS custom variables.
- **State Management:** Applied pseudo-classes (e.g., `:hover`, `:active`) to target and style elements based on user interaction states.

### Targeting Strategy
- **Class & ID Selectors:** For specific, reusable component styling and unique element targeting.
- **Tag Selectors:** To establish baseline styles for default HTML elements.
- **Descendant Selectors:** To apply styles to elements nested within specific parent containers.
- **Attribute Selectors:** To target elements dynamically based on their specific HTML attributes.

---

## 3. Responsive Implementation & Interactivity

The layout was engineered to be fully responsive across devices without heavily relying on static media queries, prioritizing modern CSS layout modules.

- **Fluid Units:** Integrated viewport units (`vw`, `vh`) for dynamically scaling typography and structural sizing.
- **Dynamic CSS Grid:** Implemented CSS Grid using the `auto-fit` keyword combined with the `repeat()` function. This allows the layout to automatically calculate and adjust the number of columns based on the current screen width.
- **UI Animations:** Enhanced the user experience by implementing CSS `transform` and `transition` properties to create smooth, interactive visual effects on the page.
- **Media Queries:** Used standard media queries to adjust specific element attributes and layouts according to screen size breakpoints.
