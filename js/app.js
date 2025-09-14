import { projects } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- STATE ---
    const state = {
        currentFilter: 'Security & AI'
    };

    // --- DOM SELECTORS ---
    const dom = {
        projectGrid: document.getElementById('project-grid'),
        projectFilters: document.getElementById('project-filters'),
        navLinks: document.querySelectorAll('.nav-link'),
        sections: document.querySelectorAll('.hero-section, .projects-section'),
        backToTopButton: document.querySelector('.back-to-top')
    };

    // --- RENDER FUNCTIONS ---
    function renderProjects() {
        const projectsToRender = state.currentFilter === 'All'
            ? projects
            : projects.filter(p => p.category === state.currentFilter);

        dom.projectGrid.innerHTML = ''; // Clear existing projects

        if (projectsToRender.length === 0) {
            dom.projectGrid.innerHTML = '<p class="no-projects">No projects found in this category.</p>';
            return;
        }

        projectsToRender.forEach((project, index) => {
            const card = document.createElement('article'); // Use <article> for semantics
            card.className = 'project-card';
            card.dataset.id = project.id;
            card.style.animationDelay = `${index * 0.07}s`; // Snappier animation

            card.innerHTML = `
                <header>
                    <h3>${project.title}</h3>
                </header>
                <p class="description">${project.description}</p>
                <p class="tech-tags">${project.tech.join(' • ')}</p>
                <button class="details-button" aria-expanded="false" aria-controls="details-${project.id}">View Details</button>
                <div class="project-details" id="details-${project.id}">
                    <h4>Problem</h4>
                    <p>${project.problem}</p>
                    <h4>Solution</h4>
                    <p>${project.solution}</p>
                    <h4>Impact</h4>
                    <p>${project.impact}</p>
                </div>
            `;
            dom.projectGrid.appendChild(card);
        });
    }

    function renderFilters() {
        const categories = ['All', ...new Set(projects.map(p => p.category))];
        dom.projectFilters.innerHTML = categories.map(category => {
            const isActive = category === state.currentFilter ? 'active' : '';
            return `<button class="filter-btn ${isActive}" data-filter="${category}">${category}</button>`;
        }).join('');
    }

    // --- EVENT HANDLERS & LOGIC ---
    function handleFilterClick(e) {
        const target = e.target;
        if (!target.matches('.filter-btn')) return;
        
        state.currentFilter = target.dataset.filter;
        
        // More efficient update: don't re-render all buttons
        dom.projectFilters.querySelector('.active').classList.remove('active');
        target.classList.add('active');
        
        renderProjects();
    }

    function handleDetailsClick(e) {
        if (!e.target.matches('.details-button')) return;
        const button = e.target;
        const detailsDiv = button.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            detailsDiv.style.maxHeight = '0px';
            button.setAttribute('aria-expanded', 'false');
            button.textContent = 'View Details';
        } else {
            detailsDiv.style.maxHeight = `${detailsDiv.scrollHeight}px`;
            button.setAttribute('aria-expanded', 'true');
            button.textContent = 'Hide Details';
        }
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                dom.navLinks.forEach(link => {
                    link.classList.remove('active');
                    const linkHref = link.getAttribute('href');
                    if (linkHref === `#${id}`) {
                        link.classList.add('active');
                    }
                });
                dom.backToTopButton.classList.toggle('visible', id !== 'hero');
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' }); // Trigger when section is in middle of viewport

    // --- INITIALIZATION ---
    function init() {
        // Add event listeners
        dom.projectFilters.addEventListener('click', handleFilterClick);
        dom.projectGrid.addEventListener('click', handleDetailsClick);
        dom.backToTopButton.addEventListener('click', () => document.getElementById('hero').scrollIntoView());

        // Set up observers
        dom.sections.forEach(section => sectionObserver.observe(section));

        // Initial Render
        renderFilters();
        renderProjects();
    }

    init();
});