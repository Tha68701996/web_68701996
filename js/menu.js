fetch("menu.html")
        .then(Response => Response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading menu', error);
        }); 