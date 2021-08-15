import React from 'react';

const illustrationsdata = [
    {
        title: "Illustrations",
        imgsrc: "illustration01.svg"
    },
    {
        title: "More Illustrations",
        imgsrc: "illustration02.svg"
    }
]
function Illustrations() {
    return (
        <>
            {
                illustrationsdata.map(obj => {
                    return <FinalIllustrations data={obj} />
                })
            }

        </>
    )
}

export default Illustrations;

function FinalIllustrations({ data }) {
    return (<>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{data.title}</h6>
            </div>
            <div class="card-body">
                <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }}
                        src={data.imgsrc} alt="illustration" />
                </div>
            </div>
        </div>
    </>)
}
