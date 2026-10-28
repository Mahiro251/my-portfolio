// Open video inside the popup modal
function openVideo(url) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
            <iframe src="${url}?autoplay=1" 
                    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" 
                    allow="autoplay" allowfullscreen>
            </iframe>
        </div>
    `;
    modal.style.display = 'flex';
}

// Open high-resolution image inside the popup modal
function openImage(url) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `<img src="${url}" style="width:100%; height:auto; display:block;">`;
    modal.style.display = 'flex';
}

// Close the popup modal
function closeModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modal.style.display = 'none';
    modalBody.innerHTML = '';
}

// Copy Discord tag and show the notification toast
function copyDiscord() {
    const discordTag = document.getElementById('discord-tag').innerText;
    
    navigator.clipboard.writeText(discordTag).then(() => {
        const toast = document.getElementById('toast');
        toast.className = "toast show";
        setTimeout(() => { 
            toast.className = toast.className.replace("show", ""); 
        }, 3000);
    });
}