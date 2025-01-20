import { useState, useEffect } from "react";
import "./section-1.css";

function useScreenSize() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1440);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return isMobileOrTablet;
}
export default function Section_1() {
  const isMobileOrTablet = useScreenSize();
  return (
    <>
      <div className={isMobileOrTablet ? "mobile-section-1" : "section-1"}>
        <div className={isMobileOrTablet ? "mobile-new" : "new"}>
          <div className={isMobileOrTablet ? "mobile-head" : "head"}>
            <h1>About Geeks of Gurukul-M</h1>
            <h4>
              Geeks of Gurukul is a platform empowering individuals with
              industry-relevant skills and personalized mentorship
            </h4>
          </div>
        </div>
        <div className={isMobileOrTablet ? "mobile-frame83" : "frame83"}>
          <div className={isMobileOrTablet ? "mobile-frame81" : "frame81"}>
            <img
              className={
                isMobileOrTablet ? "mobile-frame81-image" : "frame81-image"
              }
              src="./assets/Images/s1.png"
              alt="Frame 81 Image"
            />
            <p
              className={
                isMobileOrTablet
                  ? "mobile-frame81-paragraph"
                  : "frame81-paragraph"
              }
            >
              In the current educational landscape, students from tier 2 and
              tier 3 cities often face significant disadvantages in terms of
              skill development and educational resources. The major edtech
              companies, despite their substantial funding, predominantly cater
              to tier 1 cities, leaving a significant portion of India's
              population underserved. Recognizing this gap, we founded Geeks of
              Gurukul with the primary mission of Empowering Bharat, focusing
              specifically on these underrepresented regions.
            </p>
          </div>
          <div className={isMobileOrTablet ? "mobile-frame82" : "frame82"}>
            <p
              className={
                isMobileOrTablet
                  ? "mobile-frame82-paragraph"
                  : "frame82-paragraph"
              }
            >
              Our philosophy is rooted in the concept of the MODERN AGE GURUKUL.
              This signifies our commitment to reviving the Ancient Indian
              Educational System, which emphasized Project-Based Learning and
              practical knowledge system which was largely dismantled during
              British rule in favor of theoretical and rote learning
              methodologies. By adopting these time-tested, Practical Learning
              Techniques, Geeks of Gurukul aims to provide students with the
              skills and knowledge that are not only relevant but also essential
              for Real-World Applications.
            </p>
            <img
              className={
                isMobileOrTablet ? "mobile-frame82-image" : "frame82-image"
              }
              src="./assets/Images/s2.png"
              alt="Frame 82 Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
