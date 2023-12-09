import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, ModalClose, Sheet } from "@mui/joy";
import { useState } from "react";

// payment
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#030303",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PropertyBoughtCard = ({ data }) => {
  // Pyament
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const [open, setOpen] = useState(false);

  const {
    image,
    title,
    location,
    agent: { name, image: agentImage },
    verification_status,
    price_range,
    status,
    amount,
    _id,
    transactionID,
  } = data;

  // Payment
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`/payment`, {
          amount: 1000,
          id,
        });
        if (response.data.success) {
          console.log(response.data.data.id);
          console.log("successful payment");
          setSuccess(true);
          // update id
          axios
            .put(`/api/bought/${_id}`, { transactionID: response.data.data.id })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }

    // update the status

    axios
      .put(`/api/bought/${_id}`, { status: "bought" })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Box
            component={"div"}
            sx={{ display: "flex", gap: 1, alignItems: "center", mt: 2 }}
          >
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt={name}
              src={agentImage}
            />
            <Typography color="text.secondary">{name}</Typography>
          </Box>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Status: {status}
          </Typography>
          <Typography color="text.secondary">
            Offered amount: {amount}
          </Typography>

          <Box component={"div"} sx={{ display: "flex", gap: 4, mt: 3 }}>
            {status === "bought" ? (
              <Typography variant="body1">
                Transaction ID: {transactionID}{" "}
                {/* Replace 'transactionId' with your variable */}
              </Typography>
            ) : (
              status === "accepted" && (
                <Button
                  onClick={() => setOpen(true)}
                  component={Link}
                  variant="outlined"
                >
                  Pay
                </Button>
              )
            )}
          </Box>
        </CardContent>
      </Card>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component={"div"}>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 800,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
            }}
          >
            <ModalClose />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textcolor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Pay for this property.
            </Typography>

            {!success ? (
              <form onSubmit={handleSubmit} style={{ width: 500 }}>
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </fieldset>
                <button type="submit">Pay</button>
              </form>
            ) : (
              <div>
                <h2>you just bought the property ........</h2>
              </div>
            )}
          </Sheet>
        </Box>
      </Modal>
    </Box>
  );
};

export default PropertyBoughtCard;
