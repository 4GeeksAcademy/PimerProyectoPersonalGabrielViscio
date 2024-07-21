
        function showSection(sectionId) {
            // Oculta todas las secciones
            $('section').hide();
            // Muestra solo la sección seleccionada
            $('#' + sectionId).show();
        }
        $(document).ready(function() {
            // Muestra la sección de actividades por defecto
            showSection('actividades');
        });