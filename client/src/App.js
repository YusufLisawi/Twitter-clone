import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./features/StateProvider";

function App() {
	const [{ user }] = useStateValue();

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<>
					<Sidebar />
					<Feed />
					<Widgets />
				</>
			)}
		</div>
	);
}

export default App;
