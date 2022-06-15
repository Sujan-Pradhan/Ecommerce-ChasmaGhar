import React from "react";

import "./styles.css";
const HomeContent = () => {
  return (
    <>
      <div className="about-sec">
        <div className="for-img">
          <img
            src="https://images.pexels.com/photos/2811088/pexels-photo-2811088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about-img"
            height={"100%"}
          />
        </div>
        <div className="for-about text-dark">
          <h4>About Chasma Ghar </h4>
          <p>
            Welcome to Chasma Ghar, your number one source for all kinds of
            goggles. We're dedicated to giving you the very best of goggles,
            with a focus on dependability, customer service and
            uniqueness.Founded in 2022 by Mr. Sujan Pradhan.
          </p>

          <p>
            {" "}
            Our mission is to create an apparel company that can offer superior
            quality and value to the consumer. We will accomplish this by being
            committed to offering great service and real value to our business
            partners and consumers. We also try to provie the bset quality
            googles along with the best price.{" "}
          </p>
          <p>
            {" "}
            Ecommerce, also known as electronic commerce or internet commerce,
            refers to the buying and selling of goods or services using the
            internet, and the transfer of money and data to execute these
            transactions. Ecommerce is often used to refer to the sale of
            physical products online, but it can also describe any kind of
            commercial transaction that is facilitated through the internet. The
            history of ecommerce begins with the first ever online sale: on the
            August 11, 1994 a man sold a CD by the band Sting to his friend
            through his website NetMarket, an American retail platform. This is
            the first example of a consumer purchasing a product from a business
            through the World Wide Web—or “ecommerce” as we commonly know it
            today.{" "}
          </p>
        </div>
      </div>

      <div className="features">
        <div className="fea">
          <h4>Fast & Free Delivery</h4>
          <p>
            We provide free delivery around the Nepal, fot those who are
            prepared for the final rush to get all the product.
          </p>
        </div>
        <div className="fea">
          <h4>Safe & Secure Payments</h4>
          <p>
            Online payment system is to help the consumer more convenience and
            it is the key issue to ensure that the consumer are fast and secure.
            There are several types of common online payment systems. We make
            sure payment is done electronic and safe.
          </p>
        </div>
        <div className="fea">
          <h4>100% Money Back Guarantee</h4>
          <p>
            If there is any kind of disatisfaction on the quality of product we
            guarantee to pay back whole payment.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
