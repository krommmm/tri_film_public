import Regex from '../class/utilisateur/regex';
import GestionnaireServices from '../class/service/gestionnaireServices';

const connexion = async () => {
	let emailInputCo = document.querySelector('.emailInputCo');

	emailInputCo.addEventListener('input', (event) => {
		let newUser = new Regex();
		let isValid = newUser.testRegexMail(event.target.value);
		let erroMsg = document.querySelector('.msgErrorEmailCo');
		if (isValid) {
			erroMsg.classList.add('hidden');
		} else {
			erroMsg.classList.remove('hidden');
		}
	});

	let formulaireConnexion = document.getElementById('formulaireConnexion');
	let errorConnexion = document.querySelector('.errorCo');

	formulaireConnexion.addEventListener('submit', (event) => {
		event.preventDefault();

		(async () => {
			let email = document.querySelector('.emailInputCo').value;
			let mdp = document.querySelector('.mdpCo').value;

			let requete = new GestionnaireServices().connexion(email, mdp);
			let result = await requete;
			console.log(result);
			if (result.msg !== 'paire mail/mdp incorrecte') {
				let token = result;

				sessionStorage.setItem('token', JSON.stringify(token));
				window.location.href = 'front/html/home.html';
			} else {
				setTimeout(() => {
					errorConnexion.classList.add('hidden');
				}, 3000);
				errorConnexion.classList.remove('hidden');
			}
		})();
	});
};

export default connexion;
