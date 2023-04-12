import Head from 'next/head';
import Header from '@/components/header';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-morandi-50">
            <Head>
                <title>My Website</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <div className="flex-1 px-8 py-12 max-w-7xl mx-auto">{children}</div>
        </div>
    );
};

export default Layout;
