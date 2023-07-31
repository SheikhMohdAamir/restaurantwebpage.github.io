import Card from "react-bootstrap/Card";

const Description = () => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>About Our Restaurant</h4>
      <Card bg="dark" data-bs-theme="dark">
        <Card.Header>SERVED EVERY DAY SINCE 1990</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              React Meals opened on Thanksgiving Day 1990. Chef / Owner Ron
              Silver began baking pies and selling them to restaurants and his
              neighbors out of a small kitchen at the corner of Hudson and North
              Moore St. in Tribeca. Today, NYC's beloved restaurant and pie shop
              celebrates 27 years of classic, made from scratch American
              cooking.
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">React Meals</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;
