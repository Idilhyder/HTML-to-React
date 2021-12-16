import '../styles/styles.css';
import Card from './card'


const Container =(props)=> {

 

  if (!props.data || props.data.length < 0) {
      return "No Images Available"
  }
  
  return (
    <div className="container">
      {props.data.map((item)=>{
        return (
          <Card 
          key = {item.id}
          items= {item}/>
        )
        })}

    </div>
  );
}

export default Container;
