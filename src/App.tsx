import { FrappeProvider } from 'frappe-react-sdk'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {

	// GET SITE NAME
	const getSiteName = () => {
		// @ts-ignore
		if (window.frappe?.boot?.versions?.frappe && (window.frappe.boot.versions.frappe.startsWith('15') || window.frappe.boot.versions.frappe.startsWith('16'))) {
			// @ts-ignore
			return window.frappe?.boot?.sitename ?? import.meta.env.VITE_SITE_NAME
		}
		return import.meta.env.VITE_SITE_NAME
	}

	return (
		<div className="App">
			<FrappeProvider
				socketPort={import.meta.env.VITE_SOCKET_PORT}
				siteName={getSiteName()}
			>
				<Router>
					<Header />
					<Sidebar />
					<Routes>
						<Route path="/" element={<Navigate to="/my-task/list" replace />} />
					</Routes>
				</Router>
			</FrappeProvider>
		</div>
	)
}

export default App
