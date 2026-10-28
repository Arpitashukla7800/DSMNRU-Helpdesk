// Get HTML elements
const chatArea = document.getElementById("chatArea");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const themeBtn = document.getElementById("themeBtn");
const clearBtn = document.getElementById("clearBtn");
const language = document.getElementById("language");

// Save welcome message
const welcomeMessage = chatArea.innerHTML;

// Add message to chat
function addMessage(text, className) {
    const message = document.createElement("div");
    message.className = className;

    if (className === "bot-message") {
        message.innerHTML = text;
    } else {
        message.textContent = text;
    }

    chatArea.appendChild(message);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Get answers
function getAnswer(question) {
    const q = question.toLowerCase();

    if (q.includes("course")) {
        return "🎓 DSMNRU offers 40+ undergraduate, postgraduate and doctoral programmes, including: • B.Tech (CSE, AI-DS, ECE, Mechanical, Civil, Electrical) • B.Com, B.Sc, BA, BBA • Law, BASLP • MBA, MCA, M.Tech, M.Sc, M.Com, LLM • M.Ed & B.Ed (Special Education) • BPO, MPO, and PhD programmes.Specialized in inclusive education with 50% reservation for differently-abled students.";
    }

    if (q.includes("fee")) {
        return "💰 Approximate fees (per year): • B.Tech: ₹90,000–₹1,20,000 • MBA: ₹35,000–₹45,000 • MCA: ₹30,000–₹40,000 • BA/B.Sc/B.Com: ₹8,000–₹15,000 • Law: ₹20,000–₹30,000 • BASLP: ₹12,000–₹35,000. ⚠️ NOTE: Divyang (disabled) students may be eligible for fee waivers and scholarships as per applicable rules.";
    }

    if (q.includes("admission")) {
        return "📝 Admission Process: 🎯 UG Admissions: • JEE Main / CUET-UG entrance exam • Followed by counselling. 🎯 PG Admissions: • CUET-PG or merit-based admission. 🎯 PhD Admissions: • Master's degree required • Entrance exam/interview. ⭐ 50% seats reserved for differently-abled students, as per applicable university rules.";
    }

    if (q.includes("scholarship")) {
        return "🎓 Available Scholarships: • NHFDC Scholarship (for ≥40% disability) • UP State Scholarship • Central Government Divyang Scholarships • Fee Reimbursement (category-wise) • Merit-based Scholarships • Sports Scholarships. 💰 Divyang (Disabled) Students May Be Eligible For: • Tuition Fee Waiver • Maintenance Allowance • Book Support • Special Assistance Funds, subject to eligibility and applicable scheme rules.";
    }

    if (q.includes("facilities")) {
        return "🏫 Campus Facilities: • Barrier-free 131-acre campus with ramps & elevators • Library with 4000+ books & Braille resources • Smart classrooms with high-speed Wi-Fi • Separate boys' & girls' hostels with modern amenities • 24/7 Medical Centre & Physiotherapy Unit • Sports Complex & Swimming Pool • Cafeteria with diverse food options • Advanced IT Labs & Assistive Technology Labs • Accessible Auditorium & Conference Halls.";
    }

    if (q.includes("placement")) {
        return "💼 Placement Statistics: 📊 Average Package: ₹3.2–₹4.8 LPA. 🏆 Top Placements: • MBA: Up to ₹12.16 LPA • B.Tech: Up to ₹9 LPA. 🤝 Major Recruiters: Wipro, HCL, IBM, Amazon, Dabur, Axis Bank, HDFC, Reliance and many more. 🎯 Active Placement Cell: • Regular Training Sessions • MoUs with Leading Companies • Placement Assistance for Students.";
    }

    if (q.includes("contact")) {
        return "📞 Contact Information: 🏛️ Address: Mohaan Road, Lucknow, Uttar Pradesh – 226017. 🌐 Official Website: https://dsmru.up.nic.in. 📱 Registrar: +91 8887222002. 📧 Email: registrar@dsmnru.ac.in. 👔 Vice Chancellor: Prof. Sanjay Singh. 📧 VC Email: vc@dsmnru.ac.in.";
    }
    if (q.includes("samarth")) {
    return `
        <div>
            🔐 <b>DSMNRU Samarth Portal - Your Academic Gateway! Access your student account: </b><br>
             ✓ View Academic Records.<br>
              ✓ Course Registration.<br>
              ✓ Fee Payment Portal.<br>
               ✓ Exam Schedule.<br>
              
            ✓ Check Grades & Results.<br><br>
            📂 Click below to visit the samarth portal.
            <br><br>
            <a href="https://dsmru.samarth.edu.in/index.php/site/login"
               target="_blank"
               rel="noopener noreferrer"
               class="samarth-portal">
               🔐 View Samarth portal
            </a>
        </div>
    `;
    }
    if (q.includes("pyq")) {
    return `
        <div>
            📚 <b>Previous Year Question Papers</b><br><br>
            ✔ Find previous year question papers.<br>
            ✔ Search for available courses and semesters.<br>
            ✔ Prepare for exams using previous papers.<br><br>
            📂 Click below to visit the PYQ website.
            <br><br>
            <a href="https://dsmnru-pyq.netlify.app/"
               target="_blank"
               rel="noopener noreferrer"
               class="pyq-link">
               📚 Open PYQ Website
            </a>
        </div>
    `;
}
    if (q.includes("syllabus")) {
    return `
        <div>
            📚 <b> Complete Syllabus & Course Details: </b><br><br>
            ✓ Detailed syllabus for all courses <br>
            ✓ Course structure and modules <br>
            ✓ Unit-wise breakdown<br><br>
            📚 Access the complete syllabus database below:.
            <br><br>
            <a href="https://dsmnru-pyq.netlify.app/"
               target="_blank"
               rel="noopener noreferrer"
               class="syllabus">
               📚 view syllabus
            </a>
        </div>
    `;
}
if (q.includes("youtube")) {
    return `
        <div>
          ▶️ DSMNRU YouTube Channel - Stay Updated! 📺 Subscribe to our official channel: 📢 Latest Announcements 📅 Event Coverage & Highlights 👨‍🎓 Student Success Stories 🎥 Campus Tours & Facilities 📺 Informative Videos 🏆 Academic Programs Info 📝 Placement Updates 🎓 Student Life at DSMNRU Subscribe now for regular updates!
            <br><br>
            <a href="https://www.youtube.com"
               target="_blank"
               rel="noopener noreferrer"
               class="youtube">
               view our youtube channel
            </a>
        </div>
    `;
}
return "Sorry!  I couldn't understand your question. Please ask me about DSMNRU courses, fees, admissions, scholarships, facilities, PYQ papers, syllabus, or student services. 😊";
    

    

}

// Send message
function sendMessage(question) {
    question = question.trim();

    if (question === "") {
        return;
    }

    addMessage("You: " + question, "user-message");

    const answer = getAnswer(question);

    setTimeout(function () {
        addMessage("Helpdesk: " + answer, "bot-message");
    }, 300);
}

// Input form
chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    sendMessage(userInput.value);

    userInput.value = "";
});

// Quick action buttons
document.querySelectorAll(".quick-buttons button").forEach(function (button) {
    button.addEventListener("click", function () {
        const question = button.getAttribute("data-msg");
        sendMessage(question);
    });
}); 

// Dark and light mode
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Clear chat
clearBtn.addEventListener("click", function () {
    chatArea.innerHTML = welcomeMessage;
});

// Language selection
language.addEventListener("change", function () {
    const isHindi = language.value === "hi";

    // Input placeholder
    userInput.placeholder = isHindi
        ? "DSMNRU के बारे में कुछ भी पूछें..."
        : "Ask me anything about DSMNRU...";

    // Quick buttons
    const buttonTranslations = {
        "Courses": "📚 पाठ्यक्रम",
        "Fees": "💰 फीस",
        "Admission": "📝 प्रवेश",
        "Facilities": "🏫 सुविधाएँ",
        "Placement": "💼 प्लेसमेंट",
        "Contact": "📞 संपर्क",
        "Scholarships": "🎓 छात्रवृत्ति",
        "PYQ Papers": "📚 पुराने प्रश्नपत्र",
        "Syllabus": "📖 पाठ्यक्रम सूची",
        "Upload PYQ": "📤 प्रश्नपत्र अपलोड"
    };

    document.querySelectorAll(".quick-buttons button").forEach(button => {
        const question = button.dataset.question;

        if (!button.dataset.englishText) {
            button.dataset.englishText = button.textContent;
        }

        button.textContent = isHindi
            ? (buttonTranslations[question] || button.dataset.englishText)
            : button.dataset.englishText;
    });

    // Welcome message
    const welcome = document.querySelector(".welcome-card, .bot-message");

    if (welcome) {
        if (!welcome.dataset.englishHTML) {
            welcome.dataset.englishHTML = welcome.innerHTML;
        }

        welcome.innerHTML = isHindi
            ? `<h3>DSMNRU में आपका स्वागत है! 👋</h3>
               <p>मैं डॉ. शकुंतला मिश्रा राष्ट्रीय पुनर्वास विश्वविद्यालय, लखनऊ का हेल्पडेस्क सहायक हूँ।</p>
               <br>
               <h3>आप मुझसे पूछ सकते हैं:</h3>
               <p>📚 पाठ्यक्रम और प्रोग्राम</p>
               <p>💰 फीस और छात्रवृत्ति</p>
               <p>📝 प्रवेश प्रक्रिया</p>
               <p>🏫 कैंपस और सुविधाएँ</p>
               <p>💼 प्लेसमेंट</p>`
            : welcome.dataset.englishHTML;
    }
});