import { useState } from 'react';
import {
  Maindiv,
  Enquire,
  Assurance,
  Footer,
  Ourcommunity,
  Whyus,
  OurStudentsWork,
  UpcomingBatches,
  Faqicon,
  RegistrationPage
} from "./Components";

import Nav from './Section/Nav';
import FadeInSection from './Components/FadeInSection';

const App = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <main id="outercontainer">
      <section id="header">
        <Nav onRegisterClick={() => setIsRegisterOpen(true)} />
      </section>

      <section id="maindiv">
        <FadeInSection>
          <Maindiv onRegisterClick={() => setIsRegisterOpen(true)} />
        </FadeInSection>
      </section>

      <section id="enquire" >
        <FadeInSection>
          <Enquire />
        </FadeInSection>
      </section>

      <section id="assurance">
        <FadeInSection>
          <Assurance />
        </FadeInSection>
      </section>

      <section id="ourStudentWork">
        <FadeInSection>
          <OurStudentsWork />
        </FadeInSection>
      </section>

      <section id="upcomingBatches">
        <FadeInSection>
          <UpcomingBatches onRegisterClick={() => setIsRegisterOpen(true)} />
        </FadeInSection>
      </section>

      <section id="whyus">
        <FadeInSection>
          <Whyus onRegisterClick={() => setIsRegisterOpen(true)} />
        </FadeInSection>
      </section>

      <section id="ourcommunity">
        <FadeInSection>
          <Ourcommunity />
        </FadeInSection>
      </section>

      <section id="faqicon">
        <FadeInSection>
          <Faqicon />
        </FadeInSection>
      </section>

      <section id="footer">
        <FadeInSection>
          <Footer onRegisterClick={() => setIsRegisterOpen(true)} />
        </FadeInSection>
      </section>

      {/* Sliding Registration Page */}
      <RegistrationPage isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </main>
  );
};

export default App;
