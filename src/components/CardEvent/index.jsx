export function CardEvents({ event }) {
  return (
    <div className="bg-[#212121] flex-col w-[282px] h-[420px]  text-white rounded-xl">
      <img src={event.image} alt={event.title} className="" />
      <div className="py-5 px-4 flex-col gap-2 Orbitron,sans-serif">
        <p className="rounded-lg bg-[#4A4949] font-light mt-4 p-2 uppercase inline-block">
          {event.topic.nome}
        </p>
        <p className="text-sm font-normal mt-2">
          {event.date.toLocaleDateString("pt-BR")}
        </p>
        <h4 className=" font-bold text-2xl mt-4 leading-[1.25]">
          {event.title}
        </h4>
      </div>
    </div>
  );
}
