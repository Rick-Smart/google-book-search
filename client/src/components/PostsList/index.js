import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { Card, Button } from "react-bootstrap";

function PostsList() {
  // eslint-disable-next-line
  const [state, dispatch] = useStoreContext();

  const handleSave = (value) => {
    const book = value.volumeInfo;

    API.saveBook({
      title: book.title,
      authors: book.authors[0],
      description: book.description,
      image: book.imageLinks.thumbnail,
      link: book.infoLink,
    });
  };

  return (
    <div>
      {state.searchResults.length ? (
        <>
          {state.searchResults.map((item) => (
            <div className="d-flex flex-wrap mb-5 border border-success">
              <Card
                key={item._id}
                style={{ width: "17rem" }}
                className="border-end-success"
              >
                <Card.Title className="mb-4 ml-2">
                  {item.volumeInfo.title} by {item.volumeInfo.authors}
                </Card.Title>
                <Card.Img
                  style={{ width: "10rem" }}
                  variant="top"
                  src={item.volumeInfo.imageLinks.thumbnail}
                  className="ml-5 mb-2"
                />
              </Card>
              <Card.Body style={{ width: "18rem" }}>
                <div className="float-right">
                  <Button
                    href={item.volumeInfo.infoLink}
                    target="_blank"
                    variant="primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Button>
                  <Button variant="primary" onClick={() => handleSave(item)}>
                    Save
                  </Button>
                  <br></br>
                </div>
                <Card.Text className="mt-5">
                  {item.volumeInfo.description}
                </Card.Text>
              </Card.Body>
            </div>
          ))}
        </>
      ) : (
        <h3>Use the search bar above to search for books!</h3>
      )}
      <div className="mt-5">
        <Link to="/saved">View favorites</Link>
      </div>
    </div>
  );
}
export default PostsList;
