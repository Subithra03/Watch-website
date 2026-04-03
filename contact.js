 var sidenav=document.querySelector(".side-navbar")
        function shownavbar()
        {
            sidenav.style.left="0"
        }
        function closenavbar()
        {
            sidenav.style.left="-100%"
        }

        (() => {
        'use strict'
         const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
            }, false)
        })
        })()