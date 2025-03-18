// import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Server {
  id: string;
  name: string;
}

const servers: Server[] = [
  { id: '1', name: 'Server One' },
  { id: '2', name: 'Server Two' },
  { id: '3', name: 'Server Three' },
];

export function Choose() {
  const navigate = useNavigate();

  const handleSelectServer = (serverId: string) => {
    // Store the selected server ID in local storage or state management
    localStorage.setItem('selectedServer', serverId);
    navigate('/'); // Redirect to the dashboard or desired page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Choose Your Server</h1>
      <ul className="space-y-2">
        {servers.map(server => (
          <li key={server.id}>
            <button
              onClick={() => handleSelectServer(server.id)}
              className="bg-orange-500 px-4 py-2 rounded-lg hover:opacity-90"
            >
              {server.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
