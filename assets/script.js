let current = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', prevStep);
nextBtn.addEventListener('click', nextStep);

// Object to store all CV data
const data = {
    info: {
        name: "",
        job: "",
        email: "",
        phone: "",
        address: "",
        summary: ""
    },
    edu: [],
    exp: [],
    tech: [],
    soft: [],
    lang: []
};

function nextStep() {
    let valid = true;

    // Step 1 validation
    if (current === 1) {
        const name = document.getElementById("fullname").value;
        const nameErr = document.getElementById("erreur-fullname");
        const regex = /^[A-Za-z\s]+$/;

        if (name === "") {
            nameErr.textContent = "s'il vous plait entrez votre nom";
            valid = false;
        } else if (!regex.test(name)) {
            nameErr.textContent = "s'il vous plait entrez votre nom avec les lettres";
            valid = false;
        } else {
            nameErr.textContent = "";
            data.info.name = name;
        }

        const job = document.getElementById("poste").value;
        const jobErr = document.getElementById("erreurPoste");

        if (job === "") {
            jobErr.textContent = "s'il vous plait entrez votre poste";
            valid = false;
        } else if (!regex.test(job)) {
            jobErr.textContent = "s'il vous plait entrez votre poste avec les lettres";
            valid = false;
        } else {
            jobErr.textContent = "";
            data.info.job = job;
        }

        const email = document.getElementById("email").value;
        const emailErr = document.getElementById("erreurEmail");
        const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

        if (email === "") {
            emailErr.textContent = "s'il vous plait entrez votre email";
            valid = false;
        } else if (!emailRegex.test(email)) {
            emailErr.textContent = "s'il vous plait entrez la forme correct d'email";
            valid = false;
        } else {
            emailErr.textContent = "";
            data.info.email = email;
        }

        const phone = document.getElementById("number").value;
        const phoneErr = document.getElementById("erreurPhone");
        const phoneRegex = /^0[5-7]\d{8}$/;

        if (phone === "") {
            phoneErr.textContent = "s'il vous plait entrez votre numero de téléphone";
            valid = false;
        } else if (!phoneRegex.test(phone)) {
            phoneErr.textContent = "s'il vous plait entrez la forme correct de numero de telephone";
            valid = false;
        } else {
            phoneErr.textContent = "";
            data.info.phone = phone;
        }

        const address = document.getElementById("adress").value;
        const addressErr = document.getElementById("erreurAdress");

        if (address === "") {
            addressErr.textContent = "s'il vous plait entrez votre adress";
            valid = false;
        } else {
            addressErr.textContent = "";
            data.info.address = address;
        }

        const summary = document.getElementById("Summary").value;
        const summaryErr = document.getElementById("erreurSummary");

        if (summary === "") {
            summaryErr.textContent = "s'il vous plait entrez votre summary";
            valid = false;
        } else {
            summaryErr.textContent = "";
            data.info.summary = summary;
        }
    }

    // Step 2 validation
    if (current === 2) {
        const list = document.getElementById("listEducation");
        if (list.children.length === 0) {
            alert("Veuillez ajouter au moins une formation");
            valid = false;
        }
    }

    // Step 3 validation
    if (current === 3) {
        const list = document.getElementById("listEsperience");
        if (list.children.length === 0) {
            alert("Veuillez ajouter au moins une expérience");
            valid = false;
        }
    }

    // Step 4 validation
    if (current === 4) {
        const tech = document.getElementById("CompetencesTechniques");
        const soft = document.getElementById("CompetencesTransversals");
        if (tech.children.length === 0 || soft.children.length === 0) {
            alert("Veuillez ajouter au moins une compétence technique et transversale");
            valid = false;
        }
    }

    // Step 5 validation
    if (current === 5) {
        const langs = document.getElementById("listLangues");
        if (langs.children.length === 0) {
            alert("Veuillez ajouter au moins une langue");
            valid = false;
        }
    }

    if (valid && current < 6) {
        current++;
        update();
    }
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

    document.getElementById('line5').className = current >= 6
        ? 'flex-1 h-1 bg-blue-500 mx-2'
        : 'flex-1 h-1 bg-gray-300 mx-2';

    prevBtn.disabled = current === 1;
    nextBtn.disabled = current === 6;

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

    document.getElementById('step6Content').className = current === 6
        ? 'bg-white p-6 rounded-lg shadow'
        : 'bg-white p-6 rounded-lg shadow hidden';

    prevBtn.style.display = current === 1 ? 'none' : 'block';
    nextBtn.style.display = current === 6 ? 'none' : 'block';
}

// Education
const btn = document.getElementById("btn");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const etab = document.getElementById("Etablissement").value;
    const dip = document.getElementById("Diplome").value;
    const dateD = document.getElementById("DateD").value;
    const dateF = document.getElementById("DateF").value;

    if (!etab || !dip || !dateD || !dateF) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    data.edu.push({ etab, dip, dateD, dateF });

    const list = document.getElementById("listEducation");
    const li = document.createElement("li");
    li.className = "w-full flex flex-col";

    li.innerHTML = `
        <div class="flex items-center justify-between border border-green-200 w-full bg-bleu-300 text-black-500 p-2 m-2 rounded-lg shadow-sm">
            <span class="font-medium">Etablissement: <span class="text-gray-500">${etab}</span><br>Diplome: <span class="text-gray-500">${dip}</span><br>début:<span class="text-gray-500">${dateD}</span> fin:<span class="text-gray-500">${dateF}</span></span>
            <div class="flex gap-2">
                <button class="btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-800">supprimer</button>
            </div>
        </div>
    `;

    li.querySelector("button").addEventListener('click', () => {
        const idx = data.edu.findIndex(e => e.etab === etab && e.dip === dip);
        if (idx > -1) data.edu.splice(idx, 1);
        li.remove();
    });

    list.appendChild(li);
    document.getElementById("Etablissement").value = "";
    document.getElementById("Diplome").value = "";
    document.getElementById("DateD").value = "";
    document.getElementById("DateF").value = "";
});

// Experience
const btnE = document.getElementById("btnE");

btnE.addEventListener('click', (e) => {
    e.preventDefault();
    const job = document.getElementById("poste").value;
    const comp = document.getElementById("entreprise").value;
    const dateD = document.getElementById("dateD").value;
    const dateF = document.getElementById("dateF").value;
    const desc = document.getElementById("description").value;

    if (!job || !comp || !dateD || !dateF || !desc) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    data.exp.push({ job, comp, dateD, dateF, desc });

    const list = document.getElementById("listEsperience");
    const li = document.createElement("li");
    li.className = "w-full flex flex-col";

    li.innerHTML = `
        <div class="flex items-center justify-between border border-green-200 w-full bg-bleu-300 text-black-500 p-2 m-2 rounded-lg shadow-sm">
            <span class="font-medium">Poste: <span class="text-gray-500">${job}</span><br>Enreprise: <span class="text-gray-500">${comp}</span><br>Début:<span class="text-gray-500">${dateD}</span> Fin:<span class="text-gray-500">${dateF}</span><br>Description:<span class="text-gray-500">${desc}</span></span>
            <div class="flex gap-2">
                <button class="btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-800">supprimer</button>
            </div>
        </div>
    `;

    li.querySelector("button").addEventListener('click', () => {
        const idx = data.exp.findIndex(e => e.job === job && e.comp === comp);
        if (idx > -1) data.exp.splice(idx, 1);
        li.remove();
    });

    list.appendChild(li);
    document.getElementById("poste").value = "";
    document.getElementById("entreprise").value = "";
    document.getElementById("dateD").value = "";
    document.getElementById("dateF").value = "";
    document.getElementById("description").value = "";
});

// Technical Skills
const btnT = document.getElementById("btnT");

btnT.addEventListener('click', (e) => {
    e.preventDefault();
    const skill = document.getElementById("CompetencesTechnique").value;

    if (!skill) {
        alert("Veuillez entrer une compétence");
        return;
    }

    data.tech.push(skill);

    const ct = document.getElementById("CompetencesTechniques");
    const div = document.createElement("div");
    div.className = "flex items-center justify-between border border-green-200 w-full bg-bleu-300 text-black-500 p-2 m-2 rounded-lg shadow-sm item";

    div.innerHTML = `
        <span class="font-medium">Compétence: <span class="text-gray-500">${skill}</span></span>
        <div class="flex gap-2">
            <button class="btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-800">supprimer</button>
        </div>
    `;

    div.querySelector("button").addEventListener('click', () => {
        const idx = data.tech.indexOf(skill);
        if (idx > -1) data.tech.splice(idx, 1);
        div.remove();
    });

    ct.appendChild(div);
    document.getElementById("CompetencesTechnique").value = "";
});

// Soft Skills
const btnS = document.getElementById("btnS");

btnS.addEventListener('click', (e) => {
    e.preventDefault();
    const skill = document.getElementById("CompetencesTransversal").value;

    if (!skill) {
        alert("Veuillez entrer une compétence");
        return;
    }

    data.soft.push(skill);

    const ctr = document.getElementById("CompetencesTransversals");
    const div = document.createElement("div");
    div.className = "flex items-center justify-between border border-green-200 w-full bg-bleu-300 text-black-500 p-2 m-2 rounded-lg shadow-sm item";

    div.innerHTML = `
        <span class="font-medium">Compétence: <span class="text-gray-500">${skill}</span></span>
        <div class="flex gap-2">
            <button class="btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-800">supprimer</button>
        </div>
    `;

    div.querySelector("button").addEventListener('click', () => {
        const idx = data.soft.indexOf(skill);
        if (idx > -1) data.soft.splice(idx, 1);
        div.remove();
    });

    ctr.appendChild(div);
    document.getElementById("CompetencesTransversal").value = "";
});

// Languages 
document.addEventListener('DOMContentLoaded', function() {
    const btnL = document.getElementById("btnL");
    
    if (btnL) {
        btnL.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = document.getElementById("langues").value;
            const level = document.getElementById("level").value;

            if (!lang || !level) {
                alert("Veuillez entrer une langue et un niveau");
                return;
            }

            data.lang.push({ lang, level });

            const list = document.getElementById("listLangues");
            const div = document.createElement("div");
            div.className = "flex items-center justify-between border border-green-200 w-full bg-blue-50 text-black-500 p-2 mb-2 rounded-lg shadow-sm";

            div.innerHTML = `
                <span class="font-medium">Langue: <span class="text-gray-500">${lang}</span> - Niveau: <span class="text-gray-500">${level}</span></span>
                <div class="flex gap-2">
                    <button class="btn px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-800">supprimer</button>
                </div>
            `;

            div.querySelector("button").addEventListener('click', () => {
                const idx = data.lang.findIndex(l => l.lang === lang && l.level === level);
                if (idx > -1) data.lang.splice(idx, 1);
                div.remove();
            });

            list.appendChild(div);
            document.getElementById("langues").value = "";
            document.getElementById("level").selectedIndex = 0;
        });
    }
});

// Template Selection and Download
let selectedTemplate = 1;

document.addEventListener('DOMContentLoaded', function() {
    const template1Btn = document.getElementById("template1");
    const template2Btn = document.getElementById("template2");
    const downloadBtn = document.getElementById("downloadBtn");

    if (template1Btn) {
        template1Btn.addEventListener('click', () => {
            selectedTemplate = 1;
            template1Btn.classList.add("ring-4", "ring-blue-500");
            template2Btn.classList.remove("ring-4", "ring-green-500");
        });
    }

    if (template2Btn) {
        template2Btn.addEventListener('click', () => {
            selectedTemplate = 2;
            template2Btn.classList.add("ring-4", "ring-green-500");
            template1Btn.classList.remove("ring-4", "ring-blue-500");
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (typeof html2pdf === 'undefined') {
                alert('La bibliothèque PDF n\'est pas encore chargée. Veuillez réessayer.');
                return;
            }

            const html = selectedTemplate === 1 ? getTemplate1() : getTemplate2();
            
            const element = document.createElement('div');
            element.innerHTML = html;
            
            const opt = {
                margin: 10,
                filename: 'CV_' + data.info.name + '.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            
            html2pdf().set(opt).from(element).save();
        });
    }
});

function getTemplate1() {
    return `
    <div style="font-family: Arial, sans-serif; padding: 40px;">
        <h1 style="color: #2563eb; border-bottom: 4px solid #2563eb; padding-bottom: 8px; font-size: 32px; font-weight: bold;">${data.info.name}</h1>
        <p style="font-size: 18px; font-weight: bold; margin-top: 8px;">${data.info.job}</p>
        <p style="color: #374151; margin-top: 4px;">${data.info.email} | ${data.info.phone} | ${data.info.address}</p>
        
        <div style="margin-top: 24px;">
            <h2 style="font-size: 20px; font-weight: bold; color: #1e40af;">Résumé</h2>
            <p style="margin-top: 8px; color: #374151;">${data.info.summary}</p>
        </div>
        
        <div style="margin-top: 24px;">
            <h2 style="font-size: 20px; font-weight: bold; color: #1e40af;">Formation</h2>
            ${data.edu.map(e => `<p style="margin-top: 8px;"><span style="font-weight: bold;">${e.dip}</span> - ${e.etab} <span style="color: #6b7280;">(${e.dateD} - ${e.dateF})</span></p>`).join('')}
        </div>
        
        <div style="margin-top: 24px;">
            <h2 style="font-size: 20px; font-weight: bold; color: #1e40af;">Expérience</h2>
            ${data.exp.map(e => `<div style="margin-top: 12px;"><p style="font-weight: bold;">${e.job}</p><p style="color: #374151;">${e.comp} <span style="color: #6b7280;">(${e.dateD} - ${e.dateF})</span></p><p style="color: #6b7280; margin-top: 4px;">${e.desc}</p></div>`).join('')}
        </div>
        
        <div style="margin-top: 24px;">
            <h2 style="font-size: 20px; font-weight: bold; color: #1e40af;">Compétences Techniques</h2>
            <p style="margin-top: 8px; color: #374151;">${data.tech.join(', ')}</p>
        </div>
        
        <div style="margin-top: 24px;">
            <h2 style="font-size: 20px; font-weight: bold; color: #1e40af;">Compétences Transversales</h2>
            <p style="margin-top: 8px; color: #374151;">${data.soft.join(', ')}</p>
        </div>
        
        <div style="margin-top: 24px;">
            <h2 style="font-size: 20px; font-weight: bold; color: #1e40af;">Langues</h2>
            ${data.lang.map(l => `<p style="margin-top: 8px; color: #374151;">${l.lang}: <span style="font-weight: 600;">${l.level}</span></p>`).join('')}
        </div>
    </div>
`;
}

function getTemplate2() {
    return `
    <div style="background: #f3f4f6; padding: 40px;">
        <div style="background: white; padding: 32px; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 32px; font-weight: bold; color: #059669; text-align: center;">${data.info.name}</h1>
            <p style="text-align: center; font-size: 18px; font-weight: bold; margin-top: 8px;">${data.info.job}</p>
            <p style="text-align: center; color: #374151; margin-top: 4px;">${data.info.email} | ${data.info.phone} | ${data.info.address}</p>
            
            <div style="margin-top: 24px;">
                <h2 style="font-size: 20px; font-weight: bold; color: #047857; border-left: 4px solid #059669; padding-left: 12px;">Résumé</h2>
                <p style="margin-top: 8px; color: #374151;">${data.info.summary}</p>
            </div>
            
            <div style="margin-top: 24px;">
                <h2 style="font-size: 20px; font-weight: bold; color: #047857; border-left: 4px solid #059669; padding-left: 12px;">Formation</h2>
                ${data.edu.map(e => `<p style="margin-top: 8px;"><span style="font-weight: bold;">${e.dip}</span> - ${e.etab} <span style="color: #6b7280;">(${e.dateD} - ${e.dateF})</span></p>`).join('')}
            </div>
            
            <div style="margin-top: 24px;">
                <h2 style="font-size: 20px; font-weight: bold; color: #047857; border-left: 4px solid #059669; padding-left: 12px;">Expérience</h2>
                ${data.exp.map(e => `<div style="margin-top: 12px;"><p style="font-weight: bold;">${e.job}</p><p style="color: #374151;">${e.comp} <span style="color: #6b7280;">(${e.dateD} - ${e.dateF})</span></p><p style="color: #6b7280; margin-top: 4px;">${e.desc}</p></div>`).join('')}
            </div>
            
            <div style="margin-top: 24px;">
                <h2 style="font-size: 20px; font-weight: bold; color: #047857; border-left: 4px solid #059669; padding-left: 12px;">Compétences Techniques</h2>
                <p style="margin-top: 8px; color: #374151;">${data.tech.join(', ')}</p>
            </div>
            
            <div style="margin-top: 24px;">
                <h2 style="font-size: 20px; font-weight: bold; color: #047857; border-left: 4px solid #059669; padding-left: 12px;">Compétences Transversales</h2>
                <p style="margin-top: 8px; color: #374151;">${data.soft.join(', ')}</p>
            </div>
            
            <div style="margin-top: 24px;">
                <h2 style="font-size: 20px; font-weight: bold; color: #047857; border-left: 4px solid #059669; padding-left: 12px;">Langues</h2>
                ${data.lang.map(l => `<p style="margin-top: 8px; color: #374151;">${l.lang}: <span style="font-weight: 600;">${l.level}</span></p>`).join('')}
            </div>
        </div>
    </div>
`;
}