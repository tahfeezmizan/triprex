import facebookSvg from '../../assets/social/Facebook.svg';
import instaSvg from '../../assets/social/Instagram.svg';
import twitterSvg from '../../assets/social/Twitter.svg';
// import facebookSvg from '../../assets/social'

const Footer = () => {
    return (
        <footer className="footer py-28 bg-gray-100 text-base-content">
            <div className="w-full px-4 md:px-0 md:w-8/12 mx-auto">

                <div className="text-black grid grid-cols-2 xl:grid-cols-12 gap-28">
                    {/* Services Links */}
                    <div className="col-span-1 xl:col-span-3 text-center xl:text-start">
                        <nav className="flex flex-col">
                            <header className="text-black text-lg font-bold mb-4">Support</header>

                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Help Center</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Our COVID-19 Response</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Cancellation options</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Safety information</a>
                        </nav>
                    </div>

                    {/* Company Links */}
                    <div className="col-span-1 xl:col-span-3 text-center xl:text-start">
                        <nav className="flex flex-col">
                            <header className="text-black text-lg font-bold mb-4">Company</header>

                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">About us</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Community Blog</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Careers</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Privacy policy</a>
                        </nav>
                    </div>

                    {/* Legal Links */}
                    <div className="col-span-2 xl:col-span-2 text-center xl:text-start">
                        <nav className="flex flex-col">
                            <header className="text-black text-lg font-bold mb-4">Contact</header>

                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Partnerships</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">FAQ</a>
                            <a href="#" className="link text-base text-gray-700 leading-10 link-hover">Get in touch</a>
                        </nav>
                    </div>

                    <div className="col-span-2 lg:col-span-3">
                        <a href="#" className="text-3xl pb-5 text-black font-extrabold cursor-pointer">TripRex</a>

                        <div class="flex justify-end items-end gap-4 py-5">
                            <img src={facebookSvg} alt="SVG Image" />
                            <img src={twitterSvg} alt="SVG Image" />
                            <img src={instaSvg} alt="SVG Image" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;