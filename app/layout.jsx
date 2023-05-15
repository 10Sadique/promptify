import "@styles/globals.css";

export const metadata = {
    title: "Pomptify",
    description: "Get The Best AI Prompts out there!",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main"></div>
                <div className="gradient" />

                <main className="app">{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
