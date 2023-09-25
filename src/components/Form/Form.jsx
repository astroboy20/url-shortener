import Button from "../Button/Button";
import styles from "./Form.module.css";

const data = [
  {
    name: "hey",
  },
  {
    name: "hey",
  },
  {
    name: "hey",
  },
];
const Form = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.form}>
          {" "}
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" />
            <Button size="square">Shorten It!</Button>
          </div>
          
        </div>
        {data.map((data, id) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }} key={id}>
              {/* {data.name} */}
            </div>
          );
        })}
      </section>
    </>
  );
};

export { Form };
