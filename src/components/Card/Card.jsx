import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        // console.log("data", data);
        return (
          <Tooltip title={`${songs?.length} Songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" width={159} height={170} />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    className={styles.chip1}
                    // sx={{ backgroundColor: "black", color: "white" }}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.title}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        // console.log("Songsdata", data);
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img
                src={image}
                alt="song"
                loading="lazy"
                width={159}
                height={170}
              />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
