'use client'

const Commitment = ({title, description, imageSRC}) => {
    return(
        <>
            <div className="mt-12">
            <img className="w-20 h-20 relative top-[150px] ml-4" src={imageSRC}></img>
            <h1 className="text-green-700 relative top-[150px] text-3xl font-Poppins ml-6 mb-4 mt-4 text-justify font-bold">{title}</h1>
            <p className="text-white relative top-36 text-justify ml-6 mr-6 font-Poppins">{description}</p>
            </div>
        </>
    )
}

export default Commitment