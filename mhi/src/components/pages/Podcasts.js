import Footer from "../footer/Footer.js";
import AudioC from "../../tools/AudioC.js";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Podcasts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <main>
        <div>
          <h1 className="text-center text-2xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">
            Made for you!
          </h1>
          <section>
            <ul
              ref={ref}
              className="grid grid-cols-1 mx-5 my-5 sm:grid-cols-3 gap-4"
            >
              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 0 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast1.mp3"
                  picurl="/images/Podcast1.png"
                  title="Navigating the Chaos: Simplifying Your Hectic Schedule"
                  desc="Welcome to our short podcast on simplifying your hectic schedule. Life
              can get overwhelming, but we're here to share some easy and practical
              tips to help you find calm in the chaos."
                />
              </motion.li>

              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 1 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast2.mp3"
                  picurl="/images/Podcast2.png"
                  title="Mastering Exams: A Quick Guide to Success"
                  desc="Hello and welcome to our short podcast on mastering exams. Whether you're a student or someone supporting a student, we've got some simple tips to help you navigate the challenges of exam season."
                />
              </motion.li>
              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 2 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast3.mp3"
                  picurl="/images/Podcast3.png"
                  title="Embracing Failure: A Quick Guide to Growth"
                  desc="Hello, and welcome to our short podcast on embracing failure. Today, we'll explore the positive side of setbacks and how they can be stepping stones to success."
                />
              </motion.li>
              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 3 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast4.mp3"
                  picurl="/images/Podcast4.png"
                  title="Mastering Responsibilities: Your Guide to Success"
                  desc="Welcome to our short podcast on mastering responsibilities. Today, we'll share simple tips to help you navigate your responsibilities, whether at work, school, or in daily life."
                />
              </motion.li>
              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 4 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast5.mp3"
                  picurl="/images/Podcast5.png"
                  title="Quick Insights: presentations and social interactions "
                  desc="Welcome to 'Quick Insights', where we break down complex topics into bite-sized knowledge. Today, let's talk about presentations and social interactions."
                />
              </motion.li>
              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 5 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast6.mp3"
                  picurl="/images/Podcast6.png"
                  title="School Talk:ineffective teachers "
                  desc="Hey there, listeners! Welcome to another episode of 'School Talk', where we tackle real issues in education. today, let's chat about how to deal with ineffective teachers."
                />
              </motion.li>
              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 6 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast7.mp3"
                  picurl="/images/Podcast7.png"
                  title="Decoding Grades: Navigating the Academic Landscape"
                  desc="Welcome to our short podcast on understanding grades. we've got some simple insights to share with you today."
                />
              </motion.li>
              <motion.li
                className="flex"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: 7 * 0.4 }}
              >
                <AudioC
                  audioSrc="/Podcasts/Podcast8.mp3"
                  picurl="/images/Podcast8.png"
                  title="Balancing Act: Finding Your Equilibrium"
                  desc="Welcome to our short podcast on finding the right balance in life. Achieving equilibrium can be a challenge, but we're here to share some simple tips to help you strike that perfect balance."
                />
              </motion.li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Podcasts;
