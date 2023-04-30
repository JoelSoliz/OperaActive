import Link from "next/link";

const Objectives = () => {
  return (
    <div id="objetivos" className="py-8 px-20 flex flex-col gap-4">
      <h2 className="text-3xl font-serif font-bold">Objetivos</h2>
      <div className="flex items-center justify-between flex-wrap -mt-4">
        <div className="max-w-3xl text-lg font-serif flex flex-col gap-2">
          <span>
            Nuestro objetivo es facilitar la conexión entre empresas que
            necesitan voluntarios y personas que desean ofrecer su tiempo, y
            habilidades para trabajar en proyectos de voluntariado.
          </span>
          <span>Algunos de los objetivos de la plataforma:</span>
          <ul className="list-disc list-inside ml-2">
            <li className="list-item">
              Facilitar la búsqueda de oportunidades de voluntariado, a través
              de un sistema de filtrado y búsqueda personalizado.
            </li>
            <li>
              Simplificar el proceso de registro y gestión de voluntarios,
              permitiendo a las empresas llevar un seguimiento de las
              habilidades y experiencia de los voluntarios, así como su
              disponibilidad.
            </li>
            <li>
              Fomentar la transparencia y la responsabilidad en el proceso de
              voluntariado, a través de un sistema de evaluación y
              retroalimentación por parte de las empresas y los voluntarios.
            </li>
          </ul>
        </div>
        <div className="flex justify-center m-[10px_auto] bg-[#d4d0e8] rounded-full py-12">
          <img src="/assets/colaborar.png" className="h-60" />
        </div>
      </div>
      <div className="flex flex-wrap mt-8 gap-20 justify-center font-serif font-bold text-lg text-blue-50">
        <Link
          href="/"
          className="flex flex-col items-center justify-center bg-[#ffa093] rounded-full py-8 px-10 hover:scale-110 hover:text-red-100"
        >
          <img
            src="/assets/collaborator.png"
            alt="Colaborador"
            className="h-40"
          />
          <span className="max-w-[200px] text-center">
            Interesado en ser un colaborador
          </span>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center justify-center bg-[#62a897] rounded-full py-8 hover:scale-110 hover:text-green-100"
        >
          <img
            src="/assets/collaborators.png"
            alt="Colaboradores"
            className="h-40"
          />
          <span className="max-w-[200px] text-center">
            Interesado en buscar colaboradores
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Objectives;
