import { useEffect, useState } from 'react'

async function getNews() {
    const response = await fetch('./json/news.json')
    return await response.json()
}


const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const news = await getNews()
            setNews(news.data)
        }

        fetchData()
    }, [])

    return (
        <section>
            {news.map((singleNew, index) => 
                <div key={index}>
                    <img src={singleNew.image} alt="" />
                    <h2>{singleNew.title}</h2>
                    <p>{singleNew.text}</p> 
                </div>
            )}
        </section>
    )
}

export { News }