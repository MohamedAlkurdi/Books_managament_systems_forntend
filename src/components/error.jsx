import errorIMG from '../assets/404.png'

export default function Error(){
    return(
        <div className="error flex items-center justify-center flex-col gap-4">
            <img src={errorIMG} alt="error_vector" className='w-1/2 select-none'/>
            <p className='text-5xl'>An error occured, check the server...</p>
        </div>
    )
}