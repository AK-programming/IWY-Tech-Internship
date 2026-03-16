# 📘 Week 3 - JavaScript & Interactivity
**IWY Tech Full Stack Development Internship**  
**Student:** Muhammad Afnan Khan  
**University:** UET Peshawar - Computer Systems Engineering  
**Submission Date:** 03-03-2026

---

## 🎯 Project Overview
Interactive portfolio website demonstrating ALL Week 3 JavaScript concepts:
- ✅ **Day 1:** JavaScript Fundamentals (Variables, Data Types, Operators)
- ✅ **Day 2:** Conditions & Loops (if-else, switch, for, while)
- ✅ **Day 3:** Functions & Events (onclick, event handlers)
- ✅ **Day 4:** DOM Manipulation (modify HTML dynamically)
- ✅ **Day 5:** Interactive Calculator + Form Validation

---

## 📂 Project Files
```
AfnanKhan_Week3/
├── index.html       ← Main HTML file
├── styles.css       ← CSS styling (from Week 2)
├── script.js        ← JavaScript file (ALL Week 3 concepts!)
└── README.md        ← This file
```

---

## 📚 JAVASCRIPT CONCEPTS EXPLAINED

---

### 🔵 **DAY 1: JavaScript Fundamentals**

JavaScript adds **behavior** to websites. Think of it as the **brain** of your webpage!

#### **VARIABLES** - Store data

```javascript
let name = "Afnan";      // let - can change value
const age = 22;          // const - CANNOT change
var city = "Peshawar";   // var - old way (don't use!)
```

**Rules:**
- Use `let` for values that change
- Use `const` for values that don't change
- Variable names: use camelCase (myName, userAge)

#### **DATA TYPES**

```javascript
let number = 42;                    // Number
let text = "Hello";                 // String (text)
let isTrue = true;                  // Boolean (true/false)
let fruits = ["apple", "banana"];   // Array (list)
let person = {name: "Ali", age: 20}; // Object
```

#### **OPERATORS**

```javascript
let a = 10;
let b = 5;

// Arithmetic
let sum = a + b;        // 15 (addition)
let diff = a - b;       // 5 (subtraction)
let product = a * b;    // 50 (multiplication)
let quotient = a / b;   // 2 (division)

// Comparison
a > b    // true (greater than)
a == b   // false (equal to)
a != b   // true (not equal)
```

#### **CONSOLE.LOG** - For testing

```javascript
console.log("Hello World!");  // Prints in browser console (F12)
console.log("Sum:", sum);     // Test your code!
```

---

### 🟢 **DAY 2: Conditions & Loops**

#### **IF-ELSE** - Make decisions

```javascript
let score = 85;

if (score >= 90) {
  console.log("A+ Grade!");
} else if (score >= 80) {
  console.log("A Grade");
} else {
  console.log("Keep trying!");
}
```

**Real Example in Project:**
```javascript
function updateGreeting() {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    greeting.textContent = "Good Morning! ☀️";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon! 🌤️";
  } else {
    greeting.textContent = "Good Evening! 🌙";
  }
}
```

#### **SWITCH** - Multiple choices

```javascript
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

#### **FOR LOOP** - Repeat code

```javascript
// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop through array
let skills = ["JavaScript", "Python", "AI"];
for (let i = 0; i < skills.length; i++) {
  console.log(skills[i]);
}
```

**Real Example in Project:**
```javascript
// Generate skill cards dynamically!
for (let i = 0; i < mySkills.length; i++) {
  const skill = mySkills[i];
  // Create HTML for each skill
  skillCard.innerHTML = `
    <div>${skill.name}: ${skill.level}%</div>
  `;
}
```

#### **WHILE LOOP** - Repeat while condition is true

```javascript
let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;  // Increment
}
```

---

### 🟡 **DAY 3: Functions & Event Handlers**

#### **FUNCTIONS** - Reusable code blocks

```javascript
// Function declaration
function greet() {
  console.log("Hello!");
}

// Function with parameters
function add(a, b) {
  return a + b;
}

// Call the function
greet();              // Prints "Hello!"
let result = add(5, 3); // Returns 8
```

**Real Example in Project:**
```javascript
function incrementCounter() {
  viewCount++;  // Increase counter
  document.getElementById('viewCount').textContent = viewCount;
}
```

#### **EVENT HANDLERS** - React to user actions

**Method 1: Inline onclick**
```html
<button onclick="incrementCounter()">Click Me!</button>
```

**Method 2: addEventListener**
```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert("Button clicked!");
});
```

**Common Events:**
- `onclick` - When clicked
- `onchange` - When input changes
- `onsubmit` - When form submitted
- `onload` - When page loads

---

### 🟠 **DAY 4: DOM Manipulation**

DOM = **Document Object Model** - JavaScript's way to access and change HTML!

#### **ACCESS ELEMENTS**

```javascript
// Get element by ID
let elem = document.getElementById('greeting');

// Get elements by class
let cards = document.getElementsByClassName('card');

// Modern way (preferred!)
let elem = document.querySelector('#greeting');     // ID
let cards = document.querySelectorAll('.card');    // Class
```

#### **CHANGE CONTENT**

```javascript
// Change text
elem.textContent = "New text!";

// Change HTML
elem.innerHTML = "<strong>Bold text!</strong>";

// Change style
elem.style.color = "red";
elem.style.fontSize = "20px";

// Add/remove class
elem.classList.add('active');
elem.classList.remove('hidden');
elem.classList.toggle('dark-mode');  // Switch on/off
```

**Real Example in Project:**
```javascript
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(tabName).classList.add('active');
}
```

#### **CREATE NEW ELEMENTS**

```javascript
// Create new div
let newDiv = document.createElement('div');
newDiv.textContent = "I'm new!";
newDiv.className = "card";

// Add to page
document.body.appendChild(newDiv);
```

---

### 🔴 **DAY 5: Mini Projects**

#### **PROJECT 1: Calculator**

Uses ALL concepts: variables, functions, conditions, switch, DOM!

```javascript
const calculator = {
  currentOperand: '0',
  
  appendNumber(number) {
    if (this.currentOperand === '0') {
      this.currentOperand = number;
    } else {
      this.currentOperand += number;
    }
    this.updateDisplay();
  },
  
  compute() {
    switch(this.operation) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '×': result = prev * current; break;
      case '÷': 
        if (current === 0) {
          alert('Cannot divide by zero!');
          return;
        }
        result = prev / current; 
        break;
    }
  }
};
```

#### **PROJECT 2: Form Validation**

Uses conditions extensively!

```javascript
function validateForm(event) {
  event.preventDefault();  // Stop form submission
  
  let name = document.getElementById('name').value;
  
  // Validation with IF conditions
  if (name === '') {
    showError('Name is required!');
    return false;
  }
  
  if (name.length < 3) {
    showError('Name too short!');
    return false;
  }
  
  // Email validation with REGEX
  let email = document.getElementById('email').value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('Invalid email!');
    return false;
  }
  
  showSuccess();
  return true;
}
```

---

## 🎯 **WHERE CONCEPTS ARE USED IN PROJECT**

### **Day 1 - Variables & Data Types:**
- `let viewCount = 0` - Counter variable
- `const university = "UET Peshawar"` - Constant
- `mySkills` array - Stores skill data

### **Day 2 - Conditions & Loops:**
- `if-else` in greeting (morning/afternoon/evening)
- `switch` in calculator operations (+, -, ×, ÷)
- `for loop` to generate skill cards dynamically
- `if` conditions in project filter (AI/IoT/Web)

### **Day 3 - Functions & Events:**
- `incrementCounter()` - Button click function
- `toggleDarkMode()` - Dark mode toggle
- `updateTime()` - Clock function
- `onclick` events on all buttons

### **Day 4 - DOM Manipulation:**
- `getElementById()` to access elements
- `textContent` to change text
- `classList.add/remove()` for tabs
- `innerHTML` to create skill cards
- `createElement()` for dynamic content

### **Day 5 - Mini Projects:**
- **Calculator:** All operations, display updates
- **Form Validation:** Name, email, message checks
- **Tab System:** Show/hide content
- **Skill Bars:** Animated progress bars
- **Project Filter:** Show projects by category

---

## 🚀 **HOW TO RUN**

1. **Download** all 3 files (index.html, styles.css, script.js)
2. **Put them in same folder**
3. **Open** index.html in browser (Chrome, Firefox, Edge)
4. **Test all features:**
   - Click counter button
   - Toggle dark mode
   - Switch tabs
   - Filter projects
   - Use calculator
   - Submit form

---

## 🎓 **WHAT I LEARNED**

1. **JavaScript makes websites interactive** - No more static pages!
2. **Variables store data** - Numbers, text, arrays, objects
3. **Conditions make decisions** - if-else, switch statements
4. **Loops repeat code** - for, while loops save time
5. **Functions are reusable** - Write once, use many times
6. **Events respond to users** - Clicks, typing, form submission
7. **DOM is powerful** - Change HTML with JavaScript!
8. **Practice is key** - Build projects to learn!

---

## 📝 **SUBMISSION CHECKLIST**

- ✅ HTML file created (structure)
- ✅ CSS file created (styling from Week 2)
- ✅ JavaScript file created (ALL Week 3 concepts!)
- ✅ Variables & data types used
- ✅ Conditions (if-else, switch)
- ✅ Loops (for, while)
- ✅ Functions created
- ✅ Event handlers working
- ✅ DOM manipulation implemented
- ✅ Calculator working
- ✅ Form validation working
- ✅ Code commented and clean

---

## 💡 **TEACHER'S TIPS**

1. **F12 is your friend** - Open browser console to see console.log() and errors
2. **Test incrementally** - Add one feature, test, then add next
3. **console.log() everything** - Debug by printing values
4. **Read error messages** - They tell you what's wrong!
5. **Practice daily** - 30 minutes = huge progress
6. **Build projects** - Best way to learn JavaScript
7. **Ask for help** - No question is stupid!

---

## 📞 **CONTACT**

**Muhammad Afnan Khan**  
📧 muhammadafnankhan40404@gmail.com  
📱 +92 347 5917884  
💼 [LinkedIn](https://linkedin.com/in/ak2155)

---

**Made with ❤️ during IWY Tech Full Stack Internship - Week 3**

---
