window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})
const functionApiUrl = "https://getresumecounterapi1.azurewebsites.net/api/GetResumeCounter?code=MzOiA2miJ9CgSeO68GJD-WU-QJpaUkVVgu0l_CTuF6mYAzFu8sk4Jw%3D%3D"
const localFunctionApi = "http://localhost:7071/api/GetResumeCounter"

const getVisitCount = () => {
    let count = 30; // Default count in case of error

    fetch(functionApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Function API called successfully");
            count = data.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    return count; // This will return the default count immediately, not waiting for the fetch operation
}
