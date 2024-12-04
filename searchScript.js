document.addEventListener('DOMContentLoaded', () => {
    const jobSearchForm = document.getElementById('job-search-form');
    const skillsInput = document.getElementById('skills-input');
    const locationInput = document.getElementById('location-input');

    // Resume upload functionality
    const resumeInput = document.getElementById('resume');
    const fileNameSpan = document.getElementById('file-name');
    const checkmark = document.getElementById('checkmark');

    // Display uploaded file name
    window.displayFileName = function() {
        if (resumeInput.files.length > 0) {
            fileNameSpan.textContent = resumeInput.files[0].name;
            checkmark.style.display = 'inline';
        } else {
            fileNameSpan.textContent = 'No file chosen';
            checkmark.style.display = 'none';
        }
    }

    // Handle job search form submission
    jobSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const skills = skillsInput.value;
        const location = locationInput.value;
    
        // Redirect to search results page with query parameters
        window.location.href = `searchResults.htm?query=${encodeURIComponent(skills)}&location=${encodeURIComponent(location)}`;
    });
});
