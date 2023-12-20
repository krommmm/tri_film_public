class GestionnaireServices {
	constructor() {
		this.inscriptionUrl = `http://localhost:2000/api/auth/signup`;
		this.connexionUrl = `http://localhost:2000/api/auth/login`;
		this.fichiersUrl = `http://localhost:2000/api/fichiers`;
		this.films = `http://localhost:2000/api/films`;
	}
	async inscription(name, email, mdp) {
		try {
			const result = await fetch(this.inscriptionUrl, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: mdp,
				}),
			});
			const resultJson = await result.json();
			return resultJson;
		} catch (err) {
			return err;
		}
	}

	async connexion(email, mdp) {
		try {
			const result = await fetch(this.connexionUrl, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					password: mdp,
				}),
			});
			const resultJson = await result.json();
			return resultJson;
		} catch (err) {
			return err;
		}
	}
	async getFilms() {
		try {
			const result = await fetch(this.films);
			const resultJson = await result.json();
			return resultJson;
		} catch (err) {
			return err;
		}
	}
	async getNomDesFichiers() {
		try {
			const result = await fetch(this.fichiersUrl);
			const resultJson = await result.json();
			return resultJson;
		} catch (err) {
			return err;
		}
	}
	async ouvrirFichier(filmUrl) {
		try {
		  const result = await fetch('http://localhost:2000/api/fichiers', {
			method: 'POST',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ fichier: filmUrl }),
		  });
	
		  const resultJson = await result.json();
		  return resultJson;
		} catch (err) {
		  throw err;
		}
	  }

	async envoieFiche(data) {
		try {
			const result = await fetch(this.films, {
				method: 'POST',
				body: data,
			});
			const resultJson = await result.json();
			return resultJson;
		} catch (err) {
			return err;
		}
	}

	async deleteFiche(id) {
		try {
			const result = await fetch(
				`http://localhost:2000/api/films/${id}`,
				{
					method: 'DELETE',
					
				}
			);
			const resultJson = await result.json();
			return resultJson;
		} catch (err) {
			return err;
		}
	}
}

export default GestionnaireServices;
