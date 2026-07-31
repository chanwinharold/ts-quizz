import React from 'react';

function Footer(): React.JSX.Element {
    return (
        <footer className={`p-8 bg-surface-container-lowest`}>
            <div className={`flex justify-between`}>
                <span className={`text-xl`}>QuizMaster</span>
                <span className={`text-surface-tint text-sm`}>© 2024 QuizMaster. Expertly Energetic Learning</span>
            </div>
        </footer>
    );
}

export default Footer;