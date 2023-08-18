import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SlideInAnimation = ({ text }) => {
    const slideInVariants = {
        initial: {
            y: '-50%',
            opacity: 0
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
