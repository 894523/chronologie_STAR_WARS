// Fonction pour afficher/masquer les comics
function toggleComics() {
    const timeline = document.getElementById('comics-timeline');
    const button = document.querySelector('.toggle-button');
    const visible = timeline.style.display === 'block';
    timeline.style.display = visible ? 'none' : 'block';
    button.textContent = visible ? 'Afficher les comics' : 'Masquer les comics';
}

// Fonction pour charger les comics depuis le fichier JSON
fetch('data/comics.json')
    .then(res => res.json())
    .then(data => {
        const comicsList = document.getElementById('comics-list');
        // Vérifie que nous avons des comics dans la section IV-V
        const comicsIVV = data.comics.filter(comic => comic.episode === 'IV-V');

        // Ajoute chaque comic à la liste
        comicsIVV.forEach(comic => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = comic.url;
            link.textContent = comic.title;
            listItem.appendChild(link);
            comicsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
