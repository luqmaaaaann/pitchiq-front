'use client';

import { useState, useEffect } from 'react';

export default function PDFViewer({ fileUrl }) {
  const [isClient, setIsClient] = useState(false);
  const [numPages, setNumPages] = useState();
  const [Document, setDocument] = useState(null);
  const [Page, setPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
    
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
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error('PDF Load Error:', error);
    setError(error.message);
  }

  if (!isClient || !Document || !Page) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading PDF...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-red-500 bg-red-50 rounded-lg p-6">
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-semibold mb-2">Failed to load PDF</p>
          <p className="text-sm text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center space-y-4 select-none">
      <Document 
        file={fileUrl} 
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading document...</span>
          </div>
        }
      >
        {Array.from(new Array(numPages), (_, idx) => (
          <div 
            key={`page_${idx + 1}`} 
            className="mb-4 shadow-md rounded-lg overflow-hidden select-none"
          >
            <Page 
              pageNumber={idx + 1} 
              width={600}
              className="border border-gray-200 rounded-lg select-none"
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </div>
        ))}
      </Document>
      {numPages && (
        <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {numPages} page{numPages > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}