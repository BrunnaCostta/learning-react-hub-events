

export function InputForm({children, type, placeholder}){
return(
    <input type={type}  className="input bg-transparent text-white" placeholder={placeholder}  >{children}</input>
)

}