import ApplicationLogo from '@/Components/ApplicationLogo';
import { styles } from '../../css/Style.js';
import { Link } from '@inertiajs/react';

export default function AuthLayout({ children }) {
    return (
        <div style={styles.container} className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-[30px] mt-6" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-10 py-4 overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
