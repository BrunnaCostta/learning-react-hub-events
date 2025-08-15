
import {FieldForm} from '../FieldForm'
import {InputForm} from '../InputForm'
import {TitleForm} from '../TitleForm'
import { ButtonForm } from '../ButtonForm'
import { ListForm } from '../ListFrom'



export function LabelForm({children,htmlFor,className}){
  return(
   <label htmlFor={htmlFor} className={className}>
   {children}
 </label>
  )
}


export function FormCourse() {
  return (
    <>
      <form className='flex flex-col form-event w-[384px] md:w-[484px] items-center rounded-2xl'>
       <TitleForm>Preencha para criar um evento</TitleForm>

        <FieldForm>
          <LabelForm className='label'>Qual o nome do evento?</LabelForm>
          <InputForm type="text"  placeholder='Dicas para iniciante' />

          <LabelForm className='label'>Data do evento</LabelForm>
        
          <InputForm type="date"   placeholder="dd/mm/aaaa"/>

          <LabelForm className='label'>Tema do evento</LabelForm>
           <ListForm/>
        </FieldForm>
          <ButtonForm type="submit">Criar evento</ButtonForm>
      </form>
    </>
  );
}