/* ═══════════════════════════════════════════════════════════════
   OPTIONAL: REAL NODE.JS BACKEND SERVER
   Research Project Manager - Backend API
   
   This is an OPTIONAL file for advanced learning.
   The app works without this using localStorage simulation.
   
   To use this real backend:
   1. Install Node.js
   2. Run: npm init -y
   3. Run: npm install express cors body-parser
   4. Run: node server.js
   5. Backend will run on http://localhost:3000
═══════════════════════════════════════════════════════════════ */

// Import required packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.static('public')); // Serve static files

// In-memory database (replace with MongoDB/MySQL in production)
let projects = [
  {
    id: 1,
    title: 'Roman Urdu Healthcare Chatbot',
    category: 'AI/ML',
    status: 'Completed',
    date: '2024-04-01',
    description: 'AI-powered chatbot using BERT and RoBERTa',
    technologies: 'BERT, RoBERTa, NLP',
    createdAt: new Date().toISOString()
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// API ROUTES (RESTful API)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// GET /api/projects - Get all projects (READ)
app.get('/api/projects', (req, res) => {
  console.log('📖 GET /api/projects - Fetching all projects');
  res.json({
    success: true,
    data: projects,
    count: projects.length
  });
});

// GET /api/projects/:id - Get single project (READ)
app.get('/api/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find(p => p.id === id);
  
  if (project) {
    console.log(`📖 GET /api/projects/${id} - Project found`);
    res.json({ success: true, data: project });
  } else {
    console.log(`❌ GET /api/projects/${id} - Project not found`);
    res.status(404).json({ success: false, message: 'Project not found' });
  }
});

// POST /api/projects - Create new project (CREATE)
app.post('/api/projects', (req, res) => {
  console.log('➕ POST /api/projects - Creating new project');
  
  // Validation
  const { title, category, status, date, description } = req.body;
  
  if (!title || !category || !status || !date || !description) {
    return res.status(400).json({
      success: false,
      message: 'All required fields must be provided'
    });
  }
  
  // Create new project
  const newProject = {
    id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  
  projects.push(newProject);
  
  console.log(`✅ Project created: ${newProject.title}`);
  res.status(201).json({
    success: true,
    message: 'Project created successfully',
    data: newProject
  });
});

// PUT /api/projects/:id - Update project (UPDATE)
app.put('/api/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(p => p.id === id);
  
  if (index === -1) {
    console.log(`❌ PUT /api/projects/${id} - Project not found`);
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  
  // Update project
  projects[index] = {
    ...projects[index],
    ...req.body,
    id: id // Ensure ID doesn't change
  };
  
  console.log(`✏️ PUT /api/projects/${id} - Project updated`);
  res.json({
    success: true,
    message: 'Project updated successfully',
    data: projects[index]
  });
});

// DELETE /api/projects/:id - Delete project (DELETE)
app.delete('/api/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = projects.length;
  
  projects = projects.filter(p => p.id !== id);
  
  if (projects.length < initialLength) {
    console.log(`🗑️ DELETE /api/projects/${id} - Project deleted`);
    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } else {
    console.log(`❌ DELETE /api/projects/${id} - Project not found`);
    res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
});

// GET /api/stats - Get dashboard statistics
app.get('/api/stats', (req, res) => {
  const stats = {
    total: projects.length,
    inProgress: projects.filter(p => p.status === 'In Progress').length,
    completed: projects.filter(p => p.status === 'Completed').length,
    onHold: projects.filter(p => p.status === 'On Hold').length
  };
  
  console.log('📊 GET /api/stats - Fetching statistics');
  res.json({ success: true, data: stats });
});

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h1>🔬 Research Project Manager API</h1>
    <p>Backend server is running!</p>
    <h3>Available Endpoints:</h3>
    <ul>
      <li>GET /api/projects - Get all projects</li>
      <li>GET /api/projects/:id - Get single project</li>
      <li>POST /api/projects - Create new project</li>
      <li>PUT /api/projects/:id - Update project</li>
      <li>DELETE /api/projects/:id - Delete project</li>
      <li>GET /api/stats - Get statistics</li>
    </ul>
    <p><strong>Created by:</strong> Muhammad Afnan Khan</p>
    <p><strong>IWY Tech Week 4 Final Project</strong></p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log('═══════════════════════════════════════════════');
  console.log(`🚀 Backend Server Running!`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`📊 API: http://localhost:${PORT}/api/projects`);
  console.log('═══════════════════════════════════════════════');
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HOW TO USE THIS BACKEND:
   
   1. Install Node.js from nodejs.org
   2. Open terminal in project folder
   3. Run: npm init -y
   4. Run: npm install express cors body-parser
   5. Run: node server.js
   6. Backend starts on http://localhost:3000
   
   Then update app.js to use this backend instead of localStorage!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
