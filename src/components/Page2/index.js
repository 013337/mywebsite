import React from 'react';

function Page2() {
    return (
        <div className='py-4 sm:px-4 md:px-16 lg:px-28 xl:px-36 xl:pb-12'>
            <section>
                <h2 className='text-5xl'>My projects</h2>
                <br/>
                <p className='py-4'>
                Nullam pellentesque massa vitae massa pharetra volutpat. Ut auctor, purus facilisis iaculis interdum, massa nisi volutpat dolor, ut porta leo massa at urna. Curabitur vulputate rhoncus leo ac lobortis. 
                </p>
                <p className='pt-4 pb-16'>
                Pellentesque tempus bibendum nulla. Suspendisse ac elit vitae metus varius lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus tortor ut augue dignissim, at ultricies mauris malesuada.
                </p>
                <h2 className='text-5xl '>Skills</h2>
                <br/>
                <ul className='py-4'>
                <li className='pb-4'>Javascript, Node.js, Express.js, REST APIs</li>
                <li className='pb-4'>Front end: HTML, CSS, React.js </li>
                <li className='pb-4'>Back End: MySQL, MongoDB</li>
                <li className='pb-4'>Object-Oriented Programming</li>
                <li className='pb-4'>Object-Relational Mapping</li>
                <li className='pb-4'> Model-View-Controller</li>
                <li className='pb-4'>Progressive Web Applications</li>
                </ul>
                <p className='py-4'>
                </p>
            </section>
        </div>
    );
}

export default Page2;