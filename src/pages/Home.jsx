import { useEffect, useState } from "react";
import Image from "../components/Image";
import styles from "./Home.module.css";
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";


function Home() {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState();
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1);

  // Função para buscar imagens iniciais
  useEffect(() => {
    const fetchUnsplash = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=house&page=${page}&per_page=5&client_id=qqTlsHmg8DiYT5R2c3cPVHnM2IMJF5hQoX06NBVlZp8`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTotalPages(data.total_pages)
        setImages(data.results); // Recebe um array de imagens
      } catch (error) {
        console.error(error);
      }
    };
    fetchUnsplash();
  }, []);

  useEffect(() => {
    const fetchUnsplash = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&per_page=5&client_id=qqTlsHmg8DiYT5R2c3cPVHnM2IMJF5hQoX06NBVlZp8`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          // setTotalPages(data.total_pages)
          setImages(data.results); // Recebe um array de imagens
        } catch (error) {
          console.error(error);
        }
      };
      fetchUnsplash();
  }, [page])

  // Função para buscar imagens com palavra-chave
  const fetchUnsplashKey = async () => {
    setPage(1)
    try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&per_page=5&client_id=qqTlsHmg8DiYT5R2c3cPVHnM2IMJF5hQoX06NBVlZp8`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTotalPages(data.total_pages)
        setImages(data.results); // Recebe um array de imagens
    } catch (error) {
        console.error(error);
    }
  };

  function backpage(){
    if(page === 1){
        return
    }
    setPage(page - 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }

  function nextpage(){
    if(page === totalPages){
        return
    }
    setPage(page + 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }

  function backall(){
    setPage(1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }

  function nextall(){
    setPage(totalPages)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }



  return (
    <div>
      <h1>Busque Imagens de Alta Qualidade para Seu Blog</h1>
      <input
        type="text"
        placeholder="O que você procura?"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={fetchUnsplashKey}>Search</button>
      <div className={styles.container}>
        
        {images.map((image) => (
          <Image key={image.id} 
          title={image.alt_description} 
          description={image.description} 
          url={`${image.urls.raw}&w=400&h=300&fm=webp&q=80`} 
          urlDownload={image.urls.full}
          slug={image.slug} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
      {page > 1 && (
        <FaAngleDoubleLeft className={styles.icon} onClick={backall} />
      )}

      {page > 1 && <FaAngleLeft className={styles.icon} onClick={backpage} />}

      {page !== 1 && <h2 className={styles.pageNumber} onClick={backall}>1</h2>}

      <h2 className={`${styles.pageNumber} ${styles.currentPage}`}>{page}</h2>

      {page !== totalPages && (
        <h2 className={styles.pageNumber} onClick={nextall}>{totalPages}</h2>
      )}

      {page !== totalPages && <FaAngleRight className={styles.icon} onClick={nextpage} />}

      {page < totalPages && (
        <FaAngleDoubleRight className={styles.icon} onClick={nextall} />
      )}
    </div>
    </div>
  );
}

export default Home;
