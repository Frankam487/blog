const Work = () => {
  return (
    <div className="work">
      <div className="title">
        <span></span>
        <h2>GALLERY</h2>
        <span></span>
      </div>
      <div className="work-container">
        <div className="card">
          <img src="../../public/imgs/features-01.jpg" alt="" />
          <div className="quality">
            <h2>Qualité</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem animi numquam. Rerum, fugit at.</p>
            <button>Lire plus</button>
          </div>
        </div>
        <div className="card">
          <img src="../../public/imgs/features-01.jpg" alt="" />
          <div className="quality">
            <h2>Time</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem animi numquam. Rerum, fugit at.</p>
            <button>Lire plus</button>
          </div>
        </div>
        <div className="card">
          <img src="../../public/imgs/features-01.jpg" alt="" />
          <div className="quality">
            <h2>Passion</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem animi numquam. Rerum, fugit at.</p>
            <button>Lire plus</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;