// Real-time validation functions
const validateAnimalName = (value) => {
  return /^[a-zA-Z\s]+$/.test(value);
};

const validateAge = (value) => {
  return /^\d+$/.test(value) && parseInt(value) >= 0 && parseInt(value) <= 30;
};

const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const validateAddress = (value) => {
  const parts = value.trim().split(/\s+/);
  const streetNumber = parts[0];
  const streetWords = parts.slice(1).join(' ');
  
  return /^\d{1,10}$/.test(streetNumber) && 
         /^[a-zA-Z\s]{3,}$/.test(streetWords) && 
         parts.length >= 2 && 
         parts.length <= 5;
};

const validateCity = (value) => {
  return /^[a-zA-Z\s]+$/.test(value);
};

const validatePostalCode = (value) => {
  const cleanPostalCode = value.replace(/\s/g, '').toUpperCase();
  return /^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(cleanPostalCode);
};

const formatPostalCode = (input) => {
  const value = input.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  if (value.length > 3) {
    input.value = `${value.slice(0, 3)} ${value.slice(3, 6)}`;
  } else {
    input.value = value;
  }
};

// Show error message
const showError = (input, message) => {
  const errorElement = document.getElementById(`${input.id}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    input.classList.add('error-input');
  }
};

// Clear error message
const clearError = (input) => {
  const errorElement = document.getElementById(`${input.id}-error`);
  if (errorElement) {
    errorElement.textContent = '';
    input.classList.remove('error-input');
  }
};

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get form elements
  const form = document.getElementById('pet-form');
  const inputs = {
    name: document.getElementById('name'),
    age: document.getElementById('age'),
    species: document.getElementById('species'),
    breed: document.getElementById('breed'),
    description: document.getElementById('description'),
    ownerEmail: document.getElementById('ownerEmail'),
    street: document.getElementById('street'),
    city: document.getElementById('city'),
    postalCode: document.getElementById('postalCode')
  };

  // Real-time validation for animal name
  inputs.name.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    if (!validateAnimalName(value)) {
      showError(e.target, "Le nom ne doit contenir que des lettres");
    } else if (value.length < 3 || value.length > 20) {
      showError(e.target, "Le nom doit contenir entre 3 et 20 caractères");
    } else {
      clearError(e.target);
    }
  });

  // Real-time validation for age
  inputs.age.addEventListener('input', (e) => {
    if (!validateAge(e.target.value)) {
      showError(e.target, "L'âge doit être un nombre entre 0 et 30");
    } else {
      clearError(e.target);
    }
  });

  // Real-time validation for email
  inputs.ownerEmail.addEventListener('input', (e) => {
    if (!validateEmail(e.target.value)) {
      showError(e.target, "Veuillez entrer une adresse courriel valide");
    } else {
      clearError(e.target);
    }
  });

  // Real-time validation for address
  inputs.street.addEventListener('input', (e) => {
    if (!validateAddress(e.target.value)) {
      showError(e.target, "L'adresse doit commencer par un numéro suivi de 3 à 4 mots");
    } else {
      clearError(e.target);
    }
  });

  // Real-time validation for city
  inputs.city.addEventListener('input', (e) => {
    if (!validateCity(e.target.value)) {
      showError(e.target, "La ville ne doit contenir que des lettres");
    } else {
      clearError(e.target);
    }
  });

  // Real-time validation and formatting for postal code
  inputs.postalCode.addEventListener('input', (e) => {
    formatPostalCode(e.target);
    if (!validatePostalCode(e.target.value)) {
      showError(e.target, "Format de code postal invalide (ex: H1A 2B3)");
    } else {
      clearError(e.target);
    }
  });

});