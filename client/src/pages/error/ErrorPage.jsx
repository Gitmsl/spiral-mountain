import "../error/errorPage.css"

export default function ErrorPage() {
    return (
        <div id="errorPage">
            <h1 className="errorPageTitle">Oops!</h1>
            <p className="errorPageText">The page you're looking for does not exist.</p>
        </div>
    );
}