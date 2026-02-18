import Header from "./assets/components/Header";
import Idea from "./assets/components/idea";
import { ideas } from "./ideas";
import Button from "./assets/components/Button"




export default function App(){
    return(
      <>
          <main>
                   <Header/>

                   <Idea {...ideas[0]}/>
                   <Idea {...ideas[1]}/>
                   <Idea {...ideas[2]}/>
          </main>

            <Button>Я ЧИЛДРЕН (children)</Button>
      </>
    );
};