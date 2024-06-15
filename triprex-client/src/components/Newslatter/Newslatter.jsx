import newslatterImg from '../../assets/newslatterimage.png'

const Newslatter = () => {
    return (
        <div className='w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20'>
            <div className="flex flex-col md:flex-row gap-10 justify-between items-center border rounded-3xl overflow-hidden">
                <div className="flex-1">

                    <img src={newslatterImg} className='object-cover object-center obje w-full h-full' alt="" style={{ backgroundSize: 'contain', }} />
                </div>
                <div className="flex-1 text-center py-10">
                    <h2 className="text-3xl xl:text-4xl font-bold mb-5 px-2 lg:px-5 xl:px-20 ">Get special offers, and more from Traveler</h2>
                    <p className="px-8 lg:px-16 xl:px-40 pb-10">Subscribe to see secret deals prices drop the moment you sign up!</p>

                    <div className="rounded-full w-80  xl:w-[450px] lg:w-96 mx-auto bg-white border p-1 flex justify-between items-center pl-5 pr-1 ">
                        <input type="email" placeholder='Email Address' className='border-none outline-none' id="" />
                        <button className="btn rounded-full bg-[#d01818] text-xl text-white mr-10 md:mr-0">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;