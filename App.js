import {
    Route, 
    Routes
  } from 'react-router-dom';
  import pages from './utils/pages';
  import Layout from './src/components/layout/Layout';
  import Home from './src/components/pages/Home';
  import Bookings from './src/components/pages/Bookings';
  import ConfirmedBooking from './src/components/pages/Bookings/ConfirmedBooking';
  import NotFound from './src/components/pages/NotFound';
  import UnderConstruction from './src/components/pages/UnderConstruction';
  import About from './src/components/pages/About' ;
  
  const App = () => {
    return (
      <>
        <Layout>
          <Routes>
            <Route path={pages.get('home').path} element={<Home />} />
            <Route 
              path={pages.get('about').path} 
              element={<About />} 
            />
            <Route 
              path={pages.get('menu').path} 
              element={<Menu />} 
            />
            <Route path={pages.get('bookings').path} element={<Bookings />} />
            <Route 
              path={pages.get('confirmedBooking').path} 
              element={<ConfirmedBooking />} 
            />
            <Route 
              path={pages.get('orderOnline').path} 
              element={<OnlineBooking />} 
            />
            <Route 
              path={pages.get('login').path} 
              element={<Login />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </>
    );
  };
  
  export default App;
  