import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Server {
  id: string;
  name: string;
  icon: string | null; // URL or null if no icon
}

// Mock data for servers with unique images
const mockServers: Server[] = [
  {
    id: '1',
    name: 'Gaming Community',
    icon: 'https://picsum.photos/id/1018/200/200', // Unique image for gaming
  },
  {
    id: '2',
    name: 'Music Lovers',
    icon: 'https://picsum.photos/id/1015/200/200', // Unique image for music
  },
  {
    id: '3',
    name: 'Art Enthusiasts',
    icon: 'https://picsum.photos/id/1016/200/200', // Unique image for art
  },
  {
    id: '4',
    name: 'Tech Talk',
    icon: 'https://picsum.photos/id/1019/200/200', // Unique image for tech
  },
  {
    id: '5',
    name: 'Book Club',
    icon: 'https://picsum.photos/id/1020/200/200', // Unique image for books
  },
  {
    id: '6',
    name: 'Fitness Group',
    icon: 'https://picsum.photos/id/1021/200/200', // Unique image for fitness
  },
  {
    id: '7',
    name: 'Travel Enthusiasts',
    icon: 'https://picsum.photos/id/1022/200/200', // Unique image for travel
  },
  {
    id: '8',
    name: 'Foodies Unite',
    icon: 'https://picsum.photos/id/1023/200/200', // Unique image for food
  },
];

export function ServerSelectionPage() {
  const [servers] = useState<Server[]>(mockServers); // Use mock data
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelectServer = (serverId: string) => {
    setSelectedServer(serverId);
  };

  const handleContinue = () => {
    if (selectedServer) {
      navigate(`/next-page/${selectedServer}`); // Adjust the route as needed
    }
  };

  const handleManageServer = (serverId: string) => {
    // Navigate to the server management page
    navigate(`/manage-server/${serverId}`); // Adjust the route as needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Select Your Discord Server</h1>
      <p className="text-lg text-gray-300 mb-8 text-center">Choose a server from the list below:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Responsive grid layout */}
        {servers.length === 0 ? ( // Check if servers are loaded
          <p className="text-gray-300">No servers found.</p>
        ) : (
          servers.map((server) => (
            <div
              key={server.id}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-shadow hover:shadow-lg bg-gray-800 text-gray-300 border border-gray-600`} // Enhanced card design
              onClick={() => handleSelectServer(server.id)}
            >
              <img
                src={server.icon || 'https://picsum.photos/200/200'} // Use the server icon or a placeholder
                alt={`${server.name} icon`}
                className="w-16 h-16 rounded-full mb-2 object-cover" // Image styling
              />
              <span className="text-lg font-semibold">{server.name}</span> {/* Increased font size for better readability */}
              <button
                onClick={() => handleManageServer(server.id)}
                className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition-colors" // Orange button style
              >
                Manage Server
              </button>
            </div>
          ))
        )}
      </div>
      <button
        onClick={handleContinue}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-600 transition-opacity"
        disabled={!selectedServer}
      >
        Continue
      </button>
    </div>
  );
}