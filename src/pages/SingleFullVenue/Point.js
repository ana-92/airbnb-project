import React from 'react';

function Point(props) {
    const { pointDesc } = props;

    const descObj = pointDesc.find((point) => point.pointTitle === props.point)

    return (
        <div>
            <div className="point-title">{props.point}</div>
            <div className="point-desc">{descObj.text}</div>
        </div>
    )
}

export default Point;