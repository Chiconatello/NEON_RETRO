document.addEventListener('DOMContentLoaded', () => {
    let selectedCategory = 'all';

    document.querySelectorAll('.category-btn')?.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            if (category === selectedCategory) return;

            selectedCategory = category;

            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            document.querySelectorAll('.game-card').forEach(game => {
                game.style.display = (category === 'all' || game.dataset.category === category) ? 'block' : 'none';
            });
        });
    });
});
