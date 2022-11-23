import Head from "next/head";
import styles from "./styles.module.scss";
import { FaPlus, FaCalendar, FaEdit, FaTrash, FaClock } from "react-icons/fa";

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas tarefas - Board</title>
      </Head>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Digite sua tarefa..." />
          <button type="submit">
            <FaPlus size={25} color="#18191f" />
          </button>
        </form>
        <h1>Você tem 2 tarefas</h1>
        <section>
          <article className={styles.taskList}>
            <p>Estudar Node Js</p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FaCalendar size={15} color="#FFB800" />
                  <time>17 de Julho 2021</time>
                </div>
                <button>
                  <FaEdit size={15} color="#FFF" />
                  <span>Editar</span>
                </button>
              </div>
              <button>
                <FaTrash size={15} color="#FF3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>
      <div className={styles.vipContainer}>
        <h3>Obrigado por apoiar este projeto .</h3>
        <div>
          <FaClock size={28} color="#FFF" />
          <time>Última doação foi a 3 dias</time>
        </div>
      </div>
    </>
  );
}
