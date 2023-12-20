// const creationFiche = (nom_fichier) => {
// 	// renomer  anim right
// 	// changer img  + anim left + anim img from sky
// 	// genre  anim
// 	// description + button skip pour ne pas la faire
// };

// if (document.title === 'tri video') {
// 	const directionCreerFicheFilm = (name) => {
// 		let nameFile = name;
// 		console.log(nameFile);
// 		window.location.href = `../html/creationFiche.html?name=${nameFile}`;
// 	};

// 	// afficher une zone de selection en drag and drop
// 	function dropHandler(event) {
// 		event.preventDefault();

// 		// Récupérer le fichier déposé
// 		const file = event.dataTransfer.files[0];

// 		// Vérifier si le fichier est de type MP4
// 		if (file && file.type === 'video/avi') {
// 			// Afficher le nom du fichier
// 			directionCreerFicheFilm(file.name);
// 		} else {
// 			alert('Veuillez déposer un fichier MP4 valide.');
// 		}
// 	}

// 	function dragOverHandler(event) {
// 		event.preventDefault();
// 	}

// 	ondrop = 'dropHandler(event)';
// 	ondragover = 'dragOverHandler(event)';

// 	const dropArea = document.getElementById('dropArea');
// 	dropArea.addEventListener('drop', (e) => dropHandler(e));
// 	dropArea.addEventListener('dragover', (e) => dragOverHandler(e));
// }

// if (document.title === 'Création fiche') {
// 	var str = window.location.href;
// 	var url = new URL(str);
// 	var nom_fichier = url.searchParams.get('name');
// 	console.log(nom_fichier);
// 	creationFiche(nom_fichier);
// }

import inscription from './pages/inscription';
import connexion from './pages/connexion';
import creationFiches from './pages/creationFiches';
import affichageFilms from './pages/affichageFilms';

if (document.title === 'Netflix inscription') {
	inscription();
} else if (document.title === 'Netflix connexion') {
	connexion();
} else if (document.title === 'Netflix Création fiche') {
	creationFiches();
} else if (document.title === 'Netflix home') {
	affichageFilms();
}

// DECONNEXION
document.addEventListener('click', (event) => {
	let clickedElement = event.target;
	if (clickedElement.classList.contains('deco')) {
		sessionStorage.clear();
		window.location.href = '../../index.html';
	}
});
