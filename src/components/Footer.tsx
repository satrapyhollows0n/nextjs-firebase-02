const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="container px-4 my-4 mx-auto">Copyright &copy; {currentYear}</footer>
    )
}