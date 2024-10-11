
import Herosection from "./components/HeroSection";
import Featuredcourses from "./components/Featuredcourses";
import { StickyScrollRevealDemo } from "./components/Scrollsticky";
import MusicSchoolTestimonials from "./components/InfinityMovableCard";
import Upcomingwebinars from "./components/Upcomingwebinars";
import Instructors from "./components/Instructors";
export default function Home() {
  return (
        <div>
        <main>
       <Herosection/>
       <Featuredcourses/>
       <div className="w-full">
       <StickyScrollRevealDemo/>
       <MusicSchoolTestimonials/>
       <Upcomingwebinars/>
       <Instructors/>
       </div>
       </main>
        </div>
  );
}
