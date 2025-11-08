let current = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', prevStep);
nextBtn.addEventListener('click', nextStep);

function nextStep() {
    if (current < 5) {
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