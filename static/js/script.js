// static/js/script.js
function validateForm() {
    const linkInput = document.querySelector('input[name="link"]');
    const downloadTypeSelect = document.querySelector('select[name="download_type"]');
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';

    if (linkInput.value.trim() === '') {
        errorMessage.innerText = 'Please enter a valid YouTube link.';
        return false; // Prevent form submission
    }

    // You can add more validation here if needed

    const downloadType = downloadTypeSelect.value;

    if (downloadType === 'video') {
        downloadVideo(linkInput.value);
    } else if (downloadType === 'playlist') {
        downloadPlaylist(linkInput.value);
    }

    return false; // Prevent default form submission
}

function downloadVideo(vlink) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.display = 'block';

    try {
        v = YouTube(vlink);
        v.streams.get_highest_resolution().download({
            on_progress: (chunk, file_handle, bytes_remaining) => {
                const percentComplete = ((1 - bytes_remaining / chunk) * 100).toFixed(2);
                const progressBarInner = document.getElementById('progress-bar-inner');
                progressBarInner.style.width = percentComplete + '%';
            }
        });

        Swal.fire('Success', 'Download completed', 'success');
    } catch (error) {
        Swal.fire('Error', 'Sorry! This Video is Unavailable', 'error');
    }

    progressBar.style.display = 'none';
}
