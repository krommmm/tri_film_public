class Fiche {
	constructor() {
		this.fiche = {};
	}
	afficherNom(nomFichier) { 
		let affichage = `
        <div class="container">
             <h2>Quel est le titre du film du fichier "${nomFichier} ?</h2>
             <form id="ficheNomInput">
                  <input  class="inputFiche" type="text" />
                  <br/>
                   <input type="submit" class="btn red nextGenre medium" value="Suivant">
             </form>
           
        </div>
        `;
		return affichage;
	}
	getNom() {
		let nom = document.getElementById('ficheNomInput');
		let inputFiche = document.querySelector('.inputFiche');
		nom.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log(inputFiche.value);
			let name = inputFiche.value;
			let fiche = { name: name };
			localStorage.setItem('fiche', JSON.stringify(fiche));
		});
	}

	afficherImg() {
		let affichage = `
        <div class="container">
      
             <h2>Ajouter une image du film ?</h2>
             <form id="ficheImageInput">
                 <div id="dropArea">
                     <label for="fileInput" class="fileLabel"><button class="btn red">Telecharger une image</button>
                         <input class="btn red newFile" id="fileInput" type="file" value="telecharger image" />
                        <img id="myImage" alt="" />
                    </label> 
                    <p>ou déposez un fichier</p>
                 </div>
                 <br/>
                   <button type="button" class="btn red final medium">Suivant</button>
             </form>
           
        </div>
        `;
		return affichage;
	}

	afficherGenre() {
		let affichage = `
        <div class="container">
        <h2>Choisir un genre </h2>
      <div class="genre_container center">
       
          
                <div class="genre genre_action" data-genre="action">
                    <p>Action</p>
                </div>
                <div class="genre genre_comedie" data-genre="comedie">
                <p>Comédie</p>
            </div>
            <div class="genre genre_aventure" data-genre="aventure">
            <p>Aventure</p>
        </div>
                <div class="genre genre_sf" data-genre="sf">
                     <p>Sf</p>
                </div>
                <div class="genre genre_anime" data-genre="anime">
                <p>Anime</p>
                 </div>
                 <div class="genre genre_drame" data-genre="drame">
                 <p>Drame</p>
            </div>
            <div class="genre genre_horreur" data-genre="horreur">
            <p>Horreur</p>
       </div>
       <div class="genre genre_romance" data-genre="romance">
       <p>Romance</p>
  </div>
  <div class="genre genre_fantastique" data-genre="fantastique">
  <p>fantastique</p>
</div>
<div data-genre="thriller" class="genre genre_thriller">
<p>thriller</p>
</div>


</div>
<button type="button" class="btn red nextDirector medium">Suivant</button>
        </div>
      
        `;
		return affichage;
	}
	getGenre() {
		document.querySelectorAll('.genre').forEach((genre) => {
			genre.addEventListener('click', () => {
				let myGenre = genre.dataset.genre;
				let storage = JSON.parse(localStorage.getItem('fiche'));
				storage.genre = myGenre;
				localStorage.setItem('fiche', JSON.stringify(storage));
			});
		});
	}
	afficherDirecteur() {
		let affichage = `
        <div class="container">
             <h2>Quel est le réalisateur et l'année ?</h2>
             <form id="ficheRealisateurInput">
                  <label>Réalisateur:</label>
                  <input class="inputFiche" type="text" />
                  <label>Année:</label>
                  <input class="inputYear" type="text" />
                  <br/>
                   <input type="submit" class="btn red nextImg medium" value="Suivant">
             </form>
        </div>
        `;
		return affichage;
	}
	getDirecteur() {
		let directeur = document.getElementById('ficheRealisateurInput');
		let inputFiche = document.querySelector('.inputFiche');
        let inputAnnee = document.querySelector(".inputYear") 
		directeur.addEventListener('submit', (e) => {
			e.preventDefault();

			let directeurValue = inputFiche.value;
            let anneeValue = inputAnnee.value;
			let storage = JSON.parse(localStorage.getItem('fiche'));
			storage.directeur = directeurValue;
            storage.annee = anneeValue;
			localStorage.setItem('fiche', JSON.stringify(storage));
		});
	}
}
export default Fiche;
