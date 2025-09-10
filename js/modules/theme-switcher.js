// Theme Switcher Module
function initThemeSwitcher() {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') || 'light';
    const themeLabel = document.getElementById('theme-label');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            themeLabel.textContent = 'Modo Claro';
        } else {
            themeLabel.textContent = 'Modo Escuro';
        }
    }
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeLabel.textContent = 'Modo Claro';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeLabel.textContent = 'Modo Escuro';
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);
}