export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
          <small>{currentYear} &copy; rikke lindberg. All rights reserved.</small>
        </footer>
    )
}
