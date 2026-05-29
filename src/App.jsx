import { useState } from 'react';
import './index.css';
import ASCIIText from './components/ASCIIText';
import Ballpit from './components/Ballpit';
import { CustomCursor } from './components/CustomCursor';
import { Copy, Check, Download, Swords, Globe2, Shield, Users } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const serverIp = "wrecking-qualifications.gl.joinmc.link";

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIp).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <CustomCursor />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <Ballpit
          count={200}
          gravity={0}
          friction={0.8}
          wallBounce={1}
          followCursor={false}
          colors={[0xffffff, 0xee1515, 0x222222]}
        />
      </div>
        <header className="hero">
        <div className="hero-content">
          <div style={{ height: '300px', width: '100vw', maxWidth: '1200px', position: 'relative' }}>
            <ASCIIText text="VITAP POKEMON" textFontSize={150} asciiFontSize={8} enableWaves={true} />
          </div>
          <p className="subtitle" style={{ marginTop: '-4rem' }}>Experience the ultimate Cobbleverse Modpack.</p>
          <a href="#play" className="btn btn-primary">
            <Swords size={20} />
            Start Playing
          </a>
        </div>
      </header>

      <main>
        <section id="features" className="section block-container">
          <h2 className="section-title">Server Features</h2>
          <div className="features-grid">
            
            <div className="glass-panel feature-card">
              <div className="feature-icon-wrapper" style={{ color: 'var(--accent-blue)' }}>
                <Globe2 size={24} />
              </div>
              <h3>1000+ Pokémon</h3>
              <p>Catch 'em all! From Gen 1 to Gen 9, complete your living Pokedex with full custom animations.</p>
            </div>
            
            <div className="glass-panel feature-card">
              <div className="feature-icon-wrapper" style={{ color: 'var(--accent-purple)' }}>
                <Shield size={24} />
              </div>
              <h3>Smart Battle HUD</h3>
              <p>Real-time catch rates, weather effects, and move tooltips directly in your interface.</p>
            </div>
            
            <div className="glass-panel feature-card">
              <div className="feature-icon-wrapper" style={{ color: 'var(--accent-red)' }}>
                <Users size={24} />
              </div>
              <h3>Epic Raids</h3>
              <p>Team up with friends for 1-7 Star Raids and earn rare loot to enhance your team.</p>
            </div>
            
            <div className="glass-panel feature-card">
              <div className="feature-icon-wrapper" style={{ color: 'var(--accent-gold)' }}>
                <Swords size={24} />
              </div>
              <h3>Custom Gyms</h3>
              <p>Defeat Gym Leaders across custom regions and rise through the ranks to become the Champion!</p>
            </div>

          </div>
        </section>

        <section id="play" className="section block-container">
          <h2 className="section-title">Join The Adventure</h2>
          <div className="join-grid">
            
            <div className="glass-panel">
              <h3>Server Connection</h3>
              <p className="subtitle" style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                Copy the IP below to join the server directly.
              </p>
              <div className="ip-box">
                <span className="ip-text">{serverIp}</span>
                <button 
                  className="btn btn-primary" 
                  onClick={handleCopy}
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
            
            <div className="glass-panel flex flex-col justify-between">
              <div>
                <h3>Client Mods</h3>
                <p className="subtitle" style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  Download the required modpack to join the server.
                </p>
              </div>
              <a href="https://github.com/Izhaan-Raza/pokemon_site/raw/main/public/MODS.7z" download className="btn btn-outline" style={{ width: '100%' }}>
                <Download size={20} />
                Download Modpack
              </a>
            </div>

          </div>
        </section>

        <section id="seed-map" className="section block-container">
          <h2 className="section-title">World Map</h2>
          <div className="map-container">
            <iframe src="https://mcseeder.com/?seed=4942960352180798556&version=1.21" title="MCSeeder Map" className="map-iframe"></iframe>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p className="dev-credits">Designed by <span className="highlight-blue">lost ORCA</span> & <span className="highlight-purple">YODA</span></p>
        </div>
      </footer>
    </>
  );
}

export default App;
