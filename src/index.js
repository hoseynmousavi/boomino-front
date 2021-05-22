import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import App from "./App"
import registerSW from "./serviceWorkerRegistration"
import withRouter from "./helpers/withRouter"

const WrappedApp = withRouter(App)

ReactDOM.render(
    <React.StrictMode>
        <WrappedApp/>
    </React.StrictMode>,
    document.getElementById("root"),
)

registerSW()
