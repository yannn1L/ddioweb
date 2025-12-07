// Database makanan Indonesia dan internasional yang sehat
const FOOD_DATABASE = {
    traditional: [
        { 
            name: "Nasi Merah + Ikan Bakar + Lalapan", 
            calories: 450, 
            protein: 25, 
            carbs: 55, 
            fat: 12, 
            type: "lunch/dinner",
            category: "traditional",
            ingredients: ["Nasi merah", "Ikan kembung", "Timun", "Selada", "Sambal"]
        },
        { 
            name: "Sayur Asem + Tempe Goreng + Nasi Merah", 
            calories: 400, 
            protein: 18, 
            carbs: 60, 
            fat: 10, 
            type: "lunch/dinner",
            category: "traditional",
            ingredients: ["Nasi merah", "Tempe", "Labu siam", "Kacang panjang", "Asam jawa"]
        },
        { 
            name: "Gado-gado (tanpa lontong)", 
            calories: 350, 
            protein: 15, 
            carbs: 40, 
            fat: 15, 
            type: "lunch/dinner",
            category: "traditional",
            ingredients: ["Sayuran rebus", "Tahu", "Tempe", "Telur", "Bumbu kacang"]
        },
        { 
            name: "Soto Ayam (tanpa santan)", 
            calories: 300, 
            protein: 20, 
            carbs: 25, 
            fat: 12, 
            type: "lunch/dinner",
            category: "traditional",
            ingredients: ["Dada ayam", "Soun", "Kol", "Tauge", "Kaldu ayam"]
        },
        { 
            name: "Pepes Ikan + Tumis Kangkung", 
            calories: 380, 
            protein: 28, 
            carbs: 30, 
            fat: 15, 
            type: "lunch/dinner",
            category: "traditional",
            ingredients: ["Ikan mas", "Daun pisang", "Kangkung", "Bawang putih", "Cabai"]
        },
        { 
            name: "Bubur Ayam (pakai beras merah)", 
            calories: 320, 
            protein: 18, 
            carbs: 45, 
            fat: 8, 
            type: "breakfast",
            category: "traditional",
            ingredients: ["Beras merah", "Dada ayam suwir", "Daun seledri", "Bawang goreng", "Kecap asin"]
        },
        { 
            name: "Omelet Telur + Sayuran", 
            calories: 280, 
            protein: 20, 
            carbs: 10, 
            fat: 18, 
            type: "breakfast",
            category: "traditional",
            ingredients: ["Telur", "Wortel", "Buncis", "Jamur", "Bawang bombay"]
        }
    ],
    modern: [
        { 
            name: "Salad Quinoa dengan Dada Ayam Panggang", 
            calories: 380, 
            protein: 30, 
            carbs: 35, 
            fat: 12, 
            type: "lunch/dinner",
            category: "modern",
            ingredients: ["Quinoa", "Dada ayam", "Selada", "Tomato cherry", "Minyak zaitun"]
        },
        { 
            name: "Smoothie Bowl: Pisang, Berry, Chia Seed", 
            calories: 320, 
            protein: 12, 
            carbs: 50, 
            fat: 8, 
            type: "breakfast",
            category: "modern",
            ingredients: ["Pisang", "Strawberry", "Chia seed", "Yogurt Greek", "Madu"]
        },
        { 
            name: "Zucchini Noodles dengan Daging Cincang", 
            calories: 350, 
            protein: 25, 
            carbs: 20, 
            fat: 18, 
            type: "lunch/dinner",
            category: "modern",
            ingredients: ["Zucchini", "Daging sapi cincang", "Tomat", "Bawang putih", "Keju parmesan"]
        },
        { 
            name: "Greek Yogurt dengan Granola dan Buah", 
            calories: 280, 
            protein: 15, 
            carbs: 35, 
            fat: 8, 
            type: "breakfast",
            category: "modern",
            ingredients: ["Yogurt Greek", "Granola rendah gula", "Blueberry", "Almond slice", "Madu"]
        }
    ],
    global: [
        { 
            name: "Grilled Salmon dengan Asparagus", 
            calories: 420, 
            protein: 35, 
            carbs: 10, 
            fat: 25, 
            type: "lunch/dinner",
            category: "global",
            ingredients: ["Salmon fillet", "Asparagus", "Lemon", "Dill", "Minyak zaitun"]
        },
        { 
            name: "Mediterranean Chickpea Salad", 
            calories: 320, 
            protein: 12, 
            carbs: 40, 
            fat: 12, 
            type: "lunch/dinner",
            category: "global",
            ingredients: ["Chickpea", "Tomato", "Timun", "Feta cheese", "Olive oil"]
        },
        { 
            name: "Japanese Bento: Salmon, Edamame, Nasi Coklat", 
            calories: 450, 
            protein: 28, 
            carbs: 50, 
            fat: 15, 
            type: "lunch/dinner",
            category: "global",
            ingredients: ["Salmon teriyaki", "Edamame", "Nasi coklat", "Brokoli kukus", "Rumput laut"]
        }
    ],
    vegetarian: [
        { 
            name: "Tahu Tempe Bumbu Kuning + Sayuran", 
            calories: 350, 
            protein: 22, 
            carbs: 30, 
            fat: 15, 
            type: "lunch/dinner",
            category: "vegetarian",
            ingredients: ["Tahu", "Tempe", "Bumbu kuning", "Kacang panjang", "Santan rendah lemak"]
        },
        { 
            name: "Capcay Sayuran + Jamur", 
            calories: 280, 
            protein: 12, 
            carbs: 35, 
            fat: 10, 
            type: "lunch/dinner",
            category: "vegetarian",
            ingredients: ["Brokoli", "Wortel", "Jamur shitake", "Baby corn", "Saus tiram vegetarian"]
        },
        { 
            name: "Nasi Merah + Pepes Tahu + Tumis Buncis", 
            calories: 380, 
            protein: 20, 
            carbs: 55, 
            fat: 10, 
            type: "lunch/dinner",
            category: "vegetarian",
            ingredients: ["Nasi merah", "Tahu", "Buncis", "Daun pisang", "Bumbu pepes"]
        }
    ],
    snacks: [
        { 
            name: "Pisang", 
            calories: 105, 
            protein: 1.3, 
            carbs: 27, 
            fat: 0.4,
            category: "snack"
        },
        { 
            name: "Apel", 
            calories: 95, 
            protein: 0.5, 
            carbs: 25, 
            fat: 0.3,
            category: "snack"
        },
        { 
            name: "Almond (1 genggam)", 
            calories: 164, 
            protein: 6, 
            carbs: 6, 
            fat: 14,
            category: "snack"
        },
        { 
            name: "Yogurt Plain", 
            calories: 150, 
            protein: 8, 
            carbs: 11, 
            fat: 8,
            category: "snack"
        },
        { 
            name: "Edamame Rebus", 
            calories: 120, 
            protein: 11, 
            carbs: 10, 
            fat: 5,
            category: "snack"
        },
        { 
            name: "Telur Rebus", 
            calories: 78, 
            protein: 6, 
            carbs: 0.6, 
            fat: 5,
            category: "snack"
        }
    ]
};

// Tips kesehatan berdasarkan risiko
const HEALTH_TIPS = {
    nutrition: {
        lowRisk: [
            "Pertahankan pola makan seimbang dengan memperbanyak sayuran dan buah",
            "Konsumsi ikan minimal 2 kali per minggu untuk omega-3",
            "Batasi gula tambahan kurang dari 25g per hari",
            "Minum air putih minimal 8 gelas sehari",
            "Pilih karbohidrat kompleks seperti nasi merah dan oat"
        ],
        mediumRisk: [
            "Kurangi konsumsi garam hingga kurang dari 5g/hari",
            "Tingkatkan konsumsi serat menjadi 25-30g/hari",
            "Batasi makanan olahan dan cepat saji",
            "Konsumsi probiotik dari yogurt atau tempe untuk kesehatan usus",
            "Perbanyak sayuran hijau untuk vitamin dan mineral"
        ],
        highRisk: [
            "Konsultasi dengan ahli gizi untuk rencana makan personal",
            "Pantau kadar gula darah secara berkala jika risiko diabetes tinggi",
            "Batasi lemak jenuh dan hindari lemak trans",
            "Makan dalam porsi kecil tapi sering (5-6x sehari) untuk kontrol gula darah",
            "Hindari minuman manis dan alkohol"
        ]
    },
    exercise: {
        lowRisk: [
            "Lakukan aktivitas fisik 150 menit/minggu intensitas sedang",
            "Gabungkan cardio dan strength training",
            "Coba aktivitas seperti jalan cepat, bersepeda, atau berenang",
            "Lakukan peregangan setiap hari untuk fleksibilitas",
            "Aktivitas sehari-hari seperti naik tangga juga bermanfaat"
        ],
        mediumRisk: [
            "Tingkatkan menjadi 300 menit aktivitas sedang per minggu",
            "Sertakan latihan beban 2x/minggu untuk meningkatkan massa otot",
            "Coba HIIT (High Intensity Interval Training) 1-2x/minggu",
            "Fokus pada konsistensi, buat jadwal rutin",
            "Lakukan olahraga yang Anda nikmati agar tetap termotivasi"
        ],
        highRisk: [
            "Konsultasi dokter sebelum memulai program olahraga baru",
            "Mulai dengan intensitas rendah dan durasi pendek",
            "Fokus pada konsistensi, bukan intensitas",
            "Pertimbangkan olahraga low-impact seperti berenang atau yoga",
            "Pantau detak jantung selama olahraga"
        ]
    },
    mentalHealth: {
        lowRisk: [
            "Praktikkan mindfulness atau meditasi 10 menit sehari",
            "Jaga kualitas tidur 7-8 jam per malam",
            "Luangkan waktu untuk hobi dan relaksasi",
            "Jaga keseimbangan antara kerja dan kehidupan pribadi",
            "Tingkatkan hubungan sosial yang sehat"
        ],
        mediumRisk: [
            "Kelola stres dengan teknik pernapasan dalam",
            "Batasi screen time sebelum tidur",
            "Ciptakan rutinitas tidur yang konsisten",
            "Praktikkan gratitude journaling setiap hari",
            "Cari support system atau komunitas"
        ],
        highRisk: [
            "Pertimbangkan konsultasi dengan profesional kesehatan mental",
            "Praktikkan teknik manajemen stres secara rutin",
            "Hindari kafein dan alkohol sebelum tidur",
            "Buat lingkungan tidur yang nyaman dan gelap",
            "Pisahkan area kerja dan area istirahat"
        ]
    }
};

// Fakta kesehatan yang menarik
const FUN_FACTS = [
    {
        id: 1,
        fact: "Mengunyah makanan 30 kali per suapan dapat membantu penurunan berat badan dengan meningkatkan rasa kenyang.",
        source: "Journal of the Academy of Nutrition and Dietetics, 2018",
        icon: "fa-utensils"
    },
    {
        id: 2,
        fact: "Paprika merah mengandung 3x lebih banyak vitamin C daripada jeruk per berat yang sama.",
        source: "USDA Food Data Central",
        icon: "fa-pepper-hot"
    },
    {
        id: 3,
        fact: "Makan secara perlahan dapat mengurangi asupan kalori hingga 10% dengan memberikan waktu bagi otak untuk mengenali rasa kenyang.",
        source: "American Journal of Clinical Nutrition",
        icon: "fa-clock"
    },
    {
        id: 4,
        fact: "Kacang-kacangan dapat menurunkan risiko penyakit jantung hingga 30% ketika dikonsumsi rutin.",
        source: "New England Journal of Medicine",
        icon: "fa-heart"
    },
    {
        id: 5,
        fact: "Warna pada buah dan sayuran menunjukkan kandungan fitonutrien yang berbeda, jadi makanlah pelangi warna setiap hari.",
        source: "Harvard School of Public Health",
        icon: "fa-rainbow"
    }
];

// Kuis pertanyaan
const QUIZ_QUESTIONS = [
    {
        question: "Manakah yang mengandung lebih banyak vitamin C?",
        options: ["Jeruk", "Brokoli", "Paprika Merah", "Stroberi"],
        correct: 2,
        explanation: "Paprika merah mengandung 127mg vitamin C per 100g, sedangkan jeruk hanya 53mg."
    },
    {
        question: "Sumber protein nabati terbaik untuk vegetarian adalah?",
        options: ["Tahu & Tempe", "Kentang", "Nasi Putih", "Minyak Kelapa"],
        correct: 0,
        explanation: "Tahu dan tempe mengandung protein lengkap dan mudah diserap tubuh."
    },
    {
        question: "Berapa banyak air yang sebaiknya diminum per hari untuk orang dewasa?",
        options: ["1-2 gelas", "4-6 gelas", "8 gelas atau lebih", "Hanya jika haus"],
        correct: 2,
        explanation: "Rekomendasi umum adalah 8 gelas atau sekitar 2 liter per hari, tergantung aktivitas."
    },
    {
        question: "Makanan apa yang paling baik dikonsumsi sebelum olahraga?",
        options: ["Makanan tinggi lemak", "Makanan tinggi karbohidrat kompleks", "Makanan pedas", "Minuman berenergi"],
        correct: 1,
        explanation: "Karbohidrat kompleks memberikan energi berkelanjutan untuk olahraga."
    }
];

// Mitos vs Fakta tentang gizi
const MYTHS_FACTS = [
    {
        myth: "Karbohidrat membuat gemuk",
        fact: "Karbohidrat kompleks seperti nasi merah dan oat justru membantu kontrol berat badan dengan memberikan energi berkelanjutan.",
        explanation: "Yang membuat gemuk adalah kelebihan kalori total, bukan hanya karbohidrat."
    },
    {
        myth: "Semua lemak tidak sehat",
        fact: "Lemak tak jenuh dari alpukat, kacang, dan ikan justru penting untuk kesehatan jantung dan otak.",
        explanation: "Tubuh membutuhkan lemak sehat untuk penyerapan vitamin larut lemak."
    },
    {
        myth: "Harus menghindari semua gula",
        fact: "Gula alami dari buah-buahan mengandung serat dan nutrisi penting yang berbeda dengan gula tambahan.",
        explanation: "Gula dari buah utuh tidak memiliki efek negatif yang sama dengan gula tambahan pada minuman kemasan."
    },
    {
        myth: "Makan malam bikin gemuk",
        fact: "Yang penting adalah total kalori harian, bukan waktu makan.",
        explanation: "Makan larut malam bisa mengganggu tidur, tetapi tidak secara langsung menyebabkan penambahan berat badan."
    }
];

// Data aplikasi
let userData = {};
let analysisResults = null;
let currentFunFactIndex = 0;
let currentQuizIndex = 0;
let dietPlans = [];

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Setup tab system
    setupTabSystem();
    
    // Setup form validation
    setupFormValidation();
    
    // Setup diet filters
    setupDietFilters();
    
    // Setup quiz
    setupQuiz();
    
    // Setup fun facts carousel
    setupFunFacts();
    
    // Setup myths vs facts
    setupMythsFacts();
    
    // Setup responsive menu
    setupResponsiveMenu();
    
    // Load initial data
    loadInitialData();
}

// Tab System
function setupTabSystem() {
    // Tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    const navLinks = document.querySelectorAll('.nav-menu a[data-tab]');
    
    // Fungsi untuk berpindah tab
    function switchToTab(tabId) {
        // Update tab buttons
        tabButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        
        // Update nav links
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.tab === tabId);
        });
        
        // Update tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });
        
        // Simpan tab aktif
        localStorage.setItem('activeTab', tabId);
        
        // Scroll ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Event listeners untuk tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchToTab(button.dataset.tab);
        });
    });
    
    // Event listeners untuk nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchToTab(link.dataset.tab);
            
            // Close mobile menu jika terbuka
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });
    
    // Load tab aktif dari localStorage
    const savedTab = localStorage.getItem('activeTab') || 'calculator';
    switchToTab(savedTab);
}

// Fungsi untuk beralih tab (bisa dipanggil dari mana saja)
function switchTab(tabId) {
    const tabButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (tabButton) {
        tabButton.click();
    }
}

// Form Validation
function setupFormValidation() {
    // Real-time validation untuk input number
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('blur', validateNumberInput);
        input.addEventListener('input', clearError);
    });
    
    // Real-time validation untuk select
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', clearError);
    });
}

function validateNumberInput(e) {
    const input = e.target;
    const value = parseFloat(input.value);
    const min = parseFloat(input.min) || 0;
    const max = parseFloat(input.max) || Infinity;
    const errorId = input.id + '-error';
    const errorElement = document.getElementById(errorId);
    
    if (isNaN(value) || value < min || value > max) {
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = `Nilai harus antara ${min} dan ${max}`;
            errorElement.classList.add('show');
        }
        return false;
    }
    
    // Validasi khusus untuk beberapa field
    switch(input.id) {
        case 'waist':
            const gender = document.getElementById('gender').value;
            const waistThreshold = gender === 'male' ? 90 : 80;
            if (value > waistThreshold) {
                showWarning(input.id, `Lingkar pinggang ${value}cm melebihi batas sehat (${waistThreshold}cm)`);
            }
            break;
        case 'systolicBP':
            if (value >= 140) {
                showWarning(input.id, 'Tekanan darah sistolik ≥140 mmHg termasuk hipertensi');
            } else if (value >= 130) {
                showWarning(input.id, 'Tekanan darah sistolik 130-139 mmHg termasuk prehipertensi');
            }
            break;
        case 'sleep':
            if (value < 6) {
                showWarning(input.id, 'Durasi tidur kurang dari 6 jam dapat meningkatkan risiko kesehatan');
            } else if (value > 9) {
                showWarning(input.id, 'Durasi tidur lebih dari 9 jam dapat dikaitkan dengan masalah kesehatan');
            }
            break;
    }
    
    return true;
}

function showWarning(fieldId, message) {
    const input = document.getElementById(fieldId);
    const warningId = fieldId + '-warning';
    let warningElement = document.getElementById(warningId);
    
    if (!warningElement) {
        warningElement = document.createElement('div');
        warningElement.id = warningId;
        warningElement.className = 'warning-message';
        input.parentNode.appendChild(warningElement);
    }
    
    warningElement.textContent = message;
    warningElement.classList.add('show');
}

function clearError(e) {
    const input = e.target;
    input.classList.remove('error');
    
    const errorId = input.id + '-error';
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
    
    const warningId = input.id + '-warning';
    const warningElement = document.getElementById(warningId);
    if (warningElement) {
        warningElement.classList.remove('show');
    }
}

// Form Step Navigation
function nextStep(stepNumber) {
    // Validasi step saat ini
    const currentStep = document.querySelector('.step-content.active');
    if (!validateStep(currentStep.id)) {
        return;
    }
    
    // Update steps UI
    updateStepsUI(stepNumber);
    
    // Scroll ke form
    document.getElementById(`step${stepNumber}`).scrollIntoView({ behavior: 'smooth' });
}

function prevStep(stepNumber) {
    // Update steps UI
    updateStepsUI(stepNumber);
    
    // Scroll ke form
    document.getElementById(`step${stepNumber}`).scrollIntoView({ behavior: 'smooth' });
}

function updateStepsUI(stepNumber) {
    // Update step content
    document.querySelectorAll('.step-content').forEach(step => {
        step.classList.remove('active');
    });
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.remove('active');
        if (index < stepNumber) {
            step.classList.add('active');
        }
    });
    
    // Show current step
    const currentStep = document.getElementById(`step${stepNumber}`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
}

function validateStep(stepId) {
    const step = document.getElementById(stepId);
    const inputs = step.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    for (let input of inputs) {
        if (!input.value.trim()) {
            input.classList.add('error');
            
            const errorId = input.id + '-error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = 'Field ini wajib diisi';
                errorElement.classList.add('show');
            }
            
            isValid = false;
        } else {
            // Validasi khusus untuk number inputs
            if (input.type === 'number') {
                if (!validateNumberInput({ target: input })) {
                    isValid = false;
                }
            }
        }
    }
    
    return isValid;
}

// Collect User Data
function collectUserData() {
    userData = {
        // Personal data
        age: parseInt(document.getElementById('age').value),
        gender: document.getElementById('gender').value,
        weight: parseFloat(document.getElementById('weight').value),
        height: parseInt(document.getElementById('height').value),
        waist: parseInt(document.getElementById('waist').value),
        
        // Medical history
        familyHistory: document.getElementById('familyHistory').value,
        familyHistoryHT: document.getElementById('familyHistoryHT').value,
        diabetes: document.getElementById('diabetes').value,
        hypertension: document.getElementById('hypertension').value,
        glucose: document.getElementById('glucose').value,
        cholesterol: parseInt(document.getElementById('cholesterol').value) || null,
        
        // Lifestyle
        activity: parseFloat(document.getElementById('activity').value),
        sleep: parseFloat(document.getElementById('sleep').value),
        smoking: document.getElementById('smoking').value,
        salt: document.getElementById('salt').value,
        stress: document.getElementById('stress').value,
        alcohol: document.getElementById('alcohol').value,
        
        // Additional
        systolicBP: parseInt(document.getElementById('systolicBP').value),
        hdl: parseInt(document.getElementById('hdl').value) || 50,
        nsaidUse: document.getElementById('nsaidUse').value,
        dietaryPreference: document.getElementById('dietaryPreference').value,
        allergies: document.getElementById('allergies').value,
        medications: document.getElementById('medications').value
    };
    
    // Validasi data
    return validateUserData(userData);
}

function validateUserData(data) {
    const errors = [];
    
    if (data.age < 1 || data.age > 120) {
        errors.push('Usia harus antara 1-120 tahun');
    }
    
    if (data.weight < 20 || data.weight > 300) {
        errors.push('Berat badan harus antara 20-300 kg');
    }
    
    if (data.height < 100 || data.height > 250) {
        errors.push('Tinggi badan harus antara 100-250 cm');
    }
    
    if (data.waist < 50 || data.waist > 200) {
        errors.push('Lingkar pinggang harus antara 50-200 cm');
    }
    
    if (errors.length > 0) {
        alert('Data tidak valid:\n' + errors.join('\n'));
        return false;
    }
    
    return true;
}

// Main Calculation Function
async function calculateHealthRisk() {
    // Validasi step 4
    if (!validateStep('step4')) {
        return;
    }
    
    // Collect data
    if (!collectUserData()) {
        return;
    }
    
    // Show loading
    showLoading(true);
    
    try {
        // Simulasi delay untuk loading (dalam aplikasi nyata, ini adalah perhitungan)
        await simulateLoading();
        
        // Perform analysis
        analysisResults = performHealthAnalysis(userData);
        
        // Display results
        displayResults(analysisResults);
        
        // Generate diet plan
        generateDietPlan(analysisResults);
        
        // Generate tips
        generateHealthTips(analysisResults);
        
        // Generate activity plan
        generateActivityPlan(analysisResults);
        
        // Switch to results tab
        setTimeout(() => {
            showSuccessModal();
            switchTab('results');
        }, 500);
        
    } catch (error) {
        console.error('Error in analysis:', error);
        alert('Terjadi kesalahan dalam menganalisis data. Mohon periksa input Anda.');
    } finally {
        // Hide loading
        showLoading(false);
    }
}

function simulateLoading() {
    return new Promise((resolve) => {
        let progress = 0;
        const progressBar = document.getElementById('progressBar');
        const interval = setInterval(() => {
            progress += 5;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}

function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    const progressBar = document.getElementById('progressBar');
    
    if (show) {
        overlay.classList.add('active');
        progressBar.style.width = '0%';
    } else {
        overlay.classList.remove('active');
    }
}

// Health Analysis Functions
function performHealthAnalysis(data) {
    // 1. Calculate BMR (Mifflin-St Jeor Equation)
    let bmr;
    if (data.gender === 'male') {
        bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age + 5;
    } else {
        bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age - 161;
    }
    bmr = Math.round(bmr);
    
    // 2. Calculate TDEE
    const tee = Math.round(bmr * data.activity);
    
    // 3. Calculate BMI
    const heightInMeters = data.height / 100;
    const bmi = data.weight / (heightInMeters * heightInMeters);
    
    // 4. BMI Category (WHO Asia)
    let bmiCategory;
    let bmiRisk = "Rendah";
    
    if (bmi < 18.5) {
        bmiCategory = "Kurus";
        bmiRisk = "Meningkat";
    } else if (bmi < 23) {
        bmiCategory = "Normal";
        bmiRisk = "Rendah";
    } else if (bmi < 27.5) {
        bmiCategory = "Berat Badan Berlebih";
        bmiRisk = "Meningkat";
    } else {
        bmiCategory = "Obesitas";
        bmiRisk = "Tinggi";
    }
    
    // 5. Calculate Diabetes Risk (FINDRISC adapted)
    let diabetesScore = calculateDiabetesRisk(data, bmi);
    
    // Determine risk level
    let diabetesRisk = getRiskLevel(diabetesScore, 'diabetes');
    
    // 6. Calculate Cardiovascular Risk
    let cardioScore = calculateCardiovascularRisk(data, bmi);
    let cardiovascularRisk = getRiskLevel(cardioScore, 'cardiovascular');
    
    // 7. Calculate Hypertension Risk
    let htScore = calculateHypertensionRisk(data, bmi);
    let hypertensionRisk = getRiskLevel(htScore, 'hypertension');
    
    // 8. Calculate Kidney Disease Risk
    let kidneyScore = calculateKidneyDiseaseRisk(data, bmi);
    let kidneyDiseaseRisk = getRiskLevel(kidneyScore, 'kidney');
    
    // 9. Calculate Macronutrients
    const nutrition = calculateMacronutrients(tee, data.weight, data.activity);
    
    // 10. Generate recommendations
    const recommendations = generateRecommendations({
        bmi,
        bmiCategory,
        bmiRisk,
        diabetesRisk,
        cardiovascularRisk,
        hypertensionRisk,
        kidneyDiseaseRisk,
        activity: data.activity,
        sleep: data.sleep,
        smoking: data.smoking
    });
    
    return {
        basic: {
            bmr,
            tee,
            bmi: bmi.toFixed(1),
            bmiCategory,
            bmiRisk
        },
        nutrition,
        risks: {
            diabetes: diabetesRisk,
            cardiovascular: cardiovascularRisk,
            hypertension: hypertensionRisk,
            kidneyDisease: kidneyDiseaseRisk
        },
        recommendations,
        userData: data
    };
}

function calculateDiabetesRisk(data, bmi) {
    let score = 0;
    
    // Age
    if (data.age >= 45 && data.age < 55) score += 2;
    else if (data.age >= 55) score += 3;
    
    // BMI
    if (bmi >= 25 && bmi < 30) score += 1;
    else if (bmi >= 30) score += 3;
    
    // Waist circumference
    const waistThreshold = data.gender === 'male' ? 90 : 80;
    if (data.waist > waistThreshold) score += 4;
    
    // Physical activity
    if (data.activity <= 1.375) score += 2;
    
    // Family history
    if (data.familyHistory === 'one') score += 3;
    else if (data.familyHistory === 'both') score += 5;
    
    // Previous high glucose
    if (data.glucose === 'yes') score += 5;
    
    // Hypertension
    if (data.hypertension === 'yes' || data.hypertension === 'borderline') score += 2;
    
    return score;
}

function calculateCardiovascularRisk(data, bmi) {
    let score = 0;
    
    // Age
    if (data.age >= 40) score += 1;
    if (data.age >= 50) score += 2;
    if (data.age >= 60) score += 3;
    
    // Gender
    if (data.gender === 'male') score += 1;
    
    // Smoking
    if (data.smoking === 'yes') score += 3;
    else if (data.smoking === 'former') score += 1;
    
    // Blood pressure
    if (data.systolicBP >= 140) score += 2;
    else if (data.systolicBP >= 130) score += 1;
    
    // Cholesterol (if available)
    if (data.cholesterol && data.hdl) {
        const ratio = data.cholesterol / data.hdl;
        if (ratio > 5) score += 2;
        else if (ratio > 4) score += 1;
    }
    
    // BMI
    if (bmi >= 25) score += 1;
    if (bmi >= 30) score += 2;
    
    // Physical inactivity
    if (data.activity <= 1.375) score += 1;
    
    // Diabetes
    if (data.diabetes === 'yes') score += 2;
    else if (data.diabetes === 'prediabetes') score += 1;
    
    return score;
}

function calculateHypertensionRisk(data, bmi) {
    let score = 0;
    
    // Salt intake
    if (data.salt === 'medium') score += 1;
    else if (data.salt === 'high') score += 3;
    
    // BMI
    if (bmi >= 25) score += 1;
    if (bmi >= 30) score += 2;
    
    // Physical activity
    if (data.activity <= 1.375) score += 1;
    
    // Sleep
    if (data.sleep < 7) score += 1;
    if (data.sleep < 6) score += 2;
    
    // Smoking
    if (data.smoking === 'yes') score += 2;
    
    // Stress
    if (data.stress === 'medium') score += 1;
    else if (data.stress === 'high') score += 2;
    
    // Alcohol
    if (data.alcohol === 'moderate') score += 1;
    else if (data.alcohol === 'heavy') score += 3;
    
    // Family history
    if (data.familyHistoryHT === 'yes') score += 2;
    
    // Age
    if (data.age >= 40) score += 1;
    
    return score;
}

function calculateKidneyDiseaseRisk(data, bmi) {
    let score = 0;
    
    // Diabetes
    if (data.diabetes === 'yes') score += 3;
    else if (data.diabetes === 'prediabetes') score += 1;
    
    // Hypertension
    if (data.hypertension === 'yes') score += 2;
    else if (data.hypertension === 'borderline') score += 1;
    
    // Age
    if (data.age >= 60) score += 2;
    else if (data.age >= 40) score += 1;
    
    // BMI
    if (bmi >= 30) score += 2;
    else if (bmi >= 25) score += 1;
    
    // Smoking
    if (data.smoking === 'yes') score += 1;
    
    // NSAID use
    if (data.nsaidUse === 'regular') score += 2;
    else if (data.nsaidUse === 'occasional') score += 1;
    
    return score;
}

function getRiskLevel(score, type) {
    let level, className;
    
    switch(type) {
        case 'diabetes':
            if (score >= 15) {
                level = "Sangat Tinggi";
                className = "high-risk";
            } else if (score >= 10) {
                level = "Tinggi";
                className = "high-risk";
            } else if (score >= 5) {
                level = "Sedang";
                className = "medium-risk";
            } else {
                level = "Rendah";
                className = "low-risk";
            }
            break;
            
        case 'cardiovascular':
            if (score >= 10) {
                level = "Tinggi";
                className = "high-risk";
            } else if (score >= 6) {
                level = "Sedang";
                className = "medium-risk";
            } else {
                level = "Rendah";
                className = "low-risk";
            }
            break;
            
        default:
            if (score >= 8) {
                level = "Tinggi";
                className = "high-risk";
            } else if (score >= 4) {
                level = "Sedang";
                className = "medium-risk";
            } else {
                level = "Rendah";
                className = "low-risk";
            }
    }
    
    return {
        level,
        className,
        score,
        action: getRiskAction(level)
    };
}

function getRiskAction(level) {
    switch(level) {
        case "Sangat Tinggi":
            return "Segera konsultasi dengan dokter spesialis";
        case "Tinggi":
            return "Perlu evaluasi medis dalam waktu dekat";
        case "Sedang":
            return "Pertimbangkan konsultasi dengan dokter umum";
        case "Rendah":
            return "Pertahankan gaya hidup sehat";
        default:
            return "Lakukan pemeriksaan rutin";
    }
}

function calculateMacronutrients(tee, weight, activityLevel) {
    // Protein: 0.8-1.6g/kg based on activity level
    const proteinMultiplier = activityLevel < 1.55 ? 0.8 : 1.6;
    const proteinGrams = Math.round(weight * proteinMultiplier);
    const proteinCalories = proteinGrams * 4;
    
    // Fat: 25-35% of calories
    const fatPercentage = 0.3;
    const fatCalories = tee * fatPercentage;
    const fatGrams = Math.round(fatCalories / 9);
    
    // Carbs: remainder
    const fatCalTotal = fatGrams * 9;
    const remainingCalories = tee - proteinCalories - fatCalTotal;
    const carbGrams = Math.round(remainingCalories / 4);
    
    return {
        protein: proteinGrams,
        carbs: carbGrams,
        fat: fatGrams,
        calories: tee
    };
}

function generateRecommendations(data) {
    const recommendations = [];
    
    // BMI-based recommendations
    if (data.bmiCategory !== "Normal") {
        const bmiRec = {
            category: "Berat Badan",
            priority: data.bmiRisk === "Tinggi" ? "high" : data.bmiRisk === "Meningkat" ? "medium" : "low",
            message: `BMI Anda ${data.bmi.toFixed(1)} (${data.bmiCategory}). ${getBMITips(data.bmi)}`,
            action: getBMIAction(data.bmiCategory)
        };
        recommendations.push(bmiRec);
    }
    
    // Activity-based recommendations
    if (data.activity <= 1.375) {
        recommendations.push({
            category: "Aktivitas Fisik",
            priority: "medium",
            message: "Aktivitas fisik Anda tergolong rendah. Peningkatan aktivitas dapat menurunkan risiko penyakit kronis.",
            action: "Mulai dengan jalan cepat 30 menit sehari, minimal 5 hari seminggu."
        });
    }
    
    // Sleep-based recommendations
    if (data.sleep < 7) {
        recommendations.push({
            category: "Tidur",
            priority: "medium",
            message: `Durasi tidur ${data.sleep} jam per malam kurang dari rekomendasi 7-8 jam.`,
            action: "Ciptakan rutinitas tidur yang konsisten dan batasi screen time 1 jam sebelum tidur."
        });
    }
    
    // Smoking recommendations
    if (data.smoking === 'yes') {
        recommendations.push({
            category: "Merokok",
            priority: "high",
            message: "Merokok meningkatkan risiko berbagai penyakit kronis secara signifikan.",
            action: "Konsultasi dengan dokter untuk program berhenti merokok atau hubungi layanan berhenti merokok."
        });
    }
    
    // Risk-specific recommendations
    if (data.diabetesRisk.level === "Tinggi" || data.diabetesRisk.level === "Sangat Tinggi") {
        recommendations.push({
            category: "Diabetes",
            priority: "high",
            message: `Risiko diabetes Anda ${data.diabetesRisk.level}.`,
            action: "Konsultasi dengan dokter untuk pemeriksaan HbA1c dan gula darah puasa."
        });
    }
    
    if (data.cardiovascularRisk.level === "Tinggi") {
        recommendations.push({
            category: "Jantung",
            priority: "high",
            message: "Risiko penyakit jantung Anda tinggi.",
            action: "Konsultasi kardiologi dan lakukan pemeriksaan EKG serta lipid profil."
        });
    }
    
    if (data.hypertensionRisk.level === "Tinggi") {
        recommendations.push({
            category: "Hipertensi",
            priority: "high",
            message: "Risiko hipertensi Anda tinggi.",
            action: "Monitor tekanan darah rutin dan konsultasi dengan dokter untuk evaluasi."
        });
    }
    
    if (data.kidneyDiseaseRisk.level === "Tinggi") {
        recommendations.push({
            category: "Ginjal",
            priority: "high",
            message: "Risiko penyakit ginjal Anda tinggi.",
            action: "Konsultasi nefrologi dan lakukan pemeriksaan kreatinin darah."
        });
    }
    
    // Sort by priority
    return recommendations.sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
}

function getBMITips(bmi) {
    if (bmi < 18.5) {
        return "Pertimbangkan untuk menambah berat badan dengan makanan bergizi.";
    } else if (bmi < 23) {
        return "Pertahankan berat badan ideal Anda.";
    } else if (bmi < 27.5) {
        return "Pertimbangkan program penurunan berat badan ringan.";
    } else {
        return "Penurunan berat badan direkomendasikan untuk kesehatan yang lebih baik.";
    }
}

function getBMIAction(category) {
    switch(category) {
        case "Kurus":
            return "Konsultasi dengan ahli gizi untuk program penambahan berat badan yang sehat.";
        case "Berat Badan Berlebih":
            return "Target penurunan 5-10% dari berat badan saat ini.";
        case "Obesitas":
            return "Konsultasi dengan tim medis untuk program penurunan berat badan komprehensif.";
        default:
            return "Pertahankan pola makan sehat dan aktivitas fisik rutin.";
    }
}

// Display Results
function displayResults(results) {
    if (!results) return;
    
    // Update basic metrics
    document.getElementById('bmiValue').textContent = results.basic.bmi;
    document.getElementById('bmiCategory').textContent = results.basic.bmiCategory;
    document.getElementById('bmrValue').textContent = results.basic.bmr.toLocaleString();
    document.getElementById('teeValue').textContent = results.basic.tee.toLocaleString();
    document.getElementById('proteinValue').textContent = results.nutrition.protein;
    
    // Update risk assessments
    updateRiskDisplay('riskDiabetes', results.risks.diabetes);
    updateRiskDisplay('riskCardio', results.risks.cardiovascular);
    updateRiskDisplay('riskHypertension', results.risks.hypertension);
    updateRiskDisplay('riskKidney', results.risks.kidneyDisease);
    
    // Update recommendations
    updateRecommendations(results.recommendations);
    
    // Save results to localStorage
    saveResults(results);
}

function updateRiskDisplay(elementId, riskData) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const levelElement = element.querySelector('.risk-level');
    const fillElement = element.querySelector('.risk-fill');
    const detailsElement = element.querySelector('.risk-details');
    
    // Update classes
    levelElement.className = `risk-level ${riskData.className}`;
    levelElement.textContent = riskData.level;
    
    fillElement.className = `risk-fill ${riskData.className}`;
    
    // Calculate width based on risk level
    let width;
    switch(riskData.level) {
        case "Rendah": width = 30; break;
        case "Sedang": width = 60; break;
        case "Tinggi": width = 90; break;
        case "Sangat Tinggi": width = 95; break;
        default: width = 30;
    }
    
    fillElement.style.width = `${width}%`;
    detailsElement.textContent = `Skor: ${riskData.score} - ${riskData.action}`;
}

function updateRecommendations(recommendations) {
    const recommendationsList = document.getElementById('recommendationsList');
    if (!recommendationsList) return;
    
    recommendationsList.innerHTML = '';
    
    if (recommendations.length === 0) {
        recommendationsList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-check-circle"></i>
                <p>Profil kesehatan Anda baik! Pertahankan gaya hidup sehat.</p>
            </div>
        `;
        return;
    }
    
    recommendations.forEach(rec => {
        const div = document.createElement('div');
        div.className = `recommendation-item ${rec.priority}`;
        div.innerHTML = `
            <div class="recommendation-priority ${rec.priority}">
                ${rec.priority === 'high' ? 'Prioritas Tinggi' : 
                  rec.priority === 'medium' ? 'Prioritas Sedang' : 'Prioritas Rendah'}
            </div>
            <h4>${rec.category}</h4>
            <p>${rec.message}</p>
            <div class="recommendation-action">
                <strong><i class="fas fa-lightbulb"></i> Rekomendasi:</strong> ${rec.action}
            </div>
        `;
        recommendationsList.appendChild(div);
    });
}

function saveResults(results) {
    try {
        const resultsData = {
            ...results,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('healthAnalysisResults', JSON.stringify(resultsData));
    } catch (error) {
        console.error('Error saving results:', error);
    }
}

function loadSavedResults() {
    try {
        const saved = localStorage.getItem('healthAnalysisResults');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error loading results:', error);
    }
    return null;
}

// Diet Plan Functions
function generateDietPlan(results) {
    if (!results) return;
    
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    const targetCalories = results.nutrition.calories;
    const preference = results.userData.dietaryPreference || 'mixed';
    
    // Generate diet plans
    dietPlans = days.map(day => createDayPlan(day, targetCalories, preference));
    
    // Display diet plans
    displayDietPlans();
    
    // Generate shopping list
    generateShoppingList(dietPlans);
}

function createDayPlan(dayName, targetCalories, preference) {
    const meals = {
        breakfast: getRandomMeal('breakfast', preference, targetCalories * 0.25),
        lunch: getRandomMeal('lunch/dinner', preference, targetCalories * 0.35),
        dinner: getRandomMeal('lunch/dinner', preference, targetCalories * 0.30),
        snack: getRandomMeal('snack', preference, targetCalories * 0.10)
    };
    
    return {
        day: dayName,
        meals,
        totalCalories: Object.values(meals).reduce((sum, meal) => sum + (meal?.calories || 0), 0)
    };
}

function getRandomMeal(type, preference, maxCalories) {
    let pool = [];
    
    // Filter by preference
    switch(preference) {
        case 'vegetarian':
            pool = [...FOOD_DATABASE.vegetarian];
            break;
        case 'lowCarb':
            pool = [...FOOD_DATABASE.traditional, ...FOOD_DATABASE.modern]
                .filter(food => food.carbs < 40);
            break;
        case 'lowFat':
            pool = [...FOOD_DATABASE.traditional, ...FOOD_DATABASE.modern, ...FOOD_DATABASE.global]
                .filter(food => food.fat < 15);
            break;
        default:
            pool = [...FOOD_DATABASE.traditional, ...FOOD_DATABASE.modern, ...FOOD_DATABASE.global];
    }
    
    // Filter by type and calories
    pool = pool.filter(food => 
        food.type === type && 
        food.calories <= maxCalories * 1.2 && 
        food.calories >= maxCalories * 0.8
    );
    
    // Add snacks if type is snack
    if (type === 'snack') {
        pool = [...pool, ...FOOD_DATABASE.snacks];
    }
    
    if (pool.length === 0) {
        // Fallback to any available food
        pool = Object.values(FOOD_DATABASE).flat();
    }
    
    // Select random meal
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex] || null;
}

function displayDietPlans() {
    const daysTabs = document.getElementById('daysTabs');
    const mealsContainer = document.getElementById('mealsContainer');
    
    if (!daysTabs || !mealsContainer || dietPlans.length === 0) return;
    
    // Generate day tabs
    daysTabs.innerHTML = '';
    dietPlans.forEach((plan, index) => {
        const button = document.createElement('button');
        button.className = `day-tab ${index === 0 ? 'active' : ''}`;
        button.textContent = plan.day;
        button.dataset.day = index;
        button.addEventListener('click', () => showDayMeals(index));
        daysTabs.appendChild(button);
    });
    
    // Show first day's meals
    showDayMeals(0);
}

function showDayMeals(dayIndex) {
    const mealsContainer = document.getElementById('mealsContainer');
    const dayTabs = document.querySelectorAll('.day-tab');
    
    if (!mealsContainer || !dietPlans[dayIndex]) return;
    
    // Update active tab
    dayTabs.forEach((tab, index) => {
        tab.classList.toggle('active', index === dayIndex);
    });
    
    const dayPlan = dietPlans[dayIndex];
    
    // Create meals HTML
    let html = `
        <div class="day-header">
            <h3><i class="fas fa-calendar-day"></i> ${dayPlan.day}</h3>
            <p class="day-calories">Total kalori: ${dayPlan.totalCalories.toFixed(0)} kkal</p>
        </div>
    `;
    
    const mealTypes = [
        { key: 'breakfast', label: 'Sarapan', icon: 'fa-sun' },
        { key: 'lunch', label: 'Makan Siang', icon: 'fa-utensils' },
        { key: 'dinner', label: 'Makan Malam', icon: 'fa-moon' },
        { key: 'snack', label: 'Cemilan', icon: 'fa-cookie' }
    ];
    
    mealTypes.forEach(mealType => {
        const meal = dayPlan.meals[mealType.key];
        if (!meal) return;
        
        html += `
            <div class="meal-type">
                <h4><i class="fas ${mealType.icon}"></i> ${mealType.label}</h4>
                <div class="meal-items">
                    <div class="meal-card">
                        <h5>${meal.name}</h5>
                        <div class="meal-details">
                            <p class="meal-calories">${meal.calories} kkal</p>
                            <div class="meal-nutrition">
                                <span><i class="fas fa-drumstick-bite"></i> ${meal.protein || 0}g protein</span>
                                <span><i class="fas fa-bread-slice"></i> ${meal.carbs || 0}g karbo</span>
                                <span><i class="fas fa-oil-can"></i> ${meal.fat || 0}g lemak</span>
                            </div>
                            ${meal.ingredients ? `
                            <div class="meal-ingredients">
                                <strong>Bahan:</strong> ${meal.ingredients.join(', ')}
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    mealsContainer.innerHTML = html;
}

function generateShoppingList(plans) {
    const shoppingList = document.getElementById('shoppingList');
    if (!shoppingList) return;
    
    // Collect all ingredients from all meals
    const allIngredients = new Set();
    
    plans.forEach(plan => {
        Object.values(plan.meals).forEach(meal => {
            if (meal && meal.ingredients) {
                meal.ingredients.forEach(ingredient => {
                    allIngredients.add(ingredient);
                });
            }
        });
    });
    
    // Add common ingredients
    const commonIngredients = [
        "Minyak zaitun", "Garam", "Merica", "Bawang putih", "Bawang merah",
        "Air mineral", "Lemon", "Cabai (opsional)", "Kecap asin rendah sodium",
        "Kecap manis (sedikit)", "Madu", "Jahe", "Kunyit"
    ];
    
    commonIngredients.forEach(ingredient => {
        allIngredients.add(ingredient);
    });
    
    // Display shopping list
    shoppingList.innerHTML = '';
    
    if (allIngredients.size === 0) {
        shoppingList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-info-circle"></i>
                <p>Belum ada daftar belanja yang dihasilkan.</p>
            </div>
        `;
        return;
    }
    
    Array.from(allIngredients).sort().forEach(ingredient => {
        const div = document.createElement('div');
        div.className = 'shopping-item';
        div.innerHTML = `
            <span>${ingredient}</span>
            <span class="shopping-quantity">Cukup untuk 1 minggu</span>
        `;
        shoppingList.appendChild(div);
    });
}

function setupDietFilters() {
    const filters = document.querySelectorAll('.diet-filter');
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Update active filter
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter meals
            const filterType = this.dataset.type;
            filterMeals(filterType);
        });
    });
}

function filterMeals(filterType) {
    if (!dietPlans || dietPlans.length === 0) return;
    
    const currentDayIndex = Array.from(document.querySelectorAll('.day-tab'))
        .findIndex(tab => tab.classList.contains('active'));
    
    if (currentDayIndex === -1) return;
    
    const filteredPlan = { ...dietPlans[currentDayIndex] };
    
    if (filterType !== 'all') {
        Object.keys(filteredPlan.meals).forEach(mealType => {
            const meal = filteredPlan.meals[mealType];
            if (meal && meal.category !== filterType) {
                // Replace with a meal from the filtered category
                const newMeal = getRandomMeal(
                    mealType === 'breakfast' ? 'breakfast' : 
                    mealType === 'snack' ? 'snack' : 'lunch/dinner',
                    filterType,
                    meal.calories
                );
                if (newMeal) {
                    filteredPlan.meals[mealType] = newMeal;
                }
            }
        });
    }
    
    // Update display
    const mealsContainer = document.getElementById('mealsContainer');
    if (mealsContainer) {
        // Temporary update for demonstration
        // In a real app, you would regenerate the entire plan
        alert(`Filter "${filterType}" diterapkan. Dalam aplikasi lengkap, ini akan menyesuaikan semua makanan.`);
    }
}

// Health Tips Functions
function generateHealthTips(results) {
    if (!results) return;
    
    // Determine overall risk level
    const overallRisk = getOverallRiskLevel(results.risks);
    
    // Generate tips based on risk level
    generateNutritionTips(overallRisk);
    generateExerciseTips(overallRisk);
    generateMentalHealthTips(overallRisk);
}

function getOverallRiskLevel(risks) {
    const riskOrder = ["Sangat Tinggi", "Tinggi", "Sedang", "Rendah"];
    const riskLevels = Object.values(risks).map(r => r.level);
    
    // Find the highest risk level
    let highestRiskIndex = 3; // Default to "Rendah"
    
    riskLevels.forEach(level => {
        const index = riskOrder.indexOf(level);
        if (index < highestRiskIndex) {
            highestRiskIndex = index;
        }
    });
    
    const highestRisk = riskOrder[highestRiskIndex];
    
    // Map to tip categories
    if (highestRisk === "Sangat Tinggi" || highestRisk === "Tinggi") {
        return "highRisk";
    } else if (highestRisk === "Sedang") {
        return "mediumRisk";
    } else {
        return "lowRisk";
    }
}

function generateNutritionTips(riskLevel) {
    const tipsContainer = document.getElementById('nutritionTips');
    if (!tipsContainer) return;
    
    const tips = HEALTH_TIPS.nutrition[riskLevel] || [];
    displayTips(tipsContainer, tips);
}

function generateExerciseTips(riskLevel) {
    const tipsContainer = document.getElementById('exerciseTips');
    if (!tipsContainer) return;
    
    const tips = HEALTH_TIPS.exercise[riskLevel] || [];
    displayTips(tipsContainer, tips);
}

function generateMentalHealthTips(riskLevel) {
    const tipsContainer = document.getElementById('mentalHealthTips');
    if (!tipsContainer) return;
    
    const tips = HEALTH_TIPS.mentalHealth[riskLevel] || [];
    displayTips(tipsContainer, tips);
}

function displayTips(container, tips) {
    container.innerHTML = '';
    
    if (tips.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-info-circle"></i>
                <p>Belum ada tips yang tersedia.</p>
            </div>
        `;
        return;
    }
    
    tips.forEach(tip => {
        const div = document.createElement('div');
        div.className = 'tip-item';
        div.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${tip}</span>
        `;
        container.appendChild(div);
    });
}

// Activity Plan Functions
function generateActivityPlan(results) {
    const activityTable = document.getElementById('activityTable');
    if (!activityTable) return;
    
    const activityLevel = results.userData.activity;
    const intensity = activityLevel < 1.55 ? 'low' : activityLevel < 1.725 ? 'medium' : 'high';
    
    const activities = {
        low: [
            { day: "Senin", activity: "Jalan cepat 30 menit" },
            { day: "Selasa", activity: "Yoga atau stretching 20 menit" },
            { day: "Rabu", activity: "Jalan santai 45 menit" },
            { day: "Kamis", activity: "Istirahat aktif (beres-beres rumah)" },
            { day: "Jumat", activity: "Jalan cepat 30 menit" },
            { day: "Sabtu", activity: "Aktivitas outdoor ringan" },
            { day: "Minggu", activity: "Istirahat atau peregangan ringan" }
        ],
        medium: [
            { day: "Senin", activity: "Jogging 30 menit + stretching" },
            { day: "Selasa", activity: "Latihan beban tubuh 20 menit" },
            { day: "Rabu", activity: "Bersepeda 45 menit" },
            { day: "Kamis", activity: "Jogging 30 menit" },
            { day: "Jumat", activity: "Latihan sirkuit 25 menit" },
            { day: "Sabtu", activity: "Aktivitas outdoor sedang" },
            { day: "Minggu", activity: "Peregangan aktif atau yoga" }
        ],
        high: [
            { day: "Senin", activity: "HIIT workout 25 menit" },
            { day: "Selasa", activity: "Latihan beban 30 menit" },
            { day: "Rabu", activity: "Lari interval 40 menit" },
            { day: "Kamis", activity: "Latihan sirkuit intensif 30 menit" },
            { day: "Jumat", activity: "Bersepeda intensif 45 menit" },
            { day: "Sabtu", activity: "Aktivitas outdoor intensif" },
            { day: "Minggu", activity: "Recovery - yoga atau peregangan" }
        ]
    };
    
    const weeklyActivities = activities[intensity] || activities.medium;
    
    // Display activity plan
    activityTable.innerHTML = '';
    weeklyActivities.forEach(item => {
        const div = document.createElement('div');
        div.className = 'activity-day';
        div.innerHTML = `
            <div class="day-header">${item.day}</div>
            <div class="activity-item">${item.activity}</div>
            <div class="activity-item">Peregangan 10 menit</div>
            <div class="activity-item">Minum air 2L+</div>
        `;
        activityTable.appendChild(div);
    });
}

// Fun Facts Functions
function setupFunFacts() {
    displayCurrentFunFact();
    createFunFactDots();
    
    // Auto rotate fun facts every 10 seconds
    setInterval(nextFunFact, 10000);
}

function displayCurrentFunFact() {
    const funfactElement = document.getElementById('currentFunFact');
    if (!funfactElement) return;
    
    const fact = FUN_FACTS[currentFunFactIndex];
    
    funfactElement.innerHTML = `
        <div class="funfact-icon">
            <i class="fas ${fact.icon}"></i>
        </div>
        <h3>Fakta Kesehatan #${fact.id}</h3>
        <p>${fact.fact}</p>
        <div class="funfact-source">Sumber: ${fact.source}</div>
    `;
    
    updateFunFactDots();
}

function createFunFactDots() {
    const dotsContainer = document.getElementById('funfactDots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    
    FUN_FACTS.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === currentFunFactIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentFunFactIndex = index;
            displayCurrentFunFact();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateFunFactDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentFunFactIndex);
    });
}

function nextFunFact() {
    currentFunFactIndex = (currentFunFactIndex + 1) % FUN_FACTS.length;
    displayCurrentFunFact();
}

function prevFunFact() {
    currentFunFactIndex = (currentFunFactIndex - 1 + FUN_FACTS.length) % FUN_FACTS.length;
    displayCurrentFunFact();
}

// Quiz Functions
function setupQuiz() {
    displayQuizQuestion();
    
    // Setup quiz options
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            checkQuizAnswer(this);
        });
    });
}

function displayQuizQuestion() {
    const question = QUIZ_QUESTIONS[currentQuizIndex];
    if (!question) return;
    
    document.getElementById('quizQuestion').textContent = question.question;
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.dataset.correct = (index === question.correct).toString();
        option.classList.remove('correct', 'incorrect');
    });
    
    document.getElementById('quizResult').innerHTML = '';
}

function checkQuizAnswer(selectedOption) {
    const isCorrect = selectedOption.dataset.correct === 'true';
    const options = document.querySelectorAll('.quiz-option');
    
    // Show all correct/incorrect states
    options.forEach(option => {
        if (option.dataset.correct === 'true') {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Show result
    const resultElement = document.getElementById('quizResult');
    const question = QUIZ_QUESTIONS[currentQuizIndex];
    
    if (isCorrect) {
        resultElement.innerHTML = `
            <div class="correct-answer">
                <i class="fas fa-check-circle"></i> Benar! ${question.explanation}
            </div>
        `;
    } else {
        const correctAnswer = question.options[question.correct];
        resultElement.innerHTML = `
            <div class="incorrect-answer">
                <i class="fas fa-times-circle"></i> Jawaban benar: ${correctAnswer}. ${question.explanation}
            </div>
        `;
    }
}

function nextQuizQuestion() {
    currentQuizIndex = (currentQuizIndex + 1) % QUIZ_QUESTIONS.length;
    displayQuizQuestion();
    
    // Re-enable option clicks
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.style.pointerEvents = 'auto';
    });
}

// Myths vs Facts Functions
function setupMythsFacts() {
    const mythList = document.getElementById('mythList');
    if (!mythList) return;
    
    MYTHS_FACTS.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `myth-item ${index % 2 === 0 ? 'myth' : 'fact'}`;
        div.innerHTML = `
            <div class="myth-content">
                <h4>${index % 2 === 0 ? 'MITOS' : 'FAKTA'}</h4>
                <p><strong>"${index % 2 === 0 ? item.myth : item.fact}"</strong></p>
                <p>${item.explanation}</p>
            </div>
        `;
        mythList.appendChild(div);
    });
}

// Modal Functions
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (!modal) return;
    
    modal.classList.add('active');
    
    // Setup close button
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    // Close on background click
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Responsive Menu
function setupResponsiveMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// Print Function
function printDietPlan() {
    if (!dietPlans || dietPlans.length === 0) {
        alert('Belum ada jadwal diet yang dihasilkan. Silakan lakukan analisis terlebih dahulu.');
        return;
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Jadwal Diet - HealthRisk Analyzer</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #2E7D32; }
                .day { margin-bottom: 30px; border-bottom: 2px solid #ccc; padding-bottom: 20px; }
                .meal { margin: 15px 0; }
                .meal-title { font-weight: bold; color: #1B5E20; }
                .ingredients { font-size: 0.9em; color: #666; }
                .shopping-list { margin-top: 40px; }
                .shopping-item { padding: 5px 0; }
                .disclaimer { margin-top: 40px; font-size: 0.8em; color: #999; border-top: 1px solid #ccc; padding-top: 20px; }
            </style>
        </head>
        <body>
            <h1>Jadwal Diet 7 Hari</h1>
            <p>Dibuat oleh HealthRisk Analyzer pada ${new Date().toLocaleDateString('id-ID')}</p>
            
            ${dietPlans.map(day => `
                <div class="day">
                    <h2>${day.day}</h2>
                    <div class="meal">
                        <div class="meal-title">Sarapan:</div>
                        <div>${day.meals.breakfast?.name || 'Belum ditentukan'}</div>
                        <div class="ingredients">Bahan: ${day.meals.breakfast?.ingredients?.join(', ') || '-'}</div>
                    </div>
                    <div class="meal">
                        <div class="meal-title">Makan Siang:</div>
                        <div>${day.meals.lunch?.name || 'Belum ditentukan'}</div>
                        <div class="ingredients">Bahan: ${day.meals.lunch?.ingredients?.join(', ') || '-'}</div>
                    </div>
                    <div class="meal">
                        <div class="meal-title">Makan Malam:</div>
                        <div>${day.meals.dinner?.name || 'Belum ditentukan'}</div>
                        <div class="ingredients">Bahan: ${day.meals.dinner?.ingredients?.join(', ') || '-'}</div>
                    </div>
                    <div class="meal">
                        <div class="meal-title">Cemilan:</div>
                        <div>${day.meals.snack?.name || 'Belum ditentukan'}</div>
                    </div>
                    <p>Total perkiraan kalori: ${day.totalCalories.toFixed(0)} kkal</p>
                </div>
            `).join('')}
            
            <div class="disclaimer">
                <p><strong>Disclaimer:</strong> Jadwal diet ini untuk tujuan edukasi. Konsultasikan dengan ahli gizi sebelum mengubah pola makan. Sesuaikan porsi dengan kebutuhan individu.</p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Load Initial Data
function loadInitialData() {
    // Load saved results
    const savedResults = loadSavedResults();
    if (savedResults) {
        analysisResults = savedResults;
        displayResults(savedResults);
        
        // Regenerate plans if needed
        if (savedResults.userData) {
            generateDietPlan(savedResults);
            generateHealthTips(savedResults);
            generateActivityPlan(savedResults);
        }
    }
}

// Export untuk penggunaan global
window.switchTab = switchTab;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.calculateHealthRisk = calculateHealthRisk;
window.printDietPlan = printDietPlan;
window.nextFunFact = nextFunFact;
window.prevFunFact = prevFunFact;
window.nextQuizQuestion = nextQuizQuestion;
window.closeModal = closeModal;

// Inisialisasi saat halaman siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}