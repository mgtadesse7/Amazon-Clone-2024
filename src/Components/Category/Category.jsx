import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryInfo } from "./categoryFullInfos";
import classes from  './category.module.css'

function Category() {
  return (
    <div>
      <section className={classes.category__container}>
        {categoryInfo.map((infos) => (
          <CategoryCard data={infos} />
        ))}
      </section>
    </div>
  );
}

export default Category;
