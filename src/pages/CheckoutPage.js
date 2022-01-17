import Summary from "../components/Summary";
import Form from "../components/Form";
import BackButton from "../components/BackButton";
const CheckoutPage = () => {
  return (
    <section className="container">
      <BackButton />
      <div className="checkout-main">
        <Form />
        <Summary />
      </div>
    </section>
  );
};

export default CheckoutPage;
