import { FrappeProvider } from 'frappe-react-sdk'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';

interface sidebarItem {
	name: string,
	link: string,
}

const sidebarItems: sidebarItem[] = [
	{
		name: "My Day",
		link: "/my-day/list",
	},
	{
		name: "Important",
		link: "/important/list",
	},
	{
		name: "Inbox",
		link: "/inbox/list",
	},
	{
		name: "Planned",
		link: "/planned/list",
	},
	{
		name: "Tasks",
		link: "/tasks/list",
	},
]
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
				<Router basename="/todo">
					<Header />
				<div className='sm:flex'>
					<Sidebar />
					<Routes>
						<Route path="/" element={<Navigate to="/my-task/list" replace />} />
						{sidebarItems.map((item, index) => (
							<Route key={index} path={item.link} element={<Dashboard name={item.name} link={item.link} />} />
						))}
					</Routes>
						</div>
				</Router>
			</FrappeProvider>
		</div>
	)
}

export default App
