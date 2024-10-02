import React from 'react';

function Resume() {
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <iframe
        src="/resume.pdf"
        title="Resume"
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Resume;
