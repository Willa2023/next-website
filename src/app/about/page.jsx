import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Me</h2>
        <h3 className={styles.subtitle}>
          Technical Skills: Java, React, Nextjs
        </h3>
        <h3 className={styles.subtitle}>Keep Learning: C#, .Net</h3>
        <p>
          I love coding and I'm passionate about learning new things. I'm a team
          player and I love to work with others. I'm looking for a job where I
          can grow and learn new things.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1 </h1>
            <p>Year of study experience</p>
          </div>
          <div className={styles.box}>
            <h1>1 </h1>
            <p>Year of study experience</p>
          </div>
          <div className={styles.box}>
            <h1>1 </h1>
            <p>Year of study experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;
