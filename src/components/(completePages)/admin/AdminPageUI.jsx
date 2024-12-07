import BarAndContainer from '../../ui/layout/sideBar/BarAndContainer'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import './styles/AdminPageUI.css'


export default function AdminPageUI() {
    return (
        <BarAndContainer>
            <SectionOne />
            <SectionTwo sectionTitle={"Estadísticos básicos"} />
            <SectionTwo sectionTitle={"Estadísticos básicos"} />
        </BarAndContainer>
    )
}