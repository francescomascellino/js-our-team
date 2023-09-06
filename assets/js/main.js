/* CONSEGNA
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon divertimento e confermate lettura come al solito!

Dati:
Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg

Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg

Walter Gordon
Office Manager
walter-gordon-office-manager.jpg

Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg

Scott Estrada	
Developer	
scott-estrada-developer.jpg

Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg 
*/

// RECUPERO IL NODO DEL DOM IN CUI INSERIRE IL MARKUP DI BS
const cardContEl = document.getElementById("cardContEl");
const addUserForm = document.getElementById("addUserForm");
const inputName = document.getElementById("inputName");
const inputRole = document.getElementById("inputRole");
const inputImg = document.getElementById("inputImg");


/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */
const team = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordo",
        role: "Office Manager",
        pic: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lope",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrad",
        role: "Developer",
        pic: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg"
    },

];

/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */

//NORMALE CICLO ALL'INTERNO DI UN ARRAY. OGNI INDICE IN CONSOLE E' UN OGGETTO (MEMBER DEL TEAM)
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    // console.log(member);

    /* ORA CICLIAMO ALL'INTERNO DELL'OGGETTO member RECUPERATO CON UN LOOP FOR IN PER RECUPERARE LE PROPRIETA' ED ASSEGNARLE A DELLE VARIABILI */
    for (const key in member) {

        // console.log("Key:", key);

        const value = member[key]
        // console.log("Value:", value);

        const prop = `${key}: ${value}`;
        console.log("Property =", prop);

    }

    // /* MILESTONE 2 + BONUS

    //AD OGNI LOOP DEL CICLO PRINCIPALE...

    //GENERO UNA VARIABILE CON IL PERCORSO DELLE IMMAGINI
    const avatarMarkup = `./assets/img/${member.pic}`;

    // GENERO UNA VARIABILE CON ALL'INTERNO IL MARKUP        
    const cardMarkup =
        `<div class="col-md-4 col-sm-6 g-3">
        <div class="card shadow">
        <img src="${avatarMarkup}" class="card-img-top" alt="member avatar">
        <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">${member.role}</h6>
        </div>
        </div>
        </div>`;

    //INSERISCO IL MARKUP IN PAGINA
    cardContEl.insertAdjacentHTML("beforeend", cardMarkup);

}

/* BONUS EXTRA 
Aggiungete un form in pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall’utente. */

addUserForm.addEventListener("submit", (e) => {

    e.preventDefault();
    let newMember = {
        name: `${inputName.value}`,
        role: `${inputRole.value}`,
        pic: `${inputImg.value}`
    }

    team.push(newMember);

    const avatarMarkup = newMember.pic;

    // GENERO UNA VARIABILE CON ALL'INTERNO IL MARKUP        
    const cardMarkup =
        `<div class="col-md-4 col-sm-6 g-3">
            <div class="card shadow">
            <img src="${avatarMarkup}" class="card-img-top" alt="member avatar">
            <div class="card-body">
                <h5 class="card-title">${newMember.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">${newMember.role}</h6>
            </div>
            </div>
        </div>`;

    //INSERISCO IL MARKUP IN PAGINA
    cardContEl.insertAdjacentHTML("beforeend", cardMarkup);

});

console.log("new team =", team);

//SI POTREBBE INSERIRE UNA FUNZIONE PER AGGIUNGERE IL MEMBRO MA C'E' UN BUG NELLE IMMAGINI DATO CHE QUESTA NON VIENE REALMENTE UPLADATA
function reloadCards(team) {
    cardContEl.innerHTML = "";

    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        // console.log(member);

        /* ORA CICLIAMO ALL'INTERNO DELL'OGGETTO member RECUPERATO CON UN LOOP FOR IN PER RECUPERARE LE PROPRIETA' ED ASSEGNARLE A DELLE VARIABILI */
        for (const key in member) {

            // console.log("Key:", key);

            const value = member[key]
            // console.log("Value:", value);

            const prop = `${key}: ${value}`;
            console.log("Property =", prop);

        }

        // /* MILESTONE 2 + BONUS

        //AD OGNI LOOP DEL CICLO PRINCIPALE...

        //GENERO UNA VARIABILE CON IL PERCORSO DELLE IMMAGINI
        const avatarMarkup = `./assets/img/${member.pic}`;

        // GENERO UNA VARIABILE CON ALL'INTERNO IL MARKUP        
        const cardMarkup =
            `<div class="col-md-4 col-sm-6 g-3">
            <div class="card shadow">
            <img src="${avatarMarkup}" class="card-img-top" alt="member avatar">
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">${member.role}</h6>
            </div>
            </div>
            </div>`;

        //INSERISCO IL MARKUP IN PAGINA
        cardContEl.insertAdjacentHTML("beforeend", cardMarkup);
    }
};

/* TEST RETURN FUNZIONE
function addNewMember() {

    let newMember = {
        name: `Name`,
        role: `Role`,
        pic: `pic`
    }

    return newMember;

}

const newM = addNewMember();
console.log("Return di addNewMember =", newM);
 */
