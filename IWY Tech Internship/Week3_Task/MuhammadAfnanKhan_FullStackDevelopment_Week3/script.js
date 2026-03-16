/* Week 3 JavaScript - Muhammad Afnan Khan */

// DAY 1: Variables & Data Types
let studentName = "Muhammad Afnan Khan";
const university = "UET Peshawar";
let skills = ["JavaScript", "AI/ML", "IoT"];

// DAY 2: Conditions
function checkGrade(score) {
  if (score >= 90) return "A+";
  else if (score >= 80) return "A";
  else return "Keep working!";
}

const mySkills = [
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "AI/ML (BERT, RoBERTa)", level: 90 },
  { name: "Embedded Systems (STM32, ESP32)", level: 85 },
  { name: "IoT & MQTT", level: 80 },
  { name: "Node.js & React", level: 75 },
  { name: "MATLAB", level: 70 },
  { name: "Git & GitHub", level: 85 }
];

// DAY 3: Functions & Events
function updateGreeting() {
  const hour = new Date().getHours();
  const elem = document.getElementById('greeting');
  if (elem) {
    if (hour < 12) elem.textContent = "Good Morning! ☀️";
    else if (hour < 18) elem.textContent = "Good Afternoon! 🌤️";
    else elem.textContent = "Good Evening! 🌙";
  }
}

function updateTime() {
  const elem = document.getElementById('currentTime');
  if (elem) elem.textContent = new Date().toLocaleTimeString();
}

let viewCount = 0;
function incrementCounter() {
  viewCount++;
  const elem = document.getElementById('viewCount');
  if (elem) elem.textContent = viewCount;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('darkModeToggle');
  if (btn) {
    btn.textContent = document.body.classList.contains('dark-mode') 
      ? "☀️ Light Mode" 
      : "🌙 Dark Mode";
  }
}

// DAY 4: DOM Manipulation
function showTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) selectedTab.classList.add('active');
  event.target.classList.add('active');
}

function displaySkills() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  for (let i = 0; i < mySkills.length; i++) {
    const skill = mySkills[i];
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-item';
    skillCard.innerHTML = `
      <div class="skill-name">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 0%"></div>
      </div>
    `;
    container.appendChild(skillCard);
    
    setTimeout(() => {
      const progressBar = skillCard.querySelector('.skill-progress');
      progressBar.style.width = skill.level + '%';
    }, 100 * i);
  }
}

function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');
  
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  projects.forEach(project => {
    const projectCategory = project.getAttribute('data-category');
    if (category === 'all' || projectCategory === category) {
      project.classList.remove('hidden');
      project.style.display = 'block';
    } else {
      project.classList.add('hidden');
      project.style.display = 'none';
    }
  });
}

// DAY 5: Calculator
const calculator = {
  currentOperand: '0',
  previousOperand: '',
  operation: null,
  
  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = null;
    this.updateDisplay();
  },
  
  delete() {
    if (this.currentOperand === '0') return;
    this.currentOperand = this.currentOperand.slice(0, -1);
    if (this.currentOperand === '') this.currentOperand = '0';
    this.updateDisplay();
  },
  
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' && number !== '.') {
      this.currentOperand = number;
    } else {
      this.currentOperand += number;
    }
    this.updateDisplay();
  },
  
  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '0';
    this.updateDisplay();
  },
  
  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch(this.operation) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '×': result = prev * current; break;
      case '÷':
        if (current === 0) {
          alert('Cannot divide by zero!');
          this.clear();
          return;
        }
        result = prev / current;
        break;
      default: return;
    }
    
    this.currentOperand = result.toString();
    this.operation = null;
    this.previousOperand = '';
    this.updateDisplay();
  },
  
  updateDisplay() {
    const currentElem = document.getElementById('currentOperand');
    const previousElem = document.getElementById('previousOperand');
    
    if (currentElem) currentElem.textContent = this.currentOperand;
    if (previousElem) {
      previousElem.textContent = this.operation != null 
        ? `${this.previousOperand} ${this.operation}` 
        : '';
    }
  }
};

// Form Validation
function validateForm(event) {
  event.preventDefault();
  clearErrors();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  let isValid = true;
  
  if (name === '') {
    showError('nameError', 'Name is required!');
    isValid = false;
  } else if (name.length < 3) {
    showError('nameError', 'Name must be at least 3 characters!');
    isValid = false;
  }
  
  if (email === '') {
    showError('emailError', 'Email is required!');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('emailError', 'Please enter a valid email!');
    isValid = false;
  }
  
  if (message === '') {
    showError('messageError', 'Message is required!');
    isValid = false;
  } else if (message.length < 10) {
    showError('messageError', 'Message must be at least 10 characters!');
    isValid = false;
  }
  
  if (isValid) showSuccess();
  return false;
}

function showError(elementId, message) {
  const elem = document.getElementById(elementId);
  if (elem) {
    elem.textContent = message;
    elem.style.display = 'block';
  }
}

function clearErrors() {
  document.querySelectorAll('.error-message').forEach(error => {
    error.textContent = '';
    error.style.display = 'none';
  });
}

function showSuccess() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMessage');
  
  if (form) form.style.display = 'none';
  if (successMsg) successMsg.style.display = 'block';
  
  setTimeout(() => {
    if (form) {
      form.style.display = 'block';
      form.reset();
    }
    if (successMsg) successMsg.style.display = 'none';
  }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log("Week 3 JavaScript loaded! 🚀");
  updateGreeting();
  updateTime();
  displaySkills();
  setInterval(updateTime, 1000);
});
