/**
 * App.js - Main Application Entry Point
 * Initializes the SPA router, components, and page rendering
 */

import Router from './router.js';
import PageTransition from './components/pageTransition.js';
import ParticleBackground from './components/particleBg.js';
import { renderNavbar, setActiveNav } from './components/navbar.js';
import { refreshScrollReveal } from './components/scrollReveal.js';
import { renderIntroPage, initIntroPage } from './pages/intro.js';
import { renderProjectsPage, renderProjectDetailPage, initProjectsPage, initProjectDetailPage } from './pages/projects.js';
import { renderSummaryPage, initSummaryPage } from './pages/summary.js';

// ── Initialize App ──
class App {
  constructor() {
    this.router = new Router();
    this.transition = new PageTransition('page-container');
    this.particles = null;
    
    this.init();
  }

  init() {
    // Render navbar
    renderNavbar();

    // Init particle background (subtle on light theme)
    this.particles = new ParticleBackground('particles-canvas');

    // Setup routes
    this.router.addRoute('intro', renderIntroPage);
    this.router.addRoute('projects', renderProjectsPage);
    this.router.addRoute('summary', renderSummaryPage);

    // Handle navigation
    this.router.setNavigateCallback(async (route, params, previousRoute) => {
      await this.handleNavigation(route, params);
    });

    // Back to top button
    this.setupBackToTop();

    // Cursor effect
    this.setupAICursor();

    // Start router
    this.router.start();
  }

  async handleNavigation(route, params) {
    // Update navbar active state
    setActiveNav(route);

    // Determine what to render
    let html;
    let pageId;
    let initFn;

    if (route === 'projects' && params.length > 0) {
      // Project detail view
      html = await renderProjectDetailPage(params[0]);
      pageId = `project-${params[0]}`;
      initFn = initProjectDetailPage;
    } else if (route === 'projects') {
      // Project list view
      html = await renderProjectsPage();
      pageId = 'projects';
      initFn = initProjectsPage;
    } else if (route === 'intro') {
      html = renderIntroPage();
      pageId = 'intro';
      initFn = initIntroPage;
    } else if (route === 'summary') {
      html = renderSummaryPage();
      pageId = 'summary';
      initFn = initSummaryPage;
    } else {
      html = renderIntroPage();
      pageId = 'intro';
      initFn = initIntroPage;
    }

    // Transition to new page
    await this.transition.transition(html, pageId, (pageElement) => {
      // Initialize page-specific logic
      if (initFn) {
        initFn(pageElement);
      }
      // Re-init scroll reveal for new content
      refreshScrollReveal();
    });
  }

  setupAICursor() {
    if (window.matchMedia('(max-width: 900px)').matches) return;

    const cursor = document.createElement('div');
    const dot = document.createElement('div');
    cursor.className = 'ai-cursor';
    dot.className = 'ai-cursor-dot';
    document.body.append(cursor, dot);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    });

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mouseover', (event) => {
      if (event.target.closest('a, button, .project-card, .skill-item, .ai-feature-card')) {
        cursor.classList.add('is-hover');
      }
    });
    document.addEventListener('mouseout', (event) => {
      if (event.target.closest('a, button, .project-card, .skill-item, .ai-feature-card')) {
        cursor.classList.remove('is-hover');
      }
    });
  }

  setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
