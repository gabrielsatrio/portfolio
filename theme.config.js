const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Gabriel Satrio Wibowo.
        {/* <a href="/feed.xml">RSS</a> */}
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  )
};
