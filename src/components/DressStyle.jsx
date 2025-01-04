import casualImg from '../assets/img/selection/mobile/casual.png'
import formalImg from '../assets/img/selection/mobile/formal.png'
import partyImg from '../assets/img/selection/mobile/party.png'
import gymImg from '../assets/img/selection/mobile/gym.png'
const DressStyle = () => {
  return (
    <div className="bg-[#F0F0F0] mt-12 ml-4 mr-4 rounded-lg flex justify-center items-center flex-col gap-y-4 pb-6">
      <h2 className="font-bold font-anton text-center pt-10 text-3xl max-w-60 leading-9">BROWSE BY DRESS STYLE</h2>
      <div className='flex flex-col gap-y-4'>
        <img src={casualImg} alt="" />
        <img src={formalImg} alt="" />
      </div>
      <div className='flex flex-col gap-y-4'>
        <img src={partyImg} alt="" />
        <img src={gymImg} alt="" />
      </div>
    </div>
  )
}

export default DressStyle