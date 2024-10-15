import { useState, createContext, useContext, useMemo } from "react";

import {
	CssBaseline,
	ThemeProvider,
	createTheme,
	Snackbar,
} from "@mui/material";

import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";

import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Register from "./pages/Register";

import AppDrawer from "./components/AppDrawer";

import { deepPurple, grey } from "@mui/material/colors";

const AppContext = createContext();

export function useApp() {
	return useContext(AppContext);
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
			{
				path: "/login",
				element: <Login/>,
			},
			{
				path: "/register",
				element: <Register/>,
			}
        ],
    },
]);

export default function ThemedApp() {
	const [showDrawer, setShowDrawer] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [globalMsg, setGlobalMsg] = useState(null);
	const [auth, setAuth] = useState(null);
	const [mode, setMode] = useState("dark");

	const theme = useMemo(() => {
		return createTheme({
			palette: {
				mode,
				primary: deepPurple,
				banner: mode === "dark" ? grey[800] : grey[200],
				text: {
					fade: grey[500],
				},
			},
		});
	}, [mode]);

	return (
		<ThemeProvider theme={theme}>
			<AppContext.Provider
				value={{
					showDrawer,
					setShowDrawer,
					showForm,
					setShowForm,
					globalMsg,
					setGlobalMsg,
					auth,
					setAuth,
					mode,
					setMode,
				}}>
				
				<AppDrawer />

				<Snackbar
					anchorOrigin={{
						horizontal: "center",
						vertical: "bottom",
					}}
					open={Boolean(globalMsg)}
					autoHideDuration={6000}
					onClose={() => setGlobalMsg(null)}
					message={globalMsg}
				/>
                <RouterProvider router={router}/>
				<CssBaseline />
			</AppContext.Provider>
		</ThemeProvider>
	);
}