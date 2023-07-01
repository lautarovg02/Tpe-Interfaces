
let registeredUsers = [
    {'id': '1',
     'username': "lautaro02",
     'password': "lautaro",
     'rol': "user",
     'email': "lautaro@gmail.com"
    },
    {'id': '2',
     'username': "agus",
     'password': "agus",
     'rol': "admin",
     'email': "agus@gmail.com"
    },
];

let btns_delete = [];
btns_delete = document.getElementsByClassName('btns-delete');

let table = document.getElementById('table');

function refreshTable(){
    table.innerHTML = '';
    registeredUsers.forEach(element => {
    table.innerHTML += `<tr>
                            <th scope="row">${element.id}</th>
                            <td>${element.username}</td>
                            <td>${element.password}</td>
                            <td>${element.rol}</td>
                            <td>${element.email}</td>
                            <td class="btns-table">
                                <button id="${element.id}" class="btn btn-outline-red btns-delete">Eliminar</button>
                                <button id="${element.id}" class="btn btn-outline-success">Editar</button>
                            </td>
                        </tr>`;
    });
    
    for (let i = 0; i < btns_delete.length; i++) {
        btns_delete[i].addEventListener('click', (e)=>{
            console.log(e.target.id);
            deleteUser(e.target.id);
        });   
    }
}

function deleteUser(id) {
    console.log(btns_delete);
    registeredUsers = registeredUsers.filter(user=>user.id !== id)
    refreshTable();
}


window.addEventListener('load',refreshTable());



