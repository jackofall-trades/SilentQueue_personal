import { navigateTo, validateRole } from '../utils/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const roleSelect = document.getElementById('role');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission

            // Basic validation
            if (!emailInput.value || !passwordInput.value || !roleSelect.value) {
                alert('Please fill in all fields');
                return;
            }

            const role = roleSelect.value;
            
            if (!validateRole(role)) {
                alert('Please select a valid role.');
                return;
            }

            // TODO: Add actual authentication here
            // For now, just redirect based on role
            if (role === 'doctor' || role === 'staff') {
                navigateTo('/queue-overview');
            } else if (role === 'patient') {
                navigateTo('/join-queue');
            }
        });
    }
}); 