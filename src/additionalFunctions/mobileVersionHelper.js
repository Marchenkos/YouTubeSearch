export default function mobileVersionHelper(callback) {
    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
}
