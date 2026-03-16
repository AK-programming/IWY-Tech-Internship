# 📘 Week 2 - CSS & Page Styling
**IWY Tech Full Stack Development Internship**  
**Student Name:** [Your Name]  
**Submission Date:** 24-02-2026

---

## 🎯 Project Overview
This project is a fully styled, professional business website demonstrating all Week 2 CSS concepts:
- ✅ **Day 1:** CSS Basics (Inline, Internal, External CSS)
- ✅ **Day 2:** Colors, Fonts, and Typography
- ✅ **Day 3:** Box Model (Margin, Padding, Border)
- ✅ **Day 4:** Layout Techniques (Flexbox, Positioning)
- ✅ **Day 5:** Complete Multi-Section Styled Webpage

---

## 📂 Project Structure
```
YourName_Week2/
├── index.html       ← Main HTML file
├── styles.css       ← External CSS file (Day 1)
└── README.md        ← This file
```

---

## 📚 CSS CONCEPTS EXPLAINED (Simple Teacher Mode!)

---

### 🎨 **DAY 1: CSS Basics - Three Ways to Add CSS**

CSS = **Cascading Style Sheets**. Think of HTML as the skeleton and CSS as the clothes and makeup!

#### 1️⃣ **INLINE CSS** (Written directly in HTML tag)
```html
<p style="color: blue; font-size: 20px;">This is inline CSS</p>
```
- ❌ **BAD PRACTICE** - Hard to maintain
- ✅ Use only for quick tests

#### 2️⃣ **INTERNAL CSS** (Written in `<style>` tag in `<head>`)
```html
<style>
  p { color: blue; font-size: 20px; }
</style>
```
- ✅ Good for single-page styles
- Used in this project for `.highlight-box`

#### 3️⃣ **EXTERNAL CSS** (Separate `.css` file - BEST!)
```html
<link rel="stylesheet" href="styles.css">
```
- ✅✅ **BEST PRACTICE** - Clean, reusable, organized
- Our `styles.css` file uses this!

---

### **CSS SYNTAX:**
```css
selector {
  property: value;
  another-property: another-value;
}
```

**Example:**
```css
h1 {
  color: red;        /* Property: value; */
  font-size: 32px;   /* Property: value; */
}
```

---

### 🎨 **CSS SELECTORS** (How to target elements)

| Selector | Example | What it targets |
|----------|---------|----------------|
| **Element** | `p { ... }` | All `<p>` tags |
| **Class** | `.btn { ... }` | All elements with `class="btn"` |
| **ID** | `#hero { ... }` | Element with `id="hero"` |
| **Universal** | `* { ... }` | ALL elements |
| **Grouping** | `h1, h2 { ... }` | All `<h1>` and `<h2>` |

---

### 🌈 **DAY 2: Colors & Fonts**

#### **COLORS IN CSS:**

1. **Color Names:** `color: red;`
2. **Hex Codes:** `color: #667eea;` (most common!)
3. **RGB:** `color: rgb(102, 126, 234);`
4. **RGBA:** `color: rgba(102, 126, 234, 0.8);` (last value = transparency)

**Pro Tip:** Use variables for consistency!
```css
:root {
  --primary-color: #667eea;
}
body {
  color: var(--primary-color);
}
```

#### **FONTS IN CSS:**

```css
body {
  font-family: 'Segoe UI', Arial, sans-serif;  /* Font name */
  font-size: 16px;                             /* Size */
  font-weight: 700;                            /* Boldness (400=normal, 700=bold) */
  line-height: 1.6;                            /* Line spacing */
  text-align: center;                          /* Alignment */
  color: #333;                                 /* Text color */
}
```

**Common Font Weights:**
- 400 = Normal
- 600 = Semi-bold
- 700 = Bold
- 900 = Extra bold

---

### 📦 **DAY 3: THE BOX MODEL** (MOST IMPORTANT!)

Every HTML element is a **box** with 4 layers:

```
┌─────────────────────────────────┐
│         MARGIN (outside)        │  ← Space OUTSIDE border
│  ┌───────────────────────────┐  │
│  │     BORDER (the line)     │  │  ← The border/outline
│  │  ┌─────────────────────┐  │  │
│  │  │   PADDING (inside)  │  │  │  ← Space INSIDE border
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │  ← Your text/image
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

#### **MARGIN** - Space OUTSIDE the element
```css
.box {
  margin: 20px;              /* All sides: 20px */
  margin: 10px 20px;         /* Top/Bottom: 10px, Left/Right: 20px */
  margin: 10px 20px 30px 40px; /* Top Right Bottom Left (clockwise!) */
  margin-top: 10px;          /* Just top */
  margin: 0 auto;            /* Center horizontally! */
}
```

#### **PADDING** - Space INSIDE the element
```css
.box {
  padding: 20px;             /* All sides: 20px */
  padding: 10px 30px;        /* Top/Bottom: 10px, Left/Right: 30px */
}
```

#### **BORDER** - The outline
```css
.box {
  border: 2px solid blue;    /* Width, style, color */
  border-radius: 10px;       /* Rounded corners */
  border-left: 4px solid red; /* Only left border */
}
```

#### **BOX-SIZING** (Important!)
```css
* {
  box-sizing: border-box;  /* Width INCLUDES padding & border */
}
```
Without this, a box with `width: 100px` + `padding: 10px` becomes 120px wide!

---

### 📐 **DAY 4: LAYOUT TECHNIQUES**

#### **1. DISPLAY PROPERTY**
```css
.element {
  display: block;      /* Takes full width (like <div>, <p>) */
  display: inline;     /* Flows with text (like <span>, <a>) */
  display: inline-block; /* Flows but respects width/height */
  display: flex;       /* FLEXBOX - modern layout! */
}
```

#### **2. POSITIONING**
```css
.element {
  position: static;    /* Default - normal flow */
  position: relative;  /* Relative to normal position */
  position: absolute;  /* Relative to parent */
  position: fixed;     /* Fixed to viewport (stays on scroll) */
  position: sticky;    /* Sticks after scrolling (like our header!) */
}
```

#### **3. FLEXBOX** (Modern Layout System!)

Flexbox makes aligning items **super easy**!

```css
.container {
  display: flex;                /* Enable flexbox */
  justify-content: space-between; /* Horizontal alignment */
  align-items: center;          /* Vertical alignment */
  gap: 20px;                    /* Space between items */
  flex-wrap: wrap;              /* Wrap to new line if needed */
}
```

**Justify-Content (Horizontal):**
- `flex-start` - Left
- `flex-end` - Right
- `center` - Center
- `space-between` - Space between items
- `space-around` - Space around items

**Align-Items (Vertical):**
- `flex-start` - Top
- `flex-end` - Bottom
- `center` - Middle
- `stretch` - Fill height

**Example:** Center a box perfectly!
```css
.parent {
  display: flex;
  justify-content: center;  /* Horizontal center */
  align-items: center;      /* Vertical center */
  height: 100vh;            /* Full viewport height */
}
```

---

## 🎯 **WHERE EACH CONCEPT IS USED IN OUR PROJECT:**

### **Day 1 - CSS Basics:**
- ✅ **External CSS:** `styles.css` file (main styling)
- ✅ **Internal CSS:** `.highlight-box` in `<style>` tag
- ✅ **Inline CSS:** Example paragraph in About section

### **Day 2 - Colors & Fonts:**
- ✅ **Colors:** Gradient backgrounds, text colors, hover effects
- ✅ **Fonts:** Different sizes (h1, h2, p), weights (bold, semi-bold)
- ✅ **Variables:** `:root` section with color variables

### **Day 3 - Box Model:**
- ✅ **Margin:** Spacing between sections
- ✅ **Padding:** Internal spacing in cards, buttons, sections
- ✅ **Border:** Card borders, border-radius for rounded corners
- ✅ **Box-shadow:** Shadows on cards for depth

### **Day 4 - Layout:**
- ✅ **Flexbox:** Header navigation, service grid, team grid
- ✅ **Positioning:** Sticky header (stays on scroll)
- ✅ **Responsive:** Media queries for mobile

---

## 🎓 **WHAT I LEARNED:**

1. **CSS makes HTML beautiful** - Without CSS, websites are ugly!
2. **External CSS is best** - Cleaner code, reusable styles
3. **Box Model is everywhere** - Margin, padding, border control spacing
4. **Flexbox is powerful** - Makes layouts easy (no more messy floats!)
5. **Colors & fonts matter** - Good typography = professional look

---

## 🚀 **HOW TO VIEW THIS PROJECT:**

1. **Download** the ZIP file
2. **Extract** the folder
3. **Open** `index.html` in any browser (Chrome, Firefox, Edge)
4. **Enjoy** the fully styled webpage!

---

## 📝 **SUBMISSION CHECKLIST:**

- ✅ HTML file created (`index.html`)
- ✅ External CSS file created (`styles.css`)
- ✅ Used inline CSS (example in About section)
- ✅ Used internal CSS (`.highlight-box`)
- ✅ Applied colors and fonts
- ✅ Implemented box model (margin, padding, border)
- ✅ Used Flexbox for layouts
- ✅ Multiple sections (Header, Hero, About, Services, Team, Contact, Footer)
- ✅ Professional, clean design
- ✅ Code is commented and organized

---

## 💡 **TEACHER'S TIPS:**

1. **Always use external CSS** for real projects
2. **Comments are your friend** - explain your code!
3. **Test in browser** - CSS is visual, see what you build!
4. **Developer Tools (F12)** - Inspect elements to debug CSS
5. **Practice daily** - CSS needs repetition to master
6. **Don't memorize** - Understand the concepts, Google the syntax!

---

**Made with ❤️ during IWY Tech Full Stack Internship - Week 2**

---
