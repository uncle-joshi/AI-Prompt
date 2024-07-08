import "@styles/globals.css";
import Navbar from "@Components/Navbar";
import Provider from "@Components/Provider";

export const metadata = {
    title: "AI-PROMPT",
    description: "Discover and share AI-Prompts"
}

const layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Navbar />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default layout;