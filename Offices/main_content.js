
// this is code is for navigation
const fpmoBtn = document.getElementById("fpmoButton");
const cashierBtn = document.getElementById("cashierButton");
const libraryBtn = document.getElementById("libraryButton");
const clinicOffice = document.getElementById("clinicOffice");
const OsasOffice = document.getElementById("osasOffice");
const misoOffice = document.getElementById("misoOffice");
const guidanceOffice = document.getElementById("guidanceOffice");
const registrarOffice = document.getElementById("registrarOffice");
const admissionOffice = document.getElementById("admissionOffice");
const principalOffice = document.getElementById("principalOffice");


fpmoBtn.addEventListener("click",  function () {
    window.location.href = "secondary_content.html";
} );

cashierBtn.addEventListener("click",  function () {
    window.location.href = "cashierOffice.html";
} );

libraryBtn.addEventListener("click",  function () {
    window.location.href = "libraryDepartment.html";
} );

clinicOffice.addEventListener("click",  function () {
    window.location.href = "clinicOffice.html";
});

osasOffice.addEventListener("click",  function () {
    window.location.href = "OsasOffice.html";
});

misoOffice.addEventListener("click",  function () {
    window.location.href = "misoOffice.html";
});

guidanceOffice.addEventListener("click",  function () {
    window.location.href = "guidanceOffice.html";
});

registrarOffice.addEventListener("click", function () {
    window.location.href = "registrarOffice.html";
});

admissionOffice.addEventListener("click", function () {
    window.location.href = "admissionOffice.html";
});

principalOffice.addEventListener("click",  function () {
    window.location.href = "principalOffice.html";
} );

// end

