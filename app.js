// Fonction de gestion de la connexion
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les valeurs des champs
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Vérification des champs vides
    if (!username || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Logique basique pour la connexion (ici, c'est une simulation)
    // Par exemple, vous pourriez valider les identifiants ici (ex. appel API)
    localStorage.setItem('username', username);
    window.location.href = 'profile.html';
});

// Affichage du nom d'utilisateur sur la page du profil
window.onload = function() {
    if (window.location.pathname.includes('profile.html')) {
        const username = localStorage.getItem('username');
        
        // Vérification si l'utilisateur est connecté
        if (username) {
            document.getElementById('usernameDisplay').innerText = `Bienvenue, ${username}!`;
        } else {
            // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
            window.location.href = 'login.html';
        }
    }
};

