import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "../About/About.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const firstVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
  };
  const secVariant = {
    hidden: { y: 1000, opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 0.8,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    if (!isInView) {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <section className={styles.Faq}>
      <h1 className={styles.FaqTitle} ref={ref}>
        <Typewriter
          options={{
            strings: "You ask,",
            autoStart: true,
            delay: 50,
            cursor: "",
          }}
        />
        <motion.div variants={firstVariant} initial="hidden" animate={controls}>
          We{" "}
          <motion.span
            className="Gradient"
            variants={secVariant}
            initial="hidden"
            animate={controls}
          >
            answer
          </motion.span>
        </motion.div>
      </h1>
      <div>
        <Question
          question="Who can rent and ride a Polaris Slingshot?"
          answer="To pilot a Slingshot, you must have a valid Class 5 driver's license or equivalent.

          This must be the full and permanent driver’s license, no probationary, international or licenses will be accepted. It is therefore not mandatory to have a motorcycle (class 6 or equivalent) to be able to ride this vehicle.
          
          You must currently hold a valid and existing insurance policy for rental vehicles for at least the value of 50,000$. Proof of such insurance will be required and we may request that Vroom 2 are added as additional insured onto the policy. The validity may also be verified.
          
          No exceptions will be made for the above."
        />
        <Question
          question="Are helmets mandatory while riding a Polaris Slingshot?"
          answer="Helmets are MANDATORY while riding the vehicle. If you do not have access to a helmet, one may be provided to you for a 35$/rental (unlimited days)."
        />
        <Question
          question="Are there any age restrictions?"
          answer="Yes, you must be at least be 25 years old of age, if you are under this age and still would like to rent this vehicle you must contact us for further information."
        />
        <Question
          question="The weather isn’t nice, can I reschedule?"
          answer="You may reschedule up to 5 days prior to the rental period free of charge. As long as the rescheduled dates are available. If you reschedule in less than 5 days of the rental then a 20% charge of the rental price will be deducted."
        />
        <Question
          question="Do you refund if I change my mind?"
          answer="We do not refund once the reservation is booked, we may issue credits for later rental or a transfer of rental to someone else, all the while the above clauses apply."
        />
      </div>
    </section>
  );
}

interface QuestionProps {
  question: string;
  answer: string;
}

function Question({ question, answer }: QuestionProps) {
  return (
    <Accordion className={styles.Accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={styles.Question}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={styles.Answer}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
