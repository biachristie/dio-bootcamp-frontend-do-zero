const audio = document.getElementById("music");

window.addEventListener("click", () => {
    audio.volume = 0.2;
    audio.play();
})

function switchTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    const theme = document.body.classList[0];
    const music = theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg";

    audio.src = `assets/audios/${ music }`;
    audio.volume = 0.2;
    audio.play();
}