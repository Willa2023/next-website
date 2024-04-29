"use client";

import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Leave Message Here"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
