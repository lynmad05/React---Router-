import { Link, useParams } from 'react-router';
import { useCounterStore } from '../stores/counter.store';

const CharacterDetailPage = () => {
  const { id } = useParams();

  const count = useCounterStore(state => state.count);
  const inc = useCounterStore(state => state.inc);

  return (
    <article className="py-5">
      <div className="container">
        <nav className="mb-4">
          <Link to="/characters" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-2"></i>
            Volver a personajes
          </Link>
        </nav>

        <header className="text-center">
          <h1 className="display-5 fw-bold">
            <i className="bi bi-person-badge me-2"></i>
            Detalle del Personaje {count}
          </h1>
          <button className="btn btn-primary btn-sm" onClick={inc}>
            Incrementar
          </button>

          <p className="lead text-muted">ID: {id}</p>
        </header>

        <section className="alert alert-info border-0 shadow-sm">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-info-circle fs-3"></i>
            <div>
              <h5 className="mb-1">Próximamente</h5>
              <p className="mb-0">Aquí irá toda la información detallada del personaje</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default CharacterDetailPage;
