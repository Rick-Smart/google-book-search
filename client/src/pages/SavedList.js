import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, GET_FAVORITE } from "../utils/actions";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";


const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();
  const getFavorites = () => {
    API.getAllBooks({}).then(({ data }) =>
      dispatch({
        type: GET_FAVORITE,
        data: data,
      })
    );
  };

  const removeFromFavorites = (id) => {
    dispatch({});
  };

  useEffect(() => {
    getFavorites();
  }, []);
  
  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Posts</h1>
      {state.savedBooks.length ? (
        <div>
          {state.savedBooks.map((item) => (
            <div>
              <Card key={item._id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Title>
                    {item.title} by {item.authors}
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button
                    href={item.link}
                    target="_blank"
                    variant="primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => removeFromFavorites(item._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};
export default FavoritesList;