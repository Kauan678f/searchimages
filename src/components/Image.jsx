import styles from "./Image.module.css"

function Image({url, slug, urlDownload, title, description}) {
    return (
        <div className={styles.card}>
      <img src={url} 
            alt={slug} 
            width="500px" 
            loading="lazy"
            srcSet={`${url}&w=400 400w, ${url}&w=800 800w`}
            sizes="(max-width: 600px) 400px, 800px"/>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title || "Título da Imagem"}</h3>
        <p className={styles.description}>{description || "Descrição indisponível."}</p>
        <a href={urlDownload} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
          Baixar Imagem
        </a>
      </div>
    </div>

    )
}

export default Image;

