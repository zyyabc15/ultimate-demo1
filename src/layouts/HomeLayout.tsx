import * as React from 'react';
interface Ilayout {
    title: string;
    children: object;
}
export default (props: Ilayout) => {
    const { title, children } = props;
    return (

        <div>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};