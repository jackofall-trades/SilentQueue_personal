// Common navigation utilities
const navigateTo = (path) => {
    window.location.href = path;
};

const validateRole = (role) => {
    const validRoles = ['patient', 'doctor', 'staff'];
    return validRoles.includes(role);
};

export { navigateTo, validateRole }; 