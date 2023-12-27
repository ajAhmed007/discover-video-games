//creating a component
//function based component 
//PascalCasing
function Message(){
    //jsx - format
    const name = ""
  
    if(name)
        return <h1>Hello + {name}</h1>
    return <h1>Hello World</h1>
}

//to use the component, it needs to be exported
export default Message