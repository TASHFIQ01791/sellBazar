window.onload = function() {
    // Target numbers
    let totalEmployees = 200;
    let happyCustomers = 300;
    let projectsCompleted = 150;

    function autoIncreasing(elementId, target) {
        let count = 0; 
        let interval = setInterval(function() {
            if (count < target) {
                count++;
                document.getElementById(elementId).innerText = count; 
            } else {
                clearInterval(interval); 
            }
        }, 15); // this 15 for setInterver. howfast
    }

    // first one is id and second one is taget number
    autoIncreasing("totalEmployees", totalEmployees);
    autoIncreasing("happyCustomers", happyCustomers);
    autoIncreasing("projectsCompleted", projectsCompleted);
};