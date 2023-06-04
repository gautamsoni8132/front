
import styles from '../../styles/test.module.css'


function testimonials() {
    return (
        <>
            <div className={styles.testimonialsMain}>

                <div className={`${styles.testimonials} ${styles.testimonial1}`}>

                    <div>
                        <img width='120px' src="/user1.png" alt="user1" />
                    </div>

                    <div className={styles.comments}>
                        <h3>"BBD and BDS sales compounded the consumer demanded which led to a milestone of 150% yoy..."</h3>
                        <h2>Chaitanya Ramalingegow</h2>
                    </div>

                </div>

                <div className={`${styles.testimonials} ${styles.testimonial2}`}>

                    <div>
                        <img width='120px' src="/user1.png" alt="user1" />
                    </div>

                    <div className={styles.comments}>
                        <h3>"BBD and BDS sales compounded the consumer demanded which led to a milestone of 150% yoy..."</h3>
                        <h2>Chaitanya Ramalingegow</h2>
                    </div>

                </div>

                <div className={`${styles.testimonials} ${styles.testimonial3}`}>

                    <div>
                        <img width='120px' src="/user2.jpg" alt="user1" />
                    </div>

                    <div className={styles.comments}>
                        <h3>"BBD and BDS sales compounded the consumer demanded which led to a milestone of 150% yoy..."</h3>
                        <h2>Munna Bhai </h2>
                    </div>

                </div>

            </div>
        </>
    );
}

export default testimonials;