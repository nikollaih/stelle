import Logo from '@/../../public/images/logo.png';
export default function ApplicationLogo({className = ""}) {
    return (
        <img src={Logo} alt="Stelle" className={className}/>
    );
}
