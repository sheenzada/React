import { MotorbikeIcon } from "lucide-react";
import React from 'react';
import {motion} from 'framer-motion';

function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <header className="py-20 bg-blue-500 text-white">
                <div className="container mx-auto px-4">
                    <motion.h1
                    initial={{ opacity: 0, y: -20}}
                    animate={{ opacity: 1, y: 0}}
                    transition = {{duration: 0.5}}
                    className="text-5xl font-bold"
                    >
                        InamUllah
                    </motion.h1>
                    <p className="text-xl mt-4">Frontend Develper & Designer</p>
                </div>
            </header>

            <section className="py-20">
                <div className= "container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-lg">
                        I'm InamUllah ! I'm a passionate frontend developer with a love creating beautiful and functionl websites.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-200 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                        whileHover = {{ scale: 1.05}}
                        className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl fonnt-bold mb-2">Project 1</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                A brief description of the project.
                            </p>
                        </motion.div>
                        <motion.div
                        whileHover={{ scale: 1.05}}
                        className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold mb-2">Project 2</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                A brief description of the project.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Portfolio;