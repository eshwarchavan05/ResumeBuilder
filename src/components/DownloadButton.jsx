import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = () => {

    const downloadPDF = async () => {

        const element = document.getElementById("resume");
        if (!element) return;

        try {

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false
            });

            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF("p", "mm", "a4");

            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {

                position = heightLeft - imgHeight;
                pdf.addPage();

                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("resume.pdf");

        } catch (error) {
            console.error("PDF Download Error:", error);
        }
    };

    return (
        <button
            onClick={downloadPDF}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-sm"
        >
            Download Resume
        </button>
    );
};

export default DownloadButton;