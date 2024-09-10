import React from "react";
import Layout from "../../Layout/Layout";
import WhyKantipurRide from "../WhyKantipurRide/WhyKantipurRide";
import CarsInRow from "../Carsinrow/CarsinRow";
import TourPackage from "../TourPackage/TourPackage";
import StaffWithCars from "../StaffWithCars/StaffWithCars";
import Explore from "../Explore/Explore";
import LatestBlogs from "../LatestBlogs/LatestBlogs";
import SpecialPackage from "../SpecialPackage/SpecialPackage";
import FAQs from "../FAQs/FAQs";
import RentalService from "../RentalService/RentalService";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  return (
    <>
      <Layout />
      <WhyKantipurRide />
      <CarsInRow />
      <TourPackage />
      <StaffWithCars />
      <Explore />
      <LatestBlogs />
      <SpecialPackage />
      <FAQs />
      <RentalService />
      <HomeBanner />
    </>
  );
};

export default Home;
