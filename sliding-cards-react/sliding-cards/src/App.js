import './styles/styles.css';
import './index.css';
import Container from './Components/Container';





const images = [
  {
  id: 1,
  title:'Explore the World',
  image: 'https://images.unsplash.com/photo-1622793982988-02f826a73f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=548&q=80',
  // active: true
},
{
  id: 2,
  title:'Explore the World',
  image: 'https://images.unsplash.com/photo-1524779709304-40b5a3560c60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ODBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  // active: false
},
{
  id: 3,
  title:'Explore the World',
  image: 'https://images.unsplash.com/photo-1531384370597-8590413be50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fDgwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  // active: false
},
{
  id: 4,
  title:'Explore the World',
  image: 'https://images.unsplash.com/photo-1527333118761-68a5b86be367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fDgwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  // active: false
},
{
  id: 5,
  title:'Explore the World',
  image: 'https://images.unsplash.com/photo-1565656898731-61d5df85f9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fDgwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  // active: false
},
];


function App() {
  return (

    <div>

      <Container
        data = {images}
        />

    </div>
  );
}

export default App;
