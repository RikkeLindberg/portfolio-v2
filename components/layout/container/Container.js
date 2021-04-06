import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Container({ children }) {
    return (
        <>
            <Navbar/>
                <main>
                    <div>
                        { children }
                    </div>
                </main>
            <Footer />
        </>
    )
}

Container.propTypes = {
    children: PropTypes.element.isRequired,
};