const PdfReader = ({ src }) => {
    const zoom = 1.6;
    const pdfUrlWithZoom = `${src}#zoom=${zoom * 100}`;

    return (
        <div>
            <iframe
                src={pdfUrlWithZoom}
                title="PDF Viewer"
                width="1500px"
                height="600px"
                allowFullScreen
                allow="fullscreen; encrypted-media; clipboard-read; clipboard-write"
            />
        </div>
    );
};

export default PdfReader;