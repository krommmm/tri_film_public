import GestionnaireServices from '../class/service/gestionnaireServices';
import Fiche from '../class/film/fiche';

const creationFiches = () => {
	let films = null;
	let fichiers = null;
	let question = document.getElementById('question');

	const functionFinal = async () => {
		let input = document.querySelector('.newFile');
		let storage = JSON.parse(localStorage.getItem('fiche'));
		let realName = JSON.parse(localStorage.getItem('trueName'));
		var formData = new FormData();



		formData.append('images', input.files[0]);
		formData.append('name', storage.name);
		formData.append('genre', storage.genre);
		formData.append('director', storage.directeur);
		formData.append('year',parseInt(storage.annee));
		formData.append('trueName',realName);
		// console.log(storage.name);
		// console.log(storage.genre);
		// console.log(storage.directeur);

		//envoie des données:
		
		let requette = new GestionnaireServices();
		let result = await requette.envoieFiche(formData);
		setTimeout(()=>{
			window.location.reload();
		},10)
		console.log(result);

	};

	const functionDirector = () => {
		let newUser = new Fiche();
		setTimeout(() => {
			question.innerHTML = newUser.afficherDirecteur();
			newUser.getDirecteur();
		}, 10);
	};

	const functionGenre = () => {
		let newUser = new Fiche();
		setTimeout(() => {
			question.innerHTML = newUser.afficherGenre();
			newUser.getGenre();
		}, 10);
	};

	const functionImg = async () => {
		let newUser = new Fiche();
		setTimeout(() => {
			question.innerHTML = newUser.afficherImg();
		}, 10);
	};

	const functionNom = async (fichier) => {
		let newUser = new Fiche();
		question.innerHTML = newUser.afficherNom(fichier);
		newUser.getNom();
	};

	(async () => { 
		let user = new GestionnaireServices().getFilms();
		films = await user;
	
		(async () => {
			let user = new GestionnaireServices().getNomDesFichiers();
			fichiers = await user;
	
			for (const fichier of fichiers.fichiers) {
				let isFichierDansFilms = films.some((item) => item.trueName === fichier);
				if (!isFichierDansFilms) {
					// Afficher uniquement le premier fichier qui n'est pas dans la liste des films
				
					localStorage.setItem("trueName",JSON.stringify(fichier));
					functionNom(fichier);
					break;  // Arrêter la boucle après le premier fichier trouvé
				}
			}
		})();
	})();
	

	document.addEventListener('click', (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('nextDirector')) {
			functionDirector();
		}
	});

	document.addEventListener('click', (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('nextGenre')) {
			functionGenre();
		}
	});
	document.addEventListener('click', (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('nextImg')) {
			functionImg();
		}
	});

	document.addEventListener('input', (event) => {
		let inputedElement = event.target;
		if (inputedElement.classList.contains('newFile')) {
			let myImage = document.getElementById('myImage');
			myImage.src = URL.createObjectURL(inputedElement.files[0]);
			myImage.style.transform = 'translateY(0px)';
		}
	});

	document.addEventListener('click', async (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('final')) {
			let myPromise = new Promise((resolve,reject)=>{
				functionFinal();
				setTimeout(()=>{
					resolve();
				},3000);
			});
			await myPromise;
			
		}
	});
};
export default creationFiches;
