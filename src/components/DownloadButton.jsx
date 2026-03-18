import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = () => {

    const downloadPDF = async () => {

        const element = document.getElementById("resume");
        if (!element) return;

        try {
            // Save original styles
            const originalTransform = element.parentElement?.style.transform;
            const originalTransformOrigin = element.parentElement?.style.transformOrigin;

            // Temporarily remove the scale transform for accurate capture
            if (element.parentElement) {
                element.parentElement.style.transform = "none";
                element.parentElement.style.transformOrigin = "top left";
            }

            // Wait for reflow
            await new Promise((r) => setTimeout(r, 100));

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                scrollY: 0,
                scrollX: 0,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight,
                width: element.scrollWidth,
                height: element.scrollHeight,
            });

            // Restore original styles
            if (element.parentElement) {
                element.parentElement.style.transform = originalTransform || "";
                element.parentElement.style.transformOrigin = originalTransformOrigin || "";
            }

            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF("p", "mm", "a4");

            const pdfWidth = 210;
            const pdfHeight = 297;

            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;

            // If content fits on one page
            if (imgHeight <= pdfHeight) {
                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            } else {
                // Multi-page: slice the canvas into page-sized chunks
                const pageCanvas = document.createElement("canvas");
                const pageCtx = pageCanvas.getContext("2d");

                const scaledPageHeight = (pdfHeight * canvas.width) / pdfWidth;
                let remainingHeight = canvas.height;
                let sourceY = 0;
                let pageNum = 0;

                while (remainingHeight > 0) {
                    const sliceHeight = Math.min(scaledPageHeight, remainingHeight);

                    pageCanvas.width = canvas.width;
                    pageCanvas.height = sliceHeight;

                    pageCtx.fillStyle = "#ffffff";
                    pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);

                    pageCtx.drawImage(
                        canvas,
                        0, sourceY, canvas.width, sliceHeight,
                        0, 0, canvas.width, sliceHeight
                    );

                    const pageImgData = pageCanvas.toDataURL("image/png");
                    const pageImgHeight = (sliceHeight * pdfWidth) / canvas.width;

                    if (pageNum > 0) {
                        pdf.addPage();
                    }

                    pdf.addImage(pageImgData, "PNG", 0, 0, imgWidth, pageImgHeight);

                    sourceY += sliceHeight;
                    remainingHeight -= sliceHeight;
                    pageNum++;
                }
            }

            pdf.save("resume.pdf");

        } catch (error) {
            console.error("PDF Download Error:", error);
        }
    };

    return (
        <button
            onClick={downloadPDF}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-sm flex items-center gap-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
        </button>
    );
};

export default DownloadButton;