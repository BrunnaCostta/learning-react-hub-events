import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FormCourse } from "./components/LabelForm/index";
import { Topic } from "./components/Topic";
import { CardEvents } from "./components/CardEvent";

import "./App.css";

function App() {
  const topic = [
    { id: 1, nome: "Front-end" },
    { id: 2, nome: "Back-end" },
    { id: 3, nome: "DevOps" },
    { id: 4, nome: "Inteligência Artifical" },
    { id: 5, nome: "Data Science" },
    { id: 6, nome: "Cloud" },
  ];

  const [event, setEvent] = useState([
    {
      image:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      topic: topic[0],
      date: new Date(),
      title: "Mulheres no front",
    },
  ]);

  function addEvent(evento) {
    const newEvent = {
      ...evento,
      date: new Date(evento.date),
    };
    setEvent([...event, newEvent]);
  }

  return (
    <main>
      <header className="bg-primary w-full text-center p-2">
        <p className="text-white text-xl font-serif">TechTeco</p>
      </header>

      <section className="bg-gradient-to-b from-[#17E4B9] to-[#091D24] flex justify-center w-screen">
        <img src="anner.png" alt="Banner" />
      </section>

      <div className="body pt-12">
        <FormCourse topic={topic} aoSubmeter={addEvent} />

        <section className="container">
          {topic.map((tema) => {
            const eventosDoTema = event.filter(
              (evento) => evento.topic.id === tema.id
            );

            if (eventosDoTema.length === 0) {
              return null;
            }

            return (
              <section key={tema.id} className="body">
                <Topic topic={tema} />
                <div className="eventos ">
                  {eventosDoTema.map((evento, index) => (
                    <CardEvents event={evento} key={index} />
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
