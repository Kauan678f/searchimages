import styles from "./Image.module.css"

function Image({url, urlDownload}) {
    return (
        <div className={styles.card}>
      <img src={url} 
            width="300px" 
            loading="lazy"
            srcSet={`${url}&w=400 400w, ${url}&w=800 800w`}
            sizes="(max-width: 600px) 400px, 800px"
            className={styles.image}
            />
      <div className={styles.cardContent}>
        <a href={urlDownload} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
          Baixar Imagem
        </a>
      </div>
    </div>

    )
}

export default Image;

