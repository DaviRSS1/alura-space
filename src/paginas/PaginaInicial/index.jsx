import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import styles from './PaginaInicial.module.scss'
import Populares from "componentes/Populares";

export default function PaginaInicial() {
    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <div className={styles.galeria}>
                <Galeria />
                <Populares />
            </div>
            <Rodape />
        </>
    )
}