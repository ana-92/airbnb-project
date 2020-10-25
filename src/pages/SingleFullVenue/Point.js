import React from 'react';

function Point(props) {
    const { pointDescription, point } = props;

    const { text: description } = pointDescription.find(({ pointTitle }) => pointTitle === point)

    return (
        <div>
            <div className="point-title">{point}</div>
            <div className="point-desc">{description}</div>
        </div>
    )
}

export default Point;