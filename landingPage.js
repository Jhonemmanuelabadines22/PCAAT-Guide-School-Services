
const goHomeBtn = document.getElementById("schoolOffice");
const strands = document.getElementById("g12strands");


goHomeBtn.addEventListener("click",  function () {
    window.location.href = "/Offices/main_content.html";
} ); 

strands.addEventListener("click", function () {
    window.location.href = "/Strands/g12strands.html";
});
