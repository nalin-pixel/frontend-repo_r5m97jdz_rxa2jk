export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--line)]">
      <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-muted text-sm">© {new Date().getFullYear()} A. Hart — Interior Designer</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="mailto:studio@example.com" className="hover:underline">studio@example.com</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
