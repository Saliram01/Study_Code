import Header from './Components/Profile';
import Footer from './Components/Footer';
import ContextProvider from './Context/Context.jsx'

function App() {
  
  return (
    <div className='grid place-content-center h-screen'>
    <ContextProvider>
      <Header/>
      <Footer/>
    </ContextProvider>
      
    </div>
  )
}

export default App