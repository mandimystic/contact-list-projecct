
// Eventos:

const nombreInput = document.querySelector("#nombre-input");
const phoneInput = document.querySelector("#phone-input");
const formBtn = document.querySelector("#form-btn");
const form = document.querySelector("#form")

// Regexr:

const nombre_regexr = /^[A-Z]{1}[a-z]{0,15} [A-Z]{1}[a-z]{0,11}$/
const phone_regexr = /^[0](412|414|416|426|424|212)[0-9]{7}$/

// Declarar variables de validaciones

let nameValidation = false;
let phoneValidation = false;

// Funcion para validar nya:

const validateInput = (input, regexrValidation) => {

    const infoTest = nombreInput.parentElement.children[1];
    formBtn.disabled = nameValidation && phoneValidation ? false : true;

};

    nombreInput.addEventListener ("input", e => {
    nameValidation = nombre_regexr.test(nombreInput.value);
    validateInput (nombreInput,nameValidation);

});
// Funcion para validar telefono: 


phoneInput.addEventListener("input", e => {
    phoneValidation = phone_regexr.test(phoneInput.value);
    validateInput(phoneInput,phoneValidation);
    });

// para que cuando recargue, vacio 


form.addEventListener("submit", e => {
    e.preventDefault();

// crear el contenido del formulario


const li = document.createElement("li");

// El contenido se rellena segun input usuario

li.innerHTML = `
            
            <button type="button" class="delete-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></button>
            <button type="button" class="edit-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit-svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg></button>
            <input type="text" class="edit-name" value="${nombreInput.value}"readonly>
            <input type="text" class="edit-phone"  value="${phoneInput.value}"readonly>
            
 `;

 // Anexo la Li a la LIST (ya declarada en HTML- UL)

 list.append(li);

 // Limpiar inputs despues de introducir los primeros datos

nombreInput.value = "";
phoneInput.value = "";
validateInput(nombreInput);
validateInput(phoneInput);
nameValidation = false;
phoneValidation = false;
formBtn.disabled = true;

// Se guarden los primeros datos dando paso a escribir un contact nuevo

localStorage.setItem ("listaContactos",list.innerHTML)

});

// Valor y funcion al boton delete

list.addEventListener("click", e => {
    if (e.target.closest(".delete-icon")) {
        e.target.closest(".delete-icon").parentElement.remove()
        localStorage.setItem("listaContactos",list.innerHTML)
    }

// Valor y funcion al boton edit

if (e.target.closest(".edit-icon")) {

    const editIcon = e.target.closest(".edit-icon");

    const editInputname = editIcon.parentElement.children[2];

    const editInputphone = editIcon.parentElement.children[3];

 if (editIcon.classList.contains("editando")) {

 editIcon.classList.remove("editando");


 editInputname.setAttribute("value", editInputname.value);
 editInputphone.setAttribute("value", editInputphone.value);

 editInputname.setAttribute("readonly","true");
 editInputphone.setAttribute("readonly","true");

 editIcon.innerHTML = `
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit-svg">
 <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
 </svg>
             `;

localStorage.setItem("listaContactos", list.innerHTML);
 
 } else {
 
    editIcon.classList.add("editando");

    editInputname.removeAttribute("readonly");
    editInputphone.removeAttribute("readonly");
/*
    editInputname.classList.add("editing");
    editInputphone.classList.add("editing");
*/

    let editnameValidation = true;
    let editphoneValidation = true;


    const validateEdits = (input, regexrValidation) => {

      
        const infoinputs = input.parentElement.children[1];
        editIcon.disabled = editnameValidation && editphoneValidation ? false : true

/*
        if (editnameValidation && editphoneValidation === false){
            editIcon.disabled = true;
        } else {
            editIcon.disabled = false;
        }
*/
        console.log(editIcon);

    }

    editInputname.addEventListener ("input", e => {
    editnameValidation = nombre_regexr.test(editInputname.value);
    validateEdits (editInputname,editnameValidation);
    
    console.log(editnameValidation);
    });

    editInputphone.addEventListener("input", e => {
        editphoneValidation = phone_regexr.test(editInputphone.value);
        validateEdits (editInputphone,editphoneValidation);

        console.log(editphoneValidation);
        });


    /*
    const end = editInputname.value.length;

        editInputname.setSelectionRange(end,end);
        editInputname.focus();
    */

    editIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit-svg">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
    `;


    }
}

});

(() => {
    const localList = localStorage.getItem ("listaContactos");
    list.innerHTML = localList;

})();
