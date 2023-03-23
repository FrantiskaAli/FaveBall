
import TeamAutoComplete from "../AutoComplete";
import {Navigate} from 'react-router-dom'

function Welcome() {
const saveMyFavTeam =(item)=>{
localStorage.setItem('Fav team', item.id);
localStorage.setItem('NewsInfo', item.name)}

    return (<section style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504016798967-59a258e9386d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')", backgroundSize: "cover", backgrounRepeat: "norepeat", position: "fixed", width: "100%", height: "100%" }}>
        {localStorage.getItem('Fav team') ? <Navigate to="/home" replace /> : <Navigate to="/" replace />}
        <article  id="welcome" style={{ backgroundImage: "linear-gradient(0deg, transparent 0%, #05110090  10%, #1f3223 50%)", backgroundSize: "cover", backgroundRepeat: "norepeat", position: "fixed", width: "100%", height: "100%" }}>
        <div id="scroll-container" className="mt-3">
    <div id="scroll-text">keep track of how is your favourite football team doing    |    check league tables    |    compare teams    |   find out latest news</div>
                </div>
         <main className="mx-auto my-5 w-100 d-flex flex-column align-items-center justify-content-center h-75">
       
            <h1>Welcome to FaveBall</h1>
                <hr />
           
         <h3>Keep track of your favourite team and more ...</h3>
                
                <TeamAutoComplete whichPage = {saveMyFavTeam } />
                
              <button id="welcome-button" type="button" onClick={()=>window.location.reload()}>To your team &#8680; </button>
            </main>
        </article>
    </section>)
}
export default Welcome
//  <button onClick={/*() => localStorage.setItem('Fav team', favTeam)*/}>Lets start</button>
