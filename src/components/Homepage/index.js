import Footer from '../Footer';
import Header from '../Header';
import GenerateCards from './GenerateCards';
import GenerateNews from './GenerateNews'
import {Navigate} from 'react-router-dom'
import './style.css';



function HomePage() {
    const teamName = localStorage.getItem('NewsInfo');
 
    
    
    


 return (
        <section id="homepage" >
             {localStorage.getItem('Fav team') ? <Navigate to="/home" replace /> : <Navigate to="/" replace />}
            <div id="homepage-wrapper" className="pb-5" >
                <Header />

                <h2 className="text-center display-4 mb-5">{teamName}</h2>
                <GenerateCards/>
                <h2 className="text-center display-4 m-5">Latest...</h2>
                <GenerateNews
                    teamName={teamName} />
                
                <div className="mt-3"></div>
                <Footer />
             
            </div>
            
        </section>)
}
export default HomePage