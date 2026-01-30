import { useState } from 'react'
import ResumePage from './components/ResumePage'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  const pages: Record<string, React.ReactNode> = {
    "Home": <HomePage />,
    "Projects": <h1>Projects</h1>,
    "Resume": <ResumePage />,
    "Section 4": <h1>Section 4</h1>,
  }

  return (
    <div className="scrollbar-gutter">
      <NavBar pages={Object.keys(pages)} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {pages[currentPage]}
    </div>
  )
}

export default App

