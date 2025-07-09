function scrollToForm() {
  document.getElementById("appointment").scrollIntoView({ behavior: "smooth" });
}
  const specialtyDescriptions = {
  Cardiology: `Ashirvad Hospital offers 24x7 advanced cardiac care including ECG, echocardiography, angioplasty, and post-heart attack rehabilitation. Our team includes 
    Dr. B.C. Gupta (MBBS, MD, DM - Cardiology, Royal Heart Institute), 
    Dr. Neeta K. Mehra (MBBS, MD, Fellowship in Interventional Cardiology, Nova Medical School), and 
    Dr. Vikrant Joshi (MBBS, DNB - Cardiology, Metro Heart University).`,

  Dermatology: `Our dermatology unit offers acne treatment, laser therapy, chemical peels, skin allergy testing, and cosmetic dermatology. Services are provided by 
    Dr. A.D. Patel (MBBS, MD - Dermatology, SkinTech University), 
    Dr. Reshma Verma (MBBS, Diploma in Aesthetic Medicine), and 
    Dr. Tanya Kapoor (MBBS, MD - Clinical Dermatology, Derma Nova School).`,

  Pediatrics: `We provide neonatal ICU, vaccination, developmental screening, growth tracking, and common childhood illness management. Pediatricians include 
    Dr. H.C. Sharma (MBBS, MD - Pediatrics, BrightHope Medical College), 
    Dr. Sneha Rathi (MBBS, DCH, Hope Children’s Academy), and 
    Dr. Aakash Jain (MBBS, DNB - Pediatrics, MotherCare Medical Institute).`,

  Orthopedics: `From fracture care to joint replacements and spinal surgery, our Orthopedics department delivers advanced bone and muscle care. Doctors include 
    Dr. S.P. Singh (MBBS, MS - Ortho, Global Ortho University), 
    Dr. Mehul Desai (MBBS, DNB - Orthopedics), and 
    Dr. Kiran Tiwari (MBBS, MS - Spine Surgery, Apex Ortho Institute).`,

  ICU: `Our state-of-the-art ICU and emergency wing provides ventilator support, trauma care, stroke management, and 24x7 monitoring. Led by 
    Dr. Rajeev Malhotra (MBBS, MD - Critical Care, Pulse Trauma School) and 
    Dr. Sanjana Ramesh (MBBS, Fellowship in Emergency Medicine, RapidAid Academy).`,

  Pharmacy: `Ashirvad Hospital operates a fully stocked 24/7 pharmacy for all in-patient and emergency medicine needs. Supervised by licensed pharmacists, it ensures immediate availability of essential and prescription drugs.`,

  Neurology: `We offer stroke treatment, EEG, epilepsy care, Parkinson’s support, and neuro-rehabilitation. Experts include 
    Dr. Kavita Iyer (MBBS, MD, DM - Neurology, NeuroMax Institute), 
    Dr. Rakesh Goyal (MBBS, DNB - Neuro), and 
    Dr. Simran Arora (MBBS, Fellowship in Stroke, MindCare University).`,

  Gastroenterology: `Ashirvad's gastro team handles endoscopy, colonoscopy, liver care, IBD management, and nutrition therapy. Specialists include 
    Dr. Alok Sharma (MBBS, MD, DM - Gastroenterology, LiverWell College), 
    Dr. Pooja Nanda (MBBS, MD - GI, DigestCare Institute), and 
    Dr. Hari Menon (MBBS, DNB - Gastro, EndoHealth School).`,

  Oncology: `Our oncology wing offers chemotherapy, surgical oncology, palliative care, and radiation coordination. Treated by 
    Dr. Vikas Shetty (MBBS, MD, DM - Oncology, CanCure University), 
    Dr. Anjali Rao (MBBS, Fellowship in OncoRadiology, LifeHope Center), and 
    Dr. Nishant Shah (MBBS, DNB - Medical Oncology, CancerAid Academy).`,

  "General Medicine": `We offer outpatient and inpatient treatment for fever, infection, diabetes, hypertension, and routine check-ups. Consult with 
    Dr. Sweta Mishra (MBBS, MD - Internal Medicine, CityHealth College), 
    Dr. Arvind Rao (MBBS, DNB - General Medicine), and 
    Dr. Sameer Khan (MBBS, Fellowship in Family Medicine, MedBridge School).`
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const type = card.dataset.type;
    const infoBox = document.getElementById("cardInfo");
    infoBox.textContent = specialtyDescriptions[type];
    infoBox.style.display = "block";
  });
});

const doctorsBySpecialty = {
  Cardiology: [
    "Dr. B.C. Gupta - Cardiology",
    "Dr. Neeta K. Mehra - Cardiology",
    "Dr. Vikrant Joshi - Cardiology"
  ],
  Dermatology: [
    "Dr. A.D. Patel - Dermatology",
    "Dr. Reshma Verma - Dermatology",
    "Dr. Tanya Kapoor - Dermatology"
  ],
  Pediatrics: [
    "Dr. H.C. Sharma - Pediatrics",
    "Dr. Sneha Rathi - Pediatrics",
    "Dr. Aakash Jain - Pediatrics"
  ],
  Orthopedics: [
    "Dr. S.P. Singh - Orthopedics",
    "Dr. Mehul Desai - Orthopedics",
    "Dr. Kiran Tiwari - Orthopedics"
  ],
  ICU: [
    "Dr. Rajeev Malhotra - ICU",
    "Dr. Sanjana Ramesh - ICU"
  ],
  Pharmacy: [
    "Pharmacy Services - 24x7 Available"
  ],
  Neurology: [
    "Dr. Kavita Iyer - Neurology",
    "Dr. Rakesh Goyal - Neurology",
    "Dr. Simran Arora - Neurology"
  ],
  Gastroenterology: [
    "Dr. Alok Sharma - Gastroenterology",
    "Dr. Pooja Nanda - Gastroenterology",
    "Dr. Hari Menon - Gastroenterology"
  ],
  Oncology: [
    "Dr. Vikas Shetty - Oncology",
    "Dr. Anjali Rao - Oncology",
    "Dr. Nishant Shah - Oncology"
  ],
  "General Medicine": [
    "Dr. Sweta Mishra - General Medicine",
    "Dr. Arvind Rao - General Medicine",
    "Dr. Sameer Khan - General Medicine"
  ]


};

document.getElementById('specialty').addEventListener('change', function () {
  const specialty = this.value;
  const doctorSelect = document.getElementById('doctor');
  doctorSelect.innerHTML = '<option value="" disabled selected>Select</option>';
  if (doctorsBySpecialty[specialty]) {
    doctorsBySpecialty[specialty].forEach(doctor => {
      const option = document.createElement('option');
      option.value = doctor;
      option.textContent = doctor;
      doctorSelect.appendChild(option);
    });
  }
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const confirmationBox = document.getElementById('confirmation');
  confirmationBox.style.display = 'block';
  confirmationBox.innerHTML = `
    ✅ Appointment Confirmed! <br><br>
    <strong>${name}</strong>, your appointment with <strong>${doctor}</strong> 
    is scheduled on <strong>${date}</strong> at <strong>${time}</strong>.
  `;

  this.reset();

  setTimeout(() => {
    confirmationBox.style.display = 'none';
  }, 5000);
});
