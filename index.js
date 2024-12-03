function changeImage(newImageUrl) {
    const profilePicture = document.getElementById("profilePicture");
    profilePicture.style.backgroundImage = `url('${newImageUrl}')`;
}