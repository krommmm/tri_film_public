import GestionnaireServices from '../class/service/gestionnaireServices';
import Film from '../class/film/film';
import Carrousel from '../class/film/carrousel';

const affichageFilms = async () => {
	let requette = new GestionnaireServices();
	let films = await requette.getFilms();

	let newFilm = new Film(films);
	let filmsContainer = document.querySelector('.films_container');
	let contenuParGenre = newFilm.afficherFilms();
	filmsContainer.appendChild(contenuParGenre);

	// CLOSE MODAL
	document.addEventListener('click', (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('closeModal')) {
			document.querySelector(".modal").innerHTML = `<div class="modal_content">
			<div class="modal_content_container">
				<h3 class="modalName">titre</h3>
				<p>
					Directeur :
					<span class="modalDirecteur little">spielberg</span>
				</p>
				<p>
					Année : <span class="modalAnnee little">1999</span>
				</p>
				<p>genre : <span class="modalGenre little"></span></p>

				<img class="imageModal" />
			</div>
			<div class="myButtons">
				<div class="button-top">
					<button class="closeModal btn red scale">
						close
					</button>
				</div>
				<div class="button-bottom">
					<button class="copy btn-lecture margin">
						Copier le nom du fichier
					</button>
					<a  class="aGogo"
						><button class="goFilm btn-lecture margin">
							<i class="fa-solid fa-caret-right"></i
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lecture
						</button></a
					>
					<button class="deleteFiche btn-lecture margin">
						Supprimer la fiche
					</button>
					<button class="sameDirector btn-lecture margin">
					Films du même réalisateur
				</button>
				</div>
			</div>
		</div>`;
			document.querySelector('.modal').classList.add('hidden');
		}
	});

	document.addEventListener('click', (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('row__poster') || clickedElement.classList.contains("row__poster_Mini")) {
			document.querySelector(".modal").innerHTML = `<div class="modal_content">
			<div class="modal_content_container">
				<h3 class="modalName">titre</h3>
				<p>
					Directeur :
					<span class="modalDirecteur little">spielberg</span>
				</p>
				<p>
					Année : <span class="modalAnnee little">1999</span>
				</p>
				<p>genre : <span class="modalGenre little"></span></p>

				<img class="imageModal" />
			</div>
			<div class="myButtons">
				<div class="button-top">
					<button class="closeModal btn red scale">
						close
					</button>
				</div>
				<div class="button-bottom">
					<button class="copy btn-lecture margin">
						Copier le nom du fichier
					</button>
					<a  class="aGogo"
						><button class="goFilm btn-lecture margin">
							<i class="fa-solid fa-caret-right"></i
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lecture
						</button></a
					>
					<button class="deleteFiche btn-lecture margin">
						Supprimer la fiche
					</button>
					<button class="sameDirector btn-lecture margin">
					Films du même réalisateur
				</button>
				</div>
			</div>
		</div>`;
			
			let id = clickedElement.dataset.id;
			let filmRecherché = films.filter((film) => film._id === id);
			console.log(filmRecherché);
			let titre = filmRecherché[0].name;
			let directeur = filmRecherché[0].director;
			let genre = filmRecherché[0].genre;
			let annee = filmRecherché[0].year;
			let trueName = filmRecherché[0].trueName;
			let img = filmRecherché[0].imageUrl;

			document
				.querySelector('.sameDirector')
				.setAttribute('data-id', `${directeur}`);
			document
				.querySelector('.aGogo')
				.setAttribute(
					`href`,
					`trieuseFilm-master/../../../films/${trueName}`
				);

			document
				.querySelector('.imageModal')
				.setAttribute(
					'src',
					`trieuseFilm-master/../../../images/${img}`
				);

			document.querySelector('.modalName').innerHTML = titre;
			document.querySelector('.modalGenre').innerHTML = genre;
			document.querySelector('.modalAnnee').innerHTML = annee;
			document.querySelector('.modalDirecteur').innerHTML = directeur;

			document.querySelector('.copy').setAttribute('data-id', trueName);
			document.querySelector('.goFilm').setAttribute('data-id', trueName);
			document.querySelector('.deleteFiche').setAttribute('data-id', id);

			document.querySelector('.modal').classList.remove('hidden');
		}
	});

	document.addEventListener('click', (event) => {
		let clickedElement = event.target;

		if (clickedElement.classList.contains('copy')) {
			let rilName = clickedElement.dataset.id;

			let tempTextArea = document.createElement('textArea');
			tempTextArea.value = rilName;

			document.body.appendChild(tempTextArea);

			tempTextArea.select();

			document.execCommand('copy');

			document.body.removeChild(tempTextArea);
		}
	});

	//SUPPRESSION DE LA FICHE
	document.addEventListener('click', async (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('deleteFiche')) {
			let supprimer = prompt(
				'Voulez vous vraiment supprimer cette fiche ? O/N '
			);

			if (supprimer.toLowerCase() !== 'o') {
				return;
			}
			let id = clickedElement.dataset.id;

			let service = new GestionnaireServices();
			service.deleteFiche(id);

			let films = await new GestionnaireServices().getFilms();
			let newFilm = new Film(films);
			let container = newFilm.afficherFilms();
			console.log(container.innerHTML);

			let filmsContainer = document.querySelector('.films_container');
			filmsContainer.innerHTML = '';
			filmsContainer.appendChild(container);
		}
	});

	// AFFICHER FILMS M DIRECTEUR
	document.addEventListener('click', async (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('sameDirector')) {
			let films = await new GestionnaireServices().getFilms();
			let directeur = clickedElement.dataset.id;
			let filmsTriés = films.filter(
				(film) =>
					film.director.trim().toLowerCase() ===
					directeur.trim().toLowerCase()
			);
			
			//ON REMET LA PAGE FILM A JOUR
			let filmsContainer = document.querySelector(".films_container");
			filmsContainer.innerHTML = "";
			filmsContainer.appendChild(new Film(films).afficherFilms());
		

			 //ON REFAIT LE MODAL
			 document.querySelector(".modal").classList.remove("hidden");
			let modalContent = document.querySelector('.modal_content');
			let newModal = `
			<div class="toutou_container">
			<button class="closeModal btn red scale small100">
						close
					</button>
			<div class="newContainer">  
			
			</div>
			</div>
			`;
			modalContent.innerHTML = newModal;
			let newContainer = document.querySelector('.newContainer');
			filmsTriés.forEach((film) => {
				let img = document.createElement('img');
				img.className = `imgSameDirector row__poster_Mini`;
				img.setAttribute('src', `../../images/${film.imageUrl}`);
				img.setAttribute('data-id', `${film._id}`);
				newContainer.appendChild(img);
			});
		}
	});

	// Gestionnaire d'évènement qui change la classe de la nav bar
	window.addEventListener('scroll', () => {
		if (window.scrollY >= 100) {
			nav.classList.add('nav__black');
		} else {
			nav.classList.remove('nav__black');
		}
	});

	// CARROUSEL

	let carrousel1 = new Carrousel();
	let carrousel2 = new Carrousel();
	let carrousel3 = new Carrousel();
	let carrousel4 = new Carrousel();
	let carrousel5 = new Carrousel();
	let carrousel6 = new Carrousel();
	let carrousel7 = new Carrousel();
	let carrousel8 = new Carrousel();
	let carrousel9 = new Carrousel();
	let carrousel10 = new Carrousel();

	document.addEventListener('click', (event) => {
		let clickedElement = event.target;
		if (clickedElement.classList.contains('actionLeft')) {
			carrousel1.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('actionRight')) {
			carrousel1.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('comedieLeft')) {
			carrousel2.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('comedieRight')) {
			carrousel2.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('aventureLeft')) {
			carrousel3.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('aventureRight')) {
			carrousel3.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('sfLeft')) {
			carrousel4.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('sfRight')) {
			carrousel4.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('animeLeft')) {
			carrousel5.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('animeRight')) {
			carrousel5.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('drameLeft')) {
			carrousel6.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('drameRight')) {
			carrousel6.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('horreurLeft')) {
			carrousel7.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('horreurRight')) {
			carrousel7.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('romanceLeft')) {
			carrousel8.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('romanceRight')) {
			carrousel8.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('fantastiqueLeft')) {
			carrousel9.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('fantastiqueRight')) {
			carrousel9.tournerADroite(clickedElement);
		}
		if (clickedElement.classList.contains('thrillerLeft')) {
			carrousel10.tournerAGauche(clickedElement);
		} else if (clickedElement.classList.contains('thrillerRight')) {
			carrousel10.tournerADroite(clickedElement);
		}
	});
};

export default affichageFilms;
