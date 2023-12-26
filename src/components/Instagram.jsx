import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';


const Instagram = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://windy-probable-antique.glitch.me/instagram-media');
        console.log('Respuesta completa:', response);

        setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
    <h1>Mi Instagram</h1>
    <section id="feed-contenedor">
      <div className="main-galery">
        <div className="contenedor-galery">
          <div className="galery">
            {data &&
              data.map((item) => (
                <div key={item.id} className={item.media_type === 'VIDEO' ? 'video' : 'image'}>
                  {item.media_type === 'VIDEO' ? (
                    <div className="opacity-hover">
                      <ReactPlayer
                        url={item.media_url}
                        className="video-player"
                        width="100%"
                        height="100%"
                        controls
                      />
                       <div className="caption">
                    <a href='https://www.instagram.com/falexisvegas/' target="_blank" rel="noopener noreferrer" className="caption-link">
                      Ver en Instagram
                    </a>
                  </div>
                  {/* <div className="date">{item.timestamp}</div> */}
                    </div>
                  ) : (
                    <div className="opacity-hover">
                      <img src={item.media_url} alt={`Media ${item.id}`} />
                      <a href="https://www.instagram.com/falexisvegas/" target="_blank" rel="noopener noreferrer" className="caption-link">
                      Ver en Instagram
                     </a>
                     {/* <div className="date">{item.timestamp}</div> */}
                    </div>
                  )}
                  <div className="caption">
                    <a href='https://www.instagram.com/falexisvegas/' target="_blank" rel="noopener noreferrer" className="caption-link">
                      Ver en Instagram
                    </a>
                  </div>
                  <div className="date">{item.timestamp}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  </div>  
  );
};

export default Instagram;
