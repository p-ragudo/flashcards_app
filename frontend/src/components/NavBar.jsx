import { useNavigate } from 'react-router';

const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
    <div className="w-full flex justify-between bg-[#DDDDE5] pb-4">
        <a
        href="/"
        className="text-[#334758] text-2xl font-bold"
        >
        LOGO
        </a>
        <button 
        onClick={handleNavigate}
        className="btn bg-[#334758] text-white rounded-full hover:bg-[#3d5469] px-8 text-[1rem]"
        >
        Create new set +
        </button>
    </div>
    )
}

export default NavBar
