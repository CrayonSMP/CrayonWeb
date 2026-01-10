import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center bg-gray-900">
            <div className="section-card p-8 w-full max-w-md text-center">
                <h1 className="text-5xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-gray-300 mb-6">Seite nicht gefunden</p>
                <Link to="/" className="cta-button primary">
                    Zur Startseite
                </Link>
            </div>
        </section>
    );
}

export default NotFound;