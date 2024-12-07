import { Routes, Route } from 'react-router-dom'
import '../../assets/css/global.css'
import PresentationHeader from '../../components/ui/headers/PresentationHeader'
import SideNavbar from '../../components/ui/navigation/sidebar/SideNavbar'

import NotFoundPage from '../(layerTwo)/notFound/NotFoundPage'
import HomePage from '../(layerTwo)/home/HomePage'
import Prueba from '../(layerTwo)/prueba/Prueba'
import AdminPage from '../(layerOne)/admin/LOAdmin'
import SurveysPage from '../(layerOne)/surveys/LOSurveys'
import SignUpPage from '../(layerTwo)/signUp/SignUpPage'
import SignInPage from '../(layerTwo)/signIn/SignInPage'


export default function Page() {
	const pagesDirectory = {
		notFound: <NotFoundPage />,
		homePage: <HomePage />,
		adminPage: <AdminPage />,
		surveyPage: <SurveysPage />,
		signUp: <SignUpPage />,
		signIn: <SignInPage />,
		prueba: <Prueba />,
	}

	return (
		<div className="body">
			{/* <PresentationHeader /> */}
			<Routes>
				<Route
					path="*"
					element={pagesDirectory.notFound}
				/>{/*  UI response for not valid path segment  */}
				<Route
					path="/"
					exact
					element={pagesDirectory.homePage}
				/>
				<Route
					path="/admin"
					element={pagesDirectory.adminPage}
				/>
				<Route
					path="/encuestas"
					element={pagesDirectory.surveyPage}
				/>
				<Route
					path="/pruebas"
					element={pagesDirectory.prueba}
				/>
				<Route
					path="/signUp"
					element={pagesDirectory.signUp}
				/>
				<Route
					path="/signIn"
					element={pagesDirectory.signIn}
				/>
			</Routes>
		</div>
	)
}

