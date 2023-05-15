import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
    title: "Pomptify",
    description: "Get The Best AI Prompts out there!",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
