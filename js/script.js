function verif() {
    if (document.inscrit.titre.value.length > 20) {
        alert("Titre est trés long");
        return false;
    }
    else return true
}
function valid() {
    if (document.log.pswd.value.length < 6) {
        alert("password est faible");
        return false;
    }
    else return true

}
function controle() {
    if (document.form.nom.value == '') {
        alert('Le champ ne peut pas rester vide !! Entrer Un Nom');
        return false;
    }
    if (document.form.prenom.value == '') {
        alert('Le champ ne peut pas rester vide !! entrer un prenom');
        return false;
    }
    if (document.form.msg.value == '') {
        alert('Le champ ne peut pas rester vide !! entrer un bio');
        return false;
    }
    if (document.form.email.value == '') {
        alert('Le champ ne peut pas rester vide !! entrer un email');
        return false;
    }
    if (document.form.password.value == '') {
        alert('Le champ ne peut pas rester vide !! entrer un password');
        return false;
    }
}

function passage() {
  alert("Are You Sure !!!");
}
