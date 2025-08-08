// ===== VARIABLES GLOBALES =====
let currentStep = 1;
let candleLit = false;
let marieVisible = false;
let incenseBurning = false;
let paperTaken = false;
let rosaryVisible = false;
const totalSteps = 20;
let completedSteps = [];
let silenceTimer = null;

// ===== GESTION DES ÉTAPES =====
function updateStepVisibility() {
    const steps = document.querySelectorAll('.step-card');
    steps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNumber === currentStep) {
            step.classList.add('active');
            step.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (completedSteps.includes(stepNumber)) {
            step.classList.add('completed');
        }
    });

    // Update progress bar
    const progress = ((completedSteps.length) / totalSteps) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    // Update buttons
    document.getElementById('prev-btn').disabled = currentStep === 1;
    document.getElementById('next-btn').disabled = currentStep === totalSteps;
    
    // Update complete button
    const completeBtn = document.getElementById('complete-btn');
    if (completedSteps.includes(currentStep)) {
        completeBtn.textContent = 'Étape terminée ✓';
        completeBtn.disabled = true;
    } else {
        completeBtn.textContent = 'Terminer cette étape';
        completeBtn.disabled = false;
    }

    // Update user request in prayers
    const userRequest = document.getElementById('prayer-request').value;
    const supplicationElement = document.getElementById('user-request-supplication');
    if (supplicationElement) {
        supplicationElement.textContent = userRequest || '(Votre nœud)';
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateStepVisibility();
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepVisibility();
    }
}

function completeStep() {
    if (!completedSteps.includes(currentStep)) {
        completedSteps.push(currentStep);
        updateStepVisibility();
        
        // Auto-advance to next step after completing
        setTimeout(() => {
            if (currentStep < totalSteps) {
                nextStep();
            }
        }, 1000);
    }
}

// ===== INTERACTIONS SPÉCIFIQUES =====

// Bougie
function lightCandle() {
    const flame = document.getElementById('flame');
    const status = document.getElementById('candle-status');
    
    if (!candleLit) {
        flame.classList.add('lit');
        status.innerHTML = 'Bougie allumée ✨<br><em>La lumière du Christ illumine votre prière</em>';
        candleLit = true;
        
        setTimeout(() => {
            completeStep();
        }, 1500);
    }
}

function extinguishCandle() {
    const flame = document.getElementById('final-flame');
    const status = document.getElementById('final-candle-status');
    
    flame.classList.remove('lit');
    status.innerHTML = 'Bougie éteinte ✅<br><em>Votre prière s\'élève vers le ciel</em>';
    
    setTimeout(() => {
        completeStep();
    }, 1000);
}

// Image de Marie
function showMarie() {
    const marieImg = document.getElementById('marie-img');
    
    if (!marieVisible) {
        marieImg.classList.add('visible', 'fade-in');
        marieImg.innerHTML = '<div style="position: absolute; bottom: 10px; left: 0; right: 0; color: #667eea; font-size: 12px; font-weight: bold;">Marie qui défait les nœuds</div>';
        marieVisible = true;
        
        setTimeout(() => {
            completeStep();
        }, 2000);
    }
}

// Encens
function burnIncense() {
    const smoke = document.getElementById('smoke');
    const status = document.getElementById('incense-status');
    
    if (!incenseBurning) {
        smoke.classList.add('burning');
        status.innerHTML = 'Encens allumé 💨<br><em>Vos prières montent vers le ciel</em>';
        incenseBurning = true;
        
        setTimeout(() => {
            completeStep();
        }, 2000);
    }
}

// Papier
function takePaper() {
    const paper = document.getElementById('paper');
    const paperText = document.getElementById('paper-text');
    const request = document.getElementById('prayer-request').value.trim();
    
    if (request && !paperTaken) {
        paper.classList.add('written', 'in-hand');
        paperText.innerHTML = '<strong>Papier en main gauche</strong><br><em>Votre nœud confié à Marie</em>';
        paperTaken = true;
        
        setTimeout(() => {
            completeStep();
        }, 1500);
    } else if (!request) {
        alert('Veuillez d\'abord écrire votre nœud dans la zone de texte.');
    }
}

// Chapelet
function showRosary() {
    const rosary = document.getElementById('main-rosary');
    
    if (!rosaryVisible) {
        rosary.style.display = 'flex';
        rosary.classList.add('fade-in');
        createRosary(rosary, 50);
        rosaryVisible = true;
        
        setTimeout(() => {
            completeStep();
        }, 1000);
    }
}

function createRosary(container, beadCount) {
    container.innerHTML = '';
    for (let i = 0; i < beadCount; i++) {
        const bead = document.createElement('div');
        bead.classList.add('bead');
        
        // Make every 11th bead larger (Our Father beads)
        if ((i + 1) % 11 === 1) {
            bead.classList.add('large');
        }
        
        bead.addEventListener('click', function() {
            this.classList.toggle('prayed');
            
            // Check if all beads in this rosary are prayed
            const allBeads = container.querySelectorAll('.bead');
            const prayedBeads = container.querySelectorAll('.bead.prayed');
            
            if (prayedBeads.length === allBeads.length) {
                setTimeout(() => {
                    completeStep();
                }, 500);
            }
        });
        
        container.appendChild(bead);
    }
}

// Silence timer
function startSilence() {
    const timer = document.getElementById('timer-display');
    const countdown = document.getElementById('countdown');
    const button = event.target;
    
    button.style.display = 'none';
    timer.style.display = 'block';
    
    let seconds = 60;
    countdown.textContent = seconds;
    
    silenceTimer = setInterval(() => {
        seconds--;
        countdown.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(silenceTimer);
            countdown.textContent = '🕊️';
            countdown.nextElementSibling.textContent = 'Silence terminé. Paix à votre âme.';
            
            setTimeout(() => {
                completeStep();
            }, 2000);
        }
    }, 1000);
}

// Chiffonner le papier
function crumplePaper() {
    const textarea = document.getElementById('prayer-request');
    const paper = document.getElementById('paper');
    
    textarea.classList.add('crumpling');
    paper.classList.add('crumpling');
    
    setTimeout(() => {
        textarea.value = '';
        textarea.placeholder = 'Nouveau nœud pour le prochain jour de la neuvaine...';
        textarea.classList.remove('crumpling');
        textarea.classList.add('fade-in');
        
        paper.classList.remove('crumpling', 'written', 'in-hand');
        document.getElementById('paper-text').textContent = 'Nouveau papier pour demain';
        
        // Reset for next day
        paperTaken = false;
        
        setTimeout(() => {
            textarea.classList.remove('fade-in');
        }, 800);
    }, 1500);
}

// ===== ÉVÉNEMENTS ET INITIALISATION =====

// Initialize rosaries for steps 10 and 18
document.addEventListener('DOMContentLoaded', function() {
    createRosary(document.getElementById('first-rosary'), 33); // 3 decades
    createRosary(document.getElementById('second-rosary'), 22); // 2 decades
    updateStepVisibility();
    
    // Auto-save prayer request
    document.getElementById('prayer-request').addEventListener('input', function() {
        localStorage.setItem('prayerRequest', this.value);
    });

    // Load saved prayer request
    const saved = localStorage.getItem('prayerRequest');
    if (saved) {
        document.getElementById('prayer-request').value = saved;
    }
    
    // Update day counter based on stored data
    const currentDay = localStorage.getItem('novenaDay') || '1';
    document.getElementById('day-counter').textContent = `Jour ${currentDay} de la Neuvaine`;
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' && currentStep < totalSteps) {
        nextStep();
    } else if (e.key === 'ArrowLeft' && currentStep > 1) {
        previousStep();
    } else if (e.key === ' ') {
        e.preventDefault();
        completeStep();
    }
});

// Auto-save progress
setInterval(() => {
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
    localStorage.setItem('currentStep', currentStep.toString());
}, 5000);

// Load saved progress
window.addEventListener('load', function() {
    const savedCompleted = localStorage.getItem('completedSteps');
    const savedCurrent = localStorage.getItem('currentStep');
    
    if (savedCompleted) {
        completedSteps = JSON.parse(savedCompleted);
    }
    
    if (savedCurrent) {
        currentStep = parseInt(savedCurrent);
    }
    
    updateStepVisibility();
});

// ===== FONCTIONS UTILITAIRES =====

// Réinitialiser la neuvaine
function resetNovena() {
    if (confirm('Êtes-vous sûr de vouloir recommencer la neuvaine depuis le début ?')) {
        localStorage.clear();
        location.reload();
    }
}

// Passer au jour suivant
function nextDay() {
    const currentDay = parseInt(localStorage.getItem('novenaDay') || '1');
    const newDay = currentDay < 9 ? currentDay + 1 : 1;
    
    localStorage.setItem('novenaDay', newDay.toString());
    localStorage.removeItem('completedSteps');
    localStorage.removeItem('currentStep');
    
    // Reset variables
    currentStep = 1;
    completedSteps = [];
    candleLit = false;
    marieVisible = false;
    incenseBurning = false;
    paperTaken = false;
    rosaryVisible = false;
    
    // Update display
    document.getElementById('day-counter').textContent = `Jour ${newDay} de la Neuvaine`;
    updateStepVisibility();
}

// Export/Import de la progression (pour sauvegarde)
function exportProgress() {
    const data = {
        currentStep: currentStep,
        completedSteps: completedSteps,
        prayerRequest: localStorage.getItem('prayerRequest'),
        novenaDay: localStorage.getItem('novenaDay')
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `neuvaine_marie_jour${data.novenaDay}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importProgress(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                
                currentStep = data.currentStep || 1;
                completedSteps = data.completedSteps || [];
                
                if (data.prayerRequest) {
                    localStorage.setItem('prayerRequest', data.prayerRequest);
                    document.getElementById('prayer-request').value = data.prayerRequest;
                }
                
                if (data.novenaDay) {
                    localStorage.setItem('novenaDay', data.novenaDay);
                    document.getElementById('day-counter').textContent = `Jour ${data.novenaDay} de la Neuvaine`;
                }
                
                updateStepVisibility();
                alert('Progression importée avec succès !');
                
            } catch (error) {
                alert('Erreur lors de l\'importation du fichier.');
            }
        };
        reader.readAsText(file);
    }
}
