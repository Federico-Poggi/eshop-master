import { Card, Row, CardTitle, CardImg, CardFooter } from "react-bootstrap";

import Fantasy from "../books/fantasy.json";

const Book = (props) => {
  return (
    <Row className="  w-100 justify-content-center ">
      <Row className=" p-2 w-75  justify-content-center">
        {Fantasy.map((thumb) => {
          return (
            <Card className="mx-3 my-3 w-25">
              <CardImg src={thumb.img} className="h-75 pt-2"></CardImg>
              <CardTitle>
                <h4 className="fs-6 pt-4 ">{thumb.title}</h4>
              </CardTitle>
              <CardFooter id="cardFooter" className="d-flex">
                <button
                  id="btnPrice"
                  className="btn btn-small rounded-pill flex-grow-1"
                >
                  {thumb.price}€
                </button>
              </CardFooter>
              <p className="category">Category: {thumb.category}</p>
            </Card>
          );
        })}
      </Row>
    </Row>
  );
};

export default Book;
