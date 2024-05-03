import { Link, Head } from '@inertiajs/react';
import Header from '@/Components/header/Header';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div><Header /></div>
        </>
    );
}
