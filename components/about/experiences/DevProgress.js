import Heading from '../../typography/Heading'

export default function DevProgress() {
    return (
        <div className="progress-bars">
            <Heading size="2" title="Development"/>
            <div className="progress">
                <div className="progress-title">
                    <span>HTML</span>
                </div>
                <div className="progress-line html">
                    <span></span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">
                    <span>CSS</span>
                </div>
                <div className="progress-line css">
                    <span></span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">
                    <span>Sass</span>
                </div>
                <div className="progress-line sass">
                    <span></span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">
                    <span>JS</span>
                </div>
                <div className="progress-line js">
                    <span></span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">
                    <span>React</span>
                </div>
                <div className="progress-line react">
                    <span></span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">
                    <span>Next</span>
                </div>
                <div className="progress-line next">
                    <span></span>
                </div>
            </div>
            <div className="progress">
                <div className="progress-title">
                    <span>TypeScript</span>
                </div>
                <div className="progress-line ts">
                    <span></span>
                </div>
            </div>
        </div>
    )
}
