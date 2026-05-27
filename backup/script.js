document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const serverIp = document.getElementById('server-ip').innerText;

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(serverIp).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'COPIED!';
            copyBtn.style.backgroundColor = 'var(--mc-grass-top)';
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = 'var(--mc-stone-dark)';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy IP: ', err);
        });
    });
});
