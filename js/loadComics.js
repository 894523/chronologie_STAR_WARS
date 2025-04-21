// Fonction pour afficher/masquer les comics
function toggleComics() {
    const timeline = document.getElementById('comics-timeline');
    const button = document.querySelector('.toggle-button');
    const visible = timeline.style.display === 'block';

    // Toggle visibility of the comics section
    timeline.style.display = visible ? 'none' : 'block';
    button.textContent = visible ? 'Afficher les comics' : 'Masquer les comics';
}

// Charger les comics depuis le fichier JSON
fetch('data/comics.json"C:\Users\antle\Desktop\star wars\data\comics.json"')  // Chemin vers le fichier JSON
    .then(res => res.json())
    .then(data => {
        const comicsTimeline = document.getElementById('comics-timeline');
        const comicsList = document.getElementById('comics-list');

        // Vérifie qu'il y a des comics entre IV et V
        const comicsIVV = data.filter(comic => comic.episode === 'IV-V');
        
        if (comicsIVV.length > 0) {
            // Ajoute chaque comic à la liste
            comicsIVV.forEach(comic => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = comic.url;
                link.textContent = comic.title;
                listItem.appendChild(link);
                comicsList.appendChild(listItem);
            });

            // Affiche la section des comics si elle n'est pas vide
            comicsTimeline.style.display = 'block'; 
        } else {
            // Si aucun comic n'est disponible, on masque la section
            comicsTimeline.style.display = 'none';
        }
    })
    .catch(error => {
        console.error('Erreur lors du chargement des comics:', error);
        // Masque la section en cas d'erreur
        document.getElementById('comics-timeline').style.display = 'none';
    });
