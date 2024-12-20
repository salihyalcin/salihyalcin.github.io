document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Blog search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const articles = document.querySelectorAll('article');

            articles.forEach(article => {
                const title = article.querySelector('h2').textContent.toLowerCase();
                const content = article.querySelector('p').textContent.toLowerCase();
                const isVisible = title.includes(searchTerm) || content.includes(searchTerm);
                article.style.display = isVisible ? 'block' : 'none';
            });
        });
    }

    // Table of Contents generation
    const toc = document.getElementById('toc');
    if (toc) {
        const headings = document.querySelectorAll('.prose h2, .prose h3');
        const tocItems = Array.from(headings).map(heading => {
            const link = document.createElement('a');
            link.textContent = heading.textContent;
            link.href = `#${heading.id}`;
            link.className = heading.tagName === 'H3' ? 'pl-4 text-gray-600 hover:text-gray-900 block' : 'text-gray-900 hover:text-gray-600 block';
            
            // Add heading ID if not present
            if (!heading.id) {
                heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
            }

            return link;
        });

        tocItems.forEach(item => toc.appendChild(item));
    }
}); 