import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
// import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Projects I have been working on',
    },
    { name: 'resume', description: 'Experience' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
          {!contactSelected ? (
            <>
              <Portfolio currentCategory={currentCategory}></Portfolio>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;