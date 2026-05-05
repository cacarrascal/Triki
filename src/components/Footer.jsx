import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/img/1.png" alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-text">
          <span className="footer-name">Realizado por Carlos Carrascal</span>
          <span className="footer-copy">© {new Date().getFullYear()} Juego</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer