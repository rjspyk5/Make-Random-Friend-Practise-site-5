export function saveDataToLocalStorage(namevalue, emailvalue, message) {
    const existingData = JSON.parse(localStorage.getItem('chatData')) || [];
    const newData = { name: namevalue, email: emailvalue, msz: message };
    existingData.push(newData);
    localStorage.setItem('chatData', JSON.stringify(existingData));
}

export function getDataFromLocalStorage() {
    const allData = JSON.parse(localStorage.getItem('chatData')) || {};
    return allData;
}

export function removeDataFromLocalStorage(email) {
    const existingData = JSON.parse(localStorage.getItem('chatData')) || [];
    const updatedData = existingData.filter((data) => data.email !== email);
    localStorage.setItem('chatData', JSON.stringify(updatedData));
}
