// Les textes de prières et méditations de la neuvaine
const prayers = {
    crossSign: "Au nom du Père, et du Fils, et du Saint-Esprit. Amen.",
    contrition: "Mon Dieu, j'ai un très grand regret de Vous avoir offensé<br>Parce que Vous êtes infiniment bon<br>Et que le péché Vous déplaît.<br>Je prends la ferme résolution,<br>Avec le secours de Votre Sainte Grâce,<br>De ne plus Vous offenser et de faire pénitence.<br>Amen.",
    glory: "Gloire au Père, et au Fils, et au Saint-Esprit, comme il était au commencement, maintenant et toujours, et dans les siècles des siècles. Amen.",
    ourFather: "Notre Père, qui es aux cieux, que ton nom soit sanctifié, que ton règne vienne, que ta volonté soit faite sur la terre comme au ciel. Donne-nous aujourd'hui notre pain de ce jour. Pardonne-nous nos offenses, comme nous pardonnons aussi à ceux qui nous ont offensés. Et ne nous soumets pas à la tentation, mais délivre-nous du mal. Amen.",
    hailMary: "Je vous salue Marie, pleine de grâce ; le Seigneur est avec vous. Vous êtes bénie entre toutes les femmes, et Jésus, le fruit de vos entrailles, est béni. Sainte Marie, Mère de Dieu, priez pour nous, pauvres pécheurs, maintenant et à l'heure de notre mort. Amen.",
    louange: `<strong>Prière de louange :</strong><br><br>
Vierge Marie, Mère du bel Amour, Mère qui n'avez jamais abandonné un enfant qui crie au secours, Mère dont les mains travaillent sans cesse pour vos enfants bien aimés, car elles sont poussées par l'Amour divin et l'infinie Miséricorde qui déborde de votre cœur, tournez votre regard plein de compassion vers moi.<br><br>
Voyez le paquet de « nœuds » qui étouffent ma vie. Vous connaissez mon désespoir et ma douleur. Vous savez combien ces nœuds me paralysent.<br><br>
Marie, Mère que Dieu a chargée de défaire les « nœuds » de la vie de vos enfants, je dépose le ruban de ma vie dans vos mains. Personne, pas même le Malin, ne peut le soustraire à votre aide miséricordieuse.<br><br>
Dans vos mains, il n'y a pas un seul nœud qui ne puisse être défait. Vous êtes l'unique Consolatrice que Dieu m'a donnée, vous êtes la forteresse de mes forces fragiles, la richesse de mes misères, la délivrance de tout ce qui m'empêche d'être avec le Christ.<br><br>
Marie, Vous qui défaites les nœuds, priez pour nous. Amen.`,
    supplication: `<strong>Prière de supplication :</strong><br><br>
Mère toute puissante, par votre grâce et par votre pouvoir d'intercession auprès de votre Fils Jésus, Mon Libérateur, recevez aujourd'hui ce « nœud » que je vous présente :<br><br>
<strong id="user-request-supplication">Votre nœud apparaîtra ici</strong><br><br>
Pour la gloire de Dieu, je vous demande de le défaire et de le défaire pour toujours. J'espère en Vous.<br><br>
Accueillez mon appel. Gardez-moi, guidez-moi, protégez-moi. Vous êtes mon refuge assuré.<br><br>
Marie, Vous qui défaites les nœuds, priez pour nous. Amen.`,
    dailyMeditations: [
        "Marie, en ce premier jour de notre neuvaine, nous nous tournons vers vous avec confiance. Vous qui avez dit oui à Dieu sans condition, aidez-nous à accepter sa volonté dans nos vies. Défaites le premier nœud qui nous entrave : celui du doute et de la peur. Que votre foi illumine la nôtre.",
        "Marie, Mère de l'espérance, en ce deuxième jour, nous vous confions notre manque de confiance en Dieu. Défaites le nœud de l'incertitude et de l'anxiété. Aidez-nous à croire que, même dans les moments sombres, votre Fils est avec nous.",
        "Marie, Mère de la patience, en ce troisième jour, nous vous demandons de défaire le nœud de l'impatience et du découragement. Apprenez-nous à attendre le moment de Dieu, à persévérer dans la prière et à ne jamais perdre espoir, même lorsque tout semble bloqué.",
        "Marie, Mère de la compassion, en ce quatrième jour, nous vous présentons le nœud de nos blessures et de nos amertumes. Aidez-nous à pardonner à ceux qui nous ont offensés, et à nous pardonner à nous-mêmes. Que votre douceur panse nos cœurs et défasse le nœud de la rancune.",
        "Marie, Mère de l'obéissance, en ce cinquième jour, nous vous confions notre difficulté à suivre la volonté de Dieu. Défaites le nœud de notre orgueil et de notre rébellion. Montrez-nous la voie de l'humilité et de l'abandon confiant à la Providence divine.",
        "Marie, Mère du silence, en ce sixième jour, nous vous demandons de défaire le nœud de notre agitation intérieure et de notre bavardage inutile. Apprenez-nous à écouter la voix de Dieu dans le silence de nos cœurs, afin de mieux comprendre sa volonté pour nos vies.",
        "Marie, Mère de la justice, en ce septième jour, nous vous présentons le nœud de l'injustice et du péché dans le monde. Intercédez pour nous afin que nous soyons des instruments de paix et de réconciliation. Aidez-nous à lutter contre le mal en commençant par défaire les nœuds de nos propres faiblesses.",
        "Marie, Mère de la joie, en ce huitième jour, nous vous confions le nœud de la tristesse et de la mélancolie. Aidez-nous à découvrir la joie de l'Évangile, à sourire même dans l'épreuve, et à témoigner de la bonté de Dieu autour de nous.",
        "Marie, Mère de la grâce, en ce neuvième jour, nous vous présentons tous nos nœuds. Défaites-les pour toujours par votre intercession. Aidez-nous à rester unis à votre Fils Jésus, et à vivre dans la paix et la grâce qu'il nous donne. Nous vous remercions, Marie, pour votre amour et votre aide tout au long de cette neuvaine. Amen."
    ],
    mysteries: {
        joyeux: [
            "1. L'Annonciation : Le mystère de l'humilité.",
            "2. La Visitation : Le mystère de la charité.",
            "3. La Nativité : Le mystère de la pauvreté.",
            "4. La Présentation au Temple : Le mystère de l'obéissance.",
            "5. Le Recouvrement de Jésus au Temple : Le mystère de la recherche de Dieu."
        ],
        lumineux: [
            "1. Le Baptême de Jésus au Jourdain : Le mystère de notre filiation divine.",
            "2. Les Noces de Cana : Le mystère de la confiance en Marie.",
            "3. L'Annonce du Royaume de Dieu : Le mystère de la conversion.",
            "4. La Transfiguration : Le mystère de la gloire de Dieu.",
            "5. L'Institution de l'Eucharistie : Le mystère de l'amour sans fin."
        ],
        douloureux: [
            "1. L'Agonie de Jésus au Jardin des Oliviers : Le mystère de la prière confiante.",
            "2. La Flagellation : Le mystère de la mortification.",
            "3. Le Couronnement d'épines : Le mystère de l'humiliation.",
            "4. Le Portement de la Croix : Le mystère de la persévérance.",
            "5. La Crucifixion et la Mort de Jésus : Le mystère du salut."
        ],
        glorieux: [
            "1. La Résurrection : Le mystère de la foi.",
            "2. L'Ascension : Le mystère de l'espérance.",
            "3. La Pentecôte : Le mystère du don de l'Esprit Saint.",
            "4. L'Assomption de Marie : Le mystère de la béatitude.",
            "5. Le Couronnement de Marie : Le mystère de la dévotion filiale."
        ]
    }
};

let currentStep = 1;
const totalSteps = 20;
let novenaDay = 1;
let silenceTimerId;
let userRequest = "";

const steps = document.querySelectorAll('.step-card');
const progressBarFill = document.getElementById('progress-fill');
const dayCounter = document.getElementById('day-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateUI();
    document.getElementById('louange-text').innerHTML = prayers.louange;
    document.getElementById('supplication-text').innerHTML = prayers.supplication;
    document.getElementById('daily-meditation-text').innerText = prayers.dailyMeditations[novenaDay - 1];
    document.getElementById('user-request-supplication').innerText = userRequest || "Décrivez votre nœud à l'étape 4 pour qu'il apparaisse ici.";
    updateRosary();

    // Gestion du clic sur les mystères pour la modale
    document.querySelectorAll('.mystery-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const mysteryType = card.dataset.mystery;
            displayMysteryPopup(prayers.mysteries[mysteryType]);
        });
    });
});

function saveProgress() {
    localStorage.setItem('novenaProgress', JSON.stringify({
        currentStep,
        novenaDay,
        userRequest
    }));
}

function loadProgress() {
    const savedProgress = JSON.parse(localStorage.getItem('novenaProgress'));
    if (savedProgress) {
        currentStep = savedProgress.currentStep;
        novenaDay = savedProgress.novenaDay;
        userRequest = savedProgress.userRequest;
    }
}

function updateUI() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index + 1 === currentStep);
    });

    const progress = (currentStep / totalSteps) * 100;
    progressBarFill.style.width = `${progress}%`;
    dayCounter.innerText = `Jour ${novenaDay} de la Neuvaine`;
    
    // Met à jour les textes des étapes
    updateStepContent();

    // Gestion de l'affichage des boutons
    prevBtn.style.display = currentStep > 1 ? 'block' : 'none';
    nextBtn.style.display = currentStep < totalSteps ? 'block' : 'none';

    // Auto-scroll vers l'étape active
    const activeStepElement = document.getElementById(`step-${currentStep}`);
    if (activeStepElement) {
        activeStepElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        saveProgress();
        updateUI();
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        saveProgress();
        updateUI();
    }
}

function updateStepContent() {
    // Etape 14: Prière de supplication
    const supplicationText = document.getElementById('user-request-supplication');
    if (supplicationText) {
        supplicationText.innerText = userRequest || "Décrivez votre nœud à l'étape 4 pour qu'il apparaisse ici.";
    }

    // Etape 16: Méditation du jour
    const meditationText = document.getElementById('daily-meditation-text');
    if (meditationText) {
        meditationText.innerText = prayers.dailyMeditations[novenaDay - 1] || "Pas de méditation pour ce jour.";
    }
}

function lightCandle() {
    const candle = document.getElementById('candle-1');
    const flame = document.getElementById('flame');
    const status = document.getElementById('candle-status');
    const finalCandle = document.getElementById('final-flame');
    const finalCandleContainer = document.getElementById('candle-20');

    if (!flame.classList.contains('lit')) {
        flame.classList.add('lit');
        candle.classList.add('lit');
        status.innerText = 'Bougie allumée - C’est un moment sacré.';
        
        finalCandle.classList.add('lit');
        finalCandleContainer.classList.add('lit');
    }
}

function extinguishCandle() {
    const finalFlame = document.getElementById('final-flame');
    const finalCandle = document.getElementById('candle-20');
    const status = document.getElementById('final-candle-status');

    if (finalFlame.classList.contains('lit')) {
        finalFlame.classList.remove('lit');
        finalCandle.classList.remove('lit');
        status.innerText = 'Bougie éteinte';

        document.getElementById('flame').classList.remove('lit');
        document.getElementById('candle-1').classList.remove('lit');
        document.getElementById('candle-status').innerText = 'Bougie éteinte - Cliquez pour allumer';
    }
}

function burnIncense() {
    const incense = document.querySelector('.incense');
    const smoke = document.getElementById('smoke');
    const status = document.getElementById('incense-status');

    if (!incense.classList.contains('burning')) {
        incense.classList.add('burning');
        smoke.style.display = 'block';
        status.innerText = 'L’encens brûle...';
    }
}

function takePaper() {
    userRequest = document.getElementById('prayer-request').value;
    const paper = document.getElementById('paper');
    const paperText = document.getElementById('paper-text');

    if (userRequest.trim() !== "") {
        paperText.innerText = 'Papier prêt, en main gauche.';
        paper.style.backgroundColor = '#f7e6a7';
        paper.style.border = '2px solid #e0c98f';
        alert('Votre nœud a été enregistré. N’oubliez pas de le garder dans votre main gauche pendant la prière.');
        document.getElementById('user-request-supplication').innerText = userRequest;
    } else {
        alert('Veuillez d’abord écrire votre nœud.');
    }
}

function crumplePaper() {
    const finalContent = document.getElementById('final-text');
    finalContent.innerHTML = `<img src="https://media.giphy.com/media/l4EpfK94mD4yV84oM/giphy.gif" alt="Papier qui se froisse" style="width: 100%; max-width: 200px; display: block; margin: 20px auto;">`;
    setTimeout(() => {
        finalContent.innerHTML = `<strong>Prière terminée pour aujourd'hui</strong><br><br><em>Demain matin, séparez-vous du papier sur lequel vous avez écrit le nœud en le chiffonnant ou en le brûlant, puis recommencez la neuvaine avec un nouveau nœud si vous le souhaitez.</em>`;
    }, 1500);
}

function nextDay() {
    if (novenaDay < 9) {
        novenaDay++;
        currentStep = 1;
        saveProgress();
        updateUI();
        alert(`Passage au Jour ${novenaDay} de la Neuvaine.`);
    } else {
        alert("La Neuvaine est terminée ! Félicitations.");
        resetNovena();
    }
}

function displayMysteryPopup(mysteriesList) {
    const modal = document.getElementById('mystery-modal');
    const content = document.getElementById('mystery-content');
    content.innerHTML = mysteriesList.join('<br>');
    modal.classList.add('open');
}

function closeMysteryModal() {
    const modal = document.getElementById('mystery-modal');
    modal.classList.remove('open');
}

window.onclick = function(event) {
    const modal = document.getElementById('mystery-modal');
    if (event.target == modal) {
        modal.classList.remove('open');
    }
}

function updateRosary() {
    const firstRosaryContainer = document.getElementById('first-rosary');
    const secondRosaryContainer = document.getElementById('second-rosary');

    const renderRosaryDecades = (container, numberOfDecades) => {
        container.innerHTML = '';
        for (let i = 0; i < numberOfDecades; i++) {
            const decadeDiv = document.createElement('div');
            decadeDiv.classList.add('decade');
            
            const ourFatherBead = document.createElement('div');
            ourFatherBead.classList.add('bead', 'our-father');
            ourFatherBead.dataset.prayer = 'ourFather';
            ourFatherBead.innerText = "NP";
            decadeDiv.appendChild(ourFatherBead);

            for (let j = 0; j < 10; j++) {
                const hailMaryBead = document.createElement('div');
                hailMaryBead.classList.add('bead', 'hail-mary');
                hailMaryBead.dataset.prayer = 'hailMary';
                hailMaryBead.innerText = "JSM";
                decadeDiv.appendChild(hailMaryBead);
            }

            const gloryBead = document.createElement('div');
            gloryBead.classList.add('bead', 'glory');
            gloryBead.dataset.prayer = 'glory';
            gloryBead.innerText = "GP";
            decadeDiv.appendChild(gloryBead);
            container.appendChild(decadeDiv);
        }
    };

    renderRosaryDecades(firstRosaryContainer, 3);
    renderRosaryDecades(secondRosaryContainer, 2);
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('bead')) {
        e.target.classList.toggle('prayed');
        const prayerType = e.target.dataset.prayer;
        const prayerText = prayers[prayerType];
        
        let prayerName = "";
        if (prayerType === 'ourFather') prayerName = "Notre Père";
        else if (prayerType === 'hailMary') prayerName = "Je vous salue Marie";
        else if (prayerType === 'glory') prayerName = "Gloire au Père";
        
        alert(`Vous avez prié un ${prayerName}.`);
    }
});


function startSilence() {
    const timerDisplay = document.getElementById('timer-display');
    const countdown = document.getElementById('countdown');
    const startButton = document.querySelector('#step-19 .btn');

    startButton.style.display = 'none';
    timerDisplay.style.display = 'block';
    
    let timeLeft = 60;
    countdown.innerText = timeLeft;

    silenceTimerId = setInterval(() => {
        timeLeft--;
        countdown.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(silenceTimerId);
            alert("Le temps de silence est terminé. Vous pouvez continuer.");
            startButton.style.display = 'block';
            timerDisplay.style.display = 'none';
            countdown.innerText = '60'; // Réinitialise l'affichage
        }
    }, 1000);
}

function resetNovena() {
    localStorage.clear();
    currentStep = 1;
    novenaDay = 1;
    userRequest = "";
    clearInterval(silenceTimerId);
    updateUI();
    document.location.reload();
}

function exportProgress() {
    const data = JSON.stringify({
        currentStep,
        novenaDay,
        userRequest
    });
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'neuvaine_progres.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importProgress(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            if (importedData && importedData.currentStep && importedData.novenaDay) {
                currentStep = importedData.currentStep;
                novenaDay = importedData.novenaDay;
                userRequest = importedData.userRequest || "";
                saveProgress();
                updateUI();
                alert("Progression importée avec succès !");
            } else {
                alert("Fichier de progression invalide.");
            }
        } catch (error) {
            alert("Erreur lors de la lecture du fichier.");
        }
    };
    reader.readAsText(file);
}
