window.onload = function() {
    const tables = document.getElementsByClassName("tables")[0];
    const header1 = document.getElementsByClassName("header1")[0];
    const wall_background = document.getElementsByClassName("wall-background")[0];

    const headerHeight = header1.offsetHeight; 
    const wallBackgroundHeight = wall_background.offsetHeight; 

    tables.style.height = `calc(100vh - ${headerHeight + wallBackgroundHeight}px - 105px)`;

    const tableElements = document.getElementsByClassName("table");
    
    Array.from(tableElements).forEach((element, index) => {
        element.style.width = `${tables.offsetWidth / 3 + 1}px`; 
        switch (index) {
            case 0: {
                element.style.backgroundColor = 'rgba(0, 106, 124, 0.7)';
            }
            break;
            case 1: {
                element.style.backgroundColor = 'rgba(155, 131, 82, 0.7)';
            }
            break;
            case 2: {
                element.style.backgroundColor = 'rgba(72, 150, 169, 0.6)';
            }
            break;
        }
    });
}
