import CustomerReview from './components/CustomerReview'
import DressStyle from './components/DressStyle'
import Header from './components/Header'
import MainSection from './components/MainSection'
import NewArrivals from './components/NewArrivals'

const App = () => {
  return (
    <div className='container max-w-custom-container mx-auto'>
      <Header />
      <MainSection />
      <NewArrivals />
      <DressStyle />
      <CustomerReview />
    </div>
  )
}



export default App