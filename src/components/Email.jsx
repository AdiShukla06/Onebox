// Email.jsx
import React, { useEffect, useState } from 'react';
import { resetData, listMails } from '../apiService';
import Editor from './Editor'; // Import the Editor component
import { useDarkMode} from './DarkModeContext'

function Email() {
  const { darkMode} = useDarkMode();

  const [mails, setMails] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [currentThreadId, setCurrentThreadId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    
    // Reset data
    resetData()
      .then(response => console.log('Data reset successfully'))
      .catch(error => console.error('Error resetting data:', error));

    // List all mails
    listMails()
      .then(response => {
        console.log('API Response:', response.data);
        if (Array.isArray(response.data.data)) {
          setMails(response.data.data);
        } else {
          console.error('Unexpected response format');
        }
      })
      .catch(error => {
        console.error('Error fetching mails:', error);
        setError(error);
      });
  }, []);

  const handleViewMessages = (threadId) => {
    const selectedMail = mails.find(mail => mail.threadId === threadId);
    if (selectedMail) {
      const allMessages = [selectedMail, ...(selectedMail.replies || [])];
      setMessages(allMessages);
    }
    setSelectedThread(threadId);
  };

  const handleDelete = (threadId) => {
    setMails(mails.filter(mail => mail.threadId !== threadId));
    setMessages([]);
    setSelectedThread(null);
  };

  const handleReply = (threadId) => {
    setCurrentThreadId(threadId);
    setShowEditor(true);
  };
  
  const handleKeyDown = (event) => {
    
    if (event.key === 'd' || event.key === 'D') {
      event.preventDefault(); // Prevent default behavior if necessary
      handleDelete(selectedThread); // Call the delete function
    }
    if (event.key === 'r' || event.key === 'R') {
      event.preventDefault(); // Prevent default behavior if necessary
      handleReply(selectedThread); // Call the delete function
    }
  
  };

  window.addEventListener('keydown', handleKeyDown);

  const handleEditorClose = (newReply) => {
    if (newReply) {
      const originalMail = mails.find(mail => mail.threadId === currentThreadId);
      if (!originalMail) return;

      const updatedMails = mails.map(mail =>
        mail.threadId === currentThreadId ? { ...mail, replies: [...(mail.replies || []), newReply] } : mail
      );

      setMails(updatedMails);
      setMessages([...messages, newReply]);
    }
    setShowEditor(false);
  };
// ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}
  return (
    <div className={`font-sans ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ height: '200vh' }}>
      <div className="flex">
        {/* Left Part */}
        <div className="w-1/4 p-4 border-r border-white border-opacity-30">
          <h2 className="text-3xl text-blue-400 font-bold mb-4">All Inbox(s)</h2>
          <input
            type="text"
            placeholder="Search"
            className={`w-full p-2 mb-4 border border-gray-500 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black font-bold border-black'}`}
          />
          <ul className="list-none p-0">
            {Array.isArray(mails) ? (
              mails.map(mail => (
                <li 
                onClick={() => handleViewMessages(mail.threadId)} 
                  key={mail.threadId}
                  className={`mb-7 p-4 border-b border-opacity-30 cursor-pointer ${darkMode ? 'border-white' : 'border-black'}`} 
                >
                  <strong>Subject:</strong> {mail.subject}<br />
                  
                </li>
              ))
            ) : (
              <p className="text-white">No mails to display</p>
            )}
          </ul>
        </div>

        {/* Middle Part */}
        <div className={`w-1/2 p-4 border-x  border-opacity-30 ${darkMode ? 'border-white' : 'border-black'}`}>
          {selectedThread ? (
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? ' text-white' : 'text-black'} mb-4`}>
                {mails.find(mail => mail.threadId === selectedThread)?.fromName}<br />
                {mails.find(mail => mail.threadId === selectedThread)?.fromEmail}
              </h1>
              <div className="flex justify-end mb-4">
                <button className="bg-gray-700 text-white py-1 px-4 rounded mr-2">
                  More Options
                </button>
                <button className="bg-gray-700 text-white py-1 px-4 rounded">
                  Move
                </button>
              </div>
              <ul className="list-none p-0">
                {messages.map(message => (
                  <li key={message.id} className={`${darkMode ? ' text-white' : ' text-black'} mb-6 p-4 border border-gray-700 rounded-md`}>
                    <div className="mb-4">
                      <strong>From:</strong> {message.fromName} ({message.fromEmail})<br />
                      <strong>To:</strong> {message.toEmail}<br />
                      <strong>Subject:</strong> {message.subject}<br />
                      <strong>Sent At:</strong> {new Date(message.sentAt).toLocaleString()}<br />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: message.body }} />
                    <div className="mt-4 flex">
                      <button 
                        onClick={() => handleReply(selectedThread)} 
                        className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                      >
                        Reply
                      </button>
                      <button 
                        onClick={() => handleDelete(selectedThread)} 
                        className="bg-red-500 text-white py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className={ `${darkMode ? ' text-white' : 'text-black'}`}>Select a mail to view details</p>
          )}
        </div>

        {/* Right Part */}
        <div className="w-1/4 p-4">
          <h2 className={`text-lg ${darkMode ? 'text-white' : ' text-black'} mb-4`}>Lead Details</h2>
          <div className={`${darkMode ? ' text-white' : 'text-black'}`}>
            <p className='mb-4'><strong>Name:</strong> {selectedThread ? mails.find(mail => mail.threadId === selectedThread)?.fromName : 'N/A'}</p>
            <p className='mb-4'><strong>Email ID:</strong> {selectedThread ? mails.find(mail => mail.threadId === selectedThread)?.fromEmail : 'N/A'}</p>
            
            <p className='mb-4'><strong>Company Name:</strong> ReachInbox</p>
          </div>
        </div>
      </div>

      {showEditor && <Editor 
      onClose={handleEditorClose} threadId={currentThreadId} 
      mails={mails}/>}
    </div>
  );
}

export default Email;
