import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const listOfArticles = posts.map((article) => {
        return (
        <Article title={article.title} date={article.date} preview={article.preview} key={article}/>
        )
    })

    return (
        <main>{listOfArticles}</main>
    )
}

export default ArticleList