let current = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', prevStep);
nextBtn.addEventListener('click', nextStep);

const fullname = document.getElementById("fullname").value
const fullnameErreur = document.getElementById("erreur-fullname")
function nextStep() {

    const strRegex = /^[A-Za-z\s]+$/
    let haserr = true
    if (fullname === "") {
        fullnameErreur.textContent = "s'il vous plait entrez votre nom"
        haserr = false
    }

    else if (!strRegex.test(fullname)) {
        fullnameErreur.textContent = "s'il vous plait entrez votre nom avec les lettres"
        haserr = false
    }
    else {
        fullnameErreur.textContent = "";
    }
    const poste = document.getElementById("poste").value
    const posteErreur = document.getElementById("erreurPoste")

    const strrRegex = /^[A-Za-z\s]+$/
    haserr = true

    if (poste === "") {
        posteErreur.textContent = "s'il vous plait entrez votre poste"
        haserr = false
    }

    else if (!strrRegex.test(poste)) {
        posteErreur.textContent = "s'il vous plait entrez votre poste avec les lettres"
        haserr = false
    }
    else {
        posteErreur.textContent = "";
    }

    const email = document.getElementById("email").value
    const emailErreur = document.getElementById("erreurEmail")
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/
    haserr = true
    if (poste === "") {
        emailErreur.textContent = "s'il vous plait entrez votre email"
        haserr = false
    }

    else if (!emailRegex.test(email)) {
        emailErreur.textContent = "s'il vous plait entrez la forme correct d'email"
        haserr = false
    }
    else {
        emailErreur.textContent = "";
    }

    const number = document.getElementById("number").value
    const erreurPhone = document.getElementById("erreurPhone")
    const phoneRegex = /^0[5-7]\d{8}$/;

    haserr = true
    if (number === "") {
        erreurPhone.textContent = "s'il vous plait entrez votre numero de téléphone"
        haserr = false
    }

    else if (!phoneRegex.test(number)) {
        erreurPhone.textContent = "s'il vous plait entrez la forme correct de numero de telephone"
        haserr = false
    }
    else {
        erreurPhone.textContent = "";
    }

    const adress = document.getElementById("adress").value
    const erreurAdress = document.getElementById("erreurAdress")
    if (adress === "") {
        erreurAdress.textContent = "s'il vous plait entrez votre adress"
        haserr = false
    }
    else {
        erreurAdress.textContent = "";
    }

    const summary = document.getElementById("Summary").value
    const erreurSummary = document.getElementById("erreurSummary")
    if (summary === "") {
        erreurSummary.textContent = "s'il vous plait entrez votre summary"
        haserr = false;
    }
    else {
        erreurSummary.textContent = "";
    }

    if (haserr && current < 5) {
        current++;
        update();
    }
}

//     // if (haserr) {
//     CVdata.personal_info.name = fullname;
//     CVdata.personal_info.poste = poste;
//     CVdata.personal_info.email = email;
//     CVdata.personal_info.phone_number = number;
//     CVdata.personal_info.adress = adress;
//     CVdata.personal_info.summary = summary;
//     localStorage.setItem("data", JSON.stringify(CVdata))
//     // }
//     CVdata.education
//     localStorage.setItem("data", JSON.stringify(CVdata))
// }

function prevStep() {
    if (current > 1) {
        current--;
        update();
    }
}

function update() {
    document.getElementById('step1').className = current >= 1
        ? 'w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold'
        : 'w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold';

    document.getElementById('line1').className = current >= 2
        ? 'flex-1 h-1 bg-blue-500 mx-2'
        : 'flex-1 h-1 bg-gray-300 mx-2';

    document.getElementById('step2').className = current >= 2
        ? 'w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold'
        : 'w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold';

    document.getElementById('line2').className = current >= 3
        ? 'flex-1 h-1 bg-blue-500 mx-2'
        : 'flex-1 h-1 bg-gray-300 mx-2';


    document.getElementById('step3').className = current >= 3
        ? 'w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold'
        : 'w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold';

    document.getElementById('line3').className = current >= 4
        ? 'flex-1 h-1 bg-blue-500 mx-2'
        : 'flex-1 h-1 bg-gray-300 mx-2';


    document.getElementById('step4').className = current >= 4
        ? 'w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold'
        : 'w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold';

    document.getElementById('line4').className = current >= 5
        ? 'flex-1 h-1 bg-blue-500 mx-2'
        : 'flex-1 h-1 bg-gray-300 mx-2';



    document.getElementById('step5').className = current >= 5
        ? 'w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold'
        : 'w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold';

    prevBtn.disabled = current === 1;
    nextBtn.disabled = current === 5;

    document.getElementById('step1Content').className = current === 1
        ? 'bg-white p-6 rounded-lg shadow'
        : 'bg-white p-6 rounded-lg shadow hidden';

    document.getElementById('step2Content').className = current === 2
        ? 'bg-white p-6 rounded-lg shadow'
        : 'bg-white p-6 rounded-lg shadow hidden';

    document.getElementById('step3Content').className = current === 3
        ? 'bg-white p-6 rounded-lg shadow'
        : 'bg-white p-6 rounded-lg shadow hidden';


    document.getElementById('step4Content').className = current === 4
        ? 'bg-white p-6 rounded-lg shadow'
        : 'bg-white p-6 rounded-lg shadow hidden';


    document.getElementById('step5Content').className = current === 5
        ? 'bg-white p-6 rounded-lg shadow'
        : 'bg-white p-6 rounded-lg shadow hidden';

    prevBtn.style.display = current === 1 ? 'none' : 'block';
    nextBtn.style.display = current === 5 ? 'none' : 'block';
}









// validation education 
const Etablissement = document.getElementById("Etablissement").value
const erreurEtab = document.getElementById("erreurEtab")
strRegex = /^[A-Za-z \d\s]+$/
haserr = true
if (fullname === "") {
    fullnameErreur.textContent = "s'il vous plait entrez votre nom"
    haserr = false
}

else if (!strRegex.test(fullname)) {
    fullnameErreur.textContent = "s'il vous plait entrez votre nom avec les lettres"
    haserr = false
}
else {
    fullnameErreur.textContent = "";
}


const Diplome = document.getElementById("Diplome").value
const erreurDip = document.getElementById("erreurDip")

const DateD = document.getElementById("DateD").value
const erreurDateD = document.getElementById("erreurDateD")

const DateF = document.getElementById("DateF").value
const erreurDateF = document.getElementById("erreurDateF")


// dynamique formulaire(education)

const btn = document.getElementById("btn")

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const Etablissement = document.getElementById("Etablissement").value
    const Diplome = document.getElementById("Diplome").value
    const DateD = document.getElementById("DateD").value
    const DateF = document.getElementById("DateF").value
    const educationList = document.getElementById("listEducation");

    const li = document.createElement("li");
    li.className = "w-full flex flex-col";

    li.innerHTML = `
        <div class="flex items-center justify-between border border-green-200 w-full bg-bleu-300 text-black-500 p-2 m-2 rounded-lg  shadow-sm">
            <span class="font-medium">Etablissement: <span class="text-gray-500 ">${Etablissement}</span>  <br> Diplome: <span class="text-gray-500">${Diplome}</span> <br> début:<span class="text-gray-500 "> ${DateD}</span> fin:<span class="text-gray-500 ">${DateF}</span>
            </span>
            <div class="flex gap-2">
                <button class="btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-800">supprimer</button>
            </div>
        </div>
    `;

    li.querySelector("button").addEventListener('click', () => li.remove());
    educationList.appendChild(li);
    document.getElementById("Etablissement").value = "";
    document.getElementById("Diplome").value = "";
    document.getElementById("DateD").value = "";
    document.getElementById("DateF").value = "";
})





// dynamique formulaire(experience)
const btnE = document.getElementById("btnE")

btnE.addEventListener('click', (e) => {
    e.preventDefault();
    const poste = document.getElementById("poste").value
    const entreprise = document.getElementById("entreprise").value
    const dateD = document.getElementById("dateD").value
    const dateF = document.getElementById("dateF").value
    const description=document.getElementById("description").value
    const listEsperience = document.getElementById("listEsperience");

    const li = document.createElement("li");
    li.className = "w-full flex flex-col";

    li.innerHTML = `
        <div class="flex items-center justify-between border border-green-200 w-full bg-bleu-300 text-black-500 p-2 m-2 rounded-lg  shadow-sm">
            <span class="font-medium">Poste: <span class="text-gray-500 ">${poste}</span>  <br> Enreprise: <span class="text-gray-500">${entreprise}</span> <br> Début:<span class="text-gray-500 "> ${dateD}</span> Fin:<span class="text-gray-500 ">${dateF}</span> <br>
            Description:<span class="text-gray-500">${description}</span>
            </span>
            <div class="flex gap-2">
                <button class="btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-800">supprimer</button>
            </div>
        </div>
    `;

    li.querySelector("button").addEventListener('click', () => li.remove());
    listEsperience.appendChild(li);
    document.getElementById("poste").value = "";
    document.getElementById("entreprise").value = "";
    document.getElementById("dateD").value = "";
    document.getElementById("dateF").value = "";
})




















// const CVdata = {
//     personal_info: {
//         name: "",
//         poste: "",
//         picture: "",
//         email: "",
//         phone_number: "",
//         adress: "",
//         summary: "",
//     },
//     education: [],
//     experience: [],
//     skills: [],
// }





// function loadData() {
//     //     if (CVdata.personal_info.name) {
//     //     document.getElementById("fullname").value = CVdata.personal_info.name;
//     // }
//     // if (CVdata.personal_info.poste) {
//     //     document.getElementById("poste").value = CVdata.personal_info.poste;
//     // }
//     // if (CVdata.personal_info.email) {
//     //     document.getElementById("email").value = CVdata.personal_info.email;
//     // }
//     // if (CVdata.personal_info.phone_number) {
//     //     document.getElementById("number").value = CVdata.personal_info.phone_number;
//     // }

//     // if(CVdata.personal_info.adress){
//     //     document.getElementById("adress").value=
//     // }
//     return JSON.parse(localStorage.getItem("data"))
// }
// console.log(loadData())


// let current = 1;

// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// prevBtn.addEventListener('click', prevStep);
// nextBtn.addEventListener('click', nextStep);

// const CVdata = {
//     personal_info: {
//         name: "",
//         poste: "",
//         picture: "",
//         email: "",
//         phone_number: "",
//         adress: "",
//         summary: "",
//     },
//     education: {
//         etablissement: "",
//         diplome: "",
//         dateDebut: "",
//         dateFin: ""
//     },
//     experience: {
//         poste: "",
//         entreprise: "",
//         dateDebut: "",
//         dateFin: "",
//         description: ""
//     },
//     skills: {
//         langages: "",
//         frameworks: "",
//         databases: "",
//         outils: "",
//         softSkills: "",
//         langues: ""
//     }
// };
