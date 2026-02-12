import { useState } from "react";

function Delivery() {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>Delivery Details</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter Delivery Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />

          <br />
          <button type="submit">Confirm Address</button>
        </form>
      ) : (
        <div>
          <h3>✅ Your order will be delivered to:</h3>
          <p>{address}</p>
          <button onClick={() => setSubmitted(false)}>
            Change Address
          </button>
        </div>
      )}
    </div>
  );
}

export default Delivery;