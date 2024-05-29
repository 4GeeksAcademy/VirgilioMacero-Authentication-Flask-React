const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			isLoged: false,

		},
		actions: {
			login: async (email, password) => {

				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ "email": email, "password": password })
				}

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/token", opts)
					if (resp.status === 404) {
						alert("The username does not exist")

					}
					else if (resp.status === 409) {

						alert("The password is incorrect")

					}
					else if (resp.status === 200) {
						const json = await resp.json()
						localStorage.setItem('token', json.token)
						document.location.href = '/home'
					}

				} catch (error) {
					console.error(error)
				}

			}, register: async (email, password) => {

				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ "email": email, "password": password })
				}

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/register", opts)
					if (resp.status !== 200) {
						alert("There has ben an error")
						return false
					}
					else {
						alert("User Created Successfuly")
						document.location.href = "/"
					}

				} catch (error) {
					console.error(error)
				}

			},
			validateLogin: () => {

				if (localStorage.getItem("token")) {

					setStore({ isLoged: true })

				}
				else {
					setStore({ isLoged: false })
				}

			},

		}
	};
};

export default getState;
