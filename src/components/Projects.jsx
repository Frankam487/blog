const Projects = () => {
  return (
    <div className="projects">
      <div className="title">
        <span></span>
        <h2>PROJECTS</h2>
        <span></span>
      </div>
      <div className="container">
        <div className="image"></div>
        <div className="right">
          <div className="card">
            <img src="../../public/imgs/work-steps-1.png" height="70" alt="" />
            <div className="right">
              <h2>Analyse commerciale</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio reiciendis assumenda dignissimos?</p>
            </div>
          </div>
          <div className="card">
            <img src="../../public/imgs/work-steps-2.png" height="70" alt="" />
            <div className="right">
              <h2>Architecture</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio reiciendis assumenda dignissimos?</p>
            </div>
          </div>
          <div className="card">
            <img src="../../public/imgs/work-steps-3.png" height="70" alt="" />
            <div className="right">
              <h2>Développement</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio reiciendis assumenda dignissimos?</p>
            </div>
          </div>
            </div>
      </div>
    </div>
  );
};

export default Projects;