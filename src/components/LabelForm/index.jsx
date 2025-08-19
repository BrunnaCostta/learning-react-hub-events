import { FieldForm } from "../FieldForm";
import { InputForm } from "../InputForm";
import { TitleForm } from "../TitleForm";
import { ButtonForm } from "../ButtonForm";
import { ListForm } from "../ListFrom";
import { Topic } from "../Topic";

export function LabelForm({ children, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}

export function FormCourse({ topic, aoSubmeter }) {
  function handleSubmit(formData) {
    console.log("opa", formData);
    const event = {
      image: formData.get("enderecoCapa"),
      topic: topic.find(function (item) {
        return item.id == formData.get("topic");
      }),
      date: formData.get("data"),
      title: formData.get("nomeEvento"),
    };
    aoSubmeter(event);
  }

  return (
    <form
      className="flex flex-col form-event w-[384px] md:w-[484px] items-center rounded-2xl"
      action={handleSubmit}
    >
      <TitleForm>Preencha para criar um evento</TitleForm>

      <FieldForm>
        <LabelForm className="label" htmlFor="topic">
          Qual o nome do evento?
        </LabelForm>
        <InputForm
          type="text"
          name="nomeEvento"
          placeholder="Dicas para iniciante"
        />
        <LabelForm className="label" htmlFor="enderecoCapa">
          Qual o endereço da imagem de capa?
        </LabelForm>
        <InputForm type="text" name="enderecoCapa" placeholder="https://..." />

        <LabelForm className="label" htmlFor="data">
          Data do evento
        </LabelForm>
        <InputForm type="date" name="data" placeholder="dd/mm/aaaa" />

        <LabelForm className="label" htmlFor="temaEvento">
          Tema do evento
        </LabelForm>
        <ListForm
          id="topic"
          name="topic"
          itens={topic}
          className="text-white"
        />
      </FieldForm>

      <ButtonForm type="submit">Criar evento</ButtonForm>
    </form>
  );
}
