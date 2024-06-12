import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoGallery = () => {
  const videos = [
    'https://youtu.be/BV2ymCz747E?si=ayE9-0G06Ah8NwpZ',
    'https://youtu.be/Frww4EP1ws8?si=4AuhcBdL_XtZZnG4',
    'https://youtu.be/Frww4EP1ws8?si=1gWakDttxvXJwGc7',
    'https://youtu.be/BV2ymCz747E?si=ayE9-0G06Ah8NwpZ',
    'https://youtu.be/Frww4EP1ws8?si=4AuhcBdL_XtZZnG4',
    'https://youtu.be/BV2ymCz747E?si=ayE9-0G06Ah8NwpZ'
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {videos.map((video, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url={video} className="w-full h-full object-cover" controls />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
