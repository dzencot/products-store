import React from 'react';

const Footer = () => (
        <footer className='py-4 text-bg-dark'>
            <div className='container b-share text-center'>
                {'created by '}
                <a
                    href='https://ru.hexlet.io'
                    target='_blank'
                    rel='noreferrer'
                    className='text-decoration-none'
                >
                    Hexlet
                </a>
                <p>version 1</p>
            </div>
        </footer>
);

export default Footer;
