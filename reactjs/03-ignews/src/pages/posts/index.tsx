import Head  from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'
import Prismic from "@prismicio/client"


export default function Posts () {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title> 
      </Head>

      <main className={styles.container}>
          <div className={styles.posts}>
              <a href="#">
                  <time>31 de outubro de 2021</time>
                  <strong>125 MELHORES SITES PORNO DE 2021</strong>
                  <p> internet revolucionou a nossa forma de consumir pornografia, e os sites pornô vieram pra ficar. Antes de tudo, desde 2012 o Testosterona criou e atualiza esta lista com 15 melhores sites porno, que depois passou pra 50, 100 e hoje estamos com nada menos do que 125 sites de pornografia!! Confira os melhores sites pornos e sites de sexo da atualidade. Qual melhor site porno? Aqui você vai encontrar os melhores sites pornográficos. Tem porno pra todos os gostos.</p>
              </a>
              <a href="#">
                  <time>31 de outubro de 2021</time>
                  <strong>125 MELHORES SITES PORNO DE 2021</strong>
                  <p> internet revolucionou a nossa forma de consumir pornografia, e os sites pornô vieram pra ficar. Antes de tudo, desde 2012 o Testosterona criou e atualiza esta lista com 15 melhores sites porno, que depois passou pra 50, 100 e hoje estamos com nada menos do que 125 sites de pornografia!! Confira os melhores sites pornos e sites de sexo da atualidade. Qual melhor site porno? Aqui você vai encontrar os melhores sites pornográficos. Tem porno pra todos os gostos.</p>
              </a>
              <a href="#">
                  <time>31 de outubro de 2021</time>
                  <strong>125 MELHORES SITES PORNO DE 2021</strong>
                  <p> internet revolucionou a nossa forma de consumir pornografia, e os sites pornô vieram pra ficar. Antes de tudo, desde 2012 o Testosterona criou e atualiza esta lista com 15 melhores sites porno, que depois passou pra 50, 100 e hoje estamos com nada menos do que 125 sites de pornografia!! Confira os melhores sites pornos e sites de sexo da atualidade. Qual melhor site porno? Aqui você vai encontrar os melhores sites pornográficos. Tem porno pra todos os gostos.</p>
              </a>
          </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'post'),
    ], {
        fetch:['post.title', 'post.content'], 
        pageSize:100,
    }
    )
    console.log(JSON.stringify(response, null, 2))

    return{
        props:{}
    }
    
}
