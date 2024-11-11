// Get the filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // change the color of the button 
        document.querySelectorAll('.filter-btn').forEach(button=>{
            button.classList.remove('btn-warning');
            button.classList.add('btn-outline-warning');
        });
        btn.classList.remove('btn-outline-warning');
        btn.classList.add('btn-warning');

        // Filter images
        document.querySelectorAll('.gallery img').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    });
});
