import SampleBar from '../sampleBar/SampleBar'
import MainHeader from '../../../ui/headers/MainHeader'
import './BarAndContainer.css'


export default function BarAndContainer({ children }) {
    return (
        <>
            <SampleBar />
            <MainHeader />
            <div className='Admin__globalContainer'>
                <div className='Admin__contentContainer'>
                    {children}
                </div>
            </div>
        </>
    )
}