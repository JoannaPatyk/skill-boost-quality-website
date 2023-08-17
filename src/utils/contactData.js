import React from 'react';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const contactData = [
    { icon: <HiOutlinePhone className="icon" />, text: '(+48) 000 000 000' },
    {
        icon: <HiOutlineMail className="icon" />,
        text: <a href="mailto:skill-boost-quality@gmail.com">skill-boost-quality@gmail.com</a>
    }
];

export default contactData;
