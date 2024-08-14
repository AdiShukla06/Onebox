// Editor.jsx
import React, { useState, useEffect } from 'react';

function Editor({ onClose, threadId, mails }) {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const originalMail = mails.find(mail => mail.threadId === threadId);
    if (originalMail) {
      setTo(originalMail.toEmail);
      setFrom(originalMail.fromEmail);
      setSubject(`Re: ${originalMail.subject}`);
    }
  }, [threadId, mails]);

  const handleSend = () => {
    const newReply = {
      id: new Date().getTime(),
      body,
      fromEmail: from,
      fromName: '',
      toEmail: to,
      toName: '',
      sentAt: new Date().toISOString(),
      subject,
      threadId,
    };
    onClose(newReply);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-2/3">
        <h2 className="text-xl font-bold mb-4 border-b border-white border-opacity-30 pb-2">Reply</h2>
        <div className="mb-4 border-b border-white border-opacity-30 pb-2">
          <label className="block mb-2">To:</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
            readOnly
          />
        </div>
        <div className="mb-4 border-b border-white border-opacity-30 pb-2">
          <label className="block mb-2">From:</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
            readOnly
          />
        </div>
        <div className="mb-4 border-b border-white border-opacity-30 pb-2">
          <label className="block mb-2">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full h-40 p-2 border border-gray-500 rounded bg-gray-800 text-white"
            placeholder="Type your reply here..."
          />
        </div>
        <div className="flex justify-between items-center mt-4 border-t border-white border-opacity-30 pt-4">
          <div className="flex space-x-2">
            <button className="bg-gray-700 text-white py-2 px-4 rounded">Variables</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded">Save</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded">Attach</button>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Send
            </button>
            <button
              onClick={() => onClose(null)}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
