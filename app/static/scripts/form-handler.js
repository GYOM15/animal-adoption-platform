document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pet-form');
    const inputs = {
        name: document.getElementById('name'),
        species: document.getElementById('species'),
        breed: document.getElementById('breed'),
        age: document.getElementById('age'),
        description: document.getElementById('description'),
        ownerEmail: document.getElementById('ownerEmail'),
        street: document.getElementById('street'),
        city: document.getElementById('city'),
        postalCode: document.getElementById('postalCode')
    };

    // Real-time validation for name
    inputs.name.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (!value) {
            showError(e.target, "Le nom est requis");
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
            showError(e.target, "Le nom ne doit contenir que des lettres");
        } else if (value.length < 3 || value.length > 20) {
            showError(e.target, "Le nom doit contenir entre 3 et 20 caractères");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation for species
    inputs.species.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (!value) {
            showError(e.target, "L'espèce est requise");
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
            showError(e.target, "L'espèce ne doit contenir que des lettres");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation for breed
    inputs.breed.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (!value) {
            showError(e.target, "La race est requise");
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
            showError(e.target, "La race ne doit contenir que des lettres");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation for age
    inputs.age.addEventListener('input', (e) => {
        const value = e.target.value;
        if (!value) {
            showError(e.target, "L'âge est requis");
        } else if (!/^\d+$/.test(value)) {
            showError(e.target, "L'âge doit être un nombre");
        } else if (parseInt(value) < 0 || parseInt(value) > 30) {
            showError(e.target, "L'âge doit être entre 0 et 30 ans");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation for description
    inputs.description.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (!value) {
            showError(e.target, "La description est requise");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation for email
    inputs.ownerEmail.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (!value) {
            showError(e.target, "Le courriel est requis");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            showError(e.target, "Le format du courriel est invalide");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation for street address
    inputs.street.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        const parts = value.split(' ');
        if (!value) {
            showError(e.target, "L'adresse est requise");
        } else if (!/^\d{1,10}\s[a-zA-Z\s]{3,}$/.test(value)) {
            showError(e.target, "L'adresse doit commencer par un numéro suivi de l'adresse");
        } else if (parts.length < 2 || parts.length > 5) {
            showError(e.target, "L'adresse doit contenir entre 2 et 5 mots");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation for city
    inputs.city.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (!value) {
            showError(e.target, "La ville est requise");
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
            showError(e.target, "La ville ne doit contenir que des lettres");
        } else {
            clearError(e.target);
        }
    });

    // Real-time validation and formatting for postal code
    inputs.postalCode.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        
        // Format the postal code
        if (value.length > 3) {
            value = value.slice(0, 3) + ' ' + value.slice(3, 6);
        }
        e.target.value = value;

        // Validate the postal code
        if (!value) {
            showError(e.target, "Le code postal est requis");
        } else if (!/^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/.test(value)) {
            showError(e.target, "Le format du code postal est invalide (ex: H1A 2B3)");
        } else {
            clearError(e.target);
        }
    });

    // Form submission
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     let isValid = true;
    //     let hasErrors = false;

    //     // Check for errors
    //     document.querySelectorAll('.error').forEach(error => {
    //         if (error.textContent) {
    //             hasErrors = true;
    //         }
    //     });

    //     // Check required fields
    //     Object.values(inputs).forEach(input => {
    //         if (!input.value.trim()) {
    //             showError(input, "Ce champ est requis");
    //             isValid = false;
    //         }
    //     });

        
    // });
});