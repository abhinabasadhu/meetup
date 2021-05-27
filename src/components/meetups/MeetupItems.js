import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";
function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsfavourite = favouritesCtx.itemIsFavourite(props.id);

  function toggleFavouritesStatusHandler() {
    if (itemIsfavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouritesStatusHandler}>
            {itemIsfavourite ? "Remove From Favourties" : "To Favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
}
export default MeetupItem;
