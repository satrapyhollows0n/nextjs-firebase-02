import { ReactNode } from 'react';

type ChildrenProps = {
    children: ReactNode
}

export default function Content({ children }: ChildrenProps) {
    return (
        <section className='container px-4 my-4 mx-auto'>
            {children}
        </section>
    )
}