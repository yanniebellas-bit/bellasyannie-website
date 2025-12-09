document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('uniqueButton');
    const content = document.querySelector('.content');

    button.addEventListener('click', () => {
        
        content.classList.toggle('focused');
        
        if (content.classList.contains('focused')) {
            console.log("Focus mode activated!");
            button.textContent = "Click Here!!";
            alert("Welcome To Yannie's Website!!!");
        } else {
            console.log("Focus mode deactivated.");
            button.textContent = "Tap";
        }
    });

    
    content.addEventListener('mouseenter', () => {
        console.log('Hovering over content area.');
    });
});