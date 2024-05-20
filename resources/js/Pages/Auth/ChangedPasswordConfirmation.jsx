import PrimaryButton from '@/Components/PrimaryButton';
import {Head, Link} from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout.jsx";
import Exitoso from '@/../../public/images/exitoso.png';

export default function ForgotPassword() {

    return (
        <AuthLayout>
            <Head title="Forgot Password" />

            <div className="forgot-password-container">
                <img src={Exitoso} className="h-[200px] mx-auto mb-6" alt="Exito"/>
                <p className="text-center text-xl text-white mb-2 font-bold">¡Listo!</p>
                <p className="text-white font-light mb-8 text-center mx-10">El cambio de tu contraseña fue exitoso</p>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="mt-4 w-full">
                        <PrimaryButton className="mt-4 w-full">
                            Entrar
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
