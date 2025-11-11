let current = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', prevStep);
nextBtn.addEventListener('click', nextStep);

function nextStep() {
    const fullname = document.getElementById("fullname").value
    const fullnameErreur = document.getElementById("erreur-fullname")

    const strRegex = /^[A-Za-z]+$/
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

    const strrRegex = /^[A-Za-z]+$/
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

    // if (haserr) {
    CVdata.personal_info.name = fullname;
    CVdata.personal_info.poste = poste;
    CVdata.personal_info.email = email;
    CVdata.personal_info.phone_number = number;
    CVdata.personal_info.adress = adress;
    CVdata.personal_info.summary = summary;
    localStorage.setItem("data", JSON.stringify(CVdata))
    // }
    CVdata.education
    localStorage.setItem("data", JSON.stringify(CVdata))
}

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

const CVdata = {
    personal_info: {
        name: "",
        poste: "",
        picture: "",
        email: "",
        phone_number: "",
        adress: "",
        summary: "",
    },
    education: [],
    experience: [],
    skills: [],
}





function loadData() {
    //     if (CVdata.personal_info.name) {
    //     document.getElementById("fullname").value = CVdata.personal_info.name;
    // }
    // if (CVdata.personal_info.poste) {
    //     document.getElementById("poste").value = CVdata.personal_info.poste;
    // }
    // if (CVdata.personal_info.email) {
    //     document.getElementById("email").value = CVdata.personal_info.email;
    // }
    // if (CVdata.personal_info.phone_number) {
    //     document.getElementById("number").value = CVdata.personal_info.phone_number;
    // }

    // if(CVdata.personal_info.adress){
    //     document.getElementById("adress").value=
    // }
    return JSON.parse(localStorage.getItem("data"))
}
console.log(loadData())

// validation education 

