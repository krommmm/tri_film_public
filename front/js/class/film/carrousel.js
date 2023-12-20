class Carrousel {
	constructor() {
		this.cpt = 0;
	}
	tournerAGauche(clickedElement) {
		let row = clickedElement.closest('.row');
		let row_width = row.getBoundingClientRect().width;
		let row_posters = row.querySelector('.row__posters');
		let row_posters_width = row_posters.getBoundingClientRect().width;
		let img = row.querySelector('.row__poster');
		let img_width = img.getBoundingClientRect().width;

		if (this.cpt > 0) {
			this.cpt--;
		}

		let transfert = row_posters_width * this.cpt;

		let nbElementsVisibles = Math.floor(row_posters_width / img_width);
		let nbElements = row_posters.childElementCount;
		let nombreDeClicksNeeded = Math.floor(nbElements / nbElementsVisibles);

		row_posters.style.transform = `translateX(${-transfert}px)`;

		return this.cpt;
	}

	tournerADroite(clickedElement) {
		let row = clickedElement.closest('.row');
		let row_width = row.getBoundingClientRect().width;
		let row_posters = row.querySelector('.row__posters');
		let row_posters_width = row_posters.getBoundingClientRect().width;
		let img = row.querySelector('.row__poster');
		let img_width = img.getBoundingClientRect().width;

		let nbElementsVisibles = Math.floor(row_posters_width / img_width);
		let nbElements = row_posters.childElementCount;
		let nombreDeClicksNeeded = Math.floor(nbElements / nbElementsVisibles);

		if (this.cpt === nombreDeClicksNeeded) {
			this.cpt = 0;
		} else if (this.cpt < nombreDeClicksNeeded) {
			this.cpt++;
		}

		let transfert = row_posters_width * this.cpt;

		row_posters.style.transform = `translateX(${-transfert}px)`;

		return this.cpt;
	}
}
export default Carrousel;
