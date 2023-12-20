import Regex from '../class/utilisateur/regex';
import GestionnaireServices from '../class/service/gestionnaireServices';

const inscription = () => {
	// INSCRIPTION

	let nomInput = document.querySelector('.nameInput');
	let emailInput = document.querySelector('.emailInput');
	let mdpInput = document.querySelector('.mdpInput');

	nomInput.addEventListener('input', (event) => {
		let newUser = new Regex(); 
		let isValid = newUser.testRegexNom(event.target.value);
		let erroMsg = document.querySelector('.msgErrorNom');
		if (isValid) {
			erroMsg.classList.add('hidden');
		} else {
			erroMsg.classList.remove('hidden');
		}
	});

	emailInput.addEventListener('input', (event) => {
		let newUser = new Regex();
		let isValid = newUser.testRegexMail(event.target.value);
		let erroMsg = document.querySelector('.msgErrorEmail');
		if (isValid) {
			erroMsg.classList.add('hidden');
		} else {
			erroMsg.classList.remove('hidden');
		}
	});

	mdpInput.addEventListener('input', (event) => {
		let newUser = new Regex();
		let isValid = newUser.testRegexMdp(event.target.value);
		let erroMsg = document.querySelector('.msgErrorMdp');
		if (isValid) {
			erroMsg.classList.add('hidden');
		} else {
			erroMsg.classList.remove('hidden');
		}
	});

	let formulaireInscription = document.getElementById(
		'formulaireInscription'
	);
	let errorInscription = document.querySelector('.errorInscription');
	let inscriptionReussie = document.querySelector('.inscriptionReussie');

	formulaireInscription.addEventListener('submit', (event) => {
		event.preventDefault();

		(async () => {
			let name = document.querySelector('.nameInput').value;
			let email = document.querySelector('.emailInput').value;
			let password = document.querySelector('.mdpInput').value;

			let requete = new GestionnaireServices().inscription(
				name,
				email,
				password
			);
			let result = await requete;
			console.log(result);
			if (result.msg !== 'Utilisateur créé ! ') {
				setTimeout(() => {
					errorInscription.classList.add('hidden');
				}, 3000);
				errorInscription.classList.remove('hidden');
			} else {
				errorInscription.classList.add('hidden');
				setTimeout(() => {
					inscriptionReussie.classList.add('hidden');
				}, 3000);
				inscriptionReussie.classList.remove('hidden');
			}
		})();
	});
};
export default inscription;
