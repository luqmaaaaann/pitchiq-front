'use client';

import { useState, useEffect } from 'react';

export default function PDFViewer({ fileUrl }) {
  const [isClient, setIsClient] = useState(false);
  const [numPages, setNumPages] = useState();
  const [Document, setDocument] = useState(null);
  const [Page, setPage] = useState(null);

  console.log(fileUrl);
  
  useEffect(() => {
    setIsClient(true);
    
    // Dynamic import react-pdf setelah component mount
    import('react-pdf').then(({ pdfjs, Document, Page }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString();
      
      setDocument(() => Document);
      setPage(() => Page);
    });
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!isClient || !Document || !Page) {
    return <div className="flex items-center justify-center h-96">Loading PDF...</div>;
  }

  return (
    <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (_, idx) => (
        <Page key={`page_${idx + 1}`} pageNumber={idx + 1} width={800} />
      ))}
    </Document>
  );
}