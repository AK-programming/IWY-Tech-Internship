/* ═══════════════════════════════════════════════════════════════
   WEEK 4 - FULL STACK PROJECT JAVASCRIPT
   Research Project Manager - Frontend + Backend Simulation
   Muhammad Afnan Khan - IWY Tech Internship
   
   BACKEND CONCEPTS DEMONSTRATED:
   - Data Storage (localStorage = database simulation)
   - CRUD Operations (Create, Read, Update, Delete)
   - Form Handling & Validation
   - Data Processing & Filtering
   - API-like Functions
═══════════════════════════════════════════════════════════════ */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BACKEND SIMULATION - DATA STORAGE (Like a Database!)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// This simulates a backend database using localStorage
// In real backend: MongoDB, MySQL, PostgreSQL
const DB = {
  // Get all projects from "database"
  getAllProjects() {
    const projects = localStorage.getItem('researchProjects');
    return projects ? JSON.parse(projects) : [];
  },
  
  // Save projects to "database"
  saveProjects(projects) {
    localStorage.setItem('researchProjects', JSON.stringify(projects));
  },
  
  // Add new project (CREATE operation)
  addProject(project) {
    const projects = this.getAllProjects();
    project.id = Date.now(); // Generate unique ID
    project.createdAt = new Date().toISOString();
    projects.push(project);
    this.saveProjects(projects);
    return project;
  },
  
  // Update existing project (UPDATE operation)
  updateProject(id, updatedData) {
    const projects = this.getAllProjects();
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
      projects[index] = { ...projects[index], ...updatedData };
      this.saveProjects(projects);
      return projects[index];
    }
    return null;
  },
  
  // Delete project (DELETE operation)
  deleteProject(id) {
    const projects = this.getAllProjects();
    const filtered = projects.filter(p => p.id !== id);
    this.saveProjects(filtered);
    return true;
  },
  
  // Get project by ID (READ operation)
  getProjectById(id) {
    const projects = this.getAllProjects();
    return projects.find(p => p.id === id);
  }
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FRONTEND - UI FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('darkModeToggle');
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Light';
  } else {
    btn.textContent = '🌙 Dark';
  }
}

// Update Dashboard Statistics
function updateDashboard() {
  const projects = DB.getAllProjects();
  
  // Calculate statistics
  const total = projects.length;
  const ongoing = projects.filter(p => p.status === 'In Progress').length;
  const completed = projects.filter(p => p.status === 'Completed').length;
  const paused = projects.filter(p => p.status === 'On Hold').length;
  
  // Update DOM
  document.getElementById('totalProjects').textContent = total;
  document.getElementById('ongoingProjects').textContent = ongoing;
  document.getElementById('completedProjects').textContent = completed;
  document.getElementById('pausedProjects').textContent = paused;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FORM HANDLING - BACKEND VALIDATION & PROCESSING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('projectForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Clear previous errors
    clearErrors();
    
    // Validate form (backend validation simulation)
    if (!validateForm()) {
      return;
    }
    
    // Collect form data (like req.body in Express)
    const formData = {
      title: document.getElementById('projectTitle').value.trim(),
      category: document.getElementById('projectCategory').value,
      status: document.getElementById('projectStatus').value,
      date: document.getElementById('projectDate').value,
      description: document.getElementById('projectDescription').value.trim(),
      technologies: document.getElementById('projectTechnologies').value.trim()
    };
    
    // Process data - Send to "backend" (database)
    const newProject = DB.addProject(formData);
    
    // Show success message
    showSuccess();
    
    // Update UI
    displayProjects();
    updateDashboard();
    
    // Reset form
    form.reset();
    
    // Scroll to projects
    document.getElementById('projects-list').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Initialize on page load
  displayProjects();
  updateDashboard();
});

// Form Validation Function (Backend-style validation)
function validateForm() {
  let isValid = true;
  
  const title = document.getElementById('projectTitle').value.trim();
  const category = document.getElementById('projectCategory').value;
  const status = document.getElementById('projectStatus').value;
  const date = document.getElementById('projectDate').value;
  const description = document.getElementById('projectDescription').value.trim();
  
  // Validation Rules (like backend validation)
  if (title === '') {
    showError('titleError', 'Project title is required!');
    isValid = false;
  } else if (title.length < 5) {
    showError('titleError', 'Title must be at least 5 characters!');
    isValid = false;
  }
  
  if (category === '') {
    showError('categoryError', 'Please select a category!');
    isValid = false;
  }
  
  if (status === '') {
    showError('statusError', 'Please select a status!');
    isValid = false;
  }
  
  if (date === '') {
    showError('dateError', 'Start date is required!');
    isValid = false;
  }
  
  if (description === '') {
    showError('descriptionError', 'Description is required!');
    isValid = false;
  } else if (description.length < 20) {
    showError('descriptionError', 'Description must be at least 20 characters!');
    isValid = false;
  }
  
  return isValid;
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error-msg');
  errorElements.forEach(elem => {
    elem.textContent = '';
    elem.style.display = 'none';
  });
}

function showSuccess() {
  const successMsg = document.getElementById('successMessage');
  successMsg.style.display = 'flex';
  
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
}

function resetForm() {
  document.getElementById('projectForm').reset();
  clearErrors();
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DISPLAY PROJECTS - READ OPERATION (Like API GET request)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function displayProjects() {
  const projects = DB.getAllProjects(); // Fetch from "database"
  const container = document.getElementById('projectsContainer');
  
  if (projects.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <h3>No Projects Yet</h3>
        <p>Start by adding your first research project above!</p>
      </div>
    `;
    return;
  }
  
  // Generate HTML for each project
  container.innerHTML = projects.map(project => `
    <div class="project-card" data-status="${project.status}" data-id="${project.id}">
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <span class="status-badge status-${project.status.replace(' ', '.')}">${project.status}</span>
      </div>
      
      <div class="project-meta">
        <span class="meta-item">📂 ${project.category}</span>
        <span class="meta-item">📅 ${formatDate(project.date)}</span>
      </div>
      
      <p class="project-description">${project.description}</p>
      
      ${project.technologies ? `<p class="meta-item">🛠️ <strong>Tech:</strong> ${project.technologies}</p>` : ''}
      
      <div class="project-actions">
        <button class="btn btn-edit" onclick="openEditModal(${project.id})">
          ✏️ Edit
        </button>
        <button class="btn btn-danger" onclick="deleteProject(${project.id})">
          🗑️ Delete
        </button>
      </div>
    </div>
  `).join('');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FILTER PROJECTS - BACKEND QUERY SIMULATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function filterByStatus(status) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter cards (like database query filtering)
  cards.forEach(card => {
    const cardStatus = card.getAttribute('data-status');
    
    if (status === 'all' || cardStatus === status) {
      card.classList.remove('hidden');
      card.style.display = 'block';
    } else {
      card.classList.add('hidden');
      card.style.display = 'none';
    }
  });
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DELETE PROJECT - DELETE OPERATION (Like API DELETE request)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function deleteProject(id) {
  if (confirm('Are you sure you want to delete this project?')) {
    // Delete from "database"
    DB.deleteProject(id);
    
    // Update UI
    displayProjects();
    updateDashboard();
    
    // Show notification
    alert('✅ Project deleted successfully!');
  }
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EDIT PROJECT - UPDATE OPERATION (Like API PUT/PATCH request)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function openEditModal(id) {
  const project = DB.getProjectById(id);
  if (!project) return;
  
  // Populate form with existing data
  document.getElementById('editProjectId').value = id;
  document.getElementById('editTitle').value = project.title;
  document.getElementById('editCategory').value = project.category;
  document.getElementById('editStatus').value = project.status;
  document.getElementById('editDescription').value = project.description;
  
  // Show modal
  const modal = document.getElementById('editModal');
  modal.classList.add('active');
}

function closeEditModal() {
  const modal = document.getElementById('editModal');
  modal.classList.remove('active');
}

// Handle edit form submission
document.addEventListener('DOMContentLoaded', function() {
  const editForm = document.getElementById('editForm');
  
  editForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('editProjectId').value);
    const updatedData = {
      title: document.getElementById('editTitle').value.trim(),
      category: document.getElementById('editCategory').value,
      status: document.getElementById('editStatus').value,
      description: document.getElementById('editDescription').value.trim()
    };
    
    // Update in "database"
    DB.updateProject(id, updatedData);
    
    // Update UI
    displayProjects();
    updateDashboard();
    closeEditModal();
    
    alert('✅ Project updated successfully!');
  });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  const modal = document.getElementById('editModal');
  if (e.target === modal) {
    closeEditModal();
  }
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SEED DATA - Initial Sample Projects (Like Database Seeding)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function seedSampleData() {
  const projects = DB.getAllProjects();
  
  if (projects.length === 0) {
    const sampleProjects = [
      {
        title: 'Roman Urdu Healthcare Chatbot',
        category: 'AI/ML',
        status: 'Completed',
        date: '2024-04-01',
        description: 'AI-powered chatbot for healthcare in low-resource language. Conference paper authored using BERT and RoBERTa transformer models.',
        technologies: 'BERT, RoBERTa, Transformer Models, NLP'
      },
      {
        title: 'Smart AIoT Virtual Assistant',
        category: 'IoT',
        status: 'In Progress',
        date: '2025-01-15',
        description: 'Sprint to Imagine Cup 2025 Runner-Up project integrating Generative AI with IoT hardware for smart home automation.',
        technologies: 'ESP32, MQTT, Generative AI, IoT'
      },
      {
        title: 'STM32 Real-Time Monitoring System',
        category: 'IoT',
        status: 'Completed',
        date: '2024-07-01',
        description: 'Real-time monitoring system using STM32F429ZI microcontroller with I2C, UART, and SPI communication protocols.',
        technologies: 'STM32, Embedded C, I2C, UART, SPI'
      }
    ];
    
    sampleProjects.forEach(project => {
      DB.addProject(project);
    });
    
    displayProjects();
    updateDashboard();
  }
}

// Uncomment to load sample data on first visit
// seedSampleData();


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SUMMARY OF BACKEND CONCEPTS DEMONSTRATED:
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
// ✅ DATABASE: localStorage = simulated database (in real: MongoDB, MySQL)
// ✅ CRUD OPERATIONS:
//    - CREATE: addProject()
//    - READ: getAllProjects(), getProjectById()
//    - UPDATE: updateProject()
//    - DELETE: deleteProject()
// ✅ DATA VALIDATION: validateForm() - backend validation
// ✅ DATA PROCESSING: Filter, sort, format data
// ✅ API-LIKE FUNCTIONS: DB object acts like REST API
// ✅ FORM HANDLING: Process user input (like req.body in Express)
// ✅ ERROR HANDLING: Validation errors, user feedback
// ✅ STATE MANAGEMENT: Keep UI in sync with data
//
// This demonstrates ALL Week 4 backend concepts! 🎓
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('🚀 Full Stack Project Loaded!');
console.log('Backend Concepts: CRUD Operations, Data Validation, Form Handling');
console.log('Created by: Muhammad Afnan Khan - IWY Tech Week 4');
