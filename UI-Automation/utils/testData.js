const username = 'Admin';
const password = 'admin123';

module.exports = {
    username,
    password
};

function getRandomEmployee() {
    const number = Math.floor(Math.random() * 10000);

    return {
        firstName: 'Test' + number,
        lastName: 'Employee'
    };
}

module.exports.getRandomEmployee = getRandomEmployee;