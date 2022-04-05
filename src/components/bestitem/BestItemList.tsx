import Link from "next/link";
import { Grid } from "semantic-ui-react";

import styles from "src/components/bestitem/BestItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div>
      <Grid columns={5}>
        <Grid.Row>
          {items.map(
            ({ id, image_link, price, name, category, product_type }) => {
              return (
                <Grid.Column key={id}>
                  <Link href={`/view/${id}`}>
                    <a>
                      <div className={styles.wrap}>
                        <img
                          src={image_link}
                          alt={name}
                          className={styles.img_item}
                        />
                        <strong className={styles.tit_item}>{name}</strong>
                        <span className={styles.text_info}>
                          {category} {product_type}
                        </span>
                        <strong className={styles.num_price}>$ {price}</strong>
                      </div>
                    </a>
                  </Link>
                </Grid.Column>
              );
            }
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
