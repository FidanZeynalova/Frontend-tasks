import ScrollVideo from './components/ScrollVideo';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
      
      {/* Giriş Bölməsi */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#13bea267', color: '#000' }}>
        <h1 style={{ fontSize: '3rem' }}>Down Scroll...</h1>
      </section>

      {/* Video Bölməsi */}
      <ScrollVideo src="https://www.w3schools.com/html/mov_bbb.mp4" />

      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#c90a3373', color: '#000' }}>
        <h1>End of the video</h1>
      </section>

    </div>
  );
}

export default App;