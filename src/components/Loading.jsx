import loadingIMG from '../assets/sync.png'

export default function Loading() {
    return (
        <div className="loading flex justify-center items-center flex-col gap-4">
            <img src={loadingIMG} alt="loading_vector" className='w-1/2 rotate_animation' />
            <p className='text-5xl'>Loading...</p>
        </div>
    )
}