const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center mb-4">Sobre Nosotros</h1>
      <div className="row">
        <div className="col-md-6">
          {/* You can add an image here later */}
          <div className="bg-secondary rounded" style={{ minHeight: '300px' }}></div>
        </div>
        <div className="col-md-6">
          <h2>Nuestra Filosofía</h2>
          <p>
            En Vargas Hair, creemos que un buen corte de pelo puede cambiar tu día. 
            Nuestra filosofía se basa en la calidad, la atención al detalle y un servicio al cliente excepcional.
            Nos esforzamos por crear un ambiente relajado y profesional donde puedas sentirte cómodo y seguro de que estás en las mejores manos.
          </p>
          <p>
            Nuestro equipo está en constante formación para estar al día de las últimas técnicas y tendencias, 
            asegurando que siempre recibas un servicio moderno y de la más alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
