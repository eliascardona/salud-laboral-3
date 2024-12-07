import '../styles/HomePageUI.css'

export default function HomePageContent() {
    return (
        <div className="Home__contentContainer">
            <div className="Home__content">
                <div className="Home__contentItemOne">
                    <div className="Home__UI__blur">
                        <h2>Acceso para profesores</h2>
                        <br />
                        <button type="button" className="Home__btn">ver reportes</button>
                    </div>
                </div>
                <div className="Home__contentItemTwo">
                    <div className="Home__UI__blur">
                        <h2>Acceso para estudiantes</h2>
                        <br />
                        <button type="button" className="Home__btn">iniciar entrevista</button>
                    </div>
                </div>
            </div>
        </div>
    )
}