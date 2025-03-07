import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';

const FooterAfterLogin = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; {new Date().getFullYear()} Foot Smart. All rights reserved.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#5e0000',
        borderTop: '6px solid #DCAC3C',
        color: '#DCAC3C',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height : '50px',
        textAlign: 'center',

    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
};

export default FooterAfterLogin;