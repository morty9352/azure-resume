window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://getresumecounter1175.azurewebsites.net/api/GetResumeCounter?code=FKiXe7Dy5Xz9GI4XCfRK1ialb/kdkTdHjSaL2rxCyPc02YfuMdfOYQ==';

const getVisitCount = () => {
    let count = 0;
    fetch(localApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
