class Regex {
	constructor() {
		// données = nom ou prenom ou mdp
		
		this.regexEmail = /[\w-\.]+@[\w-]+\.+[\w]{1,10}$/;
		this.regexNom = /^[@$&!?\w]{2,}$/g; // minimum 2 chars
		this.regexMdp = /^[@$&!?\w]{4,}$/g; // minimum 4 chars
	}

	testRegexMail(email) {
		if (this.regexEmail.test(email)) {
			return true;
		} else {
			return false;
		}
	}
	testRegexNom(nom) {
		if (this.regexNom.test(nom)) {
			return true;
		} else {
			return false;
		}
       
    }
	testRegexMdp(mdp) {
		if (this.regexMdp.test(mdp)) {
			return true;
		} else {
			return false;
		}
	}
}
export default Regex;

