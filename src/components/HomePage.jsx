import CustomerReview from "./CustomerReview"
import DressStyle from "./DressStyle"
import MainSection from "./MainSection"
import NewArrivals from "./NewArrivals"
import SubscribeNews from "./SubscribeNews"

const HomePage = () => {
  return (
    <>
      <MainSection />
      <NewArrivals /> 
      <DressStyle /> 
      <CustomerReview />
      <SubscribeNews />
    </>
  )
}

export default HomePage