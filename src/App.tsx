import './App.css'
import { Outlet } from 'react-router'
import MenuComp from './components/MenuComp'
import FooterComp from './components/FooterComp'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <MenuComp></MenuComp>
      <main>
        <Outlet></Outlet>
      </main>
      <FooterComp></FooterComp>
    </ThemeProvider>
  )
}

export default App
