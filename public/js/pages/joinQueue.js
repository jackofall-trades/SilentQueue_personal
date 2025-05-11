import { navigateTo } from '../utils/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.querySelector('button');
    
    if (enterButton) {
        enterButton.addEventListener('click', () => {
            // TODO: Add validation for form fields
            navigateTo('/queue-status');
        });
    }
}); 