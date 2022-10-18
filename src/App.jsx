import styles from './style';
import { Navbar ,Hero,Stats,Business,Billing,CardDeal,Testimonial,Clients,CTA,Footer, FeedbackCard  } from './components'
const App = () => (

  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexstart}`}>
      <div className={`${styles.boxWidth}`}>
      <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexstart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats/>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Testimonial/>
      <Clients/>
      <FeedbackCard/>
        <CTA/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default App