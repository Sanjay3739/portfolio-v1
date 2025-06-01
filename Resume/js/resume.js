document.getElementById('downloadPdf').addEventListener('click', function () {
    // Path to your PDF file
    const pdfPath = 'Sanjay_Makwana_AI_Developer_2025.pdf';

    // Show loader, hide text
    document.getElementById('btnText').style.display = 'none';
    document.getElementById('btnLoader').style.display = 'inline-block';

    // Disable button during download
    this.disabled = true;

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Sanjay_Makwana_AI_Developer_2025.pdf'; // Set the filename for download

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // For better UX, you can add a small delay before resetting the button
    setTimeout(() => {
        // Hide loader, show text
        document.getElementById('btnText').style.display = 'inline-block';
        document.getElementById('btnLoader').style.display = 'none';
        this.disabled = false;
    }, 1000); // Adjust time as needed
});