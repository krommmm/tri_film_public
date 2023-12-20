class Film {
	constructor(films) {
		this.films = films;
	}
	afficherFilms() {
		let genres = [
			'action',
			'comedie',
			'aventure',
			'sf',
			'anime',
			'drame',
			'horreur',
			'romance',
			'fantastique',
			'thriller', 
		];
		let container = document.createElement('div');
		container.className = 'containerDesRows';
			let modal = `
			<div class="modal hidden">
				<div class="modal_content">
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
				</div>
				</div>
			`;
			container.innerHTML = modal;

		genres.forEach((genre) => {
			let row = document.createElement('div');
			row.className = 'row';

			let title = document.createElement('h2');
			let titleNode = document.createTextNode(
				`NETFLIX ${genre.toUpperCase()}`
			);
			title.appendChild(titleNode);
			row.appendChild(title);

			let rowPosterSlide = document.createElement('div');
			rowPosterSlide.className = 'row__posters slid1';

		

			for (let i = 0; i < this.films.length; i++) {
				if (this.films[i].genre === `${genre}`) {
					let img = document.createElement('img');
					img.className = 'row__poster';
					img.setAttribute(
						'src',
						`http://localhost:2000/images/${this.films[i].imageUrl}`
					);
                    img.setAttribute("data-id",`${this.films[i]._id}`)

					rowPosterSlide.appendChild(img);
					let left = document.createElement('i');
					left.className = `fa-solid fa-angle-left ${this.films[i].genre}Left`;
					let right = document.createElement('i');
					right.className = `fa-solid fa-angle-right ${this.films[i].genre}Right`;
					row.appendChild(left);
					row.appendChild(right);
				}
			}
			row.appendChild(rowPosterSlide);

		

			container.appendChild(row);
		});

		return container;
	}
}
export default Film;
