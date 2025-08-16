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

export function FormCourse({ topic }) {
  return (
    <form className="flex flex-col form-event w-[384px] md:w-[484px] items-center rounded-2xl">
      <TitleForm>Preencha para criar um evento</TitleForm>

      <FieldForm>
        <LabelForm className="label" htmlfor="nomeEvento">
          Qual o nome do evento?
        </LabelForm>
        <InputForm type="text" placeholder="Dicas para iniciante" />
        <LabelForm className="label" htmlfor="enderecoCapa">
          Qual o endereço da imagem de capa?
        </LabelForm>
        <InputForm type="text" placeholder="https://..." />

        <LabelForm className="label" htmlfor="data">
          Data do evento
        </LabelForm>
        <InputForm type="date" placeholder="dd/mm/aaaa" />

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
