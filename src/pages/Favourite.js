import { useContext } from "react";
import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";
function FavouritePage() {
  const favouritesCtx = useContext(FavouritesContext);
  let content;
  if (favouritesCtx.totalFavourites === 0) {
    <p>"Add Some Favourites You have None </p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default FavouritePage;
