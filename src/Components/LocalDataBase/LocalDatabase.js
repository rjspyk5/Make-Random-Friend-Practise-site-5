export function saveDataToLocalStorage(namevalue, emailvalue, message) {
    try {
        // Get existing data from localStorage or initialize an empty array if no data exists
        const existingData = JSON.parse(localStorage.getItem('chatData')) || [];

        // Create a new data object with the provided information
        const newData = { name: namevalue, email: emailvalue, msz: message };

        // Push the new data object to the existing array
        existingData.push(newData);

        // Serialize the updated data array to JSON and store it in localStorage
        localStorage.setItem('chatData', JSON.stringify(existingData));

        return true; // Data saved successfully
    } catch (error) {
        console.error('Error saving data to localStorage:', error);
        return false; // Error occurred while saving data
    }
}

// Function to retrieve data from localStorage by email

export function getDataFromLocalStorage() {
    try {
        const allData = JSON.parse(localStorage.getItem('chatData')) || {};
        return allData;
    } catch (error) {
        console.error('Error retrieving data from localStorage:', error);
        return {}; // Return an empty object if an error occurs
    }
}

export function removeDataFromLocalStorage(email) {
    try {
        // Get existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('chatData')) || [];

        // Filter out the data with the specified email
        const updatedData = existingData.filter((data) => data.email !== email);

        // Serialize the updated data array to JSON and store it in localStorage
        localStorage.setItem('chatData', JSON.stringify(updatedData));

        return true; // Data deleted successfully
    } catch (error) {
        console.error('Error deleting data from localStorage:', error);
        return false; // Error occurred while deleting data
    }
}
