import PropTypes from 'prop-types'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

export default function Container({ children }) {
    return (
        <>
            <Navbar/>
                <main className="wrapper">
                    <div className="container">
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