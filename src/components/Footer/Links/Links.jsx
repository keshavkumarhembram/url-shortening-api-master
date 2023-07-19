import classes from "./Links.module.css";

const Links = () => {
  return (
    <div className={classes['links-list']}>
      <div>
        <p>Features</p>
        <ul>
          <li>
            <a href="#link-shortening">Link Shortening</a>
          </li>
          <li>
            <a href="#branded-links">Branded Links</a>
          </li>
          <li>
            <a href="#analytics">Analytics</a>
          </li>
        </ul>
      </div>
      
      <div>
        <p>Resources</p>
        <ul>
          <li>
            <a href="#link-shortening">Blog</a>
          </li>
          <li>
            <a href="#branded-links">Developers</a>
          </li>
          <li>
            <a href="#analytics">Support</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Company</p>
        <ul>
          <li>
            <a href="#link-shortening">About</a>
          </li>
          <li>
            <a href="#branded-links">Our Team</a>
          </li>
          <li>
            <a href="#analytics">Careers</a>
          </li>
          <li>
            <a href="#analytics">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
