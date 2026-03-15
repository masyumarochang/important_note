function reveal(id,btn){
    const target = document.getElementById(id);
    target.style.display = "block";
    btn.style.display = "none";
}

const warningBtn = document.getElementById("morewarningbtn");

const warningText = document.getElementById("morewarning")

warningBtn.addEventListener("click",()=>{
    warningText.textContent = "自殺表現、器の広さを舐め腐った言葉など"
})