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
console.log(cardContEl);

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
        pic: "angela- caroll - chief - editor.jpg"
    },

    {
        name: "Walter Gordo",
        role: "Office Manager",
        pic: "walter - gordon - office - manager.jpg"
    },

    {
        name: "Angela Lope",
        role: "Social Media Manager",
        pic: "angela - lopez - social - media - manager.jpg",
    },

    {
        name: "Scott Estrad",
        role: "Developer",
        pic: "scott - estrada - developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara - ramos - graphic - designer.jpg"
    },

];

/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */

//NORMALE CICLO ALL'INTERNO DI UN ARRAY. OGNI INDICE IN CONSOLE E' UN OGGETTO (MEMBER DEL TEAM)
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    // console.log(member);

    //ORA CICLIAMO ALL'INTERNO DELL'OGGETTO member RECUPERATO CON UN LOOP FOR IN
    for (const key in member) {

        // console.log("Key:", key);

        const value = member[key]
        // console.log("Value:", value);

        const prop = `${key}: ${value}`;
        console.log("Property =", prop);

        // GENERO UNA VARIABILE CON ALL'INTERNO IL MARKUP
        const avatarMarkup = `./assets/img/${member.pic}`;
        const cardMarkup = `<div class="card col-3">
        <img src="${avatarMarkup}"
        class="card-img-top" alt="member avatar">
        <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">${member.role}</h6>
        </div>
        </div>`;

        cardContEl.insertAdjacentHTML("beforeend", cardMarkup);

    }
}



/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */







