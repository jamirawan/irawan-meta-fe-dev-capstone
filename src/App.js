import {
    Route, 
    Routes
  } from 'react-router-dom';
  import pages from './utils/pages';
  import Layout from './components/layout/Layout';
  import Home from './components/pages/Home';
  import About from './components/pages/About';
  import Bookings from './components/pages/Bookings';
  
  const App = () => {
    return (
      <>
        <Layout>
          <Routes>
            <Route path={pages.get('home').path} element={<Home />} />
           <Route 
            path={pages.get('about').path} element={<About /> } />
           <Route 
            path={pages.get('bookings').path} element={<Bookings /> } />
          </Routes>
        </Layout>
      </>
    );
  };
  
  export default App;
  