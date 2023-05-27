
import { AppContent } from "./AppContent";
import { CheckIn } from "./CheckIn";
import { Destaques } from "./Destaques";
import { Economize } from "./Economize";
import { Footer } from "./Footer";




export function HomePage() {
return(
    <>
     <CheckIn />
     <Destaques />
     <AppContent />
     <Economize />
     <Footer />
     
    </>
)
}