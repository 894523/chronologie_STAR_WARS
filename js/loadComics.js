function toggleComics() {
    const timeline = document.getElementById('comics-timeline');
    const button = document.querySelector('.toggle-button');
    const visible = timeline.style.display === 'block';
    timeline.style.display = visible ? 'none' : 'block';
    button.textContent = visible ? 'Afficher les comics' : 'Masquer les comics';
}

fetch('data/comics.json')
    .then(res => res.json())
    .then(data => {
        const timeline = document.getElementById('comics-timeline');

        data.forEach(section => {
            const title = document.createElement('h3');
            title.textContent = section.periode;
            timeline.appendChild(title);

            const ul = document.createElement('ul');
            section.entries.forEach(entry => {
                const li = document.createElement('li');
                li.innerHTML = `<em>${entry}</em>`;
                ul.appendChild(li);
            });
            timeline.appendChild(ul);
        });
    });
