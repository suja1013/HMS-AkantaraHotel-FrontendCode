const FooterComponent = () => {

    // Footer section displayed at the bottom of the page
    return (
        <footer>
            <span className="my-footer">
                {/* Footer text showing hotel name, rights, and current year */}
                Akantara Hotel | All Rights Reserved &copy; {new Date().getFullYear()} | Comfort & Luxury Await You
            </span>
        </footer>
    );
};

export default FooterComponent;