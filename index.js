// accordion functionality
const acc = document.querySelectorAll(".accordion");

acc.forEach((btn) => {
    btn.onclick = function() {
        this.classList.toggle("active");

        let arrow = this.querySelector(".arrow");
        arrow.classList.toggle("up");

        let content = this.nextElementSibling;
        if (content.style.height) {
            content.style.height = null;
        } else { 
            content.style.height = content.scrollHeight + 15 + "px";
        }
    }
})