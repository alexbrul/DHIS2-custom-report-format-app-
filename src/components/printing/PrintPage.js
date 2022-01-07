import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

export default function PrintPage(props) {

    const { htmlArray } = props
    const componentRef = useRef();

    return (
        <div>
            <div>
                <ReactToPrint
                    trigger={() => <button>Print this out!</button>}
                    content={() => componentRef.current}
                />
                <div ref={componentRef} >
                {htmlArray.map(i => <div
                    dangerouslySetInnerHTML={{
                        __html: i
                    }}></div>)}
                </div>
            </div>

        </div>
    )
}
