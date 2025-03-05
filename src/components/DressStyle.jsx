import casualImg from '../assets/img/selection/mobile/casual.png'
import formalImg from '../assets/img/selection/mobile/formal.png'
import partyImg from '../assets/img/selection/mobile/party.png'
import gymImg from '../assets/img/selection/mobile/gym.png'
import { useNavigate } from 'react-router-dom'
const DressStyle = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[#F0F0F0] mt-12 ml-4 mr-4 rounded-lg flex justify-center items-center flex-col gap-y-4 pb-6">
      <h2 className="font-bold font-anton text-center pt-10 text-3xl max-w-60 leading-9">BROWSE BY DRESS STYLE</h2>
      <div className='flex flex-col gap-y-4'>
        <img src={casualImg} alt="" onClick={() => navigate('/casual')} />
        <img src={formalImg} alt="" onClick={() => navigate('/formal')} />
      </div>
      <div className='flex flex-col gap-y-4'>
        <img src={partyImg} alt="" onClick={() => navigate('/party')} />
        <img src={gymImg} alt="" onClick={() => navigate('/gym')} />
      </div>
    </div>
  )
}

export default DressStyle