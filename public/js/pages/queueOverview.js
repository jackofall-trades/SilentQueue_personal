document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        textArrived: document.querySelector('.bg-green-600'),
        assignPatient: document.querySelector('.bg-blue-500'),
        movePatient: document.querySelector('.bg-yellow-500'),
        endConsultation: document.querySelector('.bg-red-500')
    };

    // Text Arrived button handler
    buttons.textArrived?.addEventListener('click', () => {
        // TODO: Implement text arrived functionality
        console.log('Patient has arrived');
    });

    // Assign Patient button handler
    buttons.assignPatient?.addEventListener('click', () => {
        // TODO: Implement assign patient functionality
        console.log('Assigning patient to doctor');
    });

    // Move Patient button handler
    buttons.movePatient?.addEventListener('click', () => {
        // TODO: Implement move patient functionality
        console.log('Moving patient in queue');
    });

    // End Consultation button handler
    buttons.endConsultation?.addEventListener('click', () => {
        // TODO: Implement end consultation functionality
        console.log('Ending consultation');
    });
}); 