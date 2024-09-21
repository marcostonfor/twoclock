function conf12h() {
    const config = document.createElement('DETAILS');
    config.setAttribute('id', 'configurar12h');
    const summary = document.createElement('SUMMARY');
    summary.innerHTML = `&#9881;`;
    config.appendChild(summary);
    
    // Verificar si el checkbox ya existe
    if (!document.getElementById('miCheckbox')) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'miCheckbox';
        checkbox.checked = true; // Mostrar <sup> por defecto

        const label = document.createElement('label');
        label.htmlFor = 'miCheckbox'; // Asegúrate de que coincida con el id del checkbox
        label.textContent = 'Ver "am" "pm"';

        // Crear un elemento <style> para manejar la visibilidad de <sup>
        let estils = document.getElementById('dynamicStyles');
        if (!estils) {
            estils = document.createElement('style');
            estils.id = 'dynamicStyles';
            document.head.appendChild(estils);
        }

        // Función para actualizar el estilo de <sup>
        const updateSupVisibility = () => {
            if (checkbox.checked) {
                estils.textContent = `
                    sup {
                        display: inline !important;
                    }
                `;
            } else {
                estils.textContent = `
                    sup {
                        display: none !important;
                    }
                `;
            }
        };

        // Inicializar el estilo de <sup>
        updateSupVisibility();

        // Agregar un evento al checkbox para alternar la visibilidad de <sup>
        checkbox.addEventListener('change', updateSupVisibility);

        const mostrarConfiguracion = document.getElementById('caja12h');
        // Agregar el checkbox y el label al cuerpo del documento
        label.appendChild(checkbox);
        config.appendChild(label);
        mostrarConfiguracion.appendChild(config);
    }
}
