function toggleDropdown(buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

toggleDropdown('dropdown-button-1', 'dropdown-menu-1');
toggleDropdown('dropdown-button-2', 'dropdown-menu-2');

function setupSearch(inputId, menuId) {
    const input = document.getElementById(inputId);
    const menu = document.getElementById(menuId);
    input.addEventListener('input', () => {
        const filter = input.value.toLowerCase();
        const items = menu.getElementsByTagName('a');
        for (let i = 0; i < items.length; i++) {
            const text = items[i].textContent || items[i].innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    });
}

setupSearch('search-input-1', 'dropdown-menu-1');
setupSearch('search-input-2', 'dropdown-menu-2');