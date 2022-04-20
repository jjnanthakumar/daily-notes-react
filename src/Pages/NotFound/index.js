import style from "./styles.module.css";

const NotFound = () => {
  return (
    <main className={style.main}>
      <div>
        <h2 className={style.title} data-content="404">
          404
        </h2>
        <p className={style.info} data-content="PAGE NOT FOUND">
          Page Not Found
        </p>
      </div>
    </main>
  );
};

export default NotFound;
