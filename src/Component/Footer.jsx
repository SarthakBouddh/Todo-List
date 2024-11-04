import React from 'react'

export const Footer = () => {
    const Year = new Date().getFullYear();
    return (
        <footer class="footer">
            <center>Copyright &copy; {Year}</center>
        </footer>
    )
}
