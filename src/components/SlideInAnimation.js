import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SlideInAnimation = ({ text }) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        setShouldAnimate(true);
    }, []);

    const slideInVariants = {
        initial: {
            y: '-50%',
            opacity: shouldAnimate ? 0.5 : 1
        },
        animate: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={slideInVariants}
            transition={{ duration: 0.9, type: 'tween' }}
        >
            {text}
        </motion.div>
    );
};

SlideInAnimation.propTypes = {
    text: PropTypes.string
};

export default SlideInAnimation;
