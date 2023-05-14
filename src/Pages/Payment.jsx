import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Link, useLocation } from "react-router-dom";
import {
  CalendarIcon,
  ChevronDownIcon,
  CloseIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  ModalFooter,
  ModalContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import greenTick from "../Assets/green_tick.svg";

export const Payment = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = location.state;
  console.log("payemt", data);
  return (
    <>
      <div className="order-main">
        <div className="order-details">
          <div className="order-offers">
            <div className="flex-offer">
              <SunIcon />
              <div>Bank Offers</div>
            </div>
            <div className="discount">
              5% Cashback on Paytm Wallet and Postpaid Transactions on a minimum
              spend of Rs 2,000. TCA
            </div>
            <div className="more">
              Show More <ChevronDownIcon />
            </div>
          </div>
          <div className="order-selected">
            <div className="choose-pay">Choose Payment Mode</div>
          </div>

          <div className="payment-items">
            <div className="payment-category">
              <div className="cash-delivery">Cash on Delivery</div>
              <div className="cash-deliveryright">
                Cash on Delivery(Cash/UPI)
              </div>
            </div>

            <div className="payment-option">
              <div className="credit-delivery">Credit/Debit Card 1 Offer</div>
              <div className="extra-amount">
                Rs 10 will be charged extra for Cash on Delivery option.
              </div>
            </div>

            <div className="online-payment">
              <div className="upi-payment">PhonePe/Google Pay/BHIM UPI</div>
              <div className="capcha">40028</div>
            </div>

            <div className="more-payment">
              <div className="wallet-payment">Paytm/Wallet</div>
              <div className="capcha-code">
                Enter code shown in above image*
              </div>
            </div>

            <div className="net-payment">
              <div className="banking-payment">Net Banking</div>
              <div className="cash-code">
                You can pay via Cash/UPI on delivery
              </div>
            </div>

            <div className="later-payment">
              <div className="emi-payment">EMI/Pay Later</div>
                <button className="place-order" onClick={onOpen}>PLACE ORDER</button>
            </div>
          </div>
        </div>
        <div className="order-bill">
          <hr></hr>

          <div className="pricee">PRICE DETAILS(1 Items)</div>
          <div>
            <div className="price-detail">
              Total MRP
              <div className="amount">Rs.11,589</div>
            </div>
          </div>

          <div>
            <div className="discount-detail">
              Discount on MRP
              <div className="discount-amount">-Rs.6,577</div>
            </div>
          </div>

          <div>
            <div className="coupon-discount">
              Coupon Discount
              <div className="apply-coupon">Apply Coupon </div>
            </div>
          </div>

          <div>
            <div className="convenience">
              Convenience Fee
              <div className="free">FREE </div>
            </div>
          </div>
          <hr></hr>

          <div>
            <div className="total-amount">
              Total Amount
              <div className="total">Rs.5,012</div>
            </div>
          </div>
        </div>
      </div>

      <div className="down-side">
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" />
        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" />
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="successfully-placed">
            Your Order has been placed Successfully!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modalBody">
           <img src={greenTick} alt="img" />
          </ModalBody>

          <ModalFooter>
            <Button className="thankyou" colorScheme="teal" variant="outline">
              Thank You
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
