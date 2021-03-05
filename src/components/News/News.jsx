import React, {Component} from "react";
import s from "./News.module.css";

function News() {
  return (
    <div className={s.news}>
      <h2>News</h2>
      <article>Article 1</article>
      <article>Article 2</article>
      <article>Article 3</article>
    </div>
  );
}

export default News;
