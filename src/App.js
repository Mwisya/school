import './App.css';
import {Routes, Route} from 'react-router-dom'
import { AboutUs, AdmissionPage, ContactPage, Home, NoticeBoard } from './pages';
import { Footer, Header, PreFooter, School, Sports, Word } from './components';
import Director from './components/word/Director';
import Deputy from './components/word/Deputy';
import GalleryPage from './pages/GalleryPage';
import Page404 from './components/ErrorPage/Page404';

import CareerPage from './pages/CareerPage';
import TimeTable from './components/timetable/TimeTable';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/admissions' element={<AdmissionPage/>}/>
         
         <Route path='/career' element={<CareerPage/>}/>
         <Route path='/notice' element={<NoticeBoard/>}/>
         <Route path='/school' element={<School/>}/>
         <Route path='/gallery' element={<GalleryPage/>}/>

         <Route path='/sports' element={<Sports/>}/>

         <Route path='/principal' element={<Word/>}/>
         <Route path='/director' element={<Director/>}/>
         <Route path='/deputy' element={<Deputy/>}/>

         <Route path='/casterly-life' element={<TimeTable/>}/>
         <Route path='/error' element={<Page404/>}/>
       </Routes>
       <PreFooter/>
       <Footer/>
    </div>
  );
}

export default App;
