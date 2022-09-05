import { CardList } from './CardList';

export const Projects = () => {
  return (
    <section className="my-42" id="proyectos">
      <h2 className="font-extrabold text-5xl mb-10 text-center">Mis Proyectos</h2>
      <p className="text-slate-600 text-xl md:text-2xl md:w-2/4 mx-auto mb-10">
        Algunos de mis proyectos desarrolados como DESARROLADOR WEB <span className="font-bold">FRONT-END</span>,
        puedes ver el proyecto terminado y el código fuente en <span className="font-bold">GitHub</span>. 
      </p>
      
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 xl:cols-4'>
        <CardList />
      </div>
    </section>
  )
}
