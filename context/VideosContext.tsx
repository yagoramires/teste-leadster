'use client';
import { createContext, useState, useEffect } from 'react';
import db from '@/db.json';
import { IVideo } from '@/interfaces/IVideos';

interface VideoContextProps {
  children: React.ReactNode;
}

interface VideoProps {
  videos: Array<IVideo>;
}

const initialValue = {
  videos: [],
};

export const VideosContext = createContext<VideoProps>(initialValue);

export const VideosProvider = ({ children }: VideoContextProps) => {
  const [videos, setVideos] = useState<IVideo[]>(initialValue.videos);

  useEffect(() => {
    setVideos(db);
  }, []);

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};
